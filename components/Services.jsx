"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from '@/assets/assets';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      title: "Manicures",
      imageUrl: assets.hero_image,
      description: "Professional nail care for your hands",
    },
    {
      title: "Pedicures",
      imageUrl: assets.hero_image,
      description: "Luxurious foot care treatments",
    },
    {
      title: "Nail Art",
      imageUrl: assets.hero_image,
      description: "Creative and unique nail designs",
    },
    {
      title: "Acrylic & Gel Nail Extensions",
      imageUrl: assets.hero_image,
      description: "Long-lasting nail enhancements",
    },
    {
      title: "Nail Treatment",
      imageUrl: assets.hero_image,
      description: "Therapeutic care for healthy nails",
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with your transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-red-900 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft className="text-red-900" size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            <ChevronRight className="text-red-900" size={24} />
          </button>

          {/* Slides */}
          <div className="overflow-hidden relative h-[400px] rounded-2xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full transition-opacity duration-500"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  zIndex: currentSlide === index ? 1 : 0,
                  pointerEvents: currentSlide === index ? 'auto' : 'none'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="mb-6 text-lg">{service.description}</p>
                  <button className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-full transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-red-900 w-6" : "bg-red-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;