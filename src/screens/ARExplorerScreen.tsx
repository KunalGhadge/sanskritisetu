import React, { useState } from 'react';
import { MonumentData, MONUMENTS } from '../data/monuments';
import { HeritageImage } from '../components/HeritageImage';
import { SpatialCameraAR } from '../components/SpatialCameraAR';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import {
  Camera,
  QrCode,
  ArrowLeft,
  ChevronLeft,
  Layers,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  RotateCw,
  Compass,
  Box,
  Eye,
  Sliders,
} from 'lucide-react';
import { STANDALONE_WEBAR_URL } from '../utils/constants';

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
  const [arMode, setArMode] = useState<'spatial' | 'marker'>('spatial');
  const [isSpatialActive, setIsSpatialActive] = useState<boolean>(false);
  const [isMarkerActive, setIsMarkerActive] = useState<boolean>(false);

  const t = TRANSLATIONS[currentLanguage];
  const displayName = currentLanguage !== 'en' && selectedMonument.hindiName ? selectedMonument.hindiName : selectedMonument.name;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* 1. Fullscreen Spatial Camera AR View */}
      {isSpatialActive && (
        <SpatialCameraAR
          monument={selectedMonument}
          currentLanguage={currentLanguage}
          onExit={() => setIsSpatialActive(false)}
        />
      )}

      {/* 2. Fullscreen Classic AR.js View */}
      {isMarkerActive && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#000000',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999,
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
              onClick={() => setIsMarkerActive(false)}
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
                Classic AR.js Marker Mode
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

          {/* Iframe Viewport */}
          <div style={{ position: 'relative', flexGrow: 1, width: '100%', height: '100%' }}>
            <iframe
              src="/ar/index.html"
              title="SanskritiSetu AR.js Camera"
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

          {/* Bottom Floating Exit */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            left: '16px',
            right: '16px',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <a
              href={STANDALONE_WEBAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(24, 28, 50, 0.88)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '12px',
                padding: '8px 12px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.74rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <ExternalLink size={14} color="#a5b4fc" />
              <span>Camera issue? {t.openInBrowserAR} ↗</span>
            </a>

            <button
              onClick={() => setIsMarkerActive(false)}
              className="btn-digi-purple"
              style={{ width: '100%', padding: '12px', fontSize: '0.88rem' }}
            >
              <span>{t.finishARExploration}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main AR Hub Screen */}
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

      {/* Hero Banner */}
      <div className="digi-hero-card" style={{ textAlign: 'center', padding: '18px 16px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          margin: '0 auto 8px',
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Camera size={24} />
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 2px 0', fontFamily: 'Outfit, sans-serif' }}>
          {t.augmentedRealityView}
        </h3>
        <p style={{ fontSize: '0.74rem', color: '#e0dbff', margin: 0, lineHeight: 1.35 }}>
          Project sacred Indian monuments into your real physical room or on your desk with zero markers!
        </p>
      </div>

      {/* AR Mode Switcher Segmented Control */}
      <div style={{
        display: 'flex',
        background: '#e9ebf5',
        borderRadius: '14px',
        padding: '3px',
        gap: '3px',
      }}>
        <button
          onClick={() => setArMode('spatial')}
          style={{
            flex: 1,
            padding: '8px 10px',
            borderRadius: '11px',
            border: 'none',
            background: arMode === 'spatial' ? '#ffffff' : 'transparent',
            color: arMode === 'spatial' ? '#4c35de' : '#64748b',
            fontWeight: 800,
            fontSize: '0.75rem',
            cursor: 'pointer',
            boxShadow: arMode === 'spatial' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <Sparkles size={13} color={arMode === 'spatial' ? '#4c35de' : '#64748b'} />
          <span>Spatial Camera AR (Recommended)</span>
        </button>

        <button
          onClick={() => setArMode('marker')}
          style={{
            flex: 1,
            padding: '8px 10px',
            borderRadius: '11px',
            border: 'none',
            background: arMode === 'marker' ? '#ffffff' : 'transparent',
            color: arMode === 'marker' ? '#4c35de' : '#64748b',
            fontWeight: 800,
            fontSize: '0.75rem',
            cursor: 'pointer',
            boxShadow: arMode === 'marker' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <QrCode size={13} color={arMode === 'marker' ? '#4c35de' : '#64748b'} />
          <span>Classic Marker AR (AR.js)</span>
        </button>
      </div>

      {/* Monument Carousel Selector */}
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

      {/* Mode 1: Spatial Camera AR Card */}
      {arMode === 'spatial' ? (
        <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Universal Spatial Engine
            </span>
            <span style={{ fontSize: '0.64rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '2px 6px', borderRadius: '6px' }}>
              ● 100% Device Ready
            </span>
          </div>

          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
            {displayName}
          </h4>

          <div style={{ height: '140px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f4f5fb', marginBottom: '12px' }}>
            <HeritageImage src={selectedMonument.heroImage} alt={displayName} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px', fontSize: '0.74rem', color: '#4b526d' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span>Real Camera Background + Gyroscope Motion Tracking</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span>Multi-Touch Gestures: Pinch-to-scale, Drag, 360° Rotate</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span>In-App AR Snapshot Tool (Saves photo directly to phone)</span>
            </div>
          </div>

          {/* Launch Action */}
          <button
            onClick={() => setIsSpatialActive(true)}
            className="btn-digi-purple"
            style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
          >
            <Camera size={18} />
            <span>Launch Spatial Camera AR (No Marker Needed)</span>
          </button>
        </div>
      ) : (
        /* Mode 2: Classic Marker AR (AR.js) Card */
        <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Classic Marker Engine
            </span>
            <span style={{ fontSize: '0.64rem', color: '#6366f1', fontWeight: 800, background: '#eef2ff', padding: '2px 6px', borderRadius: '6px' }}>
              AR.js Hiro Pattern
            </span>
          </div>

          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
            {displayName}
          </h4>

          <div style={{ height: '140px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f4f5fb', marginBottom: '12px' }}>
            <HeritageImage src={selectedMonument.heroImage} alt={displayName} />
          </div>

          <div style={{
            padding: '10px 12px',
            backgroundColor: '#f8f9fe',
            borderRadius: '12px',
            border: '1px solid #eceef5',
            fontSize: '0.72rem',
            color: '#4b526d',
            marginBottom: '14px',
            lineHeight: 1.4,
          }}>
            Point your camera at a printed <strong>Hiro Marker</strong> to view the 3D model anchored on top of it.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => setIsMarkerActive(true)}
              className="btn-digi-purple"
            >
              <Camera size={16} />
              <span>Launch AR.js Marker View</span>
            </button>

            <a
              href={STANDALONE_WEBAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                border: '1.5px solid #4c35de',
                background: '#f8f7ff',
                color: '#4c35de',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '10px 14px',
                borderRadius: '14px',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
              }}
            >
              <ExternalLink size={15} />
              <span>{t.openInBrowserAR} ↗</span>
            </a>

            <button
              onClick={onOpenMarkerModal}
              className="btn-digi-secondary"
              style={{ padding: '10px' }}
            >
              <QrCode size={15} />
              <span>{t.viewPrintMarker}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
