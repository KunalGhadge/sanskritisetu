import React, { useState } from 'react';
import { MonumentData } from '../data/monuments';
import { HeritageImage } from '../components/HeritageImage';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import { Camera, QrCode, ArrowLeft, ArrowRight, Compass, Box, CheckCircle2, ChevronLeft } from 'lucide-react';

interface ARExplorerScreenProps {
  currentLanguage: LanguageCode;
  monument: MonumentData;
  onOpenMarkerModal: () => void;
  onBack?: () => void;
}

export const ARExplorerScreen: React.FC<ARExplorerScreenProps> = ({
  currentLanguage,
  monument,
  onOpenMarkerModal,
  onBack,
}) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const t = TRANSLATIONS[currentLanguage];

  const displayName = currentLanguage !== 'en' && monument.hindiName ? monument.hindiName : monument.name;

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

            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a594fd', fontFamily: 'Outfit, sans-serif' }}>
              {displayName}
            </span>

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

          {/* Purple Hero Card */}
          <div className="digi-hero-card" style={{ textAlign: 'center', padding: '24px 18px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              margin: '0 auto 12px',
              borderRadius: '18px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Camera size={28} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0', fontFamily: 'Outfit, sans-serif' }}>
              {t.augmentedRealityView}
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#e0dbff', margin: 0 }}>
              {t.arExplorerDesc}
            </p>
          </div>

          {/* Selected Monument Card */}
          <div className="digi-card" style={{ padding: '18px' }}>
            <span style={{ fontSize: '0.68rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t.targetHeritageModel}
            </span>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '2px 0 12px 0', fontFamily: 'Outfit, sans-serif' }}>
              {displayName}
            </h4>

            <div style={{ height: '140px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f4f5fb', marginBottom: '14px' }}>
              <HeritageImage src={monument.heroImage} alt={displayName} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#4b526d' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span>Binary glTF 2.0 (184,200 Triangles)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#4b526d' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span>Bilingual audio narration synchronized</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
