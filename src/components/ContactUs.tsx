import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        to_name: 'MAQ Team',
        reply_to: formData.email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you within 24 hours.",
        variant: "default"
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      content: "+971 4 123 4567",
      subtitle: "Call us directly",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@maq.ae",
      subtitle: "Send us an email",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Dubai Internet City, Dubai, UAE",
      subtitle: "Visit our office",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Sun - Thu: 9:00 AM - 6:00 PM",
      subtitle: "We're available",
      color: "yellow"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Digital Transformation",
    "Data & Analytics",
    "Cybersecurity",
    "Technology Consulting",
    "Other"
  ];

  const budgetRanges = [
    "Under AED 50,000",
    "AED 50,000 - 100,000",
    "AED 100,000 - 250,000",
    "AED 250,000 - 500,000",
    "Over AED 500,000"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
              >
                <div className={`w-12 h-12 bg-${method.color}-100 flex items-center justify-center rounded-lg mx-auto mb-4`}>
                  <IconComponent className={`w-6 h-6 text-${method.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 font-medium mb-1">{method.content}</p>
                <p className="text-sm text-gray-500">{method.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="e.g., 3 months, ASAP, Q2 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                variants={itemVariants}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Interactive Map Placeholder */}
            <motion.div
              className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Location</h3>
                <p className="text-gray-600">Dubai Internet City<br />Dubai, UAE</p>
              </div>
            </motion.div>

            {/* Response Time & Emergency Contact */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Expectations</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Email responses within 2 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Phone calls returned within 1 hour</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Project proposals within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-red-50 border border-red-200 p-6 rounded-xl"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-bold text-red-900">Emergency Support</h3>
              </div>
              <p className="text-red-800 mb-3">For critical system issues or urgent support:</p>
              <div className="space-y-2">
                <p className="text-red-900 font-semibold">📞 +971 50 123 4567</p>
                <p className="text-red-900 font-semibold">✉️ emergency@maq.ae</p>
                <p className="text-sm text-red-700">Available 24/7 for existing clients</p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </button>
              <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Meeting
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;