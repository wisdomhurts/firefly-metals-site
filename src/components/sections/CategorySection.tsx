"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CategorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 px-6 md:px-12 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/[0.05] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-400">Defining a new category</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">The Exploration</span>
            <br />
            <span className="text-gradient-accent">Intelligence Platform</span>
          </h2>

          <p className="mt-6 text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            The operating system for exploration storytelling.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500"
          >
            {[
              "Data ingestion",
              "AI structuring",
              "Map generation",
              "Drill visualization",
              "Dashboard creation",
              "Story engine",
            ].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
