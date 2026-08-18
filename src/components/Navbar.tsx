import React from 'react';
import { Database, Compass, QrCode, Shield } from 'lucide-react';

interface NavbarProps {
  currentTab: 'vault' | 'explorer';
  onSelectTab: (tab: 'vault' | 'explorer') => void;
  onOpenMarkerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenMarkerModal,
}) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
    }}>
      {/* Top Tricolor Banner */}
      <div className="gov-strip" />

      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        {/* Brand */}
        <div 
          onClick={() => onSelectTab('vault')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            backgroundColor: '#0b1528',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Shield size={18} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                color: '#0f172a',
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}>
                SanskritiSetu
              </span>
              <span style={{
                color: '#64748b',
                fontSize: '0.82rem',
                fontWeight: 500,
              }}>
                (संस्कृतिसेतु)
              </span>
            </div>
            <p style={{
              color: '#64748b',
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              margin: 0,
              fontWeight: 600,
            }}>
              Ministry of Culture
            </p>
          </div>
        </div>

        {/* 2 Main Segmented Controls */}
        <div style={{
          display: 'flex',
          backgroundColor: '#f1f5f9',
          borderRadius: '8px',
          padding: '3px',
          gap: '3px',
          flexGrow: 0,
        }}>
          <button
            onClick={() => onSelectTab('vault')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              backgroundColor: currentTab === 'vault' ? '#ffffff' : 'transparent',
              color: currentTab === 'vault' ? '#0f172a' : '#64748b',
              boxShadow: currentTab === 'vault' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            <Database size={15} color={currentTab === 'vault' ? '#0b1528' : '#64748b'} />
            <span>1. Vault</span>
          </button>

          <button
            onClick={() => onSelectTab('explorer')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              backgroundColor: currentTab === 'explorer' ? '#0b1528' : 'transparent',
              color: currentTab === 'explorer' ? '#ffffff' : '#64748b',
              boxShadow: currentTab === 'explorer' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            <Compass size={15} color={currentTab === 'explorer' ? '#38bdf8' : '#64748b'} />
            <span>2. AR Explore</span>
          </button>
        </div>

        {/* AR Marker Quick Trigger */}
        <div>
          <button
            onClick={onOpenMarkerModal}
            className="btn-secondary"
            style={{
              padding: '7px 12px',
              fontSize: '0.78rem',
              borderRadius: '8px',
            }}
          >
            <QrCode size={14} />
            <span style={{ display: 'inline-block' }}>Marker</span>
          </button>
        </div>
      </div>
    </header>
  );
};
