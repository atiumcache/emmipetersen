import { ContactCTA } from "../components/ContactCTA";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/FadeIn";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router";
import { loadContent } from "../lib/content";
import { SunLinesGraphic } from "../components/SunLinesGraphic";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

const siteCopy = loadContent();

// AboutParagraph component
const AboutParagraph = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <FadeIn>
    <p className={`text-white text-lg md:text-3xl px-4 ${className ?? ""}`}>
      {text}
    </p>
  </FadeIn>
);

const AboutImg = ({ src, className }: { src: string; className?: string }) => (
  <FadeIn className={`flex justify-center w-full px-4 ${className ?? ""}`}>
    <img src={src} alt="" className="w-full object-cover rounded-lg" />
  </FadeIn>
);

function AboutSection1() {
  return (
    <div
      className={`relative min-h-screen md:min-h-screen text-rb-white bg-aqua-medium flex flex-col justify-start md:justify-between`}
    >
      <Navbar color="aqua-medium" />
      <div className="px-0 pb-12 flex flex-col">
        <FadeIn
          delay="100ms"
          className="min-h-[80vh] md:min-h-[90vh] flex flex-col justify-end"
        >
          <SunLinesGraphic />
          <h1 className="text-5xl md:text-9xl px-4 md:px-12 uppercase text-white font-spartan md:max-w-[75vw] font-black pt-12">
            {siteCopy.about.heading}
          </h1>
        </FadeIn>
        <div className="relative flex flex-col space-y-12 md:px-12 pt-[12vh] md:pt-[20vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-12">
              <AboutParagraph text={siteCopy.about.content} />
              <AboutParagraph
                text={siteCopy.about.content2}
                className="hidden md:block"
              />
            </div>
            <AboutImg src="headshot-car.jpg" />
            <AboutParagraph
              text={siteCopy.about.content2}
              className="block md:hidden"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AboutImg src="headshot5.jpg" />
            <div className="flex flex-col gap-12">
              <AboutParagraph text={siteCopy.about.content3} />
              <AboutParagraph text={siteCopy.about.content4} />
            </div>

            <AboutParagraph text={siteCopy.about.content5} />
          </div>
        </div>
      </div>
      <ContactForm
        twBackgroundClass="bg-aqua-light"
        twButtonClass="bg-aqua-dark"
      />
      {/* <ContactCTA darkColor="aqua-medium" lightColor="aqua-light" /> */}
      <Footer twBackgroundClass="bg-aqua-medium" />
    </div>
  );
}

export function About() {
  return (
    <>
      <AboutSection1 />

      {/* Section 2 */}
    </>
  );
}
