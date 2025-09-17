"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Developer",
      company: "CRM Masters Infotech LLP",
      location: "Remote",
      duration: "Jan 2025 - Present",
      description: "Developing seat booking systems for coworking spaces using React Native and implementing QR code generation for confirmed bookings.",
      achievements: [
        "Developed a seat booking system for coworking spaces using React Native, enabling users to request bookings and clients to approve them",
        "Implemented QR code generation for confirmed bookings, including customer details and assigned seat information",
        "Configured and customized Zoho CRM and Desk for clients, integrating lead management from their websites",
        "Technologies: React Native, Zoho CRM, QR Code Integration, Mobile Development"
      ]
    },
    {
      title: "Freelance Web Developer & IT Specialist",
      company: "Quick-Funded (www.quick-funded.io)",
      location: "Remote",
      duration: "Jun 2024 - Dec 2024",
      description: "Built scalable and modular websites with React, managed server operations, and delivered comprehensive IT solutions.",
      achievements: [
        "Built a scalable and modular website with React, boosting code maintainability by 30% and cutting deployment time by 25%",
        "Resolved a 40% productivity drop by streamlining team collaboration tools",
        "Managed server operations, hosting platforms, and DNS configurations, increasing uptime by 15% and boosting website speed by 30%",
        "Implemented robust IT solutions, resulting in a 25% reduction in technical downtime",
        "Delivered comprehensive IT support with a 98% resolution rate for technical issues"
      ]
    },
    {
      title: "Frontend Developer",
      company: "ABATA AI",
      location: "Remote",
      duration: "Jun 2024 - Dec 2024",
      description: "Constructed custom CRM frameworks using Zoho and no-code technologies, with hands-on experience in UI/UX design.",
      achievements: [
        "Constructed a custom CRM framework using Zoho and no-code technologies, utilized by 15+ team members",
        "Gained hands-on experience in UI/UX design with Figma and Framer, creating over five interactive and responsive prototypes",
        "Streamlined CRM workflows by integrating AI solutions, reducing processing time by 40%",
        "Improved overall operational efficiency by leveraging AI technologies",
        "Technologies: Figma, Framer, Zoho CRM, React.js"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Newton School",
      location: "Remote",
      duration: "Dec 2022 - May 2024",
      description: "Mastered algorithmic problem-solving in Java and gained extensive experience in frontend development using modern web standards.",
      achievements: [
        "Mastered over 100 algorithmic problems in Java, significantly enhancing coding efficiency and optimization techniques",
        "Successfully completed five cross-functional group projects, resulting in a 30% increase in project delivery speed",
        "Acquired hands-on experience in frontend development using HTML5, CSS, Bootstrap, and JavaScript",
        "Delivered responsive and user-friendly designs for over 3 projects with mobile-first layouts",
        "Achieved top-tier performance in data structure and algorithm challenges",
        "Technologies: HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in web development, specializing in React.js, React Native, 
            and Zoho CRM integration with a focus on creating scalable solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                <div className="ml-0 md:ml-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

