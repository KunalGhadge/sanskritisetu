import React, { useEffect, useState } from 'react';
import { Database, Layers, Box, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

const STEPS = [
  'Loading Heritage Assets...',
  'Preparing 3D archives...',
  'Loading monument database...',
  'System Ready'
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 250);
          return 100;
        }
        const s = Math.min(Math.floor((next / 100) * STEPS.length), STEPS.length - 1);
        setStepIdx(s);
        return next;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9998,
      backgroundColor: '#0b1528',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
    }}>
      <div style={{
        maxWidth: '440px',
        width: '100%',
        background: '#162a45',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '32px 28px',
        textAlign: 'center',
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>
          SanskritiSetu Preservation Vault
        </h3>
        <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '24px' }}>
          {STEPS[stepIdx]}
        </p>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '12px',
        }}>
          <div style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: '#c2902d',
            transition: 'width 0.1s ease-out',
          }} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: '#64748b',
          fontFamily: 'monospace',
        }}>
          <span>PRESERVATION ENGINE</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};
