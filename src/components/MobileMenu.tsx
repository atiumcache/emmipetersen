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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-6 pt-4">
          <SheetClose asChild>
            <Link 
              to="/about" 
              className="text-lg text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
            >
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link 
              to="/services" 
              className="text-lg text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
            >
              Services
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link 
              to="/contact" 
              className="text-lg text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
            >
              Contact
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=35894702&ref=booking_button"
              target="_blank"
              className="bg-black text-white px-6 py-3 rounded-md text-center hover:bg-gray-800 transition-colors text-lg"
            >
              Book Now
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 