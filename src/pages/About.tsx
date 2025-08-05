
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About MAQ Technology
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're a team of innovators dedicated to driving digital transformation through innovative technology solutions for businesses across the UAE and beyond.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    To transform businesses across the UAE and beyond by delivering innovative, scalable, 
                    and secure technology solutions that drive growth, efficiency, and competitive advantage.
                  </p>
                  <p className="text-gray-600">
                    We are committed to being the trusted technology partner that empowers organizations 
                    to thrive in the digital age while maintaining the highest standards of quality, 
                    integrity, and customer service.
                  </p>
                  <p className="text-gray-600">
                    Through our comprehensive approach combining discovery & strategy, agile development, 
                    and ongoing support & growth, we ensure that every project not only meets immediate 
                    needs but also positions our clients for long-term success in an ever-evolving digital landscape.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Client-Centric Approach:</strong> Every decision we make is driven by our clients' success and satisfaction. We listen, understand, and deliver solutions that exceed expectations.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Integrity & Trust:</strong> We build lasting relationships through transparency, honesty, and reliable delivery. Our clients trust us with their most critical digital initiatives.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation Excellence:</strong> We continuously explore emerging technologies and methodologies to provide cutting-edge solutions that give our clients competitive advantages.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaborative Partnership:</strong> We work as an extension of our clients' teams, fostering collaboration and knowledge sharing to achieve shared goals and mutual growth.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    MAQ Technology was founded with a vision to be the leading catalyst for digital innovation in the UAE, 
                    empowering businesses to thrive in the digital age through cutting-edge technology solutions that drive 
                    sustainable growth and competitive advantage.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We envision a future where every business, regardless of size, has access to 
                    world-class technology solutions that unlock their full potential and create 
                    meaningful impact in their industries.
                  </p>
                  <p className="text-gray-600">
                    Our journey is marked by a commitment to pioneering tomorrow's solutions today, 
                    connecting businesses worldwide, and accelerating digital transformation across the Middle East region.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines expertise in software development, cloud infrastructure, 
                  artificial intelligence, and industry-specific knowledge to deliver holistic technology solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Ayman Al-Maqusi",
                      role: "CEO and Founder",
                      bio: "Leading MAQ Technology with a vision to transform businesses through innovative technology solutions.",
                      image: "https://media.licdn.com/dms/image/v2/C4E03AQECigXZ0YWIhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646385642491?e=1756944000&v=beta&t=zVw45K1wll-aKlwi3fIxc-8HfbPeHPKlC82tL78rILk"
                    },
                    {
                      name: "Maher Asha",
                      role: "Software Lead",
                      bio: "Specializing in cloud infrastructure and APIs for seamless data integration.",
                      image: "https://media.licdn.com/dms/image/v2/C5603AQGxgu22bgwUpw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516551009346?e=1756944000&v=beta&t=XuiQYuDO3E1XZVfUGwXVvyjcsx599D2rh0iuhZyo41g"
                    },
                    {
                      name: "Odai Al-Absi",
                      role: "Head of AI",
                      bio: "Leading our AI teams to deliver exceptional solutions with cutting-edge technologies.",
                      image: "https://media.licdn.com/dms/image/v2/D5603AQHU40Y4gcLOOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722459499693?e=1756944000&v=beta&t=ZKNxMZD52-a6oUV3PzXO63RQTE8MxNYcaK9Vipbz6xc"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover filter grayscale" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
