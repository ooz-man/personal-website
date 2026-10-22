
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#1D4D68]">
          CMR Group Portfolio
        </p>

        <h1 className="text-7xl font-bold tracking-tight text-[#1A2B3B] sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-[#1A2B3B] sm:text-3xl">
          This page could not be found.
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
          The page may have moved, the address may be incorrect, or the
          resource may not be available yet.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#1A2B3B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4D68]"
          >
            Return Home
          </Link>

          <Link
            href="/ventures"
            className="rounded-full border border-[#1A2B3B]/20 px-6 py-3 text-sm font-semibold text-[#1A2B3B] transition hover:bg-white"
          >
            Explore Ventures
          </Link>
        </div>
      </div>
    </main>
  );
}
