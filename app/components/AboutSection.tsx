"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Award } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "React.js", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Next.js", icon: <Globe className="w-6 h-6" />, level: 85 },
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, level: 95 },
    { name: "TypeScript", icon: <Code className="w-6 h-6" />, level: 80 },
    { name: "Tailwind CSS", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Zoho CRM", icon: <Database className="w-6 h-6" />, level: 85 },
    { name: "API Integration", icon: <Database className="w-6 h-6" />, level: 88 },
    { name: "Responsive Design", icon: <Smartphone className="w-6 h-6" />, level: 92 },
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer with a love for creating exceptional user experiences 
            and solving complex problems through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                PV
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Developer & Problem Solver
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With over 3 years of experience in frontend development, I specialize in creating 
              modern, responsive web applications using React.js, Next.js, and other cutting-edge 
              technologies. I'm passionate about writing clean code, optimizing performance, and 
              delivering exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I have extensive experience with Zoho CRM integration and API development, helping 
              businesses streamline their processes and improve efficiency. I love tackling complex 
              challenges and turning ideas into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
