import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simplified parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll('.parallax');
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.05');

        const x = (mouseX - centerX) * speed;
        const y = (mouseY - centerY) * speed;

        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0"
    >

      {/* =====================================================
          BACKGROUND
          ===================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">

        {/* ================= MOBILE BACKGROUND ================= */}
        <div className="absolute inset-0 md:hidden overflow-hidden">

          <motion.img
            src="/lovable-uploads/IMG_5068.JPG"
            alt="Background"
            initial={{ x: '0%' }}
            animate={{
              x: ['0%', '-68%', '0%'],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="absolute h-full w-auto max-w-none"
          />

        </div>

        {/* ================= DESKTOP BACKGROUND ================= */}
        <img
          src="/lovable-uploads/IMG_5068.JPG"
          alt="Background"
          className="hidden md:block w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

      </div>

      {/* =====================================================
          BACKGROUND GLOW EFFECTS
          ===================================================== */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 right-0 w-2/3 h-2/3 opacity-20 blur-3xl bg-gradient-to-tr from-blue-600 to-indigo-900"></div>

        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 opacity-10 blur-3xl bg-gradient-to-br from-blue-500 to-indigo-800"></div>

      </div>

      {/* =====================================================
          GRID
          ===================================================== */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(100,149,237,0.15)_1px,transparent_1px),linear-gradient(to_right,rgba(100,149,237,0.15)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div className="container relative z-10 px-6 py-0 md:py-2 mx-auto text-center mt-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block glass-morphism px-4 py-2 rounded-full mb-3"
        >
          <span className="text-sm font-medium">
            AI & Data Engineer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient mb-4 max-w-4xl mx-auto"
        >
          Guru Dahiphale
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-3 text-xl md:text-2xl text-blue-300 font-medium max-w-3xl mx-auto"
        >
          Data Engineer | AI Engineer | ML Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-md md:text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Transforming complex data into intelligent, scalable AI solutions
        </motion.p>

        {/* =====================================================
            PROFILE IMAGE
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="parallax relative w-48 h-48 md:w-60 md:h-60 mx-auto mb-10"
          data-speed="0.02"
        >

          <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-xl"></div>

          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-blue-400/20">

            <div className="w-full h-full rounded-full overflow-hidden">

              <img
                src="/lovable-uploads/guru.jpg"
                alt="Guru Dahiphale"
                className="w-full h-full object-cover brightness-95 contrast-105"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-indigo-900/10 mix-blend-overlay"></div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            SOCIAL LINKS
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-24"
        >

          {/* GitHub */}
          <a
            href="https://github.com/Guruvd07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="glass-morphism p-3 rounded-full hover:bg-blue-500/10 transition-colors"
          >
            <Github size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/guru-dahiphale-02862225b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass-morphism p-3 rounded-full hover:bg-blue-500/10 transition-colors"
          >
            <Linkedin size={20} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/guruvd_07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="glass-morphism p-3 rounded-full hover:bg-blue-500/10 transition-colors"
          >
            <Instagram size={20} />
          </a>

        </motion.div>

        {/* =====================================================
            SCROLL DOWN
            ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >

          <a
            href="#about"
            className="flex flex-col items-center text-sm text-gray-400 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();

              document
                .getElementById('about')
                ?.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
          >

            <span className="mb-2">
              Scroll Down
            </span>

            <ArrowDown
              className="animate-bounce"
              size={18}
            />

          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;