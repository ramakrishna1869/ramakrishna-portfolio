
import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "What's new? My blog and news.",
    date: "Oct 15",
    link: "#"
  },
  {
    id: 2,
    title: "How do you see time working for projects?",
    date: "Oct 12",
    link: "#"
  },
  {
    id: 3,
    title: "Ego and empathy in design",
    date: "Oct 9",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container-custom">
        <div className="mb-12">
          <p className="section-label">— Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold heading-underline mb-8">
            What's new?<br/>
            My blog and news.
          </h2>
        </div>
        
        <div className="space-y-6">
          {blogPosts.map(post => (
            <div key={post.id} className="flex justify-between items-center border-b border-white/10 py-4">
              <div>
                <a href={post.link} className="text-xl md:text-2xl font-medium hover:text-primary transition-colors">
                  {post.title}
                </a>
              </div>
              
              <div className="flex items-center gap-8">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <a href={post.link} className="text-primary">
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
              alt="Testimonial" 
              className="aspect-square object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl mb-8">
              "Passionate about solving problems with different approaches and optimizing solutions. Always willing to learn new technologies and implement them in projects."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-primary"></div>
              <p className="font-bold">Rama Krishna</p>
              <p className="text-sm text-muted-foreground">CS Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
