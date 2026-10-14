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
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={spotlightRef} className="spotlight-cursor corner-cursor">
        <span className="cursor-dot"></span>
      </div>
    </>
  );
}
