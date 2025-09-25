import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Search, Menu, X, Sun, Moon, User, LogIn } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface NavigationProps {
  onCartOpen: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onCartOpen, activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { getTotalItems } = useCart();
  
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Categories' },
    { id: 'profile', label: 'My Profile' },
    { id: 'terms', label: 'Terms' },
    { id: 'feedback', label: 'Feedback' }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-secondary border-b border-border/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center animate-float">
              <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
            </div>
            <h1 className="text-xl font-bold text-gradient">Tanzeel's Store</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onCartOpen}
              className="relative text-muted-foreground hover:text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs animate-pulse-badge">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-gradient-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-accent/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};