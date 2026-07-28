import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Pencil, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: string | number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Work With Kashan",
    title = "Collaboration Packages",
    description = "Choose the format that fits your brand goals. All packages include custom script co-approval.",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-20 bg-surface-base">
            <div className="text-center space-y-6 mb-16">
                <div className="font-mono font-bold text-xl text-text-tertiary rotate-[-1deg] uppercase tracking-wider">
                    {tag}
                </div>
                <div className="relative inline-block z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary rotate-[-1deg] tracking-tight relative z-10">
                        {title}
                        <div className="absolute -right-12 top-0 text-[#33e1ff] rotate-12 -z-10 opacity-70">
                            ✨
                        </div>
                        <div className="absolute -left-8 bottom-0 text-text-tertiary -rotate-12 -z-10 opacity-70">
                            ⭐️
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-3 bg-text-tertiary/20 
                        rotate-[-1deg] rounded-full blur-sm"
                    />
                </div>
                <p className="text-xl text-text-secondary rotate-[-1deg] max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-surface-muted",
                                "border-2 border-border-strong",
                                "rounded-sm shadow-[4px_4px_0px_0px] shadow-border-strong",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]",
                                tier.popular && "border-text-tertiary shadow-text-tertiary"
                            )}
                        />

                        <div className="relative p-8">
                            {tier.popular && (
                                <div
                                    className="absolute -top-3 -right-3 bg-text-tertiary text-surface-base 
                                    font-bold px-4 py-1.5 rounded-full rotate-12 text-sm border-2 border-border-strong shadow-sm"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className={cn(
                                        "w-14 h-14 rounded-full mb-5",
                                        "flex items-center justify-center",
                                        "border-2 border-border-strong bg-surface-base text-text-primary",
                                        tier.popular && "text-text-tertiary border-text-tertiary"
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="font-bold text-2xl text-text-primary mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-text-secondary">
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-3xl font-extrabold text-text-primary">
                                    {tier.price}
                                </span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="w-5 h-5 rounded-full border border-border-strong 
                                            bg-surface-strong flex items-center justify-center shrink-0"
                                        >
                                            <Check className="w-3 h-3 text-text-primary" />
                                        </div>
                                        <span className="text-base font-medium text-text-primary">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-14 font-bold text-lg relative rounded-full",
                                    "border-2 border-border-strong",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-border-strong",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? "bg-text-tertiary text-surface-base hover:bg-[#33e1ff] border-transparent"
                                        : "bg-surface-base text-text-primary hover:bg-surface-strong"
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-40 left-20 text-6xl rotate-12 drop-shadow-md">
                    ✎
                </div>
                <div className="absolute bottom-40 right-20 text-6xl -rotate-12 drop-shadow-md">
                    ✏️
                </div>
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier };
