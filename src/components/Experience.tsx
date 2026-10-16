import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    company: 'Ethovise Tech Consultancy',
    role: 'AI/ML Intern',
    duration: 'Jan 2026 – Jul 2026',
    location: 'Pune, India',
    category: 'AI / Machine Learning',
    current: true,
    description: [
      'Worked on OCR-based text extraction to process scanned legal doc. and convert unstructured content into machine-readable text.',
      'Fine-tuned the YOLOv8 model for object detection to identify charts and tables in legal documents.',
      'Contributed to a RAG pipeline involving text chunking, embedding generation, and vector db storage for efficient semantic retrieval.',
      ' Supported context-aware question answering over legal doc. by retrieving relevant passages and using LLMs to generate responses',
    ],
    technologies: ['Python', 'OCR', 'YOLOv8', 'RAG', 'Vector DB', 'LLMs'],
  },
  {
    company: 'BTD Service India',
    role: 'Data Scientist Intern',
    duration: 'Mar 2025 – Aug 2025',
    location: 'Pune, India',
    category: 'Data Science',
    current: false,
    description: [
      'Developed an OCR-based document digitization solution using Python to extract text from scanned PDF documents.',
      'Developed a real-world Hotel Menu Card Analysis solution to extract menu items and prices from scanned menu cards using OCR.',
      'Processed unstructured menu-card content and converted extracted data into structured format for analysis.',
    ],
    technologies: ['Python', 'OCR', 'Data Extraction', 'Data Processing'],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background/95 to-background section-padding"
    >
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px]"
        />
      </div>

      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="My Professional Journey"
        />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 mt-5 max-w-2xl text-center"
        >
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Building practical AI solutions through hands-on experience
            in machine learning, document intelligence, and data processing.
          </p>
          <div className="mx-auto mt-5 h-1 w-20 overflow-hidden rounded-full bg-primary/20">
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full w-full rounded-full bg-primary"
            />
          </div>
        </motion.div>

        {/* Animated timeline */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-8 left-5 top-8 w-px overflow-hidden bg-border/50 sm:left-7">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
              className="h-full w-full bg-gradient-to-b from-primary via-violet-500 to-primary/10"
            />
          </div>

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 45 : -45,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 12,
                    delay: index * 0.18 + 0.15,
                  }}
                  className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_20px_rgba(139,92,246,0.18)] sm:left-2 sm:h-12 sm:w-12"
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  >
                    <Briefcase size={19} className="text-primary" />
                  </motion.div>
                </motion.div>

                {/* Card with animated gradient border */}
                <motion.article
                  whileHover={{ y: -6, scale: 1.005 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl p-px"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-violet-500/10 to-primary/20 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card/90 shadow-xl shadow-black/10 backdrop-blur-xl">
                    {/* Hover highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-violet-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative p-5 sm:p-7">
                      {/* Category and date */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
                          <Sparkles size={13} />
                          {exp.category}
                        </span>

                        {exp.current && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Most Recent
                          </span>
                        )}
                      </div>

                      {/* Role and company */}
                      <div className="mt-5 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                            {exp.role}
                          </h3>
                          <p className="mt-2 text-base font-semibold text-primary/90 sm:text-lg">
                            {exp.company}
                          </p>
                        </div>

                        <motion.div
                          whileHover={{ rotate: 45, scale: 1.12 }}
                          className="hidden rounded-xl border border-border/60 bg-background/70 p-3 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary sm:block"
                        >
                          <ArrowUpRight size={20} />
                        </motion.div>
                      </div>

                      {/* Metadata */}
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <CalendarDays size={15} className="text-primary" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={15} className="text-primary" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Animated divider */}
                      <div className="my-6 h-px w-full overflow-hidden bg-border/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: index * 0.18 + 0.3,
                          }}
                          className="h-full bg-gradient-to-r from-primary via-violet-500 to-transparent"
                        />
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3.5">
                        {exp.description.map((item, itemIndex) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.18 + itemIndex * 0.12,
                            }}
                            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-[15px]"
                          >
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.7)]" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technology pills */}
                      <div className="mt-7">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.35,
                                delay:
                                  index * 0.18 + techIndex * 0.06,
                              }}
                              whileHover={{
                                y: -3,
                                scale: 1.05,
                              }}
                              className="cursor-default rounded-lg border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;