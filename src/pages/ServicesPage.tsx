import React from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <section id="services-hero" className="relative py-20 text-center bg-gradient-to-br from-neon-purple-500 to-neon-blue-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Our Comprehensive Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            From concept to launch, we provide end-to-end digital solutions tailored to your unique business needs.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      <section id="our-offerings" ref={servicesRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", servicesInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">What We Do Best</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Explore our core services designed to elevate your brand, engage your audience, and drive measurable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Streamlined Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            We follow a clear, collaborative process to ensure every project is a success, from initial idea to final delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-lg border border-border/40 hover:border-neon-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-neon-blue-600 mb-3">1. Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your vision, goals, and target audience to lay a strong foundation.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg border border-border/40 hover:border-neon-purple-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-neon-purple-600 mb-3">2. Design & Develop</h3>
              <p className="text-muted-foreground">
                Crafting intuitive designs and building robust, scalable solutions with cutting-edge technology.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg border border-border/40 hover:border-neon-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-neon-blue-600 mb-3">3. Launch & Optimize</h3>
              <p className="text-muted-foreground">
                Deploying your project and continuously optimizing for performance and user engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;