import { featured } from "../data/content";
import { ArrowUpRight } from "./Icons";
import SectionLabel from "./SectionLabel";
import ScreenVideo from "../assets/screen-video.mp4";

export default function Work() {
  return (
    <section id="work" className="wrap pt-10 pb-20">
      <SectionLabel index="01" title="Selected work">
        <a href="#" className="inline-flex items-center gap-1 hover:text-fg">
          All projects <ArrowUpRight size={10} />
        </a>
      </SectionLabel>

      <a
        href={featured.href}
        className="block rounded-3xl border border-line bg-card p-5"
      >
        <div className="label-mono grid h-[clamp(180px,36vw,320px)] place-items-center rounded-[14px] bg-card-inner text-[10px] text-muted/70">
          <video
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Scroll-through preview of my personal portfolio website"
          >
            <source src={ScreenVideo} type="video/mp4" />
          </video>
        </div>
        <div className="flex items-center justify-between px-2 pt-5.5 pb-1">
          <div>
            <h3 className="text-[28px] font-bold tracking-[-0.03em]">
              {featured.title}
            </h3>
            <p className="mt-0.5 text-[15px] text-muted">
              {featured.description}
            </p>
          </div>
          <span className="text-accent">
            <ArrowUpRight size={24} />
          </span>
        </div>
      </a>
    </section>
  );
}
