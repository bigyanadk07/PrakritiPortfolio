import React, { useState } from 'react';
import {Layers } from 'lucide-react';
import Design1 from '../assets/images/designs/Astrosage.png'
import Design2 from '../assets/images/designs/Earpuffs.png'
import Design3 from '../assets/images/designs/Holocaust Stridex.png'
import Design4 from '../assets/images/designs/Meducare.png'
import Design5 from '../assets/images/designs/Velora Smart Watch.png'
import Design6 from '../assets/images/designs/airpods.png'
import Design7 from '../assets/images/designs/sun-cream.png'

const Portfolio: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      image: Design1,
      title: 'Astrosage Brand Identity',
      description: 'Cosmic-inspired branding design',
      client: 'Astrosage',
      tools: ['Adobe Photoshop'],
      fullDescription: 'A comprehensive brand identity for Astrosage, featuring a celestial-themed visual system that captures the essence of cosmic exploration and mystique.',
      year: 2024
    },
    {
      image: Design2,
      title: 'Earpuffs Product Branding',
      description: 'Playful audio accessory design',
      client: 'Earpuffs',
      tools: ['Adobe Photoshop'],
      fullDescription: 'Innovative branding and packaging design for Earpuffs, creating a vibrant and memorable visual identity for their unique audio accessories.',
      year: 2024
    },
    {
      image: Design3,
      title: 'Holocaust Stridex Campaign',
      description: 'Awareness-driven design project',
      client: 'Holocaust Stridex',
      tools: ['Adobe Photoshop'],
      fullDescription: 'A powerful visual communication design that aims to raise awareness and create impactful messaging for the Holocaust Stridex campaign.',
      year: 2024
    },
    {
      image: Design4,
      title: 'Meducare Healthcare Branding',
      description: 'Medical services visual identity',
      client: 'Meducare',
      tools: ['Adobe Photoshop'],
      fullDescription: 'Comprehensive branding solution for Meducare, developing a professional and compassionate visual identity for healthcare services.',
      year: 2024
    },
    {
      image: Design5,
      title: 'Velora Smart Watch Design',
      description: 'Innovative wearable technology branding',
      client: 'Velora',
      tools: ['Adobe Photoshop'],
      fullDescription: 'Cutting-edge brand design for Velora Smart Watch, combining sleek aesthetics with technological innovation in the wearable tech space.',
      year: 2024
    },
    {
      image: Design6,
      title: 'Airpods Concept Branding',
      description: 'Audio device visual concept',
      client: 'Personal Project',
      tools: ['Adobe Photoshop'],
      fullDescription: 'Creative exploration of Airpods branding, reimagining the visual language and marketing approach for wireless audio devices.',
      year: 2024
    },
    {
      image: Design7,
      title: 'Sun Cream Packaging Design',
      description: 'Skincare product branding',
      client: 'Suncare Cosmetics',
      tools: ['Adobe Photoshop'],
      fullDescription: 'Innovative packaging and branding design for a sun cream product, focusing on clean, appealing, and modern visual communication.',
      year: 2024
    }
  ];

  const openProjectModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 p-4 rounded-full mb-6">
            <Layers className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Creative Portfolio
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A curated collection of design works that blend creativity, strategy, and visual storytelling. 
            Each project is a unique journey of artistic exploration and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              onClick={() => openProjectModal(index)}
            >
              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    {project.year}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button 
              onClick={showMoreProjects}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Show More Works
            </button>
          </div>
        )}
      </div>

      {/* Project Modal (unchanged from previous version) */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div>
                <img 
                  src={projects[selectedProject].image} 
                  alt={projects[selectedProject].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h2 className="text-3xl font-bold text-purple-600 mb-4">
                  {projects[selectedProject].title}
                </h2>
                <div className="flex justify-between mb-6">
                  <span className="text-gray-600">
                    Client: {projects[selectedProject].client}
                  </span>
                  <span className="text-purple-600 font-medium">
                    {projects[selectedProject].year}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">
                  {projects[selectedProject].fullDescription}
                </p>
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Awards</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].awards.map((award, i) => (
                      <span 
                        key={i} 
                        className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;