
import React, { useEffect, useState } from 'react';

const BackgroundEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orb following mouse */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-primary"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Fixed stars */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse-subtle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.5,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Accent circles */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl bg-accent"
        style={{
          top: '10%',
          right: '5%',
          transform: `translateY(${scrollPosition * 0.1}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl bg-primary"
        style={{
          bottom: '5%',
          left: '10%',
          transform: `translateY(${-scrollPosition * 0.05}px)`,
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
    </div>
  );
};

export default BackgroundEffects;
