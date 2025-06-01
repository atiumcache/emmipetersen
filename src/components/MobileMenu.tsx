import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { BOOKING_LINK } from '../constants'
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
          className="md:hidden text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-md flex flex-col justify-between items-center w-full">
        <div className="max-w-lg w-full pt-16">
          <nav className="flex flex-col justify-center flex-1">
            <div className="flex flex-col gap-8">
              <SheetClose asChild>
                <Link to="/about" className="w-full text-center py-4 text-3xl font-medium hover:text-gumroad-pink transition-colors">
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/services" className="w-full text-center py-4 text-3xl font-medium hover:text-gumroad-pink transition-colors">
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/contact" className="w-full text-center py-4 text-3xl font-medium hover:text-gumroad-pink transition-colors">
                  Contact
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href={BOOKING_LINK.url}
                  target="_blank"
                  className="w-full text-center py-4 text-3xl font-medium hover:text-gumroad-pink transition-colors"
                >
                  Book Session →
                </a>
              </SheetClose>
            </div>
          </nav>
        </div>

      </SheetContent>
    </Sheet>
  )
}