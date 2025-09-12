import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Service } from '@/data/services';
import ServiceModal from './ServiceModal';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = (LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle) as React.ElementType;

  return (
    <Dialog>
      <Card className="relative group overflow-hidden bg-card/80 backdrop-blur-sm border-border/40 hover:border-neon-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-neon-blue-500/30">
        <CardHeader className="flex flex-col items-center text-center p-6">
          <div className="mb-4 text-neon-blue-500 group-hover:text-neon-purple-500 transition-colors duration-300">
            <IconComponent size={48} strokeWidth={1.5} />
          </div>
          <CardTitle className="text-2xl font-bold mb-2 text-foreground group-hover:text-neon-blue-400 transition-colors duration-300">
            {service.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {service.tagline}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex justify-center">
          <DialogTrigger asChild>
            <Button variant="outline" className="border-neon-purple-500 text-neon-purple-500 hover:bg-neon-purple-500 hover:text-white transition-all duration-300">
              Learn More
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <ServiceModal service={service} />
    </Dialog>
  );
};

export default ServiceCard;