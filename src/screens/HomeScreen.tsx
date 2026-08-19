import React, { useState, useEffect } from 'react';
import { STATES_DATA, ISSUING_AUTHORITIES } from '../data/states';
import { HeritageImage } from '../components/HeritageImage';
import { LanguageCode, TRANSLATIONS } from '../utils/i18n';
import {
  Shield,
  Search,
  Compass,
  Database,
  Layers,
  Award,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Building2,
  Box,
  QrCode,
  Globe,
  Radio,
  Landmark,
  ArrowUpRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';

interface HomeScreenProps {
  currentLanguage: LanguageCode;
  onOpenMonument: (monumentId: string) => void;
  onOpenState: (stateId: string) => void;
  onNavigateTab: (tab: 'home' | 'repository' | 'ar_explorer' | 'vault' | 'trust') => void;
  onOpenMarkerModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  currentLanguage,
  onOpenMonument,
  onOpenState,
  onNavigateTab,
  onOpenMarkerModal,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const t = TRANSLATIONS[currentLanguage];

  const CAROUSEL_SLIDES = [
    {
      id: 'stone-chariot',
      tag: t.liveWebARTarget,
      isLive: true,
      title: t.monumentNames.stoneChariot,
      subtitle: t.monumentNames.stoneChariotSub,
      image: '/assets/images/stonechariot.jpg',
      actionText: t.launchARScanner,
      action: () => onNavigateTab('ar_explorer'),
      gradient: 'linear-gradient(180deg, rgba(76,53,222,0.25) 0%, rgba(30,15,100,0.94) 100%)',
    },
    {
      id: 'raigad-fort',
      tag: t.marathaHeritageArchive,
      isLive: false,
      title: t.monumentNames.raigadFort,
      subtitle: t.monumentNames.raigadFortSub,
      image: '/assets/images/raigad.jpg',
      actionText: t.exploreCollection,
      action: () => onOpenState('maharashtra'),
      gradient: 'linear-gradient(180deg, rgba(37,99,235,0.25) 0%, rgba(15,23,42,0.94) 100%)',
    },
    {
      id: 'konark-sun-temple',
      tag: t.unescoWorldHeritage,
      isLive: false,
      title: t.monumentNames.konarkTemple,
      subtitle: t.monumentNames.konarkTempleSub,
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      actionText: t.viewRepository,
      action: () => onOpenState('odisha'),
      gradient: 'linear-gradient(180deg, rgba(217,119,6,0.25) 0%, rgba(40,15,5,0.94) 100%)',
    },
    {
      id: 'brihadisvara-temple',
      tag: t.greatLivingChola,
      isLive: false,
      title: t.monumentNames.brihadisvaraTemple,
      subtitle: t.monumentNames.brihadisvaraTempleSub,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      actionText: t.viewIngestion,
      action: () => onOpenState('tamil-nadu'),
      gradient: 'linear-gradient(180deg, rgba(13,148,136,0.25) 0%, rgba(10,35,35,0.94) 100%)',
    },
  ];

  // Auto-advance Carousel timer (4s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, CAROUSEL_SLIDES.length]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* Top Greeting Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 2px 0' }}>
        <div>
          <h2 style={{ fontSize: '1.28rem', fontWeight: 800, color: '#181c32', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
            {t.greetingCitizen}
          </h2>
          <p style={{ fontSize: '0.76rem', color: '#8b92ab', margin: '2px 0 0 0', fontWeight: 500 }}>
            {t.welcomeCloud}
          </p>
        </div>

        {/* Profile Avatar / Emblem */}
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: '#f2efff',
          border: '2px solid #e3dfff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4c35de',
          boxShadow: '0 4px 12px rgba(76, 53, 222, 0.12)',
        }}>
          <Shield size={20} />
        </div>
      </div>

      {/* Live Cloud Status Ticker */}
      <div className="live-sync-strip">
        <div className="pulse-dot" />
        <span style={{ fontWeight: 700, color: '#181c32' }}>{t.sovereignActive}</span>
        <span style={{ color: '#8b92ab' }}>• {t.recordsSynced}</span>
      </div>

      {/* Interactive Auto-Advancing Hero Carousel */}
      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {CAROUSEL_SLIDES.map((slide, idx) => {
          const isActive = activeSlide === idx;
          return (
            <div
              key={slide.id}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              style={{
                backgroundImage: `${slide.gradient}, url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div style={{ position: 'relative', zIndex: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  {slide.isLive && <div className="pulse-dot" />}
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.22)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '10px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {slide.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 2px 0', lineHeight: 1.15, fontFamily: 'Outfit, sans-serif' }}>
                  {slide.title}
                </h3>
                <p style={{ fontSize: '0.74rem', color: '#e0dbff', margin: '0 0 12px 0' }}>
                  {slide.subtitle}
                </p>

                <button
                  onClick={slide.action}
                  style={{
                    background: '#ffffff',
                    color: '#4c35de',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '6px 14px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  <span>{slide.actionText}</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          );
        })}

        {/* Carousel Slide Indicators */}
        <div className="carousel-dots">
          {CAROUSEL_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`carousel-dot ${activeSlide === i ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Section 1: Preserved Heritage Records */}
      <div>
        <div className="digi-section-header">
          <h3 className="digi-section-title">
            <Layers size={17} color="#4c35de" />
            <span>{t.preservedRecords}</span>
          </h3>
          <span onClick={() => onNavigateTab('repository')} className="digi-view-all">{t.viewAll}</span>
        </div>

        {/* Horizontal Slider of Preserved Record Cards */}
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
          {/* Card 1: Stone Chariot */}
          <div
            onClick={() => onOpenMonument('stone-chariot')}
            className="digi-card"
            style={{
              minWidth: '155px',
              maxWidth: '155px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            }}>
              <HeritageImage
                src="/assets/images/stonechariot.jpg"
                alt={t.monumentNames.stoneChariot}
              />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px', fontFamily: 'Outfit, sans-serif' }}>
              {t.monumentNames.stoneChariot}
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              {t.monumentNames.stoneChariotSub}
            </span>
          </div>

          {/* Card 2: Raigad Fort */}
          <div
            onClick={() => onOpenMonument('raigad-fort')}
            className="digi-card"
            style={{
              minWidth: '155px',
              maxWidth: '155px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            }}>
              <HeritageImage
                src="/assets/images/raigad.jpg"
                alt={t.monumentNames.raigadFort}
              />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px', fontFamily: 'Outfit, sans-serif' }}>
              {t.monumentNames.raigadFort}
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              {t.monumentNames.raigadFortSub}
            </span>
          </div>

          {/* Card 3: Brihadisvara */}
          <div
            onClick={() => onOpenMonument('brihadisvara-temple')}
            className="digi-card"
            style={{
              minWidth: '155px',
              maxWidth: '155px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            }}>
              <HeritageImage
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80"
                alt={t.monumentNames.brihadisvaraTemple}
              />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px', fontFamily: 'Outfit, sans-serif' }}>
              {t.monumentNames.brihadisvaraTemple}
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              {t.monumentNames.brihadisvaraTempleSub}
            </span>
          </div>

          {/* Card 4: Konark Sun Temple */}
          <div
            onClick={() => onOpenMonument('konark-sun-temple')}
            className="digi-card"
            style={{
              minWidth: '155px',
              maxWidth: '155px',
              padding: '14px 12px',
              margin: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              backgroundColor: '#f4f5fb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            }}>
              <HeritageImage
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=300&q=80"
                alt={t.monumentNames.konarkTemple}
              />
            </div>
            <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px', fontFamily: 'Outfit, sans-serif' }}>
              {t.monumentNames.konarkTemple}
            </strong>
            <span style={{ fontSize: '0.66rem', color: '#8b92ab' }}>
              {t.monumentNames.konarkTempleSub}
            </span>
          </div>
        </div>
      </div>

      {/* Section 2: State Heritage Collection */}
      <div>
        <div className="digi-section-header">
          <h3 className="digi-section-title">
            <Building2 size={17} color="#4c35de" />
            <span>{t.stateArchives}</span>
          </h3>
          <span onClick={() => onNavigateTab('repository')} className="digi-view-all">{t.viewAll}</span>
        </div>

        {/* State Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {STATES_DATA.slice(0, 4).map((state) => {
            const localizedStateName = currentLanguage !== 'en' && state.hindiName ? state.hindiName : state.name;

            return (
              <div
                key={state.id}
                onClick={() => onOpenState(state.id)}
                className="digi-card"
                style={{
                  padding: '16px 14px',
                  margin: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#f2efff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  color: '#4c35de',
                }}>
                  <Landmark size={22} />
                </div>
                <strong style={{ fontSize: '0.84rem', color: '#181c32', display: 'block', lineHeight: 1.2, marginBottom: '2px', fontFamily: 'Outfit, sans-serif' }}>
                  {localizedStateName}
                </strong>
                <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>
                  {state.monumentCount} {t.monumentsCountSuffix}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Central Government Custodians */}
      <div>
        <div className="digi-section-header">
          <h3 className="digi-section-title">
            <Shield size={17} color="#4c35de" />
            <span>{t.centralCustodians}</span>
          </h3>
          <span onClick={() => onNavigateTab('trust')} className="digi-view-all">{t.viewAll}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ISSUING_AUTHORITIES.slice(0, 2).map((auth, i) => (
            <div
              key={i}
              onClick={() => onNavigateTab('trust')}
              className="digi-card"
              style={{
                padding: '14px 16px',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '14px',
                  background: '#f2efff',
                  color: '#4c35de',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.82rem', color: '#181c32', display: 'block' }}>{auth.name}</strong>
                  <span style={{ fontSize: '0.68rem', color: '#8b92ab' }}>{auth.recordsCount}</span>
                </div>
              </div>
              <ChevronRight size={16} color="#8b92ab" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
