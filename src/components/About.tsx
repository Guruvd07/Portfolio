"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Modern Phosphor Icons (replacing old icons)
import {
  Brain,
  GlobeHemisphereWest,
  Lightning,
  Scan,
  MicrophoneStage,
  Robot,
  Function,
  ChartLine,
  TrendUp,
  RocketLaunch,
  Gauge,
  Circuitry,
  TextAlignLeft,
  Leaf,
  Database as DBModern,
  Plugs,
  MagicWand
} from "@phosphor-icons/react";



// React Icons
import { BsLightningCharge } from "react-icons/bs";
import SectionHeading from "./SectionHeading";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setShouldAnimate(true);
    else {
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
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animations
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.05, duration: 0.4, type: "spring", stiffness: 100 },
    }),
  };

  // -------------------------
  // MODERN ICON SKILL CATEGORIES
  // -------------------------
  const skillCategories = [
    {
      name: "Data Engineering",
      icon: <GlobeHemisphereWest size={22} weight="duotone" />,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { icon: <TrendUp size={24} weight="duotone" />, name: "Apache Kafka", color: "bg-orange-100 text-orange-600" },
        { icon: <TrendUp size={24} weight="duotone" />, name: "ETL Pipelines", color: "bg-orange-100 text-orange-600" },
        { icon: <GlobeHemisphereWest size={24} weight="duotone" />, name: "REST API Extraction", color: "bg-blue-100 text-blue-600" },
        { icon: <Robot size={24} weight="duotone" />, name: "Web Scraping", color: "bg-emerald-100 text-emerald-600" },
      ],
    },
  
    {
      name: "Data Analysis",
      icon: <ChartLine size={22} weight="duotone" />,
      color: "from-cyan-600 to-sky-600",
      skills: [
        { icon: <ChartLine size={24} weight="duotone" />, name: "EDA", color: "bg-blue-100 text-blue-600" },
        { icon: <ChartLine size={24} weight="duotone" />, name: "Power BI", color: "bg-orange-100 text-orange-600" },
        { icon: <ChartLine size={24} weight="duotone" />, name: "Pandas", color: "bg-red-100 text-red-600" },
        { icon: <Function size={24} weight="duotone" />, name: "NumPy", color: "bg-emerald-100 text-emerald-600" },
        { icon: <ChartLine size={24} weight="duotone" />, name: "Statistical Analysis", color: "bg-yellow-100 text-yellow-600" },
      ],
    },
  
    {
      name: "Machine Learning",
      icon: <Brain size={22} weight="duotone" />,
      color: "from-indigo-600 to-purple-600",
      skills: [
        { icon: <Brain size={24} weight="duotone" />, name: "Scikit-Learn", color: "bg-blue-100 text-blue-600" },
        { icon: <TrendUp size={24} weight="duotone" />, name: "Predictive Modeling", color: "bg-emerald-100 text-emerald-600" },
        { icon: <Gauge size={24} weight="duotone" />, name: "Model Evaluation", color: "bg-yellow-100 text-yellow-600" },
        { icon: <RocketLaunch size={24} weight="duotone" />, name: "API-based Deployment", color: "bg-red-100 text-red-600" },
      ],
    },
  
    {
      name: "Deep Learning & NLP",
      icon: <Lightning size={22} weight="duotone" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { icon: <Circuitry size={24} weight="duotone" />, name: "ANN", color: "bg-purple-100 text-purple-600" },
        { icon: <Circuitry size={24} weight="duotone" />, name: "CNN", color: "bg-blue-100 text-blue-600" },
        { icon: <Lightning size={24} weight="duotone" />, name: "Transfer Learning", color: "bg-orange-100 text-orange-600" },
        { icon: <Robot size={24} weight="duotone" />, name: "Transformers", color: "bg-purple-100 text-purple-600" },
        { icon: <MicrophoneStage size={24} weight="duotone" />, name: "Whisper ASR", color: "bg-blue-100 text-blue-600" },
        { icon: <Robot size={24} weight="duotone" />, name: "Hugging Face", color: "bg-yellow-100 text-yellow-600" },
      ],
    },
  
    {
      name: "Generative AI & RAG",
      icon: <MagicWand size={22} weight="duotone" />,
      color: "from-fuchsia-500 to-rose-600",
      skills: [
        { icon: <MagicWand size={24} weight="duotone" />, name: "RAG", color: "bg-pink-100 text-pink-600" },
        { icon: <Brain size={24} weight="duotone" />, name: "Semantic Embeddings", color: "bg-indigo-100 text-indigo-600" },
        { icon: <DBModern size={24} weight="duotone" />, name: "FAISS (Vector DB)", color: "bg-teal-100 text-teal-600" },
        { icon: <Robot size={24} weight="duotone" />, name: "LLMs ", color: "bg-purple-100 text-purple-600" },
      ],
    },

    {
      name: "Agentic AI",
      icon: <MagicWand size={22} weight="duotone" />,
      color: "from-fuchsia-500 to-rose-600",
      skills: [
        {
          icon: <Robot size={24} weight="duotone" />,
          name: "AutoML Agents",
          color: "bg-pink-100 text-pink-600"
        },
        {
          icon: <Brain size={24} weight="duotone" />,
          name: "Tool Calling",
          color: "bg-indigo-100 text-indigo-600"
        },
        {
          icon: <MagicWand size={24} weight="duotone" />,
          name: "LLM Orchestration",
          color: "bg-teal-100 text-teal-600"
        },
        {
          icon: <DBModern size={24} weight="duotone" />,
          name: "Multi-Agent Systems",
          color: "bg-purple-100 text-purple-600"
        },
      ],
    },
    
  
    {
      name: "Backend & APIs",
      icon: <Plugs size={22} weight="duotone" />,
      color: "from-slate-600 to-gray-700",
      skills: [
        { icon: <Plugs size={24} weight="duotone" />, name: "FastAPI", color: "bg-slate-100 text-slate-600" },
        { icon: <RocketLaunch size={24} weight="duotone" />, name: "REST API Design", color: "bg-blue-100 text-blue-600" },
        { icon: <Gauge size={24} weight="duotone" />, name: "Swagger UI Testing", color: "bg-emerald-100 text-emerald-600" },
      ],
    },
  
    {
      name: "Database",
      icon: <DBModern size={22} weight="duotone" />,
      color: "from-emerald-500 to-teal-600",
      skills: [
        { icon: <DBModern size={24} weight="duotone" />, name: "SQL", color: "bg-teal-100 text-teal-600" },
        { icon: <DBModern size={24} weight="duotone" />, name: "MySQL", color: "bg-blue-50 text-blue-500" },
        { icon: <Leaf size={24} weight="duotone" />, name: "MongoDB", color: "bg-green-100 text-green-600" },
      ],
    },
  ];
  

  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-b from-background to-background/95 relative overflow-hidden py-20">

      {/* Parallax background */}
      <motion.div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl" style={{ y: y1, opacity }} />
      <motion.div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl" style={{ y: y2, opacity }} />

      <div className="section-container relative z-10">

        {/* Horizontal skill row (modern UI) */}
        <motion.div className="relative mb-20 overflow-hidden py-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg" />
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-20" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-20" />

          <motion.div
            className="flex gap-10 items-center px-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <motion.div key={index} className="flex flex-col items-center min-w-[90px]" whileHover={{ scale: 1.15, y: -8 }}>
                <div className={`w-16 h-16 rounded-full ${skill.color} flex items-center justify-center shadow-xl border border-white/10`}>
                  {skill.icon}
                </div>
                <div className="text-sm text-center w-[85px] mt-3 text-gray-300 font-medium truncate">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Me */}
        <motion.div initial="hidden" animate={shouldAnimate ? "visible" : "hidden"} variants={containerVariants}>
          <SectionHeading title="About Me" subtitle="My Story" />
        </motion.div>

        {/* Main content grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE TEXT */}
            <motion.div
              initial="hidden"
              animate={shouldAnimate ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="space-y-6 text-gray-300">

              <motion.p variants={fadeInUpVariants} custom={0} className="text-lg">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
              AI Engineer , Data Engineer, ML Engineer & Agentic AI Engineer
              </span>{" "}
              focused on building backend, production-ready intelligent systems using
              modern data pipelines, machine learning, LLMs and autonomous agents.
            </motion.p>

            <motion.p variants={fadeInUpVariants} custom={1}>
              My expertise in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-medium">
                Data Engineering
              </span>{" "}
              includes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 font-medium">
                ETL pipelines, REST API extraction, Kafka streaming, PDF/OCR ingestion,
                transformation pipelines and structured storage
              </span>{" "}
              to convert raw data into analytics- and ML-ready systems.
            </motion.p>

            <motion.p variants={fadeInUpVariants} custom={2}>
              I specialize in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 font-medium">
                ML Engineering, Deep Learning & NLP
              </span>{" "}
              using{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium">
                predictive modeling, feature engineering, transformers,
                model optimization and inference pipelines
              </span>{" "}
              to build scalable AI solutions.
            </motion.p>

            <motion.p variants={fadeInUpVariants} custom={3}>
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-medium">
                Generative AI and Agentic AI systems
              </span>{" "}
              using{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 font-medium">
                RAG, embeddings, vector databases, tool-calling, AutoML agents,
                workflow orchestration and LLM-powered autonomous agents
              </span>{" "}
              to deliver intelligent context-aware applications.
            </motion.p>

            <motion.p variants={fadeInUpVariants} custom={4}>
              I thrive in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 font-medium">
                real-world projects, hackathons and production environments
              </span>{" "}
              where I design and ship end-to-end systems that connect raw data,
              intelligent models, autonomous agents and business impact.
            </motion.p>

              {/* Button */}
              <motion.div variants={fadeInUpVariants} custom={4} className="pt-4">
                <a
                  href="#contact"
                  className="inline-block glass-morphism px-6 py-3 rounded-lg border border-primary/30 text-white font-medium hover:bg-primary/10 transition-colors group relative overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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

          {/* RIGHT SIDE INFO */}
          <div className="space-y-8">

            {/* Profile Overview */}
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
                  { label: "Current Role", value: "Data Scientist" },
                  { label: "Education", value: "Computer Science, B.Tech" },
                  { label: "Experience", value: "Ex - SDE Intern at BTD Service India" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="glass-morphism p-2 rounded-lg mr-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      <Brain size={18} weight="duotone" className="text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-morphism rounded-xl p-6 border border-white/5 shadow-xl"
            >
              <h4 className="text-sm uppercase text-gray-400 mb-5 flex items-center">
                Core Expertise
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
                      <div className={`p-1.5 rounded-md bg-gradient-to-br ${category.color} mr-2 flex items-center justify-center`}>
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
  );
};

export default About;
