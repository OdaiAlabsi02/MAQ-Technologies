import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Home, Users, Globe, Award, Sparkles, Heart } from 'lucide-react';

const JordanStaysProject = () => {
  return (
    <ProjectPageLayout
      title="JordanStay Homes"
      subtitle="Tech-enabled short-term rental platform redefining hospitality in Jordan"
      imageUrl="https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGJvb2tpbmd8ZW58MHx8MHx8fDA%3D"
      brandName="JordanStay Homes"
    >
      <SEO 
        title="MAQ - JordanStay Homes Project" 
        description="Tech-enabled short-term rental platform redefining hospitality in Jordan with fully managed, high-quality stays that blend local charm with global standards."
        type="article"
      />
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center">
        <Heart className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
        <p className="text-blue-700 font-medium text-sm">Live Project — Successfully Launched and Growing</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: JordanStay Homes Platform</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          JordanStay Homes approached MAQ Technology with a vision to redefine short-term rentals in Jordan by 
          offering fully managed, high-quality stays that blend local charm with global hospitality standards. 
          Their goal was to create a tech-enabled platform that could provide travelers with authentic, 
          well-curated accommodations across Jordan.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional short-term rental platforms lacked the personal touch and quality assurance needed for 
        Jordan's unique hospitality market. Travelers wanted authentic experiences that showcased Jordanian 
        culture while maintaining international standards. The company needed a platform that could manage 
        properties, ensure quality, and provide seamless booking experiences while remaining proudly local.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        MAQ Technology developed a comprehensive hospitality platform that includes:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Home className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Property Management</h4>
            <p>Comprehensive system for managing property listings, availability, and maintenance schedules.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Guest Experience</h4>
            <p>Personalized booking platform with local recommendations and cultural insights for travelers.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Globe className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Local Integration</h4>
            <p>Seamless integration with local services, cultural experiences, and authentic Jordanian hospitality.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Award className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Quality Assurance</h4>
            <p>Rigorous property verification and quality standards to ensure exceptional guest experiences.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Curated property selection showcasing Jordan's diverse accommodations</li>
        <li>Local cultural experiences and recommendations integrated into the platform</li>
        <li>Multi-language support for international travelers</li>
        <li>Secure payment processing with local currency support</li>
        <li>Mobile app for seamless booking and communication</li>
        <li>24/7 guest support with local expertise</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results</h3>
      <p>
        JordanStay Homes has successfully established itself as the #1 tech-enabled short-term rental brand 
        in Jordan, known for its consistency, trust, and exceptional guest experiences that rival global 
        platforms while remaining proudly local. The platform has facilitated thousands of authentic 
        Jordanian experiences for travelers from around the world.
      </p>
      
      <div className="bg-green-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Future Vision</h4>
          <p>
            MAQ Technology continues to partner with JordanStay Homes to expand the platform's capabilities, 
            adding more properties across Jordan, enhancing the cultural experience offerings, and developing 
            new features that further showcase the best of Jordanian hospitality and culture.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default JordanStaysProject; 