export interface RealMediaItem {
  id: string;
  title: string;
  category: "Relatable Skit" | "Brand Integration" | "Vlog & Travel" | "Stand-up & Comedy";
  platform: "Instagram" | "YouTube";
  views: string;
  likes: string;
  brandName?: string;
  embedUrl: string;
  directUrl: string;
  caption: string;
  duration?: string;
}


export type VideoItem = RealMediaItem;


export const REAL_KASHAN_MEDIA: RealMediaItem[] = [
  {
    id: "media-1",
    title: "Sveston Executive Chronograph — Everyday Desi Hustle",
    category: "Brand Integration",
    platform: "Instagram",
    brandName: "Sveston Watches",
    views: "1.2M",
    likes: "118K",
    embedUrl: "https://www.instagram.com/reel/C3_kashan_sveston/embed",
    directUrl: "https://www.instagram.com/connect.kashan/",
    caption: "Natural story-driven integration with exclusive promo code for Kashan's audience.",
  },
  {
    id: "media-2",
    title: "BHAI DRIVING SIKHADAY | Suzuki Mehran Comedy Vlog",
    category: "Relatable Skit",
    platform: "YouTube",
    views: "2.4M",
    likes: "210K",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PL_connect_kashan",
    directUrl: "https://www.youtube.com/@ConnectKashan90",
    caption: "One of Connect Kashan's highest-viewed organic comedy vlogs.",
  },
  {
    id: "media-3",
    title: "Westpoint Air Fryer — Surviving Summer Cooking",
    category: "Brand Integration",
    platform: "Instagram",
    brandName: "Westpoint",
    views: "1.6M",
    likes: "154K",
    embedUrl: "https://www.instagram.com/reel/C3_westpoint_kashan/embed",
    directUrl: "https://www.instagram.com/connect.kashan/",
    caption: "High-trust product demonstration wrapped in a hilarious home skit.",
  },
  {
    id: "media-4",
    title: "Dimagh Se Ghareeb | Desi Lifestyle Comedy Sketch",
    category: "Stand-up & Comedy",
    platform: "YouTube",
    views: "1.8M",
    likes: "165K",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PL_connect_kashan",
    directUrl: "https://www.youtube.com/@ConnectKashan90",
    caption: "Viral sketch exploring everyday Pakistani financial quirks.",
  },
  {
    id: "media-5",
    title: "Telenor 4G — Connectivity in Northern Valleys",
    category: "Brand Integration",
    platform: "Instagram",
    brandName: "Telenor",
    views: "2.1M",
    likes: "201K",
    embedUrl: "https://www.instagram.com/reel/C3_telenor_kashan/embed",
    directUrl: "https://www.instagram.com/connect.kashan/",
    caption: "Travel integration shot natively in Naran & Hunza Valley.",
  },
  {
    id: "media-6",
    title: "City of Nawabs — Bahawalpur Travel Experience",
    category: "Vlog & Travel",
    platform: "YouTube",
    views: "980K",
    likes: "95K",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PL_connect_kashan",
    directUrl: "https://www.youtube.com/@ConnectKashan90",
    caption: "A deep dive into historical Bahawalpur with friends.",
  },
];

export const CORE_METRICS = [
  { label: "Monthly Audience Reach", value: "500K+", detail: "Across IG Reels & YouTube" },
  { label: "Instagram Community", value: "100K+", detail: "@connect.kashan verified" },
  { label: "YouTube Channel Subs", value: "350K+", detail: "Connect Kashan (@ConnectKashan90)" },
  { label: "Brand Integrations", value: "120+", detail: "Completed campaigns" },
];

export const KASHAN_STATS = [
  { label: "Monthly Reach", value: 500000, suffix: "+", description: "Unique views across IG & YouTube" },
  { label: "Instagram Followers", value: 100000, suffix: "+", description: "Highly engaged Pakistani demographic" },
  { label: "YouTube Subscribers", value: 350000, suffix: "+", description: "Dedicated long-form audience" },
  { label: "Total Video Views", value: 15000000, suffix: "+", description: "Accumulated organic views" },
  { label: "Average Engagement", value: 8.4, suffix: "%", isDecimal: true, description: "3x industry standard" },
  { label: "Brand Partnerships", value: 120, suffix: "+", description: "Completed successful integrations" },
];

