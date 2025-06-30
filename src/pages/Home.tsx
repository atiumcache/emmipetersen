import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { Button } from "../components/ui/button";
import { useEffect, useState, useMemo } from "react";
import * as motion from "motion/react-client";

const imageURLs = [
  "/bridge.png",
  "/hero1.png",
  "/hero2.png",
  "/headshot1.jpg",
  "/barbell1.png",
  "/dumbbell.png",
  "/fitness1.jpg",
];

const COLOR_LEVEL = 20;
const colors = [
  "bg-red-500/50", // R
  "bg-orange-500/50", // O
  "bg-yellow-500/50", // Y
  "bg-black/0", // G
  "bg-green-500/50", // B
  "bg-blue-500/50", // I
  "bg-violet-500/50", // V
];

const ImageItem = ({
  url,
  index,
  isVisible,
}: {
  url: string;
  index: number;
  isVisible: boolean;
}) => {
  // Generate a random y-offset between -20% and 20% for staggered effect
  // Middle image (index 3) will have 0 offset
  // Using useMemo to ensure the offset is only calculated once
  const yOffset = useMemo(() => {
    return index === 3
      ? 0
      : Math.random() * (index % 2 === 0 ? -1 : 1) * 40 - 20;
  }, [index]); // Only recalculate if index changes

  return (
    <div
      className={`relative overflow-visible transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-0"
      } ${index === 3 ? "col-span-3" : "col-span-1"}`}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
        transform: isVisible ? `translateY(0px)` : "translateY(0px)",
      }}
    >
      <div
        className={`absolute inset-0 ${colors[index]} z-10 mix-blend-multiply`}
      />
      <div className="w-full h-full">
        <img
          src={url}
          alt={`Gallery image ${index + 1}`}
          className={`w-full h-full object-cover ${index === 3 ? "" : "grayscale"}`}
        />
      </div>
    </div>
  );
};

const ImageGrid = () => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  useEffect(() => {
    // Show first set of images
    const timeout1 = setTimeout(() => {
      setVisibleIndices([0, 2, 5]);
    }, 100);

    // Show second set of images
    const timeout2 = setTimeout(() => {
      setVisibleIndices([0, 1, 2, 4, 5, 6]);
    }, 400);

    // Finally show the middle image
    const timeout3 = setTimeout(() => {
      setVisibleIndices((prev) => [...prev, 3]);
    }, 800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <>
      {imageURLs.map((url, index) => (
        <ImageItem
          key={index}
          url={url}
          index={index}
          isVisible={visibleIndices.includes(index)}
        />
      ))}
    </>
  );
};

export function Home() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show text after images are done animating
    const textTimer = setTimeout(() => {
      setShowText(true);

      // Show button after text appears
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 1000);

      return () => clearTimeout(buttonTimer);
    }, 2000); // Slightly after images finish

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="md:min-h-[calc(100vh-var(--navbar-height))] bg-black flex flex-col justify-between">
      <div className="hidden md:grid grid-cols-9 gap-8 h-[60vh] w-full pt-8 px-8">
        <ImageGrid />
      </div>

      <div className="flex flex-col space-y-2 text-left md:flex-row justify-between p-4 md:p-8 md:items-end">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="visible md:hidden text-white font-bold text-6xl w-full"
        >
          Emmi <br />
          Petersen
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="visible md:hidden pt-[30vh] text-gumroad-yellow md:text-white font-sans text-2xl w-full md:text-4xl md:max-w-[40vw]"
        >
          Bay Area Strength Coach
        </motion.h1>
        <h2
          className={`text-white font-sans text-xl w-full md:text-4xl md:max-w-[40vw] transition-opacity duration-1000 ${showText ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{
            transitionDelay: showText ? "0ms" : "0ms",
            transitionTimingFunction: "linear",
          }}
        >
          Let’s work together to discover what it means to you to feel embodied,
          empowered, and strong.
        </h2>
        <div className="visible md:hidden w-full py-12">
          <img
            src="headshot1.jpg"
            alt="Emmi headshot"
            className="aspect-square object-cover"
          />
        </div>
        <div
          className={`pb-8 md:pb-0 transition-opacity duration-700 ${showButton ? "opacity-100" : "opacity-0 translate-y-8"}`}
          style={{
            transitionDelay: showButton ? "0ms" : "0ms",
            transitionTimingFunction: "linear",
          }}
        >
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:border-gray-800 hover:text-black transition-colors text-2xl py-8 px-10"
          >
            <Link to="/contact">Get Started →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
