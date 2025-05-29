import { ContactForm } from '../components/ContactForm'
import HeadshotWithBlob from '../components/OrganicBlob'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gumroad-pink/5">
      {/* First Hero Section (Inverted) */}
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero content */}
          <div className="bg-gumroad-pink/50 p-8 md:p-12 lg:p-16 flex items-center justify-center border-b border-black md:w-3/5">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-4 md:mb-6">
                About Me
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
                I'm Emmi Petersen, movement & food enthusiast. I am here because I believe every body deserves to move. This is an inclusive space for people of every gender, size, and race. 
              </p>
            </div>
          </div>
          {/* Hero image */}
          <div className="bg-gumroad-green/50 p-4 border-b border-black md:border-l border-black md:w-2/5">
            <HeadshotWithBlob className="w-full h-auto" imgPath="/headshot2.jpg" />
          </div>
        </div>
      </div>

      {/* Second Hero Section */}
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero image */}
          <div className="hidden md:block bg-gumroad-green/50 p-4 border-b border-black md:border-r border-black md:w-2/5">
            <HeadshotWithBlob className="w-full h-auto" imgPath="/headshot3.jpg" />
          </div>
          {/* Hero content */}
          <div className="bg-gumroad-yellow/50 p-8 md:p-12 lg:p-16 flex items-center justify-center border-b border-black md:w-3/5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-4 md:mb-6">
                My Approach
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
                I help my clients reconnect with their bodies through strength training, mindful eating, & forming healthy sleep, social, & self-care habits. My clients relearn to trust their bodies, train in ways that fit their lifestyles, & find balance in their lives.
              </p>
            </div>
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