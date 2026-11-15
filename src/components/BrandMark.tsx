interface BrandMarkProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function BrandMark({ variant = 'dark', className = '' }: BrandMarkProps) {
  const textColor = variant === 'light' ? 'text-[#FAF6EE]' : 'text-[#16261D]';
  const leafFill = variant === 'light' ? '#C8A464' : '#1B3B2B';
  const leafAccent = variant === 'light' ? '#FAF6EE' : '#B28C4A';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="28"
        height="24"
        viewBox="0 0 36 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M18 26C18 16.5 19.5 7 25 2C24.5 10.5 22.5 18 18 26Z"
          fill={leafFill}
        />
        <path
          d="M16.5 26.5C11.5 20.5 6 15.5 2 13C7.5 13.5 13 17.5 16.5 26.5Z"
          fill={leafAccent}
        />
        <path
          d="M19.5 26.5C23.5 21 29.5 16.5 34 15C28.5 19 24 22.5 19.5 26.5Z"
          fill={leafFill}
          opacity="0.85"
        />
      </svg>
      <span
        dir="ltr"
        className={`font-editorial text-xl sm:text-2xl font-bold tracking-[0.14em] uppercase ${textColor}`}
      >
        ORAVIA
      </span>
    </span>
  );
}
