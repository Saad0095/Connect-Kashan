"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { KASHAN_STATS } from "@/lib/data/content";

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
    const duration = 800; // 800ms count-up

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
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
    <section id="stats" className="py-20 bg-surface-muted border-b border-border-strong/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider bg-surface-strong px-3 py-1 rounded-xs border border-border-strong">
            Verified Audience Proof
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
            By the numbers
          </h2>
        </div>

        {/* 6-Column Responsive Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {KASHAN_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-surface-base border border-border-strong hover:border-text-tertiary/50 rounded-sm p-5 text-center flex flex-col justify-between transition-all duration-slow hover:shadow-glow group"
            >
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-text-primary group-hover:text-text-tertiary transition-colors tracking-tight font-mono">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </span>
                <span className="text-xs font-semibold text-text-primary block pt-1">
                  {stat.label}
                </span>
              </div>

              <div className="mt-3 pt-2.5 border-t border-border-strong/40">
                <span className="text-[11px] text-text-secondary leading-tight block">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
