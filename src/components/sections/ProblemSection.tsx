"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const messyInputs = [
  { icon: "table", label: "Spreadsheets", color: "#22C55E" },
  { icon: "map", label: "Shapefiles", color: "#3B82F6" },
  { icon: "cube", label: "Geology Models", color: "#A855F7" },
  { icon: "chart", label: "Drill Results", color: "#F59E0B" },
  { icon: "doc", label: "Reports", color: "#EF4444" },
  { icon: "img", label: "Core Photos", color: "#06B6D4" },
];

const icons: Record<string, React.ReactNode> = {
  table: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M3 6h18M3 18h18M8 6v12M16 6v12" />,
  map: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
  cube: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  doc: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  img: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
};

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">
            The Problem
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Exploration data is chaos
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Billions in exploration spend. Scattered across incompatible formats.
            Impossible to communicate to investors.
          </p>
        </motion.div>

        {/* Data flow visualization */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Messy inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:w-[380px]">
            {messyInputs.map((input, i) => (
              <motion.div
                key={input.label}
                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 6 - 3 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: Math.random() * 4 - 2 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] flex flex-col items-center gap-2 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={input.color} className="opacity-80">
                  {icons[input.icon]}
                </svg>
                <span className="text-xs text-slate-500">{input.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrow / transformation */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-3 lg:px-8"
          >
            <div className="hidden lg:block w-32 h-px bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700" />
            <div className="lg:hidden h-16 w-px bg-gradient-to-b from-slate-700 via-blue-500 to-slate-700" />
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[0.15em] uppercase text-blue-400 whitespace-nowrap">AI Processing</span>
            <div className="hidden lg:block w-32 h-px bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700" />
            <div className="lg:hidden h-16 w-px bg-gradient-to-b from-slate-700 via-blue-500 to-slate-700" />
          </motion.div>

          {/* Structured output */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="lg:w-[380px] p-6 rounded-2xl border border-blue-500/10 bg-gradient-to-br from-blue-500/[0.04] to-transparent"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium tracking-wider uppercase text-blue-400">Structured Intelligence</span>
            </div>
            <div className="space-y-3">
              {["Interactive exploration map", "Drill hole cross-sections", "Resource dashboard", "Investor presentation"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
