import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from './ui/sheet'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-gumroad-pink hover:text-gumroad-pink transition-colors"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
        <nav className="flex flex-col gap-8 pt-8">
          <div className="space-y-1.5">
            {/* <span className="text-sm font-medium text-gray-500">Menu</span> */}
            <div className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link 
                  to="/about" 
                  className="text-xl text-gray-800 hover:text-gumroad-purple transition-colors text-center"
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  to="/services" 
                  className="text-xl text-gray-800 hover:text-gumroad-purple transition-colors text-center"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  to="/contact" 
                  className="text-xl text-gray-800 hover:text-gumroad-purple transition-colors text-center"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </div>

          <div className="space-y-1.5">
            {/* <span className="text-sm font-medium text-gray-500">Get Started</span> */}
            <SheetClose asChild>
              <a
                href="https://app.acuityscheduling.com/schedule.php?owner=35894702&ref=booking_button"
                target="_blank"
                className="inline-flex items-center justify-center w-full h-14 bg-gumroad-pink text-black rounded-xl text-lg font-medium hover:bg-gumroad-pink/90 transition-colors"
              >
                Book Now →
              </a>
            </SheetClose>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-gumroad-yellow/20 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-gumroad-pink/20 rounded-full blur-3xl"></div>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 