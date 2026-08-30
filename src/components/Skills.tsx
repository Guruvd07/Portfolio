"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Code,
  Database,
  FileText,
  BarChart3,
  Atom,
  Github,
  GitBranch,
  Cpu,
  Star,
  Sparkles,
  Server,
  Shuffle,
  Globe,
  Eraser,
  Calculator,
  LineChart,
  Layers,
  Bot,
  Wrench,
  BookOpen,
  Search,
  Type,
} from "lucide-react";

interface Skill {
  name: string
  level: number
  icon: React.ElementType
  category:
  | "Machine Learning & DL"
  | "Generative AI & NLP"
  | "Agentic AI Systems"
  | "Vector Search & DB"
  | "AI Engineering & APIs"
  | "Data Analysis"
  | "Languages & Tools"
}

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  const skills: Skill[] = [
    // -------------------------------------
    // MACHINE LEARNING & DEEP LEARNING
    // -------------------------------------
    { name: "Feature Engineering", level: 90, icon: Layers, category: "Machine Learning & DL" },
    { name: "Neural Networks", level: 88, icon: Cpu, category: "Machine Learning & DL" },
    { name: "Transformers", level: 90, icon: Brain, category: "Machine Learning & DL" },
    { name: "Embeddings", level: 88, icon: Sparkles, category: "Machine Learning & DL" },

    // -------------------------------------
    // GENERATIVE AI & NLP
    // -------------------------------------
    { name: "LLMs", level: 92, icon: Bot, category: "Generative AI & NLP" },
    { name: "RAG", level: 92, icon: Sparkles, category: "Generative AI & NLP" },
    { name: "LLM Evaluation", level: 88, icon: Star, category: "Generative AI & NLP" },
    { name: "NLP", level: 88, icon: FileText, category: "Generative AI & NLP" },
    { name: "Tokenization", level: 85, icon: Type, category: "Generative AI & NLP" },
    { name: "Semantic Search", level: 88, icon: Search, category: "Generative AI & NLP" },

    // -------------------------------------
    // AGENTIC AI SYSTEMS
    // -------------------------------------
    { name: "AI Agents", level: 90, icon: Bot, category: "Agentic AI Systems" },
    { name: "Multi-Agent Systems", level: 85, icon: Shuffle, category: "Agentic AI Systems" },
    { name: "Agent Memory", level: 82, icon: Brain, category: "Agentic AI Systems" },
    { name: "Tool Calling", level: 88, icon: Wrench, category: "Agentic AI Systems" },
    { name: "Autonomous AI Workflows", level: 85, icon: Cpu, category: "Agentic AI Systems" },

    // -------------------------------------
    // VECTOR SEARCH & DATABASES
    // -------------------------------------
    { name: "FAISS", level: 90, icon: Database, category: "Vector Search & DB" },
    { name: "Sentence Transformers", level: 88, icon: Brain, category: "Vector Search & DB" },
    { name: "Vector Databases", level: 88, icon: Database, category: "Vector Search & DB" },
    { name: "PostgreSQL", level: 85, icon: Database, category: "Vector Search & DB" },
    { name: "MySQL", level: 85, icon: Database, category: "Vector Search & DB" },

    // -------------------------------------
    // AI ENGINEERING & APIs
    // -------------------------------------
    { name: "FastAPI", level: 90, icon: Server, category: "AI Engineering & APIs" },
    { name: "REST APIs", level: 90, icon: Globe, category: "AI Engineering & APIs" },
    { name: "Hugging Face", level: 85, icon: Bot, category: "AI Engineering & APIs" },
    { name: "Git", level: 90, icon: GitBranch, category: "AI Engineering & APIs" },
    { name: "GitHub", level: 90, icon: Github, category: "AI Engineering & APIs" },

    // -------------------------------------
    // DATA ANALYSIS
    // -------------------------------------
    { name: "EDA", level: 90, icon: BarChart3, category: "Data Analysis" },
    { name: "Data Cleaning", level: 88, icon: Eraser, category: "Data Analysis" },
    { name: "Data Visualization", level: 85, icon: LineChart, category: "Data Analysis" },
    { name: "Statistical Analysis", level: 85, icon: Calculator, category: "Data Analysis" },

    // -------------------------------------
    // LANGUAGES & TOOLS
    // -------------------------------------
    { name: "Python", level: 92, icon: Code, category: "Languages & Tools" },
    { name: "SQL", level: 88, icon: Database, category: "Languages & Tools" },
    { name: "Jupyter Notebook", level: 90, icon: BookOpen, category: "Languages & Tools" },
    { name: "Google Colab", level: 88, icon: Atom, category: "Languages & Tools" },
    { name: "VS Code", level: 90, icon: Code, category: "Languages & Tools" },
  ];

  const categories = [
    {
      id: "Machine Learning & DL",
      name: "Machine Learning & DL",
      icon: Brain,
      description: "Feature engineering, neural networks, transformers, embeddings",
      color: "from-indigo-600 to-purple-600",
      lightColor: "from-indigo-400 to-purple-400",
    },
    {
      id: "Generative AI & NLP",
      name: "Generative AI & NLP",
      icon: Sparkles,
      description: "LLMs, RAG, LLM evaluation, NLP, tokenization, semantic search",
      color: "from-fuchsia-600 to-rose-600",
      lightColor: "from-fuchsia-400 to-rose-400",
    },
    {
      id: "Agentic AI Systems",
      name: "Agentic AI Systems",
      icon: Bot,
      description: "AI agents, multi-agent systems, agent memory, tool calling",
      color: "from-purple-600 to-pink-600",
      lightColor: "from-purple-400 to-pink-400",
    },
    {
      id: "Vector Search & DB",
      name: "Vector Search & DB",
      icon: Database,
      description: "FAISS, sentence transformers, vector databases, PostgreSQL, MySQL",
      color: "from-emerald-600 to-teal-600",
      lightColor: "from-emerald-400 to-teal-400",
    },
    {
      id: "AI Engineering & APIs",
      name: "AI Engineering & APIs",
      icon: Server,
      description: "FastAPI, REST APIs, Hugging Face, Git, GitHub",
      color: "from-slate-600 to-gray-700",
      lightColor: "from-slate-400 to-gray-400",
    },
    {
      id: "Data Analysis",
      name: "Data Analysis",
      icon: BarChart3,
      description: "EDA, data cleaning, visualization, statistical analysis",
      color: "from-cyan-600 to-sky-600",
      lightColor: "from-cyan-400 to-sky-400",
    },
    {
      id: "Languages & Tools",
      name: "Languages & Tools",
      icon: Code,
      description: "Python, SQL, Jupyter, Google Colab, VS Code",
      color: "from-blue-600 to-indigo-600",
      lightColor: "from-blue-400 to-indigo-400",
    },
  ];

  const groupedSkills = categories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.id),
  }))

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my technical expertise across Machine Learning, Generative AI, Agentic AI, Vector Search, and AI Engineering.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groupedSkills.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

/* ------------------------- Domain Box Component ------------------------- */

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
  const avgSkillLevel =
    domain.skills.length > 0
      ? Math.round(domain.skills.reduce((sum, skill) => sum + skill.level, 0) / domain.skills.length)
      : 0

  return (
    <div className="fancy-domain-box h-full">
      <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${domain.color} shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
        <div className="bg-gray-900 rounded-2xl h-full overflow-hidden">
          <div className={`p-6 relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-10`}></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-white opacity-5 rounded-full blur-lg"></div>

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
                <Sparkles className="w-5 h-5 text-white/30" />
              </div>
            </div>

            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

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

/* ------------------------- Skill Item Component ------------------------- */

interface SkillItemProps {
  skill: Skill
  domainColor: string
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, domainColor, isHovered, onHover, onLeave }) => {
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
      <div className="relative">
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

        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center 
          bg-gray-800 border border-gray-700 transition-all duration-300 relative
          ${isHovered ? "border-white/30 shadow-lg" : ""}`}
        >
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

        <div className="absolute -top-2 -right-2">
          <div className={`bg-gradient-to-r ${domainColor} text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg border border-white/20`}>
            {skill.level}
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <h4 className={`font-medium text-sm transition-all duration-300 ${isHovered ? "text-white" : "text-gray-300"}`}>
          {skill.name}
        </h4>

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