import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Quote } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import ValueCard from '@/components/ValueCard';
import { values } from '@/data/values';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import * as LucideIcons from 'lucide-react'; // Corrected import statement
import { teamMembers } from '@/data/team';
import { testimonials } from '@/data/testimonials';

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

  // Take a subset of services for the home page preview
  const featuredServices = services.slice(0, 3);
  const featuredTeamMembers = teamMembers.slice(0, 2);
  const featuredTestimonial = testimonials[0]; // Just one for a prominent display

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-neon-blue-200 to-neon-purple-200">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue-600 to-neon-purple-600 animate-gradient-shift opacity-25"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight drop-shadow-lg">
            Innovate. Create. Dominate.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            NeuraFlow is a premium digital agency crafting cutting-edge web experiences that drive results.
          </p>
          <Link to="/contact">
            <Button
              className="bg-neon-blue-600 text-white hover:bg-neon-blue-700 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today!
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-8 z-10">
          <Button
            variant="ghost"
            className="text-foreground animate-bounce"
            onClick={() => scrollToSection('about-preview')}
          >
            <ArrowDown size={32} />
          </Button>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about-preview" ref={aboutRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center", aboutInView ? "animate-fade-in-up" : "opacity-0")}>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary">Who We Are</h2>
            <p className="text-lg max-w-md mx-auto md:mx-0 mb-8 text-muted-foreground">
              NeuraFlow is a collective of creative minds and technical experts dedicated to building digital experiences that not only look stunning but also perform exceptionally. We believe in innovation, collaboration, and delivering measurable impact.
            </p>
            <Link to="/about">
              <Button className="bg-neon-purple-600 hover:bg-neon-purple-700 text-white px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                Discover Our Story
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-neon-blue-400 to-neon-purple-400 rounded-lg shadow-xl flex items-center justify-center text-white text-2xl font-bold">
              Creative Vision
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section id="services-preview" ref={servicesRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", servicesInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Core Services</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-muted-foreground">
            We offer a comprehensive suite of digital solutions designed to elevate your brand and achieve your business objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <Link to="/services">
            <Button variant="outline" className="mt-12 border-neon-blue-600 text-neon-blue-600 hover:bg-neon-blue-600 hover:text-white px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Explore All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Section Preview */}
      <section id="portfolio-preview" ref={portfolioRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", portfolioInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Featured Projects</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-muted-foreground">
            A glimpse into our recent work that showcases our passion for design and technical excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-muted rounded-lg shadow-lg overflow-hidden group hover:shadow-neon-purple-500/30 transition-all duration-300">
                <img src="/placeholder.svg" alt={`Project ${item}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Project {item}</h3>
                  <p className="text-muted-foreground text-sm">Web Design & Development</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="mt-12 border-neon-purple-600 text-neon-purple-600 hover:bg-neon-purple-600 hover:text-white px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              View Our Full Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* Team Section Preview */}
      <section id="team-preview" ref={teamRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", teamInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Meet Our Innovators</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-muted-foreground">
            Our diverse team of experts is the driving force behind every successful project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredTeamMembers.map((member) => {
              const IconComponent = (LucideIcons[member.social.linkedin ? 'Linkedin' : 'HelpCircle'] || LucideIcons.HelpCircle) as React.ElementType;
              return (
                <div key={member.id} className="bg-card p-6 rounded-lg shadow-lg border border-border/40 flex flex-col items-center text-center group hover:shadow-neon-blue-500/30 transition-all duration-300">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-neon-purple-500" />
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-neon-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue-600 transition-colors">
                      <IconComponent size={24} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
          <Link to="/team">
            <Button variant="outline" className="mt-12 border-neon-blue-600 text-neon-blue-600 hover:bg-neon-blue-600 hover:text-white px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Meet the Entire Team
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section Preview */}
      <section id="testimonials-preview" ref={testimonialsRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", testimonialsInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-muted-foreground">
            Hear directly from our satisfied partners about their experience working with NeuraFlow.
          </p>
          {featuredTestimonial && (
            <div className="bg-muted p-8 rounded-lg shadow-lg border border-border/40 flex flex-col items-center text-center max-w-2xl mx-auto group hover:shadow-neon-purple-500/30 transition-all duration-300">
              <Quote size={48} className="text-neon-purple-600 mb-4 group-hover:text-neon-blue-600 transition-colors" />
              <p className="text-xl italic text-foreground mb-6">"{featuredTestimonial.quote}"</p>
              <img src={featuredTestimonial.avatar} alt={featuredTestimonial.author} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-neon-blue-500" />
              <h3 className="text-xl font-semibold text-foreground">{featuredTestimonial.author}</h3>
              <p className="text-sm text-muted-foreground">{featuredTestimonial.title}</p>
            </div>
          )}
          <Link to="/testimonials">
            <Button variant="outline" className="mt-12 border-neon-purple-600 text-neon-purple-600 hover:bg-neon-purple-600 hover:text-white px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              Read All Success Stories
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section id="contact-preview" ref={contactRef} className="py-20 bg-gradient-to-br from-neon-blue-500 to-neon-purple-500 text-white">
        <div className={cn("container mx-auto px-4 text-center", contactInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let's collaborate and build something extraordinary together. Reach out today for a free consultation!
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-blue-600 hover:bg-gray-100 px-10 py-6 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;