"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, CheckCircle2, Award } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

interface HeroProps {
  onOpenMediaKit: () => void;
}

export function Hero({ onOpenMediaKit }: HeroProps) {
  // High-definition image source fallback to ensure razor-sharp rendering on all screens
  const [imgSrc, setImgSrc] = useState("/images/kashan-real.jpg");

  return (
    <section id="top" className="relative min-h-[92vh] sm:min-h-screen pt-36 pb-28 sm:py-44 flex items-center justify-center bg-surface-base border-b border-border-strong/40 overflow-hidden">

      {/* Dynamic Glow Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-text-tertiary/12 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Plain-spoken, honest headline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-8"
          >
            {/* Identity Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-strong/90 border border-border-strong text-sm text-text-secondary font-mono shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-text-tertiary animate-pulse" />
              <span className="text-text-primary font-bold">Kashan</span>
              <span className="text-border-strong">•</span>
              <span className="text-text-tertiary">@connect.kashan</span>
            </motion.div>

            {/* Core Identity Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1]"
            >
              Not a star. Just an ordinary guy —{" "}
              <span className="text-gradient-accent">with a following that shows up.</span>
            </motion.h1>

            {/* Plain Subhead */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-text-secondary font-normal max-w-2xl leading-relaxed"
            >
              500K+ people watch Kashan&apos;s posts every month — and most of them actually stick around for the brand recommendations. No scripted ad reads, just honest daily life.
            </motion.p>

            {/* Metrics Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-sm sm:text-sm text-text-secondary font-mono pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-text-tertiary" />
                <span className="text-text-primary font-bold">100K+ IG Followers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-text-tertiary" />
                <span className="text-text-primary font-bold">350K+ YouTube Subs</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#pricing"
                className="bg-text-tertiary hover:bg-[#33e1ff] text-surface-base font-bold text-base px-9 py-4 rounded-full transition-all shadow-glow hover:shadow-1 flex items-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <span>Book a collab</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#work"
                className="text-text-primary hover:text-text-tertiary border border-border-strong hover:border-text-tertiary/50 bg-surface-muted/80 text-base font-semibold px-8 py-4 rounded-full transition-all flex items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <Play className="w-4 h-4 text-text-tertiary fill-text-tertiary" />
                <span>Watch real reels</span>
              </a>

              <button
                onClick={onOpenMediaKit}
                className="text-sm font-semibold text-text-secondary hover:text-text-primary underline underline-offset-4 decoration-border-strong hover:decoration-text-tertiary transition-colors ml-auto sm:ml-4 py-2 cursor-pointer"
              >
                Get Media Kit (PDF) →
              </button>
            </motion.div>

            {/* Quote Footnote */}
            <motion.p variants={fadeUp} className="text-sm sm:text-base italic text-text-secondary pt-4 border-t border-border-strong/40">
              &ldquo;I&apos;m not a star. Stars fall. I&apos;m an ordinary guy with an extraordinary job.&rdquo; — Kashan
            </motion.p>
          </motion.div>

          {/* Right Column: Crisp High-Resolution Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">

              {/* Outer Glowing Border Frame */}
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-text-tertiary/40 via-border-strong to-text-tertiary/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Main Card */}
              <div className="relative rounded-sm bg-surface-strong border border-border-strong p-4 shadow-1 overflow-hidden group">

                {/* Kashan High-Resolution Portrait Container */}
                <div className="relative aspect-[4/5] rounded-xs overflow-hidden bg-surface-base border border-border-strong/80 shadow-2xl">
                  <Image
                    src={imgSrc}
                    alt="Kashan (@connect.kashan) Official Photograph"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                    unoptimized
                    onError={() => {
                      // Fallback to the previous image if the real one isn't placed yet
                      setImgSrc("/images/kashan-hero2.png");
                    }}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 contrast-[1.04] brightness-[1.02] filter drop-shadow-md"
                  />

                  {/* Elegant Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-black/20 pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-surface-base/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border-strong text-xs font-mono text-text-primary flex items-center gap-2 shadow-md">
                    <Award className="w-4 h-4 text-text-tertiary" />
                    <span className="font-bold">Kashan</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  {/* <div className="absolute bottom-5 left-5 right-5 z-10 space-y-2">
                    <span className="inline-block bg-text-tertiary/20 backdrop-blur-md border border-text-tertiary/50 px-3 py-1 rounded text-xs text-text-tertiary font-mono font-bold">
                      Verified Creator
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary leading-tight drop-shadow-md">
                      Kashan (@connect.kashan)
                    </h3>
                  </div> */}
                </div>

                {/* Card Footer Info */}
                <div className="mt-4 px-2 flex items-center justify-between text-xs sm:text-sm font-mono text-text-secondary">
                  <span className="text-text-primary font-bold">Pakistani Content Creator</span>
                  <a
                    href="https://www.instagram.com/connect.kashan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:underline font-bold flex items-center gap-1"
                  >
                    <span>@connect.kashan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
