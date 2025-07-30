import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-gradient-to-r from-blue-900 to-purple-800 relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[600px] lg:h-[650px] xl:h-[700px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-800/90">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80" 
            alt="MAQ Technology Solutions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-24 sm:pt-28 md:pt-36 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-5xl text-center" variants={itemVariants}>
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" variants={itemVariants}>
                Transform Your Vision Into <span className="text-yellow-400">Digital Reality</span>
              </motion.h1>
              <motion.p className="text-xl sm:text-2xl text-gray-200 mt-4 sm:mt-6 max-w-3xl mx-auto" variants={itemVariants}>
                MAQ is Dubai's premier technology consultant and development company, crafting innovative web and mobile solutions since 2025.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 flex items-center justify-center group text-base sm:text-lg font-semibold"
                  onClick={scrollToServices}
                >
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-base sm:text-lg font-semibold"
                  onClick={scrollToContact}
                >
                  Get Started
                  <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300" variants={itemVariants}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 mb-4">
              <Code className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Web Development</h3>
            <p className="text-gray-600 text-sm md:text-base">Custom web applications built with cutting-edge technologies for optimal performance and user experience.</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 flex items-center justify-center rounded-lg text-purple-600 mb-4">
              <Cpu className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Mobile Apps</h3>
            <p className="text-gray-600 text-sm md:text-base">Native and cross-platform mobile applications that deliver seamless experiences across all devices.</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" variants={itemVariants}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-100 flex items-center justify-center rounded-lg text-yellow-600 mb-4">
              <Layers className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Technology Consulting</h3>
            <p className="text-gray-600 text-sm md:text-base">Strategic technology consulting to help businesses leverage digital solutions for growth and efficiency.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
