
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className
}) => {
  const alignClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  }[align];

  return (
    <div className={cn('mb-12', alignClass, className)}>
      <div className="relative inline-block">
        <span className="inline-block text-xs font-medium tracking-widest text-primary uppercase mb-2">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient leading-tight">
        {title}
      </h2>
      <div className="h-1 w-12 bg-primary/60 rounded mt-4 mx-auto"></div>
    </div>
  );
};

export default SectionHeading;
