import React from 'react';
import { Calendar, Award, Users, Lightbulb, DivideIcon as LucideIcon } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Technical Event Organizer",
      organization: "Bid and Code, College Fest",
      period: "April 2024",
      description: "Organized and managed a competitive coding event with over 100 participants. Designed challenging problems, coordinated with judges, and ensured smooth execution of the event.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Member",
      organization: "Model United Nations (MUN) Club",
      period: "2023",
      description: "Active member of the college MUN club, participating in debates and discussions on global issues. Developed strong research, public speaking, and negotiation skills through regular participation.",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Member",
      organization: "Writers Club",
      period: "2022",
      description: "Contributed articles and creative pieces to the college magazine and blog. Participated in writing workshops and literary events to enhance writing and communication skills.",
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Experience & Activities</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My extracurricular activities and experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
                
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-10 md:ml-auto' : 'md:pl-10'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                        {exp.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-gray-800 dark:text-gray-200 font-medium">{exp.organization}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                        <Calendar className="inline w-4 h-4 mr-1" /> {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;