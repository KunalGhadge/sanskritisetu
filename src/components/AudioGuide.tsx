import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Mic } from 'lucide-react';

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

export const AudioGuide: React.FC<AudioGuideProps> = ({ audioData }) => {
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
      utterance.rate = 0.95;
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
    <div style={{
      backgroundColor: '#0b1528',
      borderRadius: '12px',
      padding: '24px',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}>
      {/* Header Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            backgroundColor: '#162a45',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#38bdf8',
          }}>
            <Mic size={16} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
              Official Audio Archive
            </h4>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
              {narrator} • {audioData.duration}
            </p>
          </div>
        </div>

        {/* Language Selector */}
        <div style={{
          display: 'flex',
          backgroundColor: '#162a45',
          borderRadius: '6px',
          padding: '2px',
        }}>
          <button
            onClick={() => {
              window.speechSynthesis.cancel();
              setLanguage('en');
              setActiveSentenceIdx(0);
            }}
            style={{
              background: language === 'en' ? '#0b1528' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 12px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
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
              background: language === 'hi' ? '#0b1528' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 12px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            हिन्दी (Hindi)
          </button>
        </div>
      </div>

      {/* Audio Controls */}
      <div style={{
        backgroundColor: '#162a45',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={togglePlay}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#c2902d',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
            </button>

            <button
              onClick={handleRestart}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: '#cbd5e1',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              title="Restart"
            >
              <RotateCcw size={14} />
            </button>

            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block' }}>
                {isPlaying ? 'Playing Narration...' : 'Audio Ready'}
              </span>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                Sentence {activeSentenceIdx + 1} of {transcript.length}
              </span>
            </div>
          </div>

          {/* Mute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            style={{
              background: 'none',
              border: 'none',
              color: isMuted ? '#ef4444' : '#cbd5e1',
              cursor: 'pointer',
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        {/* Progress */}
        <div style={{
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginTop: '12px',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#c2902d',
            transition: 'width 0.2s linear',
          }} />
        </div>
      </div>

      {/* Transcript */}
      <div>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
          Interactive Synced Transcript
        </span>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          maxHeight: '160px',
          overflowY: 'auto',
        }}>
          {transcript.map((line, index) => {
            const isActive = index === activeSentenceIdx && isPlaying;
            return (
              <div
                key={index}
                onClick={() => handleSentenceClick(index)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: isActive ? '#1e3a5f' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  fontSize: '0.82rem',
                  lineHeight: 1.4,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}
              >
                <span style={{ color: isActive ? '#38bdf8' : '#64748b', fontSize: '0.72rem', fontWeight: 700 }}>
                  0{index + 1}
                </span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
