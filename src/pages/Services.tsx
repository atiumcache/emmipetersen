import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { FileText, Users, User } from 'lucide-react';

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
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-black rounded-3xl"></div>
      
      {/* Main card */}
      <div className={`relative ${bgColor} border-2 border-black rounded-3xl p-8 bg-gradient-to-br`}>
        <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 border-black`}>
          <span className="text-2xl text-black">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gumroad-green mb-4">{description}</p>
        <p className="text-xl font-bold mb-4">{price}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-black">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <a href="https://app.acuityscheduling.com/schedule.php?owner=35894702" target="_blank" className="relative w-[200px] h-[60px] bg-black text-white font-medium text-md flex items-center justify-center">
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
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Consultations",
      description: "Initial one-on-one session to assess your fitness level, discuss your goals, and create a personalized plan for your fitness journey.",
      price: "Free Initial Consultation",
      features: [
        "Fitness level assessment",
        "Goal setting discussion",
        "Personalized plan creation",
        "Nutrition guidance overview"
      ],
      icon: <FileText className="w-6 h-6" />,
      buttonText: "Book Free Consultation",
      color: "bg-gumroad-yellow",
      bgColor: "from-white to-white"
    },
    {
      title: "Private Classes",
      description: "One-on-one personalized training sessions tailored to your specific goals and needs. Tailored for your lifestyle and schedule.",
      price: "From $125 per session",
      features: [
        "Personalized attention",
        "Customized workout plans",
        "Flexible scheduling",
        "Progress tracking"
      ],
      icon: <User className="w-6 h-6" />,
      buttonText: "Book Private Session",
      color: "bg-gumroad-pink",
      bgColor: "from-white to-white"
    },
    {
      title: "Semi-Private Classes",
      description: "Small group training sessions (2-3 people) that combine personal attention with group motivation.",
      price: "From $95 per session",
      features: [
        "Small group environment",
        "Cost-effective training",
        "Social motivation",
        "Structured workouts"
      ],
      icon: <Users className="w-6 h-6" />,
      buttonText: "Book Group Session",
      color: "bg-gumroad-green",
      bgColor: "from-white to-white"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="bg-[var(--gumroad-yellow)] w-full px-4 py-12 md:py-16 flex-grow border-b border-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 text-center">
              My Coaching Services
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