
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', id: 'about' },
    { label: 'Works', id: 'projects' },
    { label: 'Blog', id: 'blog' },
  ];
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/rama-krishna-81bbb527b", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:ramakrishna.smilodon@gamail.com", label: "Email" }
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-4 bg-background/90 backdrop-blur-sm shadow-sm" : "py-6 bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-4xl font-bold">
          <span className="text-primary">R</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-sm tracking-wide"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="side-links text-foreground/80 hover:text-primary"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 z-40 flex flex-col">
          <div className="container-custom py-6 flex flex-col h-full">
            <nav className="flex flex-col space-y-6 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-xl py-2"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-auto pb-8 flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="side-links"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
