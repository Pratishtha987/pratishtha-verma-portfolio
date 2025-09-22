"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Award } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "React.js", icon: <Code className="w-6 h-6" />, level: 95 },
    { name: "Next.js", icon: <Globe className="w-6 h-6" />, level: 90 },
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, level: 95 },
    { name: "TypeScript", icon: <Code className="w-6 h-6" />, level: 85 },
    { name: "Java", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Zoho CRM", icon: <Database className="w-6 h-6" />, level: 90 },
    { name: "React Native", icon: <Smartphone className="w-6 h-6" />, level: 85 },
    { name: "Node.js", icon: <Database className="w-6 h-6" />, level: 80 },
    { name: "Express.js", icon: <Database className="w-6 h-6" />, level: 80 },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, level: 75 },
    { name: "Tailwind CSS", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Figma", icon: <Globe className="w-6 h-6" />, level: 85 },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "100+", label: "Algorithms Solved" },
    { number: "98%", label: "Issue Resolution" },
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
            Passionate Frontend Developer specializing in React.js, Next.js, and modern web technologies. 
            Experienced in building scalable applications, CRM integrations, and mobile solutions.
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
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 relative">
                <img 
                  src="/Picture.jpeg" 
                  alt="Pratishtha Verma - Frontend Developer"
                  className="w-full h-full object-cover"
                />
                {/* Award badge inside the photo - top position with transform */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg transform translate-z-0" style={{ zIndex: 1000, position: 'relative' }}>
                  <Award className="w-8 h-8 text-white relative z-10" />
                </div>
              </div>
              {/* Decorative elements with more distance */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-400 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute top-12 -right-4 w-6 h-6 bg-teal-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -left-6 w-5 h-5 bg-teal-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Developer & React Enthusiast
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Currently working as a Developer at CRM Masters Infotech LLP, I specialize in building 
              scalable React.js and React Native applications. With expertise in Zoho CRM integration, 
              I help businesses streamline their operations and improve efficiency through custom solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I have a strong foundation in Java programming with 100+ algorithmic problems solved, 
              and extensive experience in full-stack development using modern technologies like Next.js, 
              Node.js, and MongoDB. I'm passionate about creating responsive, user-friendly applications 
              that deliver exceptional performance.
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
