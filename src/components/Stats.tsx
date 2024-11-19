import React, { useEffect, useState } from 'react';
import { Users, Briefcase, PenTool } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { 
      number: '2+', 
      label: 'YEARS EXPERIENCE',
      icon: Briefcase,
      startNumber: 0,
      endNumber: 2
    },
    { 
      number: '30+', 
      label: 'HAPPY CLIENTS',
      icon: Users,
      startNumber: 0,
      endNumber: 30
    },
    { 
      number: '100+', 
      label: 'COMPLETED DESIGNS',
      icon: PenTool,
      startNumber: 0,
      endNumber: 100
    },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="stats-section" 
      className="py-16 px-4 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                transform transition-all duration-700 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="mb-4 p-3 bg-pink-100 rounded-xl">
                    <stat.icon className="w-6 h-6 text-pink-500" />
                  </div>

                  {/* Number */}
                  <div className="relative mb-2">
                    <div className={`
                      text-4xl font-bold text-gray-800
                      ${isVisible ? 'animate-number' : ''}
                    `}>
                      {isVisible ? (
                        <CountUpNumber 
                          start={stat.startNumber} 
                          end={stat.endNumber} 
                          duration={2000}
                        />
                      ) : '0'}
                      <span className="text-pink-500">+</span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-gray-600 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter component for smooth number animation
const CountUpNumber = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const percentage = progress / duration;
        // Easing function for smooth animation
        const easedProgress = 1 - Math.pow(1 - percentage, 3);
        setCount(Math.floor(start + (end - start) * easedProgress));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, end, duration]);
  
  return count;
};

export default Stats;