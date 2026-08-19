import React, { useState } from 'react';
import { MonumentData } from '../data/monuments';
import { Camera, QrCode, ArrowLeft, ArrowRight, Compass, Box, CheckCircle2, RotateCw } from 'lucide-react';

interface ARExplorerScreenProps {
  monument: MonumentData;
  onOpenMarkerModal: () => void;
}

export const ARExplorerScreen: React.FC<ARExplorerScreenProps> = ({
  monument,
  onOpenMarkerModal,
}) => {
  const [isCameraActive, setIsCameraActive] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {isCameraActive ? (
        /* Live Camera Overlay Viewport */
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#000000',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 5000,
        }}>
          {/* Top Controls */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(11, 21, 40, 0.88)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '8px 12px',
            zIndex: 50,
          }}>
            <button
              onClick={() => setIsCameraActive(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={14} />
              <span>Exit AR</span>
            </button>

            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8' }}>
              Stone Chariot AR
            </span>

            <button
              onClick={onOpenMarkerModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: '#d97706',
                border: 'none',
                color: '#ffffff',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <QrCode size={13} />
              <span>Marker</span>
            </button>
          </div>

          {/* Iframe Viewport */}
          <div style={{ position: 'relative', flexGrow: 1, width: '100%', height: '100%' }}>
            <iframe
              src="/ar/index.html"
              title="SanskritiSetu AR Camera"
              allow="camera; microphone; accelerometer; gyroscope; xr-spatial-tracking"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#000000',
              }}
            />

            {/* In-Camera Laser Reticle HUD */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '210px',
              height: '210px',
              border: '2px solid rgba(56, 189, 248, 0.7)',
              borderRadius: '16px',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div className="hud-laser" />
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                background: 'rgba(11, 21, 40, 0.92)',
                color: '#38bdf8',
                padding: '3px 10px',
                borderRadius: '8px',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}>
                Align Marker in Frame...
              </div>
            </div>
          </div>

          {/* Bottom Floating Exit Action */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            zIndex: 50,
          }}>
            <button
              onClick={() => setIsCameraActive(false)}
              className="btn-app-accent"
              style={{ width: '100%', padding: '12px', fontSize: '0.88rem', borderRadius: '14px' }}
            >
              <span>Finish AR Exploration</span>
            </button>
          </div>
        </div>
      ) : (
        /* Standalone AR Explorer Launch Hub */
        <>
          {/* Top Banner Card */}
          <div className="app-card-dark" style={{
            padding: '20px 16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #0b1528 0%, #162a45 100%)',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              margin: '0 auto 12px',
              borderRadius: '16px',
              backgroundColor: '#1e293b',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(56, 189, 248, 0.2)',
            }}>
              <Camera size={28} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0' }}>
              Spatial AR Explorer
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
              Zero-install marker tracking engine projecting India's monuments in 3D.
            </p>
          </div>

          {/* Selected Monument Card */}
          <div className="app-card" style={{ padding: '14px' }}>
            <span style={{ fontSize: '0.68rem', color: '#d97706', fontWeight: 800, textTransform: 'uppercase' }}>
              Active AR Target Asset
            </span>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 10px 0' }}>
              {monument.name}
            </h4>

            <div style={{ height: '130px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#0b1528', marginBottom: '12px' }}>
              <img src={monument.heroImage} alt={monument.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#334155' }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>Sub-millimeter photogrammetry mesh (184.2K Triangles)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#334155' }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>Bilingual audio narrative synchronized</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => setIsCameraActive(true)}
                className="btn-app-accent"
                style={{ fontSize: '0.88rem' }}
              >
                <Camera size={16} />
                <span>Launch AR Camera</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onOpenMarkerModal}
                className="btn-app-secondary"
                style={{ fontSize: '0.82rem' }}
              >
                <QrCode size={15} />
                <span>View / Print AR Tracking Marker</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
