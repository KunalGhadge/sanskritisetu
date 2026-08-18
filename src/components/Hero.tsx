import React from 'react';
import { Compass, BookOpen, ShieldCheck, Sparkles, Box, FileText, Globe } from 'lucide-react';

interface HeroProps {
  onEnterVault: () => void;
  onLaunchAR: () => void;
  onOpenMarkerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onEnterVault,
  onLaunchAR,
  onOpenMarkerModal,
}) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: '#ffffff',
      background: 'linear-gradient(180deg, rgba(8, 18, 37, 0.85) 0%, rgba(8, 18, 37, 0.95) 100%)',
    }}>
      {/* High-Resolution Monument Background Image with Parallax Vibe */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1600100397608-f010f444b02a?auto=format&fit=crop&w=2000&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        opacity: 0.38,
        filter: 'saturate(1.2) contrast(1.1)',
        zIndex: 0,
      }} />

      {/* Decorative Golden Gradient Lighting */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(197, 155, 39, 0.25) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Institutional Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 20px',
          borderRadius: '30px',
          background: 'rgba(15, 30, 54, 0.8)',
          border: '1px solid #c59b27',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          fontSize: '0.82rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#dfb743',
        }}>
          <ShieldCheck size={16} /> UNESCO & Ministry of Culture Preservation Initiative
        </div>

        {/* Main Title Heading */}
        <div style={{ maxWidth: '900px' }}>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 4.6rem)',
            fontWeight: 900,
            letterSpacing: '0.03em',
            lineHeight: 1.1,
            marginBottom: '8px',
            textShadow: '0 4px 30px rgba(0,0,0,0.8)',
          }}>
            SanskritiSetu <span style={{ color: '#dfb743', fontFamily: "'Rozha One', serif" }}>(संस्कृतिसेतु)</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.4vw, 1.5rem)',
            color: '#e2e8f0',
            fontWeight: 300,
            letterSpacing: '0.04em',
            margin: '0 auto 16px',
            maxWidth: '750px',
          }}>
            A Government-Grade Digital Preservation Platform for India's Cultural Heritage & Immersive Spatial AR
          </p>

          <p style={{
            fontSize: '0.95rem',
            color: '#cbd5e1',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Safeguarding ancient monuments against weathering, natural disasters, and physical erosion by creating permanent sub-millimeter 3D digital twins, audio chronicles, and marker-based augmented reality exploration.
          </p>
        </div>

        {/* Primary Call to Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '12px',
        }}>
          <button
            onClick={onEnterVault}
            className="btn-gold"
            style={{
              padding: '14px 32px',
              fontSize: '1rem',
              borderRadius: '10px',
            }}
          >
            <BookOpen size={20} />
            <span>Enter the Vault</span>
          </button>

          <button
            onClick={onLaunchAR}
            className="btn-primary"
            style={{
              padding: '14px 30px',
              fontSize: '1rem',
              borderRadius: '10px',
            }}
          >
            <Sparkles size={20} color="#dfb743" />
            <span>Launch AR Explorer</span>
          </button>
        </div>

        {/* Quick Marker Guidance link */}
        <div style={{ marginTop: '4px' }}>
          <button
            onClick={onOpenMarkerModal}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#cbd5e1',
              fontSize: '0.85rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Don't have a physical marker? View & print the Stone Chariot AR marker here
          </button>
        </div>

        {/* Digital Twin Preservation Telemetry Strip */}
        <div style={{
          marginTop: '40px',
          width: '100%',
          maxWidth: '1050px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {[
            {
              icon: Box,
              title: 'Sub-mm 3D Digital Twin',
              value: 'Permanent GLB',
              desc: 'Point cloud & PBR texture archives'
            },
            {
              icon: FileText,
              title: '7-Tier Archival Schema',
              value: '100% Inscribed',
              desc: 'Architectural, timeline & photo logs'
            },
            {
              icon: Compass,
              title: 'Spatial AR.js Engine',
              value: 'Live Marker Tracking',
              desc: 'Zero-install browser augmented reality'
            },
            {
              icon: Globe,
              title: 'Sovereign Digital Redundancy',
              value: 'ASI & UNESCO',
              desc: 'Cryptographically verified records'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 30, 54, 0.75)',
                  border: '1px solid rgba(197, 155, 39, 0.3)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  textAlign: 'left',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(197, 155, 39, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#dfb743',
                  }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.02em', marginBottom: '2px' }}>
                  {item.value}
                </div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
