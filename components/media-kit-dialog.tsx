"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Download, CheckCircle2, FileText } from "lucide-react";

interface MediaKitDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MediaKitDialog({ isOpen, onClose }: MediaKitDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "PKR 100k - 250k",
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const dummyPdfContent = `Kashan (@connect.kashan) Official Media Kit 2026\nAudience: 500K+ Monthly Reach\nDemographic: 18-34 Pakistan Youth\nContact: m.moid90@gmail.com`;
    const blob = new Blob([dummyPdfContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Kashan_Official_Media_Kit.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-fast"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-kit-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-surface-muted border border-border-strong rounded-sm p-8 shadow-1 space-y-6 text-text-primary animate-in zoom-in-95 duration-fast"
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-text-secondary hover:text-text-primary rounded-lg bg-surface-strong border border-border-strong transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-text-tertiary/15 text-text-tertiary font-mono text-xs border border-text-tertiary/30 font-semibold">
                <FileText className="w-4 h-4" />
                <span>Instant PDF Download</span>
              </div>
              <h2 id="media-kit-title" className="text-2xl font-bold tracking-tight">
                Download Kashan Media Kit
              </h2>
              <p className="text-sm text-text-secondary">
                Get full access to audience demographics, engagement benchmarks, past campaign case studies, and updated rate cards for @connect.kashan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-text-secondary mb-1.5 font-bold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary mb-1.5 font-bold">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ali@yourbrand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary mb-1.5 font-bold">
                  Brand / Agency Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sveston / Ogilvy"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary mb-1.5 font-bold">
                  Estimated Campaign Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-surface-base border border-border-strong focus:border-text-tertiary rounded-xs px-4 py-3 text-sm text-text-primary outline-none transition-colors"
                >
                  <option value="PKR 100k - 250k">PKR 100k - 250k</option>
                  <option value="PKR 250k - 500k">PKR 250k - 500k</option>
                  <option value="PKR 500k+">PKR 500k+</option>
                  <option value="Exploring Options">Just Exploring</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-text-tertiary hover:bg-[#33e1ff] text-surface-base font-bold text-sm py-4 rounded-full shadow-glow transition-all flex items-center justify-center gap-2 active:scale-95 mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Media Kit PDF</span>
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary">
              Media Kit Downloaded!
            </h3>
            <p className="text-sm text-text-secondary max-w-xs mx-auto">
              Thank you {formData.name}. The media kit has been saved to your downloads folder. Kashan&apos;s team will reach out to {formData.email}.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="bg-surface-strong border border-border-strong text-text-primary text-sm font-semibold px-6 py-3 rounded-full hover:border-text-tertiary transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
