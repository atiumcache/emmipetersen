import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Navbar } from './components/Navbar'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import Services from './pages/Services'

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Let's move together<br />
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Transforming ideas into reality through creative design and innovative solutions. Let's build something amazing together.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/about">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/placeholder-headshot.jpg"
                alt="Professional headshot"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
