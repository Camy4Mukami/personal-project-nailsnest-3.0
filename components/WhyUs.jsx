import React from "react";
import { Clock, Award, Palette, Shield, Heart } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Support Local Talent",
      description:
        "By choosing NailsNest, you're supporting local nail artists and helping them grow their careers. We empower talented professionals by providing flexible work opportunities and fair compensation, ensuring they can thrive while doing what they love.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We partner exclusively with certified and highly skilled nail technicians who bring years of expertise to every appointment. Rest assured, you're in good hands with professionals dedicated to perfection.",
    },
    {
      icon: Palette,
      title: "Customization",
      description:
        "Your nails are as unique as you are. At NailsNest, we offer fully customizable services designed to match your style and preferences. From classic manicures to intricate nail art, let us help you express yourself through your nails.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your health and safety are our top priorities. All our technicians adhere to strict hygiene protocols, using sterilized tools and following industry-best practices to ensure a worry-free experience.",
    },
    {
      icon: Clock,
      title: "Convenience",
      description:
        "With NailsNest, say goodbye to rigid salon schedules and long commutes. Our platform allows you to book appointments anytime, anywhere—whether it's at home, the office, or even on vacation. Enjoy the luxury of professional nail care without leaving your comfort zone.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Main Feature Card - Keeping original content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Why Our Clients  Choose Us
          </h2>
         <p className="text-gray-600 max-w-2xl mx-auto">
         At NailsNest, we’re committed to delivering a nail care experience that’s not only exceptional but also tailored to your unique needs. Here’s why thousands of clients trust us for their beauty routines:
         </p>
          
        </div>

        {/* Grid Layout matching the image */}
        <div className="grid grid-cols-12 gap-6">
          {/* Support Local Talent - Large left card */}
          <div className="col-span-12 md:col-span-4 row-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="p-3 bg-red-100 rounded-lg w-fit">
                  <Heart className="text-red-900" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-red-900 mt-4 mb-2">{reasons[0].title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{reasons[0].description}</p>
              </div>
            </div>
          </div>

          {/* Top row - Quality Assurance and Customization */}
          {reasons.slice(1, 3).map((reason, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="p-6">
                  <div className="p-3 bg-red-100 rounded-lg w-fit">
                    <reason.icon className="text-red-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mt-4 mb-2">{reason.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom row - Safety First and Convenience */}
          {reasons.slice(3, 5).map((reason, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="p-6">
                  <div className="p-3 bg-red-100 rounded-lg w-fit">
                    <reason.icon className="text-red-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mt-4 mb-2">{reason.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;