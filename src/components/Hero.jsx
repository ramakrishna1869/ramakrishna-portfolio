
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-background relative overflow-hidden">
      <div className="container-custom z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hey, I'm Rama Krishna <span className="text-primary">Mummidi</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A proficient Full Stack Developer and DevOps Intern with a solid foundation in Data Structures and Algorithms, passionate about building efficient, scalable, and reliable applications while optimizing development and deployment pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
             <a href="/resume.pdf" download="resume.pdf">
              <Button size="lg" className="text-black bg-white hover:bg-white/90">
                Download Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </a>
              <a href="#contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="hero-image-container">
              {/* <img 
                src="/uploads/79eac3f7-b8d4-4c94-a8a6-7b5b22379a25.png" 
                alt="Rama Krishna" 
                className={`rounded-2xl z-20 relative ${isMobile ? 'w-full' : 'w-3/4 ml-auto'}`}
              /> */}
              <div className="absolute top-[-5%] right-[5%] w-64 h-64 bg-primary/30 rounded-full blur-3xl z-10"></div>
              <div className="absolute bottom-[-5%] left-[5%] w-64 h-64 bg-primary/20 rounded-full blur-3xl z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-24 left-12 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
