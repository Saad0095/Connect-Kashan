"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { RefreshCw, Smile, Film, Sparkles, MessageCircleHeart } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    title: "Everyday Relatable Life",
    description: "Capturing real Pakistani daily situations — family dynamics, friend groups, market runs, and shared cultural moments.",
    icon: Smile,
  },
  {
    step: "02",
    title: "Comedy & Skits",
    description: "Fast-paced, funny reels crafted with natural dialogue and timing that get shared across WhatsApp & Instagram.",
    icon: Film,
  },
  {
    step: "03",
    title: "Honest Brand Recommendations",
    description: "Inserting products naturally as solutions inside the story — with promo codes, real usage, and zero corporate fluff.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "People Actually Respond",
    description: "High comment velocity, tag-a-friend engagement, direct link clicks, and genuine word-of-mouth recommendations.",
    icon: MessageCircleHeart,
  },
];

export function ContentPillarsLoop() {
  return (
    <section className="py-28 sm:py-36 bg-surface-base border-b border-border-strong/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-text-tertiary bg-surface-strong px-4 py-1.5 rounded-full border border-border-strong font-bold">
            <RefreshCw className="w-4 h-4 animate-spin text-text-tertiary" style={{ animationDuration: "12s" }} />
            <span>How The Content Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            What Kashan actually posts
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl">
            A simple 4-step loop that keeps hundreds of thousands of viewers coming back every single week.
          </p>
        </div>

        {/* 4-Step Looping Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.step}
                variants={fadeUp}
                className="group relative bg-surface-muted border border-border-strong hover:border-text-tertiary/60 rounded-sm p-8 flex flex-col justify-between space-y-6 transition-all duration-slow hover:shadow-1 interactive-hover"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-text-tertiary">
                    {pillar.step}
                  </span>
                  <div className="w-12 h-12 rounded-xs bg-surface-strong border border-border-strong flex items-center justify-center text-text-tertiary group-hover:border-text-tertiary group-hover:bg-text-tertiary/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-text-tertiary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer step indicator */}
                <div className="pt-4 border-t border-border-strong/60 flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>Loop step {idx + 1} of 4</span>
                  <span className="text-text-tertiary font-bold group-hover:translate-x-1 transition-transform">
                    Next →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-surface-strong border border-border-strong px-6 py-3 rounded-full text-xs sm:text-sm font-mono text-text-secondary font-semibold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-text-tertiary" />
            <span>Result: Content people don&apos;t skip + Brands that actually get remembered.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
