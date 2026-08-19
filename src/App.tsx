import React, { useState, useEffect } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { RepositoryScreen } from './screens/RepositoryScreen';
import { ARExplorerScreen } from './screens/ARExplorerScreen';
import { ArchiveVaultScreen } from './screens/ArchiveVaultScreen';
import { TrustProfileScreen } from './screens/TrustProfileScreen';
import { MarkerModal } from './components/MarkerModal';
import { MONUMENTS } from './data/monuments';
import {
  Shield,
  Home,
  Database,
  Compass,
  Layers,
  ShieldCheck,
  QrCode,
  Maximize2,
  Minimize2,
  Sliders,
  Globe,
  Smartphone
} from 'lucide-react';

export type TabState = 'home' | 'repository' | 'ar_explorer' | 'vault' | 'trust';
export type NotchMode = 'auto' | 'webapp' | 'app';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabState>('home');
  const [selectedStateId, setSelectedStateId] = useState<string | undefined>(undefined);
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>('stone-chariot');
  const [isMarkerModalOpen, setIsMarkerModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notchMode, setNotchMode] = useState<NotchMode>('auto');
  const [showDisplayMenu, setShowDisplayMenu] = useState(false);

  const selectedMonument = MONUMENTS.find((m) => m.id === selectedMonumentId) || MONUMENTS[0];

  const handleOpenMonument = (monumentId: string) => {
    setSelectedMonumentId(monumentId);
    setActiveTab('vault');
  };

  const handleOpenState = (stateId: string) => {
    setSelectedStateId(stateId);
    setActiveTab('repository');
  };

  const handleLaunchAR = (monumentId?: string) => {
    if (monumentId) setSelectedMonumentId(monumentId);
    setActiveTab('ar_explorer');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const NAV_TABS = [
    { id: 'home' as TabState, label: 'Home', icon: Home },
    { id: 'repository' as TabState, label: 'Repository', icon: Database },
    { id: 'ar_explorer' as TabState, label: 'AR Explorer', icon: Compass },
    { id: 'vault' as TabState, label: 'Archive', icon: Layers },
    { id: 'trust' as TabState, label: 'Audit Trust', icon: ShieldCheck },
  ];

  return (
    <div className="mobile-app-wrapper">
      <div className={`mobile-phone-frame notch-mode-${notchMode} ${isFullscreen ? 'is-fullscreen' : ''}`}>
        {/* Safe Area Notch Spacer */}
        <div className="notch-top-spacer" />

        {/* Tricolor Strip */}
        <div className="gov-strip-mini" />

        {/* Sovereign Header */}
        <header className="mobile-app-header">
          <div
            onClick={() => setActiveTab('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '9px',
              backgroundColor: '#0b1528',
              color: '#fbbf24',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Shield size={18} />
            </div>
            <div>
              <strong style={{ fontSize: '0.92rem', color: '#0f172a', display: 'block', lineHeight: 1.1 }}>
                SanskritiSetu
              </strong>
              <span style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                National Heritage Cloud
              </span>
            </div>
          </div>

          {/* Action Header Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', position: 'relative' }}>
            {/* Notch / Mode Switcher */}
            <button
              onClick={() => setShowDisplayMenu(!showDisplayMenu)}
              title="Display & Notch Mode Options"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                background: notchMode === 'webapp' ? '#f1f5f9' : notchMode === 'app' ? '#fef3c7' : '#e0f2fe',
                border: '1px solid #e2e8f0',
                color: notchMode === 'webapp' ? '#475569' : notchMode === 'app' ? '#b45309' : '#0369a1',
                padding: '5px 8px',
                borderRadius: '10px',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {notchMode === 'webapp' ? <Globe size={12} /> : notchMode === 'app' ? <Smartphone size={12} /> : <Sliders size={12} />}
              <span style={{ textTransform: 'capitalize' }}>{notchMode}</span>
            </button>

            {/* Display Menu Dropdown */}
            {showDisplayMenu && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  top: '38px',
                  right: 0,
                  background: '#ffffff',
                  borderRadius: '14px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  border: '1px solid #e2e8f0',
                  padding: '8px',
                  zIndex: 2000,
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', padding: '4px 8px' }}>
                  Notch & View Mode
                </span>
                <button
                  onClick={() => { setNotchMode('auto'); setShowDisplayMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 8px',
                    borderRadius: '8px',
                    border: 'none',
                    background: notchMode === 'auto' ? '#f1f5f9' : 'transparent',
                    color: '#0f172a',
                    fontSize: '0.75rem',
                    fontWeight: notchMode === 'auto' ? 700 : 500,
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <Sliders size={13} color="#0284c7" />
                  <div>
                    <strong>Auto Detect</strong>
                    <span style={{ display: 'block', fontSize: '0.64rem', color: '#64748b' }}>Adapts automatically</span>
                  </div>
                </button>
                <button
                  onClick={() => { setNotchMode('webapp'); setShowDisplayMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 8px',
                    borderRadius: '8px',
                    border: 'none',
                    background: notchMode === 'webapp' ? '#f1f5f9' : 'transparent',
                    color: '#0f172a',
                    fontSize: '0.75rem',
                    fontWeight: notchMode === 'webapp' ? 700 : 500,
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <Globe size={13} color="#16a34a" />
                  <div>
                    <strong>Webapp Mode</strong>
                    <span style={{ display: 'block', fontSize: '0.64rem', color: '#64748b' }}>0 extra notch gap</span>
                  </div>
                </button>
                <button
                  onClick={() => { setNotchMode('app'); setShowDisplayMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 8px',
                    borderRadius: '8px',
                    border: 'none',
                    background: notchMode === 'app' ? '#f1f5f9' : 'transparent',
                    color: '#0f172a',
                    fontSize: '0.75rem',
                    fontWeight: notchMode === 'app' ? 700 : 500,
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <Smartphone size={13} color="#d97706" />
                  <div>
                    <strong>App / Notch Mode</strong>
                    <span style={{ display: 'block', fontSize: '0.64rem', color: '#64748b' }}>Includes safe area</span>
                  </div>
                </button>
              </div>
            )}

            {/* Marker Button */}
            <button
              onClick={() => setIsMarkerModalOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                color: '#0f172a',
                padding: '5px 8px',
                borderRadius: '10px',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <QrCode size={13} />
              <span>Marker</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                color: '#64748b',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          </div>
        </header>

        {/* Scrollable Viewport */}
        <main className="mobile-content-scroll" onClick={() => setShowDisplayMenu(false)}>
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <HomeScreen
              onOpenMonument={handleOpenMonument}
              onOpenState={handleOpenState}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onOpenMarkerModal={() => setIsMarkerModalOpen(true)}
            />
          )}

          {/* TAB 2: REPOSITORY */}
          {activeTab === 'repository' && (
            <RepositoryScreen
              selectedStateId={selectedStateId}
              onOpenMonument={handleOpenMonument}
              onLaunchAR={handleLaunchAR}
            />
          )}

          {/* TAB 3: AR EXPLORER */}
          {activeTab === 'ar_explorer' && (
            <ARExplorerScreen
              monument={selectedMonument}
              onOpenMarkerModal={() => setIsMarkerModalOpen(true)}
            />
          )}

          {/* TAB 4: ARCHIVE VAULT */}
          {activeTab === 'vault' && (
            <ArchiveVaultScreen
              monument={selectedMonument}
              onLaunchAR={() => handleLaunchAR()}
            />
          )}

          {/* TAB 5: TRUST & AUDIT */}
          {activeTab === 'trust' && (
            <TrustProfileScreen
              notchMode={notchMode}
              onSetNotchMode={setNotchMode}
            />
          )}
        </main>

        {/* Floating Bottom Navigation Bar */}
        <nav className="mobile-bottom-nav">
          {NAV_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'repository') setSelectedStateId(undefined);
                  setActiveTab(tab.id);
                }}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* On-Screen Marker Pattern Modal */}
        <MarkerModal
          isOpen={isMarkerModalOpen}
          onClose={() => setIsMarkerModalOpen(false)}
        />
      </div>
    </div>
  );
};
