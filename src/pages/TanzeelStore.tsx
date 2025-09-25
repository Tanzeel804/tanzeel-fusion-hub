import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { CartSidebar } from '@/components/CartSidebar';
import { ProfileSection } from '@/components/ProfileSection';
import { TermsSection } from '@/components/TermsSection';
import { FeedbackSection } from '@/components/FeedbackSection';
import { Footer } from '@/components/Footer';

const TanzeelStore: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(
      section === 'home' ? 'home' :
      section === 'products' ? 'categories-start' :
      section === 'profile' ? 'my-profile-section' :
      section === 'terms' ? 'terms-section' :
      section === 'feedback' ? 'feedback-section' :
      'home'
    );
    
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'products', element: document.getElementById('categories-start') },
        { id: 'profile', element: document.getElementById('my-profile-section') },
        { id: 'terms', element: document.getElementById('terms-section') },
        { id: 'feedback', element: document.getElementById('feedback-section') }
      ];

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onCartOpen={handleCartOpen}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <ProductsSection />
        <ProfileSection />
        <TermsSection />
        <FeedbackSection />
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={handleCartClose} 
      />
    </div>
  );
};

export default TanzeelStore;