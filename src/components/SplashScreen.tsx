import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: '#0b1528',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '48px 24px',
    }}>
      {/* Top Govt Bar */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#94a3b8',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <span>Government of India</span>
          <span>•</span>
          <span>Ministry of Culture</span>
        </div>
      </div>

      {/* Center Branding */}
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 20px',
          borderRadius: '12px',
          background: '#162a45',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
        }}>
          <Shield size={32} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '6px',
        }}>
          SanskritiSetu
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          marginBottom: '16px',
          fontWeight: 500,
        }}>
          संस्कृतिसेतु
        </p>
        <p style={{
          fontSize: '1rem',
          color: '#cbd5e1',
          lineHeight: 1.5,
          fontWeight: 400,
        }}>
          National Digital Preservation Platform & AR Exploration System
        </p>
      </div>

      {/* Bottom Progress */}
      <div style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>
        <div style={{
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '16px',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#c2902d',
            transition: 'width 0.1s linear',
          }} />
        </div>

        <button
          onClick={onFinish}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            fontSize: '0.85rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
        >
          Skip Intro <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
