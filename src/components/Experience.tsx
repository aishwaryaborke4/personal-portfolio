import { experience } from "../data/content";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="wrap pt-10 pb-20">
      <SectionLabel index="03" title="Experience" />
      <ul className="border-t border-line">
        {experience.map((job) => (
          <li
            key={job.period}
            className="grid gap-1 border-b border-line py-8 md:grid-cols-[190px_1fr] md:gap-4"
          >
            <span className="label-mono text-muted md:pt-2.5">
              [{job.period}]
            </span>
            <div>
              <h3 className="text-2xl leading-tight font-bold tracking-[-0.03em]">
                {job.role}
              </h3>
              <p className="text-[17px] text-muted">{job.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
