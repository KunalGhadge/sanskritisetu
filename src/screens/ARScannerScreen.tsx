import React, { useState } from 'react';
import { MonumentData } from '../data/monuments';
import { ArrowLeft, CheckCircle2, QrCode, ArrowRight } from 'lucide-react';

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
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 500,
    }}>
      {/* Top Floating Mini Header */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        right: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(11, 21, 40, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        padding: '8px 12px',
        zIndex: 50,
      }}>
        <button
          onClick={onBackToIntro}
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
          <span>Exit</span>
        </button>

        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8' }}>
          AR Scanner
        </span>

        <button
          onClick={onOpenMarkerModal}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'linear-gradient(135deg, #d97706, #b45309)',
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

      {/* Live AR Camera Viewport via Iframe */}
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

        {/* In-Camera Reticle HUD */}
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
            Scanning for Marker...
          </div>
        </div>
      </div>

      {/* Bottom Floating Complete Button */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        right: '16px',
        zIndex: 50,
      }}>
        <button
          onClick={onFinishExploration}
          className="btn-app-accent"
          style={{ width: '100%', padding: '12px 18px', fontSize: '0.88rem', borderRadius: '14px' }}
        >
          <span>Complete AR Experience</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
