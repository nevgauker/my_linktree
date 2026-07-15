export type LinkItem = {
  label: string;
  url: string;
  icon?: string;
};

/**
 * Edit this array to change the links shown on the page.
 * `icon` is optional — an emoji or short string rendered before the label.
 */
export const links: LinkItem[] = [
  {
    // Placeholder — confirm the exact App Store developer/app URL.
    label: "Apple App Store",
    url: "https://apps.apple.com/developer/rotem-nevgauker",
    icon: "🍎",
  },
  {
    label: "My Github Profile",
    url: "https://github.com/nevgauker",
    icon: "💻",
  },
  {
    label: "Full Stack Developer - My Website",
    url: "http://rotemnev.com",
    icon: "🌐",
  },
  {
    label: "My Linkedin Profile",
    url: "https://www.linkedin.com/in/rotem-nevgauker-73622037/",
    icon: "💼",
  },
  {
    label: "My Facebook Profile",
    url: "https://www.facebook.com/rotem.nevgauker",
    icon: "📘",
  },
  {
    label: "instagram.com",
    url: "https://instagram.com/nevgauker",
    icon: "📷",
  },
  {
    label: "Photography Portfolio",
    url: "http://nevgauker.wixsite.com/rotem",
    icon: "🖼️",
  },
  {
    label: "rotem nevgauker",
    url: "http://www.flickr.com/photos/nevgauker/",
    icon: "📸",
  },
];
