"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";

interface SiteNavProps {
  onOpenMediaKit: () => void;
}

export function SiteNav({ onOpenMediaKit }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-slow ${
        scrolled
          ? "bg-surface-base/90 backdrop-blur-lg border-b border-border-strong/50 py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-surface-strong border border-border-strong flex items-center justify-center text-text-tertiary font-bold text-sm group-hover:border-text-tertiary transition-colors">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-text-primary text-base sm:text-lg group-hover:text-text-tertiary transition-colors leading-tight">
              Kashan
            </span>
            <span className="text-xs text-text-secondary font-mono">
              @connect.kashan
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="#work" className="hover:text-text-primary transition-colors text-base">
            Selected Work
          </Link>
          <button onClick={onOpenMediaKit} className="hover:text-text-primary transition-colors text-base">
            Media Kit
          </button>
          <Link href="#brands" className="hover:text-text-primary transition-colors text-base">
            Brand Partners
          </Link>
          <Link href="#pricing" className="hover:text-text-primary transition-colors text-base">
            Packages
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={onOpenMediaKit}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-text-tertiary" />
            Media Kit (PDF)
          </button>
          <a
            href="#pricing"
            className="bg-text-tertiary hover:bg-[#33e1ff] text-surface-base font-bold text-sm px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-glow hover:shadow-1 active:scale-95"
          >
            <span>Book a collab</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-base/95 backdrop-blur-xl border-b border-border-strong px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-base text-text-secondary font-medium">
            <Link href="#work" onClick={() => setMobileMenuOpen(false)}>Selected Work</Link>
            <button onClick={() => { setMobileMenuOpen(false); onOpenMediaKit(); }} className="text-left">
              Media Kit (PDF)
            </button>
            <Link href="#brands" onClick={() => setMobileMenuOpen(false)}>Brand Partners</Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Packages & Rates</Link>
          </nav>
          <div className="pt-4 border-t border-border-strong flex flex-col gap-3">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-text-tertiary text-surface-base text-sm font-bold py-3.5 rounded-full text-center"
            >
              Book a Collab
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
