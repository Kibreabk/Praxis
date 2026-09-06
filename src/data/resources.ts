export interface ResourceItem {
  id: string;
  name: string;
  description?: string;
  link: string;
  category: string;
  platform?: 'website' | 'youtube' | 'instagram' | 'telegram';
  unavatar?: string;
}

export const applicationResources: ResourceItem[] = [
  // 1. Best resources for college application
  {
    id: "borderless",
    name: "Borderless",
    category: "Platform",
    platform: "website",
    link: "https://borderless.so/?utm_source=chatgpt.com",
    unavatar: "borderless.so",
    description: "An admissions platform specifically built around international students applying to universities abroad. It includes real stories, essays, financial-aid experiences, and strategies from international students, proving that background shouldn't determine access to good guidance."
  },
  {
    id: "snowday",
    name: "Snowday",
    category: "Platform",
    platform: "website",
    link: "https://www.snow.day/",
    unavatar: "snow.day",
    description: "A comprehensive database bringing together 2,100+ extracurricular and enrichment opportunities. Discover research, competitions, and leadership programs with filters for financial aid and international student eligibility."
  },
  {
    id: "college-essay-guy",
    name: "College Essay Guy",
    category: "Platform",
    platform: "website",
    link: "https://www.collegeessayguy.com/",
    unavatar: "collegeessayguy.com",
    description: "A treasure trove for personal statements and supplemental essays. Provides free guides, successful example essays, brainstorming exercises, and application strategy advice to help you find and structure your authentic story."
  },
  {
    id: "edugrants",
    name: "EduGrants",
    category: "Platform",
    platform: "website",
    link: "https://edugrants.uz/",
    unavatar: "edugrants.uz",
    description: "A platform listing 1,000+ verified scholarships, grants, summer programs, and mentorships across 30+ countries. Filter by funding type and track deadlines easily."
  },
  {
    id: "lumiere-blog",
    name: "Lumiere Education",
    category: "Platform",
    platform: "website",
    link: "https://www.lumiere-education.com/",
    unavatar: "lumiere-education.com",
    description: "Expert insights and curated lists of top research programs, internships, and academic opportunities for ambitious high school students."
  },
  {
    id: "opportunity-alerts",
    name: "Opportunity Alerts (Telegram)",
    category: "Platform",
    platform: "telegram",
    link: "https://t.me/opportunity_alerts",
    unavatar: "telegram/opportunity_alerts",
    description: "A fast-paced channel posting various opportunities, including high school activities, competitions, and scholarships."
  },

  // 2. YouTube Channels
  {
    id: "yt-cassandra",
    name: "Cassandra Hsiao",
    category: "YouTube",
    platform: "youtube",
    link: "https://www.youtube.com/@CassandraHsiao",
    unavatar: "youtube/CassandraHsiao"
  },
  {
    id: "yt-ceg",
    name: "College Essay Guy",
    category: "YouTube",
    platform: "youtube",
    link: "https://www.youtube.com/@Collegeessayguy",
    unavatar: "youtube/Collegeessayguy"
  },
  {
    id: "yt-pratik",
    name: "Pratik Vangal",
    category: "YouTube",
    platform: "youtube",
    link: "https://www.youtube.com/@PratikVangal",
    unavatar: "youtube/PratikVangal"
  },
  {
    id: "yt-elevated",
    name: "ElevatEd School",
    category: "YouTube",
    platform: "youtube",
    link: "https://www.youtube.com/@elevatedschool",
    unavatar: "youtube/elevatedschool"
  },
  {
    id: "yt-ivy",
    name: "Ivy League Road Map",
    category: "YouTube",
    platform: "youtube",
    link: "https://www.youtube.com/@ivy_roadmap",
    unavatar: "youtube/ivy_roadmap"
  },

  // 3. Instagram
  {
    id: "ig-ivy",
    name: "Ivy Road map",
    category: "Instagram",
    platform: "instagram",
    link: "https://www.instagram.com/ivy_roadmap/?hl=en",
    unavatar: "instagram/ivy_roadmap"
  },
  {
    id: "ig-tineo",
    name: "tineocollegeprep",
    category: "Instagram",
    platform: "instagram",
    link: "https://www.instagram.com/tineocollegeprep/?hl=en",
    unavatar: "instagram/tineocollegeprep"
  },
  {
    id: "ig-amir",
    name: "Amir Rakhimov",
    category: "Instagram",
    platform: "instagram",
    link: "https://www.instagram.com/rakhimoff_amir/?hl=en",
    unavatar: "instagram/rakhimoff_amir"
  },
  {
    id: "ig-limmy",
    name: "limmytalks",
    category: "Instagram",
    platform: "instagram",
    link: "https://www.instagram.com/limmytalks/?hl=en",
    unavatar: "instagram/limmytalks"
  },
  {
    id: "ig-stephen",
    name: "Stephen | Lumiere Education",
    category: "Instagram",
    platform: "instagram",
    link: "https://www.instagram.com/lumiere_edu/?hl=en",
    unavatar: "instagram/lumiere_edu"
  },
  {
    id: "ig-snowday",
    name: "Snowday",
    category: "Instagram",
    platform: "instagram",
    link: "https://www.instagram.com/snowday_edu/?hl=en",
    unavatar: "instagram/snowday_edu"
  },

  // 4. Telegram
  {
    id: "tg-bobirjon",
    name: "Bobirjon's Blog | IELTS 9 | SAT 1600",
    category: "Telegram",
    platform: "telegram",
    link: "https://t.me/BobirjonsThoughts",
    unavatar: "telegram/BobirjonsThoughts"
  },
  {
    id: "tg-asadbek",
    name: "asadbek aka",
    category: "Telegram",
    platform: "telegram",
    link: "https://t.me/asadbek_closer",
    unavatar: "telegram/asadbek_closer"
  },
  {
    id: "tg-opportunity",
    name: "Opportunity Alert",
    category: "Telegram",
    platform: "telegram",
    link: "https://t.me/opportunity_alerts",
    unavatar: "telegram/opportunity_alerts"
  },
  {
    id: "tg-kb",
    name: "kb's opportunity hub",
    category: "Telegram",
    platform: "telegram",
    link: "https://t.me/kb_opportunity_hub",
    unavatar: "telegram/kb_opportunity_hub"
  },
  {
    id: "tg-edugrants",
    name: "Edu Grands",
    category: "Telegram",
    platform: "telegram",
    link: "https://t.me/edugrandsuz",
    unavatar: "telegram/edugrandsuz"
  },
  {
    id: "tg-elpizo",
    name: "Elpizo learning centre",
    category: "Telegram",
    platform: "telegram",
    link: "https://t.me/Elpizo224",
    unavatar: "telegram/Elpizo224"
  },

  // 5. Test Prep (SAT)
  {
    id: "erica-english",
    name: "Erica Meltzer SAT English",
    category: "Test Prep",
    platform: "telegram",
    link: "https://t.me/ctpsummer/75",
    unavatar: "telegram/ctpsummer",
    description: "Personally recommended essential guides for mastering the Digital SAT Reading and Grammar sections. (Also see: https://t.me/ctpsummer/77)"
  },
  {
    id: "math-sat",
    name: "SAT Math Resource",
    category: "Test Prep",
    platform: "telegram",
    link: "https://t.me/ctpsummer/80",
    unavatar: "telegram/ctpsummer",
    description: "Highly recommended material for conquering the SAT Math section."
  },
  {
    id: "desmos",
    name: "Desmos Graphing Calculator",
    category: "Test Prep",
    platform: "website",
    link: "https://www.desmos.com/calculator",
    unavatar: "desmos.com",
    description: "Built directly into the Digital SAT. Instead of manually solving equations or quadratics, you can graph them to find intercepts visually. Learning when to use this powerful tool saves time and reduces calculation mistakes."
  },
  {
    id: "desmos-vid-1",
    name: "Desmos SAT Strategy 1",
    category: "Test Prep",
    platform: "youtube",
    link: "https://youtu.be/-pGNBb8M3LQ?si=kfJl-_XLStDZv8z8",
    unavatar: "youtube/youtube",
    description: "Video tutorial on recognizing which SAT questions are faster with Desmos."
  },
  {
    id: "desmos-vid-2",
    name: "Desmos SAT Strategy 2",
    category: "Test Prep",
    platform: "youtube",
    link: "https://www.youtube.com/watch?v=TFmt1VwZte8&list=PLf3ypEs9Kobgascv5bwpOadB0UiVI5IQS",
    unavatar: "youtube/youtube",
    description: "Comprehensive video playlist for mastering Desmos on the Digital SAT."
  },
  {
    id: "desmos-vid-3",
    name: "Desmos SAT Strategy 3",
    category: "Test Prep",
    platform: "youtube",
    link: "https://youtu.be/jCT0jTVzKy0?si=sGPVvQSrH58OwKMT",
    unavatar: "youtube/youtube",
    description: "Additional video guide on using Desmos as a powerful tool to save time."
  }
];
