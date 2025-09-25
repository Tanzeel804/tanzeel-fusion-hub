import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      href: 'https://linkedin.com',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tanzeel@example.com',
    }
  ];

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'Products', href: '#categories-start' },
      { name: 'Profile', href: '#my-profile-section' },
      { name: 'Contact', href: '#feedback-section' }
    ],
    'Categories': [
      { name: 'Shoes', href: '#categories-start' },
      { name: 'Bags', href: '#categories-start' },
      { name: 'Clothes', href: '#categories-start' },
      { name: 'Tech', href: '#categories-start' }
    ],
    'Support': [
      { name: 'Terms & Conditions', href: '#terms-section' },
      { name: 'Privacy Policy', href: '#terms-section' },
      { name: 'Feedback', href: '#feedback-section' },
      { name: 'Help Center', href: '#feedback-section' }
    ]
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gradient">Tanzeel's Store</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Your one-stop destination for premium products across fashion, technology, and lifestyle. 
              Quality meets affordability in every purchase.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2024 Tanzeel's Store. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by</span>
            <a 
              href="#my-profile-section" 
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Tanzeel Ahmad
            </a>
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="btn-secondary group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <div className="text-sm font-medium text-foreground mb-1">Free Shipping</div>
              <div className="text-xs text-muted-foreground">On orders over $50</div>
            </div>
            
            <div>
              <div className="text-sm font-medium text-foreground mb-1">24/7 Support</div>
              <div className="text-xs text-muted-foreground">Customer service available</div>
            </div>
            
            <div>
              <div className="text-sm font-medium text-foreground mb-1">30-Day Returns</div>
              <div className="text-xs text-muted-foreground">Hassle-free returns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full btn-hero shadow-glow z-40 opacity-80 hover:opacity-100"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};