export interface CollabPackage {
  id: string;
  badge?: string;
  name: string;
  tagline: string;
  format: string;
  price: string;
  popular?: boolean;
  deliverables: string[];
  idealFor: string;
  turnaroundTime: string;
}

export const COLLAB_PACKAGES: CollabPackage[] = [
  {
    id: "integrated-reel",
    badge: "Most Popular for E-Com",
    name: "Integrated Reel Mention",
    tagline: "Natural, non-scripted product integration inside a high-performing comedy or daily-life reel.",
    format: "Instagram Reel + Stories (60s format)",
    price: "Custom Quote",
    popular: true,
    deliverables: [
      "15-30 sec native story-line integration",
      "Custom discount code / link in bio & story",
      "3x Instagram Story swipe-up amplify posts",
      "Dedicated performance analytics report",
    ],
    idealFor: "E-commerce brands, fashion watches, app downloads, and quick promotional pushes.",
    turnaroundTime: "5 - 7 Business Days",
  },
  {
    id: "dedicated-video",
    name: "Dedicated Skit / Experience Reel",
    tagline: "Full concept reel written around your product's core value prop in Kashan's signature hilarious style.",
    format: "Instagram Reel + YouTube Short",
    price: "Custom Quote",
    deliverables: [
      "100% brand-focused skit / experience narrative",
      "Script & storyboard co-approval before shoot",
      "Cross-posted to IG Reels + YouTube Shorts",
      "Usage rights for brand digital ad campaigns (30 days)",
    ],
    idealFor: "New product launches, QSR food campaigns, major electronics, and app reveals.",
    turnaroundTime: "7 - 10 Business Days",
  },
  {
    id: "multi-platform",
    badge: "Highest Reach & ROI",
    name: "Multi-Platform Campaign",
    tagline: "Omnichannel brand dominance across Instagram, YouTube Vlog, and TikTok.",
    format: "Reel + Long-form Vlog + Shorts + Stories",
    price: "Custom Quote",
    deliverables: [
      "1x Dedicated Instagram Reel",
      "1x 2-minute YouTube Vlog integration",
      "5x Instagram Stories over 14 days",
      "Rights to run creator-sparked ads",
    ],
    idealFor: "Quarterly brand campaigns, telecom networks, automobile & travel brands.",
    turnaroundTime: "12 - 14 Business Days",
  },
  {
    id: "event-appearance",
    name: "Event & On-Ground Activation",
    tagline: "Live hosting, ribbon cutting, or man-on-the-street interviews at your brand store or event.",
    format: "In-Person Event + Live Story Coverage",
    price: "Custom Quote",
    deliverables: [
      "2-4 Hours on-ground presence",
      "Real-time event stories (5-8 updates)",
      "1x Recap reel covering event highlights",
      "Meet & greet with attendees & fans",
    ],
    idealFor: "Store openings, brand expos, college festivals, and product launch events.",
    turnaroundTime: "Requires 14-day advance booking",
  },
];
