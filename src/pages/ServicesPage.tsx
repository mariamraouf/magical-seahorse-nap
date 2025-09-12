import React from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import * as LucideIcons from 'lucide-react';

const faqs = [
  {
    question: "What is Creative Direction?",
    answer: "Creative Direction involves guiding your brand's vision from concept to execution, ensuring a cohesive and impactful message across all platforms. It includes strategy, concept creation, and project management."
  },
  {
    question: "How can Graphic Design help my business?",
    answer: "Compelling graphic design transforms your ideas into stunning visuals that capture attention. This includes logos, marketing materials, infographics, and data visualization to communicate effectively."
  },
  {
    question: "What does Digital Connection entail?",
    answer: "Digital Connection focuses on building seamless online experiences. This covers responsive website development, SEO optimization, sales funnel design, and engaging email marketing campaigns to connect with your audience."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity and scope. After an initial consultation and discovery phase, we provide a detailed timeline tailored to your specific project requirements."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital assets remain up-to-date, secure, and performing optimally after launch."
  },
];

const ServicesPage = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });

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

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const IconComponent = (LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle) as React.ElementType;
        const isEven = index % 2 === 0;
        return (
          <section key={service.id} className={cn("py-20", isEven ? "bg-background" : "bg-muted")}>
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className={cn("flex justify-center", !isEven && "md:order-2")}>
                <div className="w-full max-w-md h-64 bg-gradient-to-br from-neon-blue-400 to-neon-purple-400 rounded-lg shadow-xl flex items-center justify-center text-white text-2xl font-bold">
                  <IconComponent size={64} strokeWidth={1.5} className="text-white opacity-70" />
                </div>
              </div>
              <div className={cn("text-center", isEven ? "md:text-left" : "md:text-right")}>
                <h3 className="text-4xl font-bold mb-4 text-primary flex items-center justify-center md:justify-start gap-3">
                  <IconComponent size={32} strokeWidth={2} className="text-neon-blue-500" />
                  {service.title}
                </h3>
                <p className="text-lg mb-4 text-muted-foreground">{service.description}</p>
                <h4 className="text-xl font-semibold mb-3 text-neon-purple-400">Key Aspects:</h4>
                <ul className={cn("list-disc list-inside space-y-2 text-muted-foreground", isEven ? "md:pl-4" : "md:pr-4 md:text-right")}>
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-neon-blue-500">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="mt-8 bg-neon-purple-600 hover:bg-neon-purple-700 text-white px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    Get a Quote for {service.title}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section id="process" ref={processRef} className="py-20 bg-background text-foreground">
        <div className={cn("container mx-auto px-4 text-center", processInView ? "animate-fade-in-up" : "opacity-0")}>
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

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-20 bg-card text-card-foreground">
        <div className={cn("container mx-auto px-4 text-center", faqInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-muted-foreground">
            Find answers to common questions about our services and how we work.
          </p>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-neon-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact-cta" className="py-20 bg-gradient-to-br from-neon-blue-500 to-neon-purple-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Ready to Start Your Project?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let's discuss your vision and how our services can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-blue-600 hover:bg-gray-100 px-10 py-6 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Today!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;