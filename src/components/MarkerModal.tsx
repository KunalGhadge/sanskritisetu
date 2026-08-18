import React from 'react';
import { X, Printer, Smartphone, CheckCircle2 } from 'lucide-react';

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
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '580px',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e2e8f0',
        }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Stone Chariot AR Marker Pattern
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Target Asset: assets/marker.patt
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#64748b',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {/* Clean Marker */}
          <div style={{
            width: '220px',
            height: '220px',
            backgroundColor: '#000000',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '6px solid #000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#000000',
                  borderRadius: '50%',
                }} />
              </div>
              <span style={{
                fontSize: '10px',
                fontWeight: 900,
                color: '#000000',
                letterSpacing: '0.1em',
                marginTop: '10px',
                fontFamily: 'monospace',
              }}>
                HAMPI•AR
              </span>
            </div>
          </div>

          {/* Quick instructions */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#475569' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Smartphone size={16} color="#0f172a" />
              <span><strong>Option 1:</strong> Keep this marker open on your PC screen and scan with your phone camera.</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Printer size={16} color="#0f172a" />
              <span><strong>Option 2:</strong> Click Print Marker to print a physical paper card.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '14px 20px',
          backgroundColor: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
        }}>
          <button
            onClick={handlePrint}
            className="btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.82rem' }}
          >
            <Printer size={15} />
            <span>Print Marker</span>
          </button>

          <button
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
