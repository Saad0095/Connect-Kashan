"use client";

import React from "react";
import { BRAND_LOGOS } from "@/lib/data/brands";
import { ShieldCheck, Award } from "lucide-react";

export function LogoMarquee() {
  // Duplicate array once for seamless infinite loop
  const duplicatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section id="brands" className="py-16 bg-surface-base border-b border-border-strong/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-text-tertiary" />
          <h2 className="text-xl font-bold text-text-primary">
            Trusted by Pakistan&apos;s leading consumer brands
          </h2>
        </div>
        <span className="text-xs font-mono text-text-secondary bg-surface-strong px-2.5 py-1 rounded-xs border border-border-strong w-fit">
          120+ Successful Brand Integrations
        </span>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 bg-surface-muted/40 border-y border-border-strong/60">
        {/* Left & Right Gradient Mask Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-surface-base to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-surface-base to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="animate-marquee gap-6 items-center px-4">
          {duplicatedLogos.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-none px-6 py-3.5 bg-surface-strong border border-border-strong hover:border-text-tertiary/60 rounded-xs flex items-center gap-3 transition-colors duration-fast group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-surface-base border border-border-strong flex items-center justify-center text-text-tertiary font-bold text-xs group-hover:border-text-tertiary transition-colors">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-text-primary group-hover:text-text-tertiary transition-colors">
                  {brand.name}
                </span>
                <div className="flex items-center gap-2 text-[11px] text-text-secondary font-mono">
                  <span>{brand.category}</span>
                  <span>•</span>
                  <span className="text-text-tertiary font-semibold">{brand.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Guarantee Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-center">
        <p className="text-xs text-text-secondary text-center font-normal">
          Every brand campaign is custom-scripted, natively shot, and tracked with performance promo codes.
        </p>
      </div>
    </section>
  );
}
