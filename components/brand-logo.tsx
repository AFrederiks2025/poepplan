import Image from "next/image";

export function BrandLogo({
  className = "h-12 w-auto sm:h-14",
  preload = false,
}: {
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src="/brand/logo-poepplan.png"
      alt="Poepplan"
      width={215}
      height={222}
      className={className}
      preload={preload}
    />
  );
}
