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
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center font-sans uppercase">
          {/* Center - Logo */}
          <div className="flex justify-start">
            <Link
              to="/"
              className="text-white hover:opacity-90 transition-opacity flex justify-center"
            >
              <img src="/logo-test.png" alt="Logo" className="h-[5em] w-auto" />
            </Link>
          </div>

          {/* Left side - Menu options */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              to="/about"
              className="text-white hover:text-amber-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/work"
              className="text-white hover:text-amber-300 transition-colors"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-amber-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right side - Menu option + Button */}
          <div className="hidden md:flex items-center justify-end space-x-8">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:border-amber-300 hover:text-amber-300 transition-colors"
            >
              <a
                href={BOOKING_LINK.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
