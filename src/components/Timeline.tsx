
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  isLast?: boolean;
  isEven?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  tags = [],
  link,
  isLast = false,
  isEven = false,
}) => {
  return (
    <div className={cn("relative")}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-5 md:left-1/2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 to-primary/10"></div>
      )}
      
      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-8 items-start md:even:flex-row-reverse">
        {/* Dot */}
        <div className="absolute left-5 md:left-1/2 transform -translate-x-2.5 md:-translate-x-2.5 mt-1.5">
          <div className="w-5 h-5 rounded-full bg-primary"></div>
        </div>
        
        {/* Date */}
        <div className={cn(
          "ml-16 md:ml-0 md:w-1/2 text-right md:pr-10",
          isEven && "md:text-left md:pl-10 md:pr-0"
        )}>
          <span className="glass-morphism inline-block px-3 py-1 rounded-full text-sm font-medium text-primary">
            {date}
          </span>
        </div>
        
        {/* Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "ml-16 md:ml-0 md:w-1/2 md:pl-10 pb-10",
            isEven && "md:pr-10 md:pl-0"
          )}
        >
          <div className="glass-morphism p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="glass-morphism px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Link */}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-primary text-sm hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: {
    date: string;
    title: string;
    description: string;
    tags?: string[];
    link?: string;
  }[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative py-10">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
          isEven={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Timeline;
