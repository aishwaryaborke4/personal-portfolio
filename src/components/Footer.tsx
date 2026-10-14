import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="wrap label-mono flex flex-wrap justify-between gap-4 text-muted p-5 md:pb-10 md:pt-12">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Built with React + TypeScript</span>
    </footer>
  );
}
