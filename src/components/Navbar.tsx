"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md py-1 font-semibold tracking-tight text-zinc-950 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20 dark:text-zinc-50 dark:focus-visible:ring-white/20"
        >
          <span className="grid size-8 place-items-center rounded-full bg-zinc-950 text-white dark:bg-white dark:text-black">
            PH
          </span>
          <span className="hidden sm:inline">ProofOfHeart</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-black/5 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-white/20"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-10 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/30 dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:ring-white/30 md:inline-flex"
          >
            Connect Wallet
          </button>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-black/10 bg-white text-zinc-950 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-white/20 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-black/5 dark:border-white/10 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-black/5 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-white/20"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="h-10 w-full rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/30 dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:ring-white/30"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

