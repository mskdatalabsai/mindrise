import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ProgramCard {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  ctaHref: string;
}

export interface CourseLevel {
  slug: string;
  title: string;
  description: string;
  instructor?: string;
  duration: string;
  level: string;
  detailsHref: string;
  registerHref: string;
}

export interface ConsultingService {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaHref: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
}

export interface ContactChannel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface AudienceSegment {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface EcosystemPillar {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}

export interface FlagshipProgram {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IconLabel {
  icon: LucideIcon;
  label: string;
}

export interface CourseCatalogItem {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: string;
  detailsHref: string;
  demoHref: string;
}

export interface CourseCatalogCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: CourseCatalogItem[];
}

export interface IndustryFocus {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export interface ProcessStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

export interface PolicySection {
  id: string;
  title: string;
  blocks: PolicyBlock[];
}

export type ContactFormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };
