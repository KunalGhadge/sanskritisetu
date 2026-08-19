import React, { useState } from 'react';
import { MonumentData, MONUMENTS } from '../data/monuments';
import { HeritageImage } from '../components/HeritageImage';
import { GoogleARViewer } from '../components/GoogleARViewer';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import { Camera, QrCode, ArrowLeft, ArrowRight, Compass, Box, CheckCircle2, ChevronLeft, Layers, Sparkles, Shield, Eye, ExternalLink, MapPin } from 'lucide-react';
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
  const t = TRANSLATIONS[currentLanguage];

  const displayName = currentLanguage !== 'en' && selectedMonument.hindiName ? selectedMonument.hindiName : selectedMonument.name;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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

      {/* Hero Banner */}
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
          Google ARCore & WebXR Real-World Spatial Projection. No markers or printed paper needed!
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

      {/* Google AR Viewer Interactive 3D & Real Floor AR Card */}
      <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {t.targetHeritageModel}
          </span>
          <span style={{ fontSize: '0.64rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '2px 6px', borderRadius: '6px' }}>
            ● Google ARCore Live
          </span>
        </div>

        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
          {displayName}
        </h4>

        {/* Embedded Google AR Scene Viewer Component */}
        <GoogleARViewer
          key={selectedMonument.id}
          src={selectedMonument.glbModelPath}
          alt={displayName}
          monumentName={displayName}
          currentLanguage={currentLanguage}
        />

        {/* Quick Instructions Callout */}
        <div style={{
          marginTop: '12px',
          padding: '10px 12px',
          backgroundColor: '#f8f9fe',
          borderRadius: '12px',
          border: '1px solid #eceef5',
          fontSize: '0.72rem',
          color: '#4b526d',
          lineHeight: 1.4,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={13} color="#10b981" />
            <span><strong>Step 1:</strong> Tap the purple button above on your phone.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={13} color="#10b981" />
            <span><strong>Step 2:</strong> Point your camera at the floor or desk to place the monument in real space.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={13} color="#10b981" />
            <span><strong>Step 3:</strong> Walk around, inspect carvings, or pinch to resize!</span>
          </div>
        </div>

        {/* Additional Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
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
    </div>
  );
};
