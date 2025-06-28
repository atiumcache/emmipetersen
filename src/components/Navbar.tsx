import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";
import { useEffect, useState } from "react";
import { BOOKING_LINK } from "../constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      <div className="px-8 py-4 m-0 items-center justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center font-sans uppercase">
          {/* Center - Logo */}
          <div className="flex justify-start">
            <Link
              to="/"
              className="text-white hover:opacity-70 transition-opacity flex justify-center"
            >
              <img
                src="/dumbbell-logo.png"
                alt="Logo"
                className="w-[4em] h-auto py-3"
              />
            </Link>
          </div>

          {/* Left side - Menu options */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <Link
              to="/about"
              className="text-white hover:text-orange-300 transition-colors duration-500"
            >
              About
            </Link>
            <p className="text-white">|</p>
            <Link
              to="/services"
              className="text-white hover:text-green-300 transition-colors duration-500"
            >
              Services
            </Link>
            <p className="text-white">|</p>
            <Link
              to="https://emmipetersen.substack.com/"
              className="text-white hover:text-blue-300 transition-colors duration-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter
            </Link>
          </div>

          {/* Right side - Menu option + Button */}
          <div className="hidden md:flex items-center justify-end space-x-8">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:border-white hover:text-black duration-300 transition-colors"
            >
              <a href={BOOKING_LINK.fullUrl}>Contact</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden text-right">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
