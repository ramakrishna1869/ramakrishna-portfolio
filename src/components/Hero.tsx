
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="split-layout">
      {/* Left side - Introduction */}
      <div className="split-layout-left">
        {/* Logo */}
        <div className="mb-16">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">R</span>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-grow">
          {/* Name */}
          <h1 className="text-7xl md:text-8xl font-jakarta font-bold mb-4">
            Rama<br/>
            Krishna.
          </h1>
          
          <div className="h-2 w-14 bg-primary my-8"></div>
          
          {/* Introduction */}
          <div className="mt-6">
            <p className="section-label">— Introduction</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              MERN Stack Developer and<br/> 
              Problem Solver, based in<br/>
              India.
            </h2>
            <p className="text-muted-foreground max-w-md mt-4">
              Final-Year CS Student @ RGUKT IIIT Srikakulam with a passion for 
              creating efficient, user-friendly interfaces and robust backend systems.
            </p>
            
            <a href="#about" className="arrow-link mt-8 inline-block">
              My story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex space-x-4 mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-all duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/rama-krishna-81bbb527b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-all duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:ramakrishna.smilodon@gamail.com" 
            className="text-foreground/80 hover:text-primary transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Right side - Image and Projects */}
      <div className="split-layout-right">
        <div className="h-full w-full flex items-center justify-center relative">
          {/* Profile Picture Circle - Added here */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-primary shadow-lg">
              <AvatarImage src="https://i.postimg.cc/mgBTCH6N/photo-2025-05-13-09-46-51.jpg" alt="Rama Krishna" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Project background grid */}
          <div className="absolute inset-0 bg-card">
            <div className="w-full h-full p-6 md:p-12 flex flex-col justify-center overflow-hidden">
              <p className="section-label">— Portfolio</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                All Creative Works,<br/>
                Selected projects.
              </h3>
              <p className="text-muted-foreground max-w-md mb-8">
                Building modern, responsive web applications with the MERN stack and a focus on user experience.
              </p>
              
              {/* Featured project previews */}
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="aspect-video bg-muted/30 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Banking App" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-muted/30 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Food Delivery App" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <Button 
                className="px-8 py-6 h-auto bg-white text-black hover:bg-white/90 rounded-md shadow-lg mt-8 w-fit"
                onClick={scrollToProjects}
              >
                View all projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
