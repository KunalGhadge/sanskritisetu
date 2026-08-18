import React from 'react';
import { ShieldCheck, Layers, Award, AlertTriangle, Database, Globe, Compass, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface PreservationStrategyProps {
  onEnterVault: () => void;
  onLaunchAR: () => void;
}

export const PreservationStrategy: React.FC<PreservationStrategyProps> = ({
  onEnterVault,
  onLaunchAR,
}) => {
  return (
    <div style={{
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '40px 24px 80px',
    }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
        <div className="gold-badge" style={{ marginBottom: '12px' }}>
          <ShieldCheck size={15} /> National Sovereign Preservation Blueprint
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#0f1e36',
          fontWeight: 900,
          marginBottom: '12px',
        }}>
          Why Digital Preservation is Imperative
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
          India’s cultural monuments embody centuries of architectural genius, sacred mathematics, and living history. SanskritiSetu creates permanent, immutable digital twins before physical erosion takes its irreversible toll.
        </p>
      </div>

      {/* 5 Core Pillars per PRD Section 6 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '48px',
      }}>
        {[
          {
            title: 'Preserve Architectural Knowledge',
            desc: 'Mortarless interlocking granite joints, kinetic stone wheel axles, and Dravidian proportions documented with sub-millimeter precision.',
            icon: Layers,
            color: '#1e3a8a'
          },
          {
            title: 'Preserve Historical Information',
            desc: 'Unifies fragmented epigraphic inscriptions, royal chronicles, and historical ASI surveys into verified chronological archives.',
            icon: Database,
            color: '#b45309'
          },
          {
            title: 'Permanent Digital Twin Record',
            desc: 'Cryptographically hashed 3D GLB assets protected against catastrophic weathering, seismic shifts, or structural collapse.',
            icon: ShieldCheck,
            color: '#16a34a'
          },
          {
            title: 'Global Universal Accessibility',
            desc: 'Enables scholars, students, and citizens globally to experience intimate monument details without physical travel barriers.',
            icon: Globe,
            color: '#7c3aed'
          },
          {
            title: 'Educate Future Generations',
            desc: 'Transforms static textbook history into immersive, marker-driven spatial augmented reality experiences.',
            icon: Compass,
            color: '#c59b27'
          },
        ].map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="heritage-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: `${pillar.color}15`,
                border: `1px solid ${pillar.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: pillar.color,
              }}>
                <Icon size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#0f1e36', fontWeight: 800, margin: 0 }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Deep Dive: Environmental Deterioration & Risk Modeling */}
      <div style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(197, 155, 39, 0.4)',
        padding: '36px',
        color: '#ffffff',
        marginBottom: '48px',
        boxShadow: '0 12px 36px rgba(10, 25, 47, 0.25)',
      }}>
        <div style={{ maxWidth: '850px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dfb743', fontWeight: 700, fontSize: '0.85rem', marginBottom: '10px' }}>
            <AlertTriangle size={16} /> HERITAGE VULNERABILITY AUDIT
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '14px' }}>
            The Accelerating Threats Facing India's Monuments
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px' }}>
            Physical structures age under relentless natural and anthropogenic pressures. Without high-density digital twins, vital carving nuances and engineering insights are permanently lost with every passing century.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <strong style={{ color: '#dfb743', display: 'block', marginBottom: '6px', fontSize: '0.92rem' }}>
                1. Quartz Wind-Abrasion
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Airborne dust particles scour exterior reliefs, smoothing out fine intaglio carvings over decadal spans.
              </span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <strong style={{ color: '#dfb743', display: 'block', marginBottom: '6px', fontSize: '0.92rem' }}>
                2. Thermal Shock & Fracturing
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Diurnal temperature swings from 44°C daytime sun to 15°C nights create micro-fissures in dense granite slabs.
              </span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <strong style={{ color: '#dfb743', display: 'block', marginBottom: '6px', fontSize: '0.92rem' }}>
                3. Over-Tourism Wear
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Direct physical contact transfers oils and acids, causing irreversible erosion on low-level friezes and wheels.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Standards: LiDAR, Photogrammetry & Sovereign Archiving */}
      <div className="heritage-card" style={{ padding: '36px', marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#0f1e36', fontWeight: 800, marginBottom: '16px' }}>
          SanskritiSetu Preservation Technology Standards
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: '#0f1e36', display: 'block', marginBottom: '6px' }}>
              Sub-Millimeter Photogrammetry
            </strong>
            <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
              Thousands of overlapping 48-megapixel camera captures aligned using structure-from-motion algorithms to produce dense 3D point clouds.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: '#0f1e36', display: 'block', marginBottom: '6px' }}>
              PBR Material Calibration
            </strong>
            <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
              Physically Based Rendering shaders replicate true granitic albedo, surface roughness, and ambient occlusion for photo-realistic AR lighting.
            </p>
          </div>

          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: '#0f1e36', display: 'block', marginBottom: '6px' }}>
              Triple-Sovereign Digital Redundancy
            </strong>
            <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
              Models and archival records are mirrored across three independent national datacenter nodes with cryptographic checksum verification.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Bar */}
      <div style={{
        textAlign: 'center',
        padding: '36px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #fbf9f5 0%, #f2eee5 100%)',
        border: '1px solid #d4a373',
      }}>
        <h3 style={{ fontSize: '1.4rem', color: '#0f1e36', fontWeight: 800, marginBottom: '8px' }}>
          Explore India's Living Heritage
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
          Begin your journey through the Digital Heritage Vault or project ancient monuments into your room with AR.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onEnterVault} className="btn-gold">
            <span>Explore Heritage Vault</span>
          </button>
          <button onClick={onLaunchAR} className="btn-primary">
            <span>Launch AR Explorer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
