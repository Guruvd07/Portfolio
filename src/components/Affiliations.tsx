import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const organizations = [
  {
    name: '10X - Coding Ninjas Club MITAOE',
    role: 'CCO - Campus Creative Officer',
    icon: Briefcase,
    category: 'Technical Community',
    description:
      'Contributing to the Coding Ninjas campus community through creative initiatives, collaboration, and opportunities for innovation.',
    number: '01',
  },
  {
    name: 'TEDx Club MITAOE',
    role: 'Social Media Manager',
    icon: GraduationCap,
    category: 'Campus Community',
    description:
      'Supporting social media campaigns to promote TEDx events, engage audiences, and share ideas worth spreading.',
    number: '02',
  },
];

const Affiliations: React.FC = () => {
  return (
    <section
      id="affiliations"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background/95 to-background section-padding"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]"
        />
      </div>

      <div className="section-container">
        <SectionHeading
          title="Affiliations"
          subtitle="Leadership, Community & Collaboration"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 mt-5 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base"
        >
          My involvement in campus communities, bringing people together
          through creativity, communication, and collaborative initiatives.
        </motion.p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {organizations.map((org, index) => {
            const Icon = org.icon;

            return (
              <motion.article
                key={org.name}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -7 }}
                className="group relative rounded-2xl p-px"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/60 via-violet-500/10 to-primary/20 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-card/90 p-6 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-7">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 250 }}
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]"
                      >
                        <Icon size={25} />
                      </motion.div>

                      <span className="select-none text-4xl font-bold tracking-tight text-foreground/[0.07] transition-colors duration-300 group-hover:text-primary/20">
                        {org.number}
                      </span>
                    </div>

                    <div className="mt-7">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                        <Sparkles size={12} />
                        {org.category}
                      </span>

                      <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {org.name}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-primary/90">
                        {org.role}
                      </p>

                      <div className="my-5 h-px w-full bg-gradient-to-r from-primary/40 via-border/70 to-transparent">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.18 + 0.25,
                          }}
                          style={{ transformOrigin: 'left' }}
                          className="h-full bg-gradient-to-r from-primary to-violet-400"
                        />
                      </div>

                      <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                        {org.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                        <span>Campus involvement</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;