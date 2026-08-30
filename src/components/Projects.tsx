"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Github,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  X,
  ChevronLeft,
  ChevronDownIcon,
} from "lucide-react"
import SectionHeading from "./SectionHeading"

// ---- Project 1: EvalForge AI ----
import pro1 from "../../public/lovable-uploads/Projects/EvaloforgeAI/banner.jfif"
import pro2 from "../../public/lovable-uploads/Projects/EvaloforgeAI/EvaloforgeAI.png"
import pro3 from "../../public/lovable-uploads/Projects/EvaloforgeAI/1.png"
import pro4 from "../../public/lovable-uploads/Projects/EvaloforgeAI/2.png"
import pro5 from "../../public/lovable-uploads/Projects/EvaloforgeAI/3.png"
import pro6 from "../../public/lovable-uploads/Projects/EvaloforgeAI/4.png"
import pro7 from "../../public/lovable-uploads/Projects/EvaloforgeAI/5.png"
import pro8 from "../../public/lovable-uploads/Projects/EvaloforgeAI/6.png"
import pro9 from "../../public/lovable-uploads/Projects/EvaloforgeAI/7.png"
import pro10 from "../../public/lovable-uploads/Projects/EvaloforgeAI/8.png"
import pro11 from "../../public/lovable-uploads/Projects/EvaloforgeAI/9.png"
import pro12 from "../../public/lovable-uploads/Projects/EvaloforgeAI/10.png"

// ---- Project 2: GuruDoc AI ----
import pro13 from "../../public/lovable-uploads/Projects/Guru DOC AI/GuruDoc AI.png"
import pro14 from "../../public/lovable-uploads/Projects/Guru DOC AI/cover.png"
import pro15 from "../../public/lovable-uploads/Projects/Guru DOC AI/1.jpg"
import pro16 from "../../public/lovable-uploads/Projects/Guru DOC AI/2.jpg"
import pro17 from "../../public/lovable-uploads/Projects/Guru DOC AI/3.jpg"
import pro18 from "../../public/lovable-uploads/Projects/Guru DOC AI/4.jpg"
import pro19 from "../../public/lovable-uploads/Projects/Guru DOC AI/5.jpg"
import pro20 from "../../public/lovable-uploads/Projects/Guru DOC AI/6.jpg"
import pro21 from "../../public/lovable-uploads/Projects/Guru DOC AI/7.jpg"

// ---- Project 3: InsightGuru AI ----
import pro22 from "../../public/lovable-uploads/Projects/GuruInsightAI/insightGuruAI.png"
import pro23 from "../../public/lovable-uploads/Projects/GuruInsightAI/cover.png"
import pro24 from "../../public/lovable-uploads/Projects/GuruInsightAI/Before.jpg"
import pro25 from "../../public/lovable-uploads/Projects/GuruInsightAI/After.jpg"

// ---- Project 4: AutoML Agent ----
import pro26 from "../../public/lovable-uploads/Projects/Auto_ML_AGent/AutoML Agent.png"
import pro27 from "../../public/lovable-uploads/Projects/Auto_ML_AGent/ML.png"

// ---- Project 5: SentimentGuru AI ----
import pro28 from "../../public/lovable-uploads/Projects/Youtube/sentiment1.png"
import pro29 from "../../public/lovable-uploads/Projects/Youtube/1.jpg"
import pro30 from "../../public/lovable-uploads/Projects/Youtube/2.jpg"
import pro31 from "../../public/lovable-uploads/Projects/Youtube/3.jpg"
import pro32 from "../../public/lovable-uploads/Projects/Youtube/4.jpg"
import pro33 from "../../public/lovable-uploads/Projects/Youtube/5.jpg"
import pro34 from "../../public/lovable-uploads/Projects/Youtube/6.jpg"
import pro35 from "../../public/lovable-uploads/Projects/Youtube/7.jpg"
import pro36 from "../../public/lovable-uploads/Projects/Youtube/8.jpg"
import pro37 from "../../public/lovable-uploads/Projects/Youtube/9.jpg"
import pro38 from "../../public/lovable-uploads/Projects/Youtube/10.jpg"
import pro39 from "../../public/lovable-uploads/Projects/Youtube/11.jpg"

// ---- Project 6: Apache Kafka ----
import pro40 from "../../public/lovable-uploads/Projects/Kafka-1/ApacheKafka.png"
import pro41 from "../../public/lovable-uploads/Projects/Kafka-1/cover.png"
import pro42 from "../../public/lovable-uploads/Projects/Kafka-1/1.jpg"
import pro43 from "../../public/lovable-uploads/Projects/Kafka-1/2.jpg"
import pro44 from "../../public/lovable-uploads/Projects/Kafka-1/3.jpg"
import pro45 from "../../public/lovable-uploads/Projects/Kafka-1/4.jpg"
import pro46 from "../../public/lovable-uploads/Projects/Kafka-1/5.jpg"
import pro47 from "../../public/lovable-uploads/Projects/Kafka-1/6.jpg"
import pro48 from "../../public/lovable-uploads/Projects/Kafka-1/7.jpg"

// ---- Project 7: CarGuru AI ----
import pro49 from "../../public/lovable-uploads/Projects/FrieghtTransportationSystem/Screenshot 2025-08-19 153027.jpg"

// ---- Project 8: GuruCare+ ----
import pro50 from "../../public/lovable-uploads/Projects/Aaroya/Mediplus.jpg"

// ---- Project 9: ReportEase ----
import pro51 from "../../public/lovable-uploads/Projects/ReportEase/ReportEase01.jpg"

// ---- Project 10: ClubRankers ----
import pro52 from "../../public/lovable-uploads/Projects/ClubRankers/poster club rankers.png"
import pro53 from "../../public/lovable-uploads/Projects/ClubRankers/21.png"

// ---- Project 11: Gamified AI Platform ----
import pro54 from "../../public/lovable-uploads/Projects/Aaroya/nirman.jpg"

// ---- Project 12: Narmada Traders ----
import pro55 from "../../public/lovable-uploads/Projects/Sentify/1.jpg"


interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  links: { github?: string; live?: string }
  image: string
  images?: string[] // Array of project workflow/process images
  date: string
  featured?: boolean
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

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
      id: "project12",
      title: "EvalForge AI",
      shortDescription:
        "EvalForge AI is an LLM evaluation and model comparison platform that evaluates multiple AI models using standardized prompts and compares quality, latency, token usage, and cost.",
      fullDescription:
        "EvalForge AI is a full-stack AI evaluation platform that allows users to create experiments, add evaluation prompts, run multiple LLMs using the same inputs, and compare their performance. The system automatically evaluates responses based on relevance, correctness, coherence, instruction following, and overall quality while tracking latency, token usage, and cost. It includes JWT-based authentication, user-specific experiment isolation, dashboards, analytics, and model leaderboards.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "PostgreSQL",
        "SQLAlchemy",
        "LLM Evaluation",
        "OpenRouter",
        "JWT Authentication",
        "REST APIs",
      ],
      links: {
        live: "https://evalforge-ai-frontend.onrender.com/",
        github: "https://github.com/Guruvd07/EvalForge-AI",
      },
      image: pro1,
      images: [pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12],
      date: "2026",
      featured: true,
    },

    {
      id: "project3",
      title: "GuruDoc AI",
      shortDescription:
        "GuruDoc AI is a production-aligned backend AI system that demonstrates how modern enterprises build accurate, trustworthy document question-answering solutions using Retrieval-Augmented Generation.",
      fullDescription:
        "GuruDoc AI is a backend, API-first AI system that enables users to upload PDF documents and ask natural-language questions. The system returns accurate, document-grounded answers using a Retrieval-Augmented Generation (RAG) architecture. This project focuses purely on core AI intelligence and backend design. There is no frontend implementation. All APIs are tested and validated using Swagger UI.",
      technologies: [
        "Python",
        "NLP",
        "RAG",
        "Sentence Transformers",
        " FAISS",
        "Gemini LLM",
        " FastAPI",
        " Vector Databases",
      ],
      links: { github: " https://github.com/Guruvd07/DocGuru-AI.git" },
      image: pro13,
      images: [pro14, pro15, pro16, pro17, pro18, pro19, pro20, pro21], // added multiple images array
      date: "2025",
      featured: true,
    },

    {
      id: "project2",
      title: "InsightGuru AI",
      shortDescription:
        "Extracts keyword-specific insights from YouTube videos using multi-level transcript processing and transformer-based summarization.",
      fullDescription:
        "InsightGuru AI is an advanced AI system that analyzes YouTube videos by extracting transcripts through a 4-level pipeline (VTT → TimedText → Transcript API → Whisper ASR). It detects keyword-specific segments and generates precise, context-aware summaries using FLAN-T5 transformers. The project includes real-time processing through a sleek Flask web interface, helping users quickly find what a speaker said about any topic or person.",
      technologies: [
        "Python",
        "Flask",
        "Hugging Face Transformers",
        "FLAN-T5",
        "Whisper ASR",
        "YouTube API",
        "NLP",
        "Text Summarization",
        "HTML/CSS/JS",
      ],
      links: { github: "https://github.com/Guruvd07/GuruInsight-AI.git" },
      image: pro22,
      images: [pro23, pro24, pro25], // added multiple images array
      date: "2025",
      featured: true,
    },

    {
      id: "project4",
      title: "AutoML Agent : Agentic AI Data Scientist",
      shortDescription: "End-to-end Agentic AutoML platform that detects ML problems, trains multiple models, compares them, makes predictions, and saves best models automatically.",
      fullDescription:
        "Background: Traditional machine learning workflows require manual preprocessing, model selection, evaluation, and deployment. Motivation: To build an intelligent agent-like AutoML system that automates the full data science workflow with minimal user intervention. Project Idea: An Agentic AI Data Scientist platform built using Python and Streamlit where users upload a dataset, select a target column, and the system automatically detects whether the task is regression or classification, preprocesses data, trains multiple machine learning models, compares performance metrics, selects the best model, visualizes results using confusion matrix and ROC curves, supports interactive prediction through UI forms, and allows exporting trained models in .pkl format. The project demonstrates AutoML, agent-based orchestration, model evaluation, and production deployment using Render.",
      technologies: [
        "Python",
        "Streamlit",
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Joblib",
        "Render",
        "Agentic AI"
      ],
      links: {
        github: "https://github.com/Guruvd07/AutoML-Agent.git",
        live: "https://automl-agent-zenu.onrender.com/"
      },
      image: pro26,
      images: [pro27],
      date: "2026",
      featured: true,
    },

    {
      id: "project1",
      title: "SentimentGuru AI",
      shortDescription: "Predicts YouTube comment sentiment and provides a video rating with visual charts.",
      fullDescription:
        "SentimentGuru AI is an end-to-end web application that analyzes YouTube video comments, predicts sentiment, and provides an overall rating and visual insights for a video. It helps content creators and viewers understand audience reactions at a glance.",
      technologies: [
        "Python",
        "Flask",
        "Hugging Face Transformers",
        "WordCloud",
        "Data Visualization",
        "API",
        "HTML/CSS/JS",
      ],
      links: { github: "https://github.com/Guruvd07/SentimentGuru-AI.git" },
      image: pro28,
      images: [pro29, pro30, pro31, pro32, pro33, pro34, pro35, pro36, pro37, pro38, pro39], // added multiple images array
      date: "2025",
      featured: true,
    },
    {
      id: "project5",
      title: "Apache Kafka : Real-Time E-Commerce Order Pipeline",
      shortDescription: "Production-style real-time event-driven e-commerce system using Kafka, Python, and FastAPI.",
      fullDescription:
        "Background: Modern e-commerce platforms require real-time processing, scalability, and fault tolerance. Motivation: To design a production-style distributed system that reflects real-world enterprise architectures. Project Idea: A real-time microservices-based order processing pipeline using Apache Kafka, Python, and FastAPI. Orders are created via REST API or Web UI and streamed into Kafka topics. Independent consumer services asynchronously handle inventory management, notifications, and analytics processing. This project demonstrates event-driven architecture, microservices design, and real-time data streaming for enterprise-grade systems.",
      technologies: [
        "Apache Kafka",
        "Python",
        "FastAPI",
        "kafka-python",
        "Uvicorn",
        "HTML",
        "CSS",
        "REST APIs",
      ],
      links: {
        github: "https://github.com/Guruvd07/Apache-Kafka-1.git",
      },
      image: pro40,
      images: [pro41, pro42, pro43, pro44, pro45, pro46, pro47, pro48],
      date: "2026",
      featured: true,
    },


    {
      id: "project6",
      title: "CarGuru AI : Used Car Price Prediction",
      shortDescription: "AI-powered platform for accurate and transparent used car pricing.",
      fullDescription:
        "Background: The used car market often lacks transparency in pricing due to varying conditions, locations, and seller bias. Motivation: To bring accuracy, transparency, and trust in pricing using machine learning and real-world data. Project Idea: An end-to-end system covering data engineering, data cleaning, data analysis, ML engineering, and deployment. Real car listings were scraped, preprocessed, and analyzed. A CatBoost regression model (R² = 88%) was trained for price prediction. Finally, a Flask-based web app with HTML/CSS/JS frontend was deployed, allowing users to predict car prices, view brand logos, and explore similar cars in real-time.",
      technologies: ["Python", "Pandas", "NumPy", "Selenium", "CatBoost", "scikit-learn", "Flask", "HTML", "CSS"],
      links: {
        github: "https://github.com/Guruvd07/car-price-predictor",
        live: "https://car-price-predictor-1gcq.onrender.com/",
      },
      image: pro49,
      images: [pro49], // added multiple images array
      date: "2025",
      featured: false,
    },

    {
      id: "project7",
      title: "GuruCare+",
      shortDescription: "AI-Based Disease Prediction System",
      fullDescription:
        "MediPlus is an AI-powered healthcare web application that enables accurate disease prediction at your fingertips. Users can input symptoms such as fatigue, fever, or sore throat to receive instant, highly accurate predictions. The system provides severity analysis to determine if a condition is mild, moderate, or severe, helping users make informed decisions. It also offers personalized treatment advice including rest, medication, or further consultation options. Built using Machine Learning, Flask, and HTML/CSS, MediPlus is designed to make early diagnosis fast, intelligent, and accessible.",
      technologies: ["Machine Learning", "NodeJs", "Flask", "Html/CSS", "Streamlit", "Healthcare"],
      links: { github: "https://github.com/Guruvd07/GuruCare", live: "https://medical-frontend-oxk9.onrender.com/" },
      image: pro50,
      images: [pro50], // added multiple images array
      date: "2025",
      featured: true,
    },
    {
      id: "project8",
      title: "ReportEase",
      shortDescription: "Automated Smart Reporting Portal for educational institutions",
      fullDescription:
        "Educational institutions generate vast amounts of diverse and fragmented data annually, making the preparation of comprehensive reports a complex and time-intensive task. This project introduces an automated Smart Reporting Portal designed to streamline data integration, analysis, and visualization. Leveraging cutting-edge technologies like AWS, Node.js, and React.js, the portal addresses inefficiencies in manual reporting by enabling secure data collection, real-time collaboration, and customizable visualizations. Key features include user authentication, automated report generation, and adherence to data privacy standards like GDPR. This innovative platform enhances reporting accuracy, facilitates insightful decision-making, and empowers educational institutions to focus on strategic growth.",
      technologies: ["AWS", "Node.js", "React.js", "Database Management", "Data Visualization"],
      links: { github: "https://github.com/SashwatOrg/v_07" },
      image: pro51,
      images: [pro51], // added multiple images array
      date: "2024",
      featured: true,
    },

    {
      id: "project9",
      title: "ClubRankers",
      shortDescription: "Empowering College Clubs and Students to connect and showcase activities",
      fullDescription:
        "ClubRankers - Empowering College Clubs and Students. Creating a platform for college clubs and students to connect and showcase activities. Facilitating club enrollment, event postings, recruitment, and achievements. Utilizing Flask framework with MySQL for robust data management and visualization. Developed a web application to address these challenges. Implemented features for club registration, event management, and data-driven insights through visualizations. Improved visibility and engagement for clubs and students alike.",
      technologies: ["Flask", "MySQL", "Python", "HTML/CSS", "JavaScript"],
      links: { github: "https://github.com/virajmandlik" },
      image: pro52,
      images: [pro53], // added multiple images array
      date: "2022",
      featured: true,
    },

    {
      id: "project10",
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
      image: pro54,
      images: [pro54], // added multiple images array
      date: "2025",
      featured: false,
    },
    {
      id: "project11",
      title: "Narmada Traders - Bilingual Billing System",
      shortDescription: "Professional billing system with English-to-Marathi conversion and PDF generation",
      fullDescription:
        "🏪 A modern, bilingual billing system built for Narmada Traders furniture store. Features smart item entry with auto-complete suggestions, real-time English-to-Marathi conversion, and professional PDF generation with perfect Devanagari font rendering. Includes cultural elements like traditional god names, signature sections, and optimized single-page A4 layout for business use.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "html2pdf.js", "Vite"],
      links: {
        github: "https://github.com/Guruvd07/Billing-System.git",
        live: "https://billing-system-lime.vercel.app/",
      },
      image: pro55,
      images: [pro55], // added multiple images array
      date: "2025",
      featured: true,
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

  const FullscreenImageViewer = ({
    images,
    initialIndex,
  }: {
    images: string[]
    initialIndex: number
  }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
      <motion.div
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedImageIndex(null)}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
            onClick={() => setSelectedImageIndex(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} className="text-white" />
          </motion.button>

          {/* Main image */}
          <motion.div
            className="relative flex-1 overflow-hidden rounded-lg bg-black/50"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Project view ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <motion.button
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={images.length === 1}
            >
              <ChevronLeft size={24} className="text-white" />
            </motion.button>

            {/* Image counter and thumbnails */}
            <div className="flex-1 mx-4">
              <div className="text-center text-white text-sm mb-3">
                {currentIndex + 1} / {images.length}
              </div>
              <div className="flex gap-2 justify-center flex-wrap">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex
                        ? "border-blue-500 ring-2 ring-blue-400"
                        : "border-white/20 opacity-50 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={images.length === 1}
            >
              <ChevronLeft size={24} className="text-white rotate-180" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
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
                className="glass-morphism max-w-3xl w-full rounded-xl overflow-y-auto max-h-[90vh]"
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

                        {project.images && project.images.length > 0 && (
                          <motion.div variants={modalItemVariants}>
                            <h4 className="text-sm uppercase text-gray-400 mb-3">Project Gallery - How It Works</h4>
                            <div className="grid grid-cols-3 gap-3">
                              {project.images.map((img, idx) => (
                                <motion.button
                                  key={idx}
                                  className="relative h-32 rounded-lg overflow-hidden group cursor-pointer"
                                  onClick={() => setSelectedImageIndex(idx)}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <img
                                    src={img || "/placeholder.svg"}
                                    alt={`Project view ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <ChevronDownIcon
                                      size={24}
                                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>
                        )}

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

        <AnimatePresence>
          {selectedImageIndex !== null &&
            (() => {
              const project = projects.find((p) => p.id === selectedProject)
              return project?.images ? (
                <FullscreenImageViewer images={project.images} initialIndex={selectedImageIndex} />
              ) : null
            })()}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects