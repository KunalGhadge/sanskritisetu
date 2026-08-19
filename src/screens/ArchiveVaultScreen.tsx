import React, { useState, useEffect } from 'react';
import { MonumentData, PhotoAsset } from '../data/monuments';
import { ModelViewer3D } from '../components/ModelViewer3D';
import { GoogleARViewer } from '../components/GoogleARViewer';
import { AudioGuide } from '../components/AudioGuide';
import { HeritageImage } from '../components/HeritageImage';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
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
  FileText,
  Lightbulb,
  MapPin,
  Maximize2
} from 'lucide-react';

interface ArchiveVaultScreenProps {
  currentLanguage: LanguageCode;
  monument: MonumentData;
  onLaunchAR: () => void;
  onBack?: () => void;
}

export const ArchiveVaultScreen: React.FC<ArchiveVaultScreenProps> = ({
  currentLanguage,
  monument,
  onLaunchAR,
  onBack,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTier, setActiveTier] = useState<string>('overview');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset | null>(null);

  const t = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [monument.id]);

  const ARCHIVAL_TIERS = [
    { id: 'overview', label: t.tierOverview, icon: Landmark },
    { id: 'timeline', label: t.tierTimeline, icon: Calendar },
    { id: 'architecture', label: t.tierJoinery, icon: Layers },
    { id: 'photos', label: t.tierPhotos, icon: Camera },
    { id: 'audio', label: t.tierAudio, icon: Headphones },
    { id: '3d', label: t.tier3DTwin, icon: Box },
    { id: 'strategy', label: t.tierStrategy, icon: ShieldCheck },
  ];

  const displayName = currentLanguage !== 'en' && monument.hindiName ? monument.hindiName : monument.name;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Header */}
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
          {t.heritageDossierTitle}
        </h2>

        <div style={{ width: '24px' }} />
      </div>

      {isLoading ? (
        <SkeletonLoader type="dossier" />
      ) : (
        <>
          {/* Main Government Dossier Master Card */}
          <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
            {/* Government Header Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #f1f3fa',
              paddingBottom: '10px',
              marginBottom: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={16} color="#4c35de" />
                <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#181c32', lineHeight: 1.1 }}>
                  <div>भारत सरकार</div>
                  <div style={{ color: '#8b92ab' }}>{t.govtOfIndia}</div>
                </div>
              </div>

              <div style={{
                height: '3px',
                width: '45px',
                background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 50%, #138808 100%)',
                borderRadius: '2px',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#10b981', fontSize: '0.62rem', fontWeight: 800 }}>
                <CheckCircle2 size={12} />
                <span>Verified</span>
              </div>
            </div>

            {/* Hero Image Container */}
            <div style={{
              height: '160px',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#f4f5fb',
              marginBottom: '14px',
              position: 'relative',
            }}>
              <HeritageImage src={monument.heroImage} alt={displayName} />
              <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                background: 'rgba(24, 28, 50, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '4px 8px',
                borderRadius: '8px',
                fontSize: '0.62rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <MapPin size={10} color="#ff9933" />
                <span>{monument.location.state}, {monument.location.district}</span>
              </div>
            </div>

            {/* Monument Title */}
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#181c32',
              margin: '0 0 4px 0',
              fontFamily: 'Outfit, sans-serif',
            }}>
              {displayName}
            </h3>
            <span style={{ fontSize: '0.72rem', color: '#8b92ab', display: 'block', marginBottom: '12px' }}>
              {monument.location.site} • {monument.unescoId}
            </span>

            {/* Quick Facts Grid (2x2) - 100% Mobile Responsive */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '8px',
              marginBottom: '14px',
              width: '100%',
            }}>
              <div style={{ background: '#f8f9fe', border: '1px solid #eceef5', borderRadius: '12px', padding: '8px 10px', minWidth: 0, boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{t.periodLabel}</span>
                <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block', marginTop: '2px', wordBreak: 'break-word', lineHeight: 1.3 }}>{monument.period}</strong>
              </div>

              <div style={{ background: '#f8f9fe', border: '1px solid #eceef5', borderRadius: '12px', padding: '8px 10px', minWidth: 0, boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{t.patronLabel}</span>
                <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block', marginTop: '2px', wordBreak: 'break-word', lineHeight: 1.3 }}>{monument.patronKing}</strong>
              </div>

              <div style={{ background: '#f8f9fe', border: '1px solid #eceef5', borderRadius: '12px', padding: '8px 10px', minWidth: 0, boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{t.styleLabel}</span>
                <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block', marginTop: '2px', wordBreak: 'break-word', lineHeight: 1.3 }}>{monument.architecturalArchive.specifications.style}</strong>
              </div>

              <div style={{ background: '#f8f9fe', border: '1px solid #eceef5', borderRadius: '12px', padding: '8px 10px', minWidth: 0, boxSizing: 'border-box' }}>
                <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{t.materialLabel}</span>
                <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block', marginTop: '2px', wordBreak: 'break-word', lineHeight: 1.3 }}>{monument.architecturalArchive.specifications.primaryMaterial}</strong>
              </div>
            </div>

            {/* Golden Trivia Box */}
            <div style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              border: '1px solid #fde68a',
              borderRadius: '14px',
              padding: '10px 12px',
              display: 'flex',
              gap: '8px',
              marginBottom: '14px',
            }}>
              <Lightbulb size={18} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.74rem', color: '#92400e', display: 'block', marginBottom: '2px' }}>
                  {t.doYouKnowTitle}
                </strong>
                <p style={{ fontSize: '0.7rem', color: '#78350f', margin: 0, lineHeight: 1.35 }}>
                  {monument.shortOverview}
                </p>
              </div>
            </div>

            {/* Launch Spatial AR Primary Action */}
            <button
              onClick={onLaunchAR}
              className="btn-digi-purple"
            >
              <Camera size={16} />
              <span>{t.launchSpatialARButton}</span>
            </button>
          </div>

          {/* 7-Tier Archival Studio Section */}
          <div>
            <div className="digi-section-header">
              <h3 className="digi-section-title">
                <Layers size={17} color="#4c35de" />
                <span>{t.archivalAnalysisTitle}</span>
              </h3>
              <span style={{ fontSize: '0.66rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '2px 6px', borderRadius: '6px' }}>
                {t.allIngestedBadge}
              </span>
            </div>

            {/* Tier Tabs Pill Bar */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '10px' }}>
              {ARCHIVAL_TIERS.map((tier) => {
                const Icon = tier.icon;
                const isActive = activeTier === tier.id;

                return (
                  <button
                    key={tier.id}
                    onClick={() => setActiveTier(tier.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '16px',
                      border: 'none',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      background: isActive ? '#4c35de' : '#ffffff',
                      color: isActive ? '#ffffff' : '#4b526d',
                      boxShadow: '0 2px 6px rgba(80, 85, 130, 0.04)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <Icon size={13} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{tier.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TIER 1: OVERVIEW */}
            {activeTier === 'overview' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#181c32', margin: '0 0 8px 0', fontFamily: 'Outfit, sans-serif' }}>
                  {t.historicalSignificanceTitle}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {monument.fullOverview.map((paragraph, idx) => (
                    <p key={idx} style={{ fontSize: '0.76rem', color: '#4b526d', lineHeight: 1.45, margin: 0 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {monument.keyStats.map((stat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', background: '#f8f9fe', borderRadius: '8px', fontSize: '0.74rem' }}>
                      <span style={{ color: '#8b92ab' }}>{stat.label}</span>
                      <strong style={{ color: '#181c32' }}>{stat.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIER 2: TIMELINE */}
            {activeTier === 'timeline' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#181c32', margin: '0 0 12px 0', fontFamily: 'Outfit, sans-serif' }}>
                  {t.chronologicalMilestonesTitle}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {monument.timeline.map((evt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '58px',
                        padding: '3px 6px',
                        borderRadius: '8px',
                        backgroundColor: '#f2efff',
                        color: '#4c35de',
                        fontSize: '0.66rem',
                        fontWeight: 800,
                        textAlign: 'center',
                        flexShrink: 0,
                      }}>
                        {evt.year}
                      </div>

                      <div style={{ flexGrow: 1 }}>
                        <strong style={{ fontSize: '0.78rem', color: '#181c32', display: 'block' }}>{evt.title}</strong>
                        <span style={{ fontSize: '0.7rem', color: '#8b92ab', lineHeight: 1.35, display: 'block' }}>{evt.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIER 3: ARCHITECTURE & JOINERY */}
            {activeTier === 'architecture' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
                  {t.dimensionalEngineeringTitle}
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px', marginBottom: '12px', width: '100%' }}>
                  <div style={{ background: '#f8f9fe', borderRadius: '10px', padding: '8px', border: '1px solid #eceef5', minWidth: 0, boxSizing: 'border-box' }}>
                    <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{t.heightLabel}</span>
                    <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block', marginTop: '2px', wordBreak: 'break-word', lineHeight: 1.3 }}>{monument.architecturalArchive.specifications.height}</strong>
                  </div>
                  <div style={{ background: '#f8f9fe', borderRadius: '10px', padding: '8px', border: '1px solid #eceef5', minWidth: 0, boxSizing: 'border-box' }}>
                    <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>{t.baseAreaLabel}</span>
                    <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block', marginTop: '2px', wordBreak: 'break-word', lineHeight: 1.3 }}>{monument.architecturalArchive.specifications.baseArea}</strong>
                  </div>
                </div>

                <span style={{ fontSize: '0.68rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase' }}>{t.structuralJoinerySystemTitle}</span>
                <p style={{ fontSize: '0.74rem', color: '#4b526d', lineHeight: 1.4, margin: '4px 0 10px 0' }}>
                  {monument.architecturalArchive.summary}
                </p>

                <span style={{ fontSize: '0.68rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase' }}>{t.keyArchitecturalElementsTitle}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                  {monument.architecturalArchive.features.map((feat, idx) => (
                    <div key={idx} style={{ background: '#f8f9fe', borderRadius: '8px', padding: '8px' }}>
                      <strong style={{ fontSize: '0.74rem', color: '#181c32', display: 'block' }}>{feat.title}</strong>
                      <p style={{ fontSize: '0.68rem', color: '#8b92ab', margin: '2px 0 0 0', lineHeight: 1.3 }}>{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIER 4: PHOTO ARCHIVE */}
            {activeTier === 'photos' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
                  {t.photogrammetricGalleryTitle}
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {monument.photoArchive.map((photo) => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedPhoto(photo)}
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        backgroundColor: '#f4f5fb',
                        cursor: 'pointer',
                        position: 'relative',
                        height: '95px',
                      }}
                    >
                      <HeritageImage src={photo.url} alt={photo.title} />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                        color: '#ffffff',
                        padding: '4px 6px',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {photo.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIER 5: VOICE GUIDE */}
            {activeTier === 'audio' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <AudioGuide
                  currentLanguage={currentLanguage}
                  audioData={monument.audioGuide}
                  monumentName={displayName}
                />
              </div>
            )}

            {/* TIER 6: 3D DIGITAL TWIN & GOOGLE AR */}
            {activeTier === '3d' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <GoogleARViewer
                  src={monument.glbModelPath}
                  alt={displayName}
                  monumentName={displayName}
                  currentLanguage={currentLanguage}
                />
              </div>
            )}

            {/* TIER 7: PRESERVATION STRATEGY */}
            {activeTier === 'strategy' && (
              <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#181c32', margin: '0 0 8px 0', fontFamily: 'Outfit, sans-serif' }}>
                  {t.preservationMonitoringTitle}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ background: '#f8f9fe', borderRadius: '10px', padding: '10px', border: '1px solid #eceef5' }}>
                    <span style={{ fontSize: '0.64rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase' }}>{t.threatsTitle}</span>
                    <ul style={{ margin: '4px 0 0 16px', fontSize: '0.72rem', color: '#4b526d', lineHeight: 1.4 }}>
                      {monument.preservationStrategy.threats.map((threat, idx) => (
                        <li key={idx}>{threat}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: '#f8f9fe', borderRadius: '10px', padding: '10px', border: '1px solid #eceef5' }}>
                    <span style={{ fontSize: '0.64rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase' }}>{t.mitigationTitle}</span>
                    <ul style={{ margin: '4px 0 0 16px', fontSize: '0.72rem', color: '#4b526d', lineHeight: 1.4 }}>
                      {monument.preservationStrategy.mitigationActions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: '#ecfdf5', borderRadius: '10px', padding: '10px', border: '1px solid #a7f3d0' }}>
                    <span style={{ fontSize: '0.64rem', color: '#065f46', fontWeight: 800, textTransform: 'uppercase' }}>{t.digitalRedundancyTitle}</span>
                    <p style={{ fontSize: '0.72rem', color: '#047857', margin: '2px 0 0 0' }}>{monument.preservationStrategy.digitalRedundancy}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fullscreen Photo Lightbox Modal */}
          {selectedPhoto && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
              }}
              onClick={() => setSelectedPhoto(null)}
            >
              <div style={{ position: 'relative', maxWidth: '380px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  style={{
                    position: 'absolute',
                    top: '-36px',
                    right: 0,
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  <X size={24} />
                </button>

                <div style={{ borderRadius: '16px', overflow: 'hidden', maxHeight: '360px', backgroundColor: '#181c32' }}>
                  <HeritageImage src={selectedPhoto.url} alt={selectedPhoto.title} />
                </div>

                <div style={{ color: '#ffffff', marginTop: '10px', textAlign: 'center' }}>
                  <strong style={{ fontSize: '0.84rem', display: 'block' }}>{selectedPhoto.title}</strong>
                  <span style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>{selectedPhoto.credit} • {selectedPhoto.year}</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
