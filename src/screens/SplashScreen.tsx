import React, { useEffect, useState } from 'react';
import { Shield, Sparkles } from 'lucide-react';

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
        return prev + 6;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 9999,
      backgroundColor: '#0b1528',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '48px 24px 36px',
      background: 'radial-gradient(circle at 50% 30%, #162a45 0%, #08101d 100%)',
    }}>
      {/* Top Ministry Tag */}
      <div style={{ textAlign: 'center' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '4px 12px',
          borderRadius: '20px',
          color: '#94a3b8',
          fontSize: '0.68rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}>
          🇮🇳 Government of India • Ministry of Culture
        </span>
      </div>

      {/* Center Icon & Branding */}
      <div style={{ textAlign: 'center', maxWidth: '320px' }}>
        <div style={{
          width: '76px',
          height: '76px',
          margin: '0 auto 20px',
          borderRadius: '22px',
          backgroundColor: '#162a45',
          border: '1.5px solid rgba(217, 119, 6, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d97706',
          boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
        }}>
          <Shield size={38} strokeWidth={2.2} />
        </div>

        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          margin: '0 0 4px 0',
          color: '#ffffff',
        }}>
          SanskritiSetu
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: '#d97706',
          margin: '0 0 10px 0',
          fontWeight: 700,
        }}>
          संस्कृतिसेतु
        </p>

        <p style={{
          fontSize: '0.84rem',
          color: '#94a3b8',
          margin: 0,
          lineHeight: 1.5,
        }}>
          Preserving India's Cultural Heritage for Future Generations
        </p>
      </div>

      {/* Bottom Progress Indicator */}
      <div style={{ width: '100%', maxWidth: '260px', textAlign: 'center' }}>
        <div style={{
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '10px',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #d97706, #f59e0b)',
            transition: 'width 0.1s linear',
          }} />
        </div>

        <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
          Initializing Sovereign Vault...
        </span>
      </div>
    </div>
  );
};
