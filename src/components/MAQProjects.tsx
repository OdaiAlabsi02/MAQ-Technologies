import { motion } from "framer-motion";
import React from "react";
import { ExternalLink, Github, Star, Clock, Users } from "lucide-react";

const MAQProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      title: "Dubai Smart City Portal",
      category: "Enterprise Portals",
      description: "Comprehensive digital platform for city services, enabling citizens to access public services online with enhanced user experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      results: [
        "50% reduction in processing time",
        "200,000+ registered users",
        "99.9% uptime achieved"
      ],
      timeline: "6 months",
      teamSize: "8 developers",
      client: "Dubai City Services",
      testimonial: "MAQ delivered exceptional results, transforming our digital services completely.",
      rating: 5
    },
    {
      title: "Emirates E-Commerce Platform",
      category: "E-commerce",
      description: "Full-featured e-commerce mobile application for luxury retail brand with advanced features including AR try-on and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
      results: [
        "300% increase in mobile sales",
        "4.8/5 app store rating",
        "1M+ downloads in 6 months"
      ],
      timeline: "8 months",
      teamSize: "12 specialists",
      client: "Luxury Retail Group",
      testimonial: "The app exceeded our expectations and revolutionized our mobile commerce.",
      rating: 5
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      description: "Complete digital transformation of healthcare operations including patient management, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Docker"],
      results: [
        "60% improvement in efficiency",
        "Reduced waiting times by 40%",
        "HIPAA compliant solution"
      ],
      timeline: "10 months",
      teamSize: "15 experts",
      client: "Abu Dhabi Healthcare",
      testimonial: "MAQ's solution streamlined our operations and improved patient satisfaction significantly.",
      rating: 5
    },
    {
      title: "FinTech Banking App",
      category: "FinTech",
      description: "Secure mobile banking application with advanced features including biometric authentication, cryptocurrency support, and AI fraud detection.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Java", "Blockchain", "Machine Learning"],
      results: [
        "Zero security breaches",
        "95% customer satisfaction",
        "500K+ active users"
      ],
      timeline: "12 months",
      teamSize: "20 developers",
      client: "UAE National Bank",
      testimonial: "Outstanding security and user experience. Best banking app in the region.",
      rating: 5
    },
    {
      title: "Smart Logistics Platform",
      category: "IoT & Analytics",
      description: "IoT-enabled logistics management system with real-time tracking, predictive analytics, and automated route optimization for supply chain excellence.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "IoT Sensors", "Big Data", "AI/ML"],
      results: [
        "35% cost reduction",
        "Real-time visibility achieved",
        "98% delivery accuracy"
      ],
      timeline: "14 months",
      teamSize: "18 engineers",
      client: "Dubai Logistics Corp",
      testimonial: "Game-changing solution that transformed our entire supply chain operations.",
      rating: 5
    },
    {
      title: "Educational Portal",
      category: "EdTech",
      description: "Comprehensive online learning platform with virtual classrooms, AI-powered assessments, and adaptive learning pathways for modern education.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "WebRTC", "AI/ML", "Cloud Services"],
      results: [
        "10,000+ students enrolled",
        "40% improvement in learning outcomes",
        "Multi-language support"
      ],
      timeline: "9 months",
      teamSize: "14 specialists",
      client: "UAE Education Ministry",
      testimonial: "Innovative platform that modernized education delivery across the UAE.",
      rating: 5
    },
    {
      title: "Manufacturing ERP System",
      category: "ERP Systems",
      description: "Complete enterprise resource planning system for manufacturing with inventory management, production planning, and supply chain optimization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      results: [
        "60% process automation",
        "40% cost reduction",
        "Real-time inventory tracking"
      ],
      timeline: "12 months",
      teamSize: "20 developers",
      client: "UAE Manufacturing Group",
      testimonial: "MAQ's ERP system transformed our entire manufacturing operations.",
      rating: 5
    },
    {
      title: "AI-Powered Customer Service",
      category: "AI Solutions",
      description: "Intelligent chatbot system with natural language processing for 24/7 customer support and automated issue resolution.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "OpenAI API", "React", "NLP"],
      results: [
        "80% reduction in response time",
        "95% customer satisfaction",
        "24/7 automated support"
      ],
      timeline: "6 months",
      teamSize: "10 AI specialists",
      client: "Emirates Airlines",
      testimonial: "Revolutionary AI solution that enhanced our customer experience significantly.",
      rating: 5
    }
  ];

  const categories = ["All", "ERP Systems", "AI Solutions", "E-commerce", "Enterprise Portals", "Healthcare", "FinTech", "IoT & Analytics", "EdTech"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Debug logging
  console.log('Active Category:', activeCategory);
  console.log('Filtered Projects Count:', filteredProjects.length);
  console.log('All Projects Count:', projects.length);
  console.log('Filtered Projects:', filteredProjects);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Featured <span className="text-blue-600">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Showcasing our portfolio of successful digital transformations across industries
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Debug info */}
          <div className="col-span-full text-center text-sm text-gray-500 mb-4">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
          {/* Test rendering */}
          <div className="col-span-full text-center text-sm text-red-500 mb-4">
            TEST: Projects should render below
          </div>
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeCategory}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-600">{project.timeline}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-600">{project.teamSize}</span>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Testimonial */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700 italic">"{project.testimonial}"</p>
                  <p className="text-xs text-gray-500 mt-2">- {project.client}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-sm">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Github className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                             </div>
             </div>
           ))}
         </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">Let's discuss how we can bring your vision to life</p>
                         <button 
               onClick={() => {
                 const contactSection = document.getElementById('contact');
                 if (contactSection) {
                   contactSection.scrollIntoView({ 
                     behavior: 'smooth',
                     block: 'start'
                   });
                 }
               }}
               className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
             >
               Start Your Project
             </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MAQProjects;