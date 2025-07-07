import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { getHexFromColorName } from "../utils/colorMap";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface NavbarProps {
  color?: string;
  sticky?: boolean;
}

export function Navbar({ color = "black", sticky = true }: NavbarProps) {
  const resolvedColor = getHexFromColorName(color);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50 && sticky;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${sticky ? "sticky" : "relative"} top-3 left-0 right-0  max-w-[calc(100vw-1rem)] px-3 py-2 md:py-4 mx-4 md:mx-8 rounded-lg transition-all duration-500 items-center z-50 ${
        isScrolled
          ? "bg-white backdrop-blur-sm shadow-lg translate-y-2 md:px-8"
          : "bg-white/0 backdrop-blur-none shadow-none md:px-4"
      }`}
      style={{
        color: isScrolled ? resolvedColor : "white",
        borderColor: isScrolled ? resolvedColor : "white",
      }}
      id="mainNav"
    >
      <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center font-sans uppercase">
        <h1
          className={`w-full text-4xl lowercase font-gnomon font-bold transition-all duration-500 translate-y-0 hover:translate-y-0 ${isScrolled ? "hover:!text-slate-700" : "hover:!text-slate-200"}`}
          style={{ color: isScrolled ? resolvedColor : "white" }}
        >
          <Link to="/" className="hover:-translate-y-1">
            <img
              src={`${isScrolled ? "/db-logo-rich-color.png" : "/db-logo.png"}`}
              alt="Emmi Logo"
              className="w-16 m-2 md:w-20 md:m-0 hover:scale-105 hover:cursor-pointer transition-all"
            />
          </Link>
        </h1>

        {/* Center - Menu options */}
        <div className="hidden md:flex items-center justify-center space-x-6 ">
          <Link
            to="/about"
            className={`hover:-translate-y-1 transition-all duration-500 hover:text-blue-300 ${isScrolled ? (color ? `text-${color}` : "text-black") : "text-white"}`}
          >
            About
          </Link>
          <p className={color ? `text-${color}` : "text-black"}>|</p>
          <Link
            to="/services"
            className={`hover:-translate-y-1 transition-all duration-500 hover:text-pink-300 ${isScrolled ? (color ? `text-${color}` : "text-black") : "text-white"}`}
          >
            Services
          </Link>
          <p className={color ? `text-${color}` : "text-black"}>|</p>
          <Link
            to="https://emmipetersen.substack.com/"
            className={`hover:-translate-y-1 transition-all duration-500 hover:text-forest-light ${isScrolled ? (color ? `text-${color}` : "text-black") : "text-white"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-end space-x-8">
          <Button
            asChild
            variant="outline"
            className={`bg-transparent rounded-[50%] duration-300 transition-colors hover:scale-105 ${isScrolled ? `${color ? `text-${color} border-${color} hover:text-slate-500 hover:border-slate-500` : "text-black border-black"}` : "text-white border-white hover:text-white/70 hover:border-white/70"}`}
          >
            <a href="/contact">Contact</a>
          </Button>
        </div>
        <div className="md:hidden justify-self-end">
          <MobileMenu isScrolled={isScrolled} color={resolvedColor} />
        </div>
      </div>
    </nav>
  );
}
