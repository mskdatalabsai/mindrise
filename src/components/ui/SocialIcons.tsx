import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.24C15.9 4.16 15.05 4.1 14.05 4.1c-2.1 0-3.55 1.28-3.55 3.63v2.67H7.9v3h2.6V21h3Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.75 10.87 20 4h-1.6l-5.44 5.97L8.6 4H4l6.56 9.34L4 21h1.6l5.75-6.31L16.6 21H21l-6.9-9.83Zm-2.04 2.24-.67-.94L6 5.13h2.06l4.27 5.98.67.94 5.62 7.87h-2.06l-4.85-6.81Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4ZM20 13.36c0-3.2-1.7-4.69-3.98-4.69-1.83 0-2.65 1-3.11 1.72V8.5H10.03c.04.85 0 12 0 12h2.88v-6.7c0-.36.02-.72.13-.98.28-.72.93-1.46 2.02-1.46 1.42 0 2 1.08 2 2.68V20H20v-6.64Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
