import { loadContent } from '../lib/content';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeadshotWithBlob from '../components/OrganicBlob';
import { Content } from '../types/content';

export default function Home() {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const loadContentData = () => {
      const data = loadContent();
      setContent(data);
    };
    loadContentData();
  }, []);

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const { heading, description } = content.home.hero;

  return (
    <div className="min-h-screen flex flex-col bg-gumroad-pink/5">
      <div>
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero content */}
          <div className="bg-gumroad-pink/50 p-8 md:p-12 lg:p-16 flex items-center justify-center border-b border-black md:w-1/2">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-4 md:mb-6">
                {heading}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
                {description}
              </p>
              <Link 
                to="/contact" 
                className="relative w-full md:w-[250px] h-[50px] md:h-[60px] bg-black text-white font-medium text-base md:text-lg flex items-center justify-center group mx-auto transition-all duration-300 hover:scale-105"
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
    </div>
  );
}
