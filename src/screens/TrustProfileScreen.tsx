import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe,
  Smartphone,
  Sliders,
  ChevronLeft,
  Award
} from 'lucide-react';
import { NotchMode } from '../App';

interface TrustProfileScreenProps {
  notchMode: NotchMode;
  onSetNotchMode: (mode: NotchMode) => void;
  onBack?: () => void;
}

export const TrustProfileScreen: React.FC<TrustProfileScreenProps> = ({
  notchMode,
  onSetNotchMode,
  onBack,
}) => {
  const AUDIT_ITEMS = [
    { label: 'Historical Records Archived', desc: 'Epigraphic sources & chronology verified', verified: true },
    { label: 'Architectural Joinery Archived', desc: 'Granite tolerances & dimensions cataloged', verified: true },
    { label: '3D Sub-mm Digital Twin Archived', desc: 'Binary glTF 2.0 point cloud recorded', verified: true },
    { label: 'Photographic Collection Archived', desc: 'Multi-epoch visual plates cataloged', verified: true },
    { label: 'Audio Lore Archived', desc: 'Bilingual voice narrations with live transcripts', verified: true },
    { label: 'Cultural Significance Documented', desc: 'UNESCO Universal Cultural Value registered', verified: true },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#181c32',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <h2 style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          color: '#4c35de',
          margin: 0,
          fontFamily: 'Outfit, sans-serif',
          textAlign: 'center',
        }}>
          Audit & Trust Profile
        </h2>

        <div style={{ width: '24px' }} />
      </div>

      {/* Sovereign Seal Card */}
      <div className="digi-hero-card" style={{ textAlign: 'center', padding: '22px 16px' }}>
        <div style={{
          width: '56px',
          height: '56px',
          margin: '0 auto 10px',
          borderRadius: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ShieldCheck size={28} />
        </div>

        <span style={{ fontSize: '0.66rem', color: '#e0dbff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Ministry of Culture • Sovereign Registry
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 4px 0', fontFamily: 'Outfit, sans-serif' }}>
          Digital Preservation Audit
        </h3>
        <p style={{ fontSize: '0.78rem', color: '#e0dbff', margin: 0 }}>
          UNESCO Charter on the Preservation of Digital Heritage
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '14px',
          background: '#ffffff',
          color: '#4c35de',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '0.78rem',
          fontWeight: 800,
        }}>
          <CheckCircle2 size={15} /> 100% Verified Preservation Score
        </div>
      </div>

      {/* Audit Checklist (DigiLocker Style) */}
      <div className="digi-card" style={{ padding: '18px' }}>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#181c32', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
          Digital Preservation Verification Checklist
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {AUDIT_ITEMS.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 12px', background: '#f8f9fe', borderRadius: '14px', border: '1px solid #eceef5' }}>
              <div style={{ color: '#10b981', marginTop: '2px' }}>
                <CheckCircle2 size={16} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <strong style={{ fontSize: '0.8rem', color: '#181c32', display: 'block' }}>{item.label}</strong>
                <span style={{ fontSize: '0.7rem', color: '#8b92ab' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptographic Hash */}
      <div className="digi-card" style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#181c32', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Outfit, sans-serif' }}>
          <Lock size={15} color="#4c35de" />
          <span>Sovereign Security & Immutability</span>
        </h4>
        <div style={{ padding: '10px', background: '#f2efff', borderRadius: '12px', color: '#4c35de', fontFamily: 'monospace', fontSize: '0.7rem', wordBreak: 'break-all', marginBottom: '8px', border: '1px solid #e3dfff' }}>
          SHA-256: 8f9b4c1a7d6e5f2b8a9c3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0
        </div>
        <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>
          Verified under Archaeological Survey of India Preservation Protocol.
        </span>
      </div>

      {/* Notch & Display Preferences */}
      <div className="digi-card" style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#181c32', marginBottom: '10px', fontFamily: 'Outfit, sans-serif' }}>
          Display & Notch Preferences
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          <button
            onClick={() => onSetNotchMode('auto')}
            style={{
              padding: '10px 6px',
              borderRadius: '12px',
              border: notchMode === 'auto' ? '2px solid #4c35de' : '1px solid #e6e8f2',
              background: notchMode === 'auto' ? '#f2efff' : '#ffffff',
              color: notchMode === 'auto' ? '#4c35de' : '#8b92ab',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Auto
          </button>
          <button
            onClick={() => onSetNotchMode('webapp')}
            style={{
              padding: '10px 6px',
              borderRadius: '12px',
              border: notchMode === 'webapp' ? '2px solid #4c35de' : '1px solid #e6e8f2',
              background: notchMode === 'webapp' ? '#f2efff' : '#ffffff',
              color: notchMode === 'webapp' ? '#4c35de' : '#8b92ab',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Webapp
          </button>
          <button
            onClick={() => onSetNotchMode('app')}
            style={{
              padding: '10px 6px',
              borderRadius: '12px',
              border: notchMode === 'app' ? '2px solid #4c35de' : '1px solid #e6e8f2',
              background: notchMode === 'app' ? '#f2efff' : '#ffffff',
              color: notchMode === 'app' ? '#4c35de' : '#8b92ab',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            App / Notch
          </button>
        </div>
      </div>
    </div>
  );
};
