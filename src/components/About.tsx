import { profile, codeLines } from "../data/content";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="wrap pt-10 pb-20">
      <SectionLabel index="02" title="About" />

      <div className="overflow-hidden rounded-2xl border border-line md:grid-cols-[minmax(0,1fr)_440px] lg:grid">
        <div className="p-3 md:p-4">
          <div className="overflow-hidden rounded-xl border border-line bg-card">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="size-3 rounded-full bg-fg/15" />
              <span className="size-3 rounded-full bg-fg/15" />
              <span className="size-3 rounded-full bg-fg/15" />
              <span className="ml-3 font-mono text-[10px] text-muted">
                skills.ts
              </span>
            </div>

            <div className="overflow-x-auto py-4 font-mono text-[13px] leading-7">
              {codeLines.map((line, index) => (
                <div key={index} className="flex md:whitespace-pre">
                  <span className="w-8 shrink-0 pl-2 text-left text-muted/60 sm:w-12 sm:pr-4 sm:text-right">
                    {index + 1}
                  </span>
                  <code className="flex flex-wrap sm:block">
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
        </div>

        <div className="border-t border-line bg-[repeating-linear-gradient(135deg,transparent_0,transparent_6px,rgba(255,255,255,0.045)_6px,rgba(255,255,255,0.045)_7px)] p-6 md:grid place-items-center md:border-l md:border-t-0">
          <article className="w-full max-w-sm rounded-[28px] border border-line bg-card-inner p-3 lg:max-w-[300px]">
            <div className="rounded-[18px] bg-bg p-5">
              <div className="overflow-hidden rounded-lg border border-line">
                <div className="flex items-center justify-between px-3 py-2 text-[13px] font-medium">
                  <span>About me</span>
                  <span>3+ yrs</span>
                </div>

                <div className="grid aspect-[4/3] place-items-center bg-linear-to-br from-accent via-lime-300 to-emerald-400">
                  <span className="text-6xl font-extrabold tracking-[-0.05em] text-bg">
                    AB
                  </span>
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em]">
                {profile.name}
              </h3>

              <p className="text-[15px] text-muted">
                Frontend Developer · Fintech
              </p>

              <p className="mt-4 text-sm leading-relaxed text-fg/80">
                {profile.about}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
