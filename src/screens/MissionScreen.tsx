import React from 'react';
import { AlertTriangle, ShieldCheck, ArrowRight, Wind, Droplets, BookX, Hammer } from 'lucide-react';

interface MissionScreenProps {
  onEnterRepository: () => void;
}

export const MissionScreen: React.FC<MissionScreenProps> = ({ onEnterRepository }) => {
  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
      padding: 'clamp(24px, 4vw, 48px) 20px 60px',
    }}>
      {/* Top Tag */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <span className="gov-badge" style={{ marginBottom: '12px' }}>
          <ShieldCheck size={14} /> National Digital Preservation Mission
        </span>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 12px 0',
          letterSpacing: '-0.03em',
        }}>
          Preserving India's Cultural Heritage
        </h1>
        <p style={{
          fontSize: '1.05rem',
          color: '#475569',
          lineHeight: 1.6,
          margin: 0,
        }}>
          India is home to thousands of historically significant monuments, temples, forts, and cultural shrines.
        </p>
      </div>

      {/* The Problem Card */}
      <div className="vault-card" style={{
        padding: 'clamp(20px, 4vw, 32px)',
        marginBottom: '28px',
        borderLeft: '4px solid #ef4444',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#991b1b', fontWeight: 700, fontSize: '0.9rem', marginBottom: '12px' }}>
          <AlertTriangle size={18} /> Many Monuments Face Continuous Deterioration:
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
            <Wind size={18} color="#b45309" />
            <span style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Weathering & Erosion</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
            <Droplets size={18} color="#1e3a8a" />
            <span style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Environmental Damage</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
            <BookX size={18} color="#991b1b" />
            <span style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Loss of Historical Records</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
            <Hammer size={18} color="#64748b" />
            <span style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Physical Deterioration</span>
          </div>
        </div>
      </div>

      {/* The Mission Statement */}
      <div style={{
        backgroundColor: '#0b1528',
        borderRadius: '16px',
        padding: 'clamp(24px, 4vw, 36px)',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: '32px',
      }}>
        <span style={{ fontSize: '0.78rem', color: '#c2902d', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
          ✦ Our National Mission ✦
        </span>
        <blockquote style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
          fontWeight: 700,
          lineHeight: 1.5,
          margin: '0 0 24px 0',
          color: '#f8fafc',
        }}>
          "Digitally preserve cultural heritage for future generations through permanent 3D archives and immersive spatial exploration."
        </blockquote>

        <button
          onClick={onEnterRepository}
          className="btn-accent"
          style={{
            padding: '14px 32px',
            fontSize: '1rem',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '280px',
          }}
        >
          <span>Enter Repository</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
