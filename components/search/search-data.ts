export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: "Company" | "Services" | "Industries" | "Careers" | "Legal";
  keywords: string[];
};

export const searchItems: SearchItem[] = [
  {
    title: "Home",
    description:
      "Overview of Vikvar Technologies, our services, technology coverage, global presence, and engagement approach.",
    href: "/",
    category: "Company",
    keywords: ["vikvar", "technology", "talent", "consulting", "delivery"],
  },
  {
    title: "About Vikvar Technologies",
    description:
      "Learn about Vikvar Technologies, our approach, values, global operations, and technology service capabilities.",
    href: "/about",
    category: "Company",
    keywords: ["about", "company", "values", "global", "organization"],
  },
  {
    title: "IT Recruiting",
    description:
      "Technology recruiting support across application, cloud, DevOps, enterprise, data, QA, cybersecurity, and mobile skills.",
    href: "/services/it-recruiting",
    category: "Services",
    keywords: [
      "recruiting",
      "recruitment",
      "hiring",
      "talent",
      "staffing",
      "candidates",
      "java",
      "dotnet",
      "python",
      "sap",
    ],
  },
  {
    title: "Staff Augmentation",
    description:
      "Flexible technology professionals and team expansion support for projects, programs, and ongoing delivery requirements.",
    href: "/services/staff-augmentation",
    category: "Services",
    keywords: ["staff augmentation", "contract", "team extension", "resources"],
  },
  {
    title: "Technology Consulting",
    description:
      "Technology strategy, planning, architecture, implementation guidance, modernization, and transformation support.",
    href: "/services/technology-consulting",
    category: "Services",
    keywords: ["consulting", "strategy", "architecture", "transformation"],
  },
  {
    title: "Application Development",
    description:
      "Design, build, modernize, integrate, test, and support business applications and digital platforms.",
    href: "/services/application-development",
    category: "Services",
    keywords: [
      "application development",
      "software",
      "web",
      "mobile",
      "api",
      "integration",
    ],
  },
  {
    title: "Offshore Development",
    description:
      "Distributed engineering teams, offshore delivery models, governance, collaboration, and scalable development support.",
    href: "/services/offshore-development",
    category: "Services",
    keywords: ["offshore", "development center", "distributed", "remote team"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud modernization, infrastructure automation, CI/CD, Kubernetes, reliability, security, and platform operations.",
    href: "/services/cloud-devops",
    category: "Services",
    keywords: [
      "cloud",
      "devops",
      "aws",
      "azure",
      "kubernetes",
      "terraform",
      "cicd",
      "automation",
    ],
  },
  {
    title: "Industries",
    description:
      "Explore the industries and business environments supported by Vikvar Technologies.",
    href: "/industries",
    category: "Industries",
    keywords: [
      "industries",
      "healthcare",
      "financial",
      "retail",
      "manufacturing",
      "technology",
    ],
  },
  {
    title: "Careers",
    description:
      "Explore career opportunities and submit your profile to the Vikvar Technologies recruitment team.",
    href: "/careers",
    category: "Careers",
    keywords: ["careers", "jobs", "openings", "resume", "work", "employment"],
  },
  {
    title: "Contact",
    description:
      "Contact Vikvar Technologies for business enquiries, recruiting, consulting, engineering, cloud, and delivery requirements.",
    href: "/contact",
    category: "Company",
    keywords: ["contact", "email", "phone", "office", "enquiry", "location"],
  },
  {
    title: "Privacy Policy",
    description:
      "Read how Vikvar Technologies handles information submitted through the website.",
    href: "/privacy",
    category: "Legal",
    keywords: ["privacy", "data", "policy", "information"],
  },
  {
    title: "Terms and Conditions",
    description:
      "Review the terms governing use of the Vikvar Technologies website.",
    href: "/terms",
    category: "Legal",
    keywords: ["terms", "conditions", "legal", "website use"],
  },
];
