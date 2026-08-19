import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Headphones,
  SkipBack,
  SkipForward,
  Sparkles,
  Gauge
} from 'lucide-react';

interface AudioGuideProps {
  audioData: {
    duration: string;
    narratorEn: string;
    narratorHi: string;
    transcriptEn: string[];
    transcriptHi: string[];
  };
  monumentName: string;
}

export const AudioGuide: React.FC<AudioGuideProps> = ({ audioData, monumentName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [activeSentenceIdx, setActiveSentenceIdx] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState(false);

  const transcript = language === 'en' ? audioData.transcriptEn : audioData.transcriptHi;
  const narrator = language === 'en' ? audioData.narratorEn : audioData.narratorHi;

  const transcriptRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Speech synthesis audio playback
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      const textToSpeak = transcript[activeSentenceIdx] || transcript[0];
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = language === 'en' ? 'en-IN' : 'hi-IN';
      utterance.rate = playbackSpeed;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        if (activeSentenceIdx < transcript.length - 1) {
          setActiveSentenceIdx((prev) => prev + 1);
        } else {
          setIsPlaying(false);
          setActiveSentenceIdx(0);
        }
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      if (!isMuted) {
        window.speechSynthesis.speak(utterance);
      }
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isPlaying, activeSentenceIdx, language, isMuted, playbackSpeed, transcript]);

  // Auto-scroll active transcript card smoothly into view
  useEffect(() => {
    if (isPlaying && transcriptRefs.current[activeSentenceIdx]) {
      transcriptRefs.current[activeSentenceIdx]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeSentenceIdx, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (activeSentenceIdx < transcript.length - 1) {
      window.speechSynthesis.cancel();
      setActiveSentenceIdx((prev) => prev + 1);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (activeSentenceIdx > 0) {
      window.speechSynthesis.cancel();
      setActiveSentenceIdx((prev) => prev - 1);
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    window.speechSynthesis.cancel();
    setActiveSentenceIdx(0);
    setIsPlaying(true);
  };

  const handleSentenceClick = (idx: number) => {
    window.speechSynthesis.cancel();
    setActiveSentenceIdx(idx);
    setIsPlaying(true);
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetIdx = Math.floor(clickRatio * transcript.length);
    handleSentenceClick(Math.min(targetIdx, transcript.length - 1));
  };

  const togglePlaybackSpeed = () => {
    const speeds = [1.0, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const progressPercent = Math.round(((activeSentenceIdx + 1) / transcript.length) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Main Modern Player Card */}
      <div className="digi-card" style={{ padding: '18px 16px', margin: 0 }}>
        {/* Header Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              backgroundColor: '#f2efff',
              color: '#4c35de',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Headphones size={18} />
            </div>
            <div>
              <span style={{ fontSize: '0.62rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                Voice Archive
              </span>
              <strong style={{ fontSize: '0.84rem', color: '#181c32', fontFamily: 'Outfit, sans-serif' }}>
                Official Audio Guide
              </strong>
            </div>
          </div>

          {/* Language Toggle Pills */}
          <div style={{
            display: 'flex',
            background: '#f4f5fb',
            padding: '3px',
            borderRadius: '12px',
            border: '1px solid #e6e8f2',
          }}>
            <button
              onClick={() => {
                window.speechSynthesis.cancel();
                setLanguage('en');
                setActiveSentenceIdx(0);
              }}
              style={{
                padding: '4px 10px',
                borderRadius: '9px',
                border: 'none',
                fontSize: '0.7rem',
                fontWeight: 800,
                background: language === 'en' ? '#4c35de' : 'transparent',
                color: language === 'en' ? '#ffffff' : '#8b92ab',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              English
            </button>
            <button
              onClick={() => {
                window.speechSynthesis.cancel();
                setLanguage('hi');
                setActiveSentenceIdx(0);
              }}
              style={{
                padding: '4px 10px',
                borderRadius: '9px',
                border: 'none',
                fontSize: '0.7rem',
                fontWeight: 800,
                background: language === 'hi' ? '#4c35de' : 'transparent',
                color: language === 'hi' ? '#ffffff' : '#8b92ab',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              हिंदी
            </button>
          </div>
        </div>

        {/* Animated Waveform Equalizer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          height: '38px',
          background: '#f8f9fe',
          borderRadius: '14px',
          padding: '0 16px',
          marginBottom: '14px',
          border: '1px solid #eceef5',
        }}>
          {[12, 22, 16, 28, 18, 26, 14, 24, 16, 20, 10, 26, 16, 22, 14, 28, 18].map((baseHeight, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: isPlaying ? `${Math.max(6, baseHeight * (0.4 + Math.sin(Date.now() / 200 + i) * 0.5 + 0.5))}px` : '4px',
                backgroundColor: isPlaying ? '#4c35de' : '#cbd5e1',
                borderRadius: '3px',
                transition: 'height 0.1s ease',
              }}
            />
          ))}
        </div>

        {/* Interactive Scrubbing Timeline */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#8b92ab', marginBottom: '6px', fontWeight: 700 }}>
            <span>Section {activeSentenceIdx + 1} of {transcript.length}</span>
            <span>{progressPercent}% Complete</span>
          </div>

          <div
            onClick={handleTimelineClick}
            style={{
              width: '100%',
              height: '8px',
              background: '#eceef5',
              borderRadius: '4px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #4c35de 0%, #684bf8 100%)',
              transition: 'width 0.2s ease',
            }} />
          </div>
        </div>

        {/* Complete Functional Player Controls Strip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
          {/* Speed Button */}
          <button
            onClick={togglePlaybackSpeed}
            title="Playback Speed"
            style={{
              padding: '6px 10px',
              borderRadius: '10px',
              backgroundColor: '#f4f5fb',
              border: 'none',
              color: '#4c35de',
              fontSize: '0.72rem',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            {playbackSpeed}x
          </button>

          {/* Core Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrev}
              disabled={activeSentenceIdx === 0}
              title="Previous Line"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f4f5fb',
                border: 'none',
                color: activeSentenceIdx === 0 ? '#cbd5e1' : '#4b526d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: activeSentenceIdx === 0 ? 'default' : 'pointer',
              }}
            >
              <SkipBack size={16} />
            </button>

            <button
              onClick={togglePlay}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4c35de 0%, #644bf5 100%)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(76, 53, 222, 0.35)',
              }}
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '2px' }} />}
            </button>

            <button
              onClick={handleNext}
              disabled={activeSentenceIdx === transcript.length - 1}
              title="Next Line"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f4f5fb',
                border: 'none',
                color: activeSentenceIdx === transcript.length - 1 ? '#cbd5e1' : '#4b526d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: activeSentenceIdx === transcript.length - 1 ? 'default' : 'pointer',
              }}
            >
              <SkipForward size={16} />
            </button>
          </div>

          {/* Mute Toggle Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Unmute" : "Mute"}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#f4f5fb',
              border: 'none',
              color: isMuted ? '#ef4444' : '#4b526d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        {/* Narrator Attribution */}
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.68rem', color: '#8b92ab' }}>
          Official Voice Synthesizer: <strong style={{ color: '#181c32' }}>{narrator}</strong>
        </div>
      </div>

      {/* Interactive Synced Transcript List */}
      <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
        <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#181c32', marginBottom: '10px', fontFamily: 'Outfit, sans-serif' }}>
          Interactive Synced Transcript
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '280px', overflowY: 'auto' }}>
          {transcript.map((sentence, idx) => {
            const isActive = activeSentenceIdx === idx;
            return (
              <div
                key={idx}
                ref={(el) => (transcriptRefs.current[idx] = el)}
                onClick={() => handleSentenceClick(idx)}
                style={{
                  padding: '10px 12px',
                  borderRadius: '12px',
                  background: isActive ? '#f2efff' : '#f8f9fe',
                  border: isActive ? '1.5px solid #4c35de' : '1px solid #eceef5',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontSize: '0.64rem' }}>
                  <span style={{ color: isActive ? '#4c35de' : '#8b92ab', fontWeight: 700 }}>
                    Section {idx + 1}
                  </span>
                  {isActive && (
                    <span style={{ color: '#4c35de', fontWeight: 800 }}>
                      {isPlaying ? '● Speaking' : '● Selected'}
                    </span>
                  )}
                </div>
                <p style={{
                  fontSize: '0.78rem',
                  color: isActive ? '#181c32' : '#4b526d',
                  margin: 0,
                  lineHeight: 1.4,
                  fontWeight: isActive ? 600 : 400,
                }}>
                  {sentence}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
