
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '0', 10);
  
  const post = blogPosts.find(post => post.id === postId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container-custom py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-24">
      <div className="container-custom max-w-4xl mx-auto px-4 md:px-8">
        <Link to="/blog" className="text-primary flex items-center gap-2 mb-8 hover:underline w-fit">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{post.date}</span>
          </div>
        </div>
        
        <div className="mb-8">
          <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden">
            <img 
              src={`https://picsum.photos/seed/${post.id}/1200/800`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
