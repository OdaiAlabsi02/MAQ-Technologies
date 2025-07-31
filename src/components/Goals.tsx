import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Star, CheckCircle } from "lucide-react";

const Goals = () => {
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

  const goals = [
    {
      title: "Client Excellence",
      description: "Achieve 100% client satisfaction through exceptional service delivery",
      target: "100%",
      timeline: "Ongoing",
      icon: Star,
      color: "blue"
    },
    {
      title: "Market Expansion",
      description: "Expand operations across the GCC region by 2026",
      target: "6 Countries",
      timeline: "2026",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Team Growth",
      description: "Build a diverse team of 50+ technology experts",
      target: "50+ Experts",
      timeline: "2027",
      icon: Users,
      color: "purple"
    },
    {
      title: "Innovation Leadership",
      description: "Launch 20+ innovative solutions across various industries",
      target: "20+ Solutions",
      timeline: "2028",
      icon: Target,
      color: "yellow"
    }
  ];

  const shortTermGoals = [
    "Establish partnerships with 10 major UAE enterprises",
    "Launch mobile development center of excellence",
    "Implement AI-driven project management systems",
    "Achieve ISO 27001 certification for security standards"
  ];

  const longTermGoals = [
    "Become the leading technology consultant in the Middle East",
    "Establish innovation labs in major GCC cities",
    "Create proprietary platforms for specific industries",
    "Launch venture capital arm for tech startups"
  ];

  return (
    <section id="goals" className="py-20 bg-gray-50">
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
            Strategic <span className="text-blue-600">Goals</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Clear objectives driving our path to technological excellence
          </motion.p>
        </motion.div>

        {/* Main Goals Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {goals.map((goal, index) => {
            const IconComponent = goal.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 bg-${goal.color}-100 flex items-center justify-center rounded-lg mb-4`}>
                  <IconComponent className={`w-8 h-8 text-${goal.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{goal.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{goal.target}</div>
                    <div className="text-xs text-gray-500">Target</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">{goal.timeline}</div>
                    <div className="text-xs text-gray-500">Timeline</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Short-term and Long-term Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
              variants={itemVariants}
            >
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              Short-term Goals (2025-2026)
            </motion.h3>
            <div className="space-y-4">
              {shortTermGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{goal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
              variants={itemVariants}
            >
              <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
              Long-term Goals (2027-2030)
            </motion.h3>
            <div className="space-y-4">
              {longTermGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{goal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* KPIs Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Key Performance Indicators
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Project Success Rate</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">48h</div>
              <div className="text-sm opacity-90">Average Response Time</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-sm opacity-90">Happy Clients by 2026</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">50M</div>
              <div className="text-sm opacity-90">AED Revenue Target</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;