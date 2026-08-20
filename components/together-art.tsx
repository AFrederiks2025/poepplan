export function TogetherArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Ouder en kind zitten samen op een heuvel, kijkend naar een zacht landschap"
    >
      <rect width="520" height="300" rx="28" fill="#F3E6D3" />
      <circle cx="420" cy="62" r="30" fill="#F0C4A8" />
      <path
        d="M0 176c64-36 128-48 196-22 62 24 98 58 168 50 56-6 96-34 156-52v148H0V176Z"
        fill="#E7D4B8"
      />
      <path
        d="M0 214c72-22 138-16 204 10 54 22 102 14 164-6 62-20 104-12 152 8v74H0V214Z"
        fill="#D9C3A4"
      />
      <path
        d="M36 228c46-38 98-58 156-48 58 10 92 42 154 36 48-4 84-28 138-46"
        stroke="#C15F3C"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.85"
      />
      <ellipse cx="118" cy="208" rx="18" ry="9" fill="#3D5A3B" />
      <ellipse cx="214" cy="188" rx="20" ry="9" fill="#C9924A" />
      <g transform="translate(198 118)">
        <ellipse cx="72" cy="108" rx="64" ry="11" fill="#D2BEA0" />
        <circle cx="52" cy="36" r="15" fill="#F4D3B4" />
        <path
          d="M36 56c2-14 12-22 22-22s18 8 20 22c7 18-4 40-20 42-18 2-28-20-22-42Z"
          fill="#3D5A3B"
        />
        <path d="M44 96c3 14 6 22 6 28" stroke="#3D4A40" strokeWidth="5" strokeLinecap="round" />
        <path d="M58 98c2 12 4 20 5 26" stroke="#3D4A40" strokeWidth="5" strokeLinecap="round" />
        <circle cx="98" cy="50" r="11" fill="#F4D3B4" />
        <path
          d="M88 66c2-11 9-16 16-16s13 5 15 16c5 13-2 28-14 30-14 2-21-14-17-30Z"
          fill="#C9924A"
        />
        <path d="M94 94c1 10 3 16 3 21" stroke="#3D4A40" strokeWidth="4" strokeLinecap="round" />
        <path d="M104 94c1 10 2 16 3 21" stroke="#3D4A40" strokeWidth="4" strokeLinecap="round" />
        <path d="M66 62c10 5 18 5 28 1" stroke="#9D4A2C" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
