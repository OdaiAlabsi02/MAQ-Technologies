import { motion } from "framer-motion";
import { Lightbulb, Globe, Rocket } from "lucide-react";

const Vision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Our <span className="text-yellow-400">Vision</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Shaping the future of technology in the Middle East
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">Empowering Digital Transformation</h3>
              <p className="text-lg text-gray-200 mb-6">
                To be the leading catalyst for digital innovation in the UAE, empowering businesses 
                to thrive in the digital age through cutting-edge technology solutions that drive 
                sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-gray-200">
                We envision a future where every business, regardless of size, has access to 
                world-class technology solutions that unlock their full potential and create 
                meaningful impact in their industries.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-gray-300">Pioneering tomorrow's solutions today</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Global Reach</h4>
                <p className="text-sm text-gray-300">Connecting businesses worldwide</p>
              </div>
              <div className="text-center">
                <Rocket className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Growth</h4>
                <p className="text-sm text-gray-300">Accelerating digital transformation</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="Future Technology Vision"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>

        {/* Future Aspirations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Future Aspirations
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">2026</div>
              <h4 className="font-semibold mb-2">Regional Expansion</h4>
              <p className="text-sm text-gray-300">Establish presence across the GCC region</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">2027</div>
              <h4 className="font-semibold mb-2">AI Excellence</h4>
              <p className="text-sm text-gray-300">Establishing AI excellence center and thought leadership</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">2028</div>
              <h4 className="font-semibold mb-2">Innovation Hub</h4>
              <p className="text-sm text-gray-300">Establish MAQ Innovation Center</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">2030</div>
              <h4 className="font-semibold mb-2">Industry Leader</h4>
              <p className="text-sm text-gray-300">Recognized as MENA's tech leader</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;