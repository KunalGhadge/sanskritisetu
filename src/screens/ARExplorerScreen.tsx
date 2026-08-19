import React, { useState } from 'react';
import { MonumentData, MONUMENTS } from '../data/monuments';
import { HeritageImage } from '../components/HeritageImage';
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
  Scan,
  Image as ImageIcon,
  HelpCircle,
  X,
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
  const [isMindARActive, setIsMindARActive] = useState<boolean>(false);
  const [showTargetModal, setShowTargetModal] = useState<boolean>(false);

  const t = TRANSLATIONS[currentLanguage];
  const displayName = currentLanguage !== 'en' && selectedMonument.hindiName ? selectedMonument.hindiName : selectedMonument.name;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* 1. Fullscreen MindAR Camera View */}
      {isMindARActive && (
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
            background: 'rgba(20, 24, 40, 0.88)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '20px',
            padding: '8px 14px',
            zIndex: 150,
          }}>
            <button
              onClick={() => setIsMindARActive(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                color: '#ffffff',
                padding: '8px 14px',
                borderRadius: '12px',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={16} />
              <span>Exit AR</span>
            </button>

            <div style={{ textAlign: 'center', maxWidth: '160px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {displayName}
              </span>
              <span style={{ fontSize: '0.62rem', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Sparkles size={10} />
                <span>MindAR AI Vision (targets.mind)</span>
              </span>
            </div>

            <button
              onClick={() => setShowTargetModal(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: '#4c35de',
                border: 'none',
                color: '#ffffff',
                padding: '8px 12px',
                borderRadius: '12px',
                fontSize: '0.74rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <ImageIcon size={14} />
              <span>Target</span>
            </button>
          </div>

          {/* Iframe Viewport Loading MindAR Engine */}
          <div style={{ position: 'relative', flexGrow: 1, width: '100%', height: '100%' }}>
            <iframe
              src="/ar/index.html"
              title="SanskritiSetu MindAR Camera"
              allow="camera; microphone; accelerometer; gyroscope; xr-spatial-tracking"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#000000',
              }}
            />
          </div>

          {/* Bottom Floating Exit & Helper Bar */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            left: '16px',
            right: '16px',
            zIndex: 150,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <button
              onClick={() => setIsMindARActive(false)}
              className="btn-digi-purple"
              style={{ width: '100%', padding: '14px', fontSize: '0.88rem' }}
            >
              <span>{t.finishARExploration}</span>
            </button>
          </div>
        </div>
      )}

      {/* Target Image Preview Modal */}
      {showTargetModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(10, 13, 24, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <div className="digi-card" style={{ maxWidth: '360px', width: '100%', padding: '20px', margin: 0, position: 'relative' }}>
            <button
              onClick={() => setShowTargetModal(false)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#f4f5fb',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} color="#181c32" />
            </button>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#181c32', margin: '0 0 6px 0', fontFamily: 'Outfit, sans-serif' }}>
              MindAR Target Reference
            </h3>
            <p style={{ fontSize: '0.74rem', color: '#64748b', margin: '0 0 14px 0', lineHeight: 1.4 }}>
              Point your camera at this image (or display it on your laptop/second screen) to anchor the 3D Stone Chariot!
            </p>

            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid #4c35de',
              marginBottom: '14px',
              boxShadow: '0 8px 24px rgba(76, 53, 222, 0.15)',
              backgroundColor: '#f8f9fe',
            }}>
              <img
                src="/ar/assets/target-image.jpg"
                alt="MindAR Target Image"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>

            <button
              onClick={() => setShowTargetModal(false)}
              className="btn-digi-purple"
              style={{ width: '100%', padding: '12px', fontSize: '0.84rem' }}
            >
              <span>Back to Scanner</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Hub Top Bar */}
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
          <Scan size={24} />
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 2px 0', fontFamily: 'Outfit, sans-serif' }}>
          MindAR AI Natural Tracking
        </h3>
        <p style={{ fontSize: '0.74rem', color: '#e0dbff', margin: 0, lineHeight: 1.35 }}>
          Real TensorFlow.js Computer Vision. Anchors 3D models onto natural images with true 6-DoF tracking.
        </p>
      </div>

      {/* Monument Selector Carousel */}
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

      {/* MindAR Target Launch Card */}
      <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            AI Computer Vision Target
          </span>
          <span style={{ fontSize: '0.64rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '2px 6px', borderRadius: '6px' }}>
            ● targets.mind Compiled
          </span>
        </div>

        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
          {displayName}
        </h4>

        <div style={{ height: '140px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f4f5fb', marginBottom: '12px' }}>
          <HeritageImage src={selectedMonument.heroImage} alt={displayName} />
        </div>

        {/* Feature Points Callout */}
        <div style={{
          padding: '10px 12px',
          backgroundColor: '#f8f9fe',
          borderRadius: '12px',
          border: '1px solid #eceef5',
          fontSize: '0.72rem',
          color: '#4b526d',
          marginBottom: '14px',
          lineHeight: 1.4,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={13} color="#10b981" />
            <span><strong>Real 6-DoF SLAM:</strong> Locks onto the photograph using AI feature point matching.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={13} color="#10b981" />
            <span><strong>Zero Google Play Restrictions:</strong> Runs in WebAssembly on all devices.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={() => setIsMindARActive(true)}
            className="btn-digi-purple"
            style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
          >
            <Camera size={18} />
            <span>Launch MindAR AI Scanner</span>
          </button>

          <button
            onClick={() => setShowTargetModal(true)}
            className="btn-digi-secondary"
            style={{ padding: '10px' }}
          >
            <ImageIcon size={15} />
            <span>View Target Image to Scan</span>
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
        </div>
      </div>
    </div>
  );
};
