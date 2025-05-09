
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Hackathons from '@/components/Hackathons';
import Events from '@/components/Events';
import Affiliations from '@/components/Affiliations';
import Contact from '@/components/Contact';
import BackgroundEffects from '@/components/BackgroundEffects';
import VirtualAssistant from '@/components/VirtualAssistant';

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Apply smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Show navbar after initial hero section view
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 2000);

    // Add scroll listener to show navbar after scrolling past hero
    const handleScroll = () => {
      if (window.scrollY > 300 && !showNavbar) {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [showNavbar]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <VirtualAssistant />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="hackathons">
          <Hackathons />
        </section>
        
        <section id="events">
          <Events />
        </section>
        
        <section id="affiliations">
          <Affiliations />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        {/* Footer with updated theme */}
        <footer className="py-6 border-t border-blue-500/10">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Guru Dahiphale. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
      
      {showNavbar && <Navbar />}
    </div>
  );
};

export default Index;
