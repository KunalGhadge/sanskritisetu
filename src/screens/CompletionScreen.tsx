import React from 'react';
import { Award, CheckCircle2, RotateCcw, Database, ShieldCheck } from 'lucide-react';

interface CompletionScreenProps {
  onReturnToRepository: () => void;
  onReopenVault: () => void;
}

export const CompletionScreen: React.FC<CompletionScreenProps> = ({
  onReturnToRepository,
  onReopenVault,
}) => {
  return (
    <div style={{
      maxWidth: '640px',
      margin: '0 auto',
      padding: 'clamp(32px, 5vw, 60px) 20px 80px',
      textAlign: 'center',
    }}>
      {/* Success Icon */}
      <div style={{
        width: '72px',
        height: '72px',
        margin: '0 auto 20px',
        borderRadius: '50%',
        backgroundColor: '#dcfce7',
        color: '#16a34a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <CheckCircle2 size={40} />
      </div>

      <span className="gov-badge" style={{ marginBottom: '12px' }}>
        <ShieldCheck size={14} /> Mission Completed Successfully
      </span>

      <h1 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
        fontWeight: 800,
        color: '#0f172a',
        margin: '0 0 10px 0',
        letterSpacing: '-0.03em',
      }}>
        Thank You for Exploring
      </h1>

      <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '32px' }}>
        You have successfully explored and verified the digital twin preservation archive for India's historic <strong>Stone Chariot of Hampi</strong>.
      </p>

      {/* Completion Summary Card */}
      <div className="vault-card" style={{
        padding: '24px',
        marginBottom: '32px',
        textAlign: 'left',
        background: '#f8fafc',
      }}>
        <strong style={{ fontSize: '0.92rem', color: '#0f172a', display: 'block', marginBottom: '12px' }}>
          Mission Highlights:
        </strong>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#475569' }}>
          <div>✓ Monolithic granite architecture preserved</div>
          <div>✓ 184,200 polygon 3D digital twin archived</div>
          <div>✓ Spatial augmented reality exploration completed</div>
          <div>✓ Permanent sovereign digital preservation verified</div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onReturnToRepository}
          className="btn-primary"
          style={{ padding: '12px 24px', fontSize: '0.9rem' }}
        >
          <Database size={16} />
          <span>Return to Repository</span>
        </button>

        <button
          onClick={onReopenVault}
          className="btn-secondary"
          style={{ padding: '12px 20px', fontSize: '0.9rem' }}
        >
          <RotateCcw size={16} />
          <span>Re-open Heritage Vault</span>
        </button>
      </div>
    </div>
  );
};
