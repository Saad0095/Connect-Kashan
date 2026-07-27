"use client";

import React, { useState } from "react";
import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { HookNarrative } from "@/components/sections/hook-narrative";
import { RealVideoShowcase } from "@/components/sections/real-video-showcase";
import { BrandTrustStrip } from "@/components/sections/brand-trust-strip";
import { CollabPackages } from "@/components/sections/collab-packages";
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
      {/* Luxury Animated Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Luxury Interactive Trailing Cursor */}
      <AnimatedCursor />

      {/* Ambient Floating Particle Orbs */}
      <FloatingOrbs />

      {/* 1. Minimal Navigation */}
      <SiteNav onOpenMediaKit={handleOpenMediaKit} />

      {/* 2. Hero with Kashan's Real Image */}
      <Hero onOpenMediaKit={handleOpenMediaKit} />

      {/* 3. Pure Typography Hook */}
      <HookNarrative />

      {/* 4. Real Instagram Reels & YouTube Video Showcase */}
      <RealVideoShowcase />

      {/* 5. Sleek Brand Trust Strip */}
      <BrandTrustStrip />

      {/* 6. Collaboration Packages */}
      <CollabPackages onOpenMediaKit={handleOpenMediaKit} />

      {/* 7. Final Closing Banner */}
      <FinalCta onOpenMediaKit={handleOpenMediaKit} />

      {/* 8. Footer */}
      <SiteFooter onOpenMediaKit={handleOpenMediaKit} />

      {/* Media Kit Lead Modal */}
      <MediaKitDialog isOpen={isMediaKitOpen} onClose={handleCloseMediaKit} />
    </main>
  );
}
