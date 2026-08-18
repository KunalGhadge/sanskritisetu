import React from 'react';
import { Award, CheckCircle2, RotateCcw, Database, ShieldCheck, Sparkles } from 'lucide-react';

interface CompletionScreenProps {
  onReturnToRepository: () => void;
  onReopenVault: () => void;
}

export const CompletionScreen: React.FC<CompletionScreenProps> = ({
  onReturnToRepository,
  onReopenVault,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'center' }}>
      {/* Celebration Card */}
      <div className="app-card" style={{
        padding: '24px 18px',
        background: 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)',
        border: '1px solid #a7f3d0',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 12px',
          borderRadius: '50%',
          backgroundColor: '#10b981',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
        }}>
          <CheckCircle2 size={36} strokeWidth={2.5} />
        </div>

        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          background: '#dcfce7',
          color: '#166534',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: '12px',
          marginBottom: '8px',
        }}>
          <ShieldCheck size={13} /> Mission Complete
        </span>

        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Thank You for Exploring
        </h3>

        <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
          You have successfully explored and verified the digital twin preservation archive for India's <strong>Stone Chariot of Hampi</strong>.
        </p>
      </div>

      {/* Highlights Card */}
      <div className="app-card" style={{ padding: '14px', textAlign: 'left' }}>
        <strong style={{ fontSize: '0.82rem', color: '#0f172a', display: 'block', marginBottom: '8px' }}>
          Preservation Highlights:
        </strong>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: '#475569' }}>
          <div>✓ Monolithic granite architecture preserved</div>
          <div>✓ 184,200 polygon 3D digital twin archived</div>
          <div>✓ Spatial augmented reality exploration completed</div>
          <div>✓ Permanent sovereign digital preservation verified</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          onClick={onReturnToRepository}
          className="btn-app-primary"
          style={{ fontSize: '0.88rem' }}
        >
          <Database size={16} />
          <span>Return to Repository</span>
        </button>

        <button
          onClick={onReopenVault}
          className="btn-app-secondary"
          style={{ fontSize: '0.84rem' }}
        >
          <RotateCcw size={15} />
          <span>Re-open Heritage Vault</span>
        </button>
      </div>
    </div>
  );
};
