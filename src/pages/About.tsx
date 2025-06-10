import { ContactForm } from "../components/ContactForm";
import HeadshotWithBlob from "../components/OrganicBlob";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gumroad-pink/5">
      {/* First Hero Section (Inverted) */}
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero content */}
          <div className="bg-gumroad-pink/50 p-8 md:p-12 lg:p-20 flex items-center justify-center border-b border-black md:w-3/5">
            <div className="max-w-4xl mx-auto sm:text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 md:mb-6">
                About Me
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
                Hi there! I’m Emmi. I love to play outside, wiggle my body, &
                cook yummy food. I am a lifelong athlete, & I enjoy finding
                playful ways to challenge my body. I want to help you rediscover
                what it means to feel embodied, strong, & capable.
              </p>
            </div>
          </div>
          {/* Hero image */}
          <div className="bg-gumroad-green/50 p-4 border-b border-black md:border-l border-black md:w-2/5">
            <HeadshotWithBlob
              className="w-full h-auto"
              imgPath="/headshot2.jpg"
            />
          </div>
        </div>
      </div>

      {/* Second Hero Section */}
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero image */}
          <div className="hidden md:block bg-gumroad-green/50 p-4 border-b border-black md:border-r border-black md:w-2/5">
            <HeadshotWithBlob
              className="w-full h-auto"
              imgPath="/headshot3.jpg"
            />
          </div>
          {/* Hero content */}
          <div className="bg-gumroad-yellow/50 p-8 md:p-12 lg:p-16 flex items-center justify-start border-b border-black md:w-3/5">
            <div className="max-w-4xl sm:text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 md:mb-6">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Certifications & Education
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>NASM Certified Personal Trainer</li>
                    <li>NASM Certified Nutrition Coach</li>
                    <li>Ongoing Education with Doctor of Physical Therapy</li>
                    <li>Bachelor's Degree, UC Santa Barbara</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Clientele
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Clients living in larger bodies</li>
                    <li>Those managing scoliosis and arthritis</li>
                    <li>Marathon runners and aerialists</li>
                    <li>Hikers and bikers</li>
                    <li>Anyone wanting to pick up grandchildren</li>
                    <li>Those looking to keep up with friends</li>
                  </ul>
                </div>
              </div>
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
  );
}
