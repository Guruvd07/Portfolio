"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Code, Database, FileText, BarChart3, Brain } from 'lucide-react'
import {
  SiPython,
  SiPandas,
  SiMysql,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiTensorflow,
  SiScikitlearn,
  SiOpenai,
} from "react-icons/si"
import { BiData } from "react-icons/bi"
import { FaBrain, FaChartLine, FaDatabase, FaServer, FaCode } from "react-icons/fa"
import { BsRobot, BsLightningCharge } from "react-icons/bs"
import { TbBrandOpenai } from "react-icons/tb"
import SectionHeading from "./SectionHeading"

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Effect to handle animation state based on view
  useEffect(() => {
    if (isInView) {
      // When section comes into view, trigger animations
      setShouldAnimate(true)
    } else {
      // When section goes out of view, reset animations after a delay
      const timer = setTimeout(() => {
        setShouldAnimate(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  // Skill categories with icons and items
  const skillCategories = [
    {
      name: "Data Science",
      icon: <Brain className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { icon: <SiPython className="text-xl" />, name: "Python", color: "bg-blue-100 text-blue-600" },
        { icon: <FaBrain className="text-xl" />, name: "ML", color: "bg-orange-100 text-orange-600" },
        { icon: <BsRobot className="text-xl" />, name: "DL", color: "bg-red-100 text-red-600" },
        { icon: <SiPandas className="text-xl" />, name: "EDA", color: "bg-emerald-100 text-emerald-600" },
        { icon: <SiScikitlearn className="text-xl" />, name: "Scikit", color: "bg-yellow-100 text-yellow-600" },
        { icon: <SiTensorflow className="text-xl" />, name: "TensorFlow", color: "bg-orange-100 text-orange-600" },
      ],
    },
    {
      name: "OCR & Analytics",
      icon: <FileText className="w-5 h-5" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { icon: <FaChartLine className="text-xl" />, name: "OCR", color: "bg-purple-100 text-purple-600" },
        { icon: <BiData className="text-xl" />, name: "PowerBI", color: "bg-yellow-100 text-yellow-600" },
        { icon: <TbBrandOpenai className="text-xl" />, name: "AI", color: "bg-green-100 text-green-600" },
      ],
    },
    {
      name: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-600",
      skills: [
        { icon: <FaDatabase className="text-xl" />, name: "Database", color: "bg-indigo-100 text-indigo-600" },
        { icon: <SiMysql className="text-xl" />, name: "MySQL", color: "bg-blue-50 text-blue-500" },
        { icon: <FaServer className="text-xl" />, name: "SQL", color: "bg-teal-100 text-teal-600" },
      ],
    },
    {
      name: "Web Development",
      icon: <Code className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { icon: <SiReact className="text-xl" />, name: "React", color: "bg-cyan-100 text-cyan-600" },
        { icon: <SiTypescript className="text-xl" />, name: "TSX", color: "bg-blue-100 text-blue-700" },
        { icon: <SiHtml5 className="text-xl" />, name: "HTML", color: "bg-orange-100 text-orange-600" },
        { icon: <SiCss3 className="text-xl" />, name: "CSS", color: "bg-blue-100 text-blue-600" },
        { icon: <SiFlask className="text-xl" />, name: "Flask", color: "bg-gray-100 text-gray-600" },
      ],
    },
  ]

  // All skills for the scrolling animation
  const allSkills = skillCategories.flatMap((category) => category.skills)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-background to-background/95 relative overflow-hidden py-20"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"
        style={{ y: y2, opacity }}
      />

      <div className="section-container relative z-10">
        {/* Horizontal Scrolling Circular Skills */}
        <motion.div
          className="mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...allSkills, ...allSkills].map((skill, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center justify-center min-w-[80px]`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-14 h-14 rounded-full ${skill.color} flex items-center justify-center shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mt-2">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative line below skills */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-6 mb-6"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading title="About Me" subtitle="My Story" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Bio */}
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="space-y-6 text-gray-300">
              <motion.p variants={fadeInUpVariants} custom={0} className="text-lg">
                I'm a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                  Data Science and Machine Learning Enthusiast
                </span>{" "}
                with a passion for transforming complex problems into intelligent solutions. My work revolves around
                predictive modeling, deep learning architectures, and data-driven decision making.
              </motion.p>

              <motion.p variants={fadeInUpVariants} custom={1}>
                My expertise in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-medium">
                  Optical Character Recognition (OCR)
                </span>{" "}
                allows me to extract valuable information from documents and images, while my{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 font-medium">
                  SQL and database management skills
                </span>{" "}
                enable efficient data storage, retrieval, and analysis for informed decision-making.
              </motion.p>

              <motion.p variants={fadeInUpVariants} custom={2}>
                I actively engage in technical competitions and hackathons, where I refine my ability to develop
                innovative AI solutions under constraints. This experimental approach complements my academic rigor in
                computer engineering and data science.
              </motion.p>

              <motion.div variants={fadeInUpVariants} custom={3} className="pt-4">
                <a
                  href="#contact"
                  className="inline-block glass-morphism px-6 py-3 rounded-lg border border-primary/30 text-white font-medium hover:bg-primary/10 transition-colors group relative overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Let's Connect
                    <BsLightningCharge className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Profile details and skill categories */}
          <div className="space-y-8">
            {/* Profile overview card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-morphism rounded-xl p-6 space-y-6 border border-white/5 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Profile Overview
                </span>
                <div className="h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 flex-grow ml-4"></div>
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Briefcase, label: "Current Role", value: "Data Scientist" },
                  { icon: GraduationCap, label: "Education", value: "Computer Science, B.Tech" },
                  { icon: Calendar, label: "Experience", value: "SDE Intern at BTD Service India " },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="glass-morphism p-2 rounded-lg mr-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-morphism rounded-xl p-6 border border-white/5 shadow-xl"
            >
              <h4 className="text-sm uppercase text-gray-400 mb-5 flex items-center">
                <span>Core Expertise</span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent flex-grow ml-4"></div>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-br ${category.color} mr-2 flex items-center justify-center`}
                      >
                        {category.icon}
                      </div>
                      <h5 className="font-medium text-sm">{category.name}</h5>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          variants={skillItemVariants}
                          custom={skillIndex}
                          className="inline-block glass-morphism px-3 py-1 rounded-full text-xs border border-white/5 hover:border-primary/30 transition-colors cursor-default"
                          whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
