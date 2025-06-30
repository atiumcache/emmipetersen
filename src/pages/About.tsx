import { ChevronDown, Dumbbell } from "lucide-react";
import { FloatingSparkles } from "../components/FloatingSparkles";
import { ContactForm } from "../components/ContactForm";
import HeadshotWithBlob from "../components/OrganicBlob";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/FadeIn";
import { Link } from "react-router";
import { loadContent } from "../lib/content";

const site_copy = loadContent();

const h1Style = "text-white text-9xl font-sans uppercase z-49";

const h1StyleAlternate =
  "text-white text-[13vw] uppercase font-sans tracking-wider z-49";

function AboutSection1() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] text-white bg-black flex flex-col justify-start">
      <div className="flex flex-col text-2xl font-sans font-bold space-y-8 p-8">
        <FadeIn className="flex justify-start" delay="100ms">
          <h2 className="bg-gumroad-pink text-black px-3 py-1">
            Strength Coach
          </h2>
        </FadeIn>
        <FadeIn className="flex justify-end" delay="500ms">
          <h2 className="bg-gumroad-green text-black px-3 py-1">SF Bay Area</h2>
        </FadeIn>
        <FadeIn className="flex justify-center" delay="1000ms">
          <h2 className="bg-gumroad-blue text-center text-black px-3 py-1">
            Oceans? Yes.
          </h2>
        </FadeIn>
      </div>
      <FadeIn delay="1500ms">
        <h1 className="text-4xl text-white font-bold pt-24 px-8">
          {" "}
          {site_copy.about.heading}
        </h1>
        <p className="text-white text-lg px-8 pt-2">
          {site_copy.about.content}
        </p>
      </FadeIn>
    </div>
  );
}

export default function About() {
  return (
    <>
      <AboutSection1 />

      {/* Section 2 */}
    </>
  );
}
