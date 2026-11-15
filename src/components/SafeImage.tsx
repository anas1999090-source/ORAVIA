import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle = 'ORAVIA',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F2ECE0] via-[#FAF6EE] to-[#E6DCC8] text-[#1B3B2B] p-6 text-center ${className}`}
      >
        <svg
          width="40"
          height="34"
          viewBox="0 0 36 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="mb-3 opacity-80"
        >
          <path d="M18 26C18 16.5 19.5 7 25 2C24.5 10.5 22.5 18 18 26Z" fill="#1B3B2B" />
          <path d="M16.5 26.5C11.5 20.5 6 15.5 2 13C7.5 13.5 13 17.5 16.5 26.5Z" fill="#B28C4A" />
          <path d="M19.5 26.5C23.5 21 29.5 16.5 34 15C28.5 19 24 22.5 19.5 26.5Z" fill="#1B3B2B" opacity="0.85" />
        </svg>
        <span className="font-editorial text-lg font-bold tracking-wider">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
