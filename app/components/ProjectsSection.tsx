"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Amazon Clone",
      description: "A fully responsive e-commerce platform clone built with React and Next.js, featuring product listings, shopping cart, and user authentication. Optimized for desktop and mobile with modern UI/UX design.",
      image: "/api/placeholder/600/400",
      tags: ["HTML", "CSS", "React", "Next.js", "E-commerce", "Responsive Design"],
      category: "web",
      liveUrl: "#",
      githubUrl: "https://github.com/Pratishtha987/Amazon_clone",
      featured: true,
      achievements: [
        "Built complete e-commerce functionality with product catalog and shopping cart",
        "Implemented responsive design for optimal mobile and desktop experience",
        "Created modern UI/UX with clean, professional interface",
        "Demonstrated full-stack development skills with React and Next.js"
      ]
    },
    {
      id: 2,
      title: "Seat Booking System",
      description: "Developed a React Native application for coworking space seat booking with QR code generation and real-time booking management.",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "QR Code", "Mobile Development", "Booking System"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      achievements: [
        "Enabled users to request bookings and clients to approve them seamlessly",
        "Implemented QR code generation for confirmed bookings with customer details",
        "Integrated seat assignment and booking confirmation system",
        "Built for both iOS and Android platforms"
      ]
    },
    {
      id: 3,
      title: "Zoho CRM Custom Framework",
      description: "Constructed a custom CRM framework using Zoho and no-code technologies, utilized by 15+ team members for enhanced collaboration.",
      image: "/api/placeholder/600/400",
      tags: ["Zoho CRM", "No-Code", "Custom Framework", "Team Collaboration"],
      category: "integration",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      achievements: [
        "Streamlined CRM workflows by integrating AI solutions",
        "Reduced processing time by 40% through automation",
        "Improved overall operational efficiency with AI technologies",
        "Created over five interactive and responsive prototypes"
      ]
    },
    {
      id: 4,
      title: "Quick-Funded Website",
      description: "A professional business website built with React and Vite, featuring modern design, responsive layout, and deployed on Vercel. Built for a real client with custom domain.",
      image: "/api/placeholder/600/400",
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
      id: 5,
      title: "Password Generator",
      description: "A secure password generator application built with JavaScript, featuring customizable length, character types, and strength validation for enhanced security. Deployed on Netlify with live demo.",
      image: "/api/placeholder/600/400",
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
      id: 6,
      title: "Spotify Clone",
      description: "A music streaming application clone built with HTML, CSS, and JavaScript, featuring music player functionality, playlist management, and responsive design.",
      image: "/api/placeholder/600/400",
      tags: ["HTML", "CSS", "JavaScript", "Music Player", "Responsive Design"],
      category: "web",
      liveUrl: "#",
      githubUrl: "https://github.com/Pratishtha987/Spotify_Clone",
      featured: false,
      achievements: [
        "Created interactive music player with play/pause, skip, and volume controls",
        "Implemented responsive design for seamless mobile and desktop experience",
        "Built playlist management functionality with local storage",
        "Demonstrated advanced CSS animations and JavaScript DOM manipulation"
      ]
    },
    {
      id: 7,
      title: "Parallax Project",
      description: "An interactive parallax scrolling website built with HTML, CSS, and JavaScript, featuring smooth animations and engaging visual effects for enhanced user experience.",
      image: "/api/placeholder/600/400",
      tags: ["HTML5", "CSS3", "JavaScript", "Parallax", "Animations"],
      category: "web",
      liveUrl: "#",
      githubUrl: "https://github.com/Pratishtha987/Parallax-Project",
      featured: false,
      achievements: [
        "Implemented smooth parallax scrolling effects with CSS and JavaScript",
        "Created engaging visual animations and interactive elements",
        "Built responsive design that works across all device sizes",
        "Demonstrated advanced CSS techniques and JavaScript animations"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'integration', name: 'CRM Integration' },
    { id: 'algorithms', name: 'Algorithms' }
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
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
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title.charAt(0)}
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
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
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
