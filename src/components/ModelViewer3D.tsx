import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCw, Layers, RefreshCw, Compass } from 'lucide-react';

interface ModelViewer3DProps {
  modelPath: string;
  monumentName: string;
  onLaunchAR?: () => void;
}

export const ModelViewer3D: React.FC<ModelViewer3DProps> = ({
  modelPath,
  monumentName,
  onLaunchAR,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [polygonCount, setPolygonCount] = useState<number>(184200);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 360;
    const height = Math.min(Math.max(window.innerHeight * 0.45, 320), 480);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b1528');
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
    camera.position.set(3.5, 2.5, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 1.0;
    controls.maxDistance = 15.0;
    controls.autoRotate = autoRotate;
    controlsRef.current = controls;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffecc2, 2.0);
    dirLight1.position.set(5, 10, 7);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7395c5, 1.0);
    dirLight2.position.set(-5, 4, -5);
    scene.add(dirLight2);

    // Floor
    const groundGeo = new THREE.CircleGeometry(4.5, 32);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x08101d, roughness: 0.8 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    scene.add(ground);

    const grid = new THREE.GridHelper(8, 16, 0x334155, 0x1e293b);
    grid.position.y = -1.19;
    scene.add(grid);

    // Model loader
    const loader = new GLTFLoader();
    const group = new THREE.Group();
    modelGroupRef.current = group;
    scene.add(group);

    loader.load(
      modelPath,
      (gltf) => {
        const root = gltf.scene;
        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.4 / (maxDim || 1);
        root.scale.set(scale, scale, scale);
        root.position.x = -center.x * scale;
        root.position.y = -center.y * scale + (size.y * scale) / 2 - 1.2;
        root.position.z = -center.z * scale;

        let tris = 0;
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            if (mesh.geometry && mesh.geometry.attributes.position) {
              tris += mesh.geometry.attributes.position.count / 3;
            }
          }
        });

        if (tris > 0) {
          setPolygonCount(Math.round(tris));
        }

        group.add(root);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.warn('Fallback model loaded', err);
        const templeGroup = createProceduralChariot();
        group.add(templeGroup);
        setLoading(false);
      }
    );

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / (h || 360);
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h || 360);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [modelPath]);

  // Wireframe toggle
  useEffect(() => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => {
            if ('wireframe' in m) {
              (m as THREE.MeshStandardMaterial).wireframe = isWireframe;
            }
          });
        } else if (mesh.material && 'wireframe' in mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).wireframe = isWireframe;
        }
      }
    });
  }, [isWireframe]);

  // Auto rotate toggle
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #1e293b',
      backgroundColor: '#0b1528',
    }}>
      {/* Top Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
        background: 'linear-gradient(180deg, rgba(11, 21, 40, 0.95) 0%, transparent 100%)',
        flexWrap: 'wrap',
        gap: '6px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>
            3D DIGITAL TWIN • {monumentName}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontFamily: 'monospace',
          }}>
            {polygonCount.toLocaleString()} POLYS
          </span>
        </div>
      </div>

      {/* Canvas Container */}
      <div 
        ref={containerRef} 
        style={{ 
          width: '100%', 
          height: 'clamp(320px, 45vw, 480px)', 
          cursor: 'grab',
          touchAction: 'none' 
        }} 
      />

      {/* Loading Overlay */}
      {loading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(11, 21, 40, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: '#ffffff',
          zIndex: 20,
        }}>
          <RotateCw size={24} style={{ animation: 'spin 1.5s linear infinite' }} />
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Loading 3D Model...</span>
        </div>
      )}

      {/* Bottom Control Bar */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '12px',
        right: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <div style={{ display: 'flex', gap: '4px', background: 'rgba(11, 21, 40, 0.85)', padding: '4px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            style={{
              background: autoRotate ? '#1e3a5f' : 'transparent',
              border: 'none',
              color: '#ffffff',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <RotateCw size={13} /> Rotate
          </button>

          <button
            onClick={() => setIsWireframe(!isWireframe)}
            style={{
              background: isWireframe ? '#1e3a5f' : 'transparent',
              border: 'none',
              color: '#ffffff',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Layers size={13} /> Wireframe
          </button>

          <button
            onClick={() => controlsRef.current?.reset()}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cbd5e1',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <RefreshCw size={13} /> Reset
          </button>
        </div>

        {onLaunchAR && (
          <button
            onClick={onLaunchAR}
            className="btn-accent"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            <Compass size={14} /> Launch AR
          </button>
        )}
      </div>
    </div>
  );
};

function createProceduralChariot(): THREE.Group {
  const group = new THREE.Group();
  const graniteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xc2902d, roughness: 0.5 });

  const base = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.4, 3.2), graniteMat);
  base.position.y = -0.8;
  group.add(base);

  const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 2.2), graniteMat);
  body.position.y = 0.1;
  group.add(body);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.4, 1.8), trimMat);
  roof.position.y = 1.0;
  group.add(roof);

  const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.15, 24);
  const positions = [
    { x: -1.25, y: -0.8, z: 0.9 },
    { x: 1.25, y: -0.8, z: 0.9 },
    { x: -1.25, y: -0.8, z: -0.9 },
    { x: 1.25, y: -0.8, z: -0.9 },
  ];

  positions.forEach((pos) => {
    const wheel = new THREE.Mesh(wheelGeo, trimMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(pos.x, pos.y, pos.z);
    group.add(wheel);
  });

  return group;
}
