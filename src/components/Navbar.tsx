import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { ContactPopover } from './ContactPopover'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Emmi Petersen
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/services">Services</Link>
              </Button>
              <Button variant="ghost" asChild>
                <ContactPopover />
              </Button>
            </div>
          </div>

          {/* Social Links - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin className="h-5 w-5" />
            </a>
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
