"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Github, ExternalLink, ChevronRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import SectionHeading from "./SectionHeading"
import pro01 from "../../public/lovable-uploads/Projects/Aaroya/Mediplus.jpg"
import pro05 from "../../public/lovable-uploads/Projects/CalciMitra/1.jpg"
import pro06 from "../../public/lovable-uploads/Projects/ClubRankers/21.png"
import pro11 from "../../public/lovable-uploads/Projects/FrieghtTransportationSystem/Major Project 2024-25.png"
import pro13 from "../../public/lovable-uploads/Projects/Aaroya/nirman.jpg"
import pro19 from "../../public/lovable-uploads/Projects/ReportEase/ReportEase01.jpg"
import pro24 from "../../public/lovable-uploads/Projects/Sentify/1.jpg"

interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  links: { github?: string; live?: string }
  image: string
  date: string
  featured?: boolean
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Create a ref for the projects section
  const sectionRef = useRef<HTMLElement>(null)

  // Use Framer Motion's useInView hook to detect when the section is in view
  // Setting once to false makes it trigger every time the element enters the viewport
  const isInView = useInView(sectionRef, {
    once: false, // Trigger every time, not just once
    amount: 0.1, // Trigger when at least 10% of the element is in view
  })

  // Effect to handle animation state based on view
  useEffect(() => {
    if (isInView) {
      // When section comes into view, trigger animations
      setShouldAnimate(true)
    } else {
      // When section goes out of view, reset animations after a delay
      // This delay ensures the animations aren't visible when resetting
      const timer = setTimeout(() => {
        setShouldAnimate(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const projects: Project[] = [
    {
      id: "project1",
      title: "ReportEase",
      shortDescription: "Automated Smart Reporting Portal for educational institutions",
      fullDescription:
        "Educational institutions generate vast amounts of diverse and fragmented data annually, making the preparation of comprehensive reports a complex and time-intensive task. This project introduces an automated Smart Reporting Portal designed to streamline data integration, analysis, and visualization. Leveraging cutting-edge technologies like AWS, Node.js, and React.js, the portal addresses inefficiencies in manual reporting by enabling secure data collection, real-time collaboration, and customizable visualizations. Key features include user authentication, automated report generation, and adherence to data privacy standards like GDPR. This innovative platform enhances reporting accuracy, facilitates insightful decision-making, and empowers educational institutions to focus on strategic growth.",
      technologies: ["AWS", "Node.js", "React.js", "Database Management", "Data Visualization"],
      links: { github: "https://github.com/SashwatOrg/v_07" },
      image: pro19,
      date: "2024",
      featured: true,
    },
    {
      id: "project2",
      title: "Freight Transportation System",
      shortDescription: "Blockchain-based solution for secure freight management",
      fullDescription:
        "Background: The freight transportation industry faces challenges like a lack of transparency, inefficiencies, security risks, and shipment disputes. Blockchain offers transparency, automation, and security. Motivation: To overcome inefficiencies and risks in traditional freight transport. Project Idea: A blockchain-based system for secure tracking, automation with smart contracts, and real-time monitoring. Prevents shipment tampering, automates workflows using smart contracts, and enables real-time monitoring to enhance security and efficiency.",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Web3"],
      links: { github: "https://github.com/Guruvd07" },
      image: pro11,
      date: "2024",
      featured: false,
    },
    {
      id: "project3",
      title: "ClubRankers",
      shortDescription: "Empowering College Clubs and Students to connect and showcase activities",
      fullDescription:
        "ClubRankers - Empowering College Clubs and Students. Creating a platform for college clubs and students to connect and showcase activities. Facilitating club enrollment, event postings, recruitment, and achievements. Utilizing Flask framework with MySQL for robust data management and visualization. Developed a web application to address these challenges. Implemented features for club registration, event management, and data-driven insights through visualizations. Improved visibility and engagement for clubs and students alike.",
      technologies: ["Flask", "MySQL", "Python", "HTML/CSS", "JavaScript"],
      links: { github: "https://github.com/virajmandlik" },
      image: pro06,
      date: "2022",
      featured: true,
    },
    {
      id: "project4",
      title: "MediPlus",
      shortDescription: "AI-Based Disease Prediction System",
      fullDescription:
        "MediPlus is an AI-powered healthcare web application that enables accurate disease prediction at your fingertips. Users can input symptoms such as fatigue, fever, or sore throat to receive instant, highly accurate predictions. The system provides severity analysis to determine if a condition is mild, moderate, or severe, helping users make informed decisions. It also offers personalized treatment advice including rest, medication, or further consultation options. Built using Machine Learning, Flask, and HTML/CSS, MediPlus is designed to make early diagnosis fast, intelligent, and accessible.",
      technologies: ["Machine Learning", "Flask", "Html/CSS", "Healthcare"],
      links: { github: "https://github.com/Guruvd07" },
      image: pro01,
      date: "2025",
      featured: true,
    },
    {
      id: "project5",
      title: "Gamified AI Platform for Coding & Language Mastery",
      shortDescription: "Making Learning Addictive with Quizzes, XP & Leaderboards",
      fullDescription: `🎓 Students (Ages 15–35): School & college learners struggling with syntax and structure.\n\n
\n\n\n👨‍💻 Aspiring Coders & Linguists: Beginners looking for fun, supportive platforms. \n\n
🌐 Rural & Underserved Learners: Voice-based & gamified interface removes tech entry barriers.\n\n

Sustainability Approach : \n
☁️ Cloud-Native Architecture – Requires minimal infrastructure, easy to scale\n
📶 Low-Bandwidth Optimizations – Supports rural and mobile-first access\n
🌐 Multilingual Support – Inclusive for non-English speakers\n
🔄 Reusable Quiz Engine – Built for long-term content expansion and reuse`,

      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      links: { github: "https://github.com/Guruvd07" },
      image: pro13,
      date: "2025",
      featured: false,
    },
    {
      id: "project6",
      title: "Sentiment Analysis using BertLSTM",
      shortDescription: "Sentiment Analysis for Mental Health Detection",
      fullDescription:
        "This project focuses on Sentiment Analysis of textual data using a hybrid deep learning model that combines BERT(Bidirectional Encoder Representations from Transformers) and LSTM (Long Short-Term Memory). The goal was to classify text data (such as tweets, reviews, or comments) into sentiment categories like Positive, Negative, and Neutral by leveraging both the powerful contextual embeddings from BERT and the sequence modeling ability of LSTM.",
      technologies: ["Machine Learning", "BertLSTM", "Text Analysis", "Python"],
      links: { github: "https://github.com/Guruvd07" },
      image: pro24,
      date: "2025",
      featured: true,
    },
    {
      id: "project7",
      title: "Mental Health Mood Prediction using Streamlit & Random Forest",
      shortDescription: "WebApp which Predict the user's mood based on past behavior patterns",
      fullDescription:
        "📘 Project Overview: This interactive Streamlit application enables users to log daily digital platform usage and mental health indicators (like anxiety, depression levels, and self-esteem). The app stores data locally and leverages machine learning to predict the user's mood based on past behavior patterns.",
      technologies: ["Machine Learning", "Streamlit", "Flask", "Python"],
      links: { github: "https://github.com/Guruvd07" },
      image: pro05,
      date: "2023",
      featured: false,
    },
  ]

  const displayedProjects = showAllProjects ? projects : projects.filter((_, index) => index < 6)

  // Define animation variants for different entry styles
  const entryAnimations = [
    // From left margin
    {
      hidden: { opacity: 0, x: "-100vw" },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 20,
          delay: i * 0.1,
        },
      }),
      hover: { y: -10, transition: { duration: 0.3 } },
    },
    // From right margin
    {
      hidden: { opacity: 0, x: "100vw" },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 20,
          delay: i * 0.1,
        },
      }),
      hover: { y: -10, transition: { duration: 0.3 } },
    },
    // From top margin
    {
      hidden: { opacity: 0, y: "-100vh" },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: i * 0.1,
        },
      }),
      hover: { y: -10, transition: { duration: 0.3 } },
    },
    // From bottom margin
    {
      hidden: { opacity: 0, y: "100vh" },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: i * 0.1,
        },
      }),
      hover: { y: -10, transition: { duration: 0.3 } },
    },
    // Diagonal entry (top-left to bottom-right)
    {
      hidden: { opacity: 0, x: "-100vw", y: "-100vh", scale: 0.8 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 15,
          delay: i * 0.1,
        },
      }),
      hover: { y: -10, scale: 1.03, transition: { duration: 0.3 } },
    },
    // Spiral entry with rotation
    {
      hidden: { opacity: 0, scale: 0, rotate: -360 },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 20,
          delay: i * 0.1,
        },
      }),
      hover: { y: -10, scale: 1.05, transition: { duration: 0.3 } },
    },
  ]

  // Image animation variants
  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.15,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  }

  // Technology badge animation variants
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  // Modal content animation variants
  const modalContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const modalItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-background to-background/95 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <SectionHeading title="My Projects" subtitle="Recent Work" />

        {/* All projects grid */}
        <div>
          <div className="flex items-center mb-8">
            <h3 className="text-xl font-medium text-gradient-primary flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
              Featured Projects
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => {
              // Select a different animation style based on index
              const animationIndex = index % entryAnimations.length
              const animation = entryAnimations[animationIndex]

              return (
                <motion.div
                  key={project.id}
                  custom={index}
                  variants={animation}
                  initial="hidden"
                  animate={shouldAnimate ? "visible" : "hidden"}
                  whileHover="hover"
                  className="glass-morphism rounded-xl overflow-hidden group cursor-pointer project-card"
                  onClick={() => setSelectedProject(project.id)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                      initial="hidden"
                      animate={shouldAnimate ? "visible" : "hidden"}
                      whileHover="hover"
                    />

                    {/* Floating date badge */}
                    <motion.div
                      className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs border border-white/10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project.date}
                    </motion.div>
                  </div>

                  {/* Project details */}
                  <div className="p-6 relative">
                    {/* Animated highlight on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 0.5 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <h4 className="text-lg font-semibold mb-2 relative z-10">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 relative z-10">{project.shortDescription}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          custom={techIndex}
                          variants={badgeVariants}
                          initial="hidden"
                          animate={shouldAnimate ? "visible" : "hidden"}
                          className="glass-morphism px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <motion.span
                          custom={3}
                          variants={badgeVariants}
                          initial="hidden"
                          animate={shouldAnimate ? "visible" : "hidden"}
                          className="glass-morphism px-2 py-1 rounded-full text-xs"
                        >
                          +{project.technologies.length - 3}
                        </motion.span>
                      )}
                    </div>

                    {/* Details button */}
                    <motion.button
                      className="inline-flex items-center text-primary text-sm hover:underline relative z-10"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project.id)
                      }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Show more/less button */}
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center glass-morphism px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.4 }}
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
            </motion.button>
          </div>
        </div>

        {/* Project details modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
                  const project = projects.find((p) => p.id === selectedProject)
                  if (!project) return null

                  return (
                    <>
                      <div className="relative h-60">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.1, opacity: 0.8 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.button
                          className="absolute top-4 right-4 z-20 glass-morphism w-8 h-8 rounded-full flex items-center justify-center"
                          onClick={() => setSelectedProject(null)}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                          whileTap={{ scale: 0.9 }}
                        >
                          &times;
                        </motion.button>
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6 z-20"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="text-gray-300">{project.date}</p>
                        </motion.div>
                      </div>

                      <motion.div
                        className="p-6 space-y-4"
                        variants={modalContentVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.p className="text-gray-200" variants={modalItemVariants}>
                          {project.fullDescription}
                        </motion.p>

                        <motion.div variants={modalItemVariants}>
                          <h4 className="text-sm uppercase text-gray-400 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <motion.span
                                key={tech}
                                className="glass-morphism px-2 py-1 rounded-full text-xs"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                  transition: { delay: 0.4 + index * 0.05 },
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div className="flex space-x-4 pt-4" variants={modalItemVariants}>
                          {project.links.github && (
                            <motion.a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass-morphism px-4 py-2 rounded-lg inline-flex items-center text-sm hover:bg-white/10 transition-colors"
                              whileHover={{ scale: 1.05, x: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={16} className="mr-2" />
                              View Code
                            </motion.a>
                          )}
                          {project.links.live && (
                            <motion.a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass-morphism px-4 py-2 rounded-lg inline-flex items-center text-sm border border-primary/30 hover:bg-primary/10 transition-colors"
                              whileHover={{ scale: 1.05, x: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </motion.a>
                          )}
                        </motion.div>
                      </motion.div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
