import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, User } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const heroTexts = [
    "Discover, Shop & Explore...",
    "Your One-Stop Shopping Destination...",
    "Premium Quality, Affordable Prices...",
    "Fashion, Tech & Lifestyle..."
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const targetText = heroTexts[currentText];
      if (displayText.length < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentText((prev) => (prev + 1) % heroTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentText, heroTexts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Heading with Typewriter Effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Welcome to</span>
          <br />
          <span className="text-foreground">Tanzeel's Store</span>
        </h1>

        {/* Typewriter Subheading */}
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our curated collection of premium products across fashion, technology, and lifestyle. 
          Quality meets affordability in every purchase.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => onNavigate('products')}
            className="btn-hero group px-8 py-4 text-lg"
          >
            <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={() => onNavigate('profile')}
            variant="outline"
            className="btn-secondary px-8 py-4 text-lg border-primary/30 hover:bg-primary/10"
          >
            <User className="mr-2 h-5 w-5" />
            View Profile
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">500+</div>
            <div className="text-muted-foreground">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-muted-foreground">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4.8★</div>
            <div className="text-muted-foreground">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};