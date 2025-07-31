
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* maher's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQGxgu22bgwUpw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516551009346?e=1756944000&v=beta&t=XuiQYuDO3E1XZVfUGwXVvyjcsx599D2rh0iuhZyo41g"
                alt="Maher Asha"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Maher Asha</h3>
              <p className="text-gray-600 mb-4">CTO</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:felix@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  maher@garagat.ai
                </a>
                <a 
                  href="https://www.linkedin.com/in/maherasha/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Odai's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHU40Y4gcLOOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722459499693?e=1756944000&v=beta&t=ZKNxMZD52-a6oUV3PzXO63RQTE8MxNYcaK9Vipbz6xc"
                alt="Odai Al-Absi"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Odai Al-Absi</h3>
              <p className="text-gray-600 mb-4">Head of AI</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:love@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  sales@garagat.ai
                </a>
                <a 
                  href="https://www.linkedin.com/in/odai-alabsi-665111206/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                <a href="tel:+971585715257" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +971 58 571 5257
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
