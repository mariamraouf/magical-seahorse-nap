export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const values: Value[] = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We constantly push boundaries, embracing new technologies and creative approaches to deliver groundbreaking solutions.',
    icon: 'Lightbulb',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'Our commitment to quality ensures every project is executed with meticulous attention to detail and the highest standards.',
    icon: 'Award',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, working closely with clients to achieve shared goals and foster strong partnerships.',
    icon: 'Users',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Honesty and transparency are at the core of everything we do, building trust and long-lasting relationships.',
    icon: 'ShieldCheck',
  },
];