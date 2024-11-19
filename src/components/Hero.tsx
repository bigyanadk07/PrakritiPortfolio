import React, { forwardRef } from 'react';
import { ArrowRight, Camera, Palette, Plane } from 'lucide-react';
import Image from '../assets/images/puki.png';

interface SectionRefs {
  portfolioRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Hero = forwardRef<HTMLDivElement, { sectionRefs: SectionRefs }>((props, ref) => {
  const interests = [
    { icon: Palette, text: 'Graphic Designer' },
    { icon: Camera, text: 'Motion-Graphic Designer' },
    { icon: Plane, text: 'Travel Enthusiast' }
  ];

  return (
    <section 
      ref={ref} 
      className="relative py-20 md:py-36 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 w-full"
    >
      {/* Floating decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30 -z-10 animate-bounce" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10 animate-bounce" />
      
      {/* Geometric overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320">
            <path fill="#FF69B4" fillOpacity="0.1" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,160C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5">
              <span className="block mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Prakriti
              </span>
              <span className="block bg-gradient-to-r pb-3 from-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Phuyal
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {interests.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                >
                  <item.icon size={18} className="text-pink-500" />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              Not afraid to think outside the box and create something unique. 
              Bringing creative visions to life through thoughtful design, 
              capturing moments through photography, and exploring new horizons.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button 
                onClick={() => props.sectionRefs.contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-pink-200"
              >
                Contact Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => props.sectionRefs.portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg border-2 border-pink-200 text-pink-500 hover:bg-pink-50 transition-colors duration-300"
              >
                View Portfolio
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl transform rotate-6 blur-sm opacity-20" />
            <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 p-2 rounded-2xl shadow-xl">
              <img 
                src={Image} 
                alt="Prakriti Phuyal" 
                className="w-full h-[600px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;