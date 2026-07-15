import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rotem Nevgauker — Links",
  description:
    "Technical co-founder for startups. Book a call, see case studies, and connect.",
  openGraph: {
    title: "Rotem Nevgauker — Links",
    description:
      "Technical co-founder for startups. Book a call, see case studies, and connect.",
    type: "website",
    siteName: "Rotem Nevgauker — Links",
  },
};

// Applies the persisted/preferred theme before paint to avoid a flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white text-neutral-900 antialiased transition-colors dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
