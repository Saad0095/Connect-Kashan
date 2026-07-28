"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { Users, Instagram, Youtube, Eye, Activity, Handshake } from "lucide-react";
import { KASHAN_STATS } from "@/lib/data/content";

const statIcons = [Users, Instagram, Youtube, Eye, Activity, Handshake];

function CountUp({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    const duration = 1200; // 1200ms count-up for premium feel

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isDecimal
        ? count.toFixed(1)
        : count >= 1000000
        ? (count / 1000000).toFixed(1) + "M"
        : count >= 1000
        ? Math.floor(count / 1000) + "K"
        : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section id="stats" className="relative py-28 bg-surface-base border-b border-border-strong/40 overflow-hidden">
      {/* Premium Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-text-tertiary/10 via-transparent to-text-tertiary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-text-tertiary uppercase tracking-widest bg-surface-strong/50 backdrop-blur-md px-4 py-2 rounded-full border border-text-tertiary/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary animate-pulse" />
            Verified Audience Proof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
            Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33e1ff] to-text-tertiary">By The Numbers</span>
          </h2>
        </div>

        {/* 6-Column Premium Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {KASHAN_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative bg-gradient-to-b from-surface-strong/80 to-surface-base/40 backdrop-blur-xl border border-border-strong/60 hover:border-text-tertiary/40 rounded-xl p-6 text-center flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 group shadow-lg hover:shadow-glow overflow-hidden"
              >
                {/* Hover gradient flare */}
                <div className="absolute -inset-1 bg-gradient-to-b from-text-tertiary/0 to-text-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-surface-muted border border-border-strong flex items-center justify-center text-text-tertiary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-text-secondary group-hover:from-text-tertiary group-hover:to-[#ffdfa0] transition-all duration-500 tracking-tight font-mono block">
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      isDecimal={stat.isDecimal}
                    />
                  </span>
                  
                  <span className="text-sm font-bold text-text-primary block leading-tight">
                    {stat.label}
                  </span>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-border-strong/40">
                  <span className="text-[11px] text-text-secondary leading-snug block">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
