import React, { useState } from 'react';
import { MonumentData } from '../data/monuments';
import { ArrowLeft, Camera, QrCode, Volume2, VolumeX } from 'lucide-react';

interface ARExplorerProps {
  monument: MonumentData;
  onBackToVault: () => void;
  onOpenMarkerModal: () => void;
}

export const ARExplorer: React.FC<ARExplorerProps> = ({
  monument,
  onBackToVault,
  onOpenMarkerModal,
}) => {
  const [cameraActive, setCameraActive] = useState(false);
  const [audioActive, setAudioActive] = useState(true);

  return (
    <div style={{
      position: 'relative',
      minHeight: '85vh',
      backgroundColor: '#0b1528',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top Bar */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#08101d',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 50,
        flexWrap: 'wrap',
        gap: '10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onBackToVault}
            className="btn-secondary"
            style={{
              padding: '6px 12px',
              fontSize: '0.8rem',
              backgroundColor: '#162a45',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '8px',
            }}
          >
            <ArrowLeft size={15} />
            <span>Vault</span>
          </button>

          <div>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
              AR Explorer • {monument.name}
            </h2>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              Spatial Marker Tracking Engine
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onOpenMarkerModal}
            className="btn-accent"
            style={{ padding: '6px 12px', fontSize: '0.78rem', borderRadius: '8px' }}
          >
            <QrCode size={14} />
            <span>Marker</span>
          </button>

          <button
            onClick={() => setAudioActive(!audioActive)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
            }}
          >
            {audioActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div style={{
        position: 'relative',
        flexGrow: 1,
        minHeight: 'clamp(400px, 65vh, 650px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}>
        {cameraActive ? (
          /* Live AR.js / A-Frame Iframe */
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <iframe
              src="/ar/index.html"
              title="AR Viewport"
              allow="camera; microphone; accelerometer; gyroscope; xr-spatial-tracking"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#000000',
              }}
            />

            {/* In-Camera Reticle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(240px, 70vw)',
              height: 'min(240px, 70vw)',
              border: '2px solid rgba(56, 189, 248, 0.6)',
              borderRadius: '12px',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div className="hud-laser" />
              <div style={{
                position: 'absolute',
                bottom: '-28px',
                background: 'rgba(11, 21, 40, 0.9)',
                color: '#38bdf8',
                padding: '3px 10px',
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                Align Marker in Frame
              </div>
            </div>
          </div>
        ) : (
          /* Pre-Launch Screen */
          <div style={{
            maxWidth: '480px',
            width: '100%',
            margin: '20px auto',
            padding: 'clamp(24px, 4vw, 36px)',
            backgroundColor: '#162a45',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#0b1528',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
            }}>
              <Camera size={28} />
            </div>

            <div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Scan the Marker
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Allow webcam permissions to project the 3D Stone Chariot in augmented reality right in front of you.
              </p>
            </div>

            {/* 3 Step Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '8px',
              width: '100%',
              textAlign: 'left',
            }}>
              <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}>
                <span style={{ color: '#c2902d', fontWeight: 700, fontSize: '0.68rem', display: 'block' }}>1</span>
                <strong style={{ fontSize: '0.78rem', color: '#ffffff' }}>Open Camera</strong>
              </div>
              <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}>
                <span style={{ color: '#c2902d', fontWeight: 700, fontSize: '0.68rem', display: 'block' }}>2</span>
                <strong style={{ fontSize: '0.78rem', color: '#ffffff' }}>Scan Marker</strong>
              </div>
              <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}>
                <span style={{ color: '#c2902d', fontWeight: 700, fontSize: '0.68rem', display: 'block' }}>3</span>
                <strong style={{ fontSize: '0.78rem', color: '#ffffff' }}>3D View</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', width: '100%', flexDirection: 'column' }}>
              <button
                onClick={() => setCameraActive(true)}
                className="btn-accent"
                style={{ width: '100%', padding: '12px 20px', fontSize: '0.92rem' }}
              >
                <Camera size={18} />
                <span>Open Camera & Scan</span>
              </button>

              <button
                onClick={onOpenMarkerModal}
                className="btn-secondary"
                style={{ width: '100%', padding: '10px 16px', fontSize: '0.85rem' }}
              >
                <QrCode size={16} />
                <span>View Marker on Screen</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
