import React, { useState } from 'react';
import { MONUMENTS, MonumentData } from '../data/monuments';
import { Search, Sparkles, BookOpen, MapPin, Calendar, Award, Compass, Shield, ArrowRight, Layers, Eye } from 'lucide-react';

interface DashboardProps {
  onSelectMonument: (monument: MonumentData) => void;
  onLaunchARForMonument: (monument: MonumentData) => void;
  onOpenPreservation: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onSelectMonument,
  onLaunchARForMonument,
  onOpenPreservation,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredMonuments = MONUMENTS.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.location.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.location.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.empire.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'ar') return matchesSearch && m.hasLiveAR;
    if (selectedFilter === 'unesco') return matchesSearch && m.status.includes('UNESCO');
    return matchesSearch;
  });

  return (
    <div style={{
      maxWidth: '1360px',
      margin: '0 auto',
      padding: '40px 24px 80px',
    }}>
      {/* Dashboard Section Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '32px',
      }}>
        <div>
          <div className="gold-badge" style={{ marginBottom: '8px' }}>
            <Layers size={14} /> National Preservation Catalog
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            color: '#0f1e36',
            fontWeight: 800,
            margin: '0 0 6px 0',
          }}>
            Digitally Preserved Monuments & Shrines
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0, maxWidth: '600px' }}>
            Explore sub-millimeter 3D spatial scans, historical chronologies, architectural breakdowns, and live marker AR experiences.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            minWidth: '260px',
          }}>
            <Search size={16} style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#94a3b8',
            }} />
            <input
              type="text"
              placeholder="Search monuments, empires, sites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 38px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                fontSize: '0.85rem',
                color: '#1e293b',
                outline: 'none',
                transition: 'border 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#c59b27')}
              onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { id: 'all', label: 'All Sites' },
              { id: 'ar', label: '⚡ Live AR Ready' },
              { id: 'unesco', label: 'UNESCO Listed' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: selectedFilter === filter.id ? 700 : 500,
                  border: selectedFilter === filter.id ? '1px solid #c59b27' : '1px solid #cbd5e1',
                  background: selectedFilter === filter.id ? '#0f1e36' : '#ffffff',
                  color: selectedFilter === filter.id ? '#dfb743' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Highlighted Monument Banner for Stone Chariot */}
      {filteredMonuments.some(m => m.id === 'stone-chariot') && (
        <div style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(197, 155, 39, 0.4)',
          color: '#ffffff',
          padding: '32px',
          marginBottom: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'center',
          boxShadow: '0 12px 36px rgba(10, 25, 47, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197, 155, 39, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span className="dark-gold-badge">
                <Award size={13} /> Featured Primary Preservation Asset
              </span>
              <span style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid rgba(34, 197, 94, 0.5)',
                color: '#4ade80',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                ● AR Marker Active
              </span>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              color: '#ffffff',
              fontWeight: 800,
              margin: '0 0 6px 0',
            }}>
              Stone Chariot (प्रस्तर रथ)
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#dfb743',
              fontWeight: 500,
              marginBottom: '14px',
              fontStyle: 'italic',
            }}>
              Vijaya Vittala Temple Complex • Hampi, Karnataka
            </p>

            <p style={{
              fontSize: '0.9rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '560px',
            }}>
              One of only three monumental stone chariots in India. Masterfully constructed using interlocking granite blocks, featuring rotary stone axles, mythical battle friezes, and dedicated to Garuda.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onSelectMonument(MONUMENTS[0])}
                className="btn-gold"
                style={{ padding: '12px 24px', fontSize: '0.92rem' }}
              >
                <BookOpen size={18} />
                <span>View Full Heritage Vault</span>
              </button>

              <button
                onClick={() => onLaunchARForMonument(MONUMENTS[0])}
                className="btn-primary"
                style={{ padding: '12px 22px', fontSize: '0.92rem' }}
              >
                <Sparkles size={18} color="#dfb743" />
                <span>Launch AR Marker Scanner</span>
              </button>
            </div>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '2px solid rgba(197, 155, 39, 0.4)',
            height: '280px',
          }}>
            <img
              src="https://images.unsplash.com/photo-1600100397608-f010f444b02a?auto=format&fit=crop&w=1000&q=80"
              alt="Stone Chariot Hampi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(0deg, rgba(8, 18, 37, 0.95) 0%, transparent 100%)',
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#dfb743', fontWeight: 700, textTransform: 'uppercase' }}>
                  Digital Twin Status
                </span>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                  Sub-mm GLB Photogrammetry Mesh
                </p>
              </div>
              <button
                onClick={() => onSelectMonument(MONUMENTS[0])}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                }}
              >
                <Eye size={13} /> Inspect 3D Twin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Monument Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '24px',
      }}>
        {filteredMonuments.map((monument) => (
          <div
            key={monument.id}
            className="heritage-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Top Image Preview */}
            <div style={{
              position: 'relative',
              height: '210px',
              overflow: 'hidden',
              backgroundColor: '#0a192f',
            }}>
              <img
                src={monument.heroImage}
                alt={monument.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                right: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  background: 'rgba(15, 30, 54, 0.85)',
                  color: '#dfb743',
                  border: '1px solid rgba(197, 155, 39, 0.5)',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(6px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  <Award size={12} /> {monument.status}
                </span>

                {monument.hasLiveAR ? (
                  <span style={{
                    background: 'rgba(34, 197, 94, 0.9)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '16px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}>
                    ⚡ AR Live
                  </span>
                ) : (
                  <span style={{
                    background: 'rgba(100, 116, 139, 0.85)',
                    color: '#f8fafc',
                    padding: '4px 10px',
                    borderRadius: '16px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}>
                    Archive Tier 2
                  </span>
                )}
              </div>

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
                padding: '12px 16px',
                color: '#ffffff',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#e2e8f0' }}>
                  <MapPin size={13} color="#dfb743" />
                  <span>{monument.location.district}, {monument.location.state}</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: '20px 22px', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0f1e36',
                    marginBottom: '2px',
                  }}>
                    {monument.name}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#854d0e',
                    fontFamily: "'Rozha One', serif",
                    margin: 0,
                  }}>
                    {monument.hindiName}
                  </p>
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#475569',
                  background: '#f1f5f9',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontWeight: 600,
                }}>
                  {monument.period}
                </div>
              </div>

              <p style={{
                fontSize: '0.86rem',
                color: '#475569',
                lineHeight: 1.5,
                marginBottom: '16px',
              }}>
                {monument.shortOverview}
              </p>

              {/* Key Specs Pills */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                padding: '10px',
                background: '#f8fafc',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                marginBottom: '18px',
              }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>
                    Empire / Dynasty
                  </span>
                  <strong style={{ fontSize: '0.82rem', color: '#1e293b' }}>
                    {monument.empire}
                  </strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>
                    Digital Archive
                  </span>
                  <strong style={{ fontSize: '0.82rem', color: '#0f1e36' }}>
                    {monument.threeDArchive.fileType.split(' ')[0]} 3D Twin
                  </strong>
                </div>
              </div>
            </div>

            {/* Card Actions Footer */}
            <div style={{
              padding: '14px 22px',
              borderTop: '1px solid #f1f5f9',
              background: '#fafaf9',
              display: 'flex',
              gap: '10px',
              justifyContent: 'space-between',
            }}>
              <button
                onClick={() => onSelectMonument(monument)}
                className="btn-outline"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '8px 12px' }}
              >
                <BookOpen size={15} />
                <span>View Vault</span>
              </button>

              {monument.hasLiveAR ? (
                <button
                  onClick={() => onLaunchARForMonument(monument)}
                  className="btn-gold"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '8px 12px' }}
                >
                  <Sparkles size={15} />
                  <span>Launch AR</span>
                </button>
              ) : (
                <button
                  onClick={() => onSelectMonument(monument)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '8px 12px' }}
                >
                  <span>Explore Model</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Preservation Rationale Footer Callout */}
      <div style={{
        marginTop: '60px',
        padding: '30px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #f7f4ed 0%, #ede7db 100%)',
        border: '1px solid #d4a373',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <div style={{ maxWidth: '780px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
            <Shield size={16} /> NATIONAL PRESERVATION DIRECTIVE
          </div>
          <h3 style={{ fontSize: '1.3rem', color: '#0f1e36', fontWeight: 800, marginBottom: '6px' }}>
            Why Digital Preservation is Critical for India's Heritage
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Ancient stone structures face unceasing environmental weathering, seismic vulnerability, and micro-erosion. SanskritiSetu creates an immutable sovereign digital archive to power global education and restoration benchmarks.
          </p>
        </div>

        <button
          onClick={onOpenPreservation}
          className="btn-primary"
          style={{ whiteSpace: 'nowrap' }}
        >
          <span>Read Preservation Policy</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
