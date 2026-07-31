export const caseStudies = [
  {
    slug: "technology-team-expansion",
    title: "Scaling a technology delivery team",
    industry: "Technology",
    service: "IT Recruiting & Staff Augmentation",
    summary: "A representative scenario showing how Vikvar can support multi-role technology hiring and phased team expansion.",
    challenge: "The organisation needed professionals across application engineering, cloud, QA, and delivery coordination while maintaining a consistent screening and onboarding process.",
    approach: [
      "Clarified skills, seniority, location, interview ownership, and joining timelines.",
      "Created a structured sourcing, screening, and candidate-tracking workflow.",
      "Coordinated interviews, feedback, selection, and phased onboarding.",
      "Maintained visibility across open roles and candidate stages."
    ],
    outcomes: [
      "A repeatable multi-role hiring process.",
      "Clearer candidate and interview visibility.",
      "Flexible delivery-team expansion.",
      "A foundation for continued recruiting support."
    ],
    technologies: ["Java", ".NET", "Python", "Cloud", "QA", "DevOps"]
  },
  {
    slug: "application-modernization",
    title: "Modernising a business application",
    industry: "Business Services",
    service: "Application Development",
    summary: "A representative application-modernisation scenario focused on maintainability, integration readiness, and delivery confidence.",
    challenge: "A business-critical application had accumulated technical complexity, inconsistent release practices, and limited integration flexibility.",
    approach: [
      "Reviewed architecture, dependencies, interfaces, and operating constraints.",
      "Defined a phased roadmap that protected business continuity.",
      "Improved modularity and API integration patterns.",
      "Introduced structured testing and release controls."
    ],
    outcomes: [
      "Clearer application ownership boundaries.",
      "Improved integration readiness.",
      "More predictable releases.",
      "Reduced dependency on undocumented processes."
    ],
    technologies: ["React", "Node.js", ".NET", "REST APIs", "SQL", "CI/CD"]
  },
  {
    slug: "cloud-delivery-foundation",
    title: "Establishing a cloud and DevOps foundation",
    industry: "Digital Services",
    service: "Cloud & DevOps",
    summary: "A representative cloud-delivery scenario focused on automation, environment consistency, and operational visibility.",
    challenge: "The engineering team relied on manual infrastructure changes and inconsistent deployment steps across environments.",
    approach: [
      "Reviewed cloud accounts, environments, deployments, and access controls.",
      "Defined infrastructure-as-code standards and reusable patterns.",
      "Introduced CI/CD workflows with validation and approvals.",
      "Documented monitoring, recovery, and operating responsibilities."
    ],
    outcomes: [
      "More consistent environment provisioning.",
      "Reduced manual deployment dependency.",
      "Improved change traceability.",
      "A scalable platform foundation."
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Monitoring"]
  }
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
