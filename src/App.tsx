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
    <div className="min-h-screen flex flex-col bg-gumroad-pink/5">
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero content */}
          <div className="bg-gumroad-pink/80 p-8 md:p-12 lg:p-16 flex items-center justify-center border-b border-black md:w-1/2">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-4 md:mb-6">
                Stronger Together
              </h1>
              <h2 className="text-4xl lg:text-4xl text-gray-800 mb-6 md:mb-8 pb-2">
                Training to<br className="block md:hidden"></br>support your life<br className="block md:hidden"></br><span className="text-black font-style: italic relative group">for life
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white -rotate-2 transform transition-all duration-300 group-hover:translate-y-1 group-hover:-rotate-1" />
                </span>.
              </h2>
              <Link 
                to="/contact" 
                className="relative w-[200px] md:w-[200px] h-[50px] md:h-[60px] bg-black text-white font-medium text-base md:text-lg flex items-center justify-center group mx-auto transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gumroad-yellow transition-transform duration-300 group-hover:translate-y-[3px] group-hover:translate-x-[3px] border border-black z-0" />
                <span className="absolute inset-0 bg-gumroad-green border border-black z-10" />
                <span className="absolute inset-0 bg-black transition-transform duration-300 group-hover:translate-y-[-3px] group-hover:translate-x-[-3px] border border-black z-20 flex items-center justify-center">
                  <span className="relative z-10">
                    Send a Message
                  </span>
                </span>
              </Link>
            </div>
          </div>
          {/* Hero image */}
          <div className="bg-gumroad-green/50 p-4 border-b border-black md:border-l border-black md:w-1/2">
            <HeadshotWithBlob className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm />
        </div>
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
