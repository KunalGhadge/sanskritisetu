import React from 'react';
import { STATES_DATA, ISSUING_AUTHORITIES } from '../data/states';
import {
  Shield,
  Search,
  Compass,
  Database,
  Layers,
  Award,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Building2,
  Box,
  QrCode,
  Globe
} from 'lucide-react';

interface HomeScreenProps {
  onOpenMonument: (monumentId: string) => void;
  onOpenState: (stateId: string) => void;
  onNavigateTab: (tab: 'home' | 'repository' | 'ar_explorer' | 'vault' | 'trust') => void;
  onOpenMarkerModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenMonument,
  onOpenState,
  onNavigateTab,
  onOpenMarkerModal,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Greeting Bar (Matches Reference Image) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 2px 0' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#181c32', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
            Hi <span style={{ color: '#4c35de' }}>Citizen</span>
          </h2>
          <p style={{ fontSize: '0.76rem', color: '#8b92ab', margin: '2px 0 0 0', fontWeight: 500 }}>
            Welcome back to SanskritiSetu!
          </p>
        </div>

        {/* Profile Avatar / Emblem */}
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: '#f2efff',
          border: '2px solid #e3dfff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4c35de',
          boxShadow: '0 4px 12px rgba(76, 53, 222, 0.12)',
        }}>
          <Shield size={20} />
        </div>
      </div>

      {/* Purple Gradient Hero Banner (Matches Reference COVID-19 Card) */}
      <div className="digi-hero-card" onClick={() => onNavigateTab('ar_explorer')} style={{ cursor: 'pointer' }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '0.64rem',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: '12px',
            marginBottom: '8px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Spatial WebAR Engine Live
          </span>
          <h3 style={{ fontSize: '1.22rem', fontWeight: 800, margin: '0 0 4px 0', lineHeight: 1.2, fontFamily: 'Outfit, sans-serif' }}>
            Digital Heritage Vault
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#e0dbff', margin: '0 0 14px 0', maxWidth: '240px' }}>
            Explore 3D digital twins and augmented reality monuments
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigateTab('ar_explorer');
            }}
            style={{
              background: '#ffffff',
              color: '#4c35de',
              border: 'none',
              borderRadius: '14px',
              padding: '7px 16px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            Launch AR Experience
          </button>
        </div>

        {/* Decorative Background Glow */}
        <div style={{
          position: 'absolute',
          right: '-10px',
          bottom: '-10px',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Section 1: Preserved Heritage Records (Matches "Issued Documents" in Reference) */}
      <div>
        <div className="digi-section-header">
          <h3 className="digi-section-title">Preserved Heritage Records</h3>
          <span onClick={() => onNavigateTab('repository')} className="digi-view-all">View All</span>
        </div>

        {/* Horizontal Slider of Preserved Record Cards */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {/* Card 1: Stone Chariot */}
          <div
            onClick={() => onOpenMonument('stone-chariot')}
            className="digi-card"
            style={{
              minWidth: '150px',
              maxWidth: '150px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
            }}>
              <img
                src="https://images.unsplash.com/photo-1600100397608-f010f4439c3e?q=80&w=200&auto=format&fit=crop"
                alt="Stone Chariot"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <strong style={{ fontSize: '0.8rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px' }}>
              Stone Chariot
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              Hampi, Karnataka
            </span>
          </div>

          {/* Card 2: Raigad Fort */}
          <div
            onClick={() => onNavigateTab('repository')}
            className="digi-card"
            style={{
              minWidth: '150px',
              maxWidth: '150px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
            }}>
              <img
                src="https://images.unsplash.com/photo-1626014303757-656c5354924c?q=80&w=200&auto=format&fit=crop"
                alt="Raigad Fort"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <strong style={{ fontSize: '0.8rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px' }}>
              Raigad Fort
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              Maharashtra
            </span>
          </div>

          {/* Card 3: Brihadisvara */}
          <div
            onClick={() => onNavigateTab('repository')}
            className="digi-card"
            style={{
              minWidth: '150px',
              maxWidth: '150px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
            }}>
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=200&auto=format&fit=crop"
                alt="Brihadisvara Temple"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <strong style={{ fontSize: '0.8rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px' }}>
              Brihadisvara
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              Tamil Nadu
            </span>
          </div>
        </div>
      </div>

      {/* Section 2: State Heritage Collection (Matches "State Government" in Reference) */}
      <div>
        <div className="digi-section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <h3 className="digi-section-title">State Government Archives</h3>
          </div>
          <span onClick={() => onNavigateTab('repository')} className="digi-view-all">View All</span>
        </div>

        {/* State Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {STATES_DATA.slice(0, 4).map((state) => (
            <div
              key={state.id}
              onClick={() => onOpenState(state.id)}
              className="digi-card"
              style={{
                padding: '14px',
                margin: 0,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#f2efff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                color: '#4c35de',
              }}>
                <Building2 size={22} />
              </div>
              <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px' }}>
                {state.name}
              </strong>
              <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>
                {state.monumentCount} Monuments
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Central Government (Matches "Central Government" in Reference) */}
      <div>
        <div className="digi-section-header">
          <h3 className="digi-section-title">Central Government Custodians</h3>
          <span onClick={() => onNavigateTab('trust')} className="digi-view-all">View All</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ISSUING_AUTHORITIES.slice(0, 2).map((auth, i) => (
            <div
              key={i}
              onClick={() => onNavigateTab('trust')}
              className="digi-card"
              style={{
                padding: '12px 14px',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  background: '#f2efff',
                  color: '#4c35de',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Shield size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.8rem', color: '#181c32', display: 'block' }}>{auth.name}</strong>
                  <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>{auth.recordsCount}</span>
                </div>
              </div>
              <ChevronRight size={16} color="#8b92ab" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
