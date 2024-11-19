import React from 'react';
import { Briefcase, Calendar, Building2, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Assistant Animator',
      company: 'My Second Teacher',
      location: 'Balwatar, Kathmandu, Nepal',
      period: 'Nov 2022 - Dec 2022',
      description: 'Assisted in animating chapters of a student book, creating engaging visual content, and collaborating with team members to enhance storytelling.',
      achievements: [
        'Animated and delivered multiple engaging chapters for a student book project.',
        'Collaborated with other illustrators to ensure narrative alignment.',
        'Enhanced animation workflow efficiency through streamlined techniques.'
      ],
      skills: ['Adobe Illustrator','Illustration', 'Digital Art']
    },
    {
      title: 'Graphic Designer Intern',
      company: 'Supreme IT',
      location: 'Satdobato, Lalitpur, Nepal',
      period: 'Feb 2023 - Aug 2023',
      description: 'Focused on creating user-centric and appealing graphics and illustrations.',
      achievements: [
        'Designed and implemented 20+ creative solutions for various client projects',
        'Collaborated with the development team to ensure design consistency',
        'Improved design workflow efficiency by 30% through process optimization'
      ],
      skills: ['Adobe Photoshop', 'UI Design', 'Illustration', 'Brand Design']
    },
    {
      title: 'Graphics Designer',
      company: 'Bama Consultant',
      location: 'Gwarko, Lalitpur, Nepal',
      period: 'Oct 2023 - Present',
      description: 'Created user-centered designs for various client.',
      achievements: [
        'Led the redesign of 5+ major client brand identities',
        'Managed and delivered 15+ concurrent design projects',
        'Introduced new design system that reduced revision time by 40%'
      ],
      skills: ['Adobe Photoshop', 'UI Design', 'Illustration', 'Brand Design']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-purple-100 p-3 rounded-xl">
            <Briefcase className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Professional Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative space-y-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-purple-200" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-24 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[29px] top-0 w-4 h-4 rounded-full border-4 border-purple-600 bg-white group-hover:scale-125 transition-transform duration-300" />

              {/* Experience Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  {/* Title and Company */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{exp.location}</span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{exp.description}</p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience;