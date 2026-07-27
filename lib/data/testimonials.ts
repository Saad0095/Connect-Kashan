export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metricHighlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Kashan doesn't just read a script — he finds the exact funny, relatable angle our customers talk about in real life. Our promo code redemption broke single-day records for our watch line.",
    author: "Zainab Chaudhry",
    role: "Head of Digital Marketing",
    company: "Sveston Watches",
    metricHighlight: "+142% Promo Code Conversions",
  },
  {
    id: "test-2",
    quote: "The best part about working with Connect Kashan is zero creator ego and 100% execution discipline. Delivered ahead of schedule, native content quality was insane.",
    author: "Hamza Malik",
    role: "Brand Lead",
    company: "Westpoint Pakistan",
    metricHighlight: "1.6M Organic Reel Views",
  },
  {
    id: "test-3",
    quote: "In a market full of polished influencers reading corporate briefs, Kashan's audience actually trusts his word. When he recommends an app, people download it.",
    author: "Omer Farooq",
    role: "Growth Manager",
    company: "Savyour App",
    metricHighlight: "34K App Installs in 48 hrs",
  },
];
