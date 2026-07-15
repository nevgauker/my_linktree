import Image from "next/image";
import { links } from "./data/links";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12">
      {/* Profile header */}
      <header className="flex flex-col items-center text-center">
        <Image
          src="/avatar.png"
          alt="Rotem Nevgauker"
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover shadow-md ring-2 ring-white"
        />
        <h1 className="mt-4 text-xl font-semibold tracking-tight">@rotemn</h1>
      </header>

      {/* Links */}
      <nav aria-label="Profile links" className="mt-8 w-full">
        <ul className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium shadow-sm ring-1 ring-neutral-200 transition duration-150 hover:-translate-y-0.5 hover:shadow-md hover:ring-neutral-300 active:translate-y-0 active:shadow-sm active:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                {link.icon && (
                  <span aria-hidden="true" className="text-base">
                    {link.icon}
                  </span>
                )}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="mt-10 text-xs text-neutral-400">
        © {new Date().getFullYear()} Rotem Nevgauker
      </footer>
    </main>
  );
}
