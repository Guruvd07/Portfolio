
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  tiltAmount?: number;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  glowOnHover = true,
  tiltAmount = 10,
  onClick,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering || tiltAmount === 0) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={cn(
        'perspective relative rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10',
        { 'transition-all duration-300 hover:shadow-lg': glowOnHover },
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: tiltAmount === 0 ? 'none' : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovering ? 'none' : 'transform 0.5s ease-out',
      }}
    >
      {glowOnHover && isHovering && tiltAmount > 0 && (
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${rotation.y * 10 + 50}% ${rotation.x * 10 + 50}%, rgba(var(--primary-rgb), 0.4), transparent 50%)`,
          }}
        />
      )}
      <div className="preserve-3d backface-hidden p-6">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
