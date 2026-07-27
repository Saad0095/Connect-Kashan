"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { RefreshCw, Smile, Film, Sparkles, MessageCircleHeart } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    title: "Everyday, Relatable Life",
    description: "Capturing authentic Pakistani daily situations — family dynamics, friend groups, market runs, and shared cultural quirks.",
    icon: Smile,
  },
  {
    step: "02",
    title: "Comedy & Skits",
    description: "Fast-paced, humorous reels crafted with sharp dialogue and natural timing that get shared across WhatsApp & Instagram.",
    icon: Film,
  },
  {
    step: "03",
    title: "Honest Brand Integrations",
    description: "Inserting products naturally as solutions inside the storyline — with promo codes, real usage, and zero corporate fluff.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "People Actually Respond",
    description: "High comment velocity, tag-a-friend engagement, direct link clicks, and genuine audience recommendations that convert.",
    icon: MessageCircleHeart,
  },
];

export function ContentPillarsLoop() {
  return (
    <section className="py-24 bg-surface-base border-b border-border-strong/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-text-tertiary bg-surface-strong px-3 py-1 rounded-xs border border-border-strong">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>The Content Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            What I actually post
          </h2>
          <p className="text-text-secondary text-base max-w-xl">
            A simple 4-step loop that keeps hundreds of thousands of viewers coming back every single week.
          </p>
        </div>

        {/* 4-Step Looping Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.step}
                variants={fadeUp}
                className="group relative bg-surface-muted border border-border-strong hover:border-text-tertiary/60 rounded-sm p-6 flex flex-col justify-between transition-all duration-slow hover:shadow-1"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-text-tertiary">
                    {pillar.step}
                  </span>
                  <div className="w-10 h-10 rounded-xs bg-surface-strong border border-border-strong flex items-center justify-center text-text-tertiary group-hover:border-text-tertiary group-hover:bg-text-tertiary/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-text-tertiary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Looping Connector Indicator */}
                <div className="mt-6 pt-4 border-t border-border-strong/60 flex items-center justify-between text-[11px] font-mono text-text-secondary">
                  <span>Loop step {idx + 1} of 4</span>
                  <span className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                    Next →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Loop Summary Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-surface-strong border border-border-strong px-5 py-2.5 rounded-md text-xs font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-text-tertiary" />
            <span>Result: Content that doesn&apos;t get skipped + Brands that get remembered.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
