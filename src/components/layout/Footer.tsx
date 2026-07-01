import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/SocialIcons";
import { footerLinkGroups, siteConfig, socialLinks } from "@/lib/data";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-xl font-extrabold text-fog-100">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-fog-400">{siteConfig.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fog-400 transition-colors hover:border-brand-teal/50 hover:text-brand-teal"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-fog-100">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-fog-400 transition-colors hover:text-fog-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-hairline pt-8 text-center text-xs text-fog-400">
          <p>
            © {year} {siteConfig.parentCompany}. All Rights Reserved.
            <br className="sm:hidden" /> {siteConfig.name} is a brand of{" "}
            {siteConfig.parentCompany}.
          </p>
        </div>
      </div>
    </footer>
  );
}
