import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Navbar } from './components/Navbar'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { ContactPopover } from './components/ContactPopover'

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gray-50 md:h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:h-full">
          <div className="md:h-full md:flex md:items-center py-12 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left column - Text content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
                  Let's move together<br />
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                  Transforming ideas into reality through creative design and innovative solutions. Let's build something amazing together.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button size="lg" asChild>
                    <ContactPopover buttonText="Send a Message" className="bg-black hover:bg-gray-900 text-white" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-gray-100 " asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>

              {/* Right column - Image */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/headshot1.jpg"
                  alt="Emmi Petersen headshot"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white">
        <ContactForm />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
