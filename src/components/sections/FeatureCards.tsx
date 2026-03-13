"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    title: "AI Map Generator",
    desc: "Transform raw spatial data into publication-quality geological maps. Automatic legend generation, scale bars, and coordinate grids.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: "#3B82F6",
    gradient: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Drill Visualization Engine",
    desc: "Interactive 3D drill hole visualizations with assay data overlays. Cross-sections, plan views, and long sections generated automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 11V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h4" />
        <circle cx="17" cy="17" r="4" />
        <path d="M17 14v3h3" />
        <path d="M9 7h6M9 11h3" />
      </svg>
    ),
    color: "#F59E0B",
    gradient: "from-amber-500/10 to-amber-600/5",
  },
  {
    title: "Exploration Dashboard",
    desc: "Real-time project intelligence dashboards with drill progress tracking, resource estimates, and exploration KPIs — all in one view.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="10" width="7" height="11" rx="1" />
        <rect x="3" y="13" width="7" height="8" rx="1" />
      </svg>
    ),
    color: "#22C55E",
    gradient: "from-green-500/10 to-green-600/5",
  },
  {
    title: "Discovery Story Engine",
    desc: "AI-powered narrative generation that turns technical data into compelling investor stories. Automatic presentation decks and reports.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "#A855F7",
    gradient: "from-purple-500/10 to-purple-600/5",
  },
];

function FeatureCard({ feature, index, isInView }: { feature: typeof features[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-white/10 transition-all duration-500 cursor-default overflow-hidden"
    >
      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl`}
      />

      {/* Hover border glow */}
      <motion.div
        animate={{ opacity: hovered ? 0.5 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-2xl"
        style={{ boxShadow: `0 0 40px ${feature.color}15, inset 0 0 40px ${feature.color}05` }}
      />

      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
          style={{
            background: `${feature.color}10`,
            color: feature.color,
          }}
        >
          {feature.icon}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {feature.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {feature.desc}
        </p>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex items-center gap-2 text-sm font-medium"
          style={{ color: feature.color }}
        >
          Learn more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FeatureCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">
            Features
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Intelligence tools, built for discovery
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Every tool designed for the unique demands of mineral exploration and investor communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
