import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
// import Assistant from "../../public/lovable-uploads/assistant.png";

const VirtualAssistant: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [message, setMessage] = useState('');
  const isMobile = useIsMobile();

  const sectionMessages: Record<string, string> = {
    home: "Welcome! I'm Guru Dahiphale, a tech enthusiast and developer.",
    about: "Learn more about my background, skills, and interests.",
    skills: "Explore my technical skills and areas of expertise.",
    projects: "Check out some of my recent projects and work.",
    hackathons: "Discover the hackathons I've participated in and their outcomes.",
    events: "See the tech events and conferences I've been involved with.",
    contact: "Let's connect! Feel free to reach out to me.",
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionMessages);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(section);
            setMessage(sectionMessages[section]);
            setVisible(true);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger once on component mount
    setTimeout(() => {
      handleScroll();
      setVisible(true);
    }, 1000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isMobile) {
    return null; // Don't show on mobile devices
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 max-w-[220px] pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Assistant Image */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
            >
              {/* <img src={Assistant} alt="Virtual Assistant" className="h-32 w-auto" /> */}
            </motion.div>

            {/* Message Box */}
            <motion.div
              className="mt-5 glass-morphism p-4 rounded-lg rounded-bl-none shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-white mb-1">{message}</p>
              <div className="w-3 h-3 bg-primary absolute -bottom-1.5 left-4 rotate-45"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VirtualAssistant;
