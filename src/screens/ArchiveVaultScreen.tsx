import React, { useState } from 'react';
import { MonumentData, PhotoAsset } from '../data/monuments';
import { ModelViewer3D } from '../components/ModelViewer3D';
import { AudioGuide } from '../components/AudioGuide';
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
  Share2
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
  const [showFullDossier, setShowFullDossier] = useState(false);
  const [activeDossierTab, setActiveDossierTab] = useState('3d');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Bar (Matches Screen 3 in Reference Image) */}
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
          Heritage Digital Dossier
        </h2>

        <div style={{ width: '24px' }} />
      </div>

      {/* Main Government Certificate Card (Exact Screen 3 Match) */}
      <div className="digi-card" style={{ padding: '20px 18px', margin: 0 }}>
        {/* Government of India Header Strip */}
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
              <div style={{ color: '#8b92ab' }}>UNESCO #356</div>
            </div>
          </div>
        </div>

        {/* Monument Identity Info */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
          {/* Photo */}
          <div style={{
            width: '84px',
            height: '84px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#f4f5fb',
            flexShrink: 0,
          }}>
            <img
              src={monument.heroImage}
              alt={monument.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Details */}
          <div style={{ flexGrow: 1 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 4px 0', fontFamily: 'Outfit, sans-serif', lineHeight: 1.2 }}>
              {monument.name}
            </h3>
            <div style={{ fontSize: '0.72rem', color: '#4b526d', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div><strong>Period:</strong> {monument.period} ({monument.century})</div>
              <div><strong>Patron:</strong> {monument.patronKing}</div>
              <div><strong>ASI Reg:</strong> ASI-KAR-HMP-356</div>
            </div>
          </div>
        </div>

        {/* Address Box (Matches Reference Image) */}
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

        {/* Verified By Strip + QR Code (Matches Reference Image) */}
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

      {/* "Do you know?" Information Box (Matches Screen 3 in Reference Image) */}
      <div style={{
        padding: '14px 16px',
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #eceef5',
        boxShadow: '0 4px 16px rgba(80, 85, 130, 0.04)',
      }}>
        <strong style={{ fontSize: '0.8rem', color: '#181c32', display: 'block', marginBottom: '4px', fontFamily: 'Outfit, sans-serif' }}>
          Do you know?
        </strong>
        <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: 0, lineHeight: 1.5 }}>
          The Stone Chariot in Hampi is one of only three famous stone chariots in India. It is carved from interlocking granite slabs giving the illusion of a monolithic rock and features kinetic stone wheels.
        </p>
      </div>

      {/* Primary Purple Action Button (Matches "Download PDF" in Reference) */}
      <button onClick={onLaunchAR} className="btn-digi-purple">
        <Box size={16} />
        <span>Launch Spatial 3D & AR Explorer</span>
      </button>

      {/* Secondary Action (Matches "Tell your friends & family about DigiLocker") */}
      <button
        onClick={() => setShowFullDossier(!showFullDossier)}
        className="btn-digi-secondary"
      >
        <Layers size={15} />
        <span>{showFullDossier ? 'Hide 7-Tier Archival Data' : 'View 7-Tier Archival Records'}</span>
      </button>

      {/* 7-Tier Detailed Vault Drawer */}
      {showFullDossier && (
        <div className="digi-card" style={{ padding: '16px', marginTop: '2px' }}>
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '12px' }}>
            {['3d', 'timeline', 'architecture', 'photos', 'audio'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveDossierTab(tab)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  background: activeDossierTab === tab ? '#4c35de' : '#f4f5fb',
                  color: activeDossierTab === tab ? '#ffffff' : '#8b92ab',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab === '3d' ? '3D Twin' : tab}
              </button>
            ))}
          </div>

          {/* 3D Tab */}
          {activeDossierTab === '3d' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ModelViewer3D modelPath={monument.glbModelPath} monumentName={monument.name} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.72rem' }}>
                <div style={{ padding: '6px 8px', background: '#f8f9fe', borderRadius: '8px' }}>Format: <strong>GLB 2.0</strong></div>
                <div style={{ padding: '6px 8px', background: '#f8f9fe', borderRadius: '8px' }}>Triangles: <strong>184.2K</strong></div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeDossierTab === 'timeline' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {monument.timeline.map((event, idx) => (
                <div key={idx} style={{ padding: '10px', background: '#f8f9fe', borderRadius: '12px', border: '1px solid #eceef5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <strong style={{ fontSize: '0.76rem', color: '#4c35de' }}>{event.year}</strong>
                    <span style={{ fontSize: '0.64rem', color: '#8b92ab' }}>Milestone {idx + 1}</span>
                  </div>
                  <h5 style={{ fontSize: '0.8rem', color: '#181c32', margin: '0 0 2px 0' }}>{event.title}</h5>
                  <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: 0 }}>{event.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Tab */}
          {activeDossierTab === 'architecture' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {monument.architecturalArchive.features.map((f, i) => (
                <div key={i} style={{ padding: '10px', background: '#f8f9fe', borderRadius: '12px', border: '1px solid #eceef5' }}>
                  <span style={{ fontSize: '0.64rem', color: '#4c35de', fontWeight: 700, textTransform: 'uppercase' }}>{f.category}</span>
                  <h5 style={{ fontSize: '0.8rem', color: '#181c32', margin: '0 0 2px 0' }}>{f.title}</h5>
                  <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: 0 }}>{f.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Photos Tab */}
          {activeDossierTab === 'photos' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {monument.photoArchive.map((photo) => (
                <div key={photo.id} onClick={() => setSelectedPhoto(photo)} style={{ cursor: 'pointer', borderRadius: '12px', overflow: 'hidden', height: '90px', position: 'relative' }}>
                  <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', bottom: '4px', left: '4px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.6rem', padding: '1px 4px', borderRadius: '4px' }}>
                    {photo.year}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Audio Tab */}
          {activeDossierTab === 'audio' && (
            <AudioGuide audioData={monument.audioGuide} monumentName={monument.name} />
          )}
        </div>
      )}

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={() => setSelectedPhoto(null)}>
          <div style={{ maxWidth: '380px', width: '100%', backgroundColor: '#ffffff', borderRadius: '20px', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '0.82rem' }}>{selectedPhoto.title}</strong>
              <button onClick={() => setSelectedPhoto(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={16} /></button>
            </div>
            <img src={selectedPhoto.url} alt={selectedPhoto.title} style={{ width: '100%', maxHeight: '40vh', objectFit: 'contain', background: '#000' }} />
            <div style={{ padding: '10px 14px', fontSize: '0.74rem', color: '#4b526d' }}>
              <p style={{ margin: '0 0 2px 0', color: '#181c32' }}>{selectedPhoto.description}</p>
              <span>Credit: {selectedPhoto.credit}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
