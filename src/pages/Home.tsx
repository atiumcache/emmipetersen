import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/FadeIn";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { loadContent } from "../lib/content";

const siteCopy = loadContent();

export function Home() {
  return (
    <div className="min-h-screen bg-[#3A5546] md:bg-[#3A5546] flex flex-col justify-between">
      <Navbar color="aqua-medium" sticky={false} />
      <div className="bg-[#3A5546] md:bg-[#3A5546] h-[3vh]"></div>
      <div className="h-auto md:h-[90vh] flex flex-col md:flex-row bg-[#3A5546] md:bg-[#94aca3]">
        <FadeIn className="flex flex-col text-white items-center md:items-center justify-center space-y-8 md:space-y-12 p-6 pt-8 md:p-16 order-2 md:order-1">
          <div
            className={`font-sans font-semibold text-center md:text-center text-5xl w-full md:text-6xl lg:text-7xl xl:text-8xl md:max-w-[40vw] transition-opacity duration-1000 `}
          >
            Strong. Embodied. Authentic.
          </div>
          <div className="font-sans text-center md:text-center text-2xl w-full md:text-2xl md:max-w-[40vw]">
            Private strength coaching in <br />
            San Francisco's Richmond District.
          </div>
          <div className={`pb-8 md:pb-0`}>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:border-gray-800 hover:text-black transition-colors text-xl md:text-2xl py-8 px-10"
            >
              <Link to="/contact">{siteCopy.home.hero.button}</Link>
            </Button>
          </div>
        </FadeIn>
        <div className="w-full md:w-auto md:h-full pointer-events-none aspect-square md:aspect-[1/1] md:flex-shrink-0 order-1 md:order-2">
          <img
            src="/filmy.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
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
