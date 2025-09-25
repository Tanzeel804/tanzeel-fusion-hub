import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star, Send, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const FeedbackSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    message: ''
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStarClick = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    if (formData.rating === 0) {
      toast({
        title: "Please provide a rating",
        description: "Your star rating helps us improve our service.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Feedback submitted! 🎉",
      description: "Thank you for your valuable feedback. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 0,
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tanzeel@example.com',
      href: 'mailto:tanzeel@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tanzeel@example.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="feedback-section" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient mb-4">Feedback & Contact</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Share your feedback or get in touch with any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-gradient">Send Feedback</CardTitle>
            <p className="text-muted-foreground">
              Your opinion matters to us. Help us improve our service!
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="mt-2 bg-gradient-card border-border/30"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="mt-2 bg-gradient-card border-border/30"
                />
              </div>

              {/* Star Rating */}
              <div>
                <Label className="text-foreground">Rating *</Label>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleStarClick(i + 1)}
                      onMouseEnter={() => setHoveredStar(i + 1)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="p-1 transition-colors"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          (hoveredStar || formData.rating) > i
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground hover:text-yellow-400'
                        }`}
                      />
                    </button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="ml-3 text-sm text-muted-foreground">
                      {formData.rating} out of 5 stars
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what you think about our store, products, or service..."
                  rows={5}
                  className="mt-2 bg-gradient-card border-border/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full btn-hero">
                <Send className="w-4 h-4 mr-2" />
                Send Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Methods */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-gradient">Get in Touch</CardTitle>
              <p className="text-muted-foreground">
                Prefer direct contact? Reach out through any of these channels.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg border border-border/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{method.label}</div>
                    <div className="text-muted-foreground text-sm">{method.value}</div>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-gradient">Follow Me</CardTitle>
              <p className="text-muted-foreground">
                Connect with me on social media for updates and projects.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 p-4 bg-gradient-card rounded-lg border border-border/30 hover:shadow-card transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-gradient">Availability</CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="text-foreground font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best Contact</span>
                  <span className="text-foreground font-medium">Email</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time Zone</span>
                  <span className="text-foreground font-medium">PST (UTC-8)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};