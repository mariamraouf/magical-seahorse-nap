import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <section id="portfolio-hero" className="relative py-20 text-center bg-gradient-to-br from-neon-blue-500 to-neon-purple-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Our Creative Work</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Explore a selection of our projects that showcase our passion for design and technical excellence.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </section>

      <section id="portfolio-gallery" className="py-20 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Featured Projects</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            From sleek websites to engaging digital campaigns, see how we bring ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for portfolio items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-muted rounded-lg shadow-lg overflow-hidden group hover:shadow-neon-purple-500/30 transition-all duration-300">
                <img src="/placeholder.svg" alt={`Project ${item}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Project Title {item}</h3>
                  <p className="text-muted-foreground text-sm">Category | Client Name</p>
                  <Button variant="link" className="mt-4 text-neon-purple-600 hover:text-neon-blue-600">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;