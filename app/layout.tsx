import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rotem Nevgauker — Links",
  description:
    "All of Rotem Nevgauker's links in one place — GitHub, website, LinkedIn, photography portfolio, and more.",
  openGraph: {
    title: "Rotem Nevgauker — Links",
    description:
      "All of Rotem Nevgauker's links in one place — GitHub, website, LinkedIn, photography portfolio, and more.",
    type: "website",
    siteName: "Rotem Nevgauker — Links",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
