
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Database, Layout, Server } from 'lucide-react';

const services = [
  {
    title: "Product Designer",
    description: "Creating intuitive and beautiful frontend interfaces with React, focusing on user experience and responsive design.",
    icon: <Layout className="h-8 w-8 text-primary" />,
    projects: 134,
    color: "bg-primary",
  },
  {
    title: "Branding Designer",
    description: "Developing expressive and performant APIs using Express.js, with secure authentication and data validation.",
    icon: <Code className="h-8 w-8 text-white" />,
    projects: 37,
    color: "bg-card",
  },
  {
    title: "Full Stack Developer",
    description: "Building comprehensive full-stack web applications using MongoDB, Express, React, and Node.js.",
    icon: <Server className="h-8 w-8 text-white" />,
    projects: 62,
    color: "bg-card",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-custom">
        <div className="mb-16">
          <p className="section-label">— Services</p>
          <h2 className="text-3xl md:text-5xl font-bold heading-underline mb-8">
            My Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card flex flex-col justify-between",
                service.color
              )}
            >
              <div>
                <div className="mb-6 p-2">
                  {service.icon}
                </div>
                <h3 className={cn("text-2xl font-bold mb-4", index === 0 ? "text-background" : "text-foreground")}>
                  {service.title}
                </h3>
                <p className={cn("mb-8", index === 0 ? "text-background/80" : "text-muted-foreground")}>
                  {service.description}
                </p>
              </div>
              
              <div className={cn("text-sm", index === 0 ? "text-background/80" : "text-muted-foreground")}>
                {service.projects} Projects
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Estimate your project?<br />
            Let me know here.
          </h2>
          
          <div className="max-w-xl mx-auto mt-12">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="What's your name?" 
                className="w-full bg-card border border-white/5 rounded-md p-4 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              
              <input 
                type="email" 
                placeholder="Your fancy email" 
                className="w-full bg-card border border-white/5 rounded-md p-4 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-black hover:bg-white/90 rounded-md w-full mt-4"
              >
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
