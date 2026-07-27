"use client";

import React from "react";
import { Instagram, Youtube, Mail, Download, ArrowUp } from "lucide-react";

interface SiteFooterProps {
  onOpenMediaKit: () => void;
}

export function SiteFooter({ onOpenMediaKit }: SiteFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-base border-t border-border-strong text-text-secondary pt-20 pb-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-border-strong/60">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-strong border border-border-strong flex items-center justify-center text-text-tertiary font-bold text-sm">
                K
              </div>
              <span className="font-bold text-text-primary text-lg">Kashan</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm font-normal">
              Single-scroll personal brand & media kit site for Kashan (Instagram username: @connect.kashan). Relatable Pakistani digital creator engineering high-trust brand integrations.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/connect.kashan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-muted border border-border-strong hover:border-text-tertiary text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
                aria-label="Kashan on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/connectkashan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-muted border border-border-strong hover:border-text-tertiary text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
                aria-label="Kashan on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:m.moid90@gmail.com"
                className="w-10 h-10 rounded-full bg-surface-muted border border-border-strong hover:border-text-tertiary text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
                aria-label="Email Kashan"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Recap Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#work" className="hover:text-text-tertiary transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-text-tertiary transition-colors">
                  Brand Partners
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-text-tertiary transition-colors">
                  Collaboration Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Business Inquiries Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">
              Media Kit & Inquiries
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Are you an agency or brand marketer? Download Kashan&apos;s official Media Kit PDF for detailed audience demographics.
            </p>
            <div>
              <button
                onClick={onOpenMediaKit}
                className="w-full bg-surface-strong hover:bg-surface-muted border border-border-strong hover:border-text-tertiary text-text-primary text-sm font-semibold py-3 px-5 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-text-tertiary" />
                <span>Get Media Kit (PDF)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-mono text-text-secondary">
          <p>© {new Date().getFullYear()} Kashan. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-text-tertiary transition-colors flex items-center gap-1.5 font-semibold group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
