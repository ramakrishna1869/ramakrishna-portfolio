
import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import BlogListing from '@/components/BlogListing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <BlogListing />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
