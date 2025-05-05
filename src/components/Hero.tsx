import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-0 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-96 -left-20 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-24 right-24 w-80 h-80 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-10">
            <h1 className="animate-fade-in text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Prashanth Bonkuru
              </span>
            </h1>
            
            <h2 className="animate-fade-in animation-delay-300 text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              Tech Enthusiast | Problem Solver | Aspiring Developer
            </h2>
            
            <p className="animate-fade-in animation-delay-600 text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Computer Science & Engineering student from Vasavi College of Engineering, 
              passionate about solving real-world problems through technology.
            </p>
            
            <div className="animate-fade-in animation-delay-900 flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/file/d/1THEHuZpZMt_TwcgbewGug46HRUhel1Ov/view?usp=sharing" 
                download 
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <FileDown className="w-5 h-5 mr-2" /> Download Resume
              </a>
              
              <div className="flex space-x-4 items-center">
                <a 
                  href="https://github.com/Prashanth2Github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/prashanth-bonkuru-7a8617265/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a 
                  href="mailto:bonkuruprashanth05@gmail.com" 
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-fade-in animation-delay-1200">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-tr from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full p-1 shadow-xl">
                <div className="bg-white dark:bg-gray-900 h-full w-full rounded-full overflow-hidden">
                  <img 
                    src="/Prashanth.jpg" 
                    alt="Prashanth Bonkuru" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button 
            onClick={scrollToAbout} 
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          >
            <ArrowDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;