import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-neon-blue-600 to-neon-purple-600 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue-600 to-neon-purple-600 animate-gradient-shift opacity-75"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Innovate. Create. Dominate.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            NeuraFlow is a premium digital agency crafting cutting-edge web experiences that drive results.
          </p>
          <Link to="/contact">
            <Button
              className="bg-white text-neon-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-8 z-10">
          <Button
            variant="ghost"
            className="text-white animate-bounce"
            onClick={() => scrollToSection('about-preview')}
          >
            <ArrowDown size={32} />
          </Button>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about-preview" ref={aboutRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", aboutInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Our mission is to empower businesses with exceptional digital solutions. We combine creativity, technology, and strategic thinking to deliver unparalleled web experiences.
          </p>
          <Link to="/about">
            <Button variant="outline" className="border-neon-purple-600 text-neon-purple-600 hover:bg-neon-purple-600 hover:text-white transition-all duration-300">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section Preview */}
      <section id="services-preview" ref={servicesRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", servicesInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            From stunning web design to powerful digital marketing, we offer a full suite of services to elevate your brand.
          </p>
          <Link to="/services">
            <Button variant="outline" className="border-neon-blue-600 text-neon-blue-600 hover:bg-neon-blue-600 hover:text-white transition-all duration-300">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Section Preview */}
      <section id="portfolio-preview" ref={portfolioRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", portfolioInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Portfolio</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Explore our diverse range of projects that showcase our expertise and commitment to excellence.
          </p>
          <Link to="/portfolio">
            <Button variant="outline" className="border-neon-purple-600 text-neon-purple-600 hover:bg-neon-purple-600 hover:text-white transition-all duration-300">
              View Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Team Section Preview */}
      <section id="team-preview" ref={teamRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", teamInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Meet Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            A passionate group of innovators, designers, and developers dedicated to bringing your vision to life.
          </p>
          <Link to="/team">
            <Button variant="outline" className="border-neon-blue-600 text-neon-blue-600 hover:bg-neon-blue-600 hover:text-white transition-all duration-300">
              Meet the Experts
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section Preview */}
      <section id="testimonials-preview" ref={testimonialsRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", testimonialsInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Hear directly from our satisfied clients about their experience working with NeuraFlow.
          </p>
          <Link to="/testimonials">
            <Button variant="outline" className="border-neon-purple-600 text-neon-purple-600 hover:bg-neon-purple-600 hover:text-white transition-all duration-300">
              Read Testimonials
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section id="contact-preview" ref={contactRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", contactInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Get In Touch</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Ready to start your next project? Contact us today!
          </p>
          <Link to="/contact">
            <Button className="bg-neon-blue-600 hover:bg-neon-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;