import React from 'react';
import { ShieldCheck, CheckCircle2, Award, ArrowRight, Layers, Box, Camera, Headphones, FileText } from 'lucide-react';

interface PreservationDashboardScreenProps {
  onProceedToARExplorer: () => void;
}

const AUDIT_ITEMS = [
  { label: 'Historical records archived', desc: '1336 CE to present chronology recorded', icon: FileText },
  { label: 'Architectural joinery archived', desc: 'Granite tolerances and dimensions cataloged', icon: Layers },
  { label: '3D digital twin archived', desc: 'Sub-mm GLB photogrammetry (184,200 polygons)', icon: Box },
  { label: 'Photographs collection archived', desc: '1856 glass plates, HD photos & LiDAR plates', icon: Camera },
  { label: 'Audio narration archived', desc: 'English & Hindi voice guides with transcripts', icon: Headphones },
  { label: 'Cultural significance registered', desc: 'UNESCO Site #356 Universal Value verified', icon: Award },
];

export const PreservationDashboardScreen: React.FC<PreservationDashboardScreenProps> = ({
  onProceedToARExplorer,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* 100% Score Card */}
      <div className="app-card-dark" style={{
        padding: '18px 16px',
        background: 'linear-gradient(135deg, #0b1528 0%, #162a45 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div>
          <span style={{ fontSize: '0.68rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
            National Audit Verification
          </span>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 2px 0', color: '#ffffff' }}>
            Preservation Score: 100%
          </h2>
          <p style={{ fontSize: '0.78rem', color: '#cbd5e1', margin: 0 }}>
            All 6 preservation tiers verified.
          </p>
        </div>

        <div style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          border: '2px solid #10b981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981',
          flexShrink: 0,
        }}>
          <CheckCircle2 size={28} />
        </div>
      </div>

      {/* Preservation Checklist Items */}
      <div className="app-card" style={{ padding: '14px' }}>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
          Archival Verification Breakdown
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {AUDIT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                }}>
                  <CheckCircle2 size={13} strokeWidth={3} />
                </div>

                <div style={{ flexGrow: 1 }}>
                  <strong style={{ fontSize: '0.82rem', color: '#0f172a', display: 'block', lineHeight: 1.3 }}>
                    {item.label}
                  </strong>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action to Proceed to AR Explorer */}
      <button
        onClick={onProceedToARExplorer}
        className="btn-app-accent"
        style={{ fontSize: '0.88rem' }}
      >
        <span>Experience in AR Explorer</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
