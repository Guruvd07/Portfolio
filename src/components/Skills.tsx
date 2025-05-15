"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, FileText, FlaskRoundIcon as Flask, BarChart3, Atom, FileCode2, Palette, Github, GitBranch, Gitlab, Send, Cpu, LayoutGrid, Star, Sparkles } from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: React.ElementType
  category: "Data Science" | "frontend" | "database" | "devops" | "other" | "tools"
}

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  const skills: Skill[] = [
    // DataScience
    { name: "Machine Learning", level: 90, icon: Brain, category: "Data Science" },
    { name: "Deep Learning", level: 80, icon: Brain, category: "Data Science" },
    { name: "EDA", level: 90, icon: BarChart3, category: "Data Science" },
    { name: "Flask", level: 90, icon: Flask, category: "Data Science" },
    { name: "OCR", level: 90, icon: FileText, category: "Data Science" },
    { name: "PowerBI", level: 80, icon: BarChart3, category: "Data Science" },

    // Frontend
    { name: "ReactJS", level: 90, icon: Atom, category: "frontend" },
    { name: "TypeScript", level: 85, icon: FileCode2, category: "frontend" },
    { name: "HTML/CSS", level: 95, icon: Palette, category: "frontend" },

    // Database
    { name: "SQL", level: 80, icon: Database, category: "database" },

    // Tools
    { name: "GitHub", level: 90, icon: Github, category: "tools" },
    { name: "GitLab", level: 85, icon: Gitlab, category: "tools" },
    { name: "VS Code", level: 90, icon: Code, category: "tools" },
    { name: "Postman", level: 85, icon: Send, category: "tools" },

    // Other
    { name: "OS Concepts", level: 85, icon: Cpu, category: "other" },
    { name: "System Design", level: 85, icon: LayoutGrid, category: "other" },
    { name: "Git", level: 90, icon: GitBranch, category: "other" },
  ]

  const categories = [
    {
      id: "Data Science",
      name: "Data Science",
      icon: Brain,
      description: "Machine learning, data analysis, and AI expertise",
      color: "from-purple-600 to-indigo-600",
      lightColor: "from-purple-400 to-indigo-400",
    },
    { 
      id: "frontend", 
      name: "Frontend", 
      icon: Code, 
      description: "Creating beautiful, responsive user interfaces",
      color: "from-blue-600 to-cyan-600",
      lightColor: "from-blue-400 to-cyan-400",
    },
    { 
      id: "database", 
      name: "Database", 
      icon: Database, 
      description: "Data storage, retrieval, and management",
      color: "from-emerald-600 to-teal-600",
      lightColor: "from-emerald-400 to-teal-400",
    },
    { 
      id: "tools", 
      name: "Tools", 
      icon: Github, 
      description: "Development tools and productivity enhancers",
      color: "from-orange-600 to-amber-600",
      lightColor: "from-orange-400 to-amber-400",
    },
   
  ]

  // Group skills by category for display
  const groupedSkills = categories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.id),
  }))

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my technical skills across different domains, from data science to frontend development
          </p>
        </div>

        {/* Domain boxes in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groupedSkills.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 50,
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
            >
              <DomainBox 
                domain={domain} 
                hoveredSkill={hoveredSkill} 
                onHoverSkill={setHoveredSkill}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface DomainBoxProps {
  domain: {
    id: string
    name: string
    icon: React.ElementType
    description: string
    color: string
    lightColor: string
    skills: Skill[]
  }
  hoveredSkill: string | null
  onHoverSkill: (skillName: string | null) => void
}

const DomainBox: React.FC<DomainBoxProps> = ({ domain, hoveredSkill, onHoverSkill }) => {
  const DomainIcon = domain.icon

  // Calculate average skill level for the domain
  const avgSkillLevel =
    domain.skills.length > 0
      ? Math.round(domain.skills.reduce((sum, skill) => sum + skill.level, 0) / domain.skills.length)
      : 0

  return (
    <div className="fancy-domain-box h-full">
      {/* Outer border with gradient */}
      <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${domain.color} shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
        {/* Inner content */}
        <div className="bg-gray-900 rounded-2xl h-full overflow-hidden">
          {/* Domain header */}
          <div className={`p-6 relative overflow-hidden`}>
            {/* Header background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-10`}></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-white opacity-5 rounded-full blur-lg"></div>
            
            {/* Header content */}
            <div className="flex items-center relative z-10">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${domain.color} mr-4 shadow-lg`}>
                <DomainIcon className="w-6 h-6 text-white" />
              </div>

              <div className="flex-grow">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${domain.lightColor} bg-clip-text text-transparent flex items-center`}>
                  {domain.name}
                  <div className="ml-2 flex items-center bg-white/10 px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" />
                    <span className="text-sm font-normal text-white">{avgSkillLevel}%</span>
                  </div>
                </h3>
                <p className="text-xs text-gray-400 mt-1">{domain.description}</p>
              </div>
              
              <div className="ml-2">
                <Sparkles className={`w-5 h-5 text-gradient-${domain.color.split(' ')[1]}`} />
              </div>
            </div>
            
            {/* Divider */}
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Skills grid inside the domain box */}
          <div className="p-6 relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {domain.skills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                  domainColor={domain.color}
                  isHovered={hoveredSkill === skill.name}
                  onHover={() => onHoverSkill(skill.name)}
                  onLeave={() => onHoverSkill(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SkillItemProps {
  skill: Skill
  domainColor: string
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, domainColor, isHovered, onHover, onLeave }) => {
  // Calculate colors based on skill level
  const getColorClass = (level: number) => {
    if (level >= 90) return "from-emerald-500 to-teal-400"
    if (level >= 80) return "from-blue-500 to-cyan-400"
    if (level >= 70) return "from-violet-500 to-purple-400"
    return "from-amber-500 to-yellow-400"
  }

  const IconComponent = skill.icon

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ y: -5, scale: 1.05 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      {/* Circular skill item */}
      <div className="relative">
        {/* Skill level ring */}
        <div className="absolute inset-0 rounded-full">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke={`url(#gradient-${skill.name.replace(/\s+/g, "-")})`}
              strokeWidth="8"
              strokeDasharray={`${(2 * Math.PI * 46 * skill.level) / 100} ${2 * Math.PI * 46 * (1 - skill.level / 100)}`}
              strokeDashoffset={2 * Math.PI * 46 * 0.25}
              strokeLinecap="round"
              className="transition-all duration-700"
              style={{
                strokeDasharray: isHovered
                  ? `${(2 * Math.PI * 46 * skill.level) / 100} ${2 * Math.PI * 46 * (1 - skill.level / 100)}`
                  : "0 1000",
              }}
            />
            <defs>
              <linearGradient id={`gradient-${skill.name.replace(/\s+/g, "-")}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className={`stop-${getColorClass(skill.level).split(" ")[0]}`} />
                <stop offset="100%" className={`stop-${getColorClass(skill.level).split(" ")[1]}`} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Circular background with border */}
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center 
          bg-gray-800 border border-gray-700 transition-all duration-300 relative
          ${isHovered ? "border-white/30 shadow-lg" : ""}`}
        >
          {/* Icon */}
          <div className="z-10 relative">
            <div
              className={`
              p-2.5 rounded-full 
              bg-gradient-to-br ${domainColor}
              transition-all duration-300
              ${isHovered ? "scale-110 shadow-lg" : "scale-100"}
            `}
            >
              <IconComponent
                className={`
                  w-6 h-6 
                  transition-all duration-300
                  ${isHovered ? "text-white" : "text-white/90"}
                `}
                strokeWidth={isHovered ? 2 : 1.5}
              />
            </div>
          </div>
        </div>

        {/* Skill level badge */}
        <div className="absolute -top-2 -right-2">
          <div className={`bg-gradient-to-r ${domainColor} text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg border border-white/20`}>
            {skill.level}
          </div>
        </div>
      </div>

      {/* Skill name */}
      <div className="mt-3 text-center">
        <h4 className={`font-medium text-sm transition-all duration-300 ${isHovered ? 'text-white' : 'text-gray-300'}`}>
          {skill.name}
        </h4>

        {/* Small dots indicator */}
        <div className="mt-1 flex justify-center">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`h-1 w-1 mx-0.5 rounded-full transition-colors ${
                level <= Math.ceil(skill.level / 20) ? `bg-gradient-to-r ${domainColor}` : "bg-white/10"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
