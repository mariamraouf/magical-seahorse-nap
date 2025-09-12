import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import ValueCard from '@/components/ValueCard'; // Import ValueCard
import { values } from '@/data/values'; // Import values data

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
          <Button
            className="bg-white text-neon-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </div>
        <div className="absolute bottom-8 z-10">
          <Button
            variant="ghost"
            className="text-white animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown size={32} />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", aboutInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Our mission is to empower businesses with exceptional digital solutions. We combine creativity, technology, and strategic thinking to deliver unparalleled web experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", servicesInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            From stunning web design to powerful digital marketing, we offer a full suite of services to elevate your brand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", portfolioInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Portfolio</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Explore our diverse range of projects that showcase our expertise and commitment to excellence.
          </p>
          {/* Interactive portfolio gallery with filtering and lightbox will go here */}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", teamInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Meet Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            A passionate group of innovators, designers, and developers dedicated to bringing your vision to life.
          </p>
          {/* Team member cards with flip animations will go here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", testimonialsInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Hear directly from our satisfied clients about their experience working with NeuraFlow.
          </p>
          {/* Testimonials carousel will go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", contactInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Get In Touch</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Ready to start your next project? Contact us today!
          </p>
          {/* Contact form, office locations, embedded map simulation will go here */}
        </div>
      </section>
    </div>
  );
};

export default Home;