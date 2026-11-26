export interface CampaignPackage {
  id: "feature-demo" | "product-launch" | "launch-onboarding";
  name: string;
  price: number;
  featured?: boolean;
  badge?: string;
  tagline: string;
  idealFor: string;
  turnaround: string;
  mastersCount: number;
  distinctEditsCount: number;
  totalFilesCount: number;
  headlineSummary: string; // e.g. "1 launch film · 3 social edits · 3 formats per edit"
  filesSummary: string; // e.g. "10 finished video files"
  deliverables: string[];
  socialEditsList: string[];
}

export interface PublishingOption {
  id: "self" | "launch" | "monthly";
  name: string;
  priceLabel: string;
  priceValue: number;
  billingType: "included" | "one-time" | "recurring";
  summary: string;
  includedDetails: string[];
  note: string;
}

export const campaignPackages: CampaignPackage[] = [
  {
    id: "feature-demo",
    name: "Feature Demo",
    price: 249,
    tagline: "For a team releasing one feature or teaching one workflow.",
    idealFor: "Feature releases, help-center hero guides, and focused product updates.",
    turnaround: "4–6 business days",
    mastersCount: 1,
    distinctEditsCount: 2,
    totalFilesCount: 7,
    headlineSummary: "1 narrated walkthrough · 2 social edits · 3 formats per edit",
    filesSummary: "1 landscape master + 6 social exports = 7 finished video files",
    deliverables: [
      "One 45–60 second narrated walkthrough using real product screens",
      "Two distinct social edits: a quick tip and a feature reveal",
      "Each social edit delivered in 16:9, 1:1, and 9:16",
      "On-screen captions burned into all social edits",
      "One draft post caption per distinct edit with suggested posting order",
      "Two consolidated revision rounds included",
    ],
    socialEditsList: ["Quick tip edit", "Feature reveal edit"],
  },
  {
    id: "product-launch",
    name: "Product Launch",
    price: 499,
    featured: true,
    badge: "Featured",
    tagline: "For a founder preparing a launch or major release.",
    idealFor: "SaaS launches, Product Hunt days, homepage hero films, and paid acquisition.",
    turnaround: "7–10 business days",
    mastersCount: 1,
    distinctEditsCount: 3,
    totalFilesCount: 10,
    headlineSummary: "1 launch film · 3 social edits · 3 formats per edit",
    filesSummary: "1 landscape master + 9 social exports = 10 finished video files",
    deliverables: [
      "One 30–45 second screen-led launch promo using your UI and brand assets",
      "Three distinct social edits: teaser, feature spotlight, and launch announcement",
      "Each social edit delivered in 16:9, 1:1, and 9:16",
      "On-screen captions burned into all social edits",
      "One draft post caption per distinct edit with suggested posting order",
      "Two consolidated revision rounds included",
    ],
    socialEditsList: [
      "Pre-launch teaser edit",
      "Launch announcement edit",
      "Feature spotlight edit",
    ],
  },
  {
    id: "launch-onboarding",
    name: "Launch + Onboarding",
    price: 899,
    badge: "Complete System",
    tagline: "For a team that needs to introduce the product and teach new users how to get started.",
    idealFor: "Full product launch campaigns, self-serve onboarding funnels, and activation series.",
    turnaround: "10–15 business days",
    mastersCount: 3,
    distinctEditsCount: 5,
    totalFilesCount: 18,
    headlineSummary: "3 masters (1 film + 2 tutorials) · 5 social edits · 3 formats per edit",
    filesSummary: "3 landscape masters + 15 social exports = 18 finished video files",
    deliverables: [
      "One 30–45 second launch promo",
      "Two 45–60 second narrated tutorials for key workflows",
      "Five distinct social edits: teaser, launch announcement, feature spotlight, and two quick tips",
      "Each social edit delivered in 16:9, 1:1, and 9:16",
      "On-screen captions burned into all social edits",
      "One draft post caption per distinct edit with suggested posting order",
      "Two consolidated revision rounds included",
    ],
    socialEditsList: [
      "Teaser edit",
      "Launch announcement edit",
      "Feature spotlight edit",
      "Quick tip 1 (first workflow)",
      "Quick tip 2 (second workflow)",
    ],
  },
];

export const publishingOptions: PublishingOption[] = [
  {
    id: "self",
    name: "Our team will post",
    priceLabel: "Included",
    priceValue: 0,
    billingType: "included",
    summary: "Organized files, draft captions, and suggested posting order.",
    includedDetails: [
      "Cloud folder with labeled 16:9, 1:1, and 9:16 exports",
      "Copy-paste post captions drafted for each distinct edit",
      "Recommended schedule and posting sequence for maximum reach",
    ],
    note: "Perfect if you already have an internal social media manager or marketing lead.",
  },
  {
    id: "launch",
    name: "Publish our launch",
    priceLabel: "+$99 once",
    priceValue: 99,
    billingType: "one-time",
    summary: "Up to 6 organic placements across 2 agreed accounts over 2 weeks, adapted copy, approval calendar, scheduling, and live links.",
    includedDetails: [
      "Up to 6 organic placements across 2 agreed accounts (e.g. X / LinkedIn / YouTube)",
      "Tailored copy adapted for each social platform",
      "Approval calendar with scheduled timestamps and preview links",
      "Scheduling and post-launch verification links",
    ],
    note: "One placement = one post on one account. New production & paid ads separately scoped.",
  },
  {
    id: "monthly",
    name: "Manage monthly posting",
    priceLabel: "+$199/month",
    priceValue: 199,
    billingType: "recurring",
    summary: "Up to 10 organic placements per month across 2 agreed accounts, a calendar, scheduling, and a performance summary using approved assets.",
    includedDetails: [
      "Up to 10 organic placements per month across 2 agreed accounts",
      "Rolling content calendar and caption drafting",
      "Direct scheduling across agreed channels",
      "Monthly performance and view retention summary",
    ],
    note: "One placement = one post on one account. Community/inbox management separately scoped.",
  },
];

export const packageInclusionsNote =
  "Every package covers one product, one language, two consolidated revision rounds, on-screen captions for the social edits, one draft post caption per distinct edit, and a suggested posting order. Original 3D production, extensive UI reconstruction, and additional scripts are scoped separately.";

/**
 * Helper to compute calculated quote summary based on package and publishing choice
 */
export function calculateEstimate(
  packageId: CampaignPackage["id"],
  publishingId: PublishingOption["id"]
): {
  pkg: CampaignPackage;
  pub: PublishingOption;
  totalOneTime: number;
  monthlyRecurring: number;
  displayTotal: string;
} {
  const pkg = campaignPackages.find((p) => p.id === packageId) || campaignPackages[1];
  const pub = publishingOptions.find((p) => p.id === publishingId) || publishingOptions[0];

  if (pub.id === "self") {
    return {
      pkg,
      pub,
      totalOneTime: pkg.price,
      monthlyRecurring: 0,
      displayTotal: `$${pkg.price} one time`,
    };
  }

  if (pub.id === "launch") {
    return {
      pkg,
      pub,
      totalOneTime: pkg.price + pub.priceValue,
      monthlyRecurring: 0,
      displayTotal: `$${pkg.price + pub.priceValue} one time`,
    };
  }

  // Monthly
  return {
    pkg,
    pub,
    totalOneTime: pkg.price,
    monthlyRecurring: pub.priceValue,
    displayTotal: `$${pkg.price} production + $${pub.priceValue}/month`,
  };
}
