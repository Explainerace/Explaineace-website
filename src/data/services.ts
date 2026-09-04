import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "software-saas",
    title: "Software & SaaS Walkthroughs",
    shortDesc:
      "Turn complex platforms into intuitive, high-converting video walkthroughs that onboard users faster.",
    iconName: "MonitorPlay",
    category: "Software & SaaS",
    features: [
      "SaaS Product Demos & Feature Highlights",
      "Customer Onboarding & Activation Flows",
      "Comprehensive Admin & Workspace Walkthroughs",
      "Release Notes & New Feature Updates",
    ],
    deliverables: [
      "Full HD (1080p) or 4K Master Video",
      "Dynamic Focal Zooms & Click Ripple Tracking",
      "Clean Studio Voiceover Narration",
      "MP4 Export + Web Embed Ready Files",
    ],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile App Demonstrations",
    shortDesc:
      "Flawless screen-captured demonstrations for iOS, Android, and responsive web applications.",
    iconName: "Smartphone",
    category: "Web & Mobile",
    features: [
      "iOS & Android Mobile App Demos",
      "Touch Gesture & Finger-Tap Animations",
      "Mobile Device Frame Mockups",
      "Cross-Platform Responsive Web Tours",
    ],
    deliverables: [
      "Vertical (9:16) & Landscape (16:9) Formats",
      "App Store & Google Play Preview Sizing",
      "Gesture Callouts (Swipes, Pinches, Taps)",
      "High-Fidelity Audio Mix",
    ],
  },
  {
    id: "training-education",
    title: "Training & Educational Videos",
    shortDesc:
      "Structured instructional videos built to train employees, partners, and customers effectively.",
    iconName: "GraduationCap",
    category: "Training & Education",
    features: [
      "Customer Education & Help Center Videos",
      "Internal SOP & Team Workflow Guides",
      "Step-by-Step 'How-To' Instructional Series",
      "Certification & Learning Module Content",
    ],
    deliverables: [
      "Numbered Chapters & Visual Progress Bars",
      "Synchronized Closed Captions (.SRT / .VTT)",
      "Callout Boxes & Key Takeaway Overlays",
      "Bite-Sized Modular Clips for Knowledge Bases",
    ],
  },
  {
    id: "explainer-product",
    title: "Product Explainers & Overviews",
    shortDesc:
      "High-impact overview videos that explain your product's core value proposition in 90 to 180 seconds.",
    iconName: "Sparkles",
    category: "Explainer & Product",
    features: [
      "Top-of-Funnel Product Explainers",
      "Feature Launch Announcements",
      "Sales Enablement & Pitch Deck Videos",
      "Investor & Stakeholder Presentations",
    ],
    deliverables: [
      "Script Timing & Story Arc Guidance",
      "Custom Branded Intro / Outro Motion Slides",
      "Licensed Royalty-Free Background Music",
      "Web Hero Section Video Loops",
    ],
  },
  {
    id: "production-support",
    title: "Full-Stack Production Support",
    shortDesc:
      "Every detail from high-res screen recording to voiceover, subtitle creation, and motion polish.",
    iconName: "Layers",
    category: "Production Support",
    features: [
      "Native High-Res Screen Recording (1080p / 4K)",
      "Professional Voiceover Narration",
      "Precision Zoom, Pan & Framing",
      "Cursor Smoothing & Click Highlighting",
      "Accessible Subtitles & Closed Captions",
      "Branded Motion Graphics & Transitions",
    ],
    deliverables: [
      "Production-Ready Master MP4s",
      "Subtitle Files (.SRT)",
      "Source Recordings & Project Files (upon request)",
      "Revisions to guarantee precision",
    ],
  },
];

export const valueAddItems = [
  {
    title: "Screen Recording",
    desc: "Clean, high-resolution product capture in native 1080p or 4K with pixel-perfect clarity.",
    iconName: "Video",
  },
  {
    title: "Zooms & Focus",
    desc: "Smooth dynamic zooms direct viewer attention immediately to critical UI elements.",
    iconName: "ZoomIn",
  },
  {
    title: "Cursor & Click Effects",
    desc: "Stabilized cursor tracking with distinct click ripples make every interaction effortless to follow.",
    iconName: "MousePointerClick",
  },
  {
    title: "Annotations",
    desc: "Custom arrows, badges, boxes, and spotlights highlight features at the exact right moment.",
    iconName: "Target",
  },
  {
    title: "Voiceover",
    desc: "Clear, studio-grade narration with professional tone, pacing, and balanced audio leveling.",
    iconName: "Mic",
  },
  {
    title: "Captions & Subtitles",
    desc: "Accessible and easy-to-follow subtitles burned in or delivered as timed .SRT files.",
    iconName: "Subtitles",
  },
  {
    title: "Motion Graphics",
    desc: "Branded intro/outro slides, feature title cards, and sleek transitions tailored to your identity.",
    iconName: "Layers",
  },
];
