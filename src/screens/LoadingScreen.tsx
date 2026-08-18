import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

const ITEMS = [
  'Historical records',
  '3D archives',
  'Photographic collections',
  'Audio narratives'
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 4;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 250);
          return 100;
        }
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
        maxWidth: '420px',
        width: '100%',
        backgroundColor: '#162a45',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '32px 28px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          marginBottom: '20px',
          letterSpacing: '-0.02em',
        }}>
          Loading Heritage Assets...
        </h3>

        {/* Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {ITEMS.map((item, idx) => {
            const isDone = progress >= (idx + 1) * 23;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: isDone ? '#ffffff' : '#64748b',
                  transition: 'color 0.2s',
                }}
              >
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: isDone ? '#22c55e' : 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: '#ffffff',
                  transition: 'background-color 0.2s',
                }}>
                  {isDone && <Check size={12} strokeWidth={3} />}
                </div>
                <span style={{ fontWeight: isDone ? 600 : 400 }}>{item}</span>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '10px',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#c2902d',
            transition: 'width 0.1s linear',
          }} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: '#64748b',
          fontFamily: 'monospace',
        }}>
          <span>NATIONAL ARCHIVES</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
