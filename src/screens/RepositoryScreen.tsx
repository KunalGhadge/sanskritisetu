import React, { useState } from 'react';
import { STATES_DATA } from '../data/states';
import {
  Database,
  Award,
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
  Box,
  CheckCircle2,
  Clock,
  Filter,
  Search
} from 'lucide-react';

interface RepositoryScreenProps {
  selectedStateId?: string;
  onOpenMonument: (monumentId: string) => void;
  onLaunchAR: (monumentId: string) => void;
}

export const RepositoryScreen: React.FC<RepositoryScreenProps> = ({
  selectedStateId,
  onOpenMonument,
  onLaunchAR,
}) => {
  const [activeStateFilter, setActiveStateFilter] = useState<string>(selectedStateId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUpcomingSite, setSelectedUpcomingSite] = useState<any | null>(null);

  // Flatten all sites with their state metadata
  const allSites = STATES_DATA.flatMap((state) =>
    state.sites.map((site) => ({
      ...site,
      stateName: state.name,
      stateId: state.id,
      authority: state.authority,
    }))
  );

  const filteredSites = allSites.filter((site) => {
    const matchesState = activeStateFilter === 'all' || site.stateId === activeStateFilter;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.stateName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Header */}
      <div>
        <span style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
          National Heritage Repository
        </span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
          Sovereign Registry
        </h2>
      </div>

      {/* Search Input */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '8px 12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
      }}>
        <Search size={15} color="#94a3b8" />
        <input
          type="text"
          placeholder="Filter by monument, state, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#0f172a',
            fontSize: '0.8rem',
            outline: 'none',
            width: '100%',
          }}
        />
      </div>

      {/* State Filter Pills */}
      <div className="app-pill-tabs">
        <button
          onClick={() => setActiveStateFilter('all')}
          className={`app-pill-btn ${activeStateFilter === 'all' ? 'active' : ''}`}
        >
          All States ({allSites.length})
        </button>
        {STATES_DATA.map((state) => (
          <button
            key={state.id}
            onClick={() => setActiveStateFilter(state.id)}
            className={`app-pill-btn ${activeStateFilter === state.id ? 'active' : ''}`}
          >
            {state.name}
          </button>
        ))}
      </div>

      {/* Monument Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredSites.map((site) => (
          <div key={site.id} className="app-card" style={{ padding: '12px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Site Thumbnail */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0b1528',
                flexShrink: 0,
              }}>
                <img src={site.image} alt={site.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Info Column */}
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '4px', marginBottom: '2px' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.2 }}>
                    {site.name}
                  </h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#64748b', marginBottom: '4px' }}>
                  <MapPin size={11} color="#d97706" />
                  <span>{site.location}, {site.stateName}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.65rem', background: '#f1f5f9', color: '#334155', padding: '2px 6px', borderRadius: '6px', fontWeight: 600 }}>
                    {site.unescoStatus}
                  </span>

                  {site.isFullyArchived ? (
                    <span style={{ fontSize: '0.65rem', background: '#ecfdf5', color: '#059669', padding: '2px 6px', borderRadius: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <CheckCircle2 size={11} /> 3D Ingested
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.65rem', background: '#fffbeb', color: '#b45309', padding: '2px 6px', borderRadius: '6px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Clock size={11} /> Phase 2 Ingestion
                    </span>
                  )}
                </div>

                {/* Actions */}
                {site.isFullyArchived ? (
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => onOpenMonument(site.id)}
                      className="btn-app-primary"
                      style={{ padding: '6px 10px', fontSize: '0.72rem', borderRadius: '8px' }}
                    >
                      <span>Vault</span>
                      <ArrowRight size={12} />
                    </button>
                    <button
                      onClick={() => onLaunchAR(site.id)}
                      className="btn-app-accent"
                      style={{ padding: '6px 10px', fontSize: '0.72rem', borderRadius: '8px' }}
                    >
                      <Box size={12} />
                      <span>AR</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedUpcomingSite(site)}
                    className="btn-app-secondary"
                    style={{ padding: '5px 10px', fontSize: '0.72rem', width: '100%', borderRadius: '8px' }}
                  >
                    <span>View Ingestion Dossier</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Ingestion Modal */}
      {selectedUpcomingSite && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setSelectedUpcomingSite(null)}
        >
          <div
            className="app-card"
            style={{ maxWidth: '360px', width: '100%', margin: 0, padding: '20px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '140px', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', backgroundColor: '#0b1528' }}>
              <img src={selectedUpcomingSite.image} alt={selectedUpcomingSite.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <span style={{ fontSize: '0.68rem', color: '#d97706', fontWeight: 800, textTransform: 'uppercase' }}>
              {selectedUpcomingSite.stateName} Heritage Registry
            </span>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 6px 0' }}>
              {selectedUpcomingSite.name}
            </h4>

            <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, marginBottom: '14px' }}>
              {selectedUpcomingSite.description}
            </p>

            <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '10px', fontSize: '0.74rem', marginBottom: '14px' }}>
              <div><strong>Custodian:</strong> {selectedUpcomingSite.authority}</div>
              <div><strong>Status:</strong> Photogrammetric Ingestion Scheduled (Phase 2)</div>
            </div>

            <button
              onClick={() => setSelectedUpcomingSite(null)}
              className="btn-app-primary"
              style={{ fontSize: '0.82rem', padding: '10px' }}
            >
              Close Dossier
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
