"use client";

import React from "react";
import { BRAND_LOGOS } from "@/lib/data/brands";
import { ShieldCheck } from "lucide-react";

export function BrandTrustStrip() {
  return (
    <section id="brands" className="py-28 sm:py-36 bg-surface-muted/40 border-b border-border-strong/40">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        
        {/* Minimal Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-text-tertiary bg-surface-base px-4 py-1.5 rounded-full border border-border-strong font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Trusted by Pakistan&apos;s top consumer brands
          </h2>
        </div>

        {/* Clean Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center pt-2">
          {BRAND_LOGOS.map((brand, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-surface-base/80 border border-border-strong/80 hover:border-text-tertiary/60 transition-colors flex flex-col items-center justify-center space-y-2.5 group"
            >
              <div className="w-10 h-10 rounded-full bg-surface-strong text-text-tertiary font-bold text-base flex items-center justify-center group-hover:border-text-tertiary transition-colors">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="text-xs sm:text-sm font-bold text-text-primary group-hover:text-text-tertiary transition-colors truncate w-full text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base text-text-secondary font-mono pt-4">
          120+ successful integrations • Custom native scripting • Verified performance tracking
        </p>

      </div>
    </section>
  );
}
