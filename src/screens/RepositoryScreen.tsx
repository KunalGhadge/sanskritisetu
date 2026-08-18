import React from 'react';
import { MonumentData } from '../data/monuments';
import { Database, Award, ArrowRight, MapPin, Calendar, Layers, Box } from 'lucide-react';

interface RepositoryScreenProps {
  monument: MonumentData;
  onOpenVault: () => void;
}

export const RepositoryScreen: React.FC<RepositoryScreenProps> = ({ monument, onOpenVault }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Header Pill */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
            National Archive Database
          </span>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Preservation Catalog
          </h2>
        </div>

        <span style={{
          background: '#fef3c7',
          color: '#b45309',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '12px',
          border: '1px solid #fde68a',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <Award size={13} /> UNESCO #356
        </span>
      </div>

      {/* Featured Monument Card */}
      <div className="app-card" style={{ padding: '14px', overflow: 'hidden' }}>
        {/* Monument Image with Gradient Tag */}
        <div style={{
          position: 'relative',
          height: '170px',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#0b1528',
          marginBottom: '14px',
        }}>
          <img
            src={monument.heroImage}
            alt={monument.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(11,21,40,0.85) 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '12px',
          }}>
            <div>
              <span style={{ color: '#fbbf24', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Featured Heritage Asset
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
                {monument.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Monument Quick Metadata Chips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
            <MapPin size={15} color="#d97706" />
            <span><strong>Location:</strong> {monument.location.site}, {monument.location.state}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
            <Calendar size={15} color="#2563eb" />
            <span><strong>Period:</strong> {monument.period} ({monument.century})</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
            <Layers size={15} color="#9333ea" />
            <span><strong>Empire:</strong> {monument.empire}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#16a34a' }}>
            <Box size={15} />
            <span><strong>Status:</strong> 3D GLB Digital Twin Preserved</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenVault}
          className="btn-app-primary"
          style={{ fontSize: '0.88rem' }}
        >
          <span>Open Heritage Vault</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
