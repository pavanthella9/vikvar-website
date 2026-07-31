import {
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Globe2,
  Layers3,
  UsersRound,
} from "lucide-react";
import type { ServicePageData } from "./service-page-template";

const standardProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "Clarify the business goal, constraints, stakeholders, existing environment, and expected outcome.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the engagement model, responsibilities, milestones, communication rhythm, and success measures.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Deliver through a structured workflow with clear ownership, reporting, and issue management.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Measure progress, gather feedback, refine priorities, and prepare the next phase of delivery.",
  },
];

export const servicePages: Record<string, ServicePageData> = {
  "it-recruiting": {
    eyebrow: "Talent Acquisition",
    title: "IT Recruiting",
    description:
      "Find specialised technology professionals through a structured recruiting process aligned to role requirements, business context, location, and timeline.",
    heroPoints: [
      "Role and skill requirement clarification",
      "Targeted technology talent sourcing",
      "Candidate screening and coordination",
      "Flexible support for local and international hiring",
    ],
    icon: BriefcaseBusiness,
    overviewTitle: "Technology recruiting built around role quality and fit",
    overviewDescription:
      "Vikvar supports organisations seeking technology talent across software engineering, cloud, DevOps, enterprise applications, quality engineering, cybersecurity, data, and other specialised domains. The engagement can cover a single critical hire, recurring recruitment support, or coordinated hiring for a growing technology function.",
    capabilities: [
      {
        title: "Requirement discovery",
        description:
          "Translate business and technical needs into clear role expectations, skills, experience, location, and evaluation criteria.",
      },
      {
        title: "Talent sourcing",
        description:
          "Identify relevant professionals through targeted search, network outreach, and role-specific sourcing strategies.",
      },
      {
        title: "Candidate screening",
        description:
          "Review experience, role alignment, communication, availability, and practical suitability before submission.",
      },
      {
        title: "Interview coordination",
        description:
          "Support scheduling, communication, feedback follow-up, and candidate engagement throughout the process.",
      },
      {
        title: "Offer and onboarding support",
        description:
          "Help maintain clear communication through offer discussions, notice periods, joining preparation, and onboarding.",
      },
      {
        title: "Multi-market hiring support",
        description:
          "Support technology hiring requirements across the United States, India, UAE, Singapore, Malaysia, and other markets.",
      },
    ],
    benefits: [
      {
        title: "Technology-focused search",
        description:
          "Recruiting activity is shaped around the role’s technical environment rather than broad generic sourcing.",
      },
      {
        title: "Transparent communication",
        description:
          "Maintain visibility across requirement changes, candidate progress, feedback, and next actions.",
      },
      {
        title: "Flexible engagement",
        description:
          "Use Vikvar for priority roles, ongoing recruitment support, or coordinated team expansion.",
      },
      {
        title: "Global perspective",
        description:
          "Address location, relocation, remote work, market availability, and cross-border hiring considerations.",
      },
    ],
    process: standardProcess,
    technologies: [
      "Java",
      ".NET",
      "Python",
      "Cloud",
      "DevOps",
      "SAP",
      "QA",
      "Cybersecurity",
      "Data",
      "Mobile",
    ],
    relatedServices: [
      { title: "Staff Augmentation", href: "/services/staff-augmentation" },
      {
        title: "Technology Consulting",
        href: "/services/technology-consulting",
      },
      {
        title: "Offshore Development",
        href: "/services/offshore-development",
      },
    ],
    ctaTitle: "Need specialised technology talent?",
    ctaDescription:
      "Share the role, skills, location, hiring timeline, and engagement expectations with Vikvar Technologies.",
  },

  "staff-augmentation": {
    eyebrow: "Flexible Team Expansion",
    title: "Staff Augmentation",
    description:
      "Extend internal delivery capacity with technology professionals and teams aligned to your environment, working model, priorities, and timeline.",
    heroPoints: [
      "Individual specialists or coordinated teams",
      "Short-term and long-term engagement options",
      "Remote, hybrid, and location-based models",
      "Support across applications, cloud, DevOps, QA, and enterprise platforms",
    ],
    icon: UsersRound,
    overviewTitle: "Flexible access to technology capacity when priorities change",
    overviewDescription:
      "Vikvar helps organisations address delivery gaps, specialist skill requirements, project peaks, and team expansion needs. Professionals can work within existing client processes or as part of a coordinated extended team, depending on the engagement structure.",
    capabilities: [
      {
        title: "Specialist professionals",
        description:
          "Add focused expertise for application development, cloud, DevOps, QA, cybersecurity, data, SAP, and related areas.",
      },
      {
        title: "Extended delivery teams",
        description:
          "Build coordinated groups of engineers, testers, analysts, architects, and technical leads.",
      },
      {
        title: "Project capacity support",
        description:
          "Increase delivery capacity during critical programmes, transformation initiatives, or periods of rapid demand.",
      },
      {
        title: "Skill gap coverage",
        description:
          "Address capabilities that are not currently available or sufficiently scaled within the internal team.",
      },
      {
        title: "Flexible engagement duration",
        description:
          "Structure support for a focused period, an ongoing programme, or a phased transition.",
      },
      {
        title: "Operational coordination",
        description:
          "Align communication, reporting, access, responsibilities, and working practices with the client environment.",
      },
    ],
    benefits: [
      {
        title: "Faster access to capacity",
        description:
          "Reduce delays created by immediate skill gaps or changing project demand.",
      },
      {
        title: "Scalable structure",
        description:
          "Expand or reshape the team as priorities, milestones, and delivery conditions evolve.",
      },
      {
        title: "Client-aligned delivery",
        description:
          "Professionals work within agreed client governance, tools, standards, and communication practices.",
      },
      {
        title: "Broader technology coverage",
        description:
          "Combine multiple skill areas to support connected technology initiatives.",
      },
    ],
    process: standardProcess,
    technologies: [
      "Software Engineering",
      "Cloud",
      "DevOps",
      "QA",
      "SAP",
      "Data",
      "Cybersecurity",
      "Mobile",
    ],
    relatedServices: [
      { title: "IT Recruiting", href: "/services/it-recruiting" },
      {
        title: "Technology Consulting",
        href: "/services/technology-consulting",
      },
      {
        title: "Offshore Development",
        href: "/services/offshore-development",
      },
    ],
    ctaTitle: "Need to expand your technology team?",
    ctaDescription:
      "Tell us the capabilities, team structure, timeline, and working model required for your initiative.",
  },

  "technology-consulting": {
    eyebrow: "Advisory & Transformation",
    title: "Technology Consulting",
    description:
      "Turn business priorities into practical technology plans across architecture, modernisation, delivery strategy, operating models, and transformation execution.",
    heroPoints: [
      "Technology and delivery assessment",
      "Architecture and modernisation planning",
      "Operating model and capability improvement",
      "Practical transformation roadmaps",
    ],
    icon: Layers3,
    overviewTitle: "Practical guidance connected to execution",
    overviewDescription:
      "Vikvar supports organisations evaluating technology direction, improving delivery performance, modernising existing environments, or planning new capabilities. Consulting engagements are shaped around decisions and outcomes rather than producing documentation without a clear path to execution.",
    capabilities: [
      {
        title: "Technology assessment",
        description:
          "Review current applications, platforms, processes, risks, dependencies, and capability gaps.",
      },
      {
        title: "Architecture planning",
        description:
          "Define practical target-state architecture and transition considerations aligned to business priorities.",
      },
      {
        title: "Modernisation strategy",
        description:
          "Plan application, platform, cloud, integration, and operational modernisation in manageable phases.",
      },
      {
        title: "Delivery improvement",
        description:
          "Review governance, team structure, workflows, tooling, quality controls, and release practices.",
      },
      {
        title: "Transformation roadmap",
        description:
          "Sequence initiatives, decisions, dependencies, milestones, and ownership into an actionable plan.",
      },
      {
        title: "Execution support",
        description:
          "Connect advisory work to engineering, staffing, offshore delivery, cloud, and DevOps capabilities where required.",
      },
    ],
    benefits: [
      {
        title: "Business-aligned decisions",
        description:
          "Technology recommendations remain connected to cost, risk, speed, operations, and measurable outcomes.",
      },
      {
        title: "Practical sequencing",
        description:
          "Break large transformation goals into realistic phases with visible dependencies and ownership.",
      },
      {
        title: "Cross-functional perspective",
        description:
          "Consider people, process, architecture, engineering, operations, quality, and governance together.",
      },
      {
        title: "Execution continuity",
        description:
          "Move from assessment and planning into implementation support without losing context.",
      },
    ],
    process: standardProcess,
    technologies: [
      "Application Architecture",
      "Cloud Strategy",
      "DevOps",
      "Integration",
      "Data",
      "Security",
      "QA",
      "Operating Models",
    ],
    relatedServices: [
      {
        title: "Application Development",
        href: "/services/application-development",
      },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
      { title: "Staff Augmentation", href: "/services/staff-augmentation" },
    ],
    ctaTitle: "Planning a technology transformation?",
    ctaDescription:
      "Share the current environment, business objective, constraints, and decisions your organisation needs to make.",
  },

  "application-development": {
    eyebrow: "Digital Engineering",
    title: "Application Development",
    description:
      "Design, build, modernise, integrate, test, and support business applications with maintainable engineering and clear delivery ownership.",
    heroPoints: [
      "Web, mobile, API, and enterprise applications",
      "Modernisation and integration",
      "Quality engineering and release readiness",
      "Support for new and existing platforms",
    ],
    icon: Code2,
    overviewTitle: "Application delivery built for business use and long-term maintainability",
    overviewDescription:
      "Vikvar supports new application development, enhancement of existing systems, platform modernisation, integration, testing, and ongoing engineering. Engagements can be delivered as focused projects, extended teams, or coordinated offshore development.",
    capabilities: [
      {
        title: "Product and solution discovery",
        description:
          "Clarify users, workflows, business rules, integrations, constraints, and delivery priorities.",
      },
      {
        title: "Web application development",
        description:
          "Build responsive business applications and digital experiences using modern frontend and backend technologies.",
      },
      {
        title: "Mobile application development",
        description:
          "Develop mobile experiences aligned to user needs, platform expectations, security, and integration requirements.",
      },
      {
        title: "API and integration engineering",
        description:
          "Connect applications, services, data sources, and third-party platforms through reliable integration patterns.",
      },
      {
        title: "Application modernisation",
        description:
          "Improve architecture, usability, maintainability, performance, security, and deployment practices.",
      },
      {
        title: "Quality and support",
        description:
          "Apply testing, release validation, defect management, monitoring, and ongoing enhancement workflows.",
      },
    ],
    benefits: [
      {
        title: "Outcome-focused delivery",
        description:
          "Prioritise useful business capability, user experience, and operational readiness.",
      },
      {
        title: "Maintainable engineering",
        description:
          "Use clear architecture, documentation, testing, and coding practices that support future change.",
      },
      {
        title: "Flexible team models",
        description:
          "Engage a project team, specialist professionals, or an extended offshore delivery function.",
      },
      {
        title: "Connected operations",
        description:
          "Integrate cloud, DevOps, testing, security, and support considerations into application delivery.",
      },
    ],
    process: standardProcess,
    technologies: [
      "Java",
      ".NET",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "APIs",
      "Mobile",
      "SQL",
      "Cloud",
    ],
    relatedServices: [
      {
        title: "Offshore Development",
        href: "/services/offshore-development",
      },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
      {
        title: "Technology Consulting",
        href: "/services/technology-consulting",
      },
    ],
    ctaTitle: "Need to build or modernise an application?",
    ctaDescription:
      "Tell us about the users, business workflow, existing systems, technology environment, and delivery timeline.",
  },

  "offshore-development": {
    eyebrow: "Distributed Engineering",
    title: "Offshore Development",
    description:
      "Create a scalable distributed delivery capability supported by clear governance, communication, engineering standards, and shared ownership.",
    heroPoints: [
      "Dedicated and extended engineering teams",
      "Transparent governance and reporting",
      "Flexible team composition",
      "Support across applications, QA, cloud, and DevOps",
    ],
    icon: Globe2,
    overviewTitle: "Distributed delivery without losing visibility or control",
    overviewDescription:
      "Vikvar helps organisations establish offshore development capacity for applications, platforms, testing, cloud, DevOps, support, and ongoing enhancement. The focus is not only staffing the team, but defining the working model required for effective collaboration and reliable delivery.",
    capabilities: [
      {
        title: "Dedicated development teams",
        description:
          "Build a stable team aligned to a product, platform, programme, or ongoing engineering function.",
      },
      {
        title: "Extended team model",
        description:
          "Add offshore professionals who collaborate directly with internal teams and existing delivery leadership.",
      },
      {
        title: "Delivery governance",
        description:
          "Define ownership, communication, ceremonies, reporting, escalation, documentation, and quality expectations.",
      },
      {
        title: "Application engineering",
        description:
          "Support new development, modernisation, integration, testing, release, maintenance, and enhancement.",
      },
      {
        title: "Cloud and DevOps support",
        description:
          "Add capabilities for infrastructure automation, CI/CD, containers, monitoring, and platform operations.",
      },
      {
        title: "Team scaling",
        description:
          "Expand, reshape, or phase the delivery team as business priorities and workloads change.",
      },
    ],
    benefits: [
      {
        title: "Scalable capacity",
        description:
          "Increase delivery capability without limiting the team to one fixed structure.",
      },
      {
        title: "Operating transparency",
        description:
          "Maintain visibility through agreed reporting, communication, ownership, and escalation practices.",
      },
      {
        title: "Technology breadth",
        description:
          "Combine engineering, testing, cloud, DevOps, data, and enterprise application capabilities.",
      },
      {
        title: "Long-term continuity",
        description:
          "Create stable knowledge, repeatable processes, and an engagement model that can mature over time.",
      },
    ],
    process: standardProcess,
    technologies: [
      "Application Engineering",
      "QA",
      "Cloud",
      "DevOps",
      "Data",
      "SAP",
      "Mobile",
      "Support",
    ],
    relatedServices: [
      {
        title: "Application Development",
        href: "/services/application-development",
      },
      { title: "Staff Augmentation", href: "/services/staff-augmentation" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
    ctaTitle: "Considering an offshore delivery model?",
    ctaDescription:
      "Share the required capabilities, current team structure, delivery challenges, and preferred collaboration model.",
  },

  "cloud-devops": {
    eyebrow: "Cloud Engineering & Automation",
    title: "Cloud & DevOps",
    description:
      "Strengthen cloud foundations, delivery automation, container platforms, reliability, security practices, and operational visibility.",
    heroPoints: [
      "Cloud platform and landing-zone support",
      "Infrastructure as code and automation",
      "CI/CD and container delivery",
      "Monitoring, reliability, and operational improvement",
    ],
    icon: CloudCog,
    overviewTitle: "Cloud and delivery practices that support reliable execution",
    overviewDescription:
      "Vikvar supports organisations improving cloud environments, infrastructure automation, deployment workflows, container platforms, observability, and operational practices. Cloud and DevOps services can support application initiatives, transformation programmes, or targeted platform improvements.",
    capabilities: [
      {
        title: "Cloud foundations",
        description:
          "Support account structure, access, networking, governance, security baselines, and environment design.",
      },
      {
        title: "Infrastructure as code",
        description:
          "Automate repeatable infrastructure provisioning and configuration using maintainable code-based practices.",
      },
      {
        title: "CI/CD enablement",
        description:
          "Improve build, test, security, deployment, approval, and release workflows.",
      },
      {
        title: "Containers and orchestration",
        description:
          "Support containerisation, Kubernetes environments, deployment patterns, and operational readiness.",
      },
      {
        title: "Observability and reliability",
        description:
          "Improve logs, metrics, alerts, dashboards, incident visibility, and service reliability practices.",
      },
      {
        title: "DevSecOps integration",
        description:
          "Introduce practical security controls into infrastructure, code, build, and deployment workflows.",
      },
    ],
    benefits: [
      {
        title: "Repeatable delivery",
        description:
          "Reduce manual variation through automation, standards, and reusable infrastructure patterns.",
      },
      {
        title: "Improved release confidence",
        description:
          "Connect testing, security, approval, and deployment activities into visible workflows.",
      },
      {
        title: "Operational visibility",
        description:
          "Create stronger monitoring, alerting, incident context, and platform awareness.",
      },
      {
        title: "Application alignment",
        description:
          "Shape cloud and DevOps work around actual application and business delivery needs.",
      },
    ],
    process: standardProcess,
    technologies: [
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Argo CD",
      "Ansible",
      "SonarQube",
      "Trivy",
    ],
    relatedServices: [
      {
        title: "Application Development",
        href: "/services/application-development",
      },
      {
        title: "Technology Consulting",
        href: "/services/technology-consulting",
      },
      {
        title: "Offshore Development",
        href: "/services/offshore-development",
      },
    ],
    ctaTitle: "Need stronger cloud and delivery foundations?",
    ctaDescription:
      "Tell us about your applications, cloud environment, deployment process, operational challenges, and target outcomes.",
  },
};
