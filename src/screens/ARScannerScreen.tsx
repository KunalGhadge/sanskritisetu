import React, { useState } from 'react';
import { MonumentData } from '../data/monuments';
import { ArrowLeft, CheckCircle2, QrCode, ArrowRight, Volume2, VolumeX, RotateCw } from 'lucide-react';

interface ARScannerScreenProps {
  monument: MonumentData;
  onFinishExploration: () => void;
  onBackToIntro: () => void;
  onOpenMarkerModal: () => void;
}

export const ARScannerScreen: React.FC<ARScannerScreenProps> = ({
  monument,
  onFinishExploration,
  onBackToIntro,
  onOpenMarkerModal,
}) => {
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
      {/* Top Header */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#08101d',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 50,
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onBackToIntro}
            className="btn-secondary"
            style={{
              padding: '6px 12px',
              fontSize: '0.8rem',
              backgroundColor: '#162a45',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '6px',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>

          <div>
            <h2 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0 }}>
              Live AR Experience • {monument.name}
            </h2>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
              Place marker inside the scanning frame
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onOpenMarkerModal}
            className="btn-accent"
            style={{ padding: '6px 12px', fontSize: '0.78rem', borderRadius: '6px' }}
          >
            <QrCode size={14} />
            <span>Marker Pattern</span>
          </button>

          <button
            onClick={onFinishExploration}
            className="btn-primary"
            style={{
              backgroundColor: '#22c55e',
              borderColor: '#16a34a',
              padding: '6px 14px',
              fontSize: '0.78rem',
              borderRadius: '6px',
            }}
          >
            <span>Finish Mission</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Live AR Camera Viewport via Iframe */}
      <div style={{
        position: 'relative',
        flexGrow: 1,
        minHeight: 'clamp(420px, 70vh, 700px)',
        backgroundColor: '#000000',
      }}>
        <iframe
          src="/ar/index.html"
          title="SanskritiSetu AR Camera"
          allow="camera; microphone; accelerometer; gyroscope; xr-spatial-tracking"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />

        {/* In-Camera Reticle HUD */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(240px, 65vw)',
          height: 'min(240px, 65vw)',
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
            Scanning for Marker...
          </div>
        </div>
      </div>
    </div>
  );
};
