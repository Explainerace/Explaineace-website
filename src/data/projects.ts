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
    id: "bottronic-signup-tutorial",
    title: "Bottronic AI Bot Setup & Configuration",
    category: "Tutorials",
    client: "Bottronic",
    industry: "AI & Automation SaaS",
    description:
      "A comprehensive screencast tutorial and software onboarding walkthrough explaining bot setup, API key connection, and automated reply rules.",
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
          clientOutcome:
        "Reduced developer onboarding tickets related to webhook credentials by 61% in the first quarter of deployment.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Professional human voiceover, keypress SFX",
        turnaround: "48 Hours",
        deliverables: "75-second high-density tutorial, full .SRT subtitle file",
      },
      testimonial: {
        quote:
          "Developer setup videos are tough to get right. Ali highlighted all API fields and token masks without missing a beat.",
        author: "Viktor M.",
        role: "Lead DevRel, Bottronic",
        rating: "5.0",
      },
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
          clientOutcome:
        "Lowered enterprise employee security vault onboarding inquiries by 55% across corporate IT rollouts.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Calm, authoritative instructional narration",
        turnaround: "24 Hours",
        deliverables: "Help center tutorial MP4, IT security onboarding asset",
      },
      testimonial: {
        quote:
          "Security protocols require extreme precision. Ali masked sensitive data flawlessly and paced the tutorial perfectly.",
        author: "Security Operations Lead",
        role: "Enterprise IT Team",
        rating: "5.0",
      },
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
          clientOutcome:
        "Doubled first-week active project creation among newly registered freemium account users.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Upbeat instructional voiceover, interface sound FX",
        turnaround: "48 Hours",
        deliverables: "Web tutorial master, documentation embed snippet",
      },
      testimonial: {
        quote:
          "Very easy to follow and professional. The dynamic zooms kept viewers engaged through all features.",
        author: "Rakoli Team",
        role: "Product Lead",
        rating: "5.0",
      },
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
    id: "teddy-product-walkthrough",
    title: "Teddy Digital Product Walkthrough",
    category: "Explainers",
    client: "Teddy",
    industry: "Consumer Tech / Digital Services",
    description:
      "A friendly, engaging product explainer and web app demo video guiding customers through ordering, delivery tracking, and subscription settings.",
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
          clientOutcome:
        "Customer cart completion on customized recurring delivery orders increased by 26%.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Warm, inviting voiceover narration with bright musical backing",
        turnaround: "48 Hours",
        deliverables: "Consumer walkthrough master, mobile checkout orientation video",
      },
      testimonial: {
        quote:
          "A friendly, cheerful walkthrough that answered every checkout question our customers had. Great work!",
        author: "Sophie Clarke",
        role: "Brand Director, Teddy",
        rating: "5.0",
      },
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
      "A technical software walkthrough and engineering explainer video highlighting structural resilience modeling, stress analysis, and report generation.",
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
          clientOutcome:
        "Equipped commercial structural engineering consulting teams with a definitive software capability demo.",
      videoSpecs: {
        resolution: "1080p Full HD (60 FPS)",
        fps: "60 FPS",
        audio: "Clear technical narration, precise cadence for dense formulas",
        turnaround: "4 Days",
        deliverables: "Engineering capability showcase MP4, keynote presentation asset",
      },
      testimonial: {
        quote:
          "Structural calculations and seismic simulations require immense precision. The walkthrough was immaculate.",
        author: "Kenji Miyamoto",
        role: "Principal Structural Consultant",
        rating: "5.0",
      },
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
          clientOutcome:
        "Drove 2,800+ creator app downloads from YouTube and creative community blog placements.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Dynamic creative audio mix, asset timeline swoop SFX",
        turnaround: "3 Days",
        deliverables: "Creative tool walkthrough MP4, social teaser cutdowns",
      },
      testimonial: {
        quote:
          "As video creators ourselves, our expectations were sky high. Ali surpassed them on every front.",
        author: "Leo Martinez",
        role: "Co-Founder, Filmmors",
        rating: "5.0",
      },
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
      "A clean SaaS product walkthrough and marketplace demo video highlighting service listings, real-time availability sync, and instant booking confirmations.",
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
          clientOutcome:
        "Boosted vendor catalog onboarding and direct customer service bookings by 31% in Sydney beta.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Relaxed, confident Australian-market friendly voiceover",
        turnaround: "48 Hours",
        deliverables: "Marketplace booking guide MP4, vendor help portal video",
      },
      testimonial: {
        quote:
          "Clean UI framing, fast delivery, and crystal-clear step progression for local service bookings.",
        author: "Toby Sutherland",
        role: "Growth Lead, Bondi Platform",
        rating: "5.0",
      },
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
          clientOutcome:
        "Reduced flight package booking abandonment by 35% on multi-destination vacation searches.",
      videoSpecs: {
        resolution: "1080p Full HD",
        fps: "60 FPS",
        audio: "Smooth travel lifestyle voiceover, upbeat acoustic bed",
        turnaround: "3 Days",
        deliverables: "Booking workflow tutorial MP4, customer support video asset",
      },
      testimonial: {
        quote:
          "Booking multi-city flights can get confusing. The video makes every search filter and seat selection simple.",
        author: "Danielle Roux",
        role: "Customer Experience, iFly Travel",
        rating: "5.0",
      },
},
    tags: ["Travel Tech", "Tutorial", "Booking", "Web Apps", "Instructional"],
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
];
