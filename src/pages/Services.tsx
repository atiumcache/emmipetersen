import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Button } from '../components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, features, icon, buttonText }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-gray-600 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-xl font-bold text-gray-600 mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-gray-600">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        className="w-full bg-black hover:bg-gray-900 text-white"
        asChild
      >
        <a
          href="https://app.acuityscheduling.com/schedule.php?owner=35894702"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </Button>
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
      icon: "📋",
      buttonText: "Book Free Consultation"
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
      icon: "👤",
      buttonText: "Book Private Session"
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
      icon: "👥",
      buttonText: "Book Group Session"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="bg-gray-50 w-full px-4 py-12 md:py-16 flex-grow">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Small Group and Private Training  
            </h1>
            <p className="text-xl text-gray-700">
              Choose the training experience that best fits your goals. Whether you prefer one-on-one attention or the energy of small group sessions, we're here to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                icon={service.icon}
                buttonText={service.buttonText}
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