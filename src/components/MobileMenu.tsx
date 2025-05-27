import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet'
import { ContactPopover } from './ContactPopover'

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
        <nav className="flex flex-col gap-4">
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link to="/services">Services</Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <ContactPopover />
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 