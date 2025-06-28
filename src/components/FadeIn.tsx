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
  delay = "500ms",
}: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px 0px -100px 0px", // Start animation a bit before element is in view
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: isVisible ? delay : "0ms",
        transitionDuration: "2000ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}
