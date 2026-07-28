"use client";

import React from "react";
import { Newspaper, ExternalLink } from "lucide-react";

const PRESS_ITEMS = [
  { outlet: "MangoBaaz", title: "Top Pakistani Digital Creators to Watch", type: "Feature" },
  { outlet: "ProPakistani", title: "How Kashan Built @connect.kashan", type: "Interview" },
  { outlet: "The Idiotz Podcast", title: "Ep 42: Sketch Comedy to Vlogging", type: "Podcast" },
  { outlet: "NUST Karachi", title: "Speaker: Digital Content & Monetization", type: "Keynote" },
];

export function PressMarquee() {
  return (
    <section className="py-20 bg-surface-muted/30 border-b border-border-strong/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <Newspaper className="w-5 h-5 text-text-tertiary" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary font-bold">
            Featured In & Media Appearances
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-base border border-border-strong p-5 rounded-xs hover:border-text-tertiary/60 transition-all flex flex-col justify-between space-y-4 group interactive-hover shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono font-bold text-text-tertiary">
                  {item.outlet}
                </span>
                <span className="text-xs font-mono text-text-secondary bg-surface-strong px-2.5 py-1 rounded border border-border-strong font-semibold">
                  {item.type}
                </span>
              </div>
              <p className="text-sm font-bold text-text-primary group-hover:text-text-tertiary transition-colors leading-snug">
                {item.title}
              </p>
              <div className="pt-2 border-t border-border-strong/40 flex items-center justify-between text-xs font-mono text-text-secondary">
                <span>Media Mention</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-tertiary group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
