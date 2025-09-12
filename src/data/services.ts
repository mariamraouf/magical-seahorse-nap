export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string; // Using string for lucide-react icon name
  details: string[];
}

export const services: Service[] = [
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    tagline: 'Collaborate with expert insight',
    description: 'Guiding your brand\'s vision from concept to execution with strategic creative leadership.',
    icon: 'Lightbulb', // Example icon name from lucide-react
    details: [
      'Concept creation: Developing innovative and compelling ideas that resonate with your target audience.',
      'Creative strategy: Crafting a roadmap for your brand\'s visual and narrative identity.',
      'Brand & comms strategy: Defining your brand\'s voice and communication channels for maximum impact.',
      'Project management: Overseeing creative projects to ensure timely and high-quality delivery.'
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Compelling and strategic creative',
    description: 'Transforming ideas into stunning visuals that capture attention and communicate effectively.',
    icon: 'Palette', // Example icon name
    details: [
      'Graphic Design: Creating visually appealing layouts, logos, and marketing materials.',
      'Infographics: Designing clear and engaging visual representations of complex data.',
      'Illustration: Producing custom artwork to enhance your brand\'s unique storytelling.',
      'Data visualisation: Turning raw data into insightful and easy-to-understand graphics.'
    ],
  },
  {
    id: 'digital-connection',
    title: 'Digital Connection',
    tagline: 'Engaging user experience',
    description: 'Building seamless digital experiences that connect with your audience and drive engagement.',
    icon: 'Globe', // Example icon name
    details: [
      'Websites: Developing responsive, high-performance websites tailored to your business needs.',
      'Search / SEO: Optimizing your online presence to rank higher and attract more organic traffic.',
      'Sales Funnels: Designing effective conversion paths to guide users from interest to action.',
      'EDM campaigns: Crafting engaging email marketing campaigns to nurture leads and retain customers.'
    ],
  },
];