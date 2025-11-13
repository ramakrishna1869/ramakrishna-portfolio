
import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "React Shopping App",
    description: "A basic frontend application built with React, focusing on UI/UX with reusable components and state management.",
    image: "image1.jpg",
    category: ["React", "Frontend", "UI/UX"],
    techStack: ["React", "State Management", "UI/UX", "Responsive Design"],
    demoLink: "https://mt-react-fake-store-web-app.netlify.app/",
    githubLink: "https://github.com/ramakrishna1869",
    year: "2024"
  },
  {
    id: 2,
    title: "Next-Resort (Full-Stack App)",
    description: "A resort booking platform developed using Next.js, integrating both frontend and backend functionalities with server-side rendering (SSR) for fast load times.",
    image: "image2.jpg",
    category: ["Next.js", "Full-Stack", "SSR"],
    techStack: ["Next.js", "SSR", "Full-Stack", "Booking System"],
    demoLink: "https://nextresortsmilodon.vercel.app/",
    githubLink: "https://github.com/ramakrishna1869",
    year: "2024"
  },
  {
    id: 3,
    title: "MERN Food Delivery",
    description: "A full-stack food delivery platform with authentication, orders, and payments using the MERN stack.",
    category: ["MERN", "Full-Stack"],
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    demoLink: "https://restaurant-2025.vercel.app/auth",
    githubLink: "https://github.com/ramakrishna1869",
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
            <div key={project.id} className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image section, alternating sides */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg">
               {project.image && (
  <img 
    alt={project.title}
    src={project.image}
    loading="lazy"
    className="max-w-40 aspect-[4/3] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
  />
)}



                </div>
              </div>
              
              {/* Content section */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-1 bg-primary"></div>
                  <p className="text-sm font-medium text-muted-foreground">{project.year}</p>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-card border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
          >
            View All Projects <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
