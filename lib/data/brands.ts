export interface Brand {
  name: string;
  category: string;
  metric: string;
  logoType: "sveston" | "westpoint" | "telenor" | "savyour" | "kfc" | "daraz" | "pepsi" | "bykea";
  color: string;
}

export const BRAND_LOGOS: Brand[] = [
  {
    name: "Sveston",
    category: "Luxury Watches",
    metric: "1.2M+ Views",
    logoType: "sveston",
    color: "#ff8a3d",
  },
  {
    name: "Westpoint",
    category: "Home Appliances",
    metric: "1.6M+ Views",
    logoType: "westpoint",
    color: "#ef4444",
  },
  {
    name: "Telenor",
    category: "Telecom & 4G",
    metric: "2.1M+ Views",
    logoType: "telenor",
    color: "#3b82f6",
  },
  {
    name: "Savyour",
    category: "Fintech & Rewards",
    metric: "890K+ Views",
    logoType: "savyour",
    color: "#10b981",
  },
  {
    name: "KFC Pakistan",
    category: "QSR & Food",
    metric: "2.8M+ Views",
    logoType: "kfc",
    color: "#dc2626",
  },
  {
    name: "Daraz.pk",
    category: "E-Commerce",
    metric: "3.4M+ Views",
    logoType: "daraz",
    color: "#f97316",
  },
  {
    name: "Pepsi",
    category: "Beverages",
    metric: "1.9M+ Views",
    logoType: "pepsi",
    color: "#2563eb",
  },
  {
    name: "Bykea",
    category: "Mobility & Tech",
    metric: "1.4M+ Views",
    logoType: "bykea",
    color: "#8b5cf6",
  },
];
