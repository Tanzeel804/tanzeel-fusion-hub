import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Edit, Github, Linkedin, Mail, MapPin, Calendar, Code, Briefcase } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 
    'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL'
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      name: "Task Management App", 
      description: "Collaborative project management tool with real-time updates",
      technologies: ["Vue.js", "Firebase", "TypeScript"],
      link: "#"
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather monitoring with data visualization",
      technologies: ["React", "D3.js", "API Integration"],
      link: "#"
    }
  ];

  const handleDownloadCV = () => {
    // Simulate CV download
    alert('CV download started! 📄');
  };

  const handleEditProfile = () => {
    // Simulate profile edit modal
    alert('Profile edit modal would open here! ✏️');
  };

  return (
    <section id="my-profile-section" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient mb-4">My Profile & Portfolio</h2>
        <p className="text-lg text-muted-foreground">
          Get to know the developer behind Tanzeel's Store
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Card */}
        <div className="lg:col-span-1">
          <Card className="card-glow text-center">
            <CardHeader>
              <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full mb-4 flex items-center justify-center">
                <div className="w-28 h-28 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-gradient">Tanzeel Ahmad</CardTitle>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Pakistan</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                <span>5+ Years Experience</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Available for Projects</span>
              </div>

              <div className="flex justify-center gap-3 pt-4">
                <Button
                  onClick={handleEditProfile}
                  variant="outline"
                  size="sm"
                  className="btn-secondary"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={handleDownloadCV}
                  className="btn-hero"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details and Skills */}
        <div className="lg:col-span-2 space-y-6">
          {/* Objective */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-gradient">Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Software Engineering student from Pakistan with a strong interest in full-stack development. 
                Currently learning modern web technologies including React, Node.js, and cloud services. 
                Focused on building innovative web applications and e-commerce solutions. Always excited to 
                learn new technologies and work on meaningful projects.
              </p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-gradient">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-gradient">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Bachelor of Software Engineering</h4>
                  <p className="text-muted-foreground">Currently Studying • Pakistan</p>
                  <p className="text-sm text-muted-foreground">Email: tanzeelahmed412@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Phone: +92 310 1400966</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gradient mb-6">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.name} className="product-card group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full btn-secondary group-hover:bg-primary/10"
                >
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12">
        <Card className="card-glow">
          <CardHeader>
            <CardTitle className="text-gradient text-center">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="lg" className="flex-col h-auto py-4">
                <Github className="w-6 h-6 mb-2" />
                <span className="text-sm">GitHub</span>
              </Button>
              
              <Button variant="ghost" size="lg" className="flex-col h-auto py-4">
                <Linkedin className="w-6 h-6 mb-2" />
                <span className="text-sm">LinkedIn</span>
              </Button>
              
              <Button variant="ghost" size="lg" className="flex-col h-auto py-4">
                <Mail className="w-6 h-6 mb-2" />
                <span className="text-sm">Email</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};