export type CategoryFilter =
  | "All"
  | "SaaS"
  | "Web Apps"
  | "Mobile Apps"
  | "Tutorials"
  | "Training"
  | "Explainers";

export interface ProjectCaseStudy {
  overview: string;
  challenge: string;
  approach: string;
  production: string[];
  finalResult: string;
}

export interface Project {
  id: string;
  title: string;
  category: "SaaS" | "Web Apps" | "Mobile Apps" | "Tutorials" | "Training" | "Explainers";
  client: string;
  industry: string;
  description: string;
  videoUrl: string;
  videoId: string;
  thumbnail: string;
  duration?: string;
  services: string[];
  featured: boolean;
  order?: number;
  caseStudy: ProjectCaseStudy;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: "Software & SaaS" | "Web & Mobile" | "Training & Education" | "Explainer & Product" | "Production Support";
  features: string[];
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverable: string;
  icon: string;
}
