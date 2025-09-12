import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent text-gradient-neon hover:opacity-80 transition-opacity duration-300">
          NeuraFlow
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className="text-foreground hover:text-neon-purple-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu toggle will go here later */}
      </div>
    </nav>
  );
};

export default Navbar;