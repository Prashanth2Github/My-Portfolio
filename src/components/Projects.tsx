import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Code, 
  Bell, 
  Car, 
  GraduationCap 
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  icon: React.ReactNode;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Deadline Notifier",
      description: "An intelligent system that uses LSTM to predict optimal study schedules based on assignment difficulty and student's past performance patterns. Helps students manage their time efficiently.",
      techStack: ["Python", "LSTM", "MERN Stack", "Machine Learning"],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Bell className="w-5 h-5" />,
      github: "https://github.com/Prashanth2Github"
    },
    {
      id: 2,
      title: "Vehicle Rental System",
      description: "A comprehensive vehicle rental platform that allows users to browse, book, and manage vehicle rentals. Features include vehicle categorization, booking management, and admin dashboard.",
      techStack: ["Java", "SQL", "JDBC", "Java Swing"],
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Car className="w-5 h-5" />,
      github: "https://github.com/Prashanth2Github/Vehicle-Rental-System.git",
      demo: "https://github.com/Prashanth2Github/Vehicle-Rental-System.git"
    },
    {
      id: 3,
      title: "College Website",
      description: "A responsive college website with dynamic content management, event calendar, faculty profiles, and student resources. Built with focus on accessibility and user experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <GraduationCap className="w-5 h-5" />,
      github: "https://github.com/Prashanth2Github/College-Website.git",
      demo: "https://prashanth2github.github.io/College-Website/"
    }
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      <span className="bg-blue-600 p-2 rounded-full mr-3 text-white">
                        {project.icon}
                      </span>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 2).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-blue-500/80 text-white rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-500/80 text-white rounded">
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Prashanth2Github" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors shadow"
          >
            <Github className="w-5 h-5 mr-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;