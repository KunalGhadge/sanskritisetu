import React from 'react';
import { Landmark, ShieldCheck, Sparkles, Layers, Box, Globe, Compass, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onEnterVault: () => void;
  onLaunchAR: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onEnterVault, onLaunchAR }) => {
  return (
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '40px 24px 80px',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="gold-badge" style={{ marginBottom: '12px' }}>
          <Landmark size={14} /> Mission & Architecture
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 900,
          color: '#0f1e36',
          marginBottom: '8px',
        }}>
          About SanskritiSetu (संस्कृतिसेतु)
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#dfb743',
          fontStyle: 'italic',
          fontWeight: 600,
          marginBottom: '16px',
        }}>
          "Preserving India's cultural heritage through digital archives and immersive AR experiences."
        </p>
      </div>

      {/* The Final Pitch Callout Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
        borderRadius: '16px',
        border: '2px solid #c59b27',
        padding: '36px',
        color: '#ffffff',
        marginBottom: '40px',
        boxShadow: '0 12px 36px rgba(10, 25, 47, 0.25)',
        textAlign: 'center',
      }}>
        <span style={{
          fontSize: '0.8rem',
          color: '#dfb743',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 700,
          display: 'block',
          marginBottom: '12px',
        }}>
          ✦ The SanskritiSetu Mission Statement ✦
        </span>
        <blockquote style={{
          fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
          fontWeight: 600,
          lineHeight: 1.5,
          fontStyle: 'italic',
          color: '#f8fafc',
          maxWidth: '850px',
          margin: '0 auto',
        }}>
          "SanskritiSetu is not an AR tourism application. It is a digital preservation platform that safeguards India's cultural heritage by creating permanent digital archives and transforming them into immersive AR experiences for future generations."
        </blockquote>
      </div>

      {/* Core Technical Architecture breakdown */}
      <div className="heritage-card" style={{ padding: '32px', marginBottom: '36px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#0f1e36', fontWeight: 800, marginBottom: '16px' }}>
          Platform Technical Architecture
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.75rem', color: '#b45309', fontWeight: 700, textTransform: 'uppercase' }}>
              Frontend Layer
            </span>
            <h4 style={{ fontSize: '1rem', color: '#0f1e36', margin: '4px 0 6px 0' }}>
              React + Vite + TypeScript
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
              Ultra-fast responsive client UI with institutional Ministry of Culture design tokens.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.75rem', color: '#1e3a8a', fontWeight: 700, textTransform: 'uppercase' }}>
              Preservation Layer
            </span>
            <h4 style={{ fontSize: '1rem', color: '#0f1e36', margin: '4px 0 6px 0' }}>
              7-Tier Heritage Vault
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
              Immutable schema cataloging overview, chronologies, architectural joinery, and photo archives.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700, textTransform: 'uppercase' }}>
              3D Digital Twin Layer
            </span>
            <h4 style={{ fontSize: '1rem', color: '#0f1e36', margin: '4px 0 6px 0' }}>
              Three.js Sub-mm Viewport
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
              GLTF/GLB photogrammetry rendering with wireframe inspection, lighting controls, and annotations.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.75rem', color: '#c59b27', fontWeight: 700, textTransform: 'uppercase' }}>
              Spatial AR Layer
            </span>
            <h4 style={{ fontSize: '1rem', color: '#0f1e36', margin: '4px 0 6px 0' }}>
              AR.js + A-Frame Engine
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
              Zero-install marker tracking projecting the 3D model into real physical space with audio synchronization.
            </p>
          </div>
        </div>
      </div>

      {/* Hackathon MVP Checklist vs Future Roadmap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {/* MVP Features Delivered */}
        <div className="heritage-card" style={{ padding: '28px', borderLeft: '4px solid #16a34a' }}>
          <h4 style={{ fontSize: '1.15rem', color: '#166534', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={20} /> Hackathon MVP Features Delivered
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>Digital Heritage Vault:</strong> 7-Tier comprehensive preservation repository.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>Historical Timeline:</strong> Interactive milestones from 1336 to 2026 digital twin.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>Architectural Archive:</strong> Granite specifications, stone wheels & joinery breakdown.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>Photo Archive:</strong> Historical 1856 photos, modern captures & lightbox viewer.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>Audio Archive:</strong> Multilingual voice narration (EN/HI) with live synced transcript.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>3D Digital Twin:</strong> Interactive Three.js model viewer with wireframe inspection.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span><strong>AR Integration:</strong> Seamless marker scanner with AR.js webcam tracking.</span>
            </li>
          </ul>
        </div>

        {/* Future Scope Roadmap */}
        <div className="heritage-card" style={{ padding: '28px', borderLeft: '4px solid #c59b27' }}>
          <h4 style={{ fontSize: '1.15rem', color: '#854d0e', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} /> Future Expansion Scope
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#c59b27', fontWeight: 'bold' }}>✦</span>
              <span>Expansion to all 42 UNESCO World Heritage Sites in India.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#c59b27', fontWeight: 'bold' }}>✦</span>
              <span>AI-Powered Historical Avatar Narrators in 22 Official Indian Languages.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#c59b27', fontWeight: 'bold' }}>✦</span>
              <span>360° Photogrammetric Virtual Reality (VR) Flythroughs.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#c59b27', fontWeight: 'bold' }}>✦</span>
              <span>Crowdsourced Archival Ingestion with ASI Expert Verification.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#c59b27', fontWeight: 'bold' }}>✦</span>
              <span>Spatial WebXR markerless plane detection for Apple Vision Pro & Meta Quest.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation Call to Action */}
      <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
        <button onClick={onEnterVault} className="btn-gold" style={{ padding: '12px 28px' }}>
          <span>Enter Digital Heritage Vault</span>
        </button>
        <button onClick={onLaunchAR} className="btn-primary" style={{ padding: '12px 24px' }}>
          <span>Launch AR Experience</span>
        </button>
      </div>
    </div>
  );
};
