import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { 
  SiPython, 
  SiPandas,
  SiMysql,
  SiReact, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiFlask
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { FaBrain, FaChartLine, FaDatabase } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6 }
    })
  };

  const skills = [
    { icon: <SiPython className="text-xl" />, name: "Python", color: "bg-blue-100 text-blue-600" },
    { icon: <FaBrain className="text-xl" />, name: "ML", color: "bg-orange-100 text-orange-600" },
    { icon: <BsRobot className="text-xl" />, name: "DL", color: "bg-red-100 text-red-600" },
    { icon: <SiPandas className="text-xl" />, name: "EDA", color: "bg-emerald-100 text-emerald-600" },
    { icon: <BiData className="text-xl" />, name: "PowerBI", color: "bg-yellow-100 text-yellow-600" },
    { icon: <FaChartLine className="text-xl" />, name: "OCR", color: "bg-purple-100 text-purple-600" },
    { icon: <FaDatabase className="text-xl" />, name: "Database", color: "bg-indigo-100 text-indigo-600" },
    { icon: <SiMysql className="text-xl" />, name: "MySQL", color: "bg-blue-50 text-blue-500" },
    { icon: <SiReact className="text-xl" />, name: "React", color: "bg-cyan-100 text-cyan-600" },
    { icon: <SiTypescript className="text-xl" />, name: "TSX", color: "bg-blue-100 text-blue-700" },
    { icon: <SiHtml5 className="text-xl" />, name: "HTML", color: "bg-orange-100 text-orange-600" },
    { icon: <SiCss3 className="text-xl" />, name: "CSS", color: "bg-blue-100 text-blue-600" },
    { icon: <SiFlask className="text-xl" />, name: "Flask", color: "bg-gray-100 text-gray-600" },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-background to-background/95">
      <div className="section-container">
        {/* Horizontal Scrolling Circular Skills */}
        <motion.div 
          className="mb-8 overflow-hidden" // Changed mb-16 to mb-8 to accommodate the new line
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-6 py-4"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center justify-center min-w-[80px]`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`w-14 h-14 rounded-full ${skill.color} flex items-center justify-center`}>
                    {skill.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mt-2">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Added decorative line below skills */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-6 mb-6"></div> <br /><br />
        </motion.div>

        {/* Rest of your existing content remains exactly the same */}
        <SectionHeading 
          title="About Me" 
          subtitle="My Story" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Bio */}
          <div>
            <motion.div 
              className="space-y-6 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.p variants={fadeInUpVariants} custom={0} className="text-lg">
                I'm a <span className="text-primary font-semibold">Data Science and Machine Learning Enthusiast </span>  with a passion for transforming complex problems into intelligent solutions. My work revolves around predictive modeling, deep learning architectures, and data-driven decision making, balanced with practical full-stack implementation skills.
              </motion.p>
              
              <motion.p variants={fadeInUpVariants} custom={1}>
              I actively engage in technical competitions and hackathons, where I refine my ability to develop innovative AI solutions under constraints. This experimental approach complements my academic rigor in computer engineering and data science.
              </motion.p>
              
              <motion.p variants={fadeInUpVariants} custom={2}>
              Driven by continuous learning, I thrive at the intersection of theory and application—whether optimizing models, analyzing datasets, or collaborating on cutting-edge projects.
              </motion.p>
              
              <motion.div variants={fadeInUpVariants} custom={3} className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block glass-morphism px-6 py-3 rounded-lg border border-primary/30 text-white font-medium hover:bg-primary/10 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let's Connect
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column - Profile details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-morphism rounded-xl p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Profile Overview</h3>
            
            <div className="space-y-4">
              {[
                { icon: Briefcase, label: "Current Role", value: "Data Scientist" },
                { icon: GraduationCap, label: "Education", value: "Computer Science, B.Tech" },
                { icon: Calendar, label: "Experience", value: "SDE Intern at BTD Service India " }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="glass-morphism p-2 rounded-lg mr-4">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Core expertise */}
            <div>
              <h4 className="text-sm uppercase text-gray-400 mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "Machine Learning", "Deep Learning", "Flask", 
                  "OCR", "PowerBI", "ReactJS" , "MySQL" 
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-block glass-morphism px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;