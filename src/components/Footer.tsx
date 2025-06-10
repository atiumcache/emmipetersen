import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <div className="text-xl font-bold font-brand tracking-tight">
            <a
              href="/"
              className="text-white hover:text-gumroad-yellow transition-colors"
            >
              Emmi Petersen
            </a>
          </div>
          <div className="text-white">
            <a
              href="mailto:helloemmipetersen@gmail.com"
              className="text-white hover:text-gumroad-yellow transition-colors"
            >
              helloemmipetersen@gmail.com
            </a>
          </div>
          <div className="text-white">San Francisco, CA</div>
        </div>
        <div className="text-center text-gray-400 py-2 border-t border-gray-400">
          © {new Date().getFullYear()} Emmi Petersen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
