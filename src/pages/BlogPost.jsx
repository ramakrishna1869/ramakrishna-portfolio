
import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import BlogDetails from '@/components/BlogDetails';
import Footer from '@/components/Footer';

const BlogPost = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <BlogDetails />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default BlogPost;
