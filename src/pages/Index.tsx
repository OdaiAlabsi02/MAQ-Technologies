
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Goals from '@/components/Goals';
import Mission from '@/components/Mission';
import MAQProjects from '@/components/MAQProjects';
import Services from '@/components/Services';
import ContactUs from '@/components/ContactUs';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="MAQ - Technology Consulting & Development" 
        description="MAQ Technologies is Dubai's premier technology consultant and development company, crafting innovative web, mobile, and AI solutions."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['technology consulting', 'web development', 'mobile apps', 'digital transformation', 'Dubai', 'UAE', 'software development']}
      />
      <Hero />
      <About />
      <Vision />
      <Goals />
      <Mission />
      <MAQProjects />
      <Services />
      <ContactUs />
    </PageLayout>
  );
};

export default Index;
