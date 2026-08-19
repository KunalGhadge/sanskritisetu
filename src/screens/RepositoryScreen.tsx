import React, { useState, useEffect } from 'react';
import { STATES_DATA, StateHeritage } from '../data/states';
import { HeritageImage } from '../components/HeritageImage';
import { SkeletonLoader } from '../components/SkeletonLoader';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import {
  ChevronLeft,
  Search,
  CheckCircle2,
  Clock,
  Landmark,
  Building2,
  ChevronRight,
  Filter,
  Sparkles,
  Camera,
  Layers,
  Compass,
  FileText,
  X,
  ShieldCheck
} from 'lucide-react';

interface RepositoryScreenProps {
  currentLanguage: LanguageCode;
  selectedStateId?: string;
  onOpenMonument: (monumentId: string) => void;
  onLaunchAR: (monumentId: string) => void;
  onBack?: () => void;
}

export const RepositoryScreen: React.FC<RepositoryScreenProps> = ({
  currentLanguage,
  selectedStateId,
  onOpenMonument,
  onLaunchAR,
  onBack,
}) => {
  const [activeStateFilter, setActiveStateFilter] = useState<string>(selectedStateId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUpcomingSite, setSelectedUpcomingSite] = useState<any | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const t = TRANSLATIONS[currentLanguage];

  const handleStateChange = (stateId: string) => {
    setIsFiltering(true);
    setActiveStateFilter(stateId);
    setTimeout(() => setIsFiltering(false), 300);
  };

  const allSites = STATES_DATA.flatMap((state) =>
    state.sites.map((site) => ({
      ...site,
      stateName: currentLanguage !== 'en' && state.hindiName ? state.hindiName : state.name,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#181c32',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <h2 style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          color: '#4c35de',
          margin: 0,
          fontFamily: 'Outfit, sans-serif',
          textAlign: 'center',
        }}>
          {t.issuedRecordsTitle}
        </h2>

        <div style={{ width: '24px' }} />
      </div>

      {/* Modern Search Input */}
      <div className="digi-search-box" style={{ margin: 0 }}>
        <Search size={17} color="#4c35de" style={{ marginRight: '8px', flexShrink: 0 }} />
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="digi-search-input"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{ background: 'none', border: 'none', color: '#8b92ab', cursor: 'pointer', padding: '2px', display: 'flex' }}
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* State Filter Pill Tabs with Counts */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
        <button
          onClick={() => handleStateChange('all')}
          style={{
            padding: '6px 14px',
            borderRadius: '20px',
            border: 'none',
            fontSize: '0.72rem',
            fontWeight: 800,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            background: activeStateFilter === 'all' ? '#4c35de' : '#ffffff',
            color: activeStateFilter === 'all' ? '#ffffff' : '#4b526d',
            boxShadow: '0 2px 6px rgba(80, 85, 130, 0.04)',
            transition: 'all 0.15s ease',
          }}
        >
          {t.allStatesFilter} ({allSites.length})
        </button>

        {STATES_DATA.map((state) => {
          const isSelected = activeStateFilter === state.id;
          const sName = currentLanguage !== 'en' && state.hindiName ? state.hindiName : state.name;

          return (
            <button
              key={state.id}
              onClick={() => handleStateChange(state.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '20px',
                border: 'none',
                fontSize: '0.72rem',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                background: isSelected ? '#4c35de' : '#ffffff',
                color: isSelected ? '#ffffff' : '#4b526d',
                boxShadow: '0 2px 6px rgba(80, 85, 130, 0.04)',
                transition: 'all 0.15s ease',
              }}
            >
              {sName} ({state.sites.length})
            </button>
          );
        })}
      </div>

      {/* Search Telemetry Subtitle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px', fontSize: '0.7rem', color: '#8b92ab' }}>
        <span>Showing {filteredSites.length} Cadastral Records</span>
        <span style={{ color: '#10b981', fontWeight: 700 }}>● Sovereign Verified</span>
      </div>

      {isFiltering ? (
        <SkeletonLoader type="list" />
      ) : (
        /* Rich Interactive Heritage Cards List */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredSites.map((site) => {
          const isLive = site.isFullyArchived;

          return (
            <div
              key={site.id}
              onClick={() => {
                if (isLive) {
                  onOpenMonument(site.id);
                } else {
                  setSelectedUpcomingSite(site);
                }
              }}
              className="digi-card"
              style={{
                padding: '12px',
                margin: 0,
                cursor: 'pointer',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                border: isLive ? '1px solid #eceef5' : '1px dashed #d1d5db',
                background: isLive ? '#ffffff' : '#fafafa',
              }}
            >
              {/* Monument Thumbnail */}
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: '#f4f5fb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                position: 'relative',
              }}>
                <HeritageImage src={site.image} alt={site.name} />
                {isLive && (
                  <div style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    background: 'rgba(76, 53, 222, 0.9)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    padding: '1px 4px',
                    fontSize: '0.55rem',
                    fontWeight: 800,
                  }}>
                    3D
                  </div>
                )}
              </div>

              {/* Monument Content */}
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    color: isLive ? '#4c35de' : '#6b7280',
                    background: isLive ? '#f2efff' : '#f3f4f6',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                  }}>
                    {site.stateName}
                  </span>

                  {isLive ? (
                    <span style={{ fontSize: '0.6rem', color: '#10b981', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <CheckCircle2 size={10} />
                      <span>Live Dossier</span>
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.6rem', color: '#f59e0b', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Clock size={10} />
                      <span>{t.phase2Badge}</span>
                    </span>
                  )}
                </div>

                <h4 style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: '#181c32',
                  margin: '0 0 2px 0',
                  fontFamily: 'Outfit, sans-serif',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {site.name}
                </h4>

                <p style={{
                  fontSize: '0.68rem',
                  color: '#8b92ab',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {site.authority}
                </p>

                {/* Card Action Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
                  <span style={{ fontSize: '0.66rem', color: '#4c35de', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <span>{isLive ? 'Open Dossier' : 'View Schedule'}</span>
                    <ChevronRight size={12} />
                  </span>

                  {isLive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLaunchAR(site.id);
                      }}
                      style={{
                        background: '#f2efff',
                        border: 'none',
                        color: '#4c35de',
                        padding: '3px 8px',
                        borderRadius: '8px',
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                      }}
                    >
                      <Camera size={11} />
                      <span>AR</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* Phase 2 Scanning Ingestion Schedule Modal */}
      {selectedUpcomingSite && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(24, 28, 50, 0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedUpcomingSite(null)}
        >
          <div
            className="digi-card"
            style={{ maxWidth: '340px', width: '100%', margin: 0, padding: '20px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#fef3c7',
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Clock size={20} />
              </div>
              <button
                onClick={() => setSelectedUpcomingSite(null)}
                style={{ background: 'none', border: 'none', color: '#8b92ab', cursor: 'pointer', padding: '4px' }}
              >
                <X size={18} />
              </button>
            </div>

            <span style={{ fontSize: '0.66rem', color: '#d97706', fontWeight: 800, textTransform: 'uppercase' }}>
              Phase 2 Archival Ingestion
            </span>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181c32', margin: '2px 0 8px 0', fontFamily: 'Outfit, sans-serif' }}>
              {selectedUpcomingSite.name}
            </h4>

            <div style={{ height: '110px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f4f5fb', marginBottom: '12px' }}>
              <HeritageImage src={selectedUpcomingSite.image} alt={selectedUpcomingSite.name} />
            </div>

            <p style={{ fontSize: '0.74rem', color: '#4b526d', margin: '0 0 12px 0', lineHeight: 1.4 }}>
              Photogrammetric 3D point-cloud LiDAR scan scheduled by {selectedUpcomingSite.authority} under the National Heritage Digital Ingestion Mandate 2026.
            </p>

            <button
              onClick={() => setSelectedUpcomingSite(null)}
              className="btn-digi-purple"
              style={{ minHeight: '40px', padding: '10px' }}
            >
              <span>{t.closeDossier}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
