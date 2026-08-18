import React, { useState } from 'react';
import { MonumentData, PhotoAsset } from '../data/monuments';
import { ModelViewer3D } from '../components/ModelViewer3D';
import { AudioGuide } from '../components/AudioGuide';
import {
  Landmark,
  Calendar,
  Layers,
  Camera,
  Headphones,
  Box,
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';

interface VaultScreenProps {
  monument: MonumentData;
  onProceedToPreservationDashboard: () => void;
}

export const VaultScreen: React.FC<VaultScreenProps> = ({
  monument,
  onProceedToPreservationDashboard,
}) => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [photoCategory, setPhotoCategory] = useState<'all' | 'historical' | 'present' | 'aerial' | 'detail'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset | null>(null);

  const filteredPhotos = monument.photoArchive.filter((p) => {
    if (photoCategory === 'all') return true;
    return p.category === photoCategory;
  });

  const TABS = [
    { id: 'overview', label: '1. Overview', icon: Landmark },
    { id: 'timeline', label: '2. Timeline', icon: Calendar },
    { id: 'architecture', label: '3. Architecture', icon: Layers },
    { id: 'photos', label: '4. Photos', icon: Camera },
    { id: 'audio', label: '5. Audio Guide', icon: Headphones },
    { id: '3d', label: '6. 3D Archive', icon: Box },
  ];

  return (
    <div style={{
      maxWidth: '1080px',
      margin: '0 auto',
      padding: 'clamp(20px, 4vw, 40px) 20px 80px',
    }}>
      {/* Top Monument Title Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
          STONE CHARIOT • HAMPI
        </span>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          fontWeight: 800,
          color: '#0f172a',
          margin: 0,
          letterSpacing: '-0.03em',
        }}>
          Digital Heritage Vault
        </h1>
        <p style={{ fontSize: '0.92rem', color: '#64748b', marginTop: '6px' }}>
          Centralized preservation repository for 3D digital twins, audio archives, and structural records.
        </p>
      </div>

      {/* 6 Clean Tabs */}
      <div className="tabs-scroll-container">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.86rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                backgroundColor: isActive ? '#0b1528' : '#ffffff',
                color: isActive ? '#ffffff' : '#475569',
                boxShadow: isActive ? '0 2px 4px rgba(0,0,0,0.08)' : '0 1px 2px rgba(0,0,0,0.02)',
                transition: 'all 0.15s ease',
                flexShrink: 0,
              }}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
          <div className="vault-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Monument Overview
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#334155', lineHeight: 1.7, fontSize: '0.92rem' }}>
              {monument.fullOverview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="vault-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Preservation Metadata
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Location:</span>
                <strong style={{ color: '#0f172a' }}>{monument.location.site}, {monument.location.state}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Period:</span>
                <strong style={{ color: '#0f172a' }}>{monument.period} ({monument.century})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Empire:</span>
                <strong style={{ color: '#0f172a' }}>{monument.empire}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>UNESCO Status:</span>
                <strong style={{ color: '#92400e' }}>{monument.status}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="vault-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>
            Historical Timeline
          </h3>
          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {monument.timeline.map((event, idx) => (
              <div key={idx} style={{ padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '0.85rem', color: '#0b1528', fontFamily: 'monospace' }}>{event.year}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Milestone {idx + 1}</span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>{event.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="vault-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Architectural Archive
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', background: '#f8fafc', padding: '16px', borderRadius: '8px' }}>
              <div><span style={{ fontSize: '0.75rem', color: '#64748b' }}>Primary Material:</span> <strong style={{ display: 'block', color: '#0f172a' }}>Granite</strong></div>
              <div><span style={{ fontSize: '0.75rem', color: '#64748b' }}>Style:</span> <strong style={{ display: 'block', color: '#0f172a' }}>Dravidian Architecture</strong></div>
              <div><span style={{ fontSize: '0.75rem', color: '#64748b' }}>Height:</span> <strong style={{ display: 'block', color: '#0f172a' }}>4.85 Meters</strong></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {monument.architecturalArchive.features.map((f, i) => (
              <div key={i} className="vault-card" style={{ padding: '20px' }}>
                <span className="gov-badge" style={{ marginBottom: '8px' }}>{f.category}</span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>{f.title}</h4>
                <p style={{ fontSize: '0.86rem', color: '#475569', margin: 0 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: PHOTOS */}
      {activeTab === 'photos' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
            {filteredPhotos.map((photo) => (
              <div key={photo.id} onClick={() => setSelectedPhoto(photo)} className="vault-card" style={{ cursor: 'pointer', overflow: 'hidden' }}>
                <div style={{ height: '170px', position: 'relative' }}>
                  <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgba(0,0,0,0.75)', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                    {photo.year}
                  </span>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>{photo.title}</h4>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{photo.credit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedPhoto && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={() => setSelectedPhoto(null)}>
              <div style={{ maxWidth: '800px', width: '100%', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
                  <strong style={{ fontSize: '0.92rem' }}>{selectedPhoto.title} ({selectedPhoto.year})</strong>
                  <button onClick={() => setSelectedPhoto(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={18} /></button>
                </div>
                <div style={{ maxHeight: '55vh', overflow: 'hidden', backgroundColor: '#000000', display: 'flex', justifyContent: 'center' }}>
                  <img src={selectedPhoto.url} alt={selectedPhoto.title} style={{ maxWidth: '100%', maxHeight: '55vh', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '14px 16px', fontSize: '0.82rem', color: '#475569' }}>
                  <p style={{ margin: '0 0 4px 0', color: '#0f172a' }}>{selectedPhoto.description}</p>
                  <span>Credit: {selectedPhoto.credit}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: AUDIO */}
      {activeTab === 'audio' && (
        <AudioGuide audioData={monument.audioGuide} monumentName={monument.name} />
      )}

      {/* TAB 6: 3D */}
      {activeTab === '3d' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ModelViewer3D modelPath={monument.glbModelPath} monumentName={monument.name} />
          <div className="vault-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Digital Twin Specs</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '10px', fontSize: '0.82rem' }}>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>Format: <strong>GLB (glTF 2.0)</strong></div>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>Polygon Count: <strong>184,200 Triangles</strong></div>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>Status: <strong style={{ color: '#16a34a' }}>Preserved</strong></div>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>Archive Version: <strong>1.0</strong></div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Mission Step Button to Screen 6 (Preservation Dashboard) */}
      <div style={{
        marginTop: '40px',
        padding: '24px 32px',
        borderRadius: '16px',
        backgroundColor: '#0b1528',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Next Step in Mission
          </span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '2px 0 0 0' }}>
            Verify Preservation Audit Score
          </h3>
        </div>

        <button
          onClick={onProceedToPreservationDashboard}
          className="btn-accent"
          style={{ padding: '12px 24px', fontSize: '0.88rem' }}
        >
          <span>View Preservation Dashboard</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
