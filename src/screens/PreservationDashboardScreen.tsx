import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileCheck, ArrowRight, Database, Box, Camera, Headphones, Layers, FileText } from 'lucide-react';

interface PreservationDashboardScreenProps {
  onProceedToARExplorer: () => void;
}

const AUDIT_ITEMS = [
  { label: 'Historical records archived', desc: '1336 CE to present chronology verified with ASI epigraphic sources', icon: FileText },
  { label: 'Architectural information archived', desc: 'Granite joinery, dimensions, and stone wheel kinetics cataloged', icon: Layers },
  { label: '3D model archived', desc: 'Sub-millimeter GLB photogrammetry digital twin recorded (184,200 polygons)', icon: Box },
  { label: 'Photographs archived', desc: '1856 Alexander Greenlaw historical plates, present-day HD, and aerial LiDAR', icon: Camera },
  { label: 'Audio narration archived', desc: 'English and Hindi voice guides with synced interactive transcripts', icon: Headphones },
  { label: 'Cultural significance documented', desc: 'UNESCO Site #356 criteria and Vijayanagara royal patronage recorded', icon: Award },
];

export const PreservationDashboardScreen: React.FC<PreservationDashboardScreenProps> = ({
  onProceedToARExplorer,
}) => {
  return (
    <div style={{
      maxWidth: '820px',
      margin: '0 auto',
      padding: 'clamp(24px, 4vw, 48px) 20px 60px',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="gov-badge" style={{ marginBottom: '10px' }}>
          <ShieldCheck size={14} /> Official Preservation Verification
        </span>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 8px 0',
          letterSpacing: '-0.03em',
        }}>
          Digital Preservation Status
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
          Sovereign verification checklist for Stone Chariot (Vijaya Vittala Temple, Hampi).
        </p>
      </div>

      {/* 100% Score Card */}
      <div style={{
        backgroundColor: '#0b1528',
        borderRadius: '16px',
        padding: 'clamp(24px, 4vw, 36px)',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '28px',
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#c2902d', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
            National Preservation Audit
          </span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, margin: '0 0 4px 0' }}>
            Preservation Score: 100%
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>
            All 6 preservation tiers successfully ingested into the permanent national vault.
          </p>
        </div>

        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          border: '2px solid #22c55e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22c55e',
        }}>
          <CheckCircle2 size={38} />
        </div>
      </div>

      {/* Preservation Checklist Grid */}
      <div className="vault-card" style={{ padding: 'clamp(20px, 4vw, 32px)', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
          Archival Verification Breakdown
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {AUDIT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  <CheckCircle2 size={16} />
                </div>

                <div style={{ flexGrow: 1 }}>
                  <strong style={{ fontSize: '0.92rem', color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                    {item.label}
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action to Proceed to AR Explorer */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onProceedToARExplorer}
          className="btn-accent"
          style={{
            padding: '14px 32px',
            fontSize: '1rem',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '340px',
          }}
        >
          <span>Experience in AR Explorer</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
