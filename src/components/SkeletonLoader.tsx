import React from 'react';

interface SkeletonProps {
  type?: 'card' | 'banner' | 'list' | 'dossier';
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ type = 'card' }) => {
  if (type === 'banner') {
    return (
      <div style={{
        height: '150px',
        borderRadius: '24px',
        background: 'linear-gradient(90deg, #eceef8 25%, #f7f8fd 50%, #eceef8 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        width: '100%',
      }} />
    );
  }

  if (type === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="digi-card"
            style={{
              padding: '14px',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(90deg, #eceef8 25%, #f7f8fd 50%, #eceef8 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              flexShrink: 0,
            }} />
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ height: '14px', width: '60%', borderRadius: '4px', background: '#eceef8' }} />
              <div style={{ height: '10px', width: '40%', borderRadius: '4px', background: '#f2f4fb' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%' }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="digi-card"
          style={{
            padding: '16px',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(90deg, #eceef8 25%, #f7f8fd 50%, #eceef8 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }} />
          <div style={{ height: '12px', width: '70%', borderRadius: '4px', background: '#eceef8' }} />
          <div style={{ height: '10px', width: '50%', borderRadius: '4px', background: '#f2f4fb' }} />
        </div>
      ))}
    </div>
  );
};
