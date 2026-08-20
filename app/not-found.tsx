import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-sage uppercase">
        Pagina niet gevonden
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink">
        Deze bladzijde bestaat niet
      </h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">
        Misschien is de link verouderd. Ga terug naar de homepage voor uitleg
        over Poepplan en de wachtlijst.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-clay px-6 py-3 font-semibold text-cream hover:bg-clay-dark"
      >
        Naar poepplan.nl
      </Link>
    </div>
  );
}
