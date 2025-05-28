import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Link } from 'react-router-dom'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

import HeadshotWithBlob from './components/OrganicBlob'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      <div className="border-r border-b border-l border-black">
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero content */}
          <div className="bg-pink-100 p-8 md:p-10 lg:p-12 flex items-center justify-center border-r border-black">
            <div className="max-w-[90%] mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-3 md:mb-4">
                Let's move together
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-green-500 mb-4 md:mb-4">
                Transforming ideas into reality through creative design and innovative solutions. Let's build something amazing together.
              </p>
              <Link to="/contact" className="relative w-full md:w-[200px] h-[50px] md:h-[60px] bg-black text-white font-medium text-base md:text-lg flex items-center justify-center group mx-auto">
                <span className="absolute inset-0 bg-pink-500/10 transition-transform duration-300 group-hover:translate-y-[3px] group-hover:translate-x-[3px] border border-black z-0" />
                <span className="absolute inset-0 bg-green-500 border border-black z-10" />
                <span className="absolute inset-0 bg-black transition-transform duration-300 group-hover:translate-y-[-3px] group-hover:translate-x-[-3px] border border-black z-20 flex items-center justify-center">
                  <span className="relative z-10">
                    Send a Message
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image below hero */}
      <div className="hidden md:block">
        <HeadshotWithBlob className="w-full h-auto" />
      </div>

      {/* Desktop image */}
      <div className="block md:hidden bg-yellow-100 p-4 md:p-0 border-b border-black">
        <HeadshotWithBlob className="w-full h-auto" />
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
