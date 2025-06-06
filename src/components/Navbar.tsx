import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { MobileMenu } from './MobileMenu'
import { useEffect, useState } from 'react'
import { BOOKING_LINK } from '../constants'


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Load Acuity button script
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/embed/button/35894702.js'
    script.async = true
    document.body.appendChild(script)

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      // Cleanup
      document.body.removeChild(script)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav 
      className={`sticky top-0 z-50 border-b-2 border-black transition-all duration-200 ${
        isScrolled ? 'bg-black/90' : 'bg-black'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="hidden md:block w-[250px]">
            <Link 
              to="/" 
              className="text-3xl font-brand font-bold tracking-tight text-white hover:text-gumroad-yellow transition-colors"
            >
              Emmi Petersen
            </Link>
          </div>

          {/* Navigation Links - Right */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-baseline space-x-8 pr-10">
              <Link 
                to="/about" 
                className="text-white hover:text-gumroad-yellow transition-colors"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-gumroad-yellow transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-gumroad-yellow transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile-only logo */}
          <div className="md:hidden">
            <Link 
              to="/" 
              className="text-xl font-brand font-bold tracking-tight text-white hover:text-gumroad-yellow transition-colors"
            >
              Emmi Petersen
            </Link>
          </div>

          {/* Book Now Button - Right */}
          <div className="hidden md:flex items-center justify-end h-full ml-auto">
            <Button 
              size="lg" 
              className="text-lg h-full bg-gumroad-yellow text-black hover:bg-gumroad-yellow/90 transition-colors rounded-none px-10 -mr-8" 
              asChild
            >
              <Link
                to={BOOKING_LINK.fullUrl}
                className="text-decoration-none"
              >
                Book Now →
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
} 
