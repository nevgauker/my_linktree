export type LinkSection = "main" | "beyond";

export type LinkIcon =
  | "calendar"
  | "website"
  | "case-study"
  | "github"
  | "linkedin"
  | "article"
  | "instagram"
  | "camera";

export type LinkItem = {
  label: string;
  url: string;
  icon?: LinkIcon;
  section?: LinkSection;
  /** Renders as the filled accent primary call-to-action. */
  primary?: boolean;
};

/**
 * Edit this array to change the links shown on the page.
 * - `section` groups links into "main" (business) or "beyond" (personal footnote).
 * - `primary` styles a single link as the filled accent CTA.
 * - `icon` maps to an inline SVG defined in app/page.tsx.
 * All URLs must be https://.
 */
export const links: LinkItem[] = [
  {
    label: "Book a Strategy Call",
    url: "https://calendly.com/nevgauker/initial-counseling",
    icon: "calendar",
    section: "main",
    primary: true,
  },
  {
    label: "My Website — Technical Partner for Startups",
    url: "https://www.rotemnev.com/en",
    icon: "website",
    section: "main",
  },
  {
    label: "Case Study: Board Game Hub",
    url: "https://www.rotemnev.com/en/case-studies/board-game-hub",
    icon: "case-study",
    section: "main",
  },
  {
    label: "GitHub",
    url: "https://github.com/nevgauker",
    icon: "github",
    section: "main",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rotem-nevgauker-73622037/",
    icon: "linkedin",
    section: "main",
  },
  {
    label: "Article: Flutter Through the Eyes of an iOS Developer",
    url: "https://medium.com/@rotemnevgauker/how-flutter-feels-to-an-experienced-ios-developer-ec4c456ceb2e",
    icon: "article",
    section: "main",
  },
  {
    label: "Photography — Flickr Gallery",
    url: "https://www.flickr.com/photos/nevgauker/",
    icon: "camera",
    section: "beyond",
  },
  {
    label: "Photography Portfolio",
    url: "https://nevgauker.wixsite.com/rotem",
    icon: "camera",
    section: "beyond",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/nevgauker",
    icon: "instagram",
    section: "beyond",
  },
];
