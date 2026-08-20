import type { ReactNode } from "react";
import { waitlistCta } from "@/lib/content";
import { tapTarget } from "@/lib/ui";

export function WaitlistCta({
  className = "",
  children = waitlistCta,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href="/#wachtlijst"
      className={`${tapTarget} bg-clay text-cream shadow-sm transition hover:bg-clay-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay ${className}`}
    >
      {children}
    </a>
  );
}
