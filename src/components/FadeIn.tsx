import { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

export function FadeIn({
  children,
  className = "",
  delay = "0ms",
}: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.03, // Lower threshold for earlier detection
    rootMargin: "-10% 0px -15% 0px", // Start animation much earlier (20% of viewport height)
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-7"
      }`}
      style={{
        transitionDelay: isVisible ? delay : "0ms",
        transitionDuration: "1300ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}
