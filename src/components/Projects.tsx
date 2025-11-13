
import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "React Shopping App",
    description: "A basic frontend application built with React, focusing on UI/UX with reusable components and state management.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: ["React", "Frontend", "UI/UX"],
    techStack: ["React", "State Management", "UI/UX", "Responsive Design"],
    demoLink: "#",
    githubLink: "#",
    year: "2024"
  },
  {
    id: 2,
    title: "Next-Resort (Full-Stack App)",
    description: "A resort booking platform developed using Next.js, integrating both frontend and backend functionalities with server-side rendering (SSR) for fast load times.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: ["Next.js", "Full-Stack", "SSR"],
    techStack: ["Next.js", "SSR", "Full-Stack", "Booking System"],
    demoLink: "#",
    githubLink: "#",
    year: "2024"
  },
  {
    id: 3,
    title: "MERN Food Delivery",
    description: "A full-stack food delivery platform with authentication, orders, and payments using the MERN stack.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
    category: ["MERN", "Full-Stack"],
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    demoLink: "#",
    githubLink: "#",
    year: "2023"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container-custom">
        <div className="mb-12">
          <p className="section-label">— Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold heading-underline mb-8">
            All Creative Works,<br/>
            Selected projects.
          </h2>
        </div>

        {/* Featured projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-video overflow-hidden rounded-lg bg-card">
                  <img 
                  alt={project.title}
                    src={project.image} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Project info */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-card/50 text-foreground/80 border-foreground/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="#" className="arrow-link">
            Explore more <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
