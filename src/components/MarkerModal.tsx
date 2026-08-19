import React from 'react';
import { X, Printer, Smartphone, Download, CheckCircle2, QrCode } from 'lucide-react';

interface MarkerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarkerModal: React.FC<MarkerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      backgroundColor: 'rgba(24, 28, 50, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}
    onClick={onClose}
    >
      <div
        className="digi-card"
        style={{
          maxWidth: '460px',
          width: '100%',
          margin: 0,
          padding: '24px',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #f1f3fa',
          paddingBottom: '14px',
          marginBottom: '16px',
        }}>
          <div>
            <span style={{ fontSize: '0.64rem', color: '#4c35de', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Universal WebAR Anchor
            </span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#181c32', margin: '2px 0 0 0', fontFamily: 'Outfit, sans-serif' }}>
              AR Tracking Marker
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#f4f5fb',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              color: '#8b92ab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          {/* Real Default Marker Image */}
          <div style={{
            width: '210px',
            height: '210px',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '16px',
            border: '2px dashed #4c35de',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(76, 53, 222, 0.08)',
          }}>
            <img
              src="/ar/assets/default-marker.png"
              alt="Default AR Tracking Marker"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Quick Guidance Instructions */}
          <div style={{
            width: '100%',
            background: '#f8f9fe',
            borderRadius: '14px',
            padding: '12px 14px',
            border: '1px solid #eceef5',
            fontSize: '0.74rem',
            color: '#4b526d',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span><strong>Step 1:</strong> Display on another phone, laptop screen, or print on paper.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span><strong>Step 2:</strong> Open <strong>Launch Camera AR View</strong> in Explorer.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#10b981" />
              <span><strong>Step 3:</strong> Point your camera directly at the black border to project the 3D monument in physical space!</span>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%' }}>
            <a
              href="/ar/assets/default-marker.png"
              download="sanskritisetu-ar-marker.png"
              className="btn-digi-secondary"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                padding: '10px',
              }}
            >
              <Download size={14} />
              <span>Save Image</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn-digi-purple"
              style={{
                fontSize: '0.78rem',
                padding: '10px',
              }}
            >
              <Printer size={14} />
              <span>Print Marker</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
