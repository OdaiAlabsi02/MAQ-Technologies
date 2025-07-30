import { motion } from "framer-motion";
import { Users, Award, MapPin, Calendar } from "lucide-react";

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About <span className="text-blue-600">MAQ</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Leading the digital transformation in the UAE with innovative technology solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="MAQ Team"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
              variants={itemVariants}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Pioneering Excellence Since 2025
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              variants={itemVariants}
            >
              MAQ emerged as Dubai's premier technology consulting and development company, dedicated to transforming businesses through innovative digital solutions. Our expertise spans web development, mobile applications, and comprehensive technology consulting.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600"
              variants={itemVariants}
            >
              What sets us apart is our commitment to understanding each client's unique challenges and delivering tailored solutions that drive real business results. We combine cutting-edge technology with deep industry knowledge to create digital experiences that exceed expectations.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-4"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Since 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">50+ Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Award Winning</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Leadership Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              variants={itemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ahmed Al-Rashid</h4>
              <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">Leading MAQ's vision with 15+ years of experience in technology innovation and business strategy.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              variants={itemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b66639ff?auto=format&fit=crop&w=300&q=80"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h4>
              <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">Driving technical excellence with expertise in emerging technologies and scalable solutions.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              variants={itemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="Head of Development"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Omar Hassan</h4>
              <p className="text-blue-600 font-medium mb-3">Head of Development</p>
              <p className="text-gray-600 text-sm">Leading our development teams to deliver exceptional digital solutions with cutting-edge technologies.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;