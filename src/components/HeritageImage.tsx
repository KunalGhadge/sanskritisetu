import React, { useState } from 'react';
import { Landmark, Image as ImageIcon } from 'lucide-react';

interface HeritageImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
}

export const HeritageImage: React.FC<HeritageImageProps> = ({
  src,
  alt,
  className,
  style,
  fallbackSrc = 'https://images.unsplash.com/photo-1600100397608-f010f4439c3e?auto=format&fit=crop&w=800&q=80',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4c35de 0%, #2a1b94 100%)',
          color: '#ffffff',
          padding: '8px',
          textAlign: 'center',
          ...style,
        }}
      >
        <Landmark size={22} style={{ marginBottom: '4px', opacity: 0.8 }} />
        <span style={{ fontSize: '0.62rem', fontWeight: 700, opacity: 0.9 }}>{alt}</span>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #f0edff 0%, #e3dfff 50%, #f0edff 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'opacity 0.3s ease',
          opacity: isLoading ? 0 : 1,
          ...style,
        }}
      />
    </div>
  );
};
