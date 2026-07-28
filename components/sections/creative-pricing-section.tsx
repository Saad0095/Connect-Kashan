import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";
import { COLLAB_PACKAGES } from "@/lib/data/packages";
import { Video, Film, Smartphone, Presentation } from "lucide-react";

export function CreativePricingSection() {
    // Map Kashan's actual data into the structure the 21st dev component expects
    const tiers: PricingTier[] = COLLAB_PACKAGES.slice(0, 3).map((pkg, index) => {
        
        let icon;
        let color = "amber";
        if (index === 0) {
            icon = <Smartphone className="w-6 h-6" />;
            color = "amber";
        } else if (index === 1) {
            icon = <Film className="w-6 h-6" />;
            color = "blue";
        } else {
            icon = <Video className="w-6 h-6" />;
            color = "purple";
        }

        return {
            name: pkg.name,
            icon,
            price: pkg.price,
            description: pkg.tagline,
            color,
            popular: pkg.popular,
            features: pkg.deliverables
        };
    });

    return (
        <CreativePricing 
            tag="Work With Kashan"
            title="Collaboration Packages"
            description="Choose the format that fits your brand goals. All packages include custom script co-approval and performance reporting."
            tiers={tiers} 
        />
    );
}
