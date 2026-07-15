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
  type LinkItem = { label: string; url: string; icon?: string };
  ```

  `icon` is optional (an emoji or short string shown before the label).

The page ([app/page.tsx](app/page.tsx)) simply maps over this array.

## Avatar

Replace **`public/avatar.png`** with the real profile image (a square image works
best — it's rendered as a 112×112 circle).

## Notes

- The Apple App Store link in `app/data/links.ts` is a **placeholder** — confirm
  the exact URL and update it.
- Theme is intentionally neutral (light background, dark text) for now; styling
  will be refined later.
- Page metadata (title, description, Open Graph) is set in
  [app/layout.tsx](app/layout.tsx).
