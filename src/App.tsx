import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen relative">
        {/* Animated Tech Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute w-full h-full">
            <div className="absolute inset-0">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]" />
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-float" />
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-float-delayed" />
              
              {/* Tech Particles */}
              <div className="absolute inset-0">
                <div className="tech-particles" />
              </div>
            </div>
          </div>
        </div>

        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;