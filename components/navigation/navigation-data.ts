export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationChild[];
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "IT Recruiting",
        href: "/services/it-recruiting",
        description: "Specialised technology talent acquisition.",
      },
      {
        label: "Staff Augmentation",
        href: "/services/staff-augmentation",
        description: "Flexible professionals and extended teams.",
      },
      {
        label: "Technology Consulting",
        href: "/services/technology-consulting",
        description: "Practical advisory and transformation support.",
      },
      {
        label: "Application Development",
        href: "/services/application-development",
        description: "Web, mobile, API, and enterprise engineering.",
      },
      {
        label: "Offshore Development",
        href: "/services/offshore-development",
        description: "Governed distributed engineering delivery.",
      },
      {
        label: "Cloud & DevOps",
        href: "/services/cloud-devops",
        description: "Cloud foundations, automation, and reliability.",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Resources & Insights",
        href: "/resources",
        description: "Technology and workforce perspectives.",
      },
      {
        label: "FAQ",
        href: "/faq",
        description: "Answers about services and engagement models.",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "Verified feedback and testimonial policy.",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
];

export const footerServices = [
  { label: "IT Recruiting", href: "/services/it-recruiting" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation" },
  { label: "Technology Consulting", href: "/services/technology-consulting" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "Offshore Development", href: "/services/offshore-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
];

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerResources = [
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];
