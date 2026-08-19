import React, { useState } from 'react';
import {
  Shield,
  CheckCircle2,
  Lock,
  Globe,
  Database,
  Building2,
  FileCheck2,
  HelpCircle,
  Phone,
  ChevronRight,
  ChevronDown,
  Info,
  Smartphone,
  Maximize2,
  Minimize2,
  Award,
  Layers,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';

interface TrustProfileScreenProps {
  currentLanguage: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  notchMode: 'auto' | 'webapp' | 'app';
  onSelectNotchMode: (mode: 'auto' | 'webapp' | 'app') => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const TrustProfileScreen: React.FC<TrustProfileScreenProps> = ({
  currentLanguage,
  onSelectLanguage,
  notchMode,
  onSelectNotchMode,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showHashDetails, setShowHashDetails] = useState(false);

  const t = TRANSLATIONS[currentLanguage];

  const FAQS = [
    {
      q: 'How are monument 3D digital twins photogrammetrically scanned & verified?',
      a: 'Each monument undergoes multi-spectral photogrammetry combining high-density Terrestrial Laser Scanning (TLS) and drone captures, capturing over 5,000 overlapping RAW images to reconstruct millimeter-accurate 3D topology.'
    },
    {
      q: 'Does SanskritiSetu comply with international UNESCO standards?',
      a: 'Yes. SanskritiSetu adheres to Article 3 of the UNESCO Charter on the Preservation of Digital Heritage (2003) and the London Charter for Computer-based Visualisation of Cultural Heritage.'
    },
    {
      q: 'Can schools and citizens use the AR Explorer on low-cost devices?',
      a: 'Yes! SanskritiSetu is engineered as a zero-install WebAR application that runs directly in any modern mobile browser without requiring app store downloads or expensive LiDAR hardware.'
    },
    {
      q: 'How is digital data tamper-proofing achieved?',
      a: 'Every 3D mesh, texture atlas, and historical audio guide is hashed using SHA-256 cryptographic algorithms and committed to sovereign National Data Center nodes.'
    },
    {
      q: 'How are state archaeological departments integrated?',
      a: 'State archaeology directorates (e.g. Maharashtra, Karnataka, Tamil Nadu) securely ingest verified cadastral and site excavation records through sovereign API pipelines.'
    }
  ];

  const LANGUAGES: { code: LanguageCode; label: string; native: string; flag: string }[] = [
    { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', label: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Profile & National Cloud ID Card */}
      <div className="digi-card" style={{ padding: '18px 16px', margin: 0, background: 'linear-gradient(135deg, #4c35de 0%, #301f9c 100%)', color: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}>
            <Shield size={24} />
          </div>

          <div style={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong style={{ fontSize: '1rem', fontFamily: 'Outfit, sans-serif' }}>Sovereign Citizen ID</strong>
              <div style={{ background: '#10b981', color: '#ffffff', padding: '1px 6px', borderRadius: '6px', fontSize: '0.6rem', fontWeight: 800 }}>
                Active
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', color: '#e0dbff', display: 'block', fontFamily: 'monospace' }}>
              NDHM-2026-IND-8841
            </span>
          </div>
        </div>

        <div style={{
          marginTop: '14px',
          padding: '8px 12px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.7rem',
          color: '#e0dbff',
        }}>
          <span>3,690 National Assets Synced</span>
          <span style={{ fontWeight: 800, color: '#ffffff' }}>100% Verified</span>
        </div>
      </div>

      {/* Settings Group 1: Language & Display */}
      <div className="digi-card" style={{ padding: '6px 14px', margin: 0 }}>
        {/* Language Row */}
        <div
          onClick={() => setShowLanguageModal(true)}
          style={{
            padding: '12px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            borderBottom: '1px solid #f1f3fa',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: '#f2efff',
              color: '#4c35de',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Globe size={18} />
            </div>
            <div>
              <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block' }}>
                {t.appLanguageTitle}
              </strong>
              <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>
                {t.languageName} (Active)
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4c35de', fontSize: '0.74rem', fontWeight: 800 }}>
            <span>{t.changeButton}</span>
            <ChevronRight size={15} />
          </div>
        </div>

        {/* Notch / Safe Area Display Row */}
        <div style={{ padding: '12px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: '#f2efff',
                color: '#4c35de',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Smartphone size={18} />
              </div>
              <strong style={{ fontSize: '0.82rem', color: '#181c32' }}>
                {t.deviceDisplayModeTitle}
              </strong>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
            {(['auto', 'webapp', 'app'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => onSelectNotchMode(mode)}
                style={{
                  padding: '7px 2px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  background: notchMode === mode ? '#4c35de' : '#f4f5fb',
                  color: notchMode === mode ? '#ffffff' : '#8b92ab',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {mode === 'auto' ? t.autoDetectMode : mode === 'webapp' ? t.webMode : t.nativeAppMode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Settings Group 2: Sovereign Trust & Ledger */}
      <div className="digi-card" style={{ padding: '14px 16px', margin: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} color="#4c35de" />
            <strong style={{ fontSize: '0.84rem', color: '#181c32', fontFamily: 'Outfit, sans-serif' }}>
              {t.preservationScoreTitle}
            </strong>
          </div>
          <span style={{ fontSize: '0.66rem', color: '#10b981', fontWeight: 800, background: '#ecfdf5', padding: '2px 6px', borderRadius: '6px' }}>
            {t.fullyCompliantBadge}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.74rem', color: '#4b526d' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={14} color="#10b981" />
            <span>{t.digitalIndiaActCompliance}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={14} color="#10b981" />
            <span>{t.unescoCharterCompliance}</span>
          </div>
        </div>

        <button
          onClick={() => setShowHashDetails(!showHashDetails)}
          style={{
            marginTop: '10px',
            background: '#f8f9fe',
            border: '1px solid #eceef5',
            borderRadius: '10px',
            padding: '8px 10px',
            width: '100%',
            fontSize: '0.68rem',
            color: '#4c35de',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>{t.rootHashLabel}</span>
          <ChevronDown size={14} style={{ transform: showHashDetails ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }} />
        </button>

        {showHashDetails && (
          <div style={{
            marginTop: '6px',
            padding: '8px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e3dfff',
            fontFamily: 'monospace',
            fontSize: '0.62rem',
            color: '#181c32',
            wordBreak: 'break-all',
          }}>
            SHA256: 8f9b4c1a7d6e5f2b8a9c3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0
          </div>
        )}
      </div>

      {/* Settings Group 3: Frequently Asked Questions (FAQ) */}
      <div>
        <div className="digi-section-header">
          <h3 className="digi-section-title">
            <HelpCircle size={17} color="#4c35de" />
            <span>{t.faqTitle}</span>
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="digi-card"
                style={{ padding: '12px 14px', margin: 0, cursor: 'pointer' }}
                onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <strong style={{ fontSize: '0.78rem', color: '#181c32', fontFamily: 'Outfit, sans-serif', lineHeight: 1.3 }}>
                    {faq.q}
                  </strong>
                  {isOpen ? <ChevronDown size={15} color="#4c35de" /> : <ChevronRight size={15} color="#8b92ab" />}
                </div>

                {isOpen && (
                  <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: '8px 0 0 0', lineHeight: 1.4, borderTop: '1px solid #f1f3fa', paddingTop: '8px' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings Group 4: Helpline & Support */}
      <div className="digi-card" style={{ padding: '14px 16px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#f2efff',
            color: '#4c35de',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Phone size={16} />
          </div>
          <div>
            <strong style={{ fontSize: '0.78rem', color: '#181c32', display: 'block' }}>{t.nationalHelplineTitle}</strong>
            <span style={{ fontSize: '0.68rem', color: '#4c35de', fontWeight: 800 }}>{t.tollFreeNumber}</span>
          </div>
        </div>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(24, 28, 50, 0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setShowLanguageModal(false)}
        >
          <div
            className="digi-card"
            style={{ maxWidth: '340px', width: '100%', margin: 0, padding: '20px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#181c32', margin: '0 0 12px 0', fontFamily: 'Outfit, sans-serif' }}>
              {t.selectLanguageModalTitle}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {LANGUAGES.map((lang) => {
                const isSelected = currentLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelectLanguage(lang.code);
                      setShowLanguageModal(false);
                    }}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '14px',
                      border: isSelected ? '1.5px solid #4c35de' : '1px solid #eceef5',
                      background: isSelected ? '#f2efff' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
                      <div style={{ textAlign: 'left' }}>
                        <strong style={{ fontSize: '0.84rem', color: '#181c32', display: 'block' }}>{lang.native}</strong>
                        <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>{lang.label}</span>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 size={16} color="#4c35de" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
