import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Value } from '@/data/values';
import * as LucideIcons from 'lucide-react';

interface ValueCardProps {
  value: Value;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  const IconComponent = (LucideIcons[value.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle) as React.ElementType;

  return (
    <Card className="relative group overflow-hidden bg-card/80 backdrop-blur-sm border-border/40 hover:border-neon-purple-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-neon-purple-500/30">
      <CardHeader className="flex flex-col items-center text-center p-6">
        <div className="mb-4 text-neon-purple-500 group-hover:text-neon-blue-500 transition-colors duration-300">
          <IconComponent size={48} strokeWidth={1.5} />
        </div>
        <CardTitle className="text-2xl font-bold mb-2 text-foreground group-hover:text-neon-purple-400 transition-colors duration-300">
          {value.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        <p>{value.description}</p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;