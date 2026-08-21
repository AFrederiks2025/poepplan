import Image from "next/image";

export function HeroArt() {
  return (
    <Image
      src="/brand/cartoon-pad.png"
      alt="ouder en kind op een pad"
      width={980}
      height={830}
      sizes="(min-width: 1024px) 40vw, 92vw"
      className="h-auto w-full"
      preload
    />
  );
}
