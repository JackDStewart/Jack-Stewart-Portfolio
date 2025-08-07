"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LogoHexMonogram } from "./logo-hex-monogram";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--primary)]/10
                 bg-[var(--bg)]/80 backdrop-blur-md"
    >
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <LogoHexMonogram size={28} />
          <span className="text-xl font-bold text-[var(--text)]">
            Jack Stewart
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex items-center space-x-6" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors
                              hover:text-[var(--primary)]
                              focus-visible:outline-none
                              focus-visible:ring-2 focus-visible:ring-[var(--primary)]
                              focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]
                              rounded-md ${
                                pathname === item.href
                                  ? "text-[var(--primary)]"
                                  : "text-[var(--text)]/70"
                              }`}
                  role="menuitem"
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-[var(--primary)]"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
