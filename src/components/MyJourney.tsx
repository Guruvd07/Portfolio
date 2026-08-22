import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MyJourney: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.45,
    once: false,
  });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isInView) {
      // Start from the beginning every time the section enters the viewport
      video.currentTime = 0;

      video.play().catch(() => {
        // Browser may block autoplay; user can press play manually
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isInView]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden bg-background pt-16 pb-4 md:pt-20 md:pb-10"
          >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
      {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
          BEHIND THE BUILDER
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            From Ideas to Impact
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            From learning and experimenting to building intelligent,
            production-ready systems.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.98 }
          }
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/30 shadow-2xl shadow-blue-500/10">
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-blue-400/20 pointer-events-none z-10" />

            <video
              ref={videoRef}
              className="block w-full h-auto aspect-video object-contain bg-black"
              src="https://res.cloudinary.com/evummkho/video/upload/v1787294159/1787293964661791.mov"
              muted
              playsInline
              preload="metadata"
              controls
            />
          </div>
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-3"
        >
          A glimpse into my journey, experiences, and evolution in technology.
        </motion.p>
      </div>
    </section>
  );
};

export default MyJourney;