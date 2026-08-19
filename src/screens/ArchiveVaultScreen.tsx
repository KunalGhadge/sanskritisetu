import React, { useState } from 'react';
import { MonumentData, PhotoAsset } from '../data/monuments';
import { ModelViewer3D } from '../components/ModelViewer3D';
import { AudioGuide } from '../components/AudioGuide';
import { HeritageImage } from '../components/HeritageImage';
import {
  ChevronLeft,
  Shield,
  CheckCircle2,
  QrCode,
  Box,
  Layers,
  Calendar,
  Camera,
  Headphones,
  Info,
  X,
  Share2,
  Award,
  Sparkles,
  ShieldCheck,
  RotateCw,
  Compass,
  ArrowRight,
  Landmark,
  FileText
} from 'lucide-react';

interface ArchiveVaultScreenProps {
  monument: MonumentData;
  onLaunchAR: () => void;
  onBack?: () => void;
}

export const ArchiveVaultScreen: React.FC<ArchiveVaultScreenProps> = ({
  monument,
  onLaunchAR,
  onBack,
}) => {
  const [activeTier, setActiveTier] = useState<string>('overview');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset | null>(null);

  const ARCHIVAL_TIERS = [
    { id: 'overview', label: 'Overview', icon: Landmark },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'architecture', label: 'Joinery', icon: Layers },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'audio', label: 'Audio', icon: Headphones },
    { id: '3d', label: '3D Twin', icon: Box },
    { id: 'strategy', label: 'Strategy', icon: ShieldCheck },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Navigation Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#181c32',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <h2 style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          color: '#4c35de',
          margin: 0,
          fontFamily: 'Outfit, sans-serif',
          textAlign: 'center',
        }}>
          Heritage Archive Dossier
        </h2>

        <div style={{ width: '24px' }} />
      </div>

      {/* Main Government Certificate Card */}
      <div className="digi-card" style={{ padding: '20px 18px', margin: 0 }}>
        {/* Government Header Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f1f3fa',
          paddingBottom: '12px',
          marginBottom: '14px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={18} color="#181c32" />
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#181c32', lineHeight: 1.1 }}>
              <div>भारत सरकार</div>
              <div style={{ color: '#8b92ab' }}>GOVERNMENT OF INDIA</div>
            </div>
          </div>

          <div style={{
            height: '4px',
            width: '60px',
            background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 50%, #138808 100%)',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#4c35de', textAlign: 'right', lineHeight: 1.1 }}>
              <div>SanskritiSetu</div>
              <div style={{ color: '#8b92ab' }}>{monument.unescoId}</div>
            </div>
          </div>
        </div>

        {/* Monument Identity Info */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
          <div style={{
            width: '84px',
            height: '84px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#f4f5fb',
            flexShrink: 0,
          }}>
            <HeritageImage
              src={monument.heroImage}
              alt={monument.name}
            />
          </div>

          <div style={{ flexGrow: 1 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 4px 0', fontFamily: 'Outfit, sans-serif', lineHeight: 1.2 }}>
              {monument.name}
            </h3>
            <div style={{ fontSize: '0.72rem', color: '#4b526d', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div><strong>Period:</strong> {monument.period}</div>
              <div><strong>Patron:</strong> {monument.patronKing}</div>
              <div><strong>Status:</strong> {monument.status}</div>
            </div>
          </div>
        </div>

        {/* Address Box */}
        <div style={{
          padding: '10px 12px',
          background: '#f8f9fe',
          borderRadius: '14px',
          border: '1px solid #eceef5',
          marginBottom: '14px',
        }}>
          <span style={{ fontSize: '0.64rem', color: '#8b92ab', display: 'block', marginBottom: '2px', fontWeight: 600 }}>
            Official Site Location:
          </span>
          <p style={{ fontSize: '0.76rem', color: '#181c32', margin: 0, lineHeight: 1.4 }}>
            {monument.location.site}, {monument.location.district}, {monument.location.state}, India
          </p>
        </div>

        {/* Verified Strip + QR Code */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.65rem', color: '#8b92ab', display: 'block', marginBottom: '4px' }}>
              Verified by:
            </span>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#f2efff',
              border: '1px solid #e3dfff',
              color: '#4c35de',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '0.72rem',
              fontWeight: 800,
            }}>
              <CheckCircle2 size={13} />
              <span>SanskritiSetu Verified</span>
            </div>
          </div>

          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            border: '1px solid #e6e8f2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#181c32',
          }}>
            <QrCode size={26} />
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button onClick={onLaunchAR} className="btn-digi-purple">
        <Box size={16} />
        <span>Launch Spatial 3D & AR Explorer</span>
      </button>

      {/* 7-Tier Archival Analysis Section Header */}
      <div style={{ marginTop: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', padding: '0 2px' }}>
          <h3 className="digi-section-title">
            <Layers size={17} color="#4c35de" />
            <span>7-Tier Archival Analysis</span>
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 800 }}>
            100% Ingested
          </span>
        </div>

        {/* 7-Tier Pill Navigation */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px' }}>
          {ARCHIVAL_TIERS.map((tier) => {
            const Icon = tier.icon;
            const isActive = activeTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                style={{
                  padding: '7px 12px',
                  borderRadius: '14px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: isActive ? '#4c35de' : '#ffffff',
                  color: isActive ? '#ffffff' : '#4b526d',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s ease',
                }}
              >
                <Icon size={13} />
                <span>{tier.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TIER 1: OVERVIEW & KEY METRICS */}
      {activeTier === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Key Metric Pills */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {monument.keyStats.map((stat, i) => (
              <div key={i} className="digi-card" style={{ padding: '12px', margin: 0 }}>
                <span style={{ fontSize: '0.65rem', color: '#8b92ab', display: 'block', fontWeight: 600 }}>{stat.label}</span>
                <strong style={{ fontSize: '0.88rem', color: '#181c32', display: 'block', fontFamily: 'Outfit, sans-serif' }}>{stat.value}</strong>
                {stat.sublabel && <span style={{ fontSize: '0.64rem', color: '#4c35de', fontWeight: 700 }}>{stat.sublabel}</span>}
              </div>
            ))}
          </div>

          {/* Historical Narrative */}
          <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
            <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#181c32', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
              Historical Lore & Cultural Significance
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', color: '#4b526d', lineHeight: 1.5 }}>
              {monument.fullOverview.map((para, idx) => (
                <p key={idx} style={{ margin: 0 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TIER 2: TIMELINE */}
      {activeTier === 'timeline' && (
        <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
          <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#181c32', marginBottom: '12px', fontFamily: 'Outfit, sans-serif' }}>
            Chronological Milestones
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {monument.timeline.map((event, idx) => (
              <div key={idx} style={{ padding: '10px 12px', background: '#f8f9fe', borderRadius: '14px', border: '1px solid #eceef5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <strong style={{ fontSize: '0.8rem', color: '#4c35de', fontFamily: 'Outfit, sans-serif' }}>{event.year}</strong>
                  <span style={{ fontSize: '0.62rem', background: '#f2efff', color: '#4c35de', padding: '2px 6px', borderRadius: '6px', fontWeight: 700 }}>
                    {event.significance}
                  </span>
                </div>
                <h5 style={{ fontSize: '0.82rem', color: '#181c32', margin: '0 0 3px 0', fontWeight: 700 }}>{event.title}</h5>
                <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: 0, lineHeight: 1.4 }}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TIER 3: ARCHITECTURAL JOINERY */}
      {activeTier === 'architecture' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="digi-card" style={{ padding: '14px', margin: 0 }}>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase' }}>Structural Specifications</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '6px', fontSize: '0.74rem' }}>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>
                <span style={{ color: '#8b92ab', display: 'block', fontSize: '0.64rem' }}>Height</span>
                <strong style={{ color: '#181c32' }}>{monument.architecturalArchive.specifications.height}</strong>
              </div>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>
                <span style={{ color: '#8b92ab', display: 'block', fontSize: '0.64rem' }}>Base Plinth</span>
                <strong style={{ color: '#181c32' }}>{monument.architecturalArchive.specifications.baseArea}</strong>
              </div>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>
                <span style={{ color: '#8b92ab', display: 'block', fontSize: '0.64rem' }}>Material</span>
                <strong style={{ color: '#181c32' }}>{monument.architecturalArchive.specifications.primaryMaterial}</strong>
              </div>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>
                <span style={{ color: '#8b92ab', display: 'block', fontSize: '0.64rem' }}>Style</span>
                <strong style={{ color: '#181c32' }}>{monument.architecturalArchive.specifications.style}</strong>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {monument.architecturalArchive.features.map((f, i) => (
              <div key={i} className="digi-card" style={{ padding: '14px', margin: 0 }}>
                <span style={{ fontSize: '0.64rem', color: '#4c35de', fontWeight: 700, textTransform: 'uppercase' }}>{f.category}</span>
                <h5 style={{ fontSize: '0.84rem', color: '#181c32', margin: '2px 0 4px 0', fontFamily: 'Outfit, sans-serif' }}>{f.title}</h5>
                <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: 0, lineHeight: 1.4 }}>{f.description}</p>
                {f.dimensions && (
                  <span style={{ fontSize: '0.68rem', color: '#8b92ab', display: 'block', marginTop: '6px', fontWeight: 600 }}>
                    Dimension: {f.dimensions}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TIER 4: PHOTOS */}
      {activeTier === 'photos' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {monument.photoArchive.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="digi-card"
                style={{ padding: 0, overflow: 'hidden', margin: 0, cursor: 'pointer' }}
              >
                <div style={{ height: '110px', position: 'relative' }}>
                  <HeritageImage src={photo.url} alt={photo.title} />
                  <span style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    background: 'rgba(24, 28, 50, 0.8)',
                    color: '#ffffff',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '6px',
                  }}>
                    {photo.year}
                  </span>
                </div>
                <div style={{ padding: '10px' }}>
                  <strong style={{ fontSize: '0.76rem', color: '#181c32', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {photo.title}
                  </strong>
                  <span style={{ fontSize: '0.64rem', color: '#8b92ab' }}>{photo.credit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedPhoto && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={() => setSelectedPhoto(null)}>
              <div style={{ maxWidth: '380px', width: '100%', backgroundColor: '#ffffff', borderRadius: '22px', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.84rem' }}>{selectedPhoto.title} ({selectedPhoto.year})</strong>
                  <button onClick={() => setSelectedPhoto(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={18} /></button>
                </div>
                <div style={{ height: '220px' }}>
                  <HeritageImage src={selectedPhoto.url} alt={selectedPhoto.title} />
                </div>
                <div style={{ padding: '12px 16px', fontSize: '0.75rem', color: '#4b526d' }}>
                  <p style={{ margin: '0 0 4px 0', color: '#181c32' }}>{selectedPhoto.description}</p>
                  <span style={{ color: '#8b92ab' }}>Credit: {selectedPhoto.credit}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TIER 5: AUDIO */}
      {activeTier === 'audio' && (
        <AudioGuide audioData={monument.audioGuide} monumentName={monument.name} />
      )}

      {/* TIER 6: 3D TWIN */}
      {activeTier === '3d' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <ModelViewer3D modelPath={monument.glbModelPath} monumentName={monument.name} />
          <div className="digi-card" style={{ padding: '14px', margin: 0 }}>
            <h5 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#181c32', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>Digital Twin Specifications</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.72rem' }}>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>Format: <strong>{monument.threeDArchive.fileType}</strong></div>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>Mesh: <strong>{monument.threeDArchive.polygonCount}</strong></div>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>Texture: <strong>4K PBR</strong></div>
              <div style={{ padding: '8px', background: '#f8f9fe', borderRadius: '10px' }}>Status: <strong style={{ color: '#10b981' }}>Verified</strong></div>
            </div>
          </div>
        </div>
      )}

      {/* TIER 7: PRESERVATION STRATEGY */}
      {activeTier === 'strategy' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
            <span style={{ fontSize: '0.66rem', color: '#ef4444', fontWeight: 800, textTransform: 'uppercase' }}>Environmental Threat Matrix</span>
            <ul style={{ paddingLeft: '16px', marginTop: '6px', fontSize: '0.76rem', color: '#4b526d', lineHeight: 1.5 }}>
              {monument.preservationStrategy.threats.map((t, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
            <span style={{ fontSize: '0.66rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>Preservation & Mitigation Protocols</span>
            <ul style={{ paddingLeft: '16px', marginTop: '6px', fontSize: '0.76rem', color: '#4b526d', lineHeight: 1.5 }}>
              {monument.preservationStrategy.mitigationActions.map((m, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="digi-card" style={{ padding: '14px', margin: 0, background: '#f2efff', border: '1px solid #e3dfff' }}>
            <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase' }}>Charter Compliance</span>
            <p style={{ fontSize: '0.74rem', color: '#181c32', margin: '4px 0 0 0', fontWeight: 600 }}>
              {monument.preservationStrategy.unescoCompliance}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
