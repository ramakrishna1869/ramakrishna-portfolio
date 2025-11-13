
import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import BlogListing from '@/components/BlogListing';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <BlogListing />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Blog;
