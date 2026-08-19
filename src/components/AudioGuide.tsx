import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Mic, Headphones, Globe } from 'lucide-react';

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
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const transcript = language === 'en' ? audioData.transcriptEn : audioData.transcriptHi;
  const narrator = language === 'en' ? audioData.narratorEn : audioData.narratorHi;

  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Speech synthesis audio playback
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      const textToSpeak = transcript[activeSentenceIdx] || transcript[0];
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = language === 'en' ? 'en-IN' : 'hi-IN';
      utterance.rate = 0.92;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        if (activeSentenceIdx < transcript.length - 1) {
          setActiveSentenceIdx((prev) => prev + 1);
        } else {
          setIsPlaying(false);
          setActiveSentenceIdx(0);
          setProgress(0);
        }
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      speechSynthRef.current = utterance;
      if (!isMuted) {
        window.speechSynthesis.speak(utterance);
      }
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isPlaying, activeSentenceIdx, language, isMuted, transcript]);

  useEffect(() => {
    const total = transcript.length;
    const currentProg = Math.round(((activeSentenceIdx + 1) / total) * 100);
    setProgress(currentProg);
  }, [activeSentenceIdx, transcript.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    window.speechSynthesis.cancel();
    setActiveSentenceIdx(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSentenceClick = (idx: number) => {
    window.speechSynthesis.cancel();
    setActiveSentenceIdx(idx);
    setIsPlaying(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Main Modern Player Card */}
      <div className="digi-card" style={{ padding: '20px 18px', margin: 0 }}>
        {/* Header Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              backgroundColor: '#f2efff',
              color: '#4c35de',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Headphones size={16} />
            </div>
            <div>
              <span style={{ fontSize: '0.64rem', color: '#8b92ab', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                Voice Archive
              </span>
              <strong style={{ fontSize: '0.8rem', color: '#181c32', fontFamily: 'Outfit, sans-serif' }}>
                Official Narration
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
          height: '36px',
          background: '#f8f9fe',
          borderRadius: '14px',
          padding: '0 16px',
          marginBottom: '16px',
          border: '1px solid #eceef5',
        }}>
          {[14, 24, 18, 30, 20, 28, 16, 26, 18, 22, 12, 28, 18, 24, 16].map((height, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: isPlaying ? `${Math.max(6, (height + (i % 3) * 4) * (0.5 + Math.random() * 0.5))}px` : `${Math.max(4, height * 0.3)}px`,
                backgroundColor: isPlaying ? '#4c35de' : '#d1d5e5',
                borderRadius: '3px',
                transition: 'height 0.15s ease',
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#8b92ab', marginBottom: '4px', fontWeight: 600 }}>
            <span>Sentence {activeSentenceIdx + 1} of {transcript.length}</span>
            <span>{progress}%</span>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#eceef5', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #4c35de 0%, #684bf8 100%)', transition: 'width 0.25s ease' }} />
          </div>
        </div>

        {/* Player Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <button
            onClick={handleRestart}
            title="Restart Audio"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#f4f5fb',
              border: 'none',
              color: '#4b526d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={16} />
          </button>

          <button
            onClick={togglePlay}
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4c35de 0%, #644bf5 100%)',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(76, 53, 222, 0.35)',
              transform: 'scale(1)',
              transition: 'transform 0.12s ease',
            }}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '2px' }} />}
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? "Unmute" : "Mute"}
            style={{
              width: '38px',
              height: '38px',
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
          Voice Synthesizer: <strong style={{ color: '#181c32' }}>{narrator}</strong>
        </div>
      </div>

      {/* Interactive Transcripts List */}
      <div className="digi-card" style={{ padding: '16px', margin: 0 }}>
        <h4 style={{ fontSize: '0.84rem', fontWeight: 800, color: '#181c32', marginBottom: '10px', fontFamily: 'Outfit, sans-serif' }}>
          Interactive Synced Transcript
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {transcript.map((sentence, idx) => {
            const isActive = activeSentenceIdx === idx && isPlaying;
            return (
              <div
                key={idx}
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
                    Line {idx + 1}
                  </span>
                  {isActive && (
                    <span style={{ color: '#4c35de', fontWeight: 800 }}>● Active Speaking</span>
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
