import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="wrap label-mono flex flex-wrap justify-between gap-4 pt-12 pb-10 text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Built with React + TypeScript</span>
    </footer>
  );
}
