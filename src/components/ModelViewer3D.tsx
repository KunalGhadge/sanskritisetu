import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCw, Layers, RefreshCw, Box, Compass, Sparkles } from 'lucide-react';

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
    const height = Math.min(Math.max(window.innerHeight * 0.4, 280), 400);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#141828');
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
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
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x0c0f1c, roughness: 0.8 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    scene.add(ground);

    const grid = new THREE.GridHelper(8, 16, 0x3b4260, 0x1e243b);
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
        root.scale.setScalar(scale);

        root.position.x = -center.x * scale;
        root.position.y = -box.min.y * scale - 1.2;
        root.position.z = -center.z * scale;

        let totalPolys = 0;
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.geometry) {
              const count = mesh.geometry.index
                ? mesh.geometry.index.count / 3
                : mesh.geometry.attributes.position.count / 3;
              totalPolys += Math.round(count);
            }
          }
        });

        if (totalPolys > 0) setPolygonCount(totalPolys);
        group.add(root);
        setLoading(false);
      },
      undefined,
      () => {
        // Fallback procedural geometry if model fails
        const fallbackGeo = new THREE.BoxGeometry(1.5, 1.8, 2.0);
        const fallbackMat = new THREE.MeshStandardMaterial({ color: 0xc59b27, roughness: 0.4 });
        const fallbackMesh = new THREE.Mesh(fallbackGeo, fallbackMat);
        fallbackMesh.position.y = -0.3;
        group.add(fallbackMesh);
        setLoading(false);
      }
    );

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = Math.min(Math.max(window.innerHeight * 0.4, 280), 400);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [modelPath]);

  // Update controls when autoRotate state changes
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
      controlsRef.current.autoRotateSpeed = 1.8;
    }
  }, [autoRotate]);

  const toggleWireframe = () => {
    if (!modelGroupRef.current) return;
    const newWire = !isWireframe;
    setIsWireframe(newWire);
    modelGroupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => {
            if ('wireframe' in m) (m as THREE.MeshStandardMaterial).wireframe = newWire;
          });
        } else if (mesh.material && 'wireframe' in mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).wireframe = newWire;
        }
      }
    });
  };

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div style={{
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 12px 32px -4px rgba(20, 24, 40, 0.25)',
      backgroundColor: '#141828',
      border: '1px solid #232942',
    }}>
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} style={{ width: '100%', height: '320px', cursor: 'grab' }} />

      {/* Floating Modern Toolbar */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        right: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 20,
        pointerEvents: 'none',
      }}>
        <div style={{
          background: 'rgba(20, 24, 40, 0.82)',
          backdropFilter: 'blur(12px)',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '0.7rem',
          color: '#ffffff',
          fontWeight: 700,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}>
          <Box size={13} color="#644bf5" />
          <span>3D Digital Twin</span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '6px', pointerEvents: 'auto' }}>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle Auto-Rotation"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: autoRotate ? '#4c35de' : 'rgba(20, 24, 40, 0.85)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <RotateCw size={14} />
          </button>

          <button
            onClick={toggleWireframe}
            title="Toggle Wireframe Mesh"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: isWireframe ? '#4c35de' : 'rgba(20, 24, 40, 0.85)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Layers size={14} />
          </button>

          <button
            onClick={resetCamera}
            title="Reset Camera View"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(20, 24, 40, 0.85)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(20, 24, 40, 0.95)',
          color: '#ffffff',
          zIndex: 30,
        }}>
          <RotateCw size={28} color="#644bf5" style={{ animation: 'spin 1.5s infinite linear', marginBottom: '8px' }} />
          <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>Streaming 3D GLB Point Cloud...</span>
        </div>
      )}

      {/* Bottom Telemetry Bar */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '12px',
        right: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 20,
        pointerEvents: 'none',
      }}>
        <div style={{
          background: 'rgba(20, 24, 40, 0.82)',
          backdropFilter: 'blur(10px)',
          padding: '3px 8px',
          borderRadius: '8px',
          fontSize: '0.64rem',
          color: '#94a3b8',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          {polygonCount.toLocaleString()} Triangles
        </div>

        <div style={{
          background: 'rgba(20, 24, 40, 0.82)',
          backdropFilter: 'blur(10px)',
          padding: '3px 8px',
          borderRadius: '8px',
          fontSize: '0.64rem',
          color: '#94a3b8',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          360° Touch Orbit Active
        </div>
      </div>
    </div>
  );
};
