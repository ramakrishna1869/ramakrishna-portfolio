import React from 'react';
const About = () => {
  return <section id="about" className="py-24 bg-card">
      <div className="container-custom">
        {/* Top Section - Quote */}
        <div className="mb-16 max-w-4xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
            The core fact of creativity, the more you use, more you have in your significant mind.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">250+</p>
            <p className="text-muted-foreground">DSA Problems<br />Solved</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">3+</p>
            <p className="text-muted-foreground">Years of<br />Coding</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</p>
            <p className="text-muted-foreground">Projects<br />Completed</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</p>
            <p className="text-muted-foreground">Team Events<br />Led</p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary p-8 rounded-lg">
            <div className="mb-6">
              <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-black text-xl">01</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Full Stack Developer
              </h3>
              <p className="text-black/80 text-sm">
                Building comprehensive full-stack web applications using MongoDB, Express, React, and Node.js.
              </p>
            </div>
            <p className="text-sm text-black/70">5 Projects</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-white/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Backend Developer
              </h3>
              <p className="text-muted-foreground text-sm">
                Developing robust APIs with Node.js and Express, database design with MongoDB.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">2 Projects</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-white/5">
            <div className="mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Frontend Developer
              </h3>
              <p className="text-muted-foreground text-sm">
                Creating responsive and interactive web interfaces using React, focusing on UI/UX best practices.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">6 Projects</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;