"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { ShieldCheck, Flame, Clock } from "lucide-react";

const VALUE_PROPS = [
  {
    number: "01",
    title: "The audience trusts the recommendation, not just the reach.",
    description: "Followers don't see a corporate sponsor — they see Kashan sharing a genuinely useful product he uses in real life.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Content feels native, so it doesn't get skipped.",
    description: "Integrations match the exact comedic pacing and daily-life storytelling of his top organic reels. Zero awkward ad reads.",
    icon: Flame,
  },
  {
    number: "03",
    title: "Reliable turnaround, no drama.",
    description: "Professional script approval, punctual asset delivery, and detailed post-campaign performance reporting for your media team.",
    icon: Clock,
  },
];

export function ValueProps() {
  return (
    <section id="why-kashan" className="py-24 bg-surface-muted/40 border-b border-border-strong/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-mono text-text-tertiary bg-surface-strong px-3 py-1 rounded-xs border border-border-strong uppercase">
            The Creator Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Why work with Kashan
          </h2>
          <p className="text-text-secondary text-base max-w-md">
            Three simple reasons why brand managers re-book campaigns with Connect Kashan.
          </p>
        </div>

        {/* 3-Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VALUE_PROPS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="bg-surface-base border border-border-strong hover:border-text-tertiary/60 rounded-sm p-8 flex flex-col justify-between space-y-6 transition-all duration-slow hover:shadow-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-bold text-text-tertiary">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xs bg-surface-strong border border-border-strong flex items-center justify-center text-text-tertiary group-hover:border-text-tertiary transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-text-tertiary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-strong/60 flex items-center gap-2 text-xs font-mono text-text-tertiary">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary" />
                  <span>Verified Creator Standard</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
