export function BotanicalDivider({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const lineColor = variant === 'dark' ? 'bg-[#C8A464]/30' : 'bg-[#B28C4A]/30';
  const strokeColor = variant === 'dark' ? '#C8A464' : '#B28C4A';

  return (
    <div className="flex items-center justify-center gap-4 my-2" aria-hidden="true">
      <span className={`h-px w-16 sm:w-24 ${lineColor}`} />
      <svg
        width="28"
        height="20"
        viewBox="0 0 36 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-85 shrink-0"
      >
        <path
          d="M18 23C18 14.5 19.5 6.5 24.5 2C24 9.5 22 16 18 23Z"
          stroke={strokeColor}
          strokeWidth="1.25"
        />
        <path
          d="M16.5 23.5C11.5 18 6.5 13.5 2.5 11.5C7.5 12 13 15.5 16.5 23.5Z"
          stroke={strokeColor}
          strokeWidth="1.25"
        />
        <path
          d="M19.5 23.5C23.5 18.5 29 14.5 33.5 13C28 16.5 24 19.5 19.5 23.5Z"
          stroke={strokeColor}
          strokeWidth="1.25"
        />
      </svg>
      <span className={`h-px w-16 sm:w-24 ${lineColor}`} />
    </div>
  );
}

export function BotanicalBranchBackdrop({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M36 300C58 220 96 146 172 46"
        stroke="#B28C4A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M78 214C52 194 42 162 46 132C76 148 92 178 78 214Z"
        stroke="#B28C4A"
        strokeWidth="1.1"
      />
      <path
        d="M114 156C146 154 176 138 198 112C168 102 136 118 114 156Z"
        stroke="#B28C4A"
        strokeWidth="1.1"
      />
      <path
        d="M100 176C72 152 64 118 72 86C104 106 116 140 100 176Z"
        stroke="#B28C4A"
        strokeWidth="1.1"
      />
      <path
        d="M148 102C182 102 212 88 232 62C202 52 170 68 148 102Z"
        stroke="#B28C4A"
        strokeWidth="1.1"
      />
      <path
        d="M172 46C174 28 188 14 206 10C202 28 190 42 172 46Z"
        stroke="#B28C4A"
        strokeWidth="1.1"
      />
    </svg>
  );
}
