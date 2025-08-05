import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Car, Users, Zap, Shield } from 'lucide-react';

const GaragatProject = () => {
  return (
    <ProjectPageLayout
      title="Garagat.ai"
      subtitle="Leading smart automotive service marketplace in the UAE and MENA region"
      imageUrl="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
      brandName="Garagat.ai"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Garagat.ai by MAQ Technology</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Garagat.ai aimed to become the leading smart automotive service marketplace in the UAE and MENA region, 
          offering seamless, AI-powered experiences for customers, garages, and fleet operators. They required a 
          comprehensive digital platform that could simplify and digitize the entire car service journey.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional automotive service booking was fragmented and lacked transparency. Customers struggled to find 
        reliable garages, compare services, and track their vehicle maintenance. Garages needed better tools to 
        manage bookings and customer relationships. The market required an intelligent platform that could connect 
        all stakeholders seamlessly.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        MAQ Technology provided an end-to-end solution called Garagat.ai, combining sophisticated AI-driven 
        booking systems with comprehensive garage management tools. The solution features:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Car className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Booking System</h4>
            <p>AI-powered appointment scheduling with real-time availability and intelligent service matching.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Customer Portal</h4>
            <p>Comprehensive dashboard for customers to track service history, receive notifications, and manage appointments.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Garage Management</h4>
            <p>Advanced tools for garages to manage bookings, inventory, customer relationships, and service tracking.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Trust & Quality</h4>
            <p>Verified garage network with quality ratings, transparent pricing, and secure payment processing.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>AI-powered service recommendations based on vehicle data</li>
        <li>Real-time service tracking and notifications</li>
        <li>Transparent pricing and service history</li>
        <li>Fleet management tools for corporate clients</li>
        <li>Mobile app for on-the-go booking and tracking</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Customer Convenience</h4>
            <p>Simplified booking process with transparent pricing and real-time service tracking.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Garage Efficiency</h4>
            <p>Streamlined operations with automated booking management and customer relationship tools.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Market Expansion</h4>
            <p>Garages can reach new customers and expand their service offerings through the platform.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Data-Driven Insights</h4>
            <p>Analytics and reporting tools help optimize operations and improve customer satisfaction.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Scalable Platform</h4>
            <p>Built to handle growth across the MENA region with robust infrastructure and security.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        Garagat.ai successfully launched as the region's most trusted and innovative car service ecosystem, 
        where every vehicle owner can access reliable, fast, and AI-enhanced automotive solutions at their fingertips. 
        MAQ Technology's innovative platform and specialized knowledge allowed for rapid deployment, immediate positive 
        impact, and a scalable model for future expansions across the MENA region.
      </p>
    </ProjectPageLayout>
  );
};

export default GaragatProject; 