import React, { useState } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { HomeScreen } from './screens/HomeScreen';
import { RepositoryScreen } from './screens/RepositoryScreen';
import { ARExplorerScreen } from './screens/ARExplorerScreen';
import { ArchiveVaultScreen } from './screens/ArchiveVaultScreen';
import { TrustProfileScreen } from './screens/TrustProfileScreen';
import { MarkerModal } from './components/MarkerModal';
import { MONUMENTS } from './data/monuments';
import { LanguageCode, TRANSLATIONS } from './utils/i18n';
import {
  Home,
  Search,
  Compass,
  LayoutGrid,
  Shield,
  Layers,
  Database,
  QrCode
} from 'lucide-react';

export type TabState = 'home' | 'repository' | 'ar_explorer' | 'vault' | 'trust';
export type NotchMode = 'auto' | 'webapp' | 'app';

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabState>('home');
  const [selectedStateId, setSelectedStateId] = useState<string | undefined>(undefined);
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>('stone-chariot');
  const [isMarkerModalOpen, setIsMarkerModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notchMode, setNotchMode] = useState<NotchMode>('auto');
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');

  const selectedMonument = MONUMENTS.find((m) => m.id === selectedMonumentId) || MONUMENTS[0];
  const t = TRANSLATIONS[currentLanguage];

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

  // 4 Bottom Navigation Tabs (Matches Exact Iconic Buttons from Reference Image)
  const NAV_TABS = [
    { id: 'home' as TabState, label: t.homeTab, icon: Home },
    { id: 'repository' as TabState, label: t.searchTab, icon: Search },
    { id: 'ar_explorer' as TabState, label: t.explorerTab, icon: Compass },
    { id: 'trust' as TabState, label: t.menuTab, icon: LayoutGrid },
  ];

  return (
    <div className="mobile-app-wrapper">
      <div className={`mobile-phone-frame notch-mode-${notchMode} ${isFullscreen ? 'is-fullscreen' : ''}`}>
        {/* Safe Area Notch Spacer */}
        <div className="notch-top-spacer" />

        {/* Initial Official Government Splash Screen */}
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <>
            {/* Scrollable Viewport */}
            <main className="mobile-content-scroll" style={{ paddingTop: '16px' }}>
              {/* TAB 1: HOME */}
              {activeTab === 'home' && (
                <HomeScreen
                  currentLanguage={currentLanguage}
                  onOpenMonument={handleOpenMonument}
                  onOpenState={handleOpenState}
                  onNavigateTab={(tab) => setActiveTab(tab)}
                  onOpenMarkerModal={() => setIsMarkerModalOpen(true)}
                />
              )}

              {/* TAB 2: REPOSITORY */}
              {activeTab === 'repository' && (
                <RepositoryScreen
                  currentLanguage={currentLanguage}
                  selectedStateId={selectedStateId}
                  onOpenMonument={handleOpenMonument}
                  onLaunchAR={handleLaunchAR}
                  onBack={() => setActiveTab('home')}
                />
              )}

              {/* TAB 3: AR EXPLORER */}
              {activeTab === 'ar_explorer' && (
                <ARExplorerScreen
                  currentLanguage={currentLanguage}
                  monument={selectedMonument}
                  onOpenMarkerModal={() => setIsMarkerModalOpen(true)}
                  onBack={() => setActiveTab('home')}
                />
              )}

              {/* TAB 4: ARCHIVE VAULT */}
              {activeTab === 'vault' && (
                <ArchiveVaultScreen
                  currentLanguage={currentLanguage}
                  monument={selectedMonument}
                  onLaunchAR={() => handleLaunchAR(selectedMonument.id)}
                  onBack={() => setActiveTab('repository')}
                />
              )}

              {/* TAB 5: TRUST & MENU */}
              {activeTab === 'trust' && (
                <TrustProfileScreen
                  currentLanguage={currentLanguage}
                  onSelectLanguage={(lang) => setCurrentLanguage(lang)}
                  notchMode={notchMode}
                  onSelectNotchMode={(mode) => setNotchMode(mode)}
                  isFullscreen={isFullscreen}
                  onToggleFullscreen={toggleFullscreen}
                />
              )}
            </main>

            {/* Floating Clean White Bottom Navigation (Exact Previous Iconic Version) */}
            <nav className="digi-bottom-nav">
              {NAV_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id || (tab.id === 'repository' && activeTab === 'vault');
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.id === 'repository') setSelectedStateId(undefined);
                      setActiveTab(tab.id);
                    }}
                    className={`digi-nav-btn ${isActive ? 'active' : ''}`}
                    title={tab.label}
                  >
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  </button>
                );
              })}
            </nav>
          </>
        )}

        {/* Global Universal AR Tracking Marker Modal */}
        <MarkerModal
          isOpen={isMarkerModalOpen}
          onClose={() => setIsMarkerModalOpen(false)}
        />
      </div>
    </div>
  );
};
