import React from 'react';
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hello! I'm Prashanth
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm an enthusiastic Computer Science & Engineering student from Vasavi College of Engineering, Hyderabad, set to graduate in 2025. With a strong foundation in programming and problem-solving, I'm passionate about building innovative solutions that make a positive impact.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I approach challenges with curiosity and persistence, always eager to explore new technologies and sharpen my skills. My goal is to contribute to impactful projects that drive innovation and make a real difference in the tech industry.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you’ll often find me watching or playing cricket, listening to music, enjoying movies and web series, or just chilling with friends. These moments help me relax, recharge, and stay inspired.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mt-1 mr-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Education</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    B.Tech, Computer Science & Engineering
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Vasavi College of Engineering, Hyderabad
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mt-1 mr-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Graduation Year</h5>
                  <p className="text-gray-600 dark:text-gray-400">2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mt-1 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Location</h5>
                  <p className="text-gray-600 dark:text-gray-400">Hyderabad, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mt-1 mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Email</h5>
                  <a 
                    href="mailto:bonkuruprashanth05@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    bonkuruprashanth05@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 dark:text-blue-400 mt-1 mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Phone</h5>
                  <a 
                    href="9581758451" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    9581758451
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;