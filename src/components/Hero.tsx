import { profile, socials } from "../data/content";
import { ArrowDown } from "./Icons";
import ReactLogo from "../assets/react-logo.svg";
import JSLogo from "../assets/js-logo.svg";
import CodeLogo from "../assets/code-svg.svg";
import { heroCode } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="wrap py-14 flex flex-col gap-20 lg:flex-row lg:gap-10 md:pt-22 md:pb-24">
      <div>
        <p className="label-mono mb-9 flex items-center gap-2 text-accent">
          <span className="size-1.75 rounded-full bg-accent" />
          Available for work · {profile.city}
        </p>
        <h1 className="max-w-4xl text-hero font-extrabold leading-[1.02] tracking-[-0.05em]">
          I build <span className="text-accent">fast</span>, accessible web
          apps.
        </h1>
        <p className="mt-12 max-w-145 text-xl leading-[1.55] text-muted">
          {profile.intro}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-fg/25 px-7 py-4 text-[15px] font-medium transition hover:border-fg"
          >
            View my work <ArrowDown />
          </a>
          <ul className="flex gap-5 text-sm text-muted">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  className="hover:text-fg hover:font-bold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mb-6 md:items-end">
        <div className="relative w-full sm:w-md">
          <div className="border border-white/10 rounded-2xl w-full bg-[#0d0f0e] shadow-2xl sm:w-md">
            <div className="absolute -inset-10 rounded-full bg-[#D4F55A]/15 blur-3xl -z-10 hidden md:block" />
            <div className="flex gap-2 items-center border-b border-white/10 px-6 py-3">
              <span className="inline-block w-2.5 h-2.5 bg-[#ff5f57] rounded" />
              <span className="inline-block w-2.5 h-2.5 bg-[#febc2e] rounded" />
              <span className="inline-block w-2.5 h-2.5 bg-[#D4F55A] rounded" />
              <span className="text-xs text-muted ml-4">developer.ts</span>
            </div>
            <div className="overflow-x-auto py-4 font-mono text-[13px] leading-7">
              {heroCode.map((line, i) => (
                <div key={i} className="flex whitespace-pre">
                  <span className="w-8 shrink-0 pl-2 text-left text-muted/60 md:w-12 md:pr-4 md:text-right">
                    {i + 1}
                  </span>
                  <code>
                    {line.map((part, i) => (
                      <span key={i} className={part.color}>
                        {part.text}
                      </span>
                    ))}
                  </code>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-float absolute -left-10 -top-6 items-center gap-2 rounded-full border border-white/10 bg-[#141712] px-3 py-2 hidden sm:flex">
            <img src={ReactLogo} width={20} alt="" />
            <span className="font-mono text-xs text-white/80">React</span>
          </div>
          <div className="animate-float absolute -right-8 top-24 items-center gap-2 rounded-full border border-white/10 bg-[#141712] px-3 py-2 [animation-delay:1.5s] hidden sm:flex">
            <img src={JSLogo} width={20} alt="" />
            <span className="font-mono text-xs text-white/80">JavaScript</span>
          </div>
          <div className="animate-float absolute items-center gap-2 -bottom-6 left-10 rounded-full border border-[#D4F55A]/40 bg-[#141712] px-4 py-2 font-mono text-xs [animation-delay:3s] hidden sm:flex">
            <img src={CodeLogo} width={20} alt="" className="inline" />
            <span className="font-mono text-xs text-[#D4F55A]">3+ years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
