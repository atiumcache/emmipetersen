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
          className="md:hidden text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
        <nav className="flex flex-col pt-8">
          <div className="flex flex-col gap-0 pb-8">
            <h1 className="text-2xl font-bold text-black font-brand text-center">Emmi Petersen</h1>
            <h2 className="text-lg text-black text-center">Strength Coach</h2>
          </div>

          <div className="space-y-4">
            <SheetClose asChild>
            <a
                href="/about"
                target="_blank"
                className="inline-flex items-center justify-center w-full h-14 bg-gumroad-blue text-black rounded-xl text-lg font-medium hover:bg-gumroad-pink/90 transition-colors"
              >
                 About
                </a>
              </SheetClose>
            <SheetClose asChild>
            <a
                href="/services"
                target="_blank"
                className="inline-flex items-center justify-center w-full h-14 bg-gumroad-yellow text-black rounded-xl text-lg font-medium hover:bg-gumroad-pink/90 transition-colors"
              >
                 Services
                </a>
              </SheetClose>
            <SheetClose asChild>
            <a
                href="/contact"
                target="_blank"
                className="inline-flex items-center justify-center w-full h-14 bg-gumroad-green text-black rounded-xl text-lg font-medium hover:bg-gumroad-pink/90 transition-colors"
              >
                 Contact 
                </a>
              </SheetClose>
            <SheetClose asChild>
              <a
                href="https://app.acuityscheduling.com/schedule.php?owner=35894702&ref=booking_button"
                target="_blank"
                className="inline-flex items-center justify-center w-full h-14 bg-gumroad-pink text-black rounded-xl text-lg font-medium hover:bg-gumroad-pink/90 transition-colors"
              >
                Book Session →
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