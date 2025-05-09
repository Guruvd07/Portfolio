
import React, { useState, useEffect } from 'react';
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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobile) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

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
          initial={{ y: isMobile ? 100 : 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: isMobile ? 100 : 100, opacity: 0 }}
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
                      "flex flex-col items-center font-medium transition-all duration-200",
                      isMobile ? "text-[8px]" : "text-xs",
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    )}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  >
                    <div className="relative">
                      <motion.div
                        className={cn(
                          "rounded-full relative",
                          isMobile ? "p-1" : "p-2"
                        )}
                        whileHover={{ scale: 1.15, y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <item.icon size={isMobile ? 14 : 20} className={isMobile ? "mb-0" : "mb-1"} />
                        {activeSection === item.href.substring(1) && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute -bottom-1 w-full h-0.5 bg-primary"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </div>
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
