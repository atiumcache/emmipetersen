import { ChevronDown, Dumbbell } from "lucide-react";
import { FloatingSparkles } from "../components/FloatingSparkles";
import { ContactForm } from "../components/ContactForm";
import HeadshotWithBlob from "../components/OrganicBlob";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/FadeIn";
import { Link } from "react-router";

const h1Style = "text-white text-9xl font-sans uppercase z-49";

const h1StyleAlternate =
  "text-white text-[13vw] uppercase font-knewave tracking-wider z-49";

// Animation styles for the images
const AnimationStyles = () => (
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in-1 {
        animation: fadeIn 1s ease-out forwards;
        opacity: 0;
      }
      .fade-in-2 {
        animation: fadeIn 1s ease-out 0.5s forwards;
        opacity: 0;
      }
      .fade-in-3 {
        animation: fadeIn 1s ease-out 1s forwards;
        opacity: 0;
      }
    `}
  </style>
);

function AboutFirstAlternate() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] bg-black flex flex-col justify-center">
      <div className="px-[20vw] relative z-40">
        <FadeIn
          className="flex justify-start items-end leading-[100px]"
          delay="300ms"
        >
          <h1 className={`${h1StyleAlternate} z-40 -rotate-[5deg]`}>About</h1>
        </FadeIn>
        <FadeIn className="flex justify-end items-end z-40" delay="700ms">
          <div></div>
          <h1 className={`${h1StyleAlternate} text-right -rotate-[5deg]`}>
            Emmi
          </h1>
        </FadeIn>
      </div>
      <div
        className="absolute bottom-[5vh] left-[47vw] w-20 h-20 rounded-full flex items-center justify-center z-40 border-2 border-white cursor-pointer hover:bg-[#D8BFD8]/70 hover:border-white transition-all animate-pulse hover:animate-none"
        style={
          {
            "--tw-pulse-scale": 1.1,
            "--tw-pulse-opacity": 0.9,
            "--tw-pulse-translate-y": "-3px",
          } as React.CSSProperties
        }
        onClick={() => {
          const section2 = document.getElementById("section2");
          if (section2) {
            section2.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        <ChevronDown className="text-white transition-colors" size={48} />
      </div>
      <FloatingSparkles count={15} />
    </div>
  );
}

function AboutFirst() {
  return (
    <>
      <AnimationStyles />
      <div className="min-h-[calc(100vh-var(--navbar-height))] bg-black flex flex-col justify-center">
        {/* Background Elements with Images */}
        <div className="z-10 absolute top-1/4 w-[20vw] h-[30vw] left-[3vw] overflow-hidden animate-blob fade-in-1">
          <img
            src="/headshot3.jpg"
            alt="Fitness equipment"
            className="w-full h-full object-cover"
            style={{
              filter: "",
              transform: "scale(1.1)",
            }}
          />
        </div>
        <div className="z-10 absolute top-[var(--navbar-height)] w-[30vw] h-[20vw] right-[5vw] overflow-hidden animate-blob fade-in-3">
          <img
            src="/headshot2.jpg"
            alt="Dumbbell"
            className="w-full h-full object-cover"
            style={{
              filter: "",
              transform: "scale(1.2)",
            }}
          />
        </div>
        <div className="z-10 absolute bottom-10 w-[40vh] h-[25vh] left-1/3 overflow-hidden animate-blob fade-in-2">
          <img
            src="/headshot1.jpg"
            alt="Bridge exercise"
            className="w-full h-full object-cover"
            style={{
              filter: "",
              transform: "scale(1.1)",
            }}
          />
        </div>
        <div
          className="fade-in-3 absolute bottom-[5vh] right-[5vh] w-20 h-20 rounded-full flex items-center justify-center z-40 border-2 border-gray-300 cursor-pointer hover:bg-gray-300/20 transition-colors"
          onClick={() => {
            const section2 = document.getElementById("section2");
            if (section2) {
              section2.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <ChevronDown className="text-gray-300 transition-colors" size={48} />
        </div>

        <div className="p-20 relative z-40">
          <FadeIn className="flex justify-between items-end " delay="750ms">
            <h1 className={`${h1Style} mx-[20vw] z-40`}>About</h1>
            <p className="hidden text-white text-2xl font-sans uppercase -translate-y-12 bg-orange-500/50 px-3 py-1">
              Strength Coach.
            </p>
          </FadeIn>
          <hr className="solid"></hr>
          <FadeIn className="flex justify-between items-end z-40" delay="1.5s">
            <div></div>
            <h1 className={`${h1Style} text-right mx-40`}>Emmi</h1>
          </FadeIn>
        </div>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <AboutFirstAlternate />

      {/* Section 2 */}
      <div
        id="section2"
        className="min-h-[calc(100vh-var(--navbar-height))] bg-white flex flex-col justify-center"
      >
        <div className="bg-black h-[10vh] w-full mb-10"></div>
        <FadeIn
          className="p-20 flex-col justify-start items-start text-black space-y-12"
          delay="200ms"
        >
          <hr className="solid border-black"></hr>
          <p className="text-3xl font-sans text-left max-w-[60vw]">
            Hi there! I’m Emmi. I love to play outside, wiggle my body, & cook
            yummy food. I am a lifelong athlete, & I enjoy finding playful ways
            to challenge my body. I want to help you rediscover what it means to
            feel embodied, strong, & capable.
          </p>
        </FadeIn>
        <div className="p-20 flex justify-between">
          <FadeIn className="w-[33vw] h-[40vw] overflow-hidden p-10" delay="1s">
            <img
              src="/headshot1.jpg"
              alt="Emmi Petersen"
              className="w-full h-full object-cover"
            />
          </FadeIn>
          <FadeIn
            className="flex flex-col text-md space-y-12 w-[40vw]"
            delay="2s"
          >
            <hr className="solid border-black"></hr>
            <div className="flex justify-between space-x-16">
              <Dumbbell className="w-[5em] h-[5em]" fill="orange" />
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                illum aliquid non omnis deserunt nisi sit delectus distinctio,
                optio quidem neque numquam temporibus! Dicta nostrum doloribus
                accusamus iure, eius sapiente!
              </p>
            </div>
            <hr className="solid border-black"></hr>
            <div className="flex justify-between items-start space-x-16">
              <Dumbbell className="w-[5em] h-[5em]" fill="green" />
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                illum aliquid non omnis deserunt nisi sit delectus distinctio,
                optio quidem neque numquam temporibus! Dicta nostrum doloribus
                accusamus iure, eius sapiente!
              </p>
            </div>
            <hr className="solid border-black"></hr>
            <div className="flex justify-between space-x-16">
              <Dumbbell className="w-[5em] h-[5em]" fill="purple" />
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                illum aliquid non omnis deserunt nisi sit delectus distinctio,
                optio quidem neque numquam temporibus! Dicta nostrum doloribus
                accusamus iure, eius sapiente!
              </p>
            </div>
            <hr className="solid border-black"></hr>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-black text-black hover:bg-black hover:white hover:text-white transition-colors duration-500 text-2xl py-8 px-10"
            >
              <Link to="/contact">Get In Touch →</Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </>
  );
}

export function About2() {
  return (
    <div className="min-h-screen flex flex-col bg-gumroad-pink/5">
      {/* First Hero Section (Inverted) */}
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero content */}
          <div className="bg-gumroad-pink/50 p-8 md:p-12 lg:p-20 flex items-center justify-center border-b border-black md:w-3/5">
            <div className="max-w-4xl mx-auto sm:text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 md:mb-6">
                About Me
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
                Hi there! I’m Emmi. I love to play outside, wiggle my body, &
                cook yummy food. I am a lifelong athlete, & I enjoy finding
                playful ways to challenge my body. I want to help you rediscover
                what it means to feel embodied, strong, & capable.
              </p>
            </div>
          </div>
          {/* Hero image */}
          <div className="bg-gumroad-green/50 p-4 border-b border-black md:border-l border-black md:w-2/5">
            <HeadshotWithBlob
              className="w-full h-auto"
              imgPath="/headshot2.jpg"
            />
          </div>
        </div>
      </div>

      {/* Second Hero Section */}
      <div>
        <div className="hidden flex flex-col md:flex-row h-full">
          {/* Hero image */}
          <div className="hidden md:block bg-gumroad-green/50 p-4 border-b border-black md:border-r border-black md:w-2/5">
            <HeadshotWithBlob
              className="w-full h-auto"
              imgPath="/headshot3.jpg"
            />
          </div>
          {/* Hero content */}
          <div className="bg-gumroad-yellow/50 p-8 md:p-12 lg:p-16 flex items-center justify-start border-b border-black md:w-3/5">
            <div className="max-w-4xl sm:text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 md:mb-6">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Certifications & Education
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>NASM Certified Personal Trainer</li>
                    <li>NASM Certified Nutrition Coach</li>
                    <li>Ongoing Education with Doctor of Physical Therapy</li>
                    <li>Bachelor's Degree, UC Santa Barbara</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Clientele
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Clients living in larger bodies</li>
                    <li>Those managing scoliosis and arthritis</li>
                    <li>Marathon runners and aerialists</li>
                    <li>Hikers and bikers</li>
                    <li>Anyone wanting to pick up grandchildren</li>
                    <li>Those looking to keep up with friends</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
