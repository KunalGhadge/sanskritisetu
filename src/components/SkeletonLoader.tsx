import React from 'react';

interface SkeletonProps {
  type?: 'dashboard' | 'card' | 'banner' | 'list' | 'dossier' | 'explorer';
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ type = 'card' }) => {
  // DASHBOARD SKELETON (Used right after splash screen)
  if (type === 'dashboard') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
        {/* Sovereign Status Pill Skeleton */}
        <div style={{
          height: '38px',
          borderRadius: '14px',
          width: '100%',
        }} className="skeleton-shimmer" />

        {/* Hero Carousel Skeleton */}
        <div style={{
          height: '180px',
          borderRadius: '24px',
          width: '100%',
        }} className="skeleton-shimmer" />

        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ height: '18px', width: '140px', borderRadius: '6px' }} className="skeleton-shimmer" />
          <div style={{ height: '14px', width: '60px', borderRadius: '6px' }} className="skeleton-shimmer" />
        </div>

        {/* 2 Big Preserved Monument Cards Skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[1, 2].map((i) => (
            <div key={i} className="digi-card" style={{ padding: '12px', margin: 0, display: 'flex', gap: '12px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '14px', flexShrink: 0 }} className="skeleton-shimmer" />
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>
                <div style={{ height: '12px', width: '35%', borderRadius: '4px' }} className="skeleton-shimmer" />
                <div style={{ height: '16px', width: '75%', borderRadius: '4px' }} className="skeleton-shimmer" />
                <div style={{ height: '12px', width: '50%', borderRadius: '4px' }} className="skeleton-shimmer" />
              </div>
            </div>
          ))}
        </div>

        {/* State Grid 4 Skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="digi-card" style={{ padding: '14px', margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px' }} className="skeleton-shimmer" />
              <div style={{ height: '14px', width: '60%', borderRadius: '4px' }} className="skeleton-shimmer" />
              <div style={{ height: '10px', width: '40%', borderRadius: '4px' }} className="skeleton-shimmer" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // REPOSITORY / SEARCH LIST SKELETON
  if (type === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="digi-card"
            style={{
              padding: '12px',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '16px',
              flexShrink: 0,
            }} className="skeleton-shimmer" />
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ height: '12px', width: '35%', borderRadius: '4px' }} className="skeleton-shimmer" />
              <div style={{ height: '16px', width: '80%', borderRadius: '4px' }} className="skeleton-shimmer" />
              <div style={{ height: '10px', width: '55%', borderRadius: '4px' }} className="skeleton-shimmer" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // DOSSIER / VAULT SKELETON
  if (type === 'dossier') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
        {/* Certificate Card Skeleton */}
        <div className="digi-card" style={{ padding: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ height: '18px', width: '100%', borderRadius: '6px' }} className="skeleton-shimmer" />
          <div style={{ height: '160px', width: '100%', borderRadius: '16px' }} className="skeleton-shimmer" />
          <div style={{ height: '22px', width: '65%', borderRadius: '6px' }} className="skeleton-shimmer" />
          <div style={{ height: '14px', width: '45%', borderRadius: '4px' }} className="skeleton-shimmer" />

          {/* 2x2 Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ height: '48px', borderRadius: '10px' }} className="skeleton-shimmer" />
            <div style={{ height: '48px', borderRadius: '10px' }} className="skeleton-shimmer" />
            <div style={{ height: '48px', borderRadius: '10px' }} className="skeleton-shimmer" />
            <div style={{ height: '48px', borderRadius: '10px' }} className="skeleton-shimmer" />
          </div>

          <div style={{ height: '46px', borderRadius: '16px' }} className="skeleton-shimmer" />
        </div>

        {/* 7 Tiers Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'hidden' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ height: '32px', width: '80px', borderRadius: '16px', flexShrink: 0 }} className="skeleton-shimmer" />
          ))}
        </div>

        <div style={{ height: '180px', borderRadius: '20px' }} className="skeleton-shimmer" />
      </div>
    );
  }

  // AR EXPLORER SKELETON
  if (type === 'explorer') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
        <div style={{ height: '150px', borderRadius: '22px' }} className="skeleton-shimmer" />
        <div style={{ display: 'flex', gap: '10px', overflowX: 'hidden' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ height: '100px', width: '135px', borderRadius: '16px', flexShrink: 0 }} className="skeleton-shimmer" />
          ))}
        </div>
        <div style={{ height: '240px', borderRadius: '22px' }} className="skeleton-shimmer" />
      </div>
    );
  }

  return (
    <div style={{ height: '140px', borderRadius: '20px' }} className="skeleton-shimmer" />
  );
};
