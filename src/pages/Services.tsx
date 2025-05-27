import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="text-primary-600 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Design",
      description: "Creating beautiful, responsive websites that capture your brand's essence and engage your audience.",
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Building robust web applications with modern technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      description: "Driving growth through strategic digital marketing campaigns and SEO optimization.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services; 