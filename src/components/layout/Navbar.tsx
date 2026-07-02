"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-midnight/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="font-display text-xl font-extrabold text-gradient-brand"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={link.children ? "group relative" : undefined}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-fog-400 transition-colors hover:text-fog-100"
              >
                {link.label}
                {link.children ? (
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden
                  />
                ) : null}
              </a>

              {link.children ? (
                <div className="invisible absolute left-1/2 top-full z-10 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-hairline bg-panel-solid p-2 shadow-2xl shadow-black/40">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <span className="block text-sm font-medium text-fog-100">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-fog-400">
                              {child.description}
                            </span>
                          ) : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-fog-100 lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-midnight px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-hairline/60 py-3">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-fog-100"
                >
                  {link.label}
                </a>
                {link.children ? (
                  <ul className="mt-2 flex flex-col gap-2 pl-3">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xs text-fog-400 hover:text-fog-100"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
