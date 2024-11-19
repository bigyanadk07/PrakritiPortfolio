import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import Logo from '../assets/images/logo.png';

interface HeaderProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
  onPortfolioClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onAboutClick, 
  onExperienceClick, 
  onPortfolioClick, 
  onContactClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', onClick: () => { onAboutClick(); setIsMenuOpen(false); } },
    { name: 'Experience', onClick: () => { onExperienceClick(); setIsMenuOpen(false); } },
    { name: 'Portfolio', onClick: () => { onPortfolioClick(); setIsMenuOpen(false); } },
    { name: 'Contact', onClick: () => { onContactClick(); setIsMenuOpen(false); } }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prakriti-phuyal-1ba504295/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:prakritiphuyal99@gmail.com', label: 'Email' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo remains the same */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src={Logo} alt="" className='w-20 h-auto' />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.onClick}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </button>
            ))}
            
            {/* Social Links remain the same */}
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-gray-200">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button and mobile navigation remain largely the same, 
              but replace href with onClick for navigation links */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Mobile Social Links remain the same */}
              <div className="flex items-center space-x-4 px-3 pt-4 border-t border-gray-200">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;