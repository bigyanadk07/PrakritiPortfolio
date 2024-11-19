import React, { useRef, forwardRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onAboutClick={() => scrollToSection(heroRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heroRef}>
          <Hero 
            sectionRefs={{ 
              portfolioRef: portfolioRef, 
              contactRef: contactRef 
            }} 
          />
        </div>
        <div ref={experienceRef}>
          <Stats />
          <Experience />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;