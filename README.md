# rotem-links

A single-page "link in bio" (Linktree-style) profile built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint
```

## Editing the links

All content lives in a single typed array so it's easy to edit:

- **[app/data/links.ts](app/data/links.ts)** — add, remove, or reorder links.
  Each entry is a `LinkItem`:

  ```ts
  type LinkItem = {
    label: string;
    url: string;          // must be https://
    icon?: LinkIcon;      // maps to an inline SVG in app/components/Icons.tsx
    section?: "main" | "beyond";
    primary?: boolean;    // one filled accent CTA
  };
  ```

  - `section: "main"` (default) renders in the primary stack; `"beyond"`
    renders as quieter personal links under the "Beyond code" divider.
  - `primary: true` styles a link as the filled accent call-to-action.
  - `icon` must be one of the keys in
    [app/components/Icons.tsx](app/components/Icons.tsx) — add a new SVG there
    to introduce a new icon.

The page ([app/page.tsx](app/page.tsx)) maps over this array and groups by section.

## Theme

Dark mode is class-based (Tailwind `darkMode: "class"`). The toggle is in
[app/components/ThemeToggle.tsx](app/components/ThemeToggle.tsx); the initial
theme respects the OS preference and persists to `localStorage`.

## Avatar

Replace **`public/avatar.png`** with the real profile image (a square image works
best — it's rendered as a 112×112 circle).

## Notes

- All link URLs are `https://`.
- Icons are inline SVGs (no icon library) — see
  [app/components/Icons.tsx](app/components/Icons.tsx).
- Page metadata (title, description, Open Graph) is set in
  [app/layout.tsx](app/layout.tsx).
