
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Card } from './ui/card';
import pro01 from "../../public/lovable-uploads/Projects/Aaroya/Mediplus.jpg"
import pro02 from "../../public/lovable-uploads/Projects/Aaroya/Arogya02.png"
import pro03 from "../../public/lovable-uploads/Projects/Aaroya/Arogya03.png"
import pro04 from "../../public/lovable-uploads/Projects/AutoCadChatbot/chatbot01.png"
import pro05 from "../../public/lovable-uploads/Projects/CalciMitra/1.jpg"
import pro06 from "../../public/lovable-uploads/Projects/ClubRankers/21.png"
import pro07 from "../../public/lovable-uploads/Projects/ClubRankers/22.png"
import pro08 from "../../public/lovable-uploads/Projects/ClubRankers/23.png"
import pro09 from "../../public/lovable-uploads/Projects/ClubRankers/24.png"
import pro10 from "../../public/lovable-uploads/Projects/EmployeeManagemenSystem/employee management system dashboard.png"
import pro11 from "../../public/lovable-uploads/Projects/FrieghtTransportationSystem/Major Project 2024-25.png"
import pro12 from "../../public/lovable-uploads/Projects/PassowrdManagerVault/pas01.png"
import pro13 from "../../public/lovable-uploads/Projects/Aaroya/nirman.jpg"
import pro14 from "../../public/lovable-uploads/Projects/PassowrdManagerVault/pas03.png"
import pro15 from "../../public/lovable-uploads/Projects/ProjectTracker/PT01.png"
import pro16 from "../../public/lovable-uploads/Projects/ProjectTracker/PT02.png"
import pro17 from "../../public/lovable-uploads/Projects/ProjectTracker/PT03.png"
import pro18 from "../../public/lovable-uploads/Projects/ProjectTracker/PT04.png"
import pro19 from "../../public/lovable-uploads/Projects/ReportEase/ReportEase01.jpg"
import pro20 from "../../public/lovable-uploads/Projects/ReportEase/ReportEase02.jpg"
import pro21 from "../../public/lovable-uploads/Projects/ReportEase/ReportEase03.jpg"
import pro22 from "../../public/lovable-uploads/Projects/ReportEase/ReportEase04.jpg"
import pro23 from "../../public/lovable-uploads/Projects/Sentify/Sentify01.jpg"
import pro24 from "../../public/lovable-uploads/Projects/Sentify/1.jpg"
import pro25 from "../../public/lovable-uploads/Projects/Sentify/Sentify03.jpg"
import pro26 from "../../public/lovable-uploads/Projects/Sentify/Sentify04.jpg"
import pro27 from "../../public/lovable-uploads/Projects/Sentify/Sentify05.jpg"
import pro28 from "../../public/lovable-uploads/Projects/Surakshit/Surk01.png"
import pro29 from "../../public/lovable-uploads/Projects/Surakshit/Surk02.png"

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  links: { github?: string; live?: string };
  image: string;
  date: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects: Project[] = [
    // {
    //   id: 'project2',
    //   title: 'AutoCad Chatbot',
    //   shortDescription: 'Floor Plan Generator for creating designs based on room dimensions',
    //   fullDescription: 'A simple web application that allows users to create floor plans by entering room dimensions. The app takes in the dimensions of rooms and generates a floor plan in the DXF format (a file format used for CAD drawings), which can then be downloaded for use in design applications. Features include: users can enter room dimensions (width and height), automatically generates a floor plan based on the provided room dimensions, downloads the generated floor plan as a DXF file (AutoCAD file format). Built with Python, Flask, and the ezdxf library for generating the floor plan in the DXF format.',
    //   technologies: ['Python', 'Flask', 'ezdxf', 'JavaScript', 'HTML/CSS'],
    //   links: { github: 'https://github.com/virajmandlik/AUTOCAD_CHATBOT' },
    //   image: pro04,
    //   date: '2024',
    //   featured: true
    // },
    // {
    //   id: 'project3',
    //   title: 'CalciMitra',
    //   shortDescription: 'Smart Calculator with encryption and sharing capabilities',
    //   fullDescription: 'Smart Calculator created by Java Swing, MySQL, Apache NetBeans. Able to perform chain calculations, store them in encrypted format, and send encrypted keys via email to other people. The application provides a user-friendly interface for performing complex calculations while maintaining security and privacy.',
    //   technologies: ['Java', 'Swing', 'MySQL', 'Apache NetBeans', 'Encryption'],
    //   links: { github: 'https://github.com/virajmandlik/CalciMitra-JavaSwing' },
    //   image: pro05,
    //   date: '2023',
    //   featured: true
    // },
     
    {
      id: 'project1',
      title: 'ReportEase',
      shortDescription: 'Automated Smart Reporting Portal for educational institutions',
      fullDescription: 'Educational institutions generate vast amounts of diverse and fragmented data annually, making the preparation of comprehensive reports a complex and time-intensive task. This project introduces an automated Smart Reporting Portal designed to streamline data integration, analysis, and visualization. Leveraging cutting-edge technologies like AWS, Node.js, and React.js, the portal addresses inefficiencies in manual reporting by enabling secure data collection, real-time collaboration, and customizable visualizations. Key features include user authentication, automated report generation, and adherence to data privacy standards like GDPR. This innovative platform enhances reporting accuracy, facilitates insightful decision-making, and empowers educational institutions to focus on strategic growth.',
      technologies: ['AWS', 'Node.js', 'React.js', 'Database Management', 'Data Visualization'],
      links: { github: 'https://github.com/SashwatOrg/v_07' },
      image: pro19,
      date: '2024',
      featured: true
    },
    // {
    //   id: 'project7',
    //   title: 'Employee Management System',
    //   shortDescription: 'Java Swing-based system for HR and employee management',
    //   fullDescription: 'Employee Management System is a Java Swing-based application built with MySQL and JDBC for efficient employee record management. It allows administrators to add, update, and remove employee details with a user-friendly interface. The system ensures smooth data storage, retrieval, and organization using MySQL, while JDBC enables seamless database connectivity. With a secure login system, it provides role-based access to maintain data integrity and confidentiality.',
    //   technologies: ['Java', 'Swing', 'JDBC', 'MySQL'],
    //   links: { github: 'https://github.com/virajmandlik' },
    //   image: pro10,
    //   date: '2022',
    //   featured: false
    // },
    // {
    //   id: 'project8',
    //   title: 'Surakshit',
    //   shortDescription: 'Secure locally hosted file-sharing system',
    //   fullDescription: 'Surakshit is a secure, locally hosted file-sharing system built using Node.js and JavaScript. It transforms your laptop into a private server, allowing users to connect via IP address and log in using their credentials. Once authenticated, users can securely access and manage their designated folders on the server. Designed for privacy and efficiency, Surakshit ensures seamless and protected file sharing within a trusted network.',
    //   technologies: ['Node.js', 'JavaScript', 'Authentication', 'File System Operations'],
    //   links: { github: 'https://github.com/virajmandlik/Surakshit' },
    //   image: pro28,
    //   date: '2021',
    //   featured: false
    // },
  
    {
      id: 'project2',
      title: 'Freight Transportation System',
      shortDescription: 'Blockchain-based solution for secure freight management',
      fullDescription: 'Background: The freight transportation industry faces challenges like a lack of transparency, inefficiencies, security risks, and shipment disputes. Blockchain offers transparency, automation, and security. Motivation: To overcome inefficiencies and risks in traditional freight transport. Project Idea: A blockchain-based system for secure tracking, automation with smart contracts, and real-time monitoring. Prevents shipment tampering, automates workflows using smart contracts, and enables real-time monitoring to enhance security and efficiency.',
      technologies: ['Blockchain', 'Smart Contracts', 'React', 'Node.js', 'Web3'],
      links: { github: 'https://github.com/Guruvd07' },
      image: pro11,
      date: '2024',
      featured: false
    },
    {
      id: 'project3',
      title: 'ClubRankers',
      shortDescription: 'Empowering College Clubs and Students to connect and showcase activities',
      fullDescription: 'ClubRankers - Empowering College Clubs and Students. Creating a platform for college clubs and students to connect and showcase activities. Facilitating club enrollment, event postings, recruitment, and achievements. Utilizing Flask framework with MySQL for robust data management and visualization. Developed a web application to address these challenges. Implemented features for club registration, event management, and data-driven insights through visualizations. Improved visibility and engagement for clubs and students alike.',
      technologies: ['Flask', 'MySQL', 'Python', 'HTML/CSS', 'JavaScript'],
      links: { github: 'https://github.com/virajmandlik' },
      image:pro06,
      date: '2022',
      featured: true
    },
    {
      id: 'project4',
      title: 'MediPlus',
      shortDescription: 'AI-Based Disease Prediction System',
      fullDescription: 'MediPlus is an AI-powered healthcare web application that enables accurate disease prediction at your fingertips. Users can input symptoms such as fatigue, fever, or sore throat to receive instant, highly accurate predictions. The system provides severity analysis to determine if a condition is mild, moderate, or severe, helping users make informed decisions. It also offers personalized treatment advice including rest, medication, or further consultation options. Built using Machine Learning, Flask, and HTML/CSS, MediPlus is designed to make early diagnosis fast, intelligent, and accessible.',
      technologies: ['Machine Learning', 'Flask', 'Html/CSS', 'Healthcare'],
      links: { github: 'https://github.com/Guruvd07' },
      image: pro01,
      date: '2025',
      featured: true
    },
    {
      id: 'project5',
      title: 'Gamified AI Platform for Coding & Language Mastery',
      shortDescription: 'Making Learning Addictive with Quizzes, XP & Leaderboards',
      fullDescription: `🎓 Students (Ages 15–35): School & college learners struggling with syntax and structure.\n\n
\n\n\n👨‍💻 Aspiring Coders & Linguists: Beginners looking for fun, supportive platforms. \n\n
🌐 Rural & Underserved Learners: Voice-based & gamified interface removes tech entry barriers.\n\n

Sustainability Approach : \n
☁️ Cloud-Native Architecture – Requires minimal infrastructure, easy to scale\n
📶 Low-Bandwidth Optimizations – Supports rural and mobile-first access\n
🌐 Multilingual Support – Inclusive for non-English speakers\n
🔄 Reusable Quiz Engine – Built for long-term content expansion and reuse`,

      
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      links: { github: 'https://github.com/Guruvd07' },
      image: pro13,
      date: '2025',
      featured: false
    },
    {
      id: 'project6',
      title: 'Sentiment Analysis using BertLSTM',
      shortDescription: 'Sentiment Analysis for Mental Health Detection',
      fullDescription: 'This project focuses on Sentiment Analysis of textual data using a hybrid deep learning model that combines BERT(Bidirectional Encoder Representations from Transformers) and LSTM (Long Short-Term Memory). The goal was to classify text data (such as tweets, reviews, or comments) into sentiment categories like Positive, Negative, and Neutral by leveraging both the powerful contextual embeddings from BERT and the sequence modeling ability of LSTM.',
      technologies: ['Machine Learning', 'BertLSTM', 'Text Analysis' , 'Python'],
      links: { github: 'https://github.com/Guruvd07' },
      image:pro24,
      date: '2025',
      featured: true
    },
      {
      id: 'project7',
      title: 'Mental Health Mood Prediction using Streamlit & Random Forest',
      shortDescription: 'WebApp which Predict the user’s mood based on past behavior patterns',
      fullDescription: 
      '📘 Project Overview: This interactive Streamlit application enables users to log daily digital platform usage and mental health indicators (like anxiety, depression levels, and self-esteem). The app stores data locally and leverages machine learning to predict the user’s mood based on past behavior patterns.',
      technologies: ['Machine Learning', 'Streamlit', 'Flask', 'Python'],
      links: { github: 'https://github.com/Guruvd07' },
      image: pro05,
      date: '2023',
      featured: false
    },
    
    
  ];

  const displayedProjects = showAllProjects 
    ? projects 
    : projects.filter((_, index) => index < 6);
  
  // Project card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-background/95">
      <div className="section-container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Recent Work" 
        />
        
        {/* All projects grid */}
        <div>
          <h3 className="text-xl font-medium mb-8 text-gradient-primary">Featured Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="glass-morphism rounded-xl overflow-hidden group"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{project.shortDescription}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="glass-morphism px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="glass-morphism px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Details button */}
                  <button 
                    className="inline-flex items-center text-primary text-sm hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.id);
                    }}
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Show more/less button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center glass-morphism px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-colors"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp size={18} className="mr-2" />
                  Show Less Projects
                </>
              ) : (
                <>
                  <ChevronDown size={18} className="mr-2" />
                  Show More Projects
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Project details modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="glass-morphism max-w-3xl w-full rounded-xl p-0 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="relative h-60">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="absolute top-4 right-4 z-20 glass-morphism w-8 h-8 rounded-full flex items-center justify-center"
                          onClick={() => setSelectedProject(null)}
                        >
                          &times;
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="text-gray-300">{project.date}</p>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <p className="text-gray-200">{project.fullDescription}</p>
                        
                        <div>
                          <h4 className="text-sm uppercase text-gray-400 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech} 
                                className="glass-morphism px-2 py-1 rounded-full text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-4 pt-4">
                          {project.links.github && (
                            <a 
                              href={project.links.github} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass-morphism px-4 py-2 rounded-lg inline-flex items-center text-sm hover:bg-white/10 transition-colors"
                            >
                              <Github size={16} className="mr-2" />
                              View Code
                            </a>
                          )}
                          {project.links.live && (
                            <a 
                              href={project.links.live} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass-morphism px-4 py-2 rounded-lg inline-flex items-center text-sm border border-primary/30 hover:bg-primary/10 transition-colors"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
