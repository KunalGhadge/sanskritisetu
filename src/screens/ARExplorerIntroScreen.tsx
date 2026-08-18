import React from 'react';
import { Compass, QrCode, Camera, ArrowRight, ShieldCheck } from 'lucide-react';

interface ARExplorerIntroScreenProps {
  onLaunchScanner: () => void;
  onOpenMarkerModal: () => void;
}

export const ARExplorerIntroScreen: React.FC<ARExplorerIntroScreenProps> = ({
  onLaunchScanner,
  onOpenMarkerModal,
}) => {
  return (
    <div style={{
      maxWidth: '680px',
      margin: '0 auto',
      padding: 'clamp(24px, 4vw, 48px) 20px 60px',
      textAlign: 'center',
    }}>
      {/* Badge */}
      <span className="gov-badge" style={{ marginBottom: '12px' }}>
        <Compass size={14} /> Screen 7 • AR Exploration Layer
      </span>

      <h1 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 800,
        color: '#0f172a',
        margin: '0 0 8px 0',
        letterSpacing: '-0.03em',
      }}>
        AR Explorer
      </h1>

      <p style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '28px' }}>
        Transform preserved digital twin data into an interactive augmented reality experience.
      </p>

      {/* Main Card */}
      <div className="vault-card" style={{
        padding: 'clamp(24px, 4vw, 36px)',
        marginBottom: '28px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 16px',
          borderRadius: '16px',
          backgroundColor: '#0b1528',
          color: '#38bdf8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Camera size={32} />
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
          Experience the Preserved Monument
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
          Scan the Stone Chariot tracking marker with your camera to project the sub-millimeter 3D model into your space.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={onLaunchScanner}
            className="btn-accent"
            style={{ width: '100%', maxWidth: '300px', padding: '14px 24px', fontSize: '0.95rem' }}
          >
            <Camera size={18} />
            <span>Launch AR Scanner</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onOpenMarkerModal}
            className="btn-secondary"
            style={{ width: '100%', maxWidth: '300px', padding: '11px 20px', fontSize: '0.85rem' }}
          >
            <QrCode size={16} />
            <span>View / Print AR Marker</span>
          </button>
        </div>
      </div>
    </div>
  );
};
