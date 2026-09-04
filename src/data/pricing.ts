export interface PricingTier {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  duration: string;
  popular?: boolean;
  description: string;
  idealFor: string;
  features: string[];
  turnaround: string;
  revisions: string;
  ctaText: string;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "simple-walkthrough",
    name: "Simple Walkthrough",
    price: "$99",
    numericPrice: 99,
    duration: "Under 60 seconds",
    description:
      "A fast, punchy screen recording walkthrough focused on a single key feature, micro-tour, or quick product action.",
    idealFor: "Feature releases, social media demos, quick onboarding pills, micro-tools",
    features: [
      "Up to 60 seconds duration (1080p / 4K)",
      "High-definition screen recording",
      "Dynamic zooms on essential buttons & inputs",
      "Cursor smoothing & click ripple effects",
      "Synced voiceover narration (Studio quality)",
      "Curated background music track",
      "Full commercial broadcast rights",
    ],
    turnaround: "48 – 72 Hours",
    revisions: "2 Rounds included",
    ctaText: "Order 60s Walkthrough ($99)",
  },
  {
    id: "standard-walkthrough",
    name: "Standard Product Walkthrough",
    price: "$199",
    numericPrice: 199,
    duration: "Up to 2.5 minutes",
    popular: true,
    badge: "Most Popular",
    description:
      "The sweet spot for SaaS companies and mobile apps looking to showcase their complete core user journey with high clarity.",
    idealFor: "SaaS platform tours, mobile app demos, onboarding series, investor decks",
    features: [
      "Up to 2.5 minutes duration (Crisp 4K / 60 FPS)",
      "Full user flow navigation & multi-step capture",
      "Dynamic pan and zoom post-production",
      "Custom cursor tracking & gesture callouts",
      "Studio voiceover narration & audio mastering",
      "Branded intro card & logo outro animation",
      "Sound design & balanced background music",
      "Full commercial rights & source files available",
    ],
    turnaround: "3 – 4 Days",
    revisions: "2 Rounds included",
    ctaText: "Order 2.5m Walkthrough ($199)",
  },
  {
    id: "comprehensive-saas",
    name: "Comprehensive SaaS Walkthrough",
    price: "$299",
    numericPrice: 299,
    duration: "3 to 4 minutes",
    description:
      "In-depth, structured walkthrough explaining multi-module systems, complex dashboards, settings, and integrations without losing viewer focus.",
    idealFor: "Enterprise SaaS, customer success academies, complex workflows, training portals",
    features: [
      "Full 3 to 4 minutes comprehensive walkthrough",
      "Chaptered workflow sequencing & logical pacing",
      "Precision focal zooms (up to 200% on small details)",
      "Visual highlight boxes, arrows & callout tooltips",
      "Studio voiceover alignment & sound mastering",
      "Video chapter timestamps for YouTube/LMS",
      "Full commercial rights for website & ads",
      "Priority production queue",
    ],
    turnaround: "4 – 5 Days",
    revisions: "3 Rounds included",
    ctaText: "Order 3-4m Walkthrough ($299)",
  },
  {
    id: "animated-advanced-saas",
    name: "Animated Explainer & Advance SaaS",
    price: "$300+",
    numericPrice: 300,
    duration: "Custom Scope / 60s – 3m+",
    badge: "Premium Motion",
    description:
      "Custom motion graphics, animated UI recreations, and high-production value explainers built for high conversion on marketing pages.",
    idealFor: "Homepage hero explainers, venture pitch videos, high-stakes launches, Product Hunt",
    features: [
      "Custom 2D UI motion graphics & vector animation",
      "Abstract software illustration & flow visualization",
      "Script polish & professional storyboard staging",
      "Premium voiceover artist selection",
      "Custom sound effects (SFX) & bespoke audio branding",
      "Multiple format exports (16:9 widescreen, 9:16 vertical)",
      "Iterative milestone approvals",
      "Full intellectual property transfer",
    ],
    turnaround: "5 – 8 Days (depending on scope)",
    revisions: "Unlimited during milestone stages",
    ctaText: "Get a Custom Quote (Starts $300)",
  },
];

export const pricingFaqs = [
  {
    q: "How do we handle payment safely?",
    a: "You have 4 safe options: Upwork Direct Contract (0% buyer marketplace fee, full escrow protection), Payoneer business invoice, direct international bank transfer, or our vetted Fiverr Level 2 profiles.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Usually just access to a test/demo account of your software, a bulleted list of features or workflow steps you want to show, and your brand logo/colors. If you don't have a script, I can outline one for you.",
  },
  {
    q: "What if my video is 75 seconds or between tiers?",
    a: "We can easily customize the package to your exact second count or milestone. Reach out via WhatsApp or email for an immediate fixed-price quote.",
  },
  {
    q: "Are revisions included in these prices?",
    a: "Yes! Every tier includes dedicated revision rounds to adjust pacing, zooms, text callouts, or audio balance until you are completely satisfied.",
  },
];
