import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Service } from '@/data/services';
import * as LucideIcons from 'lucide-react';

interface ServiceModalProps {
  service: Service;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service }) => {
  const IconComponent = (LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle) as React.ElementType;

  return (
    <DialogContent className="sm:max-w-[425px] md:max-w-2xl bg-card/90 backdrop-blur-lg border-border/40 text-foreground">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-3 text-3xl font-bold text-neon-blue-400">
          <IconComponent size={32} strokeWidth={2} />
          {service.title}
        </DialogTitle>
        <DialogDescription className="text-lg text-muted-foreground mt-2">
          {service.tagline}
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p className="text-base mb-4">{service.description}</p>
        <h4 className="text-xl font-semibold mb-3 text-neon-purple-400">What we offer:</h4>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-neon-blue-500">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </DialogContent>
  );
};

export default ServiceModal;