import React, { useEffect, useState } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Sovereign Cloud Node...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 250);
          return 100;
        }

        const next = prev + 5;
        if (next === 25) setStatusText('Verifying ASI Circle Digital Keys...');
        if (next === 55) setStatusText('Loading 3D Photogrammetry Telemetry...');
        if (next === 85) setStatusText('Sovereign Archival Node Authenticated.');
        return next;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 9999,
      backgroundColor: '#f8f9fe',
      color: '#181c32',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '48px 24px 36px',
    }}>
      {/* Top Government Strip */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          padding: '6px 14px',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(80, 85, 130, 0.04)',
        }}>
          <div style={{
            height: '10px',
            width: '18px',
            background: 'linear-gradient(180deg, #ff9933 0%, #ffffff 50%, #138808 100%)',
            borderRadius: '2px',
            border: '0.5px solid #cbd5e1',
          }} />
          <span style={{
            color: '#181c32',
            fontSize: '0.68rem',
            letterSpacing: '0.04em',
            fontWeight: 800,
          }}>
            GOVERNMENT OF INDIA • MINISTRY OF CULTURE
          </span>
        </div>
      </div>

      {/* Center Branding & Emblem */}
      <div style={{ textAlign: 'center', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: '84px',
          height: '84px',
          borderRadius: '26px',
          backgroundColor: '#ffffff',
          border: '2px solid #e3dfff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4c35de',
          boxShadow: '0 12px 32px rgba(76, 53, 222, 0.18)',
          marginBottom: '20px',
          position: 'relative',
        }}>
          <Shield size={44} strokeWidth={2.2} />
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            right: '-4px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #ffffff',
          }}>
            <CheckCircle2 size={14} />
          </div>
        </div>

        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          margin: '0 0 2px 0',
          color: '#181c32',
          fontFamily: 'Outfit, sans-serif',
        }}>
          Sanskriti<span style={{ color: '#4c35de' }}>Setu</span>
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: '#4c35de',
          margin: '0 0 8px 0',
          fontWeight: 800,
          fontFamily: 'Outfit, sans-serif',
        }}>
          संस्कृतिसेतु
        </p>

        <span style={{
          background: '#f2efff',
          color: '#4c35de',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          National Digital Heritage Cloud
        </span>

        <p style={{
          fontSize: '0.78rem',
          color: '#8b92ab',
          margin: 0,
          lineHeight: 1.4,
        }}>
          Immutable 3D preservation & zero-install Spatial AR repository for 3,690+ national monuments.
        </p>
      </div>

      {/* Bottom Progress Bar (Clean Auto-transition, No Skip Button) */}
      <div style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#8b92ab', marginBottom: '6px', fontWeight: 600 }}>
            <span>{statusText}</span>
            <span>{progress}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #4c35de 0%, #644bf5 100%)',
              transition: 'width 0.1s ease',
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};
