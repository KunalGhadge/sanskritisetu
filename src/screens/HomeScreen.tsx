import React, { useState } from 'react';
import { STATES_DATA, ISSUING_AUTHORITIES, StateHeritage } from '../data/states';
import { MonumentData } from '../data/monuments';
import {
  Shield,
  Search,
  Compass,
  Database,
  Layers,
  Award,
  ArrowRight,
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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* DigiLocker-Style Sovereign Header Card */}
      <div className="app-card-dark" style={{
        padding: '18px 16px',
        background: 'linear-gradient(135deg, #0b1528 0%, #162a45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(217, 119, 6, 0.2)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              color: '#fbbf24',
              fontSize: '0.66rem',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '10px',
              marginBottom: '6px',
            }}>
              🇮🇳 Government of India • Ministry of Culture
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 2px 0', color: '#ffffff' }}>
              SanskritiSetu
            </h2>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
              National Digital Heritage Preservation Cloud
            </p>
          </div>

          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
          }}>
            <Shield size={20} />
          </div>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '8px 12px',
        }}>
          <Search size={15} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search monuments, states, ASI records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.8rem',
              outline: 'none',
              width: '100%',
            }}
          />
        </div>
      </div>

      {/* Featured National Monument (Stone Chariot, Hampi) */}
      <div className="app-card" style={{ padding: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase' }}>
            ★ Featured Heritage Asset
          </span>
          <span style={{
            fontSize: '0.68rem',
            background: '#ecfdf5',
            color: '#059669',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
          }}>
            <CheckCircle2 size={12} /> 3D & AR Live
          </span>
        </div>

        <div
          onClick={() => onOpenMonument('stone-chariot')}
          style={{
            position: 'relative',
            height: '140px',
            borderRadius: '14px',
            overflow: 'hidden',
            backgroundColor: '#0b1528',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600100397608-f010f4439c3e?q=80&w=1000&auto=format&fit=crop"
            alt="Stone Chariot Hampi"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(11,21,40,0.9) 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '10px 12px',
          }}>
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>
                Stone Chariot, Hampi
              </h3>
              <span style={{ color: '#cbd5e1', fontSize: '0.72rem' }}>
                UNESCO Site #356 • Vijayanagara Empire
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => onOpenMonument('stone-chariot')}
            className="btn-app-primary"
            style={{ padding: '10px', fontSize: '0.8rem', flexGrow: 1 }}
          >
            <Layers size={14} />
            <span>Open Vault</span>
          </button>
          <button
            onClick={() => onNavigateTab('ar_explorer')}
            className="btn-app-accent"
            style={{ padding: '10px', fontSize: '0.8rem', flexGrow: 1 }}
          >
            <Compass size={14} />
            <span>AR Experience</span>
          </button>
        </div>
      </div>

      {/* Quick Access DigiLocker Grid (4 Core Action Pillars) */}
      <div>
        <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', paddingLeft: '2px' }}>
          Quick Access Services
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div
            onClick={() => onNavigateTab('repository')}
            className="app-card"
            style={{ padding: '14px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={16} />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>Explore Heritage</strong>
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>National Repository</span>
          </div>

          <div
            onClick={() => onNavigateTab('vault')}
            className="app-card"
            style={{ padding: '14px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#fdf4ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={16} />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>Digital Vault</strong>
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>7-Tier Archives</span>
          </div>

          <div
            onClick={() => onNavigateTab('ar_explorer')}
            className="app-card"
            style={{ padding: '14px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={16} />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>AR Explorer</strong>
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Marker 3D Scanner</span>
          </div>

          <div
            onClick={onOpenMarkerModal}
            className="app-card"
            style={{ padding: '14px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={16} />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>AR Marker</strong>
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Print & Scan Card</span>
          </div>
        </div>
      </div>

      {/* Browse by States (6 Heritage States Collection) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingLeft: '2px' }}>
          <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Browse by State
          </h3>
          <span
            onClick={() => onNavigateTab('repository')}
            style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 700, cursor: 'pointer' }}
          >
            View All →
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {STATES_DATA.map((state) => (
            <div
              key={state.id}
              onClick={() => onOpenState(state.id)}
              className="app-card"
              style={{
                minWidth: '130px',
                padding: '10px',
                margin: 0,
                cursor: 'pointer',
                flexShrink: 0,
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ height: '70px', borderRadius: '10px', overflow: 'hidden', marginBottom: '6px', backgroundColor: '#0b1528' }}>
                <img src={state.coverImage} alt={state.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <strong style={{ fontSize: '0.8rem', color: '#0f172a', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {state.name}
              </strong>
              <span style={{ fontSize: '0.66rem', color: '#64748b' }}>
                {state.monumentCount} Monuments
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* National Preservation Statistics */}
      <div className="app-card-dark" style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fbbf24', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          National Preservation Metrics
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.75rem' }}>
          <div style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px' }}>
            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.66rem' }}>State Coverage</span>
            <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>28 States & 8 UTs</strong>
          </div>
          <div style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px' }}>
            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.66rem' }}>ASI Sovereign Records</span>
            <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>3,690+ Monuments</strong>
          </div>
          <div style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px' }}>
            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.66rem' }}>3D Digital Archives</span>
            <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Sub-mm GLB Mesh</strong>
          </div>
          <div style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px' }}>
            <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.66rem' }}>UNESCO Heritage</span>
            <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>42 National Sites</strong>
          </div>
        </div>
      </div>

      {/* Verified Issuing Government Authorities (DigiLocker Style) */}
      <div className="app-card" style={{ padding: '14px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
          Verified Issuing Authorities
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ISSUING_AUTHORITIES.map((auth, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#f8fafc', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={15} color="#2563eb" />
                <div>
                  <strong style={{ fontSize: '0.78rem', color: '#0f172a', display: 'block' }}>{auth.name}</strong>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{auth.recordsCount}</span>
                </div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#16a34a', fontSize: '0.68rem', fontWeight: 700 }}>
                <CheckCircle2 size={13} /> Verified
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
