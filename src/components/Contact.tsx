import { profile, socials } from "../data/content";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="wrap flex flex-col mt-20 border-t border-line pt-18 pb-20"
    >
      <SectionLabel index="04" title="Contact" className="mb-11" />
      <h2 className="mb-11 max-w-190 text-cta font-extrabold leading-[1.02] tracking-[-0.05em]">
        Let's build something <span className="text-accent">together.</span>
      </h2>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex rounded-full bg-accent px-12 md:px-7 py-3 border border-accent text-[15px] font-medium text-bg transition hover:-translate-y-px"
          >
            {profile.emailLabel.toUpperCase()}
          </a>
        </div>
        {/* <div> */}
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            className="px-12 md:px-7 py-3 border border-accent rounded-full transition hover:-translate-y-px hover:text-fg"
          >
            {s.label} <span className="text-xs ml-1">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
