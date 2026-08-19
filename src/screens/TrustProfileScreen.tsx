import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Lock,
  Globe,
  Smartphone,
  Sliders,
  FileCheck,
  Building2,
  ExternalLink
} from 'lucide-react';
import { NotchMode } from '../App';

interface TrustProfileScreenProps {
  notchMode: NotchMode;
  onSetNotchMode: (mode: NotchMode) => void;
}

export const TrustProfileScreen: React.FC<TrustProfileScreenProps> = ({
  notchMode,
  onSetNotchMode,
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
      {/* Sovereign Seal Card */}
      <div className="app-card-dark" style={{
        padding: '20px 16px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0b1528 0%, #162a45 100%)',
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          margin: '0 auto 10px',
          borderRadius: '16px',
          backgroundColor: '#1e293b',
          color: '#fbbf24',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(251, 191, 36, 0.2)',
        }}>
          <ShieldCheck size={28} />
        </div>

        <span style={{ fontSize: '0.68rem', color: '#fbbf24', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Ministry of Culture • Sovereign Registry
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 4px 0' }}>
          Preservation Audit Certificate
        </h3>
        <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
          UNESCO Charter on the Preservation of Digital Heritage (2003)
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '12px',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid #10b981',
          color: '#34d399',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '0.82rem',
          fontWeight: 800,
        }}>
          <CheckCircle2 size={16} /> 100% Preservation Score Verified
        </div>
      </div>

      {/* Audit Checklist (DigiLocker Style) */}
      <div className="app-card" style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
          Digital Preservation Audit Verification
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {AUDIT_ITEMS.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '8px 10px', background: '#f8fafc', borderRadius: '10px' }}>
              <div style={{ color: '#16a34a', marginTop: '2px' }}>
                <CheckCircle2 size={16} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <strong style={{ fontSize: '0.8rem', color: '#0f172a', display: 'block' }}>{item.label}</strong>
                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptographic Hash & Security */}
      <div className="app-card" style={{ padding: '14px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Lock size={15} color="#2563eb" />
          <span>Sovereign Security & Immutability</span>
        </h4>
        <div style={{ padding: '10px', background: '#0b1528', borderRadius: '10px', color: '#38bdf8', fontFamily: 'monospace', fontSize: '0.72rem', wordBreak: 'break-all', marginBottom: '8px' }}>
          SHA-256: 8f9b4c1a7d6e5f2b8a9c3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0
        </div>
        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
          Timestamped and cryptographically verified under ASI Digital Preservation Guidelines.
        </span>
      </div>

      {/* Notch & Display Preferences */}
      <div className="app-card" style={{ padding: '14px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
          Display & Notch Preferences
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
          <button
            onClick={() => onSetNotchMode('auto')}
            style={{
              padding: '8px 4px',
              borderRadius: '10px',
              border: notchMode === 'auto' ? '2px solid #0b1528' : '1px solid #e2e8f0',
              background: notchMode === 'auto' ? '#f1f5f9' : '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Auto
          </button>
          <button
            onClick={() => onSetNotchMode('webapp')}
            style={{
              padding: '8px 4px',
              borderRadius: '10px',
              border: notchMode === 'webapp' ? '2px solid #0b1528' : '1px solid #e2e8f0',
              background: notchMode === 'webapp' ? '#f1f5f9' : '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Webapp
          </button>
          <button
            onClick={() => onSetNotchMode('app')}
            style={{
              padding: '8px 4px',
              borderRadius: '10px',
              border: notchMode === 'app' ? '2px solid #0b1528' : '1px solid #e2e8f0',
              background: notchMode === 'app' ? '#f1f5f9' : '#ffffff',
              fontSize: '0.72rem',
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
