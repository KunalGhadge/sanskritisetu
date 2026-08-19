import React, { useState } from 'react';
import { MonumentData, MONUMENTS } from '../data/monuments';
import { HeritageImage } from '../components/HeritageImage';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import { Camera, QrCode, ArrowLeft, ArrowRight, Compass, Box, CheckCircle2, ChevronLeft, Layers, Sparkles, Shield, Eye } from 'lucide-react';

interface ARExplorerScreenProps {
  currentLanguage: LanguageCode;
  monument: MonumentData;
  onOpenMarkerModal: () => void;
  onBack?: () => void;
}

export const ARExplorerScreen: React.FC<ARExplorerScreenProps> = ({
  currentLanguage,
  monument: initialMonument,
  onOpenMarkerModal,
  onBack,
}) => {
  const [selectedMonument, setSelectedMonument] = useState<MonumentData>(initialMonument);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const t = TRANSLATIONS[currentLanguage];

  const displayName = currentLanguage !== 'en' && selectedMonument.hindiName ? selectedMonument.hindiName : selectedMonument.name;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {isCameraActive ? (
        /* Live Camera Overlay Viewport */
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#000000',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 5000,
        }}>
          {/* Top Camera Controls */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(24, 28, 50, 0.88)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '18px',
            padding: '8px 14px',
            zIndex: 50,
          }}>
            <button
              onClick={() => setIsCameraActive(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={14} />
              <span>{t.exitARButton}</span>
            </button>

            <div style={{ textAlign: 'center', maxWidth: '160px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a594fd', fontFamily: 'Outfit, sans-serif', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {displayName}
              </span>
              <span style={{ fontSize: '0.6rem', color: '#94a3b8', display: 'block' }}>
                {selectedMonument.location.state}
              </span>
            </div>

            <button
              onClick={onOpenMarkerModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: '#4c35de',
                border: 'none',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <QrCode size={13} />
              <span>Marker</span>
            </button>
          </div>

          {/* Active Target Floating HUD Pill */}
          <div style={{
            position: 'absolute',
            top: '72px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(76, 53, 222, 0.88)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.68rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 50,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            whiteSpace: 'nowrap',
          }}>
            <div className="pulse-dot" />
            <span>Universal 3D Target: {displayName}</span>
          </div>

          {/* Iframe Viewport */}
          <div style={{ position: 'relative', flexGrow: 1, width: '100%', height: '100%' }}>
            <iframe
              src="/ar/index.html"
              title="SanskritiSetu AR Camera"
              allow="camera; microphone; accelerometer; gyroscope; xr-spatial-tracking"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#000000',
              }}
            />

            {/* In-Camera Laser Reticle HUD */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '210px',
              height: '210px',
              border: '2px solid rgba(93, 64, 245, 0.8)',
              borderRadius: '20px',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div className="hud-laser" />
              <div style={{
                position: 'absolute',
                bottom: '-32px',
                background: 'rgba(24, 28, 50, 0.92)',
                color: '#ffffff',
                padding: '4px 12px',
                borderRadius: '10px',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(93, 64, 245, 0.4)',
              }}>
                {t.alignMarkerHUD}
              </div>
            </div>
          </div>

          {/* Bottom Floating Exit Action */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            left: '16px',
            right: '16px',
            zIndex: 50,
          }}>
            <button
              onClick={() => setIsCameraActive(false)}
              className="btn-digi-purple"
              style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
            >
              <span>{t.finishARExploration}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Standalone AR Explorer Launch Hub */
        <>
          {/* Top Bar */}
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
              {t.spatialARExplorerTitle}
            </h2>

            <div style={{ width: '24px' }} />
          </div>

          {/* Purple Hero Banner */}
          <div className="digi-hero-card" style={{ textAlign: 'center', padding: '20px 16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              margin: '0 auto 10px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Camera size={26} />
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0', fontFamily: 'Outfit, sans-serif' }}>
              {t.augmentedRealityView}
            </h3>
            <p style={{ fontSize: '0.76rem', color: '#e0dbff', margin: 0, lineHeight: 1.4 }}>
              {t.arExplorerDesc}
            </p>
          </div>

          {/* Select Monument Carousel Section */}
          <div>
            <div className="digi-section-header">
              <h3 className="digi-section-title">
                <Layers size={17} color="#4c35de" />
                <span>{t.selectTargetModel}</span>
              </h3>
              <span style={{ fontSize: '0.72rem', color: '#4c35de', fontWeight: 700 }}>
                {MONUMENTS.length} Ready
              </span>
            </div>

            {/* Horizontal Monument Carousel Selector */}
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
              {MONUMENTS.map((m) => {
                const isSelected = selectedMonument.id === m.id;
                const mName = currentLanguage !== 'en' && m.hindiName ? m.hindiName : m.name;

                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedMonument(m)}
                    className="digi-card"
                    style={{
                      minWidth: '140px',
                      maxWidth: '140px',
                      padding: '10px',
                      margin: 0,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      flexShrink: 0,
                      border: isSelected ? '2px solid #4c35de' : '1px solid #eceef5',
                      background: isSelected ? '#f7f5ff' : '#ffffff',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '6px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                    }}>
                      <HeritageImage src={m.heroImage} alt={mName} />
                    </div>

                    <strong style={{
                      fontSize: '0.76rem',
                      color: isSelected ? '#4c35de' : '#181c32',
                      display: 'block',
                      lineHeight: 1.2,
                      marginBottom: '2px',
                      fontFamily: 'Outfit, sans-serif',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '100%',
                    }}>
                      {mName}
                    </strong>
                    <span style={{ fontSize: '0.64rem', color: '#8b92ab', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                      {m.location.state}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Target Preview Card */}
          <div className="digi-card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {t.targetHeritageModel}
              </span>
              <span style={{ fontSize: '0.64rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '2px 6px', borderRadius: '6px' }}>
                Universal AR Anchor Ready
              </span>
            </div>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
              {displayName}
            </h4>

            <div style={{ height: '130px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f4f5fb', marginBottom: '12px' }}>
              <HeritageImage src={selectedMonument.heroImage} alt={displayName} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px', fontSize: '0.74rem', color: '#4b526d' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>Binary glTF 2.0 • 184,200 High-Density Triangles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>Universal Marker Alignment (Default Marker Anchor)</span>
              </div>
            </div>

            {/* Smart Universal Note */}
            <div style={{
              padding: '8px 10px',
              backgroundColor: '#f8f9fe',
              borderRadius: '10px',
              border: '1px solid #eceef5',
              fontSize: '0.68rem',
              color: '#4c35de',
              marginBottom: '14px',
              lineHeight: 1.3,
            }}>
              {t.universalPipelineDesc}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => setIsCameraActive(true)}
                className="btn-digi-purple"
              >
                <Camera size={16} />
                <span>{t.launchCameraARView}</span>
              </button>

              <button
                onClick={onOpenMarkerModal}
                className="btn-digi-secondary"
              >
                <QrCode size={15} />
                <span>{t.viewPrintMarker}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
