import React, { useRef, useState, useEffect } from 'react';
import '@google/model-viewer';
import { Camera, Sparkles, Box, RotateCw, Eye, CheckCircle2, Maximize2, Compass, Layers } from 'lucide-react';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

interface GoogleARViewerProps {
  src: string;
  alt: string;
  monumentName: string;
  currentLanguage?: LanguageCode;
  style?: React.CSSProperties;
}

export const GoogleARViewer: React.FC<GoogleARViewerProps> = ({
  src,
  alt,
  monumentName,
  currentLanguage = 'en',
  style,
}) => {
  const modelViewerRef = useRef<any>(null);
  const [arSupported, setArSupported] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const t = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    const mv = modelViewerRef.current;
    if (!mv) return;

    const handleLoad = () => {
      setLoading(false);
      if (mv.canActivateAR) {
        setArSupported(true);
      }
    };

    const handleProgress = (event: any) => {
      if (event.detail.totalProgress === 1) {
        setLoading(false);
      }
    };

    mv.addEventListener('load', handleLoad);
    mv.addEventListener('progress', handleProgress);

    return () => {
      mv.removeEventListener('load', handleLoad);
      mv.removeEventListener('progress', handleProgress);
    };
  }, [src]);

  const handleLaunchAR = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.activateAR();
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
      width: '100%',
      ...style,
    }}>
      {/* Google Model Viewer Web Component */}
      <model-viewer
        ref={modelViewerRef}
        src={src}
        alt={alt}
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="auto"
        camera-controls
        auto-rotate={autoRotate ? '' : undefined}
        shadow-intensity="1.5"
        shadow-softness="0.8"
        exposure="1.1"
        loading="eager"
        style={{
          width: '100%',
          height: '340px',
          backgroundColor: '#141828',
          '--poster-color': 'transparent',
        }}
      >
        {/* AR Launch Custom Button Slot */}
        <button
          slot="ar-button"
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            background: 'linear-gradient(135deg, #4c35de 0%, #644bf5 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '16px',
            padding: '14px 18px',
            fontSize: '0.88rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(76, 53, 222, 0.45)',
            zIndex: 10,
          }}
        >
          <Camera size={18} />
          <span>Project in Real Space (AR Floor Tracking)</span>
        </button>
      </model-viewer>

      {/* Top Floating Badge & Controls */}
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
          background: 'rgba(20, 24, 40, 0.85)',
          backdropFilter: 'blur(12px)',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '0.68rem',
          color: '#ffffff',
          fontWeight: 700,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}>
          <Sparkles size={13} color="#644bf5" />
          <span>Google Scene Viewer AR Ready</span>
        </div>

        <div style={{ display: 'flex', gap: '6px', pointerEvents: 'auto' }}>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle Auto Rotation"
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
            }}
          >
            <RotateCw size={14} />
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
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
          <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>Initializing 3D Photogrammetry & AR Core...</span>
        </div>
      )}

      {/* Telemetry Strip */}
      <div style={{
        padding: '10px 14px',
        background: '#101322',
        borderTop: '1px solid #1e2438',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.68rem',
        color: '#94a3b8',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <CheckCircle2 size={13} color="#10b981" />
          <span>Markerless Surface SLAM</span>
        </div>

        <div style={{ color: '#a5b4fc', fontWeight: 700 }}>
          360° Touch Orbit + AR Ground Placement
        </div>
      </div>
    </div>
  );
};
