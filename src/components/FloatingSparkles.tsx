import { Sparkles } from "lucide-react";
import { useEffect, useState, useMemo, ReactNode } from "react";

// Define a palette of pastel colors for the sparkles
const SPARKLE_COLORS = [
  "#FFD1DC", // Pastel pink
  "#FFECB8", // Pastel yellow
  "#B5EAD7", // Pastel green
  "#C7CEEA", // Pastel blue
  "#E2F0CB", // Pastel lime
  "#FFDAC1", // Pastel peach
  "#B5E6FF", // Pastel sky blue
  "#D8BFD8", // Pastel purple
  "#FDFD96", // Pastel yellow
  "#FFB7B2", // Pastel red
];

interface Sparkle {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  rotate_deg: number;
  color: string;
}

interface FloatingSparklesProps {
  count?: number;
}

export function FloatingSparkles({
  count = 5,
}: FloatingSparklesProps): ReactNode {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [nextId, setNextId] = useState(0);

  // Create a new sparkle
  const createSparkle = (): Sparkle => {
    const rotate_deg = Math.random() * 360;
    const size = Math.random() * 15 + 10; // 10-30px
    const delay = Math.random() * 5; // 0-5s delay
    const duration = Math.random() * 2 + 1.5; // 1.5-5.5s duration
    const color =
      SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];

    return {
      id: nextId,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      delay,
      duration,
      rotate_deg,
      color,
    };
  };

  // Initialize sparkles
  useEffect(() => {
    const initialSparkles = Array.from({ length: count }, (_, i) => ({
      ...createSparkle(),
      id: i,
    }));
    setSparkles(initialSparkles);
    setNextId(count);

    // Cleanup function
    return () => {
      setSparkles([]);
    };
  }, [count]);

  // Handle sparkle animation cycle
  useEffect(() => {
    if (sparkles.length === 0) return undefined;

    const timers: NodeJS.Timeout[] = [];
    const updateInterval = 100; // Check for new sparkles every 100ms

    const updateSparkles = () => {
      setSparkles((currentSparkles) => {
        // Randomly add or remove sparkles
        const shouldAdd =
          Math.random() > 0.7 && currentSparkles.length < count * 1.5;
        const shouldRemove =
          Math.random() > 0.9 && currentSparkles.length > count * 0.5;

        let newSparkles = [...currentSparkles];

        if (shouldAdd) {
          newSparkles = [...newSparkles, { ...createSparkle(), id: nextId }];
          setNextId((prev) => prev + 1);
        }

        if (shouldRemove && newSparkles.length > 0) {
          const removeIndex = Math.floor(Math.random() * newSparkles.length);
          newSparkles.splice(removeIndex, 1);
        }

        return newSparkles;
      });
    };

    const intervalId = setInterval(updateSparkles, updateInterval);
    return () => {
      clearInterval(intervalId);
      timers.forEach(clearTimeout);
    };
  }, [sparkles.length, count, nextId, createSparkle]);

  // Memoize the style object to prevent unnecessary re-renders
  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
    }),
    [],
  );

  return (
    <div style={containerStyle}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={
            {
              position: "absolute",
              color: sparkle.color,
              zIndex: 50,
              top: sparkle.top,
              left: sparkle.left,
              transform: `translate(-50%, -50%) rotate(${sparkle.rotate_deg}deg)`,
              opacity: 0,
              animation: `sparkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
              transformOrigin: "center",
            } as React.CSSProperties
          }
        >
          <Sparkles size={sparkle.size} fill={sparkle.color} />
        </div>
      ))}
      <style>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(0deg); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(180deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
