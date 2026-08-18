import React from 'react';
import { Compass, QrCode, Camera, ArrowRight } from 'lucide-react';

interface ARExplorerIntroScreenProps {
  onLaunchScanner: () => void;
  onOpenMarkerModal: () => void;
}

export const ARExplorerIntroScreen: React.FC<ARExplorerIntroScreenProps> = ({
  onLaunchScanner,
  onOpenMarkerModal,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Intro Header Card */}
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

        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
          Spatial AR Explorer
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.4, margin: 0 }}>
          Transform preserved digital twin data into an interactive augmented reality experience.
        </p>
      </div>

      {/* 3 Step Guide Card */}
      <div className="app-card" style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
          How to View in Augmented Reality:
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', background: '#f8fafc', borderRadius: '10px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#d97706', color: '#fff', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
            <span style={{ fontSize: '0.8rem', color: '#334155' }}>Allow camera permissions</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', background: '#f8fafc', borderRadius: '10px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#d97706', color: '#fff', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
            <span style={{ fontSize: '0.8rem', color: '#334155' }}>Point camera at the AR Marker</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', background: '#f8fafc', borderRadius: '10px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#d97706', color: '#fff', fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
            <span style={{ fontSize: '0.8rem', color: '#334155' }}>Explore the 3D Stone Chariot in space</span>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={onLaunchScanner}
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
            <span>View / Print AR Marker Pattern</span>
          </button>
        </div>
      </div>
    </div>
  );
};
