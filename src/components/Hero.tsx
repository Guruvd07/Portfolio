import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >

      {/* =========================================================
          MOBILE HERO
          ========================================================= */}

      <div className="absolute inset-0 z-0 overflow-hidden md:hidden">

        <motion.img
          src="/lovable-uploads/hero-mobile.png"
          alt="Guru Dahiphale - AI/ML Engineer"
          initial={{
            x: '0%',
            scale: 1.01,
          }}
          animate={{
            x: ['0%', '-32%', '0%'],
            scale: [1.01, 1.025, 1.01],
          }}
          transition={{
            x: {
              duration: 22,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            },
            scale: {
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="absolute left-0 top-0 h-full w-auto max-w-none"
        />

        {/* Mobile moving light */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-[40%]
            top-0
            h-full
            w-[45%]
            rotate-[12deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.035]
            to-transparent
            blur-2xl
          "
          animate={{
            x: ['0vw', '180vw'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

      </div>


      {/* =========================================================
          DESKTOP
          ========================================================= */}

      <div className="absolute inset-0 z-0 hidden md:block">

        {/* =======================================================
            BACKGROUND IMAGE
            ======================================================= */}

        <motion.img
          src="/lovable-uploads/hero-desktop.png"
          alt="Guru Dahiphale"
          initial={{
            opacity: 0,
            scale: 1.035,
          }}
          animate={{
            opacity: 1,
            scale: [1.035, 1.015, 1.035],
          }}
          transition={{
            opacity: {
              duration: 1.2,
              ease: 'easeOut',
            },
            scale: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          style={{
            objectPosition: 'center 20%',
          }}
        />


        {/* =======================================================
            CINEMATIC LIGHT SWEEP
            ======================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-[30%]
            top-[-20%]
            z-[1]
            h-[150%]
            w-[25%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-blue-200/[0.045]
            to-transparent
            blur-3xl
          "
          animate={{
            x: ['0vw', '155vw'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'linear',
          }}
        />


        {/* =======================================================
            SECOND LIGHT SWEEP
            ======================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-[35%]
            top-[-20%]
            z-[1]
            h-[150%]
            w-[18%]
            -rotate-[16deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.025]
            to-transparent
            blur-3xl
          "
          animate={{
            x: ['0vw', '-145vw'],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            repeatDelay: 7,
            ease: 'linear',
          }}
        />


        {/* =======================================================
            FLOATING AMBIENT GLOW - LEFT
            ======================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -left-[12%]
            top-[8%]
            z-[1]
            h-[55%]
            w-[38%]
            rounded-full
            bg-blue-400/[0.035]
            blur-[100px]
          "
          animate={{
            x: [0, 70, 0],
            y: [0, 35, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =======================================================
            FLOATING AMBIENT GLOW - RIGHT
            ======================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-[12%]
            bottom-[0%]
            z-[1]
            h-[55%]
            w-[38%]
            rounded-full
            bg-indigo-400/[0.035]
            blur-[110px]
          "
          animate={{
            x: [0, -65, 0],
            y: [0, -30, 0],
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />


        {/* =======================================================
            PORTRAIT LIGHT
            Subtle pulse behind person
            ======================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[52%]
            top-[25%]
            z-[1]
            h-[55%]
            w-[25%]
            -translate-x-1/2
            rounded-full
            bg-white/[0.018]
            blur-[80px]
          "
          animate={{
            scale: [0.95, 1.08, 0.95],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* =======================================================
            LEFT CONTENT
            ======================================================= */}

        <div
          className="
            absolute
            left-[4.3%]
            top-[28%]
            z-[5]
            w-[36%]
          "
        >

          {/* -------------------------------------------------------
              INTRO
              ------------------------------------------------------- */}

          <div className="overflow-hidden">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: easeOut,
              }}
              className="
                mb-5
                text-[clamp(13px,1.15vw,21px)]
                font-medium
                tracking-[0.16em]
                text-white
              "
            >
              HI, I'M{' '}

              {/* COLORS ADDED: slow shifting gradient on name */}
              <motion.span
                className="font-bold underline underline-offset-4"
                animate={{
                  color: [
                    '#ffffff',
                    '#93c5fd',
                    '#c4b5fd',
                    '#67e8f9',
                    '#ffffff',
                  ],
                  textShadow: [
                    '0 0 0px rgba(147,197,253,0)',
                    '0 0 16px rgba(147,197,253,0.6)',
                    '0 0 16px rgba(196,181,253,0.6)',
                    '0 0 16px rgba(103,232,249,0.6)',
                    '0 0 0px rgba(147,197,253,0)',
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
              >
                GURU DAHIPHALE
              </motion.span>

            </motion.div>

          </div>


          {/* =======================================================
              HEADING
              ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.45,
            }}
          >

            {/* BUILDING */}

            <div className="overflow-hidden">

              {/* COLORS ADDED: slow gradient shimmer across BUILDING */}
              <motion.div
                initial={{
                  y: '100%',
                }}
                animate={{
                  y: '0%',
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  y: {
                    duration: 0.9,
                    delay: 0.5,
                    ease: easeOut,
                  },
                  backgroundPosition: {
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="
                  text-[clamp(44px,4.35vw,78px)]
                  font-black
                  uppercase
                  leading-[0.88]
                  tracking-[-0.045em]
                  bg-clip-text
                  text-transparent
                "
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, #ffffff 0%, #ffffff 35%, #93c5fd 50%, #ffffff 65%, #ffffff 100%)',
                  backgroundSize: '200% 100%',
                }}
              >
                BUILDING
              </motion.div>

            </div>


            {/* INTELLIGENT */}

            <div className="overflow-hidden">

              <motion.div
                initial={{
                  y: '100%',
                }}
                animate={{
                  y: '0%',
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.62,
                  ease: easeOut,
                }}
                className="
                  relative
                  text-[clamp(44px,4.35vw,78px)]
                  font-black
                  uppercase
                  leading-[0.88]
                  tracking-[-0.045em]
                  text-white
                "
              >
                {/* COLORS ADDED: slow color cycling on INTELLIGENT */}
                <motion.span
                  animate={{
                    color: [
                      '#ffffff',
                      '#bfdbfe',
                      '#ddd6fe',
                      '#a5f3fc',
                      '#ffffff',
                    ],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [0, 0.25, 0.5, 0.75, 1],
                  }}
                >
                  INTELLIGENT
                </motion.span>

                {/* Very subtle moving highlight */}

                <motion.span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-[20%]
                    w-[8%]
                    skew-x-[-18deg]
                    bg-white/[0.13]
                    blur-md
                  "
                  animate={{
                    x: ['0%', '1450%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: 'easeInOut',
                  }}
                />

                {/* Soft pulsing color glow behind INTELLIGENT */}
                <motion.span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    text-[clamp(44px,4.35vw,78px)]
                    font-black
                    uppercase
                    leading-[0.88]
                    tracking-[-0.045em]
                    blur-[18px]
                    opacity-0
                  "
                  animate={{
                    color: [
                      '#93c5fd',
                      '#c4b5fd',
                      '#67e8f9',
                      '#93c5fd',
                    ],
                    opacity: [0, 0.4, 0, 0.4, 0],
                  }}
                  transition={{
                    color: {
                      duration: 16,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    opacity: {
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  aria-hidden="true"
                >
                  INTELLIGENT
                </motion.span>

              </motion.div>

            </div>


            {/* SYSTEMS */}

            <div className="overflow-hidden">

              {/* COLORS ADDED: slow gradient shimmer across SYSTEMS */}
              <motion.div
                initial={{
                  y: '100%',
                }}
                animate={{
                  y: '0%',
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                }}
                transition={{
                  y: {
                    duration: 0.9,
                    delay: 0.74,
                    ease: easeOut,
                  },
                  backgroundPosition: {
                    duration: 16,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="
                  text-[clamp(44px,4.35vw,78px)]
                  font-black
                  uppercase
                  leading-[0.88]
                  tracking-[-0.045em]
                  bg-clip-text
                  text-transparent
                "
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, #ffffff 0%, #ffffff 35%, #c4b5fd 50%, #ffffff 65%, #ffffff 100%)',
                  backgroundSize: '200% 100%',
                }}
              >
                SYSTEMS
              </motion.div>

            </div>

          </motion.div>


          {/* =======================================================
              DECORATIVE LINE
              ======================================================= */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 55,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 1.15,
              ease: 'easeOut',
            }}
            className="
              relative
              mt-5
              h-[2px]
              overflow-hidden
              bg-white/50
            "
          >

            <motion.span
              className="
                absolute
                inset-y-0
                left-0
                w-5
                bg-white
                blur-[1px]
              "
              animate={{
                x: ['-30px', '70px'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />

          </motion.div>


          {/* =======================================================
              SKILLS
              ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: easeOut,
            }}
            className="
              mt-5
              flex
              items-center
              whitespace-nowrap
              text-[clamp(14px,1.25vw,23px)]
              font-medium
              tracking-wide
              text-white
            "
          >

            {/* COLORS ADDED: each skill slowly cycles through a color */}
            <motion.span
              animate={{
                color: [
                  '#ffffff',
                  '#93c5fd',
                  '#ffffff',
                ],
                textShadow: [
                  '0 0 0px rgba(147,197,253,0)',
                  '0 0 12px rgba(147,197,253,0.5)',
                  '0 0 0px rgba(147,197,253,0)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                textShadow: '0 0 18px rgba(147,197,253,0.9)',
              }}
            >
              AI/ML
            </motion.span>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
                color: ['#93c5fd', '#c4b5fd', '#93c5fd'],
              }}
              transition={{
                opacity: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                color: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="mx-3"
            >
              |
            </motion.span>

            <motion.span
              animate={{
                color: [
                  '#ffffff',
                  '#c4b5fd',
                  '#ffffff',
                ],
                textShadow: [
                  '0 0 0px rgba(196,181,253,0)',
                  '0 0 12px rgba(196,181,253,0.5)',
                  '0 0 0px rgba(196,181,253,0)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 1.5,
                ease: 'easeInOut',
              }}
              whileHover={{
                textShadow: '0 0 18px rgba(196,181,253,0.9)',
              }}
            >
              GenAI
            </motion.span>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
                color: ['#c4b5fd', '#67e8f9', '#c4b5fd'],
              }}
              transition={{
                opacity: {
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.4,
                  ease: 'easeInOut',
                },
                color: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                },
              }}
              className="mx-3"
            >
              |
            </motion.span>

            <motion.span
              animate={{
                color: [
                  '#ffffff',
                  '#67e8f9',
                  '#ffffff',
                ],
                textShadow: [
                  '0 0 0px rgba(103,232,249,0)',
                  '0 0 12px rgba(103,232,249,0.5)',
                  '0 0 0px rgba(103,232,249,0)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 3,
                ease: 'easeInOut',
              }}
              whileHover={{
                textShadow: '0 0 18px rgba(103,232,249,0.9)',
              }}
            >
              Agentic AI
            </motion.span>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
                color: ['#67e8f9', '#93c5fd', '#67e8f9'],
              }}
              transition={{
                opacity: {
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.8,
                  ease: 'easeInOut',
                },
                color: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                },
              }}
              className="mx-3"
            >
              |
            </motion.span>

            <motion.span
              animate={{
                color: [
                  '#ffffff',
                  '#93c5fd',
                  '#ffffff',
                ],
                textShadow: [
                  '0 0 0px rgba(147,197,253,0)',
                  '0 0 12px rgba(147,197,253,0.5)',
                  '0 0 0px rgba(147,197,253,0)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4.5,
                ease: 'easeInOut',
              }}
              whileHover={{
                textShadow: '0 0 18px rgba(147,197,253,0.9)',
              }}
            >
              LLMs
            </motion.span>

          </motion.div>


          {/* =======================================================
              DESCRIPTION
              ======================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.45,
              ease: easeOut,
            }}
            className="
              mt-4
              max-w-[31vw]
              text-[clamp(13px,1.05vw,20px)]
              leading-relaxed
            "
          >
            {/* COLORS ADDED: soft slow color shift on description */}
            <motion.span
              animate={{
                color: [
                  'rgba(255,255,255,0.9)',
                  'rgba(191,219,254,0.95)',
                  'rgba(255,255,255,0.9)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Building Intelligent Systems with LLMs, RAG
              <br />
              &amp; AI Agents.
            </motion.span>
          </motion.p>

        </div>


        {/* =========================================================
            RIGHT CONTENT
            ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: easeOut,
          }}
          className="
            absolute
            right-[7.2%]
            top-[39%]
            z-[5]
            w-[20%]
            text-white
          "
        >

          {/* Heading */}

          <motion.div
            animate={{
              y: [0, -2, 0],
              color: [
                '#ffffff',
                '#bfdbfe',
                '#ffffff',
              ],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              color: {
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="
              uppercase
              text-[clamp(9px,0.82vw,16px)]
              font-semibold
              leading-[2]
              tracking-[0.38em]
            "
          >
            AI SOLUTIONS FOR
            <br />
            A SMARTER TOMORROW
          </motion.div>


          {/* Animated accent */}

          <div className="relative mt-6 mb-5 h-[3px] w-[76px] overflow-hidden bg-white/20">

            <motion.div
              className="absolute inset-y-0 left-0 w-8"
              animate={{
                x: ['-35px', '90px'],
                backgroundColor: [
                  '#93c5fd',
                  '#c4b5fd',
                  '#67e8f9',
                  '#93c5fd',
                ],
              }}
              transition={{
                x: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                },
                backgroundColor: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />

          </div>


          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: easeOut,
            }}
            className="
              text-[clamp(13px,1.05vw,20px)]
              leading-relaxed
            "
          >
            {/* COLORS ADDED: complementary slow color cycle */}
            <motion.span
              animate={{
                color: [
                  'rgba(255,255,255,0.9)',
                  'rgba(196,181,253,0.95)',
                  'rgba(255,255,255,0.9)',
                ],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            >
              Exploring. Building. Deploying.
              <br />
              Real-World AI Applications.
            </motion.span>
          </motion.p>

        </motion.div>

      </div>


      {/* =========================================================
          MOBILE BOTTOM GRADIENT
          ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[7]
          h-40
          bg-gradient-to-t
          from-black/75
          to-transparent
          md:hidden
        "
      />


      {/* =========================================================
          SOCIAL LINKS
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.7,
          ease: easeOut,
        }}
        className="
          absolute
          bottom-24
          left-8
          z-[10]
          flex
          space-x-3
          md:bottom-15
          md:left-14
        "
      >

        {/* GitHub */}

        <motion.a
          href="https://github.com/Guruvd07"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          animate={{
            y: [0, -2, 0],
            color: [
              '#9ca3af',
              '#93c5fd',
              '#9ca3af',
            ],
          }}
          whileHover={{
            y: -7,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            color: {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scale: {
              type: 'spring',
              stiffness: 400,
              damping: 20,
            },
          }}
          className="
            glass-morphism
            rounded-full
            p-3
            transition-all
            duration-300
            hover:bg-white/[0.08]
            hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]
          "
        >
          <Github size={20} />
        </motion.a>


        {/* LinkedIn */}

        <motion.a
          href="https://www.linkedin.com/in/guru-dahiphale-02862225b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          animate={{
            y: [0, -2, 0],
            color: [
              '#9ca3af',
              '#c4b5fd',
              '#9ca3af',
            ],
          }}
          whileHover={{
            y: -7,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              delay: 0.6,
              ease: 'easeInOut',
            },
            color: {
              duration: 8,
              repeat: Infinity,
              delay: 1.5,
              ease: 'easeInOut',
            },
            scale: {
              type: 'spring',
              stiffness: 400,
              damping: 20,
            },
          }}
          className="
            glass-morphism
            rounded-full
            p-3
            transition-all
            duration-300
            hover:bg-white/[0.08]
            hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]
          "
        >
          <Linkedin size={20} />
        </motion.a>


        {/* Instagram */}

        <motion.a
          href="https://www.instagram.com/guruu.d7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          animate={{
            y: [0, -2, 0],
            color: [
              '#9ca3af',
              '#67e8f9',
              '#9ca3af',
            ],
          }}
          whileHover={{
            y: -7,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              delay: 1.2,
              ease: 'easeInOut',
            },
            color: {
              duration: 8,
              repeat: Infinity,
              delay: 3,
              ease: 'easeInOut',
            },
            scale: {
              type: 'spring',
              stiffness: 400,
              damping: 20,
            },
          }}
          className="
            glass-morphism
            rounded-full
            p-3
            transition-all
            duration-300
            hover:bg-white/[0.08]
            hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]
          "
        >
          <Instagram size={20} />
        </motion.a>

      </motion.div>


      {/* =========================================================
          SCROLL INDICATOR
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-10
          right-6
          z-[10]
          md:right-10
        "
      >

        <a
          href="#about"
          aria-label="Scroll to About section"
          onClick={(e) => {
            e.preventDefault();

            document
              .getElementById('about')
              ?.scrollIntoView({
                behavior: 'smooth',
              });
          }}
          className="
            group
            flex
            flex-col
            items-center
            text-sm
            text-gray-400
            transition-colors
            duration-300
            hover:text-white
          "
        >

          <span className="mb-2">
            Scroll Down
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown size={18} />
          </motion.div>

        </a>

      </motion.div>


      {/* =========================================================
          EDGE VIGNETTE
          ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[4]
          bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.25)_100%)]
        "
      />

    </section>
  );
};

export default Hero;