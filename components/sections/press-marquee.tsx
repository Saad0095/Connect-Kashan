"use client";

import React from "react";
import { Newspaper, Radio, Tv, ExternalLink } from "lucide-react";

const PRESS_ITEMS = [
  { outlet: "MangoBaaz", title: "Top Pakistani Digital Creators to Watch", type: "Feature" },
  { outlet: "ProPakistani", title: "How Muhammad Kashan Built Connect Kashan", type: "Interview" },
  { outlet: "The Idiotz Podcast", title: "Ep 42: Transitioning from Sketch Comedy to Vlogging", type: "Podcast" },
  { outlet: "NUST Karachi", title: "Keynote Speaker: Content Monetization in Pakistan", type: "Keynote" },
  { outlet: "TechJuice", title: "Influencer Marketing ROI in Pakistan", type: "Article" },
];

export function PressMarquee() {
  return (
    <section className="py-12 bg-surface-muted/30 border-b border-border-strong/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Newspaper className="w-4 h-4 text-text-tertiary" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary">
            Featured In & Media Appearances
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRESS_ITEMS.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-base border border-border-strong p-4 rounded-xs hover:border-text-tertiary/40 transition-colors flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-text-tertiary">
                  {item.outlet}
                </span>
                <span className="text-[10px] font-mono text-text-secondary bg-surface-strong px-2 py-0.5 rounded-xs border border-border-strong">
                  {item.type}
                </span>
              </div>
              <p className="text-xs font-medium text-text-primary group-hover:text-text-tertiary transition-colors line-clamp-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
