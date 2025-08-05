
import { ArrowLeft, ArrowRight, FileText, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              MAQ Technology: Technical Philosophy & Innovation
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                At MAQ Technology, our technical strategy is rooted in our mission to empower organizations through innovative, scalable, and secure digital solutions. We believe that technology should be a catalyst for growth, efficiency, and transformation. Our architecture and engineering practices are designed to deliver robust, future-ready platforms that adapt to evolving business needs.
              </motion.p>
              
              {/* System Architecture Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Our Technology Stack & Architecture</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  We leverage a modular, cloud-native architecture that enables seamless integration, rapid deployment, and high scalability. Our stack includes modern frameworks, microservices, and AI-driven analytics, ensuring every solution is both resilient and adaptable. Security and data privacy are embedded at every layer, reflecting our commitment to integrity and trust.
                </p>

                {/* Product Platform Architecture Diagram */}
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm">
                  <CardContent className="p-4 lg:p-6">
                    <ProductPlatform />
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Innovation & Continuous Improvement Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Innovation & Continuous Improvement</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Our approach is driven by a culture of innovation and a relentless pursuit of excellence. We continuously explore emerging technologies—such as AI, IoT, and cloud automation—to deliver solutions that give our clients a competitive edge. Through agile methodologies and close client collaboration, we ensure every project is aligned with business goals and delivers measurable impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[{
                    title: "Agile Engineering",
                    icon: <Cpu className="w-5 h-5 text-gray-700" />,
                    description: "Iterative development cycles, rapid prototyping, and continuous feedback ensure our solutions evolve with your needs."
                  }, {
                    title: "Secure by Design",
                    icon: <FileText className="w-5 h-5 text-gray-700" />,
                    description: "Security and compliance are foundational, with proactive risk management and data protection at every stage."
                  }, {
                    title: "Client Partnership",
                    icon: <Code className="w-5 h-5 text-gray-700" />,
                    description: "We work as an extension of your team, fostering transparency, trust, and shared success."
                  }].map((phase, i) => <motion.div key={phase.title} initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1
                  }} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          {phase.icon}
                          <h3 className="font-semibold text-lg">{phase.title}</h3>
                        </div>
                        <p className="text-gray-600 text-base">{phase.description}</p>
                      </motion.div>)}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/development-process" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;
