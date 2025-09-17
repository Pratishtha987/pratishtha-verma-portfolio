"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React.js solutions.",
      achievements: [
        "Led development of 5+ major web applications",
        "Improved application performance by 40%",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipeline for frontend deployments"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      duration: "2021 - 2022",
      description: "Developed responsive web applications and integrated third-party APIs including Zoho CRM solutions.",
      achievements: [
        "Built 10+ responsive web applications",
        "Integrated Zoho CRM with custom dashboards",
        "Reduced page load times by 35%",
        "Collaborated with UX/UI designers on 15+ projects"
      ]
    },
    {
      title: "Junior Developer Intern",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      duration: "2020 - 2021",
      description: "Gained hands-on experience with React.js, JavaScript, and modern web development practices.",
      achievements: [
        "Contributed to 3 major projects",
        "Learned modern JavaScript frameworks",
        "Participated in agile development process",
        "Built first full-stack application"
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
            My professional journey in web development, from intern to senior developer, 
            with a focus on creating impactful solutions.
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

