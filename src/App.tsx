import React, { useState } from 'react';
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
  Wifi,
  Battery,
  Signal
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

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('splash');
  const [isMarkerModalOpen, setIsMarkerModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const selectedMonument = MONUMENTS[0]; // Stone Chariot, Hampi

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
      <div className={`mobile-phone-frame ${isFullscreen ? 'is-fullscreen' : ''}`}>
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
            {/* Native-style Mobile Status Bar */}
            <div className="mobile-status-bar">
              <span>9:41</span>

              {/* Dynamic Island / Notch */}
              <div className="mobile-notch">
                <div className="camera-lens" />
                <div className="speaker-grill" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={13} />
              </div>
            </div>

            {/* Tricolor Strip */}
            <div className="gov-strip-mini" />

            {/* Mobile App Top Header */}
            <header className="mobile-app-header">
              <div
                onClick={() => setCurrentScreen('mission')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#0b1528',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Shield size={15} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a', display: 'block', lineHeight: 1.1 }}>
                    SanskritiSetu
                  </strong>
                  <span style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Digital Mission
                  </span>
                </div>
              </div>

              {/* Right Action Icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <QrCode size={13} />
                  <span>Marker</span>
                </button>

                {/* Desktop view toggle */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  title={isFullscreen ? "Switch to Phone Frame" : "Switch to Fullscreen"}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    background: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    color: '#64748b',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                </button>
              </div>
            </header>

            {/* Mobile Scrollable Viewport */}
            <main className="mobile-content-scroll">
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

            {/* Floating Glass Bottom Navigation Bar */}
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
