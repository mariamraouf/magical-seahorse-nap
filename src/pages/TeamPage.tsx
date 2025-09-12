import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <section id="team-hero" className="relative py-20 text-center bg-gradient-to-br from-neon-purple-500 to-neon-blue-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Meet Our Brilliant Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            A passionate group of innovators, designers, and developers dedicated to bringing your vision to life.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-neon-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Join Our Team
            </Button>
          </Link>
        </div>
      </section>

      <section id="team-members" className="py-20 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Core Innovators</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Get to know the talented individuals who make NeuraFlow a leader in digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-muted rounded-lg shadow-lg overflow-hidden group hover:shadow-neon-blue-500/30 transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-neon-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue-600 transition-colors"><Linkedin size={20} /></a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue-600 transition-colors"><Github size={20} /></a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue-600 transition-colors"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;