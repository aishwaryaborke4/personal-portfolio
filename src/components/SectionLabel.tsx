import type { ReactNode } from "react";

interface Props {
  index?: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionLabel({
  index,
  title,
  children,
  className = "mb-7",
}: Props) {
  return (
    <div
      className={`label-mono flex items-center justify-between text-muted ${className}`}
    >
      <span>{index ? `${index} / ${title}` : title}</span>
      {children}
    </div>
  );
}
