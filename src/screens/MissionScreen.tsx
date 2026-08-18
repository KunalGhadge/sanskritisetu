import React from 'react';
import { AlertTriangle, ShieldCheck, ArrowRight, Wind, Droplets, BookX, Hammer, Sparkles } from 'lucide-react';

interface MissionScreenProps {
  onEnterRepository: () => void;
}

export const MissionScreen: React.FC<MissionScreenProps> = ({ onEnterRepository }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Banner Card */}
      <div className="app-card-dark" style={{
        padding: '20px 18px',
        background: 'linear-gradient(135deg, #0b1528 0%, #162a45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(217, 119, 6, 0.2)',
          border: '1px solid rgba(217, 119, 6, 0.4)',
          color: '#fbbf24',
          fontSize: '0.68rem',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '12px',
          marginBottom: '10px',
        }}>
          <ShieldCheck size={13} /> National Digital Mission
        </div>

        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 6px 0', lineHeight: 1.25 }}>
          Preserving India's Cultural Heritage
        </h2>

        <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
          India is home to thousands of historic monuments, temples, and sacred shrines facing continuous risk.
        </p>
      </div>

      {/* The Problem Breakdown */}
      <div className="app-card" style={{ padding: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#b91c1c',
          fontWeight: 700,
          fontSize: '0.82rem',
          marginBottom: '12px',
        }}>
          <AlertTriangle size={15} /> Many Monuments Face Deterioration:
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', background: '#fef2f2', borderRadius: '12px' }}>
            <Wind size={16} color="#dc2626" />
            <span style={{ fontSize: '0.78rem', color: '#1e293b', fontWeight: 600 }}>Weathering</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', background: '#eff6ff', borderRadius: '12px' }}>
            <Droplets size={16} color="#2563eb" />
            <span style={{ fontSize: '0.78rem', color: '#1e293b', fontWeight: 600 }}>Pollution</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', background: '#fdf4ff', borderRadius: '12px' }}>
            <BookX size={16} color="#9333ea" />
            <span style={{ fontSize: '0.78rem', color: '#1e293b', fontWeight: 600 }}>Record Loss</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', background: '#f8fafc', borderRadius: '12px' }}>
            <Hammer size={16} color="#64748b" />
            <span style={{ fontSize: '0.78rem', color: '#1e293b', fontWeight: 600 }}>Erosion</span>
          </div>
        </div>
      </div>

      {/* Mission Directive Card */}
      <div className="app-card" style={{
        padding: '18px 16px',
        background: '#fffbeb',
        border: '1px solid #fde68a',
      }}>
        <span style={{ fontSize: '0.7rem', color: '#b45309', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
          ✦ Sovereign Mandate ✦
        </span>
        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#78350f', lineHeight: 1.4, margin: '0 0 16px 0' }}>
          "Digitally preserve cultural heritage for future generations through permanent 3D archives and immersive AR."
        </p>

        <button
          onClick={onEnterRepository}
          className="btn-app-accent"
          style={{ width: '100%', fontSize: '0.88rem' }}
        >
          <span>Enter Repository</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
