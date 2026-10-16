"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Concept icons (Lucide) — modern, cohesive set
import {
  Brain,
  Bot,
  Database,
  Plug,
  LineChart,
  Wand2,
  Code2,
  Sparkles,
  Workflow,
  Languages,
  SearchCode,
  BrainCircuit,
  Boxes,
  BarChart3,
  Terminal,
  Sigma,
} from "lucide-react";

// Real brand logos for named tools/tech — modern brand set
import {
  SiPython,
  SiMysql,
  SiFastapi,
  SiHuggingface,
  SiGithub,
  SiGooglecolab,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiPlotly,
  SiStreamlit,
  SiGit,
  SiJupyter,
} from "react-icons/si";

// VS Code icon
import { VscVscode } from "react-icons/vsc";

// React Icons — modern accent
import { BsLightningCharge } from "react-icons/bs";
import { TbBrandOpenai, TbVectorTriangle, TbApi, TbBinaryTree } from "react-icons/tb";
import { LuBrainCog, LuNetwork, LuLayers3, LuFingerprint } from "react-icons/lu";
import { HiOutlineCpuChip } from "react-icons/hi2";

import SectionHeading from "./SectionHeading";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      const timer = setTimeout(() => setShouldAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Parallax background effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Animations
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },

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
  };

  const iconStroke = 1.75;

  // -------------------------
  // SKILL CATEGORIES — modern icon set
  // -------------------------
  const skillCategories = [
    {
      name: "Machine Learning & DL",
      icon: <Brain size={22} strokeWidth={iconStroke} />,
      color: "from-indigo-600 to-purple-600",

      skills: [
        {
          icon: <SiScikitlearn size={16} color="#F7931E" />,
          name: "Feature Engineering",
          hex: "#F7931E",
        },

        {
          icon: <LuNetwork size={16} color="#3b82f6" />,
          name: "Neural Networks",
          hex: "#3b82f6",
        },

        {
          icon: <LuLayers3 size={16} color="#8b5cf6" />,
          name: "Transformers",
          hex: "#8b5cf6",
        },

        {
          icon: <LuFingerprint size={16} color="#ec4899" />,
          name: "Embeddings",
          hex: "#ec4899",
        },
      ],
    },

    {
      name: "Generative AI & NLP",
      icon: <Wand2 size={22} strokeWidth={iconStroke} />,
      color: "from-fuchsia-500 to-rose-600",

      skills: [
        {
          icon: <TbBrandOpenai size={16} color="#a855f7" />,
          name: "LLMs",
          hex: "#a855f7",
        },

        {
          icon: <Workflow
              size={16}
              strokeWidth={iconStroke}
              color="#f43f5e"
            />,
          name: "RAG",
          hex: "#f43f5e",
        },

        {
          icon: <Languages
              size={16}
              strokeWidth={iconStroke}
              color="#3b82f6"
            />,
          name: "NLP",
          hex: "#3b82f6",
        },

        {
          icon: <TbBinaryTree size={16} color="#10b981" />,
          name: "Tokenization",
          hex: "#10b981",
        },

        {
          icon: <SearchCode
              size={16}
              strokeWidth={iconStroke}
              color="#14b8a6"
            />,
          name: "Semantic Search",
          hex: "#14b8a6",
        },
      ],
    },

    {
      name: "Agentic AI Systems",
      icon: <Bot size={22} strokeWidth={iconStroke} />,
      color: "from-purple-500 to-pink-600",

      skills: [
        {
          icon: <Bot
              size={16}
              strokeWidth={iconStroke}
              color="#ec4899"
            />,
          name: "AI Agents",
          hex: "#ec4899",
        },

        {
          icon: <LuNetwork size={16} color="#8b5cf6" />,
          name: "Multi-Agent Systems",
          hex: "#8b5cf6",
        },

        {
          icon: <LuBrainCog size={16} color="#6366f1" />,
          name: "Agent Memory",
          hex: "#6366f1",
        },

        {
          icon: <TbApi size={16} color="#14b8a6" />,
          name: "Tool Calling",
          hex: "#14b8a6",
        },
      ],
    },

    {
      name: "Vector Search & DB",
      icon: <Database size={22} strokeWidth={iconStroke} />,
      color: "from-emerald-500 to-teal-600",

      skills: [
        {
          icon: <Boxes
              size={16}
              strokeWidth={iconStroke}
              color="#14b8a6"
            />,
          name: "FAISS",
          hex: "#14b8a6",
        },

        {
          icon: <TbVectorTriangle size={16} color="#6366f1" />,
          name: "Sentence Transformers",
          hex: "#6366f1",
        },

        {
          icon: <Database
              size={16}
              strokeWidth={iconStroke}
              color="#8b5cf6"
            />,
          name: "Vector Databases",
          hex: "#8b5cf6",
        },

        {
          icon: <SiMysql size={16} color="#4479A1" />,
          name: "MySQL",
          hex: "#4479A1",
        },
      ],
    },

    {
      name: "AI Engineering & APIs",
      icon: <Plug size={22} strokeWidth={iconStroke} />,
      color: "from-slate-600 to-gray-700",

      skills: [
        {
          icon: <SiFastapi size={16} color="#009688" />,
          name: "FastAPI",
          hex: "#009688",
        },

        {
          icon: <TbApi size={16} color="#3b82f6" />,
          name: "REST APIs",
          hex: "#3b82f6",
        },

        {
          icon: <SiHuggingface size={16} color="#FFD21E" />,
          name: "Hugging Face",
          hex: "#FFD21E",
        },

        {
          icon: <SiGithub size={16} color="#e5e7eb" />,
          name: "Git & GitHub",
          hex: "#e5e7eb",
        },
      ],
    },

    {
      name: "Data Analysis",
      icon: <LineChart size={22} strokeWidth={iconStroke} />,
      color: "from-cyan-600 to-sky-600",

      skills: [
        {
          icon: <SiPandas size={16} color="#150458" />,
          name: "EDA",
          hex: "#5b8def",
        },

        {
          icon: <SiNumpy size={16} color="#4DABCF" />,
          name: "Data Cleaning",
          hex: "#4DABCF",
        },

        {
          icon: <SiPlotly size={16} color="#3F4F75" />,
          name: "Data Visualization",
          hex: "#f97316",
        },

        {
          icon: <Sigma
              size={16}
              strokeWidth={iconStroke}
              color="#eab308"
            />,
          name: "Statistical Analysis",
          hex: "#eab308",
        },
      ],
    },

    {
      name: "Languages & Tools",
      icon: <Code2 size={22} strokeWidth={iconStroke} />,
      color: "from-blue-500 to-indigo-600",

      skills: [
        {
          icon: <SiPython size={16} color="#3776AB" />,
          name: "Python",
          hex: "#3776AB",
        },

        {
          icon: <Terminal
              size={16}
              strokeWidth={iconStroke}
              color="#14b8a6"
            />,
          name: "SQL",
          hex: "#14b8a6",
        },

        {
          icon: <SiGooglecolab size={16} color="#F9AB00" />,
          name: "Google Colab",
          hex: "#F9AB00",
        },

        {
          icon: <VscVscode size={16} color="#007ACC" />,
          name: "VS Code",
          hex: "#007ACC",
        },
      ],
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-background to-background/95 relative overflow-hidden py-20"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"
        style={{
          y: y1,
          opacity,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"
        style={{
          y: y2,
          opacity,
        }}
      />

      <div className="section-container relative z-10">

        {/* About Me */}
        <motion.div
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12"
        >
          <SectionHeading
            title="About Me"
            subtitle="My Story"
          />
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* LEFT SIDE TEXT */}
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={containerVariants}
            className="md:col-span-5 md:self-start"
          >
            <div className="space-y-6 text-gray-300">

              <motion.p
                variants={fadeInUpVariants}
                custom={0}
                className="text-lg"
              >
                I'm an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 font-semibold">
                  AI/ML Engineer
                </span>{" "}
                focused on building production-ready Generative AI, LLM, RAG,
                and NLP systems that turn unstructured data and documents into
                intelligent, context-aware applications.
              </motion.p>

              <motion.p
                variants={fadeInUpVariants}
                custom={1}
              >
                My core strength lies in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-400 font-medium">
                  Machine Learning & Deep Learning
                </span>{" "}
                — using{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 font-medium">
                  feature engineering, neural networks, transformers and
                  embeddings
                </span>{" "}
                to build and evaluate models that generalize well in the real
                world.
              </motion.p>

              <motion.p
                variants={fadeInUpVariants}
                custom={2}
              >
                I build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300 font-medium">
                  Generative AI and Agentic AI systems
                </span>{" "}
                using{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400 font-medium">
                  RAG, semantic search, vector databases (FAISS), tool-calling,
                  agent memory and multi-agent, LLM-orchestrated workflows
                </span>{" "}
                to deliver autonomous, context-aware applications.
              </motion.p>

              <motion.p
                variants={fadeInUpVariants}
                custom={3}
              >
                On the engineering side, I ship{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 font-medium">
                  API-driven AI systems, LLM evaluation platforms and OCR-based
                  document intelligence solutions
                </span>{" "}
                using{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-400 font-medium">
                  FastAPI, PostgreSQL/MySQL and Hugging Face
                </span>{" "}
                to move models from notebook to production.
              </motion.p>

              <motion.p
                variants={fadeInUpVariants}
                custom={4}
              >
                I thrive in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-400 font-medium">
                  hackathons, real-world projects and production environments
                </span>{" "}
                — as a Smart India Hackathon National Finalist and winner of
                multiple technical competitions, I love shipping end-to-end AI
                systems that connect data, models, agents and business impact.
              </motion.p>

              {/* Button */}
              <motion.div
                variants={fadeInUpVariants}
                custom={4}
                className="pt-4"
              >
                <a
                  href="#contact"
                  className="inline-block glass-morphism px-6 py-3 rounded-lg border border-primary/30 text-white font-medium hover:bg-primary/10 transition-colors group relative overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault();

                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Let's Connect

                    <BsLightningCharge className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE INFO — pulled up slightly to align with left column top */}
          <div className="space-y-8 md:col-span-7 md:self-start md:-mt-2">

            {/* Profile Overview */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                shouldAnimate
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="glass-morphism rounded-xl p-6 space-y-6 border border-white/5 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Profile Overview
                </span>

                <div className="h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 flex-grow ml-4" />
              </h3>

              <div className="space-y-4">
              {[
                {
                  label: "Current Role",
                  value: "AI/ML Engineer",
                },
                {
                  label: "Education",
                  value:
                    "B.Tech, Computer Engineering — MIT Academy of Engineering",
                },
                {
                  label: "Experience",
                  value: "AI/ML Intern at Ethovise Tech Consultancy",
                },
                {
                  label: "Previous Experience",
                  value: "Data Scientist Intern at BTD Service India",
                },

                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={
                      shouldAnimate
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {
                            opacity: 0,
                            x: -20,
                          }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    <div className="glass-morphism p-2 rounded-lg mr-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      <HiOutlineCpuChip
                        size={18}
                        className="text-primary"
                      />
                    </div>

                    <div>
                      <div className="text-sm text-gray-400">
                        {item.label}
                      </div>

                      <div className="font-medium">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill Categories */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                shouldAnimate
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="glass-morphism rounded-xl p-6 border border-white/5 shadow-xl"
            >
              <h4 className="text-sm uppercase text-gray-400 mb-5 flex items-center">
                Core Expertise

                <div className="h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent flex-grow ml-4" />
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="space-y-3"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={
                      shouldAnimate
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {
                            opacity: 0,
                            y: 20,
                          }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + categoryIndex * 0.1,
                    }}
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-br ${category.color} mr-2 flex items-center justify-center text-white`}
                      >
                        {category.icon}
                      </div>

                      <h5 className="font-medium text-sm">
                        {category.name}
                      </h5>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          variants={skillItemVariants}
                          custom={skillIndex}
                          className="inline-flex items-center gap-1.5 glass-morphism px-3 py-1 rounded-full text-xs border border-white/5 hover:border-primary/30 transition-colors cursor-default"
                          whileHover={{
                            y: -3,
                            boxShadow: `0 10px 25px -6px ${skill.hex}66`,
                          }}
                        >
                          <span className="inline-flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5">
                            {skill.icon}
                          </span>

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
  );
};

export default About;