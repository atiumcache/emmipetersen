import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";

interface MobileMenuProps {
  isScrolled: boolean;
  color: string;
}

export function MobileMenu({ isScrolled, color }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <a
          href="#"
          className="md:hidden text-sm rounded-[50%] px-4 py-1.5 transition-all duration-300 flex items-center justify-center"
          style={{
            color: isScrolled && color.startsWith("#") ? color : "white",
            border: `1px solid ${isScrolled && color.startsWith("#") ? color : "white"}`,
            backgroundColor:
              isScrolled && color.startsWith("#")
                ? `${color}1a`
                : "rgba(255, 255, 255, 0.1)",
          }}
        >
          Menu
          <span className="sr-only">Toggle menu</span>
        </a>
      </SheetTrigger>
      <SheetContent className="fixed inset-x-2 top-4 bottom-4 bg-white/95 backdrop-blur-md flex flex-col justify-between items-center w-full">
        <div className="max-w-lg w-full pt-16 pr-2">
          <nav className="flex flex-col justify-center items-end flex-1 text-right">
            <div className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link
                  to="/"
                  className="w-full py-4 text-3xl font-medium hover:text-aqua-light transition-colors"
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/about"
                  className="w-full py-4 text-3xl font-medium hover:text-aqua-medium transition-colors"
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/services"
                  className="w-full py-4 text-3xl font-medium hover:text-salmon-medium transition-colors"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="https://emmipetersen.substack.com/"
                  className="w-full  py-4 text-3xl font-medium hover:text-salmon-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newsletter
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/contact"
                  className="w-full py-4 text-3xl font-medium hover:text-slate-500 transition-colors"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
