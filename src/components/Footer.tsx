import React from 'react';
import { MadeWithDyad } from './made-with-dyad';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} NeuraFlow. All rights reserved.</p>
        {/* Social media and newsletter signup will go here later */}
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;