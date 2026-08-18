import React from 'react';
import { Shield, Sparkles, Award, Box, Database, Eye, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onEnterVault: () => void;
  onLaunchAR: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onEnterVault, onLaunchAR }) => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px 80px' }}>
      {/* Institutional Overview Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#fbf5e8',
          border: '1px solid #e8cb85',
          padding: '6px 16px',
          borderRadius: '20px',
          color: '#854d0e',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '16px'
        }}>
          <Shield size={16} /> Government of India • Ministry of Culture Initiative
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          fontWeight: 900,
          color: '#1a1003',
          marginBottom: '16px',
          lineHeight: 1.15
        }}>
          About SanskritiSetu (संस्कृतिसेतु)
        </h1>

        <p style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
          color: '#5c4522',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          A permanent sovereign digital bridge safeguarding India's architectural, cultural, and spiritual treasures through sub-millimeter 3D photogrammetry, multi-tiered historical records, and immersive WebAR exploration.
        </p>
      </div>

      {/* Problem & Solution Dual Column */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="heritage-card" style={{ padding: '32px', borderLeft: '4px solid #dc2626' }}>
          <h3 style={{ fontSize: '1.35rem', color: '#991b1b', fontWeight: 800, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            The Heritage Deterioration Crisis
          </h3>
          <p style={{ color: '#451a03', lineHeight: 1.7, fontSize: '0.95rem' }}>
            India possesses thousands of ancient monuments, temples, forts, and rock-cut shrines. Environmental weathering, atmospheric pollution, acid rain, tourism stress, and structural fatigue cause gradual, irreversible damage. Traditional physical conservation is vital but insufficient on its own to secure comprehensive multi-dimensional preservation for future millennia.
          </p>
        </div>

        <div className="heritage-card" style={{ padding: '32px', borderLeft: '4px solid #16a34a' }}>
          <h3 style={{ fontSize: '1.35rem', color: '#166534', fontWeight: 800, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            The SanskritiSetu Digital Solution
          </h3>
          <p style={{ color: '#14532d', lineHeight: 1.7, fontSize: '0.95rem' }}>
            SanskritiSetu solves this challenge by engineering an immutable <strong>7-Tier Digital Preservation Strategy</strong> that captures the full soul of each site: high-density polygon 3D mesh models, comprehensive historical timelines, architectural joinery blueprints, historical photo archives, multilingual audio narratives, and interactive browser-based spatial AR.
          </p>
        </div>
      </div>

      {/* 4 Pillars of SanskritiSetu */}
      <div className="heritage-card" style={{ padding: '36px', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1003', textAlign: 'center', marginBottom: '32px' }}>
          Four Core Archival Pillars
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: '#fbf5e8',
              color: '#c59b27',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Box size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1003', marginBottom: '8px' }}>Sub-mm 3D Twins</h4>
            <p style={{ fontSize: '0.85rem', color: '#5c4522', lineHeight: 1.5 }}>
              Precision 3D GLB digital twins capturing micro-carvings and spatial proportions.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: '#fbf5e8',
              color: '#c59b27',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Database size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1003', marginBottom: '8px' }}>Sovereign Vault</h4>
            <p style={{ fontSize: '0.85rem', color: '#5c4522', lineHeight: 1.5 }}>
              Centralized repository for structural metrics, materials, timelines, and photo archives.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: '#fbf5e8',
              color: '#c59b27',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Award size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1003', marginBottom: '8px' }}>UNESCO Standard</h4>
            <p style={{ fontSize: '0.85rem', color: '#5c4522', lineHeight: 1.5 }}>
              Designed strictly under the UNESCO Charter on the Preservation of Digital Heritage (2003).
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: '#fbf5e8',
              color: '#c59b27',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Eye size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1003', marginBottom: '8px' }}>Citizen WebAR</h4>
            <p style={{ fontSize: '0.85rem', color: '#5c4522', lineHeight: 1.5 }}>
              Zero-install marker tracking projecting the 3D model into real physical space with audio synchronization.
            </p>
          </div>
        </div>
      </div>

      {/* Core Capabilities vs Future Roadmap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {/* Core Capabilities Delivered */}
        <div className="heritage-card" style={{ padding: '28px', borderLeft: '4px solid #16a34a' }}>
          <h4 style={{ fontSize: '1.15rem', color: '#166534', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={20} /> Core Preservation Capabilities Delivered
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
