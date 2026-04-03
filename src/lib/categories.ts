export type Project = {
  title: string
  tags: [string, string]
  descriptor: string
  img: string
}

export type Category = {
  slug: string
  name: string
  img: string
  height: string
  bullets: string[]
  projects: Project[]
}

export const CATEGORIES: Category[] = [
  {
    slug: "creative-direction",
    name: "Creative Direction",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600",
    height: "720px",
    bullets: [
      "Creative direction + art direction",
      "Campaign concepting (menu drops, seasonal, events)",
      "Shot lists + production planning",
      "Moodboards + visual references",
      "Styling direction (food styling, props, wardrobe)",
    ],
    projects: [
      {
        title: "Harvest Menu Drop",
        tags: ["Restaurant", "F&B"],
        descriptor: "Campaign Strategy",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Summer Activation",
        tags: ["Beverage", "Seasonal"],
        descriptor: "Art Direction",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Brand Rollout",
        tags: ["Retail", "Launch"],
        descriptor: "Visual Strategy",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "photography",
    name: "Photography",
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1600",
    height: "860px",
    bullets: [
      "Food, beverage, and lifestyle photography",
      "Interior / hospitality and event photography",
      "Edited photo galleries (web + social optimized)",
      "Hero image sets for campaigns",
      "Press-ready photo assets",
    ],
    projects: [
      {
        title: "Hero Dish Series",
        tags: ["Food", "Editorial"],
        descriptor: "Commercial",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Interior Story",
        tags: ["Hospitality", "Lifestyle"],
        descriptor: "Editorial",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Event Recap",
        tags: ["Events", "Social"],
        descriptor: "Event Coverage",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "branding",
    name: "Branding",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
    height: "560px",
    bullets: [
      "Branding development + refresh",
      "Visual identity systems",
      "Brand voice + messaging support",
      "Logo suite + brand guidelines",
      "Social media look + feel system",
    ],
    projects: [
      {
        title: "Noire Collective",
        tags: ["Identity", "Logo"],
        descriptor: "Brand Identity",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Gather & Co.",
        tags: ["F&B", "Rebrand"],
        descriptor: "Visual System",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "East Side Spirits",
        tags: ["Beverage", "Retail"],
        descriptor: "Brand Refresh",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "campaigns",
    name: "Campaigns",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1600",
    height: "620px",
    bullets: [
      "Promotional design + campaign rollouts",
      "Launch content kits (openings, new menus, seasonal promos)",
      "Event flyers, poster designs, and digital screen designs",
      "Launch content plan + rollout calendar",
      "Paid social ads management + boosting strategy",
    ],
    projects: [
      {
        title: "Grand Opening Kit",
        tags: ["Launch", "F&B"],
        descriptor: "Launch Strategy",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Fall Promo Suite",
        tags: ["Seasonal", "Retail"],
        descriptor: "Campaign Rollout",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "New Menu Reveal",
        tags: ["Restaurant", "Social"],
        descriptor: "Promo Design",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "production",
    name: "Production",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600",
    height: "680px",
    bullets: [
      "Short-form video creation (Reels / TikTok / Shorts)",
      "Cinematic brand films + commercials",
      "Website hero videos + homepage loops",
      "Professional editing, color correction, and audio cleanup",
      "Serialized content (Interview series, \"Behind the Menu\")",
    ],
    projects: [
      {
        title: "Behind the Menu",
        tags: ["Series", "F&B"],
        descriptor: "Serialized Content",
        img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Brand Film",
        tags: ["Commercial", "Cinematic"],
        descriptor: "Brand Film",
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Reel Pack",
        tags: ["Short-Form", "Social"],
        descriptor: "Short-Form",
        img: "https://images.unsplash.com/photo-1536240478700-b869ad10e2c8?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600",
    height: "780px",
    bullets: [
      "Full social media management + strategy",
      "Monthly content calendars + reporting",
      "Community management + trend research",
      "Monthly content capture days + retainer packages",
      "Story packs + Reels bundles",
    ],
    projects: [
      {
        title: "Monthly Retainer",
        tags: ["IG", "TikTok"],
        descriptor: "Content Strategy",
        img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Reels Bundle",
        tags: ["Short-Form", "Social"],
        descriptor: "Social Growth",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Launch Campaign",
        tags: ["F&B", "Organic"],
        descriptor: "Community",
        img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "influencer-ugc",
    name: "Influencer / UGC",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1600",
    height: "620px",
    bullets: [
      "Influencer sourcing + outreach",
      "UGC coordination + campaign management",
      "Usage rights + asset delivery",
      "Monthly UGC bundles + campaign briefs",
      "Performance recaps",
    ],
    projects: [
      {
        title: "Creator Collab",
        tags: ["IG", "Beverage"],
        descriptor: "Creator Collab",
        img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "UGC Pack",
        tags: ["F&B", "Organic"],
        descriptor: "Organic Growth",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Campaign Brief",
        tags: ["Lifestyle", "Product"],
        descriptor: "UGC Campaign",
        img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "launch-event-marketing",
    name: "Launch + Event Marketing",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
    height: "640px",
    bullets: [
      "Grand opening support",
      "Event marketing strategy + rollout",
      "Event content capture + recap production",
      "Launch content plan + rollout calendar",
      "Press-ready assets + promo graphics",
    ],
    projects: [
      {
        title: "Grand Opening",
        tags: ["F&B", "Launch"],
        descriptor: "Grand Opening",
        img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Pop-Up Event",
        tags: ["Retail", "Activation"],
        descriptor: "Event Strategy",
        img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Soft Launch",
        tags: ["Hospitality", "PR"],
        descriptor: "Launch Rollout",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
  {
    slug: "motion-graphics",
    name: "Motion Graphics",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1600",
    height: "700px",
    bullets: [
      "Logo animation + animated promo design",
      "Animated story templates + flyers",
      "Kinetic typography promos",
      "Lower thirds + title sequences",
      "GIFs + sticker packs",
    ],
    projects: [
      {
        title: "Logo Pack",
        tags: ["Animation", "Brand"],
        descriptor: "Motion Design",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Story Templates",
        tags: ["IG", "Social"],
        descriptor: "Animation",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
      },
      {
        title: "Promo Series",
        tags: ["Campaign", "Digital"],
        descriptor: "Kinetic",
        img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  },
]
