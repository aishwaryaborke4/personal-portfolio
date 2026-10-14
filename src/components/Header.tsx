import { nav, profile } from "../data/content";
import { ArrowUpRight } from "./Icons";

export default function Header() {
  return (
    <header className="wrap flex items-center justify-between border-b border-line p-5 md:pb-7.5 md:pt-8">
      <a href="/" className="text-[22px] font-extrabold tracking-[-0.03em]">
        {profile.name}
        <span className="text-accent">.</span>
      </a>
      <nav className="flex items-center gap-8" aria-label="Primary">
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hidden items-baseline gap-1.5 text-[15px] text-fg/80 hover:text-fg hover:font-bold md:inline-flex"
          >
            <span className="font-mono text-[10px] text-muted hover:font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
          </a>
        ))}
        <a
          href={profile.resumeHref}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5.5 py-2.5 text-xs font-medium text-bg transition hover:-translate-y-px md:text-[15px]"
        >
          Résumé <ArrowUpRight />
        </a>
      </nav>
    </header>
  );
}
