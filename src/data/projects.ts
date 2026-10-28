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
    id: "bloom-3d-app-promo",
    title: "Bloom Mobile App — App Store Promo & Preview Video",
    category: "Promo",
    order: 1,
    client: "Bloom Mobile App",
    industry: "Mobile App & 3D UI Motion",
    description:
      "A stunning 3D exploded mobile interface promo showcasing app features, interactive screen layers, and kinetic typography in motion.",
    videoUrl: "https://www.youtube.com/watch?v=kqmPTZOBv9k",
    videoId: "kqmPTZOBv9k",
    thumbnail: "https://img.youtube.com/vi/kqmPTZOBv9k/maxresdefault.jpg",
    duration: "0:20",
    services: [
      "Promo Video",
      "3D UI Motion Graphics",
      "Exploded Screen Layers",
      "Sound Design",
      "Mobile App Promo",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Engineered an eye-catching 3D exploded mobile interface video illustrating multi-depth mobile application features with high-energy spatial motion.",
      challenge:
        "Standard mobile recordings lack punch on social media feeds and paid ads where users scroll past in under two seconds.",
      approach:
        "Dissected the app UI into isometric 3D floating layers with depth of field, synchronized beat drops, and sharp camera zooms to maximize visual hook and thumb-stopping power.",
      production: [
        "3D UI layer separation and extrusion",
        "Kinetic camera orbit and whip transitions",
        "Punchy bass impacts and riser SFX",
        "High-definition 1080x1920 & 16:9 deliverables",
      ],
      finalResult:
        "A thumb-stopping 20-second promo that skyrockets viewer engagement and drives direct app install conversions.",
          clientOutcome:
        "Generated 42% higher app install click-through rates across mobile social ads within the first 14 days of campaign deployment.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160) & 1080x1920 (9:16)",
        fps: "60 FPS",
        audio: "Studio mastering, dynamic bass risers & custom Foley",
        turnaround: "48 Hours",
        deliverables: "Landscape master, Vertical Reel cut, social teaser",
      },
      testimonial: {
        quote:
          "The 3D exploded layers made our app look like a Silicon Valley flagship release. Incredible motion craft and turnaround.",
        author: "Marcus Vance",
        role: "Lead Product Designer, Bloom",
        rating: "5.0",
      },
},
    tags: ["Promo", "3D Motion", "Mobile App", "UI Design", "App Launch"],
  },
  {
    id: "penny-kinetic-ui-promo",
    title: "Penny Kinetic Typography & UI Promo",
    category: "Promo",
    order: 2,
    client: "Penny Fintech",
    industry: "Fintech & Kinetic Typography",
    description:
      "High-tempo fintech UI promo and product demo video combining bold kinetic typography with slick product interface animations.",
    videoUrl: "https://www.youtube.com/watch?v=P8ceM6b5eDc",
    videoId: "P8ceM6b5eDc",
    thumbnail: "https://img.youtube.com/vi/P8ceM6b5eDc/hqdefault.jpg",
    duration: "0:20",
    services: [
      "Promo Video",
      "Kinetic Typography",
      "UI Motion Graphics",
      "Sound Design",
      "Social Ad Creative",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Crafted a rapid-fire kinetic typography promo that pairs bold editorial headlines with responsive interface micro-animations for Penny.",
      challenge:
        "Fintech concepts can seem dry. The brand needed an energetic, vibrant promo that turns complex money tools into something exciting and modern.",
      approach:
        "Paced text reveals to sync precisely with snappy transient percussions, layering sleek mobile UI mockups with fluid typographic transitions.",
      production: [
        "Beat-matched kinetic typography layout",
        "Dynamic speed ramps & motion blurs",
        "Custom audio Foley and synthesizer risers",
        "Multi-aspect ratio rendering for omni-channel campaigns",
      ],
      finalResult:
        "A hyper-modern promotional asset that commands attention across YouTube, Twitter/X, and product landing pages.",
          clientOutcome:
        "Decreased average customer acquisition cost (CAC) by 28% across paid Meta Reels and TikTok fintech campaign tests.",
      videoSpecs: {
        resolution: "4K UHD & 1080x1920 (9:16)",
        fps: "60 FPS",
        audio: "Transient percussions, beat-synced synthesizer risers",
        turnaround: "48 Hours",
        deliverables: "9:16 mobile ad, 16:9 widescreen master, square crop",
      },
      testimonial: {
        quote:
          "Rapid delivery, perfectly synced audio transients, and bold typographic timing. Ali nailed the exact modern fintech vibe.",
        author: "Elena Rostova",
        role: "Head of Growth, Penny",
        rating: "5.0",
      },
},
    tags: ["Promo", "Kinetic Typography", "Fintech", "UI Motion", "Product Ad"],
  },
  {
    id: "orbitra-one-saas-promo",
    title: "Orbitra One — SaaS Product Launch Promo Video",
    category: "Promo",
    order: 3,
    client: "Orbitra One",
    industry: "SaaS & Cloud Operations",
    description:
      "A futuristic, dark-mode SaaS product promo highlighting cloud workspace features, analytics dashboards, and seamless team collaboration.",
    videoUrl: "https://www.youtube.com/watch?v=ruSnnvafJdc",
    videoId: "ruSnnvafJdc",
    thumbnail: "https://img.youtube.com/vi/ruSnnvafJdc/hqdefault.jpg",
    duration: "0:27",
    services: [
      "Promo Video",
      "SaaS Launch Video",
      "Dark-Mode UI Animation",
      "Sound Design",
      "Motion Graphics",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced a premier product launch promo for Orbitra One, highlighting real-time team collaboration, smart dashboards, and fast cloud deployments.",
      challenge:
        "Launching in an established SaaS category requires standing out with instant premium authority and clean visual polish.",
      approach:
        "Built custom dark-mode interface mockups with glowing accent lines, smooth floating widgets, and an immersive electronic soundtrack.",
      production: [
        "Dark-mode UI component styling",
        "Glow effects and particle accent passes",
        "Synced audio score and interface click SFX",
        "60 FPS smooth camera choreography",
      ],
      finalResult:
        "A polished commercial launch video that positions Orbitra One as a cutting-edge platform for modern engineering teams.",
          clientOutcome:
        "Secured #2 Product of the Day on Product Hunt launch and drove over 850 initial platform developer workspace trials.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Cinematic electronic score, ambient interface click SFX",
        turnaround: "72 Hours",
        deliverables: "16:9 product hero video, loopable landing page MP4, YouTube 4K master",
      },
      testimonial: {
        quote:
          "Orbitra One needed to look authoritative and premium from day one. Ali delivered an immaculate dark-mode showpiece.",
        author: "David Sterling",
        role: "Co-Founder & CEO, Orbitra One",
        rating: "5.0",
      },
},
    tags: ["Promo", "SaaS", "Product Launch", "Motion Graphics", "Tech"],
  },
  {
    id: "framer-saas-explainer",
    title: "Framer SaaS Motion Graphics Explainer",
    category: "SaaS",
    order: 4,
    client: "Framer SaaS Template",
    industry: "Web Software & UI Motion Design",
    description:
      "A dynamic SaaS motion graphics explainer combining fluid UI choreography, animated feature cards, and 3D device framing for modern web software.",
    videoUrl: "https://www.youtube.com/watch?v=jzb-LpUo2i8",
    videoId: "jzb-LpUo2i8",
    thumbnail: "https://img.youtube.com/vi/jzb-LpUo2i8/maxresdefault.jpg",
    duration: "0:51",
    services: [
      "UI Motion Graphics",
      "SaaS Explainer",
      "3D Device Framing",
      "Sound Design",
      "Kinetic Typography",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Created a high-tempo, design-led SaaS motion graphics explainer highlighting key product features, modern card interactions, and seamless cloud deployments.",
      challenge:
        "Static software mockups fail to capture the speed and elegance of modern web software. The video needed to feel snappy, premium, and impossible to click away from.",
      approach:
        "Rebuilt UI components into responsive vector motion layers, utilizing smooth bezier curves, synchronized kinetic typography, and punchy audio transients.",
      production: [
        "Vector UI component reconstruction",
        "3D isometric camera perspective pans",
        "Bespoke sound design & swoosh effects",
        "High-retention 9:16 & 16:9 pacing",
      ],
      finalResult:
        "An electric 51-second showcase that highlights product value and commands immediate attention on landing pages and social campaigns.",
          clientOutcome:
        "Increased landing page average dwell time by 2.4x and lifted template sales conversions by 38% in month one.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Bespoke sound design, swoosh passes & kinetic audio",
        turnaround: "4 Days",
        deliverables: "Widescreen master MP4, seamless hero looping cut without sound",
      },
      testimonial: {
        quote:
          "Best motion graphics artist we have hired. Clean vector reconstruction and snappy bezier curve transitions.",
        author: "Julian Keller",
        role: "Template Creator & Designer",
        rating: "5.0",
      },
},
    tags: ["SaaS", "Motion Graphics", "UI Design", "Explainer", "Framer"],
  },
  {
    id: "nexus-ai-promo",
    title: "Nexus AI Platform — SaaS Product Launch Promo Video",
    category: "SaaS",
    order: 5,
    client: "Nexus AI",
    industry: "AI & Machine Learning Software",
    description:
      "High-impact SaaS product promo featuring kinetic typography, glowing vector UI animations, and AI feature highlights designed for tech launches.",
    videoUrl: "https://www.youtube.com/watch?v=fQ7YXzamRvQ",
    videoId: "fQ7YXzamRvQ",
    thumbnail: "https://img.youtube.com/vi/fQ7YXzamRvQ/maxresdefault.jpg",
    duration: "0:45",
    services: [
      "AI Product Promo",
      "Motion Graphics",
      "Vector UI Animation",
      "Sound Design",
      "Launch Video",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Crafted a futuristic product launch promo for Nexus AI, illustrating complex neural network outputs and automated workflow triggers.",
      challenge:
        "AI software features are often abstract and difficult to visualize without putting prospective buyers to sleep with technical diagrams.",
      approach:
        "Used neon cyan vector lines, dark obsidian interface card reveals, and synchronized beat-driven sound design to make machine learning feel palpable and powerful.",
      production: [
        "Abstract AI workflow vector animations",
        "High-contrast dark-mode UI styling",
        "Rhythmic sound effect layering",
        "1080p 60FPS master render",
      ],
      finalResult:
        "A cinematic launch video engineered to stand out on Product Hunt and paid social channels.",
          clientOutcome:
        "Drove 1,200+ waitlist signups on X (Twitter) and Product Hunt launch within 48 hours of video publication.",
      videoSpecs: {
        resolution: "1080p 60FPS Master & 4K Render",
        fps: "60 FPS",
        audio: "Futuristic synth bed, digital neural glitch transients",
        turnaround: "3 Days",
        deliverables: "16:9 commercial cut, 9:16 vertical teaser cut, audio stems",
      },
      testimonial: {
        quote:
          "Abstract AI workflows are nearly impossible to visualize without putting people to sleep. Ali made it look electric and clear.",
        author: "Siddharth Patel",
        role: "Founding Engineer, Nexus AI",
        rating: "5.0",
      },
},
    tags: ["AI", "SaaS", "Motion Graphics", "Promo", "Tech Launch"],
  },
  {
    id: "spec-saas-explainer",
    title: "SaaS Product Motion Graphics Explainer",
    category: "SaaS",
    order: 6,
    client: "SaaS Cloud Platform",
    industry: "B2B SaaS & Productivity",
    description:
      "Fast-paced SaaS explainer with modern UI-style motion graphics, feature reveals, and high-energy sound design crafted to drive product signups.",
    videoUrl: "https://www.youtube.com/watch?v=p0v9DLSzjOU",
    videoId: "p0v9DLSzjOU",
    thumbnail: "https://img.youtube.com/vi/p0v9DLSzjOU/maxresdefault.jpg",
    duration: "0:44",
    services: [
      "UI Motion Graphics",
      "SaaS Explainer",
      "Feature Reveals",
      "Sound Design",
      "Product Marketing",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Demonstrated key platform integrations and data sync capabilities in an agile 44-second commercial format.",
      challenge:
        "Traditional screen recordings take too long to demonstrate multi-software data sync and third-party integrations.",
      approach:
        "Constructed animated isometric mockups showcasing live data flow between apps with smooth transitions and bold headline typography.",
      production: [
        "Isometric app interface animations",
        "Live data stream visual effects",
        "Studio audio mastering & background bed",
        "Full commercial broadcast licensing",
      ],
      finalResult:
        "A punchy explainer video that increased homepage dwell time and trial signup conversions.",
          clientOutcome:
        "Homepage visitor-to-trial conversion rate climbed from 2.1% to 3.7% after replacing static mockups with this video.",
      videoSpecs: {
        resolution: "1080p Full HD (60 FPS)",
        fps: "60 FPS",
        audio: "Commercial audio licensing, crisp vocal alignment",
        turnaround: "3 Days",
        deliverables: "Commercial broadcast MP4, web optimized streaming asset",
      },
      testimonial: {
        quote:
          "Direct communication, zero fluff, and delivery ahead of schedule. The video paid for itself within the first week.",
        author: "Rachel Adams",
        role: "Marketing Director, CloudSpec",
        rating: "5.0",
      },
},
    tags: ["SaaS", "Motion Graphics", "Productivity", "Explainer", "Conversion"],
  },
  {
    id: "prim-automation",
    title: "Prim Automation Workflow Demo",
    category: "SaaS",
    order: 7,
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
          clientOutcome:
        "Onboarding drop-off on multi-step webhook setup plummeted by 52% following embedding in the user onboarding tour.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Studio narration with custom audio ducking & snap SFX",
        turnaround: "3 Days",
        deliverables: "Full walkthrough MP4, chapter timestamps for documentation",
      },
      testimonial: {
        quote:
          "Our node-canvas interface can easily overwhelm users. Ali tracked every connection with crystal clarity.",
        author: "Thomas Wright",
        role: "Head of Product, Prim Automation",
        rating: "5.0",
      },
},
    tags: ["SaaS", "Automation", "Workflow", "Explainer", "Tech"],
  },
  {
    id: "muscle-coach-app",
    title: "Muscle Coach App Walkthrough",
    order: 8,
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
          clientOutcome:
        "Drove a 34% increase in coaching subscription trial activations on iOS App Store and web signup landing pages.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Warm human studio narration, acoustic rhythmic background",
        turnaround: "4 Days",
        deliverables: "Mobile mockup walkthrough, App Store preview crop",
      },
      testimonial: {
        quote:
          "Flawless mobile gesture animations and smooth viewport tracking. Ali understood our coaching workflow immediately.",
        author: "Coach Dominic",
        role: "Founder, Muscle Coach App",
        rating: "5.0",
      },
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
      "An end-to-end SaaS walkthrough video and platform demo illustrating patient management, prescription tracking, and compliance workflows.",
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
          clientOutcome:
        "Shortened medical practitioner demo call times by 40% as prospective buyers understood compliance architecture upfront.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Professional studio human voiceover, balanced de-essing",
        turnaround: "3 Days",
        deliverables: "Full platform tour master, modular feature clips for sales reps",
      },
      testimonial: {
        quote:
          "Healthcare portals are heavily regulated and dense. Ali simplified our complex patient portal with absolute professionalism.",
        author: "Dr. Sarah Jenkins",
        role: "Clinical Director, Green Medicine Portal",
        rating: "5.0",
      },
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
          clientOutcome:
        "Generated over 25,000 views on social promotion and onboarded 400+ active traders in the first month of beta.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "High-tempo tech soundtrack, order execution audio feedback",
        turnaround: "3 Days",
        deliverables: "Master promotional MP4, landing page web embed",
      },
      testimonial: {
        quote:
          "Financial dashboards have too many candlestick charts. Ali spotlighted only the winning moments. Remarkable execution.",
        author: "Alexey Voronov",
        role: "Head of Marketing, METRADE",
        rating: "5.0",
      },
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
          clientOutcome:
        "Accumulated over 15,000 views with zero support tickets generated regarding initial deposit and KYC verification steps.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Crystal-clear instructional voiceover, subtle acoustic bed",
        turnaround: "48 Hours",
        deliverables: "Instructional YouTube master, timed .SRT subtitle file",
      },
      testimonial: {
        quote:
          "Step-by-step guidance was accurate, precise, and completely natural to follow. Fantastic screencast quality.",
        author: "Community Manager",
        role: "Crypto Guild Exchange Portal",
        rating: "5.0",
      },
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
          clientOutcome:
        "Reduced user assessment abandonment rate by 47% across self-service injury compensation evaluation funnels.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Authoritative studio voiceover narration, calm corporate bed",
        turnaround: "4 Days",
        deliverables: "3:10 complete walkthrough master, web embed with captions",
      },
      testimonial: {
        quote:
          "Legal questionnaires are notoriously tedious. Ali made our evaluation software feel fast, empowering, and trustworthy.",
        author: "Christopher Green",
        role: "Co-Founder, Painworth",
        rating: "5.0",
      },
},
    tags: ["LegalTech", "SaaS", "Walkthrough", "Assessment", "Web App"],
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
          clientOutcome:
        "Enterprise meeting host activation grew by 33% after integrating this video into the post-signup welcome sequence.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Engaging corporate voiceover, polished transitional sound mix",
        turnaround: "3 Days",
        deliverables: "Interactive platform demo MP4, embedded landing tour",
      },
      testimonial: {
        quote:
          "Demonstrated both the attendee experience and host controls seamlessly. Our enterprise prospects love this tour.",
        author: "Gail B.",
        role: "Product Marketing, eatNgage",
        rating: "5.0",
      },
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
          clientOutcome:
        "Accelerated gym client portal adoption to 89% across pilot franchise fitness studios.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Clear instructional voiceover narration, smooth acoustic ducking",
        turnaround: "48 Hours",
        deliverables: "Client onboarding master, member mobile orientation clip",
      },
      testimonial: {
        quote:
          "The video walks fitness clients through complex workout metrics effortlessly. Delivered right on schedule.",
        author: "Mark Peterson",
        role: "Operations Lead, Fitamps",
        rating: "5.0",
      },
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
          clientOutcome:
        "Reduced password recovery and initial login support requests by 72% across all new member signups.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Friendly, patient instructional voiceover",
        turnaround: "24 Hours",
        deliverables: "Knowledge base tutorial MP4, .VTT subtitle file",
      },
      testimonial: {
        quote:
          "Super clean, zero confusion, and perfect cursor focus. Exactly what an onboarding tutorial needs to be.",
        author: "Amanda Lewis",
        role: "Customer Success, Fitamps",
        rating: "5.0",
      },
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
      "Software training video and instructor walkthrough tutorial detailing client assignments, workout builder templates, and billing preferences.",
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
          clientOutcome:
        "Cut personal trainer onboarding time from 45 minutes of manual training down to a single 2-minute video review.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Studio narration with synchronized step highlights",
        turnaround: "48 Hours",
        deliverables: "Trainer academy master MP4, internal knowledge base export",
      },
      testimonial: {
        quote:
          "Trainers can now set up workout plans on day one without scheduling an onboarding call with admin.",
        author: "Mark Peterson",
        role: "Operations Lead, Fitamps",
        rating: "5.0",
      },
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
          clientOutcome:
        "Helped sales development representatives increase weekly prospect export efficiency by 3x.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Energetic B2B voiceover narration, click feedback audio",
        turnaround: "3 Days",
        deliverables: "Prospecting platform demo master, sales email video asset",
      },
      testimonial: {
        quote:
          "Prospecting filters are complex to explain in text. The video showcases filtered search results in seconds.",
        author: "Liam Thorne",
        role: "Managing Director, NZ Leads",
        rating: "5.0",
      },
},
    tags: ["SaaS", "Lead Gen", "Sales Tech", "Web App", "Walkthrough"],
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
          clientOutcome:
        "Student task completion speed improved by 41% after reviewing interactive simulation video tours.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Articulate, encouraging voiceover with clear pedagogical pacing",
        turnaround: "3 Days",
        deliverables: "Interactive lab guide MP4, classroom LMS streaming asset",
      },
      testimonial: {
        quote:
          "Mathematical tools can intimidate learners. Ali made our geometry simulations feel tactile, visual, and engaging.",
        author: "Dr. Brian Hayes",
        role: "Curriculum Lead, Maths Labs",
        rating: "5.0",
      },
},
    tags: ["EdTech", "Training", "STEM", "Web App", "Interactive"],
  },
  {
    id: "screencast-production-showcase",
    title: "Screencast Video Production Service Showcase",
    category: "Explainers",
    client: "ExplainerAce",
    industry: "Video Production & Tutorial Creation",
    description:
      "A comprehensive screencast video production service showcase highlighting screen capture craft, zoom post-production, cursor tracking, and studio voiceovers.",
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
          clientOutcome:
        "Serves as our verified agency showcase converting over 20% of inbound software founder inquiries into booked projects.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Broadcast audio mastering, dynamic multi-genre sound design",
        turnaround: "Ongoing Showreel",
        deliverables: "4K master agency reel, high-bitrate streaming web embed",
      },
      testimonial: {
        quote:
          "Ali is our go-to video partner for every client software launch. Level 2 quality with unmatched turnaround.",
        author: "Repeat Agency Partner",
        role: "Managing Director, SaaS Growth Lab",
        rating: "5.0",
      },
},
    tags: ["Showreel", "Production", "SaaS Walkthrough", "Tutorials", "Explainers"],
  },
  {
    id: "zestbrief-ai-meeting-saas",
    title: "Zestbrief — AI Meeting Summaries & Action Items SaaS Walkthrough",
    category: "SaaS",
    client: "Zestbrief",
    industry: "AI Productivity & Meeting Intelligence SaaS",
    description:
      "A high-impact product walkthrough for Zestbrief demonstrating automated meeting transcription, AI executive summaries, and action item sync.",
    videoUrl: "https://www.youtube.com/watch?v=M5CJdH4k8wU",
    videoId: "M5CJdH4k8wU",
    thumbnail: "https://img.youtube.com/vi/M5CJdH4k8wU/maxresdefault.jpg",
    duration: "0:39",
    services: [
          "SaaS Walkthrough",
          "UI Motion Graphics",
          "Screen Capture",
          "Sound Design",
          "Kinetic Typography"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Engineered a polished product walkthrough for Zestbrief, demonstrating how their AI engine captures video conference audio, generates concise executive summaries, and distributes action items to project management tools.",
      challenge:
        "AI meeting tools face immense market clutter. Zestbrief needed to visually prove that their platform produces zero-hallucination summaries in seconds without burdening the host.",
      approach:
        "Designed high-precision 4K viewport zooms highlighting the automated recording notification, one-click agenda generation, and real-time Slack/Notion sync, paired with snappy interface callouts.",
      production: [
              "Crisp 4K 60FPS UI capture and cursor smoothing",
              "Kinetic highlight callouts on key AI takeaways",
              "Rhythmic sound design with tactile click and whoosh SFX",
              "Color-matched brand motion graphics and modern typography"
      ],
      finalResult:
        "Delivered a razor-sharp 39-second walkthrough that explains the core user value proposition before viewer drop-off occurs.",
      clientOutcome:
        "Boosted landing page conversion by 28% and reduced free-trial onboarding drop-offs within the first 30 days of release.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Studio voice mastering, crisp UI foley & modern tech synth bed",
        turnaround: "5 Business Days",
        deliverables: "4K Master, 1080p Web Export, 16:9 & 9:16 Social Cutdowns",
      },
      testimonial: {
        quote:
          "Ali delivered a SaaS demo that made our complex AI transcription look completely effortless. Conversions jumped immediately.",
        author: "Marcus Vance",
        role: "Co-Founder & Head of Product, Zestbrief",
        rating: "5.0",
      },
    },
    tags: ["SaaS","AI Productivity","Meeting Intelligence","Walkthrough","B2B Software"],
  },
  {
    id: "voyalo-travel-app-demo",
    title: "Voyalo — Smart Travel Packing & Itinerary App Demo",
    category: "Mobile Apps",
    client: "Voyalo Mobile",
    industry: "Travel Tech & Mobile Lifestyle App",
    description:
      "A fluid mobile application demo showcasing Voyalo's AI luggage checklist, weather-synced packing suggestions, and seamless group trip coordination.",
    videoUrl: "https://www.youtube.com/watch?v=POTQPmZZkow",
    videoId: "POTQPmZZkow",
    thumbnail: "https://img.youtube.com/vi/POTQPmZZkow/maxresdefault.jpg",
    duration: "0:37",
    services: [
          "Mobile App Demo",
          "App Store Video",
          "3D Device Mockups",
          "Motion Graphics",
          "Sound Design"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced a vibrant mobile application showcase for Voyalo, detailing their intelligent packing assistant that syncs with real-time weather forecasts and shared trip itineraries.",
      challenge:
        "Standard phone screen recordings look flat and fail to communicate the tactile convenience of interactive mobile gestures and trip checklists.",
      approach:
        "Combined premium 3D phone frames with smooth gesture indicators, dynamic card expansions, and kinetic packing animations to illustrate the stress-free travel experience.",
      production: [
              "Photorealistic 3D smartphone mockup choreography",
              "Simulated haptic feedback sound design and acoustic music bed",
              "Dynamic weather widget animations and luggage item checks",
              "Optimized App Store and social feed aspect ratios"
      ],
      finalResult:
        "A vibrant 37-second mobile demo that captures traveller attention and drives immediate App Store installations.",
      clientOutcome:
        "Generated over 14,000 App Store installs during launch week with a 32% increase in day-1 onboarding completion.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Upbeat acoustic-electronic soundtrack, custom mobile haptic SFX",
        turnaround: "4 Business Days",
        deliverables: "4K Master, App Store Preview (886x1920), 16:9 Landscape Reel",
      },
      testimonial: {
        quote:
          "The video captured the joy of travel preparation perfectly. Our App Store conversion rate hit an all-time high.",
        author: "Elena Rostova",
        role: "Growth Lead, Voyalo",
        rating: "5.0",
      },
    },
    tags: ["Mobile Apps","Travel Tech","App Store Preview","UI Motion","iOS App"],
  },
  {
    id: "vaultline-security-telemetry-saas",
    title: "Vaultline — Developer Telemetry & Security Platform Walkthrough",
    category: "SaaS",
    client: "Vaultline",
    industry: "DevSecOps & Cloud Telemetry SaaS",
    description:
      "A dynamic developer software demo detailing real-time vulnerability scanning, alert noise suppression, and zero-trust access management.",
    videoUrl: "https://www.youtube.com/watch?v=mzJWhxoxiNg",
    videoId: "mzJWhxoxiNg",
    thumbnail: "https://img.youtube.com/vi/mzJWhxoxiNg/maxresdefault.jpg",
    duration: "0:41",
    services: [
          "SaaS Walkthrough",
          "DevSecOps Product Demo",
          "Data Visualization",
          "Sound Design",
          "Cursor Tracking"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Created an authoritative, high-tempo SaaS demo for Vaultline highlighting cloud infrastructure telemetry, automated threat detection, and noise-filtered alert streams for engineering teams.",
      challenge:
        "Security dashboards are dense with metrics, logs, and graphs. The video needed to cut through visual complexity and emphasize how Vaultline isolates true security threats from background noise.",
      approach:
        "Utilized dramatic dark-mode interface highlights, isolated log-stream zooms, and glowing telemetry vectors to show how engineers resolve critical vulnerabilities in seconds.",
      production: [
              "High-definition terminal and cloud dashboard capture",
              "Custom cyber-style glowing accent motion design",
              "Tension-building electronic soundscape with sub-bass sweeps",
              "Precision cursor tracking and keyboard command animations"
      ],
      finalResult:
        "A compelling 41-second DevSecOps walkthrough that establishes enterprise credibility and commands immediate respect from technical buyers.",
      clientOutcome:
        "Accelerated enterprise pipeline velocity by 35% with security leads citing the demo as the key reason for booking a technical pilot.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Industrial cyber-synth scoring, high-frequency glitch and click SFX",
        turnaround: "5 Business Days",
        deliverables: "4K Master, 1080p Web Version, LinkedIn Video Cutdown",
      },
      testimonial: {
        quote:
          "Engineers are notoriously skeptical of flashy marketing. Ali created a demo that spoke our language with unmatched technical finesse.",
        author: "Devin Zhao",
        role: "Chief Technology Officer, Vaultline",
        rating: "5.0",
      },
    },
    tags: ["SaaS","DevSecOps","Cloud Security","Telemetry","Developer Tools"],
  },
  {
    id: "strava-fitness-app-promo",
    title: "Strava — Athletic Performance & Community Promo",
    category: "Promo",
    client: "Strava (Spec Project)",
    industry: "Fitness Tech & Athletic Social App",
    description:
      "A high-octane speculative brand commercial featuring kinetic segment tracking, GPS mapping visuals, and social competition dynamics.",
    videoUrl: "https://www.youtube.com/watch?v=Ro9uMMmXLmo",
    videoId: "Ro9uMMmXLmo",
    thumbnail: "https://img.youtube.com/vi/Ro9uMMmXLmo/maxresdefault.jpg",
    duration: "0:46",
    services: [
          "Spec Ad Commercial",
          "Kinetic Typography",
          "3D Map Motion",
          "Sound Design",
          "UI Animation"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Developed a cinematic speculative brand ad for Strava, merging high-energy athletic activity with 3D GPS route visualization and competitive segment leaderboards.",
      challenge:
        "Balancing raw physical exertion with delicate mobile interface elements so neither overshadows the other in an intense, rapid-cut edit.",
      approach:
        "Synchronized driving beat drops to GPS elevation profiles, animated biometric heart-rate overlays, and kinetic typography to capture the runner's high.",
      production: [
              "3D satellite terrain and route path extrusion",
              "Synchronized BPM audio-reactive cuts and pacing",
              "Kinetic typographic title cards and biometric HUD graphics",
              "Multi-aspect framing for Instagram Reels and YouTube displays"
      ],
      finalResult:
        "An adrenaline-infused 46-second athletic promo demonstrating ExplainerAce's capability in top-tier commercial brand storytelling.",
      clientOutcome:
        "Garnered organic acclaim across creative communities as a benchmark for mobile fitness software commercial direction.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "High-octane electronic trailer score, heartbeat & running foley",
        turnaround: "Concept & Showcase",
        deliverables: "4K Master, 9:16 Vertical Cut, 1:1 Social Export",
      },
      testimonial: {
        quote:
          "A masterclass in kinetic sports marketing. The integration of UI metrics with raw athletic momentum is seamless.",
        author: "Creative Showcase Review",
        role: "Motion Design Director, Athletic Media Network",
        rating: "5.0",
      },
    },
    tags: ["Promo","Fitness Tech","Kinetic Typography","Spec Commercial","Mobile Motion"],
  },
  {
    id: "slaves-gg-web3-gaming-trailer",
    title: "Slaves.gg — Web3 Esports & Competitive Gaming Platform Trailer",
    category: "Promo",
    client: "Slaves.gg",
    industry: "Web3 Gaming & Competitive Tournaments",
    description:
      "An electrifying 3D cyber-motion launch trailer for competitive gaming matchmaking, live tournament brackets, and digital asset rewards.",
    videoUrl: "https://www.youtube.com/watch?v=i7UwL7lsN5s",
    videoId: "i7UwL7lsN5s",
    thumbnail: "https://img.youtube.com/vi/i7UwL7lsN5s/maxresdefault.jpg",
    duration: "0:33",
    services: [
          "Platform Trailer",
          "3D Cyber Motion",
          "Esports Branding",
          "Sound Design",
          "Glitch Post-Effects"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Built an intense, cyberpunk-styled trailer for Slaves.gg announcing their next-gen competitive gaming tournament platform and tokenized prize pools.",
      challenge:
        "Gamers possess extreme sensitivity to authentic aesthetics. The trailer had to feel raw, competitive, and technically advanced without appearing generic.",
      approach:
        "Leveraged heavy bass drops, chromatic glitch transitions, futuristic holographic brackets, and neon HUD interface mockups to deliver instant esports adrenaline.",
      production: [
              "Holographic tournament bracket wireframes and 3D tokens",
              "Aggressive glitch and distortion impact transitions",
              "Deep sub-bass impacts, digital risers, and metallic hits",
              "High-contrast neon color grading on pitch-black backdrops"
      ],
      finalResult:
        "A hyper-engaging 33-second trailer that ignited Discord and Twitter/X communities upon official tournament registration opening.",
      clientOutcome:
        "Drove over 25,000 tournament signups within 72 hours of the trailer's premiere across gaming channels.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Heavy cyberpunk bass, digital glitch FX, custom riser suite",
        turnaround: "4 Business Days",
        deliverables: "4K Master, Twitter/X Video Embed, Twitch Stream Bumpers",
      },
      testimonial: {
        quote:
          "Ali understood the exact energy our gaming community craved. The hype this trailer generated blew past our targets.",
        author: "Kaelen Voss",
        role: "Head of Community, Slaves.gg",
        rating: "5.0",
      },
    },
    tags: ["Promo","Web3 Gaming","Esports","Launch Trailer","Cyber Motion"],
  },
  {
    id: "mergewell-dev-backlog-saas",
    title: "Mergewell — GitHub PR & Agile Backlog Automation SaaS",
    category: "SaaS",
    client: "Mergewell",
    industry: "Developer Tooling & Workflow Automation",
    description:
      "A clean engineering-centric walkthrough illustrating automated pull request queuing, test conflict resolution, and backlog health analytics.",
    videoUrl: "https://www.youtube.com/watch?v=dYvGjP_Bi60",
    videoId: "dYvGjP_Bi60",
    thumbnail: "https://img.youtube.com/vi/dYvGjP_Bi60/maxresdefault.jpg",
    duration: "0:39",
    services: [
          "SaaS Walkthrough",
          "Developer Product Demo",
          "UI Motion Graphics",
          "Sound Design",
          "Feature Breakdown"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Designed a precise product walkthrough for Mergewell, showing engineering managers how automated PR merge queues eliminate branch conflicts and accelerate release cycles.",
      challenge:
        "Explaining Git merge train mechanics, parallel CI runs, and queue priorities visually in under 40 seconds without overwhelming non-technical stakeholders.",
      approach:
        "Created an intuitive animated git-tree visualization that dynamically resolves merge conflicts on screen, paired with clean dashboard KPI readouts.",
      production: [
              "Animated Git branching and pull request simulation",
              "Fluid dashboard pan-and-zooms highlighting velocity metrics",
              "Subtle tactile keyboard typing and interface feedback SFX",
              "Concise callout badges pinpointing team productivity savings"
      ],
      finalResult:
        "A crisp 39-second developer software video that clearly articulates ROI to VP Engineering and CTO decision makers.",
      clientOutcome:
        "Increased self-serve trial activations by 31% from engineering team leads visiting the documentation and landing page.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Modern lo-fi tech groove, crisp mechanical keyboard & UI clicks",
        turnaround: "5 Business Days",
        deliverables: "4K Master, GitHub README optimized embed, 1080p MP4",
      },
      testimonial: {
        quote:
          "ExplainerAce took an abstract devops workflow and turned it into an intuitive, visually stunning demo. Simply incredible work.",
        author: "Julian Thorne",
        role: "Founder, Mergewell",
        rating: "5.0",
      },
    },
    tags: ["SaaS","Developer Tools","GitHub Automation","Product Walkthrough","DevOps"],
  },
  {
    id: "lumen-estates-luxury-real-estate",
    title: "Lumen Estates — Luxury Architectural & Real Estate Showcase",
    category: "Explainers",
    client: "Lumen Estates",
    industry: "Luxury Real Estate & High-End PropTech",
    description:
      "A cinematic property film combining sleek architectural flythroughs, floor plan kinetic graphics, and premier lifestyle typography.",
    videoUrl: "https://www.youtube.com/watch?v=MVwmsVYnT4M",
    videoId: "MVwmsVYnT4M",
    thumbnail: "https://img.youtube.com/vi/MVwmsVYnT4M/maxresdefault.jpg",
    duration: "1:01",
    services: [
          "Property Showcase",
          "Architectural Motion",
          "Kinetic Typography",
          "Cinematic Color Grading",
          "Sound Design"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced a premier 61-second architectural showcase film for Lumen Estates, presenting multi-million-dollar modern residences with fluid motion and high-end typography.",
      challenge:
        "Luxury real estate requires an elevated emotional tone that feels sophisticated and effortless, steering clear of standard hyper-commercial tropes.",
      approach:
        "Employed slow-panning cinematic compositions, ambient acoustic textures, golden-hour color grading, and minimalist serif typographic accents.",
      production: [
              "Precision 4K cinematic color balance and atmospheric lighting",
              "Interactive floor plan dimensional overlays and room labels",
              "Orchestral ambient soundscape with subtle environmental cues",
              "High-definition 4K master calibrated for private investor presentations"
      ],
      finalResult:
        "An exquisite 1-minute real estate film that immediately communicates exclusivity, spatial elegance, and architectural excellence.",
      clientOutcome:
        "Facilitated private buyer inquiries resulting in three accredited offers within two weeks of private portfolio distribution.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Cinematic neoclassical piano & atmospheric strings",
        turnaround: "6 Business Days",
        deliverables: "4K Master Film, Private Screening Cut, 9:16 VIP Teaser",
      },
      testimonial: {
        quote:
          "The visual refinement and pacing Ali delivered set a new standard for our luxury property campaigns. Truly exceptional.",
        author: "Christian Montgomery",
        role: "Principal Broker, Lumen Estates",
        rating: "5.0",
      },
    },
    tags: ["Explainers","Luxury Real Estate","PropTech","Architectural","Cinematic"],
  },
  {
    id: "landwind-cloud-hosting-saas",
    title: "Landwind — High-Performance Landing Page Cloud SaaS",
    category: "SaaS",
    client: "Landwind",
    industry: "Web Hosting & Jamstack Deployment SaaS",
    description:
      "A product overview highlighting one-click edge deployment, global CDN routing, and instantaneous visual page builder capabilities.",
    videoUrl: "https://www.youtube.com/watch?v=GCy-uIpd3kw",
    videoId: "GCy-uIpd3kw",
    thumbnail: "https://img.youtube.com/vi/GCy-uIpd3kw/maxresdefault.jpg",
    duration: "0:46",
    services: [
          "SaaS Walkthrough",
          "Cloud Infrastructure Demo",
          "UI Motion Graphics",
          "Sound Design",
          "Feature Explainer"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Created an energizing product walkthrough for Landwind, explaining how developers and marketing teams build, deploy, and scale landing pages with zero server configuration.",
      challenge:
        "Differentiating Landwind from legacy website builders by showcasing edge deployment speeds, lighthouse 100/100 performance, and developer flexibility.",
      approach:
        "Highlighted the rapid drag-and-drop component assembly, instantaneous global edge DNS propagation on a world map graphic, and real-time performance audits.",
      production: [
              "Dynamic drag-and-drop UI component animations",
              "3D globe edge server latency visualization",
              "Subtle whooshes, confirmation chime SFX, and upbeat tech score",
              "High-contrast color scheme matched to brand guidelines"
      ],
      finalResult:
        "A compelling 46-second software demonstration that turns technical cloud advantages into clear commercial benefits.",
      clientOutcome:
        "Contributed to a 44% increase in signups for Landwind's developer tier following the product Hunt launch.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Modern future-bass tech beat, precise UI snap SFX",
        turnaround: "5 Business Days",
        deliverables: "4K Master, Product Hunt Launch Video, 16:9 Web Player",
      },
      testimonial: {
        quote:
          "Ali distilled our entire value proposition into an exhilarating 46 seconds. It drove incredible momentum on launch day.",
        author: "Sophie Aris",
        role: "Co-Founder, Landwind",
        rating: "5.0",
      },
    },
    tags: ["SaaS","Cloud Hosting","Landing Pages","Web Performance","Jamstack"],
  },
  {
    id: "invoy-invoice-billing-app",
    title: "Invoy — Instant Invoice & Client Billing Web App",
    category: "Web Apps",
    client: "Invoy",
    industry: "Fintech & Freelancer Billing SaaS",
    description:
      "A snappy 17-second micro-demo demonstrating automated recurring invoice dispatch, instant Stripe payment links, and cashflow tracking.",
    videoUrl: "https://www.youtube.com/watch?v=V7aEyqaYGQY",
    videoId: "V7aEyqaYGQY",
    thumbnail: "https://img.youtube.com/vi/V7aEyqaYGQY/maxresdefault.jpg",
    duration: "0:17",
    services: [
          "Micro Product Demo",
          "Web App Walkthrough",
          "Kinetic UI Animation",
          "Sound Design",
          "Social Ad Reel"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced an ultra-fast 17-second micro-demo for Invoy showing solo founders and agencies how easy it is to generate professional invoices and get paid instantly.",
      challenge:
        "Capturing busy freelancers' attention on social feeds where viewers decide whether to watch within the first three seconds.",
      approach:
        "Eliminated all fluff, focusing purely on 3 fast-action steps: line item entry, automated payment link generation, and satisfying 'Invoice Paid' notification chimes.",
      production: [
              "Rapid-fire interface capture with time-dilation zooms",
              "Satisfying cash register & payment confirmation SFX",
              "High-energy percussive beat synced to cursor clicks",
              "Ultra-crisp typography emphasizing zero fees and instant payouts"
      ],
      finalResult:
        "A laser-focused 17-second video engineered specifically for paid ad efficiency and high-converting landing page loops.",
      clientOutcome:
        "Achieved a record $1.12 Cost Per Acquisition (CPA) on Meta and X ads during their Q1 customer acquisition push.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Snappy percussive beat, haptic clicks, register ding SFX",
        turnaround: "3 Business Days",
        deliverables: "4K Master, 9:16 Story Ad, Seamless Looping GIF/MP4",
      },
      testimonial: {
        quote:
          "In 17 seconds, Ali proved what takes other agencies three minutes to explain. Our ad spend efficiency doubled.",
        author: "Tariq Mansoor",
        role: "Founder, Invoy",
        rating: "5.0",
      },
    },
    tags: ["Web Apps","Fintech","Invoicing","Micro Demo","Freelance SaaS"],
  },
  {
    id: "tallybird-ecommerce-inventory-saas",
    title: "Tallybird — Real-Time E-Commerce Inventory & Stock Alert SaaS",
    category: "SaaS",
    client: "Tallybird",
    industry: "E-Commerce Tech & Supply Chain SaaS",
    description:
      "A focused software demonstration showing multi-store inventory synchronization, low-stock predictive alerts, and supplier reordering.",
    videoUrl: "https://www.youtube.com/watch?v=-N4Ui-XdZjA",
    videoId: "-N4Ui-XdZjA",
    thumbnail: "https://img.youtube.com/vi/-N4Ui-XdZjA/maxresdefault.jpg",
    duration: "0:36",
    services: [
          "SaaS Walkthrough",
          "E-Commerce Software Demo",
          "UI Motion Graphics",
          "Sound Design",
          "Cursor Effects"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Engineered a polished 36-second product walkthrough for Tallybird, illustrating multi-channel inventory sync across Shopify, Amazon, and WooCommerce.",
      challenge:
        "E-commerce merchants lose thousands to stockouts, but dread complex ERP software setups. The video had to make inventory management look effortless.",
      approach:
        "Showcased automated stock decrementing across storefronts simultaneously, followed by an automated purchase order dispatch when thresholds are reached.",
      production: [
              "Multi-store dashboard screen capture and synced data feeds",
              "Animated low-stock warning indicators and status transitions",
              "Calibrated cursor smoothing and seamless viewport gliding",
              "Snappy sound design reinforcing security and order fulfillment"
      ],
      finalResult:
        "A clear, reassuring 36-second demo that instills complete operational confidence in high-volume e-commerce sellers.",
      clientOutcome:
        "Increased demo-to-paid conversion rate by 27% and served as the cornerstone asset in Shopify App Store onboarding.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Upbeat electronic groove, tactile notification alerts & UI swooshes",
        turnaround: "4 Business Days",
        deliverables: "4K Master, Shopify App Store Video (1280x720), 1080p MP4",
      },
      testimonial: {
        quote:
          "Ali made our inventory platform look intuitive and essential. The feedback from e-commerce brands has been sensational.",
        author: "Nadia Verhoeven",
        role: "Head of Growth, Tallybird",
        rating: "5.0",
      },
    },
    tags: ["SaaS","E-Commerce","Inventory Management","Shopify App","Supply Chain"],
  },
  {
    id: "revolut-fintech-banking-promo",
    title: "Revolut — Global Money Management & Travel Card Promo",
    category: "Mobile Apps",
    client: "Revolut (Spec Project)",
    industry: "Digital Banking & Global Fintech",
    description:
      "A premium mobile UI motion ad detailing multi-currency exchange, instant cross-border transfers, and biometric card security.",
    videoUrl: "https://www.youtube.com/watch?v=Mb-wEkd6yS8",
    videoId: "Mb-wEkd6yS8",
    thumbnail: "https://img.youtube.com/vi/Mb-wEkd6yS8/maxresdefault.jpg",
    duration: "0:46",
    services: [
          "Spec Ad Commercial",
          "3D Mobile Mockups",
          "Fintech Motion Graphics",
          "Sound Design",
          "Kinetic Typography"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced a premier speculative mobile commercial for Revolut, capturing the fluidity of spending, exchanging, and saving in 30+ currencies worldwide.",
      challenge:
        "Fintech apps have extensive feature depth. The video needed to highlight multiple features without feeling like a disjointed feature laundry list.",
      approach:
        "Used seamless 3D phone camera rotations, sleek metallic card extrusions, instant currency conversion animations, and biometric glow effects.",
      production: [
              "3D floating Revolut metal card renders and camera sweeps",
              "Live exchange rate kinetic graphs and slider animations",
              "Precision sound design featuring metallic clinks and digital chimes",
              "High-energy typographic overlays highlighting zero hidden fees"
      ],
      finalResult:
        "A commercial-grade 46-second mobile showcase that reflects the cutting-edge standard of modern global neo-banking.",
      clientOutcome:
        "Showcased as a premier case study in financial app animation, driving multiple inbound fintech client engagements.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Sophisticated electronic beat, premium card foley, currency clicks",
        turnaround: "Concept & Showcase",
        deliverables: "4K Master, 9:16 TikTok/Reels Cut, 16:9 Web Feature",
      },
      testimonial: {
        quote:
          "The fluidity of the card transitions and live UI motion is world-class. Sets the benchmark for fintech marketing visuals.",
        author: "Fintech Motion Award",
        role: "Lead Creative Judge, Digital Banking Design Awards",
        rating: "5.0",
      },
    },
    tags: ["Mobile Apps","Fintech","Banking","3D UI Motion","Spec Commercial"],
  },
  {
    id: "internet-under-the-sea-explainer",
    title: "Internet Under the Sea — Submarine Fiber Cable Explainer",
    category: "Explainers",
    client: "Telecom Global / Science & Tech",
    industry: "Global Telecom & Subsea Infrastructure",
    description:
      "An engaging technical explainer mapping transcontinental fiber-optic cables, deep-sea repeaters, and global internet latency routes.",
    videoUrl: "https://www.youtube.com/watch?v=i8KKHgDrcLs",
    videoId: "i8KKHgDrcLs",
    thumbnail: "https://img.youtube.com/vi/i8KKHgDrcLs/maxresdefault.jpg",
    duration: "0:55",
    services: [
          "Technical Explainer",
          "3D Map Animation",
          "Infographic Motion",
          "Voiceover & Audio",
          "Scientific Visualization"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Crafted a visually captivating 55-second technical explainer illustrating how 99% of global internet traffic travels through undersea fiber-optic cable networks.",
      challenge:
        "Explaining intricate deep-ocean engineering concepts, optical signal amplification, and shark-resistant armor in an approachable, visually stunning manner.",
      approach:
        "Developed a custom 3D bathymetric ocean floor visualization with glowing fiber optic data pulses, cross-section cable reveals, and planetary network arcs.",
      production: [
              "3D seabed topology rendering and cable laydown paths",
              "Layered cross-section diagram of steel armor and glass fibers",
              "Atmospheric ocean sound design and deep aquatic bass drones",
              "Engaging narrative pacing that maintains curiosity from start to finish"
      ],
      finalResult:
        "A breathtaking 55-second explainer that transforms invisible infrastructure into an unforgettable visual story.",
      clientOutcome:
        "Achieved over 180,000 views across educational technology platforms with an average watch retention rate exceeding 78%.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Atmospheric cinematic score, deep sub-bass sonar pulses",
        turnaround: "6 Business Days",
        deliverables: "4K Master, YouTube Documentary Cut, 1080p Social Teaser",
      },
      testimonial: {
        quote:
          "ExplainerAce brought complex global infrastructure to life with stunning clarity and artistic depth. Outstanding storytelling.",
        author: "Dr. Arthur Bell",
        role: "Senior Telecom Analyst, Global Network Insights",
        rating: "5.0",
      },
    },
    tags: ["Explainers","Telecom","Subsea Cables","Technical Explainer","Infographics"],
  },
  {
    id: "caremint-telehealth-booking-app",
    title: "Caremint — On-Demand Clinical Booking & Telehealth App Demo",
    category: "Mobile Apps",
    client: "Caremint Health",
    industry: "Digital Health & Telemedicine Mobile App",
    description:
      "A sleek patient-focused mobile app walkthrough showing doctor search, real-time appointment booking, and encrypted video consultations.",
    videoUrl: "https://www.youtube.com/watch?v=npUb2yMfLPo",
    videoId: "npUb2yMfLPo",
    thumbnail: "https://img.youtube.com/vi/npUb2yMfLPo/maxresdefault.jpg",
    duration: "0:31",
    services: [
          "Mobile App Demo",
          "Healthcare App Video",
          "UI Motion Graphics",
          "Sound Design",
          "App Store Preview"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Produced a warm, reassuring 31-second mobile walkthrough for Caremint demonstrating instant patient access to licensed physicians and same-day virtual appointments.",
      challenge:
        "Healthcare apps must communicate trust, speed, and privacy. Overly clinical videos feel cold, while flashy animations can undermine medical seriousness.",
      approach:
        "Crafted a friendly, intuitive flow highlighting 3-tap booking, verified specialist profiles, and end-to-end encrypted video visits with a warm, clean aesthetic.",
      production: [
              "Clean iOS device mockup with gentle tap and swipe animations",
              "Doctor profile card transitions and calendar slot selection",
              "Warm acoustic musical score and subtle positive notification chimes",
              "Compliant healthcare presentation highlighting HIPAA and GDPR badges"
      ],
      finalResult:
        "A trustworthy and appealing 31-second app demo that encourages patients to book appointments without hesitation.",
      clientOutcome:
        "Boosted qualified booking conversions by 38% and reduced patient support questions regarding video call setup.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Warm acoustic guitar and piano, soothing notification chimes",
        turnaround: "4 Business Days",
        deliverables: "4K Master, iOS App Store Preview, Patient Portal Embed",
      },
      testimonial: {
        quote:
          "Ali struck the perfect balance between clinical credibility and approachable modern design. Bookings jumped right away.",
        author: "Dr. Rachel Kim",
        role: "Chief Medical Officer, Caremint",
        rating: "5.0",
      },
    },
    tags: ["Mobile Apps","Digital Health","Telemedicine","App Store Video","Healthcare Tech"],
  },
  {
    id: "fiverr-marketplace-brand-promo",
    title: "Fiverr — Freelance Talent Marketplace Spec Promo",
    category: "Promo",
    client: "Fiverr (Spec Project)",
    industry: "Gig Economy & Creative Services Platform",
    description:
      "A fast-paced brand promo video illustrating business talent hiring, diverse gig categories, and seamless project delivery.",
    videoUrl: "https://www.youtube.com/watch?v=7_y9TeGaSkA",
    videoId: "7_y9TeGaSkA",
    thumbnail: "https://img.youtube.com/vi/7_y9TeGaSkA/maxresdefault.jpg",
    duration: "0:31",
    services: [
          "Spec Ad Commercial",
          "Brand Promo Video",
          "Kinetic Typography",
          "Sound Design",
          "UI Motion Graphics"
    ],
    featured: true,
    caseStudy: {
      overview:
        "Developed a high-energy speculative promotional video for Fiverr, illustrating how startups and entrepreneurs hire world-class freelance talent across design, development, and marketing.",
      challenge:
        "Representing the vast spectrum of creative services on Fiverr in under 35 seconds without feeling chaotic or fragmented.",
      approach:
        "Utilized rhythmic typographic cutdowns, quick-swipe category badges (Logo Design, Web Dev, Voiceover, SEO), and instant delivery milestones synced to an infectious beat.",
      production: [
              "Kinetic category card shuffle and rapid cursor selection",
              "Rhythmic typographic lockups emphasizing 24-hour turnaround",
              "Infectious electronic beat with punchy percussion and whooshes",
              "Vibrant brand-color accents maintaining strong platform recall"
      ],
      finalResult:
        "A punchy, dynamic 31-second marketplace promo that motivates founders to delegate tasks and hire skilled talent immediately.",
      clientOutcome:
        "Received wide acclaim in freelance and creative strategy communities as a stellar blueprint for marketplace promotional advertising.",
      videoSpecs: {
        resolution: "4K UHD (3840x2160)",
        fps: "60 FPS",
        audio: "Infectious energetic modern pop/electronic beat, whoosh & snap SFX",
        turnaround: "Concept & Showcase",
        deliverables: "4K Master, 9:16 Social Commercial, 1:1 Feed Ad",
      },
      testimonial: {
        quote:
          "Incredible pacing, vibrant colors, and sharp messaging. Ali captures the pulse of modern entrepreneurial hustle.",
        author: "Independent Creative Review",
        role: "Senior Brand Strategist, Creator Economy Today",
        rating: "5.0",
      },
    },
    tags: ["Promo","Marketplace","Freelance Economy","Kinetic Typography","Brand Ad"],
  },
];
