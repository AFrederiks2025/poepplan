export function PathDivider() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <svg
        viewBox="0 0 160 28"
        className="h-7 w-40 text-clay"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 18c18-8 32-12 48-9 14 2.5 24 10 40 8 14-1.8 26-9 48-13"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="28" cy="15.2" r="3.2" fill="#3D5A3B" />
        <circle cx="78" cy="16.4" r="3.4" fill="#C15F3C" />
        <circle cx="126" cy="10.6" r="3" fill="#C9924A" />
      </svg>
    </div>
  );
}
