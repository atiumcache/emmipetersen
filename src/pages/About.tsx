import { ContactPopover } from '../components/ContactPopover'

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column - Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
            <img
              src="/headshot2.jpg"
              alt="Professional portrait"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right column - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h1>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
              I’m Emmi Petersen, movement & food enthusiast. I am here because I believe every body deserves to move. This is an inclusive space for people of every gender, size, and race. 
              </p>
              <p className="text-lg leading-relaxed">
              I help my clients reconnect with their bodies through strength training, mindful eating, & forming healthy sleep, social, & self-care habits. My clients relearn to trust their bodies, train in ways that fit their lifestyles, & find balance in their lives.
              </p>
              <p className="text-lg leading-relaxed">
                I’m stoked to have you here. Let’s connect! 
              </p>
              <ContactPopover buttonText="Contact Me" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
} 