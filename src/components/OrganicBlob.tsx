import React from 'react';

const HeadshotWithBlob = () => {
  return (
    <div className="flex-1 bg-yellow-100 p-12 flex items-center justify-center min-h-[calc(80vh-4rem)]">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="/headshot1.jpg"
          alt="Emmi Petersen headshot"
          className="object-cover w-full h-full"
          style={{
            // Organic blob shape - choose one of these options:
            
            // Option 1: Soft organic blob
            // clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            
            // Option 2: Wavy organic shape (uncomment to use)
            // clipPath: 'polygon(20% 0%, 80% 10%, 100% 35%, 85% 70%, 75% 100%, 25% 90%, 0% 65%, 15% 25%)'
            
            // Option 3: More dramatic organic blob (uncomment to use)
            // clipPath: 'polygon(25% 5%, 75% 0%, 95% 25%, 100% 75%, 80% 95%, 20% 100%, 5% 80%, 0% 20%)'
            
            // Option 4: Amoeba-like shape (uncomment to use)
            clipPath: 'polygon(40% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)'
            
            // Option 5: Irregular organic shape (uncomment to use)
            // clipPath: 'polygon(15% 10%, 85% 5%, 95% 35%, 90% 65%, 100% 85%, 60% 95%, 40% 100%, 10% 90%, 0% 60%, 5% 30%)'
          }}
        />
      </div>
    </div>
  );
};

export default HeadshotWithBlob;