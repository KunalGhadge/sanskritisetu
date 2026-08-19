import React, { useState } from 'react';
import { STATES_DATA } from '../data/states';
import { HeritageImage } from '../components/HeritageImage';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import {
  ChevronLeft,
  Search,
  CheckCircle2,
  Clock,
  Landmark,
  Building2,
  ChevronRight
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

  const t = TRANSLATIONS[currentLanguage];

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

      {/* Search Input */}
      <div className="digi-search-box">
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="digi-search-input"
        />
        <Search size={16} color="#8b92ab" />
      </div>

      {/* State Filter Tabs */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
        <button
          onClick={() => setActiveStateFilter('all')}
          style={{
            padding: '7px 14px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '0.75rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            background: activeStateFilter === 'all' ? '#4c35de' : '#ffffff',
            color: activeStateFilter === 'all' ? '#ffffff' : '#8b92ab',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            transition: 'all 0.15s ease',
          }}
        >
          {t.allStatesFilter} ({allSites.length})
        </button>

        {STATES_DATA.map((state) => {
          const localizedStateName = currentLanguage !== 'en' && state.hindiName ? state.hindiName : state.name;

          return (
            <button
              key={state.id}
              onClick={() => setActiveStateFilter(state.id)}
              style={{
                padding: '7px 14px',
                borderRadius: '16px',
                border: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                background: activeStateFilter === state.id ? '#4c35de' : '#ffffff',
                color: activeStateFilter === state.id ? '#ffffff' : '#8b92ab',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                transition: 'all 0.15s ease',
              }}
            >
              {localizedStateName}
            </button>
          );
        })}
      </div>

      {/* Document Items List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {filteredSites.map((site) => (
          <div
            key={site.id}
            onClick={() => {
              if (site.isFullyArchived) {
                onOpenMonument(site.id);
              } else {
                setSelectedUpcomingSite(site);
              }
            }}
            className="digi-doc-item"
          >
            {/* Left Image Badge */}
            <div className="digi-icon-badge">
              <HeritageImage
                src={site.image}
                alt={site.name}
              />
            </div>

            {/* Middle Details */}
            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <strong style={{
                fontSize: '0.88rem',
                color: '#181c32',
                display: 'block',
                lineHeight: 1.2,
                marginBottom: '2px',
                fontFamily: 'Outfit, sans-serif'
              }}>
                {currentLanguage !== 'en' && (site.name.includes('(') ? site.name.split('(')[0] : site.name)}
                {currentLanguage === 'en' && site.name}
              </strong>
              <span style={{ fontSize: '0.72rem', color: '#8b92ab', display: 'block', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {site.authority}
              </span>
              <span style={{ fontSize: '0.64rem', color: '#a6adbf', display: 'block' }}>
                Fri, 15 Aug 2024 10:30 GMT
              </span>
            </div>

            {/* Right Status */}
            <div>
              {site.isFullyArchived ? (
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#f2efff',
                  color: '#4c35de',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ChevronRight size={17} />
                </div>
              ) : (
                <span style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  background: '#f4f5fb',
                  color: '#8b92ab',
                  padding: '4px 8px',
                  borderRadius: '10px',
                }}>
                  {t.phase2Badge}
                </span>
              )}
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
            backgroundColor: 'rgba(24, 28, 50, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedUpcomingSite(null)}
        >
          <div
            className="digi-card"
            style={{ maxWidth: '360px', width: '100%', margin: 0, padding: '24px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '140px', borderRadius: '18px', overflow: 'hidden', marginBottom: '14px' }}>
              <HeritageImage
                src={selectedUpcomingSite.image}
                alt={selectedUpcomingSite.name}
              />
            </div>

            <span style={{ fontSize: '0.68rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {selectedUpcomingSite.stateName} Heritage Registry
            </span>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#181c32', margin: '2px 0 6px 0', fontFamily: 'Outfit, sans-serif' }}>
              {selectedUpcomingSite.name}
            </h4>

            <p style={{ fontSize: '0.8rem', color: '#4b526d', lineHeight: 1.5, marginBottom: '16px' }}>
              {selectedUpcomingSite.description}
            </p>

            <div style={{ padding: '12px', background: '#f8f9fe', borderRadius: '14px', fontSize: '0.74rem', marginBottom: '16px', border: '1px solid #eceef5' }}>
              <div><strong>Issuing Body:</strong> {selectedUpcomingSite.authority}</div>
              <div><strong>Archival Status:</strong> {t.archivalStatusText}</div>
            </div>

            <button
              onClick={() => setSelectedUpcomingSite(null)}
              className="btn-digi-purple"
              style={{ fontSize: '0.82rem', padding: '12px' }}
            >
              {t.closeDossier}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
