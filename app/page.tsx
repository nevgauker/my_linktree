import Image from "next/image";
import { links, type LinkItem } from "./data/links";
import { LinkGlyph } from "./components/Icons";
import ThemeToggle from "./components/ThemeToggle";

const mainLinks = links.filter((l) => l.section !== "beyond");
const beyondLinks = links.filter((l) => l.section === "beyond");

function MainLink({ link }: { link: LinkItem }) {
  const primary =
    "border-transparent bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 active:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:active:bg-neutral-300";
  const ghost =
    "border-neutral-200 bg-transparent text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:active:bg-neutral-800";

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={`flex min-h-[52px] w-full items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 ${
        link.primary ? primary : ghost
      }`}
    >
      {link.icon && (
        <LinkGlyph name={link.icon} className="shrink-0 opacity-90" />
      )}
      <span className="flex-1 text-center">{link.label}</span>
      {/* keeps the label optically centered against the leading icon */}
      <span aria-hidden="true" className="w-5 shrink-0" />
    </a>
  );
}

function BeyondLink({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-neutral-500 transition hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-neutral-500 dark:hover:text-neutral-300 dark:focus-visible:ring-neutral-600"
    >
      {link.icon && (
        <LinkGlyph name={link.icon} width={16} height={16} className="shrink-0" />
      )}
      <span>{link.label}</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-10">
      {/* Theme toggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* Profile header */}
      <header className="mt-4 flex flex-col items-center text-center">
        <Image
          src="/avatar.png"
          alt="Rotem Nevgauker"
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover shadow-md ring-2 ring-white dark:ring-neutral-800"
        />
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">
          Rotem Nevgauker
        </h1>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Your technical co-founder. Without the equity. I build MVPs, scale
          products, and automate operations with AI.
        </p>
      </header>

      {/* Main links */}
      <nav aria-label="Main links" className="mt-8 w-full">
        <ul className="flex w-full flex-col gap-3">
          {mainLinks.map((link) => (
            <li key={link.url}>
              <MainLink link={link} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Beyond code */}
      {beyondLinks.length > 0 && (
        <section aria-labelledby="beyond-heading" className="mt-10 w-full">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <h2
              id="beyond-heading"
              className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500"
            >
              Beyond code
            </h2>
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <ul className="mt-3 flex flex-col items-center gap-1">
            {beyondLinks.map((link) => (
              <li key={link.url}>
                <BeyondLink link={link} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="mt-auto pt-10 text-center text-xs text-neutral-400 dark:text-neutral-600">
        © {new Date().getFullYear()} Rotem Nevgauker
      </footer>
    </main>
  );
}
