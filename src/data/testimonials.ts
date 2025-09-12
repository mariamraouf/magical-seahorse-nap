export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatar: string; // Path to avatar image or placeholder
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "NeuraFlow transformed our online presence. Their innovative approach and attention to detail were exceptional!",
    author: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatar: "/placeholder.svg",
  },
  {
    id: 'testimonial-2',
    quote: "Working with NeuraFlow was a game-changer. They delivered a stunning website that exceeded all our expectations.",
    author: "John Smith",
    title: "Founder, Creative Brands",
    avatar: "/placeholder.svg",
  },
  {
    id: 'testimonial-3',
    quote: "The team at NeuraFlow is incredibly talented and professional. Our new digital strategy has seen amazing results.",
    author: "Emily White",
    title: "Marketing Director, Global Corp",
    avatar: "/placeholder.svg",
  },
];