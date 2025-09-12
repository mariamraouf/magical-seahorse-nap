import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "NeuraFlow transformed our online presence. Their innovative approach and attention to detail were exceptional!",
    author: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    quote: "Working with NeuraFlow was a game-changer. They delivered a stunning website that exceeded all our expectations.",
    author: "John Smith",
    title: "Founder, Creative Brands",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    quote: "The team at NeuraFlow is incredibly talented and professional. Our new digital strategy has seen amazing results.",
    author: "Emily White",
    title: "Marketing Director, Global Corp",
    avatar: "/placeholder.svg",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <section id="testimonials-hero" className="relative py-20 text-center bg-gradient-to-br from-neon-blue-500 to-neon-purple-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">What Our Clients Say</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Hear directly from businesses and individuals who have experienced the NeuraFlow difference.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </Button>
          </Link>
        </div>
      </section>

      <section id="client-testimonials" className="py-20 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Voices of Our Satisfied Partners</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            We pride ourselves on building strong relationships and delivering results that speak for themselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-muted p-8 rounded-lg shadow-lg border border-border/40 flex flex-col items-center text-center group hover:shadow-neon-purple-500/30 transition-all duration-300">
                <Quote size={48} className="text-neon-purple-600 mb-4 group-hover:text-neon-blue-600 transition-colors" />
                <p className="text-lg italic text-foreground mb-6">"{testimonial.quote}"</p>
                <img src={testimonial.avatar} alt={testimonial.author} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-neon-blue-500" />
                <h3 className="text-xl font-semibold text-foreground">{testimonial.author}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;