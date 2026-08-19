import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  ArrowLeft,
  Camera,
  RotateCw,
  RefreshCw,
  Sparkles,
  SwitchCamera,
  CheckCircle2,
  Download,
  Crosshair,
  Move,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Layers,
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
  const [modelLoading, setModelLoading] = useState<boolean>(true);
  const [isPlaced, setIsPlaced] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0.35); // Comfortable non-zoomed initial size
  const [snapFlash, setSnapFlash] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const reticleRef = useRef<THREE.Group | null>(null);
  const groundPlaneRef = useRef<THREE.Mesh | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, -0.2));
  const animFrameIdRef = useRef<number>(0);

  const touchStateRef = useRef<{
    startX: number;
    startY: number;
    startDistance: number;
    startScale: number;
    isInteracting: boolean;
    hasMoved: boolean;
  }>({
    startX: 0,
    startY: 0,
    startDistance: 0,
    startScale: 0.35,
    isInteracting: false,
    hasMoved: false,
  });

  const gyroRef = useRef<{ beta: number; gamma: number }>({ beta: 0, gamma: 0 });

  const displayName = currentLanguage !== 'en' && monument.hindiName ? monument.hindiName : monument.name;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // 1. Live Camera Stream
  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        if (stream) {
          stream.getTracks().forEach((t) => t.stop());
        }

        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: cameraFacing },
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: false,
        });

        stream = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          await videoRef.current.play();
        }
      } catch (err) {
        try {
          const fallback = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          stream = fallback;
          if (videoRef.current) {
            videoRef.current.srcObject = fallback;
            await videoRef.current.play();
          }
        } catch (e) {
          showToast('Camera permission needed for live background');
        }
      }
    };

    startCamera();

    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, [cameraFacing]);

  // 2. Gyroscope orientation
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        gyroRef.current = { beta: e.beta, gamma: e.gamma };
      }
    };
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // 3. Three.js Engine & Surface Plane Scanner Reticle
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Realistic Wide-Angle AR Camera at Eye-Level (Looking Down at Ground)
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 1.4, 3.5); // 1.4m standing eye height, 3.5m back
    camera.lookAt(0, -0.4, 0); // Looking down toward the floor/desk
    cameraRef.current = camera;

    // WebGL Renderer
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
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    dirLight.position.set(2, 6, 3);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xcfd8dc, 0.9);
    fillLight.position.set(-3, 3, -1);
    scene.add(fillLight);

    // Infinite Invisible Virtual Ground Plane for Surface Raycasting & Contact Shadows
    const groundGeo = new THREE.PlaneGeometry(20, 20);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.45 });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.7; // Floor level
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);
    groundPlaneRef.current = groundMesh;

    // Surface Scanning Ring / Reticle
    const reticleGroup = new THREE.Group();
    reticleGroup.position.set(0, -0.69, 0);

    // Outer Ring
    const ringGeo = new THREE.RingGeometry(0.28, 0.32, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x4c35de,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    reticleGroup.add(ringMesh);

    // Inner Glowing Center Dot
    const dotGeo = new THREE.CircleGeometry(0.06, 16);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide });
    const dotMesh = new THREE.Mesh(dotGeo, dotMat);
    dotMesh.rotation.x = -Math.PI / 2;
    reticleGroup.add(dotMesh);

    scene.add(reticleGroup);
    reticleRef.current = reticleGroup;

    // Monument Model Group
    const modelGroup = new THREE.Group();
    modelGroup.position.set(0, -0.7, 0); // Placed directly on ground
    modelGroup.visible = false; // Initially hidden until placed or loaded
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Load 3D Monument GLB
    const loader = new GLTFLoader();
    loader.load(
      monument.glbModelPath,
      (gltf) => {
        const root = gltf.scene;

        const bbox = new THREE.Box3().setFromObject(root);
        const center = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        // Normalize to a 1-meter bounding box in 3D world units
        const normScale = 1.0 / (maxDim || 1);

        root.position.sub(center);
        root.position.y += size.y / 2; // Sits precisely on ground plane

        root.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        modelGroup.add(root);
        // Apply scaled size (0.35 = ~35cm tabletop model, comfortably fits in camera view without clipping)
        modelGroup.scale.setScalar(0.35 * normScale);

        setModelLoading(false);
        // Default place in front
        modelGroup.visible = true;
        setIsPlaced(true);
        showToast('🎯 Surface Detected! Tap on floor to place monument.');
      },
      undefined,
      (err) => {
        console.error(err);
        setModelLoading(false);
      }
    );

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();

      // Animate pulsing reticle
      if (reticleRef.current) {
        const s = 1.0 + Math.sin(delta * 4) * 0.08;
        reticleRef.current.scale.set(s, s, s);
      }

      // Gyroscope subtle tilt perspective
      if (modelGroupRef.current && isPlaced) {
        const { beta, gamma } = gyroRef.current;
        if (beta && gamma) {
          const targetRotX = THREE.MathUtils.degToRad(Math.max(-15, Math.min(15, (beta - 50) * 0.2)));
          const targetRotZ = THREE.MathUtils.degToRad(Math.max(-15, Math.min(15, -gamma * 0.2)));
          modelGroupRef.current.rotation.x = THREE.MathUtils.lerp(modelGroupRef.current.rotation.x, targetRotX, 0.04);
          modelGroupRef.current.rotation.z = THREE.MathUtils.lerp(modelGroupRef.current.rotation.z, targetRotZ, 0.04);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

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

  // Tap-to-Place on Ground Surface
  const handleSurfaceTap = (clientX: number, clientY: number) => {
    if (!containerRef.current || !cameraRef.current || !groundPlaneRef.current || !modelGroupRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
    const intersects = raycasterRef.current.intersectObject(groundPlaneRef.current);

    if (intersects.length > 0) {
      const hitPoint = intersects[0].point;

      // Position model at hit point on the floor
      modelGroupRef.current.position.set(hitPoint.x, -0.7, hitPoint.z);
      modelGroupRef.current.visible = true;

      if (reticleRef.current) {
        reticleRef.current.position.set(hitPoint.x, -0.69, hitPoint.z);
      }

      setIsPlaced(true);
      showToast('📍 Monument locked to physical surface!');
    }
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStateRef.current = {
        ...touchStateRef.current,
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        isInteracting: true,
        hasMoved: false,
      };
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStateRef.current = {
        ...touchStateRef.current,
        startDistance: Math.hypot(dx, dy),
        startScale: scale,
        isInteracting: true,
        hasMoved: true,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStateRef.current.isInteracting || !modelGroupRef.current) return;

    if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - touchStateRef.current.startX;
      const dy = e.touches[0].clientY - touchStateRef.current.startY;

      if (Math.hypot(dx, dy) > 6) {
        touchStateRef.current.hasMoved = true;
        // 1-finger drag: Rotate model
        modelGroupRef.current.rotation.y += dx * 0.01;
        touchStateRef.current.startX = e.touches[0].clientX;
        touchStateRef.current.startY = e.touches[0].clientY;
      }
    } else if (e.touches.length === 2) {
      touchStateRef.current.hasMoved = true;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);

      const ratio = dist / (touchStateRef.current.startDistance || 1);
      const newScale = Math.max(0.1, Math.min(1.5, touchStateRef.current.startScale * ratio));

      setScale(newScale);
      modelGroupRef.current.scale.setScalar(newScale);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // If it was a quick tap without drag -> perform tap-to-place!
    if (!touchStateRef.current.hasMoved && e.changedTouches.length > 0) {
      const touch = e.changedTouches[0];
      handleSurfaceTap(touch.clientX, touch.clientY);
    }
    touchStateRef.current.isInteracting = false;
  };

  // Scale Presets
  const handleSetScalePreset = (presetScale: number) => {
    setScale(presetScale);
    if (modelGroupRef.current) {
      modelGroupRef.current.scale.setScalar(presetScale);
      showToast(`Scale updated: ${(presetScale * 100).toFixed(0)}%`);
    }
  };

  // Capture Photo
  const handleCapturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    setSnapFlash(true);
    setTimeout(() => setSnapFlash(false), 200);

    const merged = document.createElement('canvas');
    merged.width = canvas.width;
    merged.height = canvas.height;
    const ctx = merged.getContext('2d');
    if (!ctx) return;

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
      ctx.fillStyle = '#141828';
      ctx.fillRect(0, 0, merged.width, merged.height);
    }

    ctx.drawImage(canvas, 0, 0);

    // Seal
    ctx.fillStyle = 'rgba(20, 24, 40, 0.88)';
    ctx.fillRect(20, merged.height - 75, 340, 52);
    ctx.strokeStyle = '#4c35de';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, merged.height - 75, 340, 52);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 17px Outfit, sans-serif';
    ctx.fillText(displayName, 34, merged.height - 44);

    ctx.fillStyle = '#ff9933';
    ctx.font = '12px Plus Jakarta Sans, sans-serif';
    ctx.fillText('SanskritiSetu • Physical Surface AR', 34, merged.height - 26);

    const link = document.createElement('a');
    link.download = `SanskritiSetu-AR-${monument.id}-${Date.now()}.png`;
    link.href = merged.toDataURL('image/png');
    link.click();

    showToast('📸 AR Photo saved to your gallery!');
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

      {/* 2. WebGL 3D Canvas */}
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

      {/* 3. Screen Flash */}
      {snapFlash && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#ffffff',
          zIndex: 100,
          animation: 'fade-out 0.2s forwards',
        }} />
      )}

      {/* 4. Top Controls Header */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        right: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(20, 24, 40, 0.88)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        padding: '8px 14px',
        zIndex: 50,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
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
          <span style={{ fontSize: '0.62rem', color: isPlaced ? '#10b981' : '#ff9933', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
            <Crosshair size={10} />
            <span>{isPlaced ? 'Surface Locked' : 'Scanning Floor/Desk'}</span>
          </span>
        </div>

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

      {/* 5. Center Toast Feedback */}
      {toastMessage && (
        <div style={{
          position: 'absolute',
          top: '76px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(76, 53, 222, 0.95)',
          backdropFilter: 'blur(12px)',
          color: '#ffffff',
          padding: '8px 18px',
          borderRadius: '20px',
          fontSize: '0.74rem',
          fontWeight: 800,
          zIndex: 60,
          boxShadow: '0 4px 20px rgba(76, 53, 222, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}>
          {toastMessage}
        </div>
      )}

      {/* 6. Surface Scan Guidance Banner (If not placed or repositioning) */}
      <div style={{
        position: 'absolute',
        top: '118px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(20, 24, 40, 0.85)',
        backdropFilter: 'blur(10px)',
        color: '#ffffff',
        padding: '5px 14px',
        borderRadius: '14px',
        fontSize: '0.68rem',
        fontWeight: 700,
        zIndex: 45,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
      }}>
        <Crosshair size={12} color="#10b981" />
        <span>Tap any spot on floor/desk to anchor monument</span>
      </div>

      {/* 7. Loading Spinner */}
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
          <strong style={{ fontSize: '0.9rem', marginBottom: '4px' }}>Loading 3D Geometry...</strong>
          <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Calibrating surface distance</span>
        </div>
      )}

      {/* 8. Bottom Toolbar & Scale Controls */}
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
        {/* Scale Presets Pill */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(20, 24, 40, 0.9)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          padding: '8px 12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 800 }}>Size:</span>
            <button
              onClick={() => handleSetScalePreset(0.2)}
              style={{
                background: scale < 0.28 ? '#4c35de' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '4px 8px',
                borderRadius: '8px',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Mini (20%)
            </button>
            <button
              onClick={() => handleSetScalePreset(0.35)}
              style={{
                background: scale >= 0.28 && scale <= 0.45 ? '#4c35de' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '4px 8px',
                borderRadius: '8px',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Table (35%)
            </button>
            <button
              onClick={() => handleSetScalePreset(0.7)}
              style={{
                background: scale > 0.45 ? '#4c35de' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '4px 8px',
                borderRadius: '8px',
                fontSize: '0.66rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Room (70%)
            </button>
          </div>

          <button
            onClick={() => {
              if (modelGroupRef.current) {
                modelGroupRef.current.position.set(0, -0.7, 0);
                modelGroupRef.current.rotation.set(0, 0, 0);
                handleSetScalePreset(0.35);
              }
            }}
            title="Reset Position"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              color: '#ffffff',
              padding: '4px 10px',
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
            <span>Center</span>
          </button>
        </div>

        {/* Shutter Capture Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{
            fontSize: '0.66rem',
            color: '#cbd5e1',
            background: 'rgba(20, 24, 40, 0.8)',
            padding: '6px 12px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span>👆 Tap floor to place</span>
            <span>•</span>
            <span>🖐️ Swipe to turn</span>
          </div>

          <button
            onClick={handleCapturePhoto}
            title="Take AR Photo"
            style={{
              width: '58px',
              height: '58px',
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
