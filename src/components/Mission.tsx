import { motion } from "framer-motion";
import { Heart, Shield, Zap, Users } from "lucide-react";

const Mission = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Every decision we make is driven by our clients' success and satisfaction. We listen, understand, and deliver solutions that exceed expectations.",
      color: "red"
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We build lasting relationships through transparency, honesty, and reliable delivery. Our clients trust us with their most critical digital initiatives.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Innovation Excellence",
      description: "We continuously explore emerging technologies and methodologies to provide cutting-edge solutions that give our clients competitive advantages.",
      color: "yellow"
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work as an extension of our clients' teams, fostering collaboration and knowledge sharing to achieve shared goals and mutual growth.",
      color: "green"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white">
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
            Our <span className="text-blue-600">Mission</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Driving digital transformation through innovative technology solutions
          </motion.p>
        </motion.div>

        {/* Main Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            variants={itemVariants}
          >
            Empowering Businesses Through Technology
          </motion.h3>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            To transform businesses across the UAE and beyond by delivering innovative, scalable, 
            and secure technology solutions that drive growth, efficiency, and competitive advantage. 
            We are committed to being the trusted technology partner that empowers organizations 
            to thrive in the digital age while maintaining the highest standards of quality, 
            integrity, and customer service.
          </motion.p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Core Values That Drive Us
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className={`w-12 h-12 bg-${value.color}-100 flex items-center justify-center rounded-lg mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How Mission Drives Operations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            How Our Mission Drives Daily Operations
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Discovery & Strategy</h4>
              <p className="text-gray-300">Every project begins with deep understanding of client needs and strategic planning aligned with business objectives.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Agile Development</h4>
              <p className="text-gray-300">We implement agile methodologies with continuous client collaboration and iterative delivery for optimal results.</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Support & Growth</h4>
              <p className="text-gray-300">Our commitment extends beyond delivery with ongoing support, optimization, and scaling as businesses grow.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;