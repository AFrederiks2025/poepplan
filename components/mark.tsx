export function Mark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#E7D4B8" />
      <path
        d="M9 27c4.2-1.6 7.2-6.2 10.8-8.4 3.3-2 6.7-1.4 11.2.8"
        stroke="#C15F3C"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="12.2" cy="25.6" r="2.4" fill="#5F7D5B" />
      <circle cx="20.4" cy="18.6" r="2.6" fill="#C15F3C" />
      <circle cx="29.6" cy="19.8" r="2.2" fill="#C9924A" />
    </svg>
  );
}
