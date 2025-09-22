"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Quick-Funded Website",
      description: "A professional business website built with React and Vite, featuring modern design, responsive layout, and deployed on Vercel. Built for a real client with custom domain.",
      image: "/quick-funded-screenshot.png",
      tags: ["React", "Vite", "Vercel", "Business Website", "Client Project"],
      category: "web",
      liveUrl: "https://www.quick-funded.io",
      githubUrl: "https://github.com/Pratishtha987/quick-funded",
      featured: true,
      achievements: [
        "Built scalable and modular website with React and Vite, boosting code maintainability by 30%",
        "Deployed on Vercel with custom domain (www.quick-funded.io) for professional presentation",
        "Implemented responsive design optimized for all devices and screen sizes",
        "Delivered real client project with modern UI/UX and fast loading performance"
      ]
    },
    {
      id: 2,
      title: "Shopping Cart E-commerce",
      description: "A fully functional e-commerce application built with Next.js featuring product catalog, shopping cart functionality, and responsive design. Includes product listings with detailed descriptions, pricing, and add-to-cart functionality.",
      image: "/shopping-cart-screenshot.png",
      tags: ["Next.js", "React", "E-commerce", "Shopping Cart", "Vercel", "JavaScript"],
      category: "web",
      liveUrl: "https://shoppingcart-gamma.vercel.app/",
      githubUrl: "https://github.com/Pratishtha987/shoppingcart",
      featured: true,
      achievements: [
        "Built complete e-commerce functionality with product catalog and shopping cart",
        "Implemented responsive design for optimal mobile and desktop experience",
        "Created modern UI/UX with clean, professional interface",
        "Deployed live application on Vercel with fast loading performance"
      ]
    },
    {
      id: 3,
      title: "Quiz Master - Interactive Quiz App",
      description: "A modern, feature-rich quiz application built with React featuring multiple categories, difficulty levels, timer functionality, and comprehensive scoring system. Deployed on Vercel with live demo.",
      image: "/quiz-app-screenshot.png",
      tags: ["React", "JavaScript", "CSS3", "Quiz App", "Interactive", "Vercel"],
      category: "web",
      liveUrl: "https://quiz-app-gamma-sooty.vercel.app/",
      githubUrl: "https://github.com/Pratishtha987/Quiz-App",
      featured: true,
      achievements: [
        "Built interactive quiz with 6 categories and 3 difficulty levels",
        "Implemented real-time progress tracking and timer functionality",
        "Created responsive design with dark/light theme toggle",
        "Deployed live application on Vercel with modern UI/UX"
      ]
    },
    {
      id: 4,
      title: "Password Generator",
      description: "A secure password generator application built with JavaScript, featuring customizable length, character types, and strength validation for enhanced security. Deployed on Netlify with live demo.",
      image: "/password-generator-screenshot.png",
      tags: ["JavaScript", "Security", "Password Generation", "Web App", "Netlify"],
      category: "web",
      liveUrl: "https://stirring-basbousa-ebd907.netlify.app/",
      githubUrl: "https://github.com/Pratishtha987/Password-Generator",
      featured: true,
      achievements: [
        "Built secure password generation with customizable parameters and real-time strength validation",
        "Implemented modern UI with interactive controls for uppercase, lowercase, numbers, and symbols",
        "Deployed live application on Netlify with custom domain",
        "Demonstrated JavaScript expertise and security best practices"
      ]
    },
    {
      id: 5,
      title: "Parallax Project",
      description: "An interactive parallax scrolling website built with HTML, CSS, and JavaScript, featuring smooth animations and engaging visual effects for enhanced user experience. Deployed on Netlify with live demo.",
      image: "/parallax-screenshot.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Parallax", "Animations", "Netlify"],
      category: "web",
      liveUrl: "https://parallex-pro.netlify.app/",
      githubUrl: "https://github.com/Pratishtha987/Parallax-Project",
      featured: true,
      achievements: [
        "Implemented smooth parallax scrolling effects with CSS and JavaScript",
        "Created engaging visual animations and interactive elements for adventure theme",
        "Deployed live application on Netlify with custom domain",
        "Demonstrated advanced CSS techniques and JavaScript animations"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my expertise in React.js, React Native, 
            Zoho CRM integration, and full-stack development with measurable business impact.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'text-white shadow-lg'
                  : 'border'
              }`}
              style={filter === category.id 
                ? { backgroundColor: '#38b2ac' }
                : { 
                    borderColor: '#38b2ac',
                    color: '#38b2ac',
                    backgroundColor: '#ffffff'
                  }
              }
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    style={{ 
                      objectPosition: 'center top',
                      transform: 'translateY(-20%)',
                      height: '120%'
                    }}
                  />
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ 
                        backgroundColor: '#e6fffa',
                        color: '#38b2ac'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-white py-2 px-4 rounded-lg text-center font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    style={{ backgroundColor: '#38b2ac' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border-2 py-2 px-4 rounded-lg text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ 
                      borderColor: '#38b2ac',
                      color: '#38b2ac',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
