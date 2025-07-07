import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/FadeIn";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { loadContent } from "../lib/content";

const siteCopy = loadContent();

export function Home() {
  return (
    <div className="min-h-screen bg-slate-700 md:bg-salmon-medium flex flex-col justify-between">
      <Navbar color="aqua-medium" sticky={false} />
      <div className="bg-slate-700 md:bg-salmon-medium h-[3vh]"></div>
      <div className="md:h-[80vh] flex-1 grid grid-cols-1 md:grid-cols-2 bg-slate-700 md:bg-[#FF9587]">
        <div className="w-full h-full pointer-events-none aspect-square md:aspect-auto">
          <img
            src="/headshot1.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }} // Adjust opacity as needed
          />
        </div>
        <div className="flex flex-col text-white items-center md:items-start justify-center space-y-8 md:space-y-12 p-6 pt-8 md:p-16">
          <FadeIn
            className={`font-sans font-semibold text-center md:text-left text-3xl w-full md:text-8xl md:max-w-[40vw] transition-opacity duration-1000 `}
          >
            Strong. Embodied. Authentic.
          </FadeIn>
          <FadeIn
            delay="700ms"
            className="font-sans text-center md:text-left text-2xl w-full md:text-2xl md:max-w-[40vw]"
          >
            Private strength coaching in San Francisco and Marin.
          </FadeIn>
          <FadeIn delay="1200ms" className={`pb-8 md:pb-0`}>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:border-gray-800 hover:text-black transition-colors text-xl md:text-2xl py-8 px-10"
            >
              <Link to="/contact">{siteCopy.home.hero.button}</Link>
            </Button>
          </FadeIn>
        </div>
      </div>

      <Footer twBackgroundClass="" />
    </div>
  );
}

export function HomeCover() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-between">
      {/* Full viewport background image, behind content */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="/emmi-sunrise.png"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ opacity: 1 }} // Adjust opacity as needed
        />
      </div>
      <Navbar color="black" />
      <div className="relative z-10">
        <div className="flex flex-row items-start justify-between h-[90vh] p-16">
          <FadeIn
            className={`text-white font-sans text-left text-xl w-full md:text-4xl md:max-w-[40vw] transition-opacity duration-1000 `}
          >
            Let’s work together to discover what it means to you to feel
            embodied, empowered, and strong.
          </FadeIn>
          <div className={`pb-8 md:pb-0`}>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:border-gray-800 hover:text-black transition-colors text-2xl py-8 px-10"
            >
              <Link to="/contact">Get In Touch →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
