import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { assets } from '@/assets/assets';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block text-red-900">Your Nails.</span>
                <span className="block text-red-800">Your Place.</span>
                <span className="block">
                  Our
                  <span className="relative inline-block ml-2">
                    Expertise
                    <Sparkles className="absolute -top-6 -right-6 text-red-100" size={24} />
                  </span>
                </span>
              </h1>
            </div>

            <p className="max-w-2xl lg:max-w-none mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
              Connect with top-rated nail technicians and enjoy professional, on-the-go nail care — at the location that suits you best.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#book-now" 
                 className="inline-flex items-center px-8 py-3 bg-red-900 text-white text-lg font-medium rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Book Now
              </a>
              <a href="#learn-more" 
                 className="inline-flex items-center px-8 py-3 border-2 border-red-900 text-red-900 text-lg font-medium rounded-full hover:bg-red-50 transition-colors duration-300">
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex justify-center lg:justify-start gap-8 text-gray-500">
                <div className="text-center lg:text-left">
                  <div className="font-bold text-2xl text-red-900">500+</div>
                  <div className="text-sm">Nail Artists</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-bold text-2xl text-red-900">4.9★</div>
                  <div className="text-sm">Avg Rating</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-bold text-2xl text-red-900">10K+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2">
                <Image 
                  src={assets.hero_image}
                  alt="Professional nail service" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
              </div>
              {/* Smaller images */}
              <div>
                <Image 
                  src={assets.hero_image}
                  alt="Nail art detail" 
                  className="w-full h-[200px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <Image
                  src={assets.hero_image} 
                  alt="Mobile service demonstration" 
                  className="w-full h-[200px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 bg-red-100 w-24 h-24 rounded-full opacity-50" />
            <div className="absolute -bottom-6 -left-6 bg-pink-100 w-32 h-32 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;