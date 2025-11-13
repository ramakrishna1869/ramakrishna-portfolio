
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration with your provided details
    emailjs.send(
      'service_l6ops9h', // Service ID
      'template_6n8e3by', // Template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      },
      'BccNVep9FHDRYutje' // Public Key
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container-custom grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <p className="section-label">— Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold heading-underline mb-8">
            Got a project?<br />
            Let's talk.
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <a 
            href="mailto:ramakrishna.smilodon@gamil.com" 
            className="arrow-link mb-6 inline-block"
          >
            ramakrishna.smilodon@gamil.com <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        
        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">What's your name?</label>
              <input 
                id="name" 
                type="text" 
                placeholder="What's your name?" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-white/5 rounded-md p-4 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Your fancy email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Your fancy email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-white/5 rounded-md p-4 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Tell me about your project</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Tell me about your project" 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-background border border-white/5 rounded-md p-4 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-6 py-4 bg-white text-black hover:bg-white/90 rounded-md w-full disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? 'Sending...' : 'Hit Reply'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
