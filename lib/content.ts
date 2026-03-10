export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  impact: string;
  technologies: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Achievement = {
  label: string;
  value: string;
  detail: string;
};

export const portfolioContent = {
  person: {
    fullName: "AmirAbbas Ranjbar",
    firstName: "AmirAbbas",
    role: "Senior Software Engineer",
    headline:
      "Designing distributed, revenue-critical platforms that stay fast and reliable under extreme scale.",
    shortBio:
      "Business-driven senior engineer with 8+ years of experience building cloud-native systems, real-time data pipelines, and event-driven products across commerce, utilities, and hospitality.",
    location: "Vancouver, BC",
    phone: "+1 (672) 399-0910",
    avatar: "/assets/me.jpeg",
    resumeUrl: "/assets/AmirAbbasRanjbar.pdf",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/amirabbas-ranjbar/",
      },
      {
        label: "GitHub",
        href: "https://github.com/ranjbar-amirabbas",
      },
    ],
  },
  about: {
    title:
      "A business-driven Senior Software Engineer and problem solver with 8+ years of experience designing and delivering high-throughput, scalable enterprise systems.",
    narrative:
      "Played a key role in large-scale digital transformation initiatives, leading the design and implementation of mission-critical, event-driven, and streaming architectures processing 200K+ transactions per hour in cloud-native environments (AWS, Azure, Kubernetes). Experienced in building resilient distributed systems where performance, reliability, and consistency were non-negotiable.",
    principles: [
      "Proven ability to operate under high-traffic conditions, optimize data pipelines, and implement real-time streaming solutions capable of processing millions of records efficiently and without duplication.",
      "I actively leverage AI-assisted development in my workflow and have incorporated agentic AI approaches to accelerate product development cycles, improve experimentation speed, and reduce time-to-delivery while maintaining engineering quality.",
      "A committed team contributor who actively supports peers in problem-solving while remaining hands-on in development and architecture decisions.",
    ],
  },
  achievements: [
    {
      label: "Peak transaction throughput",
      value: "200K+ / hour",
      detail: "Designed and delivered event-driven systems for sustained enterprise-scale processing.",
    },
    {
      label: "Campaign order volume",
      value: "250K+ / day",
      detail: "Powered record-breaking national gamification campaigns under heavy concurrency spikes.",
    },
    {
      label: "Catalog stream performance",
      value: "2M updates / minute",
      detail: "Replaced 30-minute sync cycles with near real-time pricing and availability pipelines.",
    },
    {
      label: "Platform growth outcome",
      value: "70% sales increase",
      detail: "Expanded vendor reach and delivery capabilities to unlock measurable revenue growth.",
    },
  ] as Achievement[],
  experiences: [
    {
      company: "Veera Smart Solution",
      role: "Senior Software Engineer",
      period: "May 2025 - Present",
      highlights: [
        "Co-founded and architected a hospitality-focused platform for hotels, residential complexes, and office buildings to streamline internal operations through a BPMS-driven system.",
        "Designed and implemented a scalable backend architecture enabling workflow automation across accounting, resource management, facility operations, and internal service processes — reducing manual coordination and improving operational visibility.",
        "Led rapid product development cycles, translating real-world operational challenges into deployable solutions, shipping iteratively, and adapting quickly based on client feedback.",
        "Built an AI-powered Trip Planner solution for the tourism sector, enabling hotels to generate personalized tour recommendations for guests while supporting managers in curating optimized tour packages.",
        "Leveraged AI-assisted development and agentic AI workflows to accelerate product iteration, reduce development time, and move from idea to deployable features significantly faster.",
        "Remained hands-on across architecture, backend development, and technical decision-making while aligning product direction with business strategy and market validation.",
        "Played a key role in bridging business and engineering by translating evolving client requirements into scalable technical architectures. Led stakeholder communications, shaped product direction, and drove the development of AI-powered features that accelerated product innovation and time-to-market.",
      ],
      stack: [".NET", "Event-Driven Architecture", "BPMS", "AI Workflows", "Cloud-Native Systems"],
    },
    {
      company: "Okala",
      role: "Senior Software Engineer",
      period: "May 2021 - May 2025",
      highlights: [
        "Built a high-traffic gamification platform powering large-scale national campaigns that drove 250,000+ daily orders at peak — breaking the country's sales record and outperforming major competitors. Architected with ASP.NET Core microservices and a Kafka-based event-driven backbone, the platform sustained extreme concurrency and reliable real-time reward orchestration under heavy traffic spikes.",
        "Designed and delivered a Real-Time Product Catalog & Pricing Engine using Kafka and Apache Flink, composed of ~8 domain-driven microservices for inventory, pricing, and product availability. Replaced a 30-minute monolithic sync process with a fault-tolerant streaming architecture capable of processing up to 2 million item updates per minute in near real-time. This transformation enabled dynamic pricing for Sales & Marketing and generated profit equivalent to the company's entire annual budget — marking the first profitable cycle.",
        "Implemented a personalized product recommendation system leveraging customer purchase history, increasing repeat purchases, and driving organic revenue growth. The initiative unlocked a new non-operational revenue stream and enabled direct brand partnerships for targeted promotions and strategic collaboration.",
        "Contributed to the modernization of a legacy monolithic system (C#/.NET) by extracting and redesigning key domains into scalable microservices built with CQRS patterns and isolated databases (SQL Server, Redis). Leveraged event-driven architecture to eliminate heavy database locking and reduce vendor service-radius update latency from ~5 minutes to near real-time. This transformation enabled integration with multiple delivery providers, introduced advanced vendor-level controls, and expanded platform capacity from 200 to over 10,000 vendors — significantly increasing service coverage and operational scalability.",
        "Helped drive a 70% increase in sales by improving vendor visibility, expanding customer coverage, and enhancing delivery capabilities across the platform.",
        "Collaborated within a cross-functional engineering team to balance large-scale architectural refactoring with ongoing production demands and business continuity.",
      ],
      stack: ["ASP.NET Core", "Kafka", "Apache Flink", "CQRS", "SQL Server", "Redis"],
    },
    {
      company: "DPI Iran (ex-IBM)",
      role: "Software Engineer",
      period: "Apr 2019 - May 2021",
      highlights: [
        "Contributed to the modernization of a legacy urban electricity management system by launching electronic billing as a key digital transformation milestone. The shift from paper-based invoices to e-billing reduced operational costs, eliminated large-scale printing overhead, and supported environmental sustainability by significantly reducing paper consumption.",
        "Improved system performance by analyzing and optimizing complex SQL queries, reducing response times, and improving overall system stability. Database refactoring and modernization efforts, enhancing maintainability and preparing the platform for future upgrades.",
        "Containerized legacy services using Docker and established CI/CD pipelines to automate build, test, and deployment processes. Improved deployment consistency, reduced manual release overhead, and enabled faster, more reliable delivery cycles.",
      ],
      stack: ["C#", "SQL Server", "Docker", "CI/CD", "Legacy Modernization"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "National-Scale Gamification Platform",
      summary:
        "A resilient reward orchestration platform built for large campaigns with volatile traffic and strict reliability demands.",
      impact: "Handled 250K+ daily orders at peak and supported record-breaking sales performance.",
      technologies: ["ASP.NET Core", "Kafka", "Microservices", "Redis"],
    },
    {
      title: "Real-Time Catalog & Dynamic Pricing Engine",
      summary:
        "Streaming architecture replacing batch catalog synchronization to keep inventory and pricing continuously fresh.",
      impact:
        "Processed up to 2M item updates per minute and enabled profitability through dynamic pricing capabilities.",
      technologies: ["Apache Flink", "Kafka", "Domain-Driven Design", "SQL Server"],
    },
    {
      title: "AI Trip Planner for Hospitality",
      summary:
        "AI-enabled recommendation product helping hotels create personalized guest itineraries and curated tour packages.",
      impact: "Accelerated product differentiation while creating new value-added guest experiences.",
      technologies: ["AI-Assisted Development", "Backend APIs", "Workflow Automation"],
    },
    {
      title: "Urban Utility e-Billing Modernization",
      summary:
        "Digital billing initiative for utility operations moving large-scale invoicing from paper to electronic workflows.",
      impact: "Reduced operational costs, improved delivery reliability, and supported sustainability goals.",
      technologies: ["C#/.NET", "SQL Optimization", "Docker", "CI/CD"],
    },
  ] as ProjectItem[],
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["C#", ".NET (Core & Framework)", "ASP.NET", "Node.js", "WPF", "Python (familiar)", "Go (familiar)"],
    },
    {
      category: "Architecture & Backend",
      items: [
        "Distributed Systems",
        "Event-Driven Architecture",
        "Microservices",
        "SOA",
        "REST APIs",
        "High Availability",
        "Scalability Engineering",
        "Apache Kafka",
      ],
    },
    {
      category: "Data & Performance",
      items: [
        "SQL Server",
        "T-SQL",
        "Query Optimization",
        "Parallel Processing",
        "Concurrency Control",
        "Thread Safety",
        "Entity Framework",
        "NHibernate",
      ],
    },
    {
      category: "Quality, DevOps & Delivery",
      items: [
        "TDD",
        "xUnit / NUnit",
        "Integration Testing",
        "CI/CD Pipelines",
        "Docker",
        "Kubernetes",
        "Agile / Scrum",
        "Cross-Functional Collaboration",
      ],
    },
  ] as SkillCategory[],
  education: {
    institution: "Azad University (IAU)",
    degree: "Bachelor's Degree in Computer Software Engineering",
    period: "2013 - 2018",
  },
  contact: {
    cta: "Open to Senior Backend and Platform Engineering Roles",
    description:
      "I am currently focused on opportunities where I can lead architecture, ship production-grade distributed systems, and help teams scale with confidence.",
  },
};

export type PortfolioContent = typeof portfolioContent;
