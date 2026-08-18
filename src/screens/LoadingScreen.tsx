import React, { useEffect, useState } from 'react';
import { Check, Database } from 'lucide-react';

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
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 250);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 9998,
      backgroundColor: '#0b1528',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      background: 'radial-gradient(circle at 50% 40%, #162a45 0%, #08101d 100%)',
    }}>
      <div style={{
        maxWidth: '340px',
        width: '100%',
        backgroundColor: '#162a45',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        padding: '28px 22px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#d97706' }}>
          <Database size={18} />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
            Loading Heritage Assets...
          </h3>
        </div>

        {/* Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {ITEMS.map((item, idx) => {
            const isDone = progress >= (idx + 1) * 23;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.84rem',
                  color: isDone ? '#ffffff' : '#64748b',
                  transition: 'color 0.2s',
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: isDone ? '#10b981' : 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: '#ffffff',
                  transition: 'background-color 0.2s',
                  flexShrink: 0,
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
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '8px',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #d97706, #f59e0b)',
            transition: 'width 0.1s linear',
          }} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: '#94a3b8',
          fontFamily: 'monospace',
          fontWeight: 600,
        }}>
          <span>NATIONAL VAULT</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
