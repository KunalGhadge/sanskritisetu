import React from 'react';
import { MonumentData } from '../data/monuments';
import { Database, Award, Clock, MapPin, ArrowRight, ShieldCheck, FileText, Box } from 'lucide-react';

interface RepositoryScreenProps {
  monument: MonumentData;
  onOpenVault: () => void;
}

export const RepositoryScreen: React.FC<RepositoryScreenProps> = ({ monument, onOpenVault }) => {
  return (
    <div style={{
      maxWidth: '860px',
      margin: '0 auto',
      padding: 'clamp(24px, 4vw, 48px) 20px 60px',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="gov-badge" style={{ marginBottom: '10px' }}>
          <Database size={14} /> National Heritage Repository
        </span>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 8px 0',
          letterSpacing: '-0.03em',
        }}>
          Preservation Catalog
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
          Central sovereign registry for digital twins, architectural data, and historical records.
        </p>
      </div>

      {/* Featured Monument Database Entry */}
      <div className="vault-card" style={{
        padding: 'clamp(20px, 4vw, 36px)',
        marginBottom: '28px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e2e8f0',
          paddingBottom: '16px',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
              Registry Record #ASI-IND-2026-0356
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>
              Primary Preservation Asset
            </strong>
          </div>

          <span className="unesco-badge">
            <Award size={13} /> {monument.status}
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '24px',
          alignItems: 'center',
          marginBottom: '28px',
        }}>
          {/* Image */}
          <div style={{
            height: '220px',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#0b1528',
          }}>
            <img
              src={monument.heroImage}
              alt={monument.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Details */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
              {monument.name}
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', margin: '0 0 16px 0', fontWeight: 500 }}>
              {monument.hindiName}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
              <div>
                <span style={{ color: '#64748b' }}>Location: </span>
                <strong>{monument.location.site}, {monument.location.district}, {monument.location.state}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Period: </span>
                <strong>{monument.period} ({monument.century})</strong>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Empire: </span>
                <strong>{monument.empire}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Digital Archive: </span>
                <strong style={{ color: '#16a34a' }}>✓ 3D GLB Sub-millimeter Model</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={onOpenVault}
            className="btn-primary"
            style={{ width: '100%', maxWidth: '320px', padding: '14px 24px', fontSize: '0.95rem' }}
          >
            <span>Open Heritage Vault</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
