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
  Sparkles
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
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

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

  const LANGUAGES: { code: LanguageCode; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Header */}
      <div style={{ padding: '0 2px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#181c32', margin: '0 0 2px 0', fontFamily: 'Outfit, sans-serif' }}>
          National Trust & Governance Portal
        </h2>
        <p style={{ fontSize: '0.74rem', color: '#8b92ab', margin: 0 }}>
          Sovereign Cloud, Language Settings & Heritage Mission
        </p>
      </div>

      {/* Language Switcher Card */}
      <div
        onClick={() => setShowLanguageModal(true)}
        className="digi-card"
        style={{
          padding: '16px',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          border: '1.5px solid #e3dfff',
          background: 'linear-gradient(135deg, #ffffff 0%, #f7f5ff 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '14px',
            backgroundColor: '#f2efff',
            color: '#4c35de',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Globe size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.64rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase' }}>
              App Language / भाषा
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#181c32', display: 'block', fontFamily: 'Outfit, sans-serif' }}>
              {t.languageName} (Active)
            </strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.74rem', color: '#4c35de', fontWeight: 800 }}>Change</span>
          <ChevronRight size={16} color="#4c35de" />
        </div>
      </div>

      {/* National Mission Trust Certificate Card */}
      <div className="digi-card" style={{ padding: '18px', margin: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={20} color="#4c35de" />
            <strong style={{ fontSize: '0.86rem', color: '#181c32', fontFamily: 'Outfit, sans-serif' }}>
              100% Preservation Score
            </strong>
          </div>
          <span style={{
            background: '#ecfdf5',
            color: '#10b981',
            fontSize: '0.66rem',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '8px',
            border: '1px solid #a7f3d0',
          }}>
            Fully Compliant
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem', color: '#4b526d' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={15} color="#10b981" />
            <span>Digital India Act 2026 Sovereign Archival Mandate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={15} color="#10b981" />
            <span>UNESCO Digital Heritage Charter (Article 3 Verified)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={15} color="#10b981" />
            <span>ASI Archaeological Circles Real-time Cadastral Sync</span>
          </div>
        </div>

        {/* Cryptographic SHA-256 Root Seal */}
        <div style={{
          marginTop: '12px',
          padding: '10px 12px',
          backgroundColor: '#f8f9fe',
          borderRadius: '12px',
          border: '1px solid #eceef5',
          fontFamily: 'monospace',
          fontSize: '0.64rem',
          color: '#4c35de',
          wordBreak: 'break-all',
        }}>
          <span style={{ color: '#8b92ab', display: 'block', marginBottom: '2px', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
            Root Cryptographic Hash Ledger:
          </span>
          SHA256: 8f9b4c1a7d6e5f2b8a9c3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) */}
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
                style={{ padding: '14px 16px', margin: 0, cursor: 'pointer' }}
                onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                  <strong style={{ fontSize: '0.8rem', color: '#181c32', fontFamily: 'Outfit, sans-serif', lineHeight: 1.3 }}>
                    {faq.q}
                  </strong>
                  {isOpen ? <ChevronDown size={16} color="#4c35de" /> : <ChevronRight size={16} color="#8b92ab" />}
                </div>

                {isOpen && (
                  <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: '10px 0 0 0', lineHeight: 1.5, borderTop: '1px solid #f1f3fa', paddingTop: '8px' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Display & Notch Mode Switcher */}
      <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
        <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#181c32', margin: '0 0 10px 0', fontFamily: 'Outfit, sans-serif' }}>
          Device & Notch Display Mode
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginBottom: '12px' }}>
          {(['auto', 'webapp', 'app'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => onSelectNotchMode(mode)}
              style={{
                padding: '8px 4px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'capitalize',
                background: notchMode === mode ? '#4c35de' : '#f4f5fb',
                color: notchMode === mode ? '#ffffff' : '#8b92ab',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {mode === 'auto' ? 'Auto Detect' : mode === 'webapp' ? 'Web (0 Dead)' : 'Native App'}
            </button>
          ))}
        </div>

        <button
          onClick={onToggleFullscreen}
          className="btn-digi-secondary"
          style={{ width: '100%', padding: '10px', fontSize: '0.78rem' }}
        >
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          <span>{isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen Immersive Mode'}</span>
        </button>
      </div>

      {/* Citizen Helpdesk & Contact Strip */}
      <div className="digi-card" style={{ padding: '14px 16px', margin: 0, backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <strong style={{ fontSize: '0.78rem', color: '#181c32', display: 'block' }}>National Heritage Helpline</strong>
            <span style={{ fontSize: '0.68rem', color: '#4c35de', fontWeight: 800 }}>Toll Free: 1800-11-4040</span>
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
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#181c32', margin: '0 0 12px 0', fontFamily: 'Outfit, sans-serif' }}>
              Select Official Language / भाषा चुनें
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
                      padding: '12px 14px',
                      borderRadius: '14px',
                      border: isSelected ? '1.5px solid #4c35de' : '1px solid #eceef5',
                      background: isSelected ? '#f2efff' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <strong style={{ fontSize: '0.84rem', color: '#181c32', display: 'block' }}>{lang.native}</strong>
                      <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>{lang.label}</span>
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
