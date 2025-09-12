import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from './made-with-dyad';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-12 border-t border-border/40">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent text-gradient-neon hover:opacity-80 transition-opacity duration-300 mb-4 inline-block">
            NeuraFlow
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Crafting cutting-edge web experiences that drive results.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-neon-blue-400 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-blue-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-blue-400 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Your email" className="bg-background border-border focus-visible:ring-neon-blue-500" />
            <Button type="submit" className="bg-neon-purple-600 hover:bg-neon-purple-700 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-8 border-t border-border/40 pt-8">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} NeuraFlow. All rights reserved.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;