import React from 'react';
import { Code, Layers, Database, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const programmingSkills = ['C', 'Python', 'Java'];
  const webSkills = ['HTML', 'CSS', 'JavaScript'];
  const technicalSkills = ['OOPs', 'Data Structures & Algorithms', 'SQL', 'MERN Stack (MongoDB, Express.js, React.js, Node.js)'];
  const softSkills = [
    'Problem-Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Presentation',
  ];

  const SkillCard = ({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactNode }) => (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-pink-500/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard
            title="Programming Languages"
            skills={programmingSkills}
            icon={<Code className="w-6 h-6" />}
          />
          <SkillCard
            title="Web Technologies"
            skills={webSkills}
            icon={<Layers className="w-6 h-6" />}
          />
          <SkillCard
            title="Technical Skills"
            skills={technicalSkills}
            icon={<Database className="w-6 h-6" />}
          />
          <SkillCard
            title="Soft Skills"
            skills={softSkills}
            icon={<BrainCircuit className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;