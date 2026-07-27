"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { Quote, Star, TrendingUp } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-base border-b border-border-strong/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-mono text-text-tertiary bg-surface-strong px-3 py-1 rounded-xs border border-border-strong uppercase">
            Brand Partner Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            What brand managers say
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-lg">
            Brands trust Kashan because the content feels real and the ROI shows up in the analytics.
          </p>
        </div>

        {/* Testimonials 3-Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-surface-muted border border-border-strong hover:border-text-tertiary/50 rounded-sm p-6 flex flex-col justify-between space-y-6 transition-all duration-slow hover:shadow-1 group"
            >
              <div className="space-y-4">
                {/* Metric Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 bg-text-tertiary/15 text-text-tertiary border border-text-tertiary/30 px-2.5 py-1 rounded-xs font-mono text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t.metricHighlight}</span>
                </div>

                {/* Quote Text */}
                <p className="text-text-primary text-sm sm:text-base font-normal leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border-strong/60 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-text-tertiary transition-colors">
                    {t.author}
                  </h3>
                  <span className="text-xs text-text-secondary block">
                    {t.role}, <strong className="text-text-primary">{t.company}</strong>
                  </span>
                </div>
                <div className="flex gap-0.5 text-text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-text-tertiary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
