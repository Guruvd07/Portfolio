import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Home, 
  User, 
  Code2, 
  Award, 
  Calendar, 
  MessageSquare,
  Layers
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Layers, label: 'Skills', href: '#skills' },
  { icon: Code2, label: 'Projects', href: '#projects' },
  { icon: Award, label: 'Hackathons', href: '#hackathons' },
  { icon: Calendar, label: 'Events', href: '#events' },
  { icon: MessageSquare, label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const isMobile = useIsMobile();
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Navbar shows on any scroll (up or down) and then auto-hides
  // after the user has stopped scrolling for 3 seconds. Any new
  // scroll event cancels the pending hide and shows it again.
  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);

      const sections = navItems.map(item => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Start the same 3s idle countdown immediately on mount, so
    // the nav also hides if the user never scrolls at all.
    idleTimerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  // Expand navbar on hover
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  
  // Handle smooth scrolling to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed z-50 flex justify-center pointer-events-none w-full",
            "bottom-0 left-0 right-0"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            className={cn(
              "glass-morphism py-2 px-3 border-t border-t-white/10 pointer-events-auto",
              isMobile && "border-t border-t-white/10 mb-1"
            )}
            initial={{ 
              borderRadius: "24px 24px 0 0", 
              width: isMobile ? "92%" : "80%" 
            }}
            animate={{ 
              borderRadius: "24px 24px 0 0", 
              width: isMobile ? "92%" : (isExpanded ? "90%" : "80%"),
              y: isExpanded && !isMobile ? -10 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex justify-around max-w-2xl mx-auto">
              {navItems.map((item) => (
                <motion.li 
                  key={item.label}
                  initial={{ y: 0 }}
                  animate={{ y: isExpanded && activeSection === item.href.substring(1) && !isMobile ? -8 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={isMobile ? "text-[9px]" : ""}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "relative flex flex-col items-center font-medium transition-all duration-200 pb-2",
                      isMobile ? "text-[8px]" : "text-xs",
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    )}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  >
                    <motion.div
                      className={cn(
                        "rounded-full",
                        isMobile ? "p-1" : "p-2"
                      )}
                      whileHover={{ scale: 1.15, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <item.icon size={isMobile ? 14 : 20} className={isMobile ? "mb-0" : "mb-1"} />
                    </motion.div>
                    <span>{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
      </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;