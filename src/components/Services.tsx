import { motion } from "framer-motion";
import React, { useState } from "react";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

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

  const services = [
    {
      icon: Code,
      title: "Web Development",
      shortDesc: "Custom web applications built with modern technologies",
      fullDesc: "We create responsive, scalable web applications using the latest frameworks and technologies. From simple websites to complex enterprise solutions, our web development services ensure optimal performance, security, and user experience.",
      features: [
        "Responsive Design & Development",
        "Progressive Web Applications (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "PHP", "MongoDB"],
      startingPrice: "AED 15,000",
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform mobile applications",
      fullDesc: "Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions that deliver seamless user experiences across all devices.",
      features: [
        "Native iOS & Android Development",
        "Cross-platform Solutions (React Native)",
        "UI/UX Design & Prototyping",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Backend Integration"
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS"],
      startingPrice: "AED 25,000",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      shortDesc: "Complete digital transformation consulting and implementation",
      fullDesc: "Guide your business through comprehensive digital transformation. We assess current systems, identify opportunities, and implement solutions that modernize operations and drive growth.",
      features: [
        "Digital Strategy Development",
        "Legacy System Modernization",
        "Cloud Migration Services",
        "Process Automation",
        "Data Analytics Implementation",
        "Change Management Support"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Salesforce", "Microsoft 365", "Tableau"],
      startingPrice: "AED 50,000",
      color: "green"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      shortDesc: "Business intelligence and data analytics solutions",
      fullDesc: "Unlock the power of your data with our comprehensive analytics solutions. We help businesses make data-driven decisions through advanced analytics, reporting, and business intelligence tools.",
      features: [
        "Data Warehouse Design",
        "Business Intelligence Dashboards",
        "Predictive Analytics",
        "Data Integration & ETL",
        "Real-time Reporting",
        "Machine Learning Implementation"
      ],
      technologies: ["Power BI", "Tableau", "Python", "R", "SQL Server", "BigQuery"],
      startingPrice: "AED 30,000",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      shortDesc: "Comprehensive security assessment and implementation",
      fullDesc: "Protect your digital assets with our cybersecurity services. We provide security assessments, implementation of security measures, and ongoing monitoring to keep your business safe.",
      features: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Security Framework Implementation",
        "Compliance Management",
        "Incident Response Planning",
        "Security Training Programs"
      ],
      technologies: ["Splunk", "McAfee", "Cisco", "Fortinet", "Azure Security", "AWS Security"],
      startingPrice: "AED 20,000",
      color: "red"
    },
    {
      icon: Zap,
      title: "Technology Consulting",
      shortDesc: "Strategic technology guidance and architecture design",
      fullDesc: "Get expert advice on technology strategy, architecture design, and implementation planning. Our consultants help you make informed decisions about technology investments and digital initiatives.",
      features: [
        "Technology Strategy Development",
        "Architecture Design & Review",
        "Vendor Selection & Management",
        "Project Planning & Management",
        "Risk Assessment & Mitigation",
        "ROI Analysis & Optimization"
      ],
      technologies: ["Enterprise Architecture", "TOGAF", "ITIL", "Agile", "DevOps", "Cloud Platforms"],
      startingPrice: "AED 10,000",
      color: "indigo"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "AED 5,000",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic website development",
        "Mobile-responsive design",
        "Content management system",
        "SEO optimization",
        "Email support",
        "Monthly maintenance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "AED 15,000",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced web application",
        "Mobile app development",
        "Database integration",
        "API development",
        "Priority support",
        "Weekly consultations",
        "Performance analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Complete digital transformation",
        "Custom integrations",
        "Advanced security measures",
        "24/7 dedicated support",
        "On-site consultations",
        "Training programs",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-blue-500' : ''
                }`}
                variants={itemVariants}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-12 h-12 bg-${service.color}-100 flex items-center justify-center rounded-lg mb-4`}>
                  <IconComponent className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">Starting at {service.startingPrice}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Service View */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                {React.createElement(services[activeService].icon, {
                  className: `w-8 h-8 text-${services[activeService].color}-600 mr-3`
                })}
                <h3 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">{services[activeService].fullDesc}</p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
              <div className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                alt={services[activeService].title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies We Use:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {services[activeService].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Starting Price</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{services[activeService].startingPrice}</div>
                <p className="text-gray-600 text-sm">Contact us for detailed pricing based on your specific requirements</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Service Packages */}
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
            Service Packages
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg relative ${
                  pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
                variants={itemVariants}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {pkg.price}
                    <span className="text-lg text-gray-500">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-all ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;