export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string; // Path to image or placeholder
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'alice-johnson',
    name: 'Alice Johnson',
    role: 'Lead Designer',
    image: '/placeholder.svg',
    bio: 'Alice is a visionary designer with a passion for creating intuitive and beautiful user experiences.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 'bob-williams',
    name: 'Bob Williams',
    role: 'Senior Developer',
    image: '/placeholder.svg',
    bio: 'Bob is a full-stack wizard, bringing complex ideas to life with clean and efficient code.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 'charlie-brown',
    name: 'Charlie Brown',
    role: 'Marketing Strategist',
    image: '/placeholder.svg',
    bio: 'Charlie excels at crafting compelling narratives and driving digital growth for our clients.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 'diana-prince',
    name: 'Diana Prince',
    role: 'Project Manager',
    image: '/placeholder.svg',
    bio: 'Diana ensures every project runs smoothly, on time, and within budget, with a keen eye for detail.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
];