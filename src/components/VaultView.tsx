import React, { useState } from 'react';
import { MonumentData, PhotoAsset } from '../data/monuments';
import { ModelViewer3D } from './ModelViewer3D';
import { AudioGuide } from './AudioGuide';
import {
  Landmark,
  Calendar,
  Layers,
  Camera,
  Headphones,
  Box,
  ShieldCheck,
  MapPin,
  Clock,
  Award,
  ArrowRight,
  QrCode,
  X,
  Compass
} from 'lucide-react';

interface VaultViewProps {
  monument: MonumentData;
  onLaunchAR: () => void;
  onOpenMarkerModal: () => void;
}

export const VaultView: React.FC<VaultViewProps> = ({
  monument,
  onLaunchAR,
  onOpenMarkerModal,
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
    { id: '3d', label: '6. 3D Twin', icon: Box },
    { id: 'preservation', label: '7. Preservation', icon: ShieldCheck },
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: 'clamp(16px, 3vw, 36px) clamp(16px, 3vw, 24px) 80px',
      width: '100%',
    }}>
      {/* Monument Hero Card */}
      <div className="vault-card" style={{
        padding: 'clamp(20px, 4vw, 36px)',
        marginBottom: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 'clamp(20px, 3vw, 36px)',
        alignItems: 'center',
      }}>
        <div>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span className="unesco-badge">
              <Award size={13} /> {monument.status}
            </span>
            <span className="gov-badge">
              <Clock size={13} /> {monument.period}
            </span>
            <span className="gov-badge">
              <MapPin size={13} /> {monument.location.district}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 6px 0',
            letterSpacing: '-0.03em',
          }}>
            {monument.name}
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#64748b',
            margin: '0 0 16px 0',
            fontWeight: 500,
          }}>
            {monument.hindiName}
          </p>

          <p style={{
            fontSize: '0.92rem',
            color: '#334155',
            lineHeight: 1.65,
            marginBottom: '24px',
          }}>
            {monument.shortOverview}
          </p>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={onLaunchAR}
              className="btn-primary"
              style={{ flex: '1 1 auto', minWidth: '180px' }}
            >
              <Compass size={18} />
              <span>Launch AR Experience</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenMarkerModal}
              className="btn-secondary"
              style={{ flex: '0 1 auto' }}
            >
              <QrCode size={16} />
              <span>AR Marker</span>
            </button>
          </div>
        </div>

        {/* Monument Image Preview */}
        <div style={{
          position: 'relative',
          height: 'clamp(200px, 30vw, 280px)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #e2e8f0',
          backgroundColor: '#0b1528',
        }}>
          <img
            src={monument.heroImage}
            alt={monument.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(0deg, rgba(15, 23, 42, 0.88) 0%, transparent 100%)',
            padding: '16px',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>
                Digital Twin Asset
              </span>
              <strong style={{ fontSize: '0.85rem' }}>Sub-millimeter GLB Mesh</strong>
            </div>
            <button
              onClick={() => setActiveTab('3d')}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              Inspect 3D Twin
            </button>
          </div>
        </div>
      </div>

      {/* 7 Clean Horizontal Scroll Tabs */}
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
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.84rem',
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

      {/* ========================================================================= */}
      {/* SECTION 1: MONUMENT OVERVIEW */}
      {/* ========================================================================= */}
      {activeTab === 'overview' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '24px',
        }}>
          <div className="vault-card" style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Historical & Cultural Narrative
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#334155', lineHeight: 1.7, fontSize: '0.92rem' }}>
              {monument.fullOverview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="vault-card" style={{ padding: 'clamp(18px, 3vw, 24px)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Preservation Registry Dossier
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ color: '#64748b' }}>Site Complex:</span>
                  <strong style={{ color: '#0f172a' }}>{monument.location.site}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ color: '#64748b' }}>Coordinates:</span>
                  <strong style={{ color: '#0f172a', fontFamily: 'monospace' }}>{monument.location.coordinates}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ color: '#64748b' }}>Empire / Dynasty:</span>
                  <strong style={{ color: '#0f172a' }}>{monument.empire}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ color: '#64748b' }}>Patron King:</span>
                  <strong style={{ color: '#0f172a' }}>{monument.patronKing}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ color: '#64748b' }}>UNESCO Recognition:</span>
                  <strong style={{ color: '#92400e' }}>{monument.unescoId} ({monument.unescoYear})</strong>
                </div>
              </div>
            </div>

            <div style={{
              background: '#0b1528',
              color: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.92rem', marginBottom: '2px' }}>
                  Inspect 3D Digital Twin
                </strong>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  Full OrbitControls & Wireframe inspection
                </span>
              </div>
              <button
                onClick={() => setActiveTab('3d')}
                className="btn-accent"
                style={{ fontSize: '0.8rem', padding: '8px 14px' }}
              >
                Open 3D Model
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: HISTORICAL TIMELINE */}
      {/* ========================================================================= */}
      {activeTab === 'timeline' && (
        <div className="vault-card" style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>
            Chronological Timeline
          </h3>

          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {monument.timeline.map((event, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  backgroundColor: idx === monument.timeline.length - 1 ? '#f8fafc' : '#ffffff',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{
                    padding: '3px 8px',
                    backgroundColor: '#0b1528',
                    color: '#ffffff',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    fontFamily: 'monospace',
                  }}>
                    {event.year}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Milestone {idx + 1}
                  </span>
                </div>

                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  {event.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  {event.description}
                </p>

                <div style={{ fontSize: '0.78rem', color: '#b45309', fontWeight: 600, borderTop: '1px solid #f1f5f9', paddingTop: '6px' }}>
                  Significance: {event.significance}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: ARCHITECTURAL ARCHIVE */}
      {/* ========================================================================= */}
      {activeTab === 'architecture' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="vault-card" style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Architectural Archive & Joinery
            </h3>
            <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '20px' }}>
              {monument.architecturalArchive.summary}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '12px',
              background: '#f8fafc',
              padding: '16px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
            }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Height:</span>
                <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>
                  {monument.architecturalArchive.specifications.height}
                </strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Footprint:</span>
                <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>
                  {monument.architecturalArchive.specifications.baseArea}
                </strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Material:</span>
                <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>
                  {monument.architecturalArchive.specifications.primaryMaterial}
                </strong>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Style:</span>
                <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.9rem' }}>
                  {monument.architecturalArchive.specifications.style}
                </strong>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '16px',
          }}>
            {monument.architecturalArchive.features.map((feat, i) => (
              <div key={i} className="vault-card" style={{ padding: '20px' }}>
                <span className="gov-badge" style={{ marginBottom: '8px', fontSize: '0.7rem' }}>
                  {feat.category}
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  {feat.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, marginBottom: '10px' }}>
                  {feat.description}
                </p>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  Material: <strong style={{ color: '#0f172a' }}>{feat.material}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: PHOTO ARCHIVE */}
      {/* ========================================================================= */}
      {activeTab === 'photos' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Photo Archive & Photogrammetry
            </h3>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'historical', label: 'Historical' },
                { id: 'present', label: 'Present-Day' },
                { id: 'detail', label: 'Macro' },
                { id: 'aerial', label: 'LiDAR' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setPhotoCategory(f.id as any)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: photoCategory === f.id ? 700 : 500,
                    border: '1px solid',
                    borderColor: photoCategory === f.id ? '#0b1528' : '#cbd5e1',
                    backgroundColor: photoCategory === f.id ? '#0b1528' : '#ffffff',
                    color: photoCategory === f.id ? '#ffffff' : '#475569',
                    cursor: 'pointer',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
            gap: '16px',
          }}>
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="vault-card"
                style={{ cursor: 'pointer', overflow: 'hidden' }}
              >
                <div style={{ height: '170px', position: 'relative' }}>
                  <img
                    src={photo.url}
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}>
                    {photo.year}
                  </div>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    {photo.title}
                  </h4>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>
                    {photo.credit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedPhoto && (
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            onClick={() => setSelectedPhoto(null)}
            >
              <div style={{
                maxWidth: '800px',
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
              onClick={(e) => e.stopPropagation()}
              >
                <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
                  <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>{selectedPhoto.title} ({selectedPhoto.year})</strong>
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

      {/* ========================================================================= */}
      {/* SECTION 5: AUDIO ARCHIVE */}
      {/* ========================================================================= */}
      {activeTab === 'audio' && (
        <AudioGuide audioData={monument.audioGuide} monumentName={monument.name} />
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: 3D DIGITAL TWIN */}
      {/* ========================================================================= */}
      {activeTab === '3d' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ModelViewer3D
            modelPath={monument.glbModelPath}
            monumentName={monument.name}
            onLaunchAR={onLaunchAR}
          />

          <div className="vault-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
              3D Archival Technical Specifications
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '10px',
              fontSize: '0.82rem',
            }}>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>
                <span style={{ color: '#64748b', display: 'block' }}>Format:</span>
                <strong>{monument.threeDArchive.fileType}</strong>
              </div>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>
                <span style={{ color: '#64748b', display: 'block' }}>Triangles:</span>
                <strong>{monument.threeDArchive.polygonCount}</strong>
              </div>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>
                <span style={{ color: '#64748b', display: 'block' }}>Resolution:</span>
                <strong>{monument.threeDArchive.textureResolution}</strong>
              </div>
              <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>
                <span style={{ color: '#64748b', display: 'block' }}>Status:</span>
                <strong style={{ color: '#16a34a' }}>{monument.threeDArchive.status}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 7: PRESERVATION STRATEGY */}
      {/* ========================================================================= */}
      {activeTab === 'preservation' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '20px',
        }}>
          <div className="vault-card" style={{ padding: '24px', borderLeft: '4px solid #ef4444' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#991b1b', fontWeight: 700, marginBottom: '12px' }}>
              Environmental & Physical Threats
            </h4>
            <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
              {monument.preservationStrategy.threats.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>

          <div className="vault-card" style={{ padding: '24px', borderLeft: '4px solid #16a34a' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#166534', fontWeight: 700, marginBottom: '12px' }}>
              Preservation Objectives & Mitigation
            </h4>
            <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
              {monument.preservationStrategy.mitigationActions.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        </div>
      )}

      {/* Bottom AR Banner */}
      <div style={{
        marginTop: '48px',
        padding: 'clamp(20px, 4vw, 32px)',
        borderRadius: '16px',
        backgroundColor: '#0b1528',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div style={{ maxWidth: '600px' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Part 2 of SanskritiSetu
          </span>
          <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 700, margin: '2px 0 0 0' }}>
            Ready to Explore the Stone Chariot in Augmented Reality?
          </h3>
        </div>

        <button
          onClick={onLaunchAR}
          className="btn-accent"
          style={{ padding: '12px 24px', fontSize: '0.88rem' }}
        >
          <Compass size={18} />
          <span>Launch AR Explorer</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
