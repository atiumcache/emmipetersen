import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ContactPopover } from './ContactPopover'
import { MobileMenu } from './MobileMenu'
import { useEffect } from 'react'

export function Navbar() {
  useEffect(() => {
    // Load Acuity button script
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/embed/button/35894702.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="hidden md:block w-[200px]">
            <Link to="/" className="text-2xl font-bold font-brand text-black">
              Emmi Petersen
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-12">
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile-only logo */}
          <div className="md:hidden">
            <Link to="/" className="text-xl font-bold font-brand text-black">
              Emmi Petersen
            </Link>
          </div>

          {/* Book Now Button - Right */}
          <div className="hidden md:flex items-center w-[200px] justify-end">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white" asChild>
              <a
                href="https://app.acuityscheduling.com/schedule.php?owner=35894702&ref=booking_button"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Book Now
              </a>
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
