import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { FileText, Users, User } from 'lucide-react';
import { BOOKING_LINK } from '../constants.ts'

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  buttonText: string;
  color: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, features, icon, buttonText, color, bgColor }) => {
  return (
    <div className="relative group">
      {/* Black shadow offset */}
      <div className="absolute -bottom-2 -right-2 w-full bg-black rounded-3xl"></div>
      
      {/* Main card */}
      <div className={`relative ${bgColor} border-2 border-black rounded-3xl bg-gradient-to-br`}>
        <div className="grid grid-rows-[auto_1fr_auto] p-8">
          <div className="space-y-4">
            <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-black`}>
              <span className="text-2xl text-black">{icon}</span>
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <p className="text-xl font-bold">{price}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-black">✓</span>
                  <span className="inline-block">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center pt-8">
            <a href={`${BOOKING_LINK.url}`} target="_blank" className="relative w-[200px] h-[60px] bg-black text-white font-medium text-md flex items-center justify-center p-4">
              <span className="absolute inset-0 bg-pink-500 transition-transform duration-300 hover:translate-y-[3px] hover:translate-x-[3px] border border-black z-0" />
              <span className={`absolute inset-0 ${color} border border-black z-10`} />
              <span className="absolute inset-0 bg-black transition-transform duration-300 hover:translate-y-[-3px] hover:translate-x-[-3px] border border-black z-20 flex items-center justify-center">
                <span className="relative z-10">
                  {buttonText}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Private Strength Coaching",
      description: "One-on-one personalized strength training sessions tailored to your specific needs.",
      price: "From $125 per session",
      features: [
        "SF Bay Area sessions",
        "Personalized training",
        "Progressive strength & endurance",
        "Support & accountability"
      ],
      icon: <User className="w-6 h-6" />,
      buttonText: "Book Consultation",
      color: "bg-gumroad-pink",
      bgColor: "from-white to-white"
    },
    {
      title: "Semi-Private Coaching",
      description: "Small group strength training sessions (2-3 individuals) with personalized attention.",
      price: "From $95 per session",
      features: [
        "Couples welcome",
        "Personalized training",
        "Progressive strength & endurance",
        "Support & accountability"
      ],
      icon: <Users className="w-6 h-6" />,
      buttonText: "Book Consultation",
      color: "bg-gumroad-green",
      bgColor: "from-white to-white"
    },
    {
      title: "Virtual Coaching",
      description: "Online strength training sessions from the comfort of your home or facility.",
      price: "From $125 per session",
      features: [
        "Home or facility coaching",
        "Flexible equipment",
        "Personalized training",
        "Progressive strength & endurance"
      ],
      icon: <Users className="w-6 h-6" />,
      buttonText: "Book Consultation",
      color: "bg-gumroad-blue",
      bgColor: "from-white to-white"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="bg-gumroad-blue/20 w-full px-4 py-12 md:py-16 flex-grow border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
              Coaching Services
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default Services; 