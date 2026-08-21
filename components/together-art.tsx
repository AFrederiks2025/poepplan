import Image from "next/image";

export function TogetherArt({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/cartoon-trap.png"
      alt="ouder en kind samen bij de trap"
      width={1040}
      height={1240}
      sizes="(min-width: 1024px) 40vw, 92vw"
      className={`mx-auto h-auto w-full max-w-md lg:max-w-none ${className}`}
    />
  );
}
