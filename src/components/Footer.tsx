import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
} from 'lucide-react';

const Footer:React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' }
  ];

  const quickLinks = [
    { name: 'About', url: '#' },
    { name: 'Experience', url: '#' },
    { name: 'Portfolio', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-pink-500 pb-2 inline-block">
              About
            </h3>
            <p className="text-gray-200">
              We create amazing digital experiences that inspire and connect people worldwide.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`transition-colors duration-300 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-pink-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-pink-500 pb-2 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-pink-400" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-pink-400" />
                <span>prakritiphuyal99@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-pink-500 pb-2 inline-block">
              Working Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-pink-400" />
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-pink-400" />
                <div>
                  <p className="font-semibold">Saturday - Sunday</p>
                  <p className="text-gray-300">Unavailable</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-purple-500 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {currentYear} Prakriti Phuyal. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;