"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { ArrowUpRight, Mail, Download, Sparkles, Send } from "lucide-react";

interface FinalCtaProps {
  onOpenMediaKit: () => void;
}

export function FinalCta({ onOpenMediaKit }: FinalCtaProps) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <section className="min-h-[70vh] py-28 sm:py-36 flex items-center justify-center bg-surface-muted relative overflow-hidden border-b border-border-strong/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-text-tertiary/15 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text & Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-sm font-mono text-text-tertiary bg-surface-base px-4 py-1.5 rounded-full border border-border-strong font-semibold shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Ready for your next campaign?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
              Let&apos;s build something people actually watch.
            </h2>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              Got a product worth talking about? Drop a message or download the official Kashan media kit to review detailed audience demographics.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenMediaKit}
                className="bg-surface-base hover:bg-surface-muted text-text-primary border border-border-strong hover:border-text-tertiary text-sm sm:text-base font-bold px-6 py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-text-tertiary" />
                <span>Download Media Kit (PDF)</span>
              </button>
            </div>

            <div className="pt-6 border-t border-border-strong/60 flex flex-col gap-3 text-sm text-text-secondary font-mono">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-text-tertiary" />
                Direct Email: <strong className="text-text-primary">m.moid90@gmail.com</strong>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1"></span>
                Response Time: <strong className="text-text-primary">Within 24 hours</strong>
              </span>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="bg-surface-strong/80 border border-border-strong rounded-sm p-8 shadow-1 glass-card"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-text-primary mb-2">Send an inquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-text-secondary">Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-text-secondary">Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-text-secondary">Brand / Agency</label>
                  <input
                    type="text"
                    placeholder="e.g. Sveston Watches"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-text-secondary">Message *</label>
                  <textarea
                    required
                    placeholder="Tell us about your campaign goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-text-tertiary hover:bg-[#ff9d5c] text-surface-base font-bold text-sm sm:text-base py-3.5 rounded-full transition-all shadow-glow flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[350px] text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/40">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Message Sent!</h3>
                <p className="text-sm text-text-secondary">
                  Thanks for reaching out, {formData.name || "there"}. We will get back to you at {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-text-tertiary hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
