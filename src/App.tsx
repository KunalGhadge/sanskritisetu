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
import { Shield, QrCode, ArrowLeft } from 'lucide-react';

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

  const selectedMonument = MONUMENTS[0]; // Stone Chariot, Hampi

  // Navigation Steps for Top Mission Header
  const STEPS: { id: ScreenState; label: string }[] = [
    { id: 'mission', label: '1. Mission' },
    { id: 'repository', label: '2. Repository' },
    { id: 'vault', label: '3. Heritage Vault' },
    { id: 'preservation', label: '4. Preservation' },
    { id: 'ar_intro', label: '5. AR Experience' },
  ];

  const getActiveStep = () => {
    if (currentScreen === 'ar_scanner' || currentScreen === 'completion') return 'ar_intro';
    return currentScreen;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* SCREEN 1: SPLASH */}
      {currentScreen === 'splash' && (
        <SplashScreen onFinish={() => setCurrentScreen('loading')} />
      )}

      {/* SCREEN 2: LOADING */}
      {currentScreen === 'loading' && (
        <LoadingScreen onLoaded={() => setCurrentScreen('mission')} />
      )}

      {/* SCREENS 3 TO 10: MAIN APPLICATION FLOW */}
      {currentScreen !== 'splash' && currentScreen !== 'loading' && (
        <>
          {/* Official Government Header with Mission Stepper */}
          <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          }}>
            <div className="gov-strip" />

            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}>
              {/* Brand */}
              <div
                onClick={() => setCurrentScreen('mission')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: '#0b1528',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Shield size={16} />
                </div>
                <div>
                  <strong style={{ color: '#0f172a', fontSize: '0.98rem', display: 'block', lineHeight: 1.2 }}>
                    SanskritiSetu
                  </strong>
                  <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Digital Mission
                  </span>
                </div>
              </div>

              {/* Story Step Progress Tabs */}
              <div style={{
                display: 'flex',
                backgroundColor: '#f1f5f9',
                borderRadius: '8px',
                padding: '3px',
                gap: '2px',
                overflowX: 'auto',
                maxWidth: '100%',
              }}>
                {STEPS.map((step) => {
                  const isActive = getActiveStep() === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setCurrentScreen(step.id)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '0.78rem',
                        fontWeight: isActive ? 700 : 500,
                        backgroundColor: isActive ? '#0b1528' : 'transparent',
                        color: isActive ? '#ffffff' : '#64748b',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {step.label}
                    </button>
                  );
                })}
              </div>

              {/* Marker Button */}
              <div>
                <button
                  onClick={() => setIsMarkerModalOpen(true)}
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '6px' }}
                >
                  <QrCode size={13} />
                  <span>Marker</span>
                </button>
              </div>
            </div>
          </header>

          {/* MAIN SCREEN BODY */}
          <main style={{ flexGrow: 1 }}>
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

          {/* On-Screen Marker Pattern Modal */}
          <MarkerModal
            isOpen={isMarkerModalOpen}
            onClose={() => setIsMarkerModalOpen(false)}
          />

          {/* Minimalist Institutional Footer */}
          <footer style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '16px 20px',
            color: '#64748b',
            fontSize: '0.78rem',
            marginTop: 'auto',
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}>
              <div>
                © 2026 SanskritiSetu (संस्कृतिसेतु) • Ministry of Culture, Government of India
              </div>
              <div style={{ color: '#0f172a', fontWeight: 600 }}>
                National Digital Preservation Mission
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};
