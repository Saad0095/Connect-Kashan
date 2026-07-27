"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { COLLAB_PACKAGES } from "@/lib/data/packages";
import { Check, ArrowRight } from "lucide-react";

interface CollabPackagesProps {
  onOpenMediaKit: () => void;
}

export function CollabPackages({ onOpenMediaKit }: CollabPackagesProps) {
  const packagesToShow = COLLAB_PACKAGES.slice(0, 3);

  return (
    <section id="pricing" className="min-h-[85vh] py-36 sm:py-44 flex items-center bg-surface-base border-b border-border-strong/40">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-sm font-mono text-text-tertiary bg-surface-strong px-4 py-1.5 rounded-full border border-border-strong uppercase font-bold">
            Work With Kashan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Collaboration Packages
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Choose the format that fits your brand goals. All packages include custom script co-approval and performance reporting.
          </p>
        </div>

        {/* 3 Tier Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
        >
          {packagesToShow.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              className={`relative bg-surface-muted border ${
                pkg.popular
                  ? "border-text-tertiary shadow-glow"
                  : "border-border-strong hover:border-text-tertiary/50"
              } rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-10 transition-all group`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-text-tertiary text-surface-base font-mono text-xs font-bold uppercase px-4 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6 pt-2">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-text-tertiary transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary mt-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="p-5 bg-surface-strong rounded-xs border border-border-strong/70 space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary font-mono">Format</span>
                    <span className="font-bold text-text-tertiary">{pkg.format}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border-strong/60">
                    <span className="text-text-secondary font-mono">Rate</span>
                    <span className="font-extrabold text-text-primary text-lg">{pkg.price}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider block font-bold">
                    Deliverables:
                  </span>
                  <ul className="space-y-3 text-sm sm:text-base text-text-primary">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-text-tertiary flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border-strong/60 space-y-2">
                <button
                  onClick={onOpenMediaKit}
                  className={`w-full py-4 px-6 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? "bg-text-tertiary text-surface-base hover:bg-[#ff9d5c] shadow-glow"
                      : "bg-surface-strong text-text-primary border border-border-strong hover:border-text-tertiary"
                  }`}
                >
                  <span>Inquire for {pkg.name}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
