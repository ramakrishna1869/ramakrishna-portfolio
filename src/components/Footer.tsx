
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-primary">R</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Rama Krishna Mummidi. All rights reserved.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rama-krishna-81bbb527b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/80 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:ramakrishna.smilodon@gamail.com" 
              className="text-foreground/80 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
