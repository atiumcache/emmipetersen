import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { Button } from "../components/ui/button";
import { useEffect, useState, useMemo } from "react";

export function Home3() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] relative">
      <div className="absolute bottom-0 left-1/2 w-[50vw] h-auto">
        <img
          src="/rainbow_emmi.png"
          alt="Rainbow Emmi"
          className="w-full h-auto"
        />
      </div>
      <div className="container mx-auto px-8 h-full flex items-center justify-end">
        <h1 className="text-white text-right text-8xl font-round8">
          Stronger <br />
          Together
        </h1>
      </div>
    </div>
  );
}

export function Home2() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show text after images are done animating
    const textTimer = setTimeout(() => {
      setShowText1(true);

      // Show button after text appears
      const buttonTimer = setTimeout(() => {
        setShowText2(true);
      }, 2000);

      return () => clearTimeout(buttonTimer);
    }, 2000); // Slightly after images finish

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] bg-white flex flex-col">
      <div className="flex justify-start bg-gumroad-green px-8 items-end pt-8">
        <h1 className="font-round8 text-gumroad-yellow text-[18vw] m-0 p-0 leading-[1] -mb-[0.17em] tracking-wide">
          STRONGER
        </h1>
      </div>
      <div className="flex justify-end bg-gumroad-yellow px-12 items-end pt-8">
        <h1 className="font-round8 text-gumroad-blue text-[18vw] m-0 p-0 leading-[1] -mb-[0.17em] tracking-wide">
          TOGETHER
        </h1>
      </div>
      <div className="flex-1 flex flex-col justify-end p-8 bg-gumroad-blue">
        <div className="flex justify-between items-end text-white">
          <h2 className="max-w-2xl text-3xl">
            Let's build strength that feels powerful, personal, and deeply
            yours—so you can move through life embodied and unstoppable.
          </h2>
          <div>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white hover:bg-gumroad-green hover:border-white hover:text-white transition-colors text-2xl py-8 px-8"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      }, 2000);

      return () => clearTimeout(buttonTimer);
    }, 2000); // Slightly after images finish

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] bg-black flex flex-col justify-between">
      <div className="grid grid-cols-9 gap-8 h-[60vh] w-full pt-8 px-8">
        <ImageGrid />
      </div>
      <div className="flex justify-between p-8 items-end">
        <h2
          className={`text-white font-sans text-4xl max-w-[40vw] transition-opacity duration-1000 ${showText ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{
            transitionDelay: showText ? "0ms" : "0ms",
            transitionTimingFunction: "linear",
          }}
        >
          Let’s work together to discover what it means to you to feel embodied,
          empowered, and strong.
        </h2>
        <div
          className={`transition-opacity duration-1000 ${showButton ? "opacity-100" : "opacity-0 translate-y-8"}`}
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
