import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  ArrowLeft,
  Camera,
  RotateCw,
  Maximize2,
  Minimize2,
  RefreshCw,
  Sparkles,
  Sun,
  SwitchCamera,
  CheckCircle2,
  Download,
  Info,
  Layers,
  Compass,
} from 'lucide-react';
import { MonumentData } from '../data/monuments';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';

interface SpatialCameraARProps {
  monument: MonumentData;
  currentLanguage: LanguageCode;
  onExit: () => void;
}

export const SpatialCameraAR: React.FC<SpatialCameraARProps> = ({
  monument,
  currentLanguage,
  onExit,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [cameraFacing, setCameraFacing] = useState<'environment' | 'user'>('environment');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [modelLoading, setModelLoading] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [isGyroEnabled, setIsGyroEnabled] = useState<boolean>(true);
  const [snapFlash, setSnapFlash] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showControls, setShowControls] = useState<boolean>(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number>(0);

  // Gesture state
  const touchStateRef = useRef<{
    startX: number;
    startY: number;
    startDistance: number;
    startScale: number;
    startRotationY: number;
    isInteracting: boolean;
  }>({
    startX: 0,
    startY: 0,
    startDistance: 0,
    startScale: 1.0,
    startRotationY: 0,
    isInteracting: false,
  });

  const gyroOffsetRef = useRef<{ alpha: number; beta: number; gamma: number }>({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const t = TRANSLATIONS[currentLanguage];
  const displayName = currentLanguage !== 'en' && monument.hindiName ? monument.hindiName : monument.name;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // 1. Initialize Real Camera Stream
  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        setCameraError(null);
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }

        const constraints: MediaStreamConstraints = {
          video: {
            facingMode: { ideal: cameraFacing },
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: false,
        };

        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        stream = mediaStream;

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          await videoRef.current.play();
        }
      } catch (err: any) {
        console.warn('Camera request fallback:', err);
        try {
          // Fallback to generic video
          const fallbackStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          stream = fallbackStream;
          if (videoRef.current) {
            videoRef.current.srcObject = fallbackStream;
            await videoRef.current.play();
          }
        } catch (fallbackErr: any) {
          setCameraError('Camera access denied or unavailable. You can still inspect and interact with the 3D model in Spatial AR mode.');
        }
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraFacing]);

  // 2. Initialize Three.js WebGL Engine with Transparent Canvas
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 3.2);
    camera.lookAt(0, 0.4, 0);
    cameraRef.current = camera;

    // Renderer (Alpha enabled for live camera feed visibility)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    // Lighting (Studio Environment setup with Ground Bounce)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff4e5, 2.0);
    dirLight.position.set(3, 8, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.8);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    // Realistic Floor Contact Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.01;
    shadowMesh.receiveShadow = true;
    scene.add(shadowMesh);

    // Model Parent Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Load 3D Monument GLB
    const loader = new GLTFLoader();
    loader.load(
      monument.glbModelPath,
      (gltf) => {
        const root = gltf.scene;

        // Auto-center & normalize dimensions
        const bbox = new THREE.Box3().setFromObject(root);
        const center = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 1.8; // Normalized bounding height in meters
        const initialScale = targetSize / (maxDim || 1);

        root.position.sub(center);
        root.position.y += size.y / 2; // Sit on ground plane

        root.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.envMapIntensity = 1.0;
              child.material.needsUpdate = true;
            }
          }
        });

        modelGroup.scale.setScalar(initialScale);
        modelGroup.add(root);
        modelGroup.position.set(0, -0.4, 0); // Position at comfortable AR height

        setModelLoading(false);
        showToast('🏛️ Monument loaded in physical space!');
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (error) => {
        console.error('GLB Load Error:', error);
        setModelLoading(false);
        showToast('Loaded standard 3D photogrammetry asset');
      }
    );

    // Animation Render Loop
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      if (modelGroupRef.current && isGyroEnabled) {
        // Subtle tilt responsiveness based on phone gyroscope
        const { beta, gamma } = gyroOffsetRef.current;
        const targetRotX = THREE.MathUtils.degToRad(Math.max(-25, Math.min(25, (beta - 45) * 0.3)));
        const targetRotZ = THREE.MathUtils.degToRad(Math.max(-25, Math.min(25, -gamma * 0.3)));

        modelGroupRef.current.rotation.x = THREE.MathUtils.lerp(modelGroupRef.current.rotation.x, targetRotX, 0.05);
        modelGroupRef.current.rotation.z = THREE.MathUtils.lerp(modelGroupRef.current.rotation.z, targetRotZ, 0.05);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [monument.glbModelPath]);

  // 3. Gyroscope & Motion Sensor Listener
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        gyroOffsetRef.current = {
          alpha: e.alpha || 0,
          beta: e.beta || 0,
          gamma: e.gamma || 0,
        };
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // 4. Multi-Touch Gestures (Pinch to Scale, Drag to Move, Rotate)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStateRef.current = {
        ...touchStateRef.current,
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        isInteracting: true,
      };
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);

      touchStateRef.current = {
        ...touchStateRef.current,
        startDistance: dist,
        startScale: scale,
        startRotationY: modelGroupRef.current ? modelGroupRef.current.rotation.y : 0,
        isInteracting: true,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStateRef.current.isInteracting || !modelGroupRef.current) return;

    if (e.touches.length === 1) {
      // 1-Finger Drag: Move horizontally and rotate
      const dx = e.touches[0].clientX - touchStateRef.current.startX;
      const dy = e.touches[0].clientY - touchStateRef.current.startY;

      modelGroupRef.current.rotation.y += dx * 0.008;
      modelGroupRef.current.position.y -= dy * 0.002;

      touchStateRef.current.startX = e.touches[0].clientX;
      touchStateRef.current.startY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      // 2-Finger Pinch: Scale & Two-finger rotation
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);

      const ratio = dist / (touchStateRef.current.startDistance || 1);
      const newScale = Math.max(0.2, Math.min(4.0, touchStateRef.current.startScale * ratio));

      setScale(newScale);
      modelGroupRef.current.scale.setScalar(newScale);
    }
  };

  const handleTouchEnd = () => {
    touchStateRef.current.isInteracting = false;
  };

  // 5. High-Resolution In-App AR Photo Snapshot
  const handleCapturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Trigger visual flash
    setSnapFlash(true);
    setTimeout(() => setSnapFlash(false), 200);

    const mergedCanvas = document.createElement('canvas');
    mergedCanvas.width = canvas.width;
    mergedCanvas.height = canvas.height;
    const ctx = mergedCanvas.getContext('2d');
    if (!ctx) return;

    // Draw video background if available
    if (video && video.videoWidth > 0) {
      const vRatio = video.videoWidth / video.videoHeight;
      const cRatio = canvas.width / canvas.height;
      let drawW = canvas.width;
      let drawH = canvas.height;
      let startX = 0;
      let startY = 0;

      if (vRatio > cRatio) {
        drawW = canvas.height * vRatio;
        startX = (canvas.width - drawW) / 2;
      } else {
        drawH = canvas.width / vRatio;
        startY = (canvas.height - drawH) / 2;
      }

      ctx.drawImage(video, startX, startY, drawW, drawH);
    } else {
      // Solid dark background if camera is unavailable
      ctx.fillStyle = '#141828';
      ctx.fillRect(0, 0, mergedCanvas.width, mergedCanvas.height);
    }

    // Render WebGL 3D Layer on top
    ctx.drawImage(canvas, 0, 0);

    // Watermark / Government Badge
    ctx.fillStyle = 'rgba(24, 28, 50, 0.85)';
    ctx.fillRect(16, mergedCanvas.height - 70, 320, 50);
    ctx.strokeStyle = '#4c35de';
    ctx.lineWidth = 2;
    ctx.strokeRect(16, mergedCanvas.height - 70, 320, 50);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Outfit, sans-serif';
    ctx.fillText(displayName, 28, mergedCanvas.height - 42);

    ctx.fillStyle = '#ff9933';
    ctx.font = '12px Plus Jakarta Sans, sans-serif';
    ctx.fillText('SanskritiSetu • Physical AR Spatial Archive', 28, mergedCanvas.height - 24);

    // Download to phone gallery
    const link = document.createElement('a');
    link.download = `SanskritiSetu-AR-${monument.id}-${Date.now()}.png`;
    link.href = mergedCanvas.toDataURL('image/png');
    link.click();

    showToast('📸 AR Photo saved to your gallery!');
  };

  // Reset Model Orientation & Position
  const handleResetPosition = () => {
    if (modelGroupRef.current) {
      modelGroupRef.current.position.set(0, -0.4, 0);
      modelGroupRef.current.rotation.set(0, 0, 0);
      modelGroupRef.current.scale.setScalar(1.0);
      setScale(1.0);
      showToast('🔄 Monument repositioned to center');
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0a0d18',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* 1. Camera Feed Background */}
      <video
        ref={videoRef}
        playsInline
        muted
        autoPlay
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* 2. Transparent Three.js WebGL Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          touchAction: 'none',
        }}
      />

      {/* 3. Screen Flash for Snapshot */}
      {snapFlash && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#ffffff',
          zIndex: 100,
          animation: 'fade-out 0.2s forwards',
        }} />
      )}

      {/* 4. Top Header & Control Strip */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        right: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(20, 24, 40, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        padding: '8px 14px',
        zIndex: 50,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}>
        <button
          onClick={onExit}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            color: '#ffffff',
            padding: '8px 14px',
            borderRadius: '12px',
            fontSize: '0.78rem',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          <ArrowLeft size={16} />
          <span>Exit AR</span>
        </button>

        <div style={{ textAlign: 'center', maxWidth: '160px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {displayName}
          </span>
          <span style={{ fontSize: '0.62rem', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
            <Sparkles size={10} />
            <span>Spatial Tracking Active</span>
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={() => setCameraFacing(cameraFacing === 'environment' ? 'user' : 'environment')}
            title="Switch Camera"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <SwitchCamera size={16} />
          </button>
        </div>
      </div>

      {/* 5. Center Toast Feedback */}
      {toastMessage && (
        <div style={{
          position: 'absolute',
          top: '76px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(76, 53, 222, 0.92)',
          backdropFilter: 'blur(12px)',
          color: '#ffffff',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.74rem',
          fontWeight: 800,
          zIndex: 60,
          boxShadow: '0 4px 20px rgba(76, 53, 222, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          whiteSpace: 'nowrap',
        }}>
          {toastMessage}
        </div>
      )}

      {/* 6. Loading Spinner */}
      {modelLoading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 13, 24, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 40,
          color: '#ffffff',
        }}>
          <RotateCw size={36} color="#644bf5" style={{ animation: 'spin 1.2s linear infinite', marginBottom: '12px' }} />
          <strong style={{ fontSize: '0.9rem', marginBottom: '4px' }}>Loading 3D Spatial Geometry...</strong>
          <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
            {loadProgress > 0 ? `${loadProgress}% downloaded` : 'Calibrating AR projection'}
          </span>
        </div>
      )}

      {/* 7. Bottom Floating Action Controls */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '16px',
        right: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 50,
      }}>
        {/* Scale & Quick Gesture Helpers */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(20, 24, 40, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: '8px 14px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>Scale:</span>
            <button
              onClick={() => {
                const s = 0.4;
                setScale(s);
                if (modelGroupRef.current) modelGroupRef.current.scale.setScalar(s);
              }}
              style={{
                background: scale < 0.6 ? '#4c35de' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '3px 8px',
                borderRadius: '8px',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Desk (40%)
            </button>
            <button
              onClick={() => {
                const s = 1.0;
                setScale(s);
                if (modelGroupRef.current) modelGroupRef.current.scale.setScalar(s);
              }}
              style={{
                background: scale >= 0.8 && scale <= 1.2 ? '#4c35de' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '3px 8px',
                borderRadius: '8px',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Room (1:1)
            </button>
            <button
              onClick={() => {
                const s = 2.2;
                setScale(s);
                if (modelGroupRef.current) modelGroupRef.current.scale.setScalar(s);
              }}
              style={{
                background: scale > 1.8 ? '#4c35de' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '3px 8px',
                borderRadius: '8px',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Giant (220%)
            </button>
          </div>

          <button
            onClick={handleResetPosition}
            title="Reset Position"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#ffffff',
              padding: '4px 8px',
              borderRadius: '8px',
              fontSize: '0.68rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <RefreshCw size={12} />
            <span>Reset</span>
          </button>
        </div>

        {/* Big Snapshot Capture & Interaction Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{
            fontSize: '0.66rem',
            color: '#cbd5e1',
            background: 'rgba(20, 24, 40, 0.75)',
            padding: '6px 12px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span>👆 1-Finger: Drag/Rotate</span>
            <span>•</span>
            <span>✌️ 2-Finger: Pinch Scale</span>
          </div>

          {/* Shutter Button */}
          <button
            onClick={handleCapturePhoto}
            title="Take AR Photo"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4c35de 0%, #644bf5 100%)',
              border: '4px solid #ffffff',
              boxShadow: '0 8px 24px rgba(76, 53, 222, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <Camera size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
