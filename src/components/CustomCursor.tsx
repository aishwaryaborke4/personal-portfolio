import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      spotlight.style.left = `${clientX}px`;
      spotlight.style.top = `${clientY}px`;
      spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    };
  }, []);

  return (
    <>
      <div ref={spotlightRef} className="spotlight-cursor corner-cursor hidden [@media(hover:hover)_and_(pointer:fine)]:block">
        <span className="cursor-dot"></span>
      </div>
    </>
  );
}
