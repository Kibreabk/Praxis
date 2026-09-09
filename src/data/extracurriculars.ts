export type Program = {
  id: string;
  name: string;
  category: string[];
  description: string;
  international: string;
  financialAid: string;
  format: string;
  priority: string;
  link: string;
  requirements: string[];
  brandColor: string;
  deadline?: string;
};

export const extracurricularsData: Program[] = [
  // 1. RESEARCH & SCIENTIFIC RESEARCH
  {
    id: "pioneer",
    deadline: "Dec & Feb (Spring/Summer), April (Fall)",
    name: "Pioneer Academics Research Program",
    category: ["Research", "STEM", "Humanities"],
    description: "A highly selective online research program where high-school students conduct college-level research under academic mentorship and develop an original research project.",
    international: "Yes",
    financialAid: "Need-based aid/scholarships available",
    format: "Online",
    priority: "VERY HIGH",
    link: "https://pioneeracademics.com/",
    requirements: ["Transcripts", "Short Essays", "Interview", "Standardized Tests (Optional)"],
    brandColor: "#E63946" // Red
  },
  {
    id: "lumiere",
    deadline: "Rolling Admissions (Multiple Cohorts)",
    name: "Lumiere Research Program",
    category: ["Research", "STEM", "Humanities"],
    description: "An online research mentorship program where high-school students work with academic mentors to investigate a research question and produce a substantial research paper.",
    international: "Yes",
    financialAid: "Scholarships available",
    format: "Online",
    priority: "HIGH",
    link: "https://www.lumiere-education.com/",
    requirements: ["Application Form", "Short Essay", "Academic Interests"],
    brandColor: "#1D3557" // Deep Blue
  },
  {
    id: "horizon",
    deadline: "Rolling Admissions",
    name: "Horizon Academic 1-to-1 Research Program",
    category: ["Research", "STEM"],
    description: "A one-to-one research mentorship program connecting high-school students with researchers and academics.",
    international: "Yes",
    financialAid: "Varies",
    format: "Online",
    priority: "HIGH",
    link: "https://horizoninspires.com/",
    requirements: ["Transcripts", "Statement of Purpose"],
    brandColor: "#2A9D8F" // Teal
  },
  {
    id: "asdrp",
    deadline: "Varies (Rolling)",
    name: "Aspiring Scholars Directed Research Program (ASDRP)",
    category: ["Research", "STEM", "Computer Science"],
    description: "A mentored STEM research program for high-school students covering biology, chemistry, physics, computer science, and machine learning.",
    international: "Yes",
    financialAid: "Available",
    format: "Online / Hybrid",
    priority: "VERY HIGH",
    link: "https://www.asdrp.org/apply",
    requirements: ["Application Form", "Transcripts", "Personal Essays"],
    brandColor: "#118AB2" // Ocean Blue
  },
  {
    id: "scimi",
    deadline: "May - June",
    name: "Science Mentorship Institute (Sci-MI)",
    category: ["Research", "STEM"],
    description: "Research and science mentorship opportunities that introduce high-school students to scientific research and academic mentorship.",
    international: "Yes",
    financialAid: "Varies",
    format: "Varies",
    priority: "HIGH",
    link: "https://www.sci-mi.org/index.html",
    requirements: ["Application Form", "Motivation Letter", "Transcripts"],
    brandColor: "#06D6A0" // Mint Green
  },
  {
    id: "indigo",
    deadline: "Rolling Admissions",
    name: "Indigo Research",
    category: ["Research", "STEM", "Humanities"],
    description: "A research mentorship program where high-school students work with researchers on independent academic projects, often culminating in a research paper.",
    international: "Yes",
    financialAid: "Scholarships available",
    format: "Online",
    priority: "HIGH",
    link: "https://www.indigoresearch.org/",
    requirements: ["Application Form", "Academic Interests", "Short Essay"],
    brandColor: "#48CAE4" // Light Blue
  },
  {
    id: "rsi",
    deadline: "Mid-December / Early February",
    name: "Research Science Institute (RSI)",
    category: ["Research", "STEM", "Mathematics"],
    description: "An extremely selective six-week STEM research program associated with MIT. Students receive intensive STEM preparation, conduct original research with mentors, and present findings.",
    international: "Yes",
    financialAid: "100% Funded",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://www.cee.org/programs/research-science-institute",
    requirements: ["2 Recommendations", "Transcripts", "Standardized Test Scores", "Essays"],
    brandColor: "#003049" // Dark Blue
  },
  {
    id: "harvard-openbio",
    deadline: "N/A (Self-Paced)",
    name: "Harvard Undergraduate OpenBio Laboratory",
    category: ["Research", "STEM"],
    description: "Research-oriented opportunities involving biology, biotechnology, computational biology, and open science.",
    international: "Cohort-Dependent",
    financialAid: "Program-Dependent",
    format: "Varies",
    priority: "HIGH",
    link: "https://soco.college.harvard.edu/00003/openbio-home/",
    requirements: ["Application Form", "Transcripts", "Letter of Interest"],
    brandColor: "#A51C30" // Crimson
  },
  {
    id: "summit-research",
    deadline: "N/A (Self-Paced)",
    name: "Summit Research Scholars (SRS)",
    category: ["Research", "STEM"],
    description: "A research-focused STEM program providing research exposure, mentorship, and opportunities to develop research projects.",
    international: "Yes",
    financialAid: "Available",
    format: "Varies",
    priority: "HIGH",
    link: "https://www.summiteducation.org/",
    requirements: ["Application Form", "Essays", "Transcripts"],
    brandColor: "#F4A261" // Orange
  },
  
  // 2. MATHEMATICS
  {
    id: "promys",
    deadline: "Early March",
    name: "PROMYS — Program in Mathematics for Young Scientists",
    category: ["Mathematics"],
    description: "A six-week intensive mathematics program at Boston University focused on number theory, advanced problem solving, and mathematical exploration.",
    international: "Yes",
    financialAid: "100% Funded (Need-based)",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://promys.org/",
    requirements: ["Challenging Problem Set", "Recommendation", "Transcripts"],
    brandColor: "#cc0000" // BU Red
  },
  {
    id: "sumac",
    deadline: "Mid-March",
    name: "Stanford University Mathematics Camp (SUMaC)",
    category: ["Mathematics"],
    description: "An intensive mathematics program for mathematically talented high-school students, emphasizing advanced mathematics and problem solving.",
    international: "Yes",
    financialAid: "Available",
    format: "Residential / Online",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://sumac.spcs.stanford.edu/",
    requirements: ["Math Qualifying Exam", "Teacher Recommendation", "Transcripts", "Essays"],
    brandColor: "#8C1515" // Cardinal Red
  },
  {
    id: "mathcamp",
    deadline: "Early March",
    name: "Canada/USA Mathcamp",
    category: ["Mathematics"],
    description: "A five-week intensive mathematics program with advanced mathematical study, seminars, exploration, and a strong community.",
    international: "Yes",
    financialAid: "100% Funded (Need-based)",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://www.mathcamp.org/",
    requirements: ["Qualifying Quiz", "Recommendations", "Personal Essay"],
    brandColor: "#D90429" // Red
  },

  // 3. STEM, SCIENCE & ENGINEERING
  {
    id: "ssp",
    deadline: "Late February",
    name: "Summer Science Program (SSP)",
    category: ["STEM", "Research"],
    description: "A highly selective residential STEM program where students work in teams on authentic scientific projects in astrophysics, biochemistry, or genomics.",
    international: "Yes",
    financialAid: "100% Funded (Need-based)",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://ssp.org/",
    requirements: ["Transcripts", "Teacher Evaluations", "Short Essays"],
    brandColor: "#2B2D42" // Dark
  },
  {
    id: "smith-ssep",
    deadline: "Late April",
    name: "Smith College Summer Science & Engineering Program",
    category: ["STEM"],
    description: "An intensive residential science and engineering program involving laboratory work, research, collaboration, and scientific study.",
    international: "Yes",
    financialAid: "Available",
    format: "Residential",
    priority: "VERY HIGH",
    link: "https://www.smith.edu/academics/programs-courses/precollege-programs/summer-science-engineering-program",
    requirements: ["Application Form", "Transcripts", "Teacher Recommendation"],
    brandColor: "#002855" // Navy
  },
  {
    id: "cty",
    deadline: "Varies",
    name: "Johns Hopkins Center for Talented Youth (CTY)",
    category: ["STEM", "Humanities"],
    description: "Advanced academic enrichment for talented students, with courses in STEM, humanities, writing, and other subjects.",
    international: "Yes",
    financialAid: "Limited",
    format: "Online / Residential",
    priority: "MEDIUM-HIGH",
    link: "https://cty.jhu.edu/",
    requirements: ["Standardized Test Scores (CTY Qualifying)", "Transcripts"],
    brandColor: "#68ACE5" // Light Blue
  },
  {
    id: "addiscoder",
    deadline: "Early June (Varies by year)",
    name: "AddisCoder",
    category: ["Computer Science", "STEM"],
    description: "An intensive computer science program centered on programming, algorithms, mathematical foundations, and computational problem solving.",
    international: "Ethiopian Students Specifically",
    financialAid: "100% Funded",
    format: "Residential (In-person)",
    priority: "VERY HIGH",
    link: "https://www.addiscoder.com/",
    requirements: ["Math/Logic Puzzle Exam", "Transcripts"],
    brandColor: "#006400" // Green
  },

  // 4. COMPUTER SCIENCE, AI & TECHNOLOGY
  {
    id: "veritas-ai",
    deadline: "Rolling (Multiple Cohorts)",
    name: "Veritas AI",
    category: ["Computer Science", "AI"],
    description: "An AI-focused academic program for high-school students interested in artificial intelligence, machine learning, projects, and research.",
    international: "Yes",
    financialAid: "Scholarships Available",
    format: "Online",
    priority: "HIGH",
    link: "https://www.veritasai.com/about-us",
    requirements: ["Application Form", "Transcripts", "Short Essay"],
    brandColor: "#7B2CBF" // Purple
  },
  {
    id: "tks",
    deadline: "April (Early) / June (Regular)",
    name: "The Knowledge Society (TKS)",
    category: ["Computer Science", "Entrepreneurship", "AI"],
    description: "A technology and innovation program where students explore emerging technologies, solve real-world problems, develop projects, and learn entrepreneurship.",
    international: "Yes",
    financialAid: "Cohort-Dependent",
    format: "Online / Hybrid",
    priority: "HIGH",
    link: "https://www.tks.world/",
    requirements: ["Application Form", "Interview", "Essays"],
    brandColor: "#FF0054" // Pinkish Red
  },

  // 5. ENTREPRENEURSHIP, BUSINESS & INNOVATION
  {
    id: "launchx",
    deadline: "Early: Dec / Regular: April",
    name: "LaunchX",
    category: ["Entrepreneurship", "Leadership"],
    description: "An entrepreneurship program where high-school students learn startup fundamentals, identify problems, develop solutions, and build ventures.",
    international: "Yes",
    financialAid: "Available",
    format: "Online / Residential",
    priority: "VERY HIGH",
    link: "https://www.launchx.com/",
    requirements: ["Video Pitch", "Portfolio/Resume", "Transcripts", "Recommendation"],
    brandColor: "#FB8500" // Orange
  },
  {
    id: "young-founders",
    deadline: "Rolling Admissions",
    name: "Young Founders Lab",
    category: ["Entrepreneurship"],
    description: "A startup bootcamp where students learn entrepreneurship, product development, business strategy, and venture creation.",
    international: "Yes",
    financialAid: "Available",
    format: "Online",
    priority: "HIGH",
    link: "https://www.youngfounderslab.org/",
    requirements: ["Application Form", "Transcripts", "Interview"],
    brandColor: "#219EBC" // Blue
  },
  {
    id: "harvard-vtsp",
    deadline: "N/A (Self-Paced)",
    name: "Harvard Venture & Technology Summer Program",
    category: ["Entrepreneurship", "STEM"],
    description: "A summer program combining technology, entrepreneurship, innovation, venture-building, and business education.",
    international: "Yes",
    financialAid: "Verify Current Cycle",
    format: "Varies",
    priority: "MEDIUM-HIGH",
    link: "https://www.vtsp.com/",
    requirements: ["Application Form", "Transcripts", "Short Essay"],
    brandColor: "#A51C30" // Crimson
  },

  // 6. INTERNSHIPS & PROFESSIONAL EXPERIENCE
  {
    id: "ladder-internships",
    deadline: "N/A (Self-Paced)",
    name: "Ladder Internships",
    category: ["Internship"],
    description: "Remote internships connecting students with startups and innovative organizations in areas such as technology, AI, business, and consulting.",
    international: "Yes",
    financialAid: "Available",
    format: "Online",
    priority: "HIGH",
    link: "https://www.ladderinternships.com/",
    requirements: ["Resume", "Application Form", "Interview"],
    brandColor: "#8ECAE6" // Light Blue
  },
  {
    id: "standout-connect",
    deadline: "N/A (Self-Paced)",
    name: "StandOut Connect",
    category: ["Internship"],
    description: "A remote internship and professional-development program connecting students with innovative organizations and project-based work.",
    international: "Yes",
    financialAid: "Varies",
    format: "Online",
    priority: "HIGH",
    link: "https://www.standoutconnect.org/",
    requirements: ["Resume", "Application Form", "Interview"],
    brandColor: "#023047" // Dark Blue
  },

  // 7. LEADERSHIP, GLOBAL AFFAIRS & UNIVERSITY PREPARATION
  {
    id: "yygs",
    deadline: "Early: Nov / Regular: Jan",
    name: "Yale Young Global Scholars (YYGS)",
    category: ["Leadership", "Global Affairs", "Humanities"],
    description: "A highly selective Yale academic enrichment program bringing high-school students together for intensive study, discussion, and leadership development.",
    international: "Yes",
    financialAid: "Available",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://globalscholars.yale.edu/about",
    requirements: ["Essays", "Transcripts", "Recommendations", "Resume"],
    brandColor: "#0F4D92" // Yale Blue
  },
  {
    id: "yyas",
    deadline: "Early February",
    name: "Yale Young African Scholars (YYAS)",
    category: ["Leadership", "Global Affairs", "Africa-Specific"],
    description: "A Yale program designed specifically for African secondary-school students, emphasizing academic preparation, leadership, and global issues.",
    international: "African Students (Including Ethiopians)",
    financialAid: "100% Funded",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://africanscholars.yale.edu/about-us",
    requirements: ["Essays", "Transcripts", "Recommendations", "Activity List"],
    brandColor: "#0F4D92" // Yale Blue
  },
  {
    id: "tass",
    deadline: "Early January",
    name: "Telluride Association Summer Seminar (TASS)",
    category: ["Humanities", "Social Sciences", "Leadership"],
    description: "A highly selective, free seminar focused on humanities and social sciences, exploring questions about power, society, identity, and social structures.",
    international: "Yes",
    financialAid: "100% Funded",
    format: "Residential",
    priority: "ELITE / EXTREMELY HIGH",
    link: "https://tellurideassociation.org/",
    requirements: ["Intensive Essays", "Recommendations", "Transcripts", "Interview"],
    brandColor: "#606C38" // Deep Green
  },
  {
    id: "gyel",
    deadline: "Rolling Admissions",
    name: "Global Youth Excellence & Leadership Program (GYEL)",
    category: ["Leadership", "Global Affairs"],
    description: "A youth leadership and personal-development program focusing on leadership, communication, global awareness, and social impact.",
    international: "Yes",
    financialAid: "Varies",
    format: "Varies",
    priority: "MEDIUM-HIGH",
    link: "https://gyel.org/",
    requirements: ["Application Form", "Motivation Letter", "Resume"],
    brandColor: "#0077B6" // Ocean Blue
  },
  {
    id: "efl",
    deadline: "Early: Feb / Regular: April",
    name: "Economics for Leaders (EFL)",
    category: ["Leadership", "Social Sciences"],
    description: "A program combining economics education with leadership development, communication, teamwork, and economic reasoning.",
    international: "Verify Program/Location",
    financialAid: "Program-Dependent",
    format: "Varies",
    priority: "MEDIUM",
    link: "https://fte.org/",
    requirements: ["Application Form", "Transcripts", "Teacher Recommendation"],
    brandColor: "#00B4D8" // Cyan
  },

  // 8. CLIMATE, ENVIRONMENT & SUSTAINABILITY
  {
    id: "rustic-climate",
    deadline: "Rolling Admissions",
    name: "Rustic Pathways Climate Leaders Fellowship",
    category: ["Climate/Environment", "Leadership"],
    description: "A youth climate-leadership fellowship involving climate education, discussion, leadership development, and project-based work.",
    international: "Yes",
    financialAid: "Free for Accepted Participants",
    format: "Online",
    priority: "HIGH",
    link: "https://climateleadersfellowship.org/",
    requirements: ["Application Form", "Short Essay", "Interview"],
    brandColor: "#2A9D8F" // Teal
  },
  {
    id: "seaside-sustainability",
    deadline: "Rolling Admissions",
    name: "Seaside Sustainability",
    category: ["Climate/Environment", "Internship"],
    description: "Environmental education, sustainability, conservation, and internship opportunities for students interested in environmental issues and climate action.",
    international: "Yes",
    financialAid: "Varies",
    format: "Varies",
    priority: "HIGH",
    link: "https://www.seasidesustainability.org/home",
    requirements: ["Resume", "Application Form", "Cover Letter"],
    brandColor: "#0077B6" // Blue
  },

  // 9. HUMANITIES, SOCIAL SCIENCES & WRITING
  {
    id: "stanford-shi",
    deadline: "N/A (Self-Paced)",
    name: "Stanford Summer Humanities Institute (SHI)",
    category: ["Humanities", "Social Sciences"],
    description: "An intensive Stanford humanities program where students study history, philosophy, literature, political thought, and related areas.",
    international: "Yes",
    financialAid: "Available",
    format: "Residential",
    priority: "VERY HIGH",
    link: "https://summerhumanities.spcs.stanford.edu/",
    requirements: ["Essays", "Writing Sample", "Transcripts", "Recommendations"],
    brandColor: "#8C1515" // Cardinal
  },
  {
    id: "john-locke",
    deadline: "N/A (Self-Paced)",
    name: "John Locke Institute Programs",
    category: ["Humanities", "Social Sciences"],
    description: "Academic programs and seminars covering philosophy, politics, economics, history, psychology, law, and related subjects.",
    international: "Yes",
    financialAid: "Scholarships Available",
    format: "Varies",
    priority: "HIGH",
    link: "https://www.johnlockeinstitute.com/about",
    requirements: ["Application Form", "Transcripts", "Essay"],
    brandColor: "#D4AF37" // Gold
  },
  {
    id: "john-locke-essay",
    deadline: "Late June",
    name: "John Locke Global Essay Competition",
    category: ["Humanities", "Competition"],
    description: "An international essay competition covering philosophy, politics, economics, history, psychology, and law.",
    international: "Yes",
    financialAid: "Awards/Recognition",
    format: "Competition",
    priority: "HIGH",
    link: "https://www.johnlockeinstitute.com/essay-competition",
    requirements: ["Original Essay Submission"],
    brandColor: "#D4AF37" // Gold
  },
  {
    id: "nhd",
    deadline: "Regional Deadlines Vary (Jan-March)",
    name: "National History Day",
    category: ["Humanities", "Competition"],
    description: "A research competition where students conduct original historical research and present it through papers, documentaries, exhibits, or websites.",
    international: "Yes (Through Affiliated Pathways)",
    financialAid: "Not Applicable",
    format: "Competition",
    priority: "MEDIUM-HIGH",
    link: "https://nhd.org/en/",
    requirements: ["Historical Project/Paper Submission"],
    brandColor: "#E63946" // Red
  },

  // 10. COMPETITIONS, OLYMPIADS & ACADEMIC ACHIEVEMENTS
  {
    id: "isef",
    deadline: "Varies by Regional Fair",
    name: "International Science and Engineering Fair (ISEF)",
    category: ["STEM", "Competition", "Research"],
    description: "A major high-school STEM research competition where students qualify through affiliated science fairs and present original research.",
    international: "Yes",
    financialAid: "Not Applicable",
    format: "Competition",
    priority: "ELITE ACHIEVEMENT",
    link: "https://www.societyforscience.org/isef/",
    requirements: ["Original Research Project", "Regional Fair Qualification"],
    brandColor: "#023047" // Blue
  },
  {
    id: "amc",
    deadline: "Oct/Nov (Registration)",
    name: "AMC / Mathematics Competitions",
    category: ["Mathematics", "Competition"],
    description: "Mathematics competitions designed to build and demonstrate logical reasoning, quantitative ability, and advanced problem solving.",
    international: "Yes",
    financialAid: "Not Applicable",
    format: "Competition",
    priority: "HIGH",
    link: "https://maa.org/student-programs/amc/",
    requirements: ["Registration via School/Test Center", "Math Exam"],
    brandColor: "#1D3557" // Deep Blue
  },
  {
    id: "mun",
    deadline: "Varies by Conference",
    name: "Model United Nations (MUN)",
    category: ["Global Affairs", "Leadership", "Competition"],
    description: "A diplomacy and international-relations activity in which students research countries, policies, geopolitical conflicts, and international issues.",
    international: "Yes",
    financialAid: "Not Applicable",
    format: "Competition",
    priority: "MEDIUM-HIGH",
    link: "https://munuc.org/research/",
    requirements: ["Position Paper", "Registration via School/Delegation"],
    brandColor: "#457B9D" // Blue
  },

  // 11. COMMUNITY-BASED RESEARCH
  {
    id: "community-survey",
    deadline: "N/A (Self-Paced)",
    name: "Community Opinion Survey",
    category: ["Community-Based Research", "Social Sciences"],
    description: "Design and execute a comprehensive local survey to gather quantitative data on pressing community issues like public transit, educational gaps, or healthcare access. Analyze the data and present your actionable findings to local city councils to drive real-world policy changes.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Local Resources", "Data Collection", "Time Commitment"],
    brandColor: "#F4A261"
  },
  {
    id: "nonprofit-collab",
    deadline: "N/A (Self-Paced)",
    name: "Nonprofit Data Collaboration",
    category: ["Community-Based Research", "Leadership"],
    description: "Partner with local NGOs or nonprofits to modernize their operations. Offer to collect, clean, and analyze data related to their outreach, community engagement, or program effectiveness, providing them with professional-level insights.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Outreach", "Collaboration", "Data Analysis"],
    brandColor: "#2A9D8F"
  },
  {
    id: "local-wildlife",
    deadline: "N/A (Self-Paced)",
    name: "Biodiversity & Ecology Monitoring",
    category: ["Community-Based Research", "STEM", "Climate/Environment"],
    description: "Set up a long-term ecological study in your region. Track bird populations, invasive plant species, or seasonal ecosystem changes to examine environmental patterns and publish your findings in local science journals.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Observation Logs", "Data Collection", "Consistency"],
    brandColor: "#4CAF50"
  },
  {
    id: "public-transport",
    deadline: "N/A (Self-Paced)",
    name: "Urban Transit Analytics",
    category: ["Community-Based Research", "Social Sciences"],
    description: "Conduct an urban planning study analyzing commuting patterns, ADA accessibility, or public satisfaction with local transit systems. Identify infrastructure bottlenecks and draft a proposal for urban improvement.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Field Observation", "Survey Creation", "Data Analysis"],
    brandColor: "#118AB2"
  },
  {
    id: "oral-history",
    deadline: "N/A (Self-Paced)",
    name: "Cultural Oral History Archive",
    category: ["Community-Based Research", "Humanities"],
    description: "Preserve the living history of your community by conducting in-depth interviews with elders about historical events, migration stories, and fading cultural traditions. Compile these into a digital archive or documentary.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Interview Skills", "Transcription", "Storytelling"],
    brandColor: "#E63946"
  },

  // 12. INDEPENDENT RESEARCH PROJECTS
  {
    id: "local-env-study",
    deadline: "N/A (Self-Paced)",
    name: "Environmental Impact Study",
    category: ["Independent Research Projects", "Climate/Environment"],
    description: "Launch a rigorous scientific study on local pollution levels, water quality in nearby rivers, or municipal waste management. Collect data points over several months to build a highly credible environmental portfolio.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Field Research", "Data Logging", "Analysis"],
    brandColor: "#2A9D8F"
  },
  {
    id: "social-media-trend",
    deadline: "N/A (Self-Paced)",
    name: "Digital Psychology Analysis",
    category: ["Independent Research Projects", "Social Sciences"],
    description: "Examine the psychological impact of social media algorithms on teenagers. Use digital surveys and public API data to analyze how scrolling habits influence productivity, mental health, and modern communication.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Survey Distribution", "Data Analysis", "Psychology/Sociology"],
    brandColor: "#8ECAE6"
  },
  {
    id: "local-history",
    deadline: "N/A (Self-Paced)",
    name: "Regional History Investigation",
    category: ["Independent Research Projects", "Humanities"],
    description: "Dive into local archives, library records, and town halls to investigate forgotten regional historical events. Write an academic paper combining narrative storytelling with rigorous historical investigation.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Archival Research", "Interviews", "Writing"],
    brandColor: "#D4AF37"
  },
  {
    id: "economic-case-study",
    deadline: "N/A (Self-Paced)",
    name: "Micro-Economic Case Study",
    category: ["Independent Research Projects", "Social Sciences"],
    description: "Analyze local pricing trends, small business growth rates, or consumer spending behavior within your community. Use statistical modeling to predict future economic shifts in your neighborhood.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Data Collection", "Economic Principles", "Analysis"],
    brandColor: "#023047"
  },
  {
    id: "cs-coding-project",
    deadline: "N/A (Self-Paced)",
    name: "Applied Computer Science",
    category: ["Independent Research Projects", "Computer Science"],
    description: "Build an end-to-end software project to solve a real-world problem. Develop a machine learning model, engineer a mobile app for local students, or conduct a cybersecurity vulnerability analysis on open-source tools.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Programming Skills", "Documentation", "Testing"],
    brandColor: "#7B2CBF"
  },
  {
    id: "public-health",
    deadline: "N/A (Self-Paced)",
    name: "Public Health Intervention",
    category: ["Independent Research Projects", "STEM"],
    description: "Investigate public understanding of hidden health crises (like adolescent sleep deprivation or local nutrition gaps). Design a data-backed intervention campaign and distribute your findings across local schools.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Survey Creation", "Health Topics", "Communication"],
    brandColor: "#FB8500"
  },
  {
    id: "literary-analysis",
    deadline: "N/A (Self-Paced)",
    name: "Comparative Literary Criticism",
    category: ["Independent Research Projects", "Humanities"],
    description: "Author a college-level comparative literary analysis. Focus on thematic intersections across different eras or cultures, examining how history, philosophy, and societal norms shape written masterpieces.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Reading", "Critical Thinking", "Writing"],
    brandColor: "#606C38"
  },
  {
    id: "political-science",
    deadline: "N/A (Self-Paced)",
    name: "Civic Policy Investigation",
    category: ["Independent Research Projects", "Social Sciences"],
    description: "Track local voting trends, analyze the efficacy of political messaging on youth, or audit municipal budget allocations. Present your policy analysis to spark community dialogue on civic engagement.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Policy Analysis", "Data Interpretation", "Presentation"],
    brandColor: "#A51C30"
  },
  {
    id: "educational-inequality",
    deadline: "N/A (Self-Paced)",
    name: "Educational Equity Research",
    category: ["Independent Research Projects", "Social Sciences"],
    description: "Quantify local educational inequality by researching access to technology, advanced classes, and college counseling across different high schools. Propose actionable, data-backed sociological solutions.",
    international: "Yes (Local)",
    financialAid: "Self-Funded",
    format: "Independent Project",
    priority: "HIGH",
    link: "#",
    requirements: ["Research", "Sociology", "Data Presentation"],
    brandColor: "#1D3557"
  }
];

export const officialPrograms = extracurricularsData.filter(p => p.format !== 'Independent Project');
export const independentProjects = extracurricularsData.filter(p => p.format === 'Independent Project');

export const officialCategories = Array.from(
  new Set(officialPrograms.flatMap(p => p.category))
).sort();

export const independentCategories = Array.from(
  new Set(independentProjects.flatMap(p => p.category))
).sort();
