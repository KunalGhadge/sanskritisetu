import React, { useState, useEffect } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { MissionScreen } from './screens/MissionScreen';
import { RepositoryScreen } from './screens/RepositoryScreen';
import { VaultScreen } from './screens/VaultScreen';
import { PreservationDashboardScreen } from './screens/PreservationDashboardScreen';
import { ARExplorerIntroScreen } from './screens/ARExplorerIntroScreen';
import { ARScannerScreen } from './screens/ARScannerScreen';
import { CompletionScreen } from './screens/CompletionScreen';
import { MarkerModal } from './components/MarkerModal';
import { MONUMENTS } from './data/monuments';
import {
  Shield,
  QrCode,
  Compass,
  Database,
  Layers,
  Award,
  Maximize2,
  Minimize2,
  Smartphone,
  Globe,
  Sliders
} from 'lucide-react';

export type ScreenState =
  | 'splash'
  | 'loading'
  | 'mission'
  | 'repository'
  | 'vault'
  | 'preservation'
  | 'ar_intro'
  | 'ar_scanner'
  | 'completion';

export type NotchMode = 'auto' | 'webapp' | 'app';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('splash');
  const [isMarkerModalOpen, setIsMarkerModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notchMode, setNotchMode] = useState<NotchMode>('auto');
  const [showDisplayMenu, setShowDisplayMenu] = useState(false);

  const selectedMonument = MONUMENTS[0]; // Stone Chariot, Hampi

  // Auto-detect standalone app mode on mount
  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://');
    
    // If running in browser without standalone, default to auto (which uses 0 notch space)
  }, []);

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

  // Bottom Navigation Tabs
  const NAV_TABS = [
    { id: 'mission' as ScreenState, label: 'Mission', icon: Shield },
    { id: 'repository' as ScreenState, label: 'Repo', icon: Database },
    { id: 'vault' as ScreenState, label: 'Vault', icon: Layers },
    { id: 'preservation' as ScreenState, label: 'Audit', icon: Award },
    { id: 'ar_intro' as ScreenState, label: 'AR Scan', icon: Compass },
  ];

  const getActiveTab = () => {
    if (currentScreen === 'ar_scanner' || currentScreen === 'completion') return 'ar_intro';
    return currentScreen;
  };

  return (
    <div className="mobile-app-wrapper">
      <div className={`mobile-phone-frame notch-mode-${notchMode} ${isFullscreen ? 'is-fullscreen' : ''}`}>
        {/* Optional Top Notch Spacer (active in app mode or device notch) */}
        <div className="notch-top-spacer" />

        {/* SCREEN 1: SPLASH */}
        {currentScreen === 'splash' && (
          <SplashScreen onFinish={() => setCurrentScreen('loading')} />
        )}

        {/* SCREEN 2: LOADING */}
        {currentScreen === 'loading' && (
          <LoadingScreen onLoaded={() => setCurrentScreen('mission')} />
        )}

        {/* SCREENS 3 TO 10: MAIN MOBILE APPLICATION */}
        {currentScreen !== 'splash' && currentScreen !== 'loading' && (
          <>
            {/* Tricolor Strip */}
            <div className="gov-strip-mini" />

            {/* Clean Mobile App Header */}
            <header className="mobile-app-header">
              <div
                onClick={() => setCurrentScreen('mission')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  backgroundColor: '#0b1528',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Shield size={16} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.92rem', color: '#0f172a', display: 'block', lineHeight: 1.1 }}>
                    SanskritiSetu
                  </strong>
                  <span style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Digital Mission
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', position: 'relative' }}>
                {/* Notch / Display Mode Switcher */}
                <button
                  onClick={() => setShowDisplayMenu(!showDisplayMenu)}
                  title="Display & Notch Mode Options"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
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
                  {notchMode === 'webapp' ? <Globe size={13} /> : notchMode === 'app' ? <Smartphone size={13} /> : <Sliders size={13} />}
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
                      width: '210px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', padding: '4px 8px' }}>
                      Notch & View Mode
                    </span>

                    <button
                      onClick={() => { setNotchMode('auto'); setShowDisplayMenu(false); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '8px',
                        border: 'none',
                        background: notchMode === 'auto' ? '#f1f5f9' : 'transparent',
                        color: '#0f172a',
                        fontSize: '0.78rem',
                        fontWeight: notchMode === 'auto' ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      <Sliders size={14} color="#0284c7" />
                      <div>
                        <strong>Auto Detect</strong>
                        <span style={{ display: 'block', fontSize: '0.66rem', color: '#64748b' }}>Adapts to standalone / web</span>
                      </div>
                    </button>

                    <button
                      onClick={() => { setNotchMode('webapp'); setShowDisplayMenu(false); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '8px',
                        border: 'none',
                        background: notchMode === 'webapp' ? '#f1f5f9' : 'transparent',
                        color: '#0f172a',
                        fontSize: '0.78rem',
                        fontWeight: notchMode === 'webapp' ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      <Globe size={14} color="#16a34a" />
                      <div>
                        <strong>Webapp Mode</strong>
                        <span style={{ display: 'block', fontSize: '0.66rem', color: '#64748b' }}>0 extra notch space (Browser)</span>
                      </div>
                    </button>

                    <button
                      onClick={() => { setNotchMode('app'); setShowDisplayMenu(false); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '8px',
                        border: 'none',
                        background: notchMode === 'app' ? '#f1f5f9' : 'transparent',
                        color: '#0f172a',
                        fontSize: '0.78rem',
                        fontWeight: notchMode === 'app' ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                      }}
                    >
                      <Smartphone size={14} color="#d97706" />
                      <div>
                        <strong>App / Notch Mode</strong>
                        <span style={{ display: 'block', fontSize: '0.66rem', color: '#64748b' }}>Leaves space for notch/island</span>
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
                    padding: '5px 9px',
                    borderRadius: '10px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <QrCode size={13} />
                  <span>Marker</span>
                </button>

                {/* Fullscreen Web Toggle */}
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

            {/* Scrollable Main Body with Internal Scroll */}
            <main className="mobile-content-scroll" onClick={() => setShowDisplayMenu(false)}>
              {/* SCREEN 3: MISSION */}
              {currentScreen === 'mission' && (
                <MissionScreen onEnterRepository={() => setCurrentScreen('repository')} />
              )}

              {/* SCREEN 4: REPOSITORY */}
              {currentScreen === 'repository' && (
                <RepositoryScreen
                  monument={selectedMonument}
                  onOpenVault={() => setCurrentScreen('vault')}
                />
              )}

              {/* SCREEN 5: HERITAGE VAULT */}
              {currentScreen === 'vault' && (
                <VaultScreen
                  monument={selectedMonument}
                  onProceedToPreservationDashboard={() => setCurrentScreen('preservation')}
                />
              )}

              {/* SCREEN 6: PRESERVATION DASHBOARD */}
              {currentScreen === 'preservation' && (
                <PreservationDashboardScreen
                  onProceedToARExplorer={() => setCurrentScreen('ar_intro')}
                />
              )}

              {/* SCREEN 7: AR EXPLORER INTRO */}
              {currentScreen === 'ar_intro' && (
                <ARExplorerIntroScreen
                  onLaunchScanner={() => setCurrentScreen('ar_scanner')}
                  onOpenMarkerModal={() => setIsMarkerModalOpen(true)}
                />
              )}

              {/* SCREEN 8 & 9: LIVE AR SCANNER & EXPERIENCE */}
              {currentScreen === 'ar_scanner' && (
                <ARScannerScreen
                  monument={selectedMonument}
                  onFinishExploration={() => setCurrentScreen('completion')}
                  onBackToIntro={() => setCurrentScreen('ar_intro')}
                  onOpenMarkerModal={() => setIsMarkerModalOpen(true)}
                />
              )}

              {/* SCREEN 10: COMPLETION SCREEN */}
              {currentScreen === 'completion' && (
                <CompletionScreen
                  onReturnToRepository={() => setCurrentScreen('repository')}
                  onReopenVault={() => setCurrentScreen('vault')}
                />
              )}
            </main>

            {/* Fixed Floating Bottom Navigation Dock */}
            {currentScreen !== 'ar_scanner' && (
              <nav className="mobile-bottom-nav">
                {NAV_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = getActiveTab() === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCurrentScreen(tab.id)}
                      className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                    >
                      <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            )}

            {/* On-Screen Marker Pattern Modal */}
            <MarkerModal
              isOpen={isMarkerModalOpen}
              onClose={() => setIsMarkerModalOpen(false)}
            />
          </>
        )}
      </div>
    </div>
  );
};
