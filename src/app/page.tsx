import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Community-validated causes, on-chain.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            ProofOfHeart is a decentralized launchpad where people discover, validate, and fund
            meaningful causes through transparent, community-driven governance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/explore"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Explore Causes
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-black dark:text-zinc-50 dark:hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
          <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
            What is ProofOfHeart?
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Community validation for proposals</li>
            <li>Transparent governance and activity</li>
            <li>Permissionless participation for everyone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
