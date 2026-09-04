import { Project } from "@/types";

/* ===================================================================================
 * 🎬 HOW TO ARRANGE AND CUSTOMIZE YOUR PORTFOLIO:
 * 
 * 1. REORDERING PROJECTS:
 *    - By Array Order: Move any project block up or down in this list. The order 
 *      in this file is the exact order displayed on the website.
 *    - By 'order' Field: You can also set `order: 1`, `order: 2`, etc. Lower numbers 
 *      appear first!
 * 
 * 2. CATEGORIES:
 *    Each project belongs to one of these categories:
 *    - "Mobile Apps"  -> For iOS/Android mobile apps & tablet walkthroughs
 *    - "SaaS"         -> For subscription platforms, dashboards & cloud software
 *    - "Web Apps"     -> For browser tools, web portals & interactive apps
 *    - "Tutorials"    -> For screencasts, feature guides & step-by-step videos
 *    - "Training"     -> For customer education, employee training & academies
 *    - "Explainers"   -> For product overviews, promo explainers & showcases
 * 
 * 3. ADDING A NEW PROJECT:
 *    Copy any project block, paste it where you want it to appear, and update the
 *    title, category, videoId (from YouTube), and description.
 * =================================================================================== */

export const projects: Project[] = [
  {
    id: "prim-automation",
    title: "Prim Automation Workflow Demo",
    category: "SaaS",
    order: 1,
    client: "Prim Automation",
    industry: "Operations & Workflow Automation",
    description:
      "A technical walkthrough showcasing multi-step trigger automations, node connections, and execution logs in an enterprise automation tool.",
    videoUrl: "https://www.youtube.com/watch?v=2ZtQX_lXHOs",
    videoId: "2ZtQX_lXHOs",
    thumbnail: "https://img.youtube.com/vi/2ZtQX_lXHOs/hqdefault.jpg",
    duration: "2:10",
    services: [
      "SaaS Walkthrough",
      "Cursor Tracking",
      "Visual Annotations",
      "Sound Design",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Demonstrated how non-technical operators can build, test, and deploy automated business processes using Prim Automation's canvas interface.",
      challenge:
        "Canvas-based workflow builders have numerous connectors and configuration sidebars that can easily disorient viewers if not tracked carefully.",
      approach:
        "Used targeted zoom-ins on each automation trigger and action block, accompanied by clear highlighted cursor paths.",
      production: [
        "Canvas pan and zoom post-production",
        "Visual connector highlight animations",
        "Clean audio narration alignment",
      ],
      finalResult:
        "A concise, high-converting product demo that clearly communicates automation value in minutes.",
    },
    tags: ["SaaS", "Automation", "Workflow", "Explainer", "Tech"],
  },
  {
    id: "muscle-coach-app",
    title: "Muscle Coach App Walkthrough",
    order: 2,
    category: "Mobile Apps",
    client: "Muscle Coach",
    industry: "Health & Fitness / Mobile Software",
    description:
      "A complete mobile app walkthrough guiding users through workout tracking, progress monitoring, and routine customization on iOS and Android.",
    videoUrl: "https://www.youtube.com/watch?v=W6-glP7Ct5o",
    videoId: "W6-glP7Ct5o",
    thumbnail: "https://img.youtube.com/vi/W6-glP7Ct5o/hqdefault.jpg",
    duration: "2:45",
    services: [
      "Mobile App Demo",
      "Screen Recording",
      "Zooms & Highlights",
      "Cursor/Tap Effects",
      "Voiceover",
    ],
    featured: true,
    caseStudy: {
      overview:
        "The goal was to demonstrate the core user journey of the Muscle Coach mobile application in a clean, vertical-to-horizontal presentation suitable for prospective users.",
      challenge:
        "Mobile screens have dense UI elements and intricate sub-menus that can be overwhelming to follow without focused framing.",
      approach:
        "Applied dynamic zooms to highlight workout logging, tap animations to clearly reveal gesture locations, and crisp pacing to showcase key features in under 3 minutes.",
      production: [
        "High-definition mobile screen capture",
        "Finger-tap & gesture ripple animations",
        "Adaptive pan and zoom on workout inputs",
        "Balanced audio mastering and voiceover syncing",
      ],
      finalResult:
        "A clear, professional product video that highlights ease-of-use for new app adopters without visual clutter.",
    },
    tags: ["Mobile App", "iOS", "Android", "App Demo", "Walkthrough"],
  },
  {
    id: "green-medicine",
    title: "Green Medicine SaaS Platform Tour",
    category: "SaaS",
    client: "Green Medicine",
    industry: "Healthcare / Telehealth SaaS",
    description:
      "An end-to-end platform tour illustrating patient management, prescription tracking, and compliance workflows within a specialized healthcare web app.",
    videoUrl: "https://www.youtube.com/watch?v=4E72rncOnBc",
    videoId: "4E72rncOnBc",
    thumbnail: "https://img.youtube.com/vi/4E72rncOnBc/hqdefault.jpg",
    duration: "3:15",
    services: [
      "SaaS Walkthrough",
      "Software Tutorial",
      "UI Zooms",
      "Callout Annotations",
      "Branded Intro/Outro",
    ],
    featured: true,
    caseStudy: {
      overview:
        "A comprehensive walkthrough of the Green Medicine portal, designed to onboard clinics and practitioners onto their digital record system.",
      challenge:
        "Medical workflows involve dense tables, sensitive fields, and multiple navigation panels that can feel intimidating to first-time practitioners.",
      approach:
        "Structured the video into logical functional chapters: practitioner login, patient queue, consultation notes, and prescription fulfillment.",
      production: [
        "Native 1080p browser capture with crisp typography",
        "Callout bounding boxes on form fields",
        "Cursor stabilization and click ripple effects",
        "Subtle motion graphic transitions between modules",
      ],
      finalResult:
        "Delivered a confidence-building SaaS walkthrough that simplifies complex healthcare admin flows.",
    },
    tags: ["SaaS", "Healthcare", "Web App", "Onboarding", "Tour"],
  },
  {
    id: "metrade-promo",
    title: "METRADE Trading Platform Promo",
    category: "Explainers",
    client: "METRADE",
    industry: "Fintech & Trading Software",
    description:
      "A dynamic product explainer showcasing real-time market data charting, order placement, and portfolio analytics for active traders.",
    videoUrl: "https://www.youtube.com/watch?v=AF_MrFEaAMU",
    videoId: "AF_MrFEaAMU",
    thumbnail: "https://img.youtube.com/vi/AF_MrFEaAMU/hqdefault.jpg",
    duration: "1:50",
    services: [
      "Product Explainer",
      "Motion Graphics",
      "Screen Capture",
      "Voiceover",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Created an engaging product explainer and promotional video for the METRADE trading terminal to attract retail and algorithmic traders.",
      challenge:
        "Financial terminals contain intense real-time tick feeds, candlesticks, and order books that require high visual clarity to avoid looking chaotic.",
      approach:
        "Combined cinematic framing with high-contrast UI highlights to direct viewer focus to core terminal capabilities.",
      production: [
        "Crisp 60fps chart capture",
        "Custom branded motion graphics and lower-thirds",
        "Impactful audio sync and voice narration",
      ],
      finalResult:
        "A punchy, modern video that balances trading precision with high production value.",
    },
    tags: ["Fintech", "Trading", "Explainer", "Promo", "Web App"],
  },
  {
    id: "bybit-guide",
    title: "Bybit Platform Tutorial with Voiceover",
    category: "Tutorials",
    client: "Platform Guide",
    industry: "Fintech / Digital Assets",
    description:
      "A step-by-step instructional screencast tutorial guiding users through platform navigation, account funding, and trade execution.",
    videoUrl: "https://www.youtube.com/watch?v=0QOVOmNEFME",
    videoId: "0QOVOmNEFME",
    thumbnail: "https://img.youtube.com/vi/0QOVOmNEFME/hqdefault.jpg",
    duration: "4:15",
    services: [
      "Software Tutorial",
      "Voiceover Narration",
      "Captions",
      "Zooms & Highlights",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced a step-by-step instructional screencast with voiceover explaining account setup and interface navigation.",
      challenge:
        "Users frequently encounter friction during initial account setup and deposit confirmation steps.",
      approach:
        "Delivered a deliberate, click-by-click walkthrough with on-screen text callouts reinforcing critical security tips.",
      production: [
        "Studio-grade voiceover track",
        "Clear step numbering and highlight markers",
        "Synchronized closed captions",
      ],
      finalResult:
        "An easy-to-follow instructional video that reduces user friction and support tickets.",
    },
    tags: ["Tutorial", "Fintech", "Voiceover", "Captions", "Instructional"],
  },
  {
    id: "painworth-legaltech",
    title: "Painworth LegalTech Claim Assessment Platform",
    category: "SaaS",
    client: "Painworth",
    industry: "LegalTech / SaaS",
    description:
      "A product walkthrough illustrating how Painworth calculates injury claim settlements using case law analytics and automated intake forms.",
    videoUrl: "https://www.youtube.com/watch?v=gOwL0pCTMtU",
    videoId: "gOwL0pCTMtU",
    thumbnail: "https://img.youtube.com/vi/gOwL0pCTMtU/hqdefault.jpg",
    duration: "2:50",
    services: [
      "SaaS Walkthrough",
      "UI Highlights",
      "Screen Recording",
      "Captions",
    ],
    featured: true,
    caseStudy: {
      overview:
        "A clear demonstration of Painworth's assessment engine, showing how users input incident details and receive comprehensive settlement estimates.",
      challenge:
        "Legal assessment forms require careful explanation to keep viewers engaged through multi-stage questionnaires.",
      approach:
        "Kept pacing energetic with smooth zooms and highlighted input containers, moving fluidly through the claim timeline.",
      production: [
        "Focal zooms on data entry sections",
        "Highlight boxes around calculated results",
        "Seamless screen transitions",
      ],
      finalResult:
        "A trustworthy and authoritative presentation that highlights software simplicity for both claimants and legal professionals.",
    },
    tags: ["LegalTech", "SaaS", "Walkthrough", "Assessment", "Web App"],
  },
  {
    id: "bottronic-signup-tutorial",
    title: "Bottronic AI Bot Setup & Configuration",
    category: "Tutorials",
    client: "Bottronic",
    industry: "AI & Automation SaaS",
    description:
      "A comprehensive onboarding screencast explaining bot setup, API key connection, and automated reply rule configuration.",
    videoUrl: "https://www.youtube.com/watch?v=CQi50pGdXfo",
    videoId: "CQi50pGdXfo",
    thumbnail: "https://img.youtube.com/vi/CQi50pGdXfo/hqdefault.jpg",
    duration: "3:05",
    services: [
      "Software Tutorial",
      "Onboarding Video",
      "Cursor Effects",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Onboarding video aimed at guiding newly registered users through connecting their first automation bot.",
      challenge:
        "API keys, webhook endpoints, and permission toggles often cause drop-off if not carefully demonstrated.",
      approach:
        "Step-by-step visual guidance with highlighted inputs, security reminders, and real-time confirmation checks.",
      production: [
        "Screen capture at 1080p resolution",
        "Cursor click ripples and smooth acceleration",
        "Clear narration syncing",
      ],
      finalResult:
        "Empowers users to launch their bot setup without needing technical developer assistance.",
    },
    tags: ["AI", "Automation", "Onboarding", "Tutorial", "SaaS"],
  },
  {
    id: "eatngage-virtual-engagement",
    title: "eatNgage Virtual Engagement Platform Demo",
    category: "SaaS",
    client: "eatNgage",
    industry: "B2B SaaS / Virtual Events",
    description:
      "A product walkthrough illustrating automated attendee engagement, catering coordination, and webinar attendance tracking.",
    videoUrl: "https://www.youtube.com/watch?v=Rp3mJA9otic",
    videoId: "Rp3mJA9otic",
    thumbnail: "https://img.youtube.com/vi/Rp3mJA9otic/hqdefault.jpg",
    duration: "2:30",
    services: [
      "SaaS Walkthrough",
      "Product Explainer",
      "Zooms & Highlights",
      "Motion Graphics",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Showcased how sales teams and marketing managers use eatNgage to improve webinar attendance rates through personalized engagement.",
      challenge:
        "The software links event scheduling, food delivery vouchers, and CRM integrations, which required a cohesive narrative.",
      approach:
        "Narrated from the host's perspective, followed by the recipient's smooth voucher experience.",
      production: [
        "Side-by-side workflow comparisons",
        "Branded UI annotations",
        "Polished voiceover and sound leveling",
      ],
      finalResult:
        "An engaging B2B video that proves the business value and ROI of the platform in under 3 minutes.",
    },
    tags: ["B2B SaaS", "Events", "Webinar", "Walkthrough", "Explainer"],
  },
  {
    id: "fitamps-client-dashboard",
    title: "Fitamps Client Dashboard & Analytics",
    category: "Web Apps",
    client: "Fitamps",
    industry: "Fitness & Wellness Software",
    description:
      "Detailed demonstration of the client dashboard, showing personal fitness stats, active meal plans, and trainer messaging.",
    videoUrl: "https://www.youtube.com/watch?v=KQx4nA4VKuM",
    videoId: "KQx4nA4VKuM",
    thumbnail: "https://img.youtube.com/vi/KQx4nA4VKuM/hqdefault.jpg",
    duration: "2:15",
    services: [
      "Web App Demo",
      "Software Tutorial",
      "UI Focus",
      "Cursor Effects",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Client-facing training video to show members how to navigate their dashboard, log measurements, and review workout history.",
      challenge:
        "Multiple tabs and progress charts required disciplined visual direction so users know what to click first.",
      approach:
        "Systematic walkthrough starting with daily metrics, leading into workout tracking and real-time chat.",
      production: [
        "Cursor trails and focal zoom effects",
        "Section highlight overlays",
        "Crisp voice narration",
      ],
      finalResult:
        "Reduced new member onboarding confusion and improved self-service platform adoption.",
    },
    tags: ["Web Apps", "Dashboard", "Fitness", "Tutorial", "Analytics"],
  },
  {
    id: "fitamps-onboarding-login",
    title: "Fitamps Member Onboarding & Login Tutorial",
    category: "Training",
    client: "Fitamps",
    industry: "Fitness & Wellness Software",
    description:
      "A quick start tutorial covering client registration, profile verification, and initial questionnaire completion.",
    videoUrl: "https://www.youtube.com/watch?v=fJmaVOtGzC8",
    videoId: "fJmaVOtGzC8",
    thumbnail: "https://img.youtube.com/vi/fJmaVOtGzC8/hqdefault.jpg",
    duration: "1:45",
    services: [
      "Training Video",
      "Onboarding Screencast",
      "Captions",
      "Annotations",
    ],
    featured: false,
    caseStudy: {
      overview:
        "A bite-sized onboarding tutorial for newly registered fitness clients receiving their welcome email.",
      challenge:
        "Ensuring new clients complete password setup and initial biometric profiles quickly without getting stuck.",
      approach:
        "Zero-fluff, step-by-step guidance showing exactly what confirmation emails look like and where to click.",
      production: [
        "Numbered step badges",
        "Clear password entry blur for security demonstration",
        "Accessible subtitle overlays",
      ],
      finalResult:
        "A clean guide that accelerated client time-to-first-workout.",
    },
    tags: ["Training", "Onboarding", "Login", "Tutorial", "SaaS"],
  },
  {
    id: "fitamps-trainer-setup",
    title: "Fitamps Trainer Portal & Account Setup",
    category: "Training",
    client: "Fitamps",
    industry: "Fitness & Wellness Software",
    description:
      "Admin and instructor training video detailing client assignments, workout builder templates, and billing preferences.",
    videoUrl: "https://www.youtube.com/watch?v=TOpjEF06e2Y",
    videoId: "TOpjEF06e2Y",
    thumbnail: "https://img.youtube.com/vi/TOpjEF06e2Y/hqdefault.jpg",
    duration: "3:40",
    services: [
      "Training Video",
      "Software Tutorial",
      "Screen Capture",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Instructor-focused video training for personal trainers setting up their coaching business inside Fitamps.",
      challenge:
        "The trainer portal has deep configuration options including scheduling, payment gateways, and program builders.",
      approach:
        "Divided the instruction into clear sequential milestones: Profile, Payments, Program Builder, and Client Roster.",
      production: [
        "Module title cards with chapter markers",
        "Smooth cursor highlighting",
        "Concise instructional narration",
      ],
      finalResult:
        "Streamlined trainer onboarding across fitness organizations.",
    },
    tags: ["Training", "Admin Portal", "Instructor Guide", "Tutorial", "SaaS"],
  },
  {
    id: "nz-leads-platform",
    title: "NZ Leads B2B Prospecting & Data Tool",
    category: "SaaS",
    client: "NZ Leads",
    industry: "B2B Sales & Lead Generation",
    description:
      "A software demonstration showing search filters, company enrichment, and contact export tools for sales reps.",
    videoUrl: "https://www.youtube.com/watch?v=EEEN4coB83k",
    videoId: "EEEN4coB83k",
    thumbnail: "https://img.youtube.com/vi/EEEN4coB83k/hqdefault.jpg",
    duration: "2:20",
    services: [
      "SaaS Walkthrough",
      "Feature Explainer",
      "UI Highlights",
      "Motion Graphics",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Product tour demonstrating how sales teams filter prospects by industry, revenue, and location to build outreach lists.",
      challenge:
        "Demonstrating search filters and data tables without looking like a dry spreadsheet.",
      approach:
        "Paced the video around a real prospecting scenario: finding decision makers, enriching contacts, and exporting to CRM.",
      production: [
        "Data table zoom-ins",
        "Highlight rings on export buttons",
        "Dynamic audio track synced to UI reveals",
      ],
      finalResult:
        "A compelling product demo that highlights speed and simplicity in B2B lead hunting.",
    },
    tags: ["SaaS", "Lead Gen", "Sales Tech", "Web App", "Walkthrough"],
  },
  {
    id: "password-management-tutorial",
    title: "Password Management & Security Tool Tutorial",
    category: "Tutorials",
    client: "Security Suite",
    industry: "Cybersecurity & Productivity",
    description:
      "An educational tutorial detailing vault creation, master key generation, multi-factor authentication, and browser extension autofill.",
    videoUrl: "https://www.youtube.com/watch?v=fJ8ocgOvLNU",
    videoId: "fJ8ocgOvLNU",
    thumbnail: "https://img.youtube.com/vi/fJ8ocgOvLNU/hqdefault.jpg",
    duration: "3:30",
    services: [
      "Software Tutorial",
      "Screen Recording",
      "Cursor Effects",
      "Voiceover",
      "Captions",
    ],
    featured: false,
    caseStudy: {
      overview:
        "A step-by-step security tutorial for enterprise employees adopting a secure password management suite.",
      challenge:
        "Overcoming reluctance from non-technical team members who find master passwords and 2FA confusing.",
      approach:
        "Provided calm, clear narration emphasizing security benefits and showing how browser extensions autofill logins seamlessly.",
      production: [
        "Selective UI blurs for privacy demonstration",
        "Clear cursor click animations",
        "Synchronized closed captions",
      ],
      finalResult:
        "Increased enterprise password vault adoption and reduced security compliance inquiries.",
    },
    tags: ["Security", "Tutorial", "Password Manager", "Instructional", "Captions"],
  },
  {
    id: "rakoli-tutorial",
    title: "Rakoli Software Tutorial",
    category: "Tutorials",
    client: "Rakoli",
    industry: "Productivity & Utility Software",
    description:
      "A clean screencast tutorial covering user configuration, key software features, and workflow best practices.",
    videoUrl: "https://www.youtube.com/watch?v=bWnEUgvUswo",
    videoId: "bWnEUgvUswo",
    thumbnail: "https://img.youtube.com/vi/bWnEUgvUswo/hqdefault.jpg",
    duration: "2:50",
    services: [
      "Software Tutorial",
      "Screen Recording",
      "Zooms & Highlights",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Created an end-to-end tutorial for Rakoli software, providing users with a comprehensive overview of setup and usage.",
      challenge:
        "Explaining multiple tool panels in a concise format without overwhelming new users.",
      approach:
        "Structured the tutorial into distinct chapters with visual title markers and focused UI magnifications.",
      production: [
        "Pixel-crisp 1080p capture",
        "Clean audio track with zero background noise",
        "Highlight callout animations",
      ],
      finalResult:
        "A clean, polished software tutorial that acts as a reliable 24/7 onboarding asset.",
    },
    tags: ["Tutorial", "Software", "Screencast", "Instructional", "Productivity"],
  },
  {
    id: "maths-labs-interactive",
    title: "Maths Labs Interactive Educational Platform",
    category: "Training",
    client: "Maths Labs",
    industry: "EdTech / STEM Software",
    description:
      "Interactive training video demonstrating graphing tools, equation solver inputs, and student worksheet grading.",
    videoUrl: "https://www.youtube.com/watch?v=XEpsdKosZbs",
    videoId: "XEpsdKosZbs",
    thumbnail: "https://img.youtube.com/vi/XEpsdKosZbs/hqdefault.jpg",
    duration: "2:40",
    services: [
      "Training Video",
      "Educational Screencast",
      "UI Focus",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Produced an educational walkthrough for students and teachers navigating the Maths Labs interactive curriculum platform.",
      challenge:
        "Mathematical graphing tools involve fine sliders and precise coordinate plotting that must be clearly visible.",
      approach:
        "Applied smooth focal zooms to graph axes, function inputs, and dynamic curve updates.",
      production: [
        "High-definition zoom on interactive math equations",
        "Paced step-by-step problem walkthrough",
        "Balanced vocal delivery",
      ],
      finalResult:
        "An intuitive video guide that makes digital math exploration easy and accessible for both teachers and students.",
    },
    tags: ["EdTech", "Training", "STEM", "Web App", "Interactive"],
  },
  {
    id: "teddy-product-walkthrough",
    title: "Teddy Digital Product Walkthrough",
    category: "Explainers",
    client: "Teddy",
    industry: "Consumer Tech / Digital Services",
    description:
      "A friendly, engaging product overview guiding customers through ordering, delivery tracking, and subscription settings.",
    videoUrl: "https://www.youtube.com/watch?v=LuhGnOpyfqw",
    videoId: "LuhGnOpyfqw",
    thumbnail: "https://img.youtube.com/vi/LuhGnOpyfqw/hqdefault.jpg",
    duration: "2:05",
    services: [
      "Product Explainer",
      "Website Walkthrough",
      "Cursor Effects",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Customer-facing explainer illustrating the ease of placing and modifying orders through Teddy's web interface.",
      challenge:
        "Maintaining a welcoming, human tone while demonstrating technical e-commerce features.",
      approach:
        "Paired a conversational voiceover tone with bright UI highlights and snappy screen transitions.",
      production: [
        "Web browser capture with customized cursor tracking",
        "Order timeline animation overlays",
        "Subtle audio sound effects",
      ],
      finalResult:
        "Increased customer confidence and lowered checkout drop-off rates.",
    },
    tags: ["Product Explainer", "E-Commerce", "Website Walkthrough", "Consumer"],
  },
  {
    id: "miyamoto-engineering-overview",
    title: "Miyamoto Engineering Software Overview",
    category: "Explainers",
    client: "Miyamoto",
    industry: "Civil & Structural Engineering Software",
    description:
      "A technical product overview highlighting structural resilience modeling, stress analysis calculations, and report generation.",
    videoUrl: "https://www.youtube.com/watch?v=NK_HxZJ1SG8",
    videoId: "NK_HxZJ1SG8",
    thumbnail: "https://img.youtube.com/vi/NK_HxZJ1SG8/hqdefault.jpg",
    duration: "3:00",
    services: [
      "Product Explainer",
      "Technical Software Demo",
      "Zooms & Highlights",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "An overview video for specialized engineering software, designed for municipal and consulting engineers.",
      challenge:
        "Engineering software has vast toolbars, 3D wireframe simulations, and detailed parameter inputs.",
      approach:
        "Focused attention strictly on key analytical phases: model import, load calculation, and compliance reporting.",
      production: [
        "High-definition 3D model screen recording",
        "Callout pointers highlighting structural test points",
        "Authoritative narration",
      ],
      finalResult:
        "Communicates the software's sophistication with complete clarity for enterprise engineering decision-makers.",
    },
    tags: ["Engineering", "Technical Demo", "Product Explainer", "Software"],
  },
  {
    id: "filmmors-creative-suite",
    title: "Filmmors Creative Suite & Tooling",
    category: "Web Apps",
    client: "Filmmors",
    industry: "Media Production / Creative SaaS",
    description:
      "A comprehensive walkthrough of the Filmmors asset management library, storyboard tools, and review collaboration workspace.",
    videoUrl: "https://www.youtube.com/watch?v=_UQdK2KSG14",
    videoId: "UQdK2KSG14",
    thumbnail: "https://img.youtube.com/vi/_UQdK2KSG14/hqdefault.jpg",
    duration: "2:35",
    services: [
      "Web App Walkthrough",
      "Motion Graphics",
      "UI Highlights",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Demonstrated the Filmmors platform for creative directors and video teams seeking streamlined asset approval workflows.",
      challenge:
        "Video review software features multiple timeline tracks, timecode comments, and version comparisons.",
      approach:
        "Emphasized speed of collaboration by showing real-time comments appearing directly on video timeline frames.",
      production: [
        "High framerate capture of video playback tools",
        "Dynamic zoom into feedback pins",
        "Modern branded sound design",
      ],
      finalResult:
        "A sleek showcase video that resonates strongly with creative studios and agencies.",
    },
    tags: ["Creative Suite", "Web Apps", "Media", "Walkthrough", "Collaboration"],
  },
  {
    id: "bondi-platform-guide",
    title: "Bondi Platform Feature Guide",
    category: "Explainers",
    client: "Bondi",
    industry: "Digital Services & Booking",
    description:
      "A clean product guide highlighting service listings, real-time availability sync, and instant booking confirmations.",
    videoUrl: "https://www.youtube.com/watch?v=cu9t-1J37Rs",
    videoId: "cu9t-1J37Rs",
    thumbnail: "https://img.youtube.com/vi/cu9t-1J37Rs/hqdefault.jpg",
    duration: "2:10",
    services: [
      "Product Explainer",
      "Website Demo",
      "Cursor Effects",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "A concise platform walkthrough showing both host listing features and customer reservation workflows.",
      challenge:
        "Showing two interconnected workflows within a tight 2-minute video window.",
      approach:
        "Used a split narrative transition to showcase booking submission on the left and instant host notification on the right.",
      production: [
        "Responsive web capture",
        "Highlighted calendar reservation steps",
        "Polished voiceover",
      ],
      finalResult:
        "A clear, reassuring video that demonstrates platform reliability.",
    },
    tags: ["Booking", "Platform Guide", "Website Demo", "Explainer"],
  },
  {
    id: "ifly-travel-booking",
    title: "iFly Travel & Booking Software Tutorial",
    category: "Tutorials",
    client: "iFly",
    industry: "Travel & Hospitality Tech",
    description:
      "A step-by-step tutorial showing flight filtering, flexible date comparisons, passenger detail entry, and confirmation receipts.",
    videoUrl: "https://www.youtube.com/watch?v=eJLef3_sATc",
    videoId: "eJLef3_sATc",
    thumbnail: "https://img.youtube.com/vi/eJLef3_sATc/hqdefault.jpg",
    duration: "2:40",
    services: [
      "Software Tutorial",
      "Screen Recording",
      "Zooms & Highlights",
      "Voiceover",
    ],
    featured: false,
    caseStudy: {
      overview:
        "Customer self-service tutorial guiding travelers through searching, comparing fares, and managing multi-city itineraries.",
      challenge:
        "Fare rule modals, baggage add-ons, and seat selection can cause booking abandonment.",
      approach:
        "Detailed step-by-step guidance showing exactly how to choose add-ons transparently.",
      production: [
        "Clean browser recording",
        "Magnified seat-selection map",
        "Clear vocal instructions",
      ],
      finalResult:
        "Empowered travelers to book itineraries without needing live agent phone support.",
    },
    tags: ["Travel Tech", "Tutorial", "Booking", "Web Apps", "Instructional"],
  },
  {
    id: "screencast-production-showcase",
    title: "Screencast Video Production Service Showcase",
    category: "Explainers",
    client: "Video Supremacy",
    industry: "Video Production & Tutorial Creation",
    description:
      "A comprehensive showreel highlighting Ali's screen capture capabilities, zoom post-production, cursor tracking, and studio voiceovers.",
    videoUrl: "https://www.youtube.com/watch?v=fO7m1m7hpNA",
    videoId: "fO7m1m7hpNA",
    thumbnail: "https://img.youtube.com/vi/fO7m1m7hpNA/hqdefault.jpg",
    duration: "1:30",
    services: [
      "Showreel",
      "Screen Recording",
      "Zooms & Highlights",
      "Cursor Effects",
      "Motion Graphics",
      "Voiceover",
    ],
    featured: true,
    caseStudy: {
      overview:
        "A dedicated showreel demonstrating the technical difference between raw screen recording and high-end software video production.",
      challenge:
        "Proving to SaaS founders that professional post-production directly impacts user comprehension and product perceived value.",
      approach:
        "Used fast-paced before-and-after side-by-side clips showcasing raw screen capture vs. calibrated zooms, cursor effects, and audio mastering.",
      production: [
        "Ultra-crisp 4K/1080p capture examples",
        "Dynamic cursor smoothing demonstrations",
        "Impactful audio production and motion design",
      ],
      finalResult:
        "The flagship showcase illustrating Ali's premium standard for software walkthroughs.",
    },
    tags: ["Showreel", "Production", "SaaS Walkthrough", "Tutorials", "Explainers"],
  },
];
