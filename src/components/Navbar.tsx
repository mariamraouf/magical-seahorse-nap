import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Team', href: '/team' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent text-gradient-neon hover:opacity-80 transition-opacity duration-300">
          NeuraFlow
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  "text-foreground hover:text-neon-purple-600 transition-colors duration-300 font-medium",
                  location.pathname === item.href && "text-neon-purple-600 font-semibold"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu toggle will go here later */}
      </div>
    </nav>
  );
};

export default Navbar;