import React, { useState } from 'react';
import { Medal, ExternalLink, BookOpen, Code, Award, Verified } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "NPTEL Python",
      issuer: "NPTEL",
      date: "March 2022",
      description: "Elite+Silver certification for Python programming, covering advanced concepts and real-world applications.",
      icon: <Code className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/12kZVsduNBgIDDXq_YcGGOj4fOsxpL_CD/view?usp=sharing"
    },
    {
      id: 2,
      title: "Cisco Python Certification",
      issuer: "Cisco",
      date: "January 2023",
      description: "Comprehensive Python programming certification focusing on network programming and automation.",
      icon: <Verified className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/18AD-QRzGg3iQ47Ef_wZ2XCimZN06OlaA/view?usp=sharing"
    },
    {
      id: 3,
      title: "Infosys Java (Springboard)",
      issuer: "Infosys",
      date: "June 2022",
      description: "Java certification program covering core concepts, OOP principles, and enterprise Java development.",
      icon: <BookOpen className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/12chPT0bIkV7VeaYIXd2VtEhy0r5inwTV/view?usp=sharing"
    },
    {
      id: 4,
      title: "NCC - A Certificate",
      issuer: "National Cadet Corps",
      date: "December 2019",
      description: "Achieved 1st place in competition, demonstrating leadership, discipline, and teamwork skills.",
      icon: <Award className="w-5 h-5" />,
      link: "https://example.com/certificate"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognitions and certifications I've earned
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className={`bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 ${
                activeIndex === index 
                  ? 'border-blue-600 dark:border-blue-400' 
                  : 'border-transparent'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer} • {cert.date}</div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View Certificate <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;