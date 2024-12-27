import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="flex gap-4">
        {/* First Banner - Smartphone */}
        <div 
          className="flex-1 rounded-lg relative h-[300px]"
          style={{
            backgroundImage: 'url(/product-banner-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="p-8 bg-gradient-to-r from-white/80 to-transparent h-full">
            <span className="text-sm text-blue-600 mb-2 block font-medium">Sale 20% off all store</span>
            <h2 className="text-gray-900 font-bold text-2xl md:text-3xl mb-2">
              Smartphone<br />
              Flagship<br />
              2024
            </h2>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Second Banner - Xiaomi */}
        <div 
          className="flex-1 rounded-lg relative h-[300px]"
          style={{
            backgroundImage: 'url(/product-banner-2.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f8f8f8'
          }}
        >
          <div className="p-8">
          <span className="text-sm text-blue-600 mb-2 block font-medium">Best Deals</span>
            <h2 className="text-gray-900 font-bold text-2xl md:text-3xl mb-2">
              Xiaomi 14t Pro<br />
              8.499.000<br />
              <br />
            </h2>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;