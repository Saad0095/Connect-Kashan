"use client";

import React, { useState } from "react";
import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { HookNarrative } from "@/components/sections/hook-narrative";
import { ContentPillarsLoop } from "@/components/sections/content-pillars-loop";
import { FounderBio } from "@/components/sections/founder-bio";
import { RealVideoShowcase } from "@/components/sections/real-video-showcase";
import { StatsBar } from "@/components/sections/stats-bar";
import { BrandTrustStrip } from "@/components/sections/brand-trust-strip";
import { PressMarquee } from "@/components/sections/press-marquee";
import { Testimonials } from "@/components/sections/testimonials";
import { ValueProps } from "@/components/sections/value-props";
import { CreativePricingSection } from "@/components/sections/creative-pricing-section";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";
import { MediaKitDialog } from "@/components/media-kit-dialog";
import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

export default function Home() {
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);

  const handleOpenMediaKit = () => setIsMediaKitOpen(true);
  const handleCloseMediaKit = () => setIsMediaKitOpen(false);

  return (
    <main className="min-h-screen bg-surface-base text-text-primary overflow-x-hidden relative selection:bg-text-tertiary selection:text-surface-base">
      {/* Top Scroll Progress Glow */}
      <ScrollProgress />

      {/* Luxury Interactive Trailing Cursor */}
      <AnimatedCursor />

      {/* Background Orbs */}
      <FloatingOrbs />

      {/* 1. Header Navigation */}
      <SiteNav onOpenMediaKit={handleOpenMediaKit} />

      {/* 2. Hero with Crisp HD Kashan Photo */}
      <Hero onOpenMediaKit={handleOpenMediaKit} />

      {/* 3. Pure Typography Philosophy Hook */}
      <HookNarrative />

      {/* 4. Content Pillars Loop Diagram */}
      <ContentPillarsLoop />

      {/* 5. Meet Kashan Bio Strip */}
      <FounderBio />

      {/* 6. Real Reels & YouTube Video Showcase */}
      <RealVideoShowcase />

      {/* 7. By The Numbers Stats Bar */}
      <StatsBar />

      {/* 8. Real Brand SVG Logos */}
      <BrandTrustStrip />

      {/* 9. Press & Media Appearances */}
      <PressMarquee />

      {/* 10. Brand Manager Reviews */}
      <Testimonials />

      {/* 11. Why Work With Kashan */}
      <ValueProps />

      {/* 12. Sponsorship Packages & Pricing Tiers */}
      <CreativePricingSection />

      {/* 13. Final CTA Banner */}
      <FinalCta onOpenMediaKit={handleOpenMediaKit} />

      {/* 14. Footer */}
      <SiteFooter onOpenMediaKit={handleOpenMediaKit} />

      {/* Media Kit Lead Modal */}
      <MediaKitDialog isOpen={isMediaKitOpen} onClose={handleCloseMediaKit} />
    </main>
  );
}
