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
    { id: 'overview', label: 'Overview', icon: Landmark },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'architecture', label: 'Architecture', icon: Layers },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'audio', label: 'Audio', icon: Headphones },
    { id: '3d', label: '3D Twin', icon: Box },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Top Monument Title */}
      <div>
        <span style={{ fontSize: '0.68rem', color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
          STONE CHARIOT • HAMPI
        </span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
          Digital Heritage Vault
        </h2>
      </div>

      {/* 6 Pill Tabs */}
      <div className="app-pill-tabs">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`app-pill-btn ${isActive ? 'active' : ''}`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="app-card" style={{ padding: '16px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              Historical Overview
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#334155', lineHeight: 1.6, fontSize: '0.84rem' }}>
              {monument.fullOverview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="app-card" style={{ padding: '16px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              Metadata Specifications
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Location:</span>
                <strong style={{ color: '#0f172a' }}>{monument.location.site}, {monument.location.state}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Period:</span>
                <strong style={{ color: '#0f172a' }}>{monument.period} ({monument.century})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>Empire:</span>
                <strong style={{ color: '#0f172a' }}>{monument.empire}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>UNESCO Status:</span>
                <strong style={{ color: '#b45309' }}>{monument.status}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="app-card" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            Historical Milestones
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {monument.timeline.map((event, idx) => (
              <div key={idx} style={{ padding: '12px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#0b1528', fontWeight: 800, fontFamily: 'monospace' }}>{event.year}</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Epoch {idx + 1}</span>
                </div>
                <h5 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', margin: '0 0 3px 0' }}>{event.title}</h5>
                <p style={{ fontSize: '0.8rem', color: '#475569', margin: 0, lineHeight: 1.4 }}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ARCHITECTURE */}
      {activeTab === 'architecture' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="app-card" style={{ padding: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.78rem' }}>
              <div style={{ padding: '8px', background: '#f8fafc', borderRadius: '10px' }}>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.68rem' }}>Material</span>
                <strong style={{ color: '#0f172a' }}>Granite</strong>
              </div>
              <div style={{ padding: '8px', background: '#f8fafc', borderRadius: '10px' }}>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.68rem' }}>Style</span>
                <strong style={{ color: '#0f172a' }}>Dravidian</strong>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {monument.architecturalArchive.features.map((f, i) => (
              <div key={i} className="app-card" style={{ padding: '14px' }}>
                <span style={{ fontSize: '0.68rem', color: '#d97706', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
                  {f.category}
                </span>
                <h5 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 0' }}>{f.title}</h5>
                <p style={{ fontSize: '0.8rem', color: '#475569', margin: 0, lineHeight: 1.4 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: PHOTOS */}
      {activeTab === 'photos' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {filteredPhotos.map((photo) => (
              <div key={photo.id} onClick={() => setSelectedPhoto(photo)} className="app-card" style={{ cursor: 'pointer', overflow: 'hidden', padding: 0 }}>
                <div style={{ height: '110px', position: 'relative' }}>
                  <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '6px', left: '6px', background: 'rgba(0,0,0,0.75)', color: '#ffffff', padding: '1px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700 }}>
                    {photo.year}
                  </span>
                </div>
                <div style={{ padding: '8px' }}>
                  <h5 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', margin: '0 0 2px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{photo.title}</h5>
                  <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{photo.credit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedPhoto && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={() => setSelectedPhoto(null)}>
              <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.84rem' }}>{selectedPhoto.title} ({selectedPhoto.year})</strong>
                  <button onClick={() => setSelectedPhoto(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={16} /></button>
                </div>
                <img src={selectedPhoto.url} alt={selectedPhoto.title} style={{ width: '100%', maxHeight: '45vh', objectFit: 'contain', background: '#000' }} />
                <div style={{ padding: '10px 14px', fontSize: '0.78rem', color: '#475569' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <ModelViewer3D modelPath={monument.glbModelPath} monumentName={monument.name} />
          <div className="app-card" style={{ padding: '12px' }}>
            <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>Digital Twin Specs</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.75rem' }}>
              <div style={{ padding: '6px 8px', background: '#f8fafc', borderRadius: '8px' }}>Format: <strong>GLB 2.0</strong></div>
              <div style={{ padding: '6px 8px', background: '#f8fafc', borderRadius: '8px' }}>Polygons: <strong>184.2K</strong></div>
              <div style={{ padding: '6px 8px', background: '#f8fafc', borderRadius: '8px' }}>Status: <strong style={{ color: '#10b981' }}>Preserved</strong></div>
              <div style={{ padding: '6px 8px', background: '#f8fafc', borderRadius: '8px' }}>Version: <strong>1.0</strong></div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Step Button to Screen 6 */}
      <button
        onClick={onProceedToPreservationDashboard}
        className="btn-app-primary"
        style={{ marginTop: '8px', fontSize: '0.88rem' }}
      >
        <span>View Preservation Status</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
