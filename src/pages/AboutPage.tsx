import React from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import ValueCard from '@/components/ValueCard';
import { values } from '@/data/values';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <section id="about-hero" className="relative py-20 text-center bg-gradient-to-br from-neon-blue-500 to-neon-purple-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About NeuraFlow</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            We are a passionate team dedicated to crafting exceptional digital experiences that drive innovation and deliver measurable results.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <section id="our-mission" className="py-20 bg-card text-card-foreground" ref={missionRef}>
        <div className={cn("container mx-auto px-4 text-center", missionInView ? "animate-fade-in-up" : "opacity-0")}>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission & Vision</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Our mission is to empower businesses with exceptional digital solutions. We combine creativity, technology, and strategic thinking to deliver unparalleled web experiences. We envision a future where every brand has a powerful and engaging online presence that truly connects with its audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>
      </section>

      <section id="our-story" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Journey</h2>
            <p className="text-lg mb-4">
              Founded in [Year], NeuraFlow began with a simple idea: to bridge the gap between innovative design and robust technology. We saw a need for digital solutions that weren't just visually appealing, but also highly functional and strategically aligned with business goals.
            </p>
            <p className="text-lg mb-4">
              Over the years, we've grown into a full-service agency, constantly evolving our skills and embracing new challenges. Our commitment to excellence and client success has remained the driving force behind every project.
            </p>
            <p className="text-lg">
              We pride ourselves on building lasting relationships, transforming ideas into digital realities, and helping our clients thrive in an ever-changing online landscape.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Placeholder for an image or illustration */}
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-neon-blue-400 to-neon-purple-400 rounded-lg shadow-xl flex items-center justify-center text-white text-2xl font-bold">
              Our Story Visual
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;