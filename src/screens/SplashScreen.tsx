import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

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
          setTimeout(onFinish, 150);
          return 100;
        }
        return prev + 5;
      });
    }, 35);

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
      {/* Top Header */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          color: '#94a3b8',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 600,
          margin: 0,
        }}>
          Government of India • Ministry of Culture
        </p>
      </div>

      {/* Center Branding */}
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 20px',
          borderRadius: '12px',
          backgroundColor: '#162a45',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c2902d',
        }}>
          <Shield size={32} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          margin: '0 0 6px 0',
        }}>
          SanskritiSetu
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#c2902d',
          margin: '0 0 12px 0',
          fontWeight: 600,
        }}>
          संस्कृतिसेतु
        </p>

        <p style={{
          fontSize: '0.95rem',
          color: '#cbd5e1',
          margin: 0,
          fontWeight: 400,
        }}>
          Preserving India's Cultural Heritage for Future Generations
        </p>
      </div>

      {/* Bottom Progress */}
      <div style={{ width: '100%', maxWidth: '320px', textAlign: 'center' }}>
        <div style={{
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '12px',
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
            color: '#64748b',
            fontSize: '0.8rem',
            cursor: 'pointer',
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};
