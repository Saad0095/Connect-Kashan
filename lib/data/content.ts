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
    title: "Sveston Watches — Everyday Desi Hustle",
    category: "Brand Integration",
    platform: "Instagram",
    brandName: "Sveston Watches",
    views: "1.2M",
    likes: "118K",
    embedUrl: "https://www.instagram.com/reel/C3_kashan_sveston/embed",
    directUrl: "https://www.instagram.com/connect.kashan/",
    caption: "How a watch fits naturally into everyday Pakistani daily hustle.",
    duration: "0:50",
  },
  {
    id: "media-2",
    title: "BHAI DRIVING SIKHADAY | Mehran Vlog",
    category: "Relatable Skit",
    platform: "YouTube",
    views: "2.4M",
    likes: "210K",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PL_connect_kashan",
    directUrl: "https://www.youtube.com/@ConnectKashan90",
    caption: "One of Kashan's most viral organic comedy vlogs.",
    duration: "12:14",
  },
  {
    id: "media-3",
    title: "Westpoint Air Fryer — Summer Cooking Routine",
    category: "Brand Integration",
    platform: "Instagram",
    brandName: "Westpoint",
    views: "1.6M",
    likes: "154K",
    embedUrl: "https://www.instagram.com/reel/C3_westpoint_kashan/embed",
    directUrl: "https://www.instagram.com/connect.kashan/",
    caption: "Honest product demonstration wrapped in a funny family skit.",
    duration: "0:55",
  },
  {
    id: "media-4",
    title: "Dimagh Se Ghareeb | Desi Comedy Sketch",
    category: "Stand-up & Comedy",
    platform: "YouTube",
    views: "1.8M",
    likes: "165K",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PL_connect_kashan",
    directUrl: "https://www.youtube.com/@ConnectKashan90",
    caption: "Relatable comedy sketch on Pakistani money habits.",
    duration: "8:40",
  },
  {
    id: "media-5",
    title: "Telenor 4G — Connectivity in Northern Pakistan",
    category: "Brand Integration",
    platform: "Instagram",
    brandName: "Telenor",
    views: "2.1M",
    likes: "201K",
    embedUrl: "https://www.instagram.com/reel/C3_telenor_kashan/embed",
    directUrl: "https://www.instagram.com/connect.kashan/",
    caption: "Travel vlog integration shot in Naran & Hunza Valley.",
    duration: "0:45",
  },
  {
    id: "media-6",
    title: "Bahawalpur Vlog — Exploring City of Nawabs",
    category: "Vlog & Travel",
    platform: "YouTube",
    views: "980K",
    likes: "95K",
    embedUrl: "https://www.youtube-nocookie.com/embed/videoseries?list=PL_connect_kashan",
    directUrl: "https://www.youtube.com/@ConnectKashan90",
    caption: "A road trip vlog exploring Bahawalpur with close friends.",
    duration: "14:20",
  },
];

export const KASHAN_STATS = [
  { label: "Monthly Reach", value: 500000, suffix: "+", description: "Unique monthly views across IG & YouTube" },
  { label: "Instagram Followers", value: 100000, suffix: "+", description: "Engaged Pakistani demographic (@connect.kashan)" },
  { label: "YouTube Subscribers", value: 350000, suffix: "+", description: "Dedicated long-form audience" },
  { label: "Total Organic Views", value: 15000000, suffix: "+", description: "Accumulated views across skits & vlogs" },
  { label: "Average Engagement", value: 8.4, suffix: "%", isDecimal: true, description: "3x industry standard" },
  { label: "Brand Partnerships", value: 120, suffix: "+", description: "Successful completed brand deals" },
];

export const CORE_METRICS = [
  { label: "Monthly Audience Reach", value: "500K+", detail: "Across IG Reels & YouTube" },
  { label: "Instagram Community", value: "100K+", detail: "@connect.kashan verified" },
  { label: "YouTube Channel Subs", value: "350K+", detail: "Connect Kashan (@ConnectKashan90)" },
  { label: "Brand Integrations", value: "120+", detail: "Completed campaigns" },
];
