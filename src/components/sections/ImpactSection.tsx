"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, duration, motionVal]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

const audiences = [
  {
    title: "Exploration Companies",
    desc: "Compress months of data preparation into days. Automated map generation, standardized reporting, and AI-driven insight extraction from drill programs.",
    stats: [
      { value: 10, suffix: "x", label: "Faster reporting" },
      { value: 85, suffix: "%", label: "Cost reduction" },
    ],
    color: "#3B82F6",
  },
  {
    title: "Investors",
    desc: "Evaluate exploration assets with standardized, verifiable intelligence. Compare projects on consistent metrics with interactive data exploration tools.",
    stats: [
      { value: 200, suffix: "+", label: "Data points analyzed" },
      { value: 60, suffix: "%", label: "Better due diligence" },
    ],
    color: "#F59E0B",
  },
  {
    title: "Mining Analysts",
    desc: "Access structured exploration data across your coverage universe. Real-time alerts, automated peer comparison, and AI-assisted technical analysis.",
    stats: [
      { value: 100, suffix: "+", label: "Data formats ingested" },
      { value: 5, suffix: "min", label: "To first insight" },
    ],
    color: "#22C55E",
  },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">
            Industry Impact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Built for the entire ecosystem
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            From the field to the boardroom — intelligence that serves every stakeholder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500"
            >
              <div
                className="w-3 h-3 rounded-full mb-6"
                style={{ background: item.color, boxShadow: `0 0 20px ${item.color}30` }}
              />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">{item.desc}</p>

              <div className="flex gap-6">
                {item.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-white">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
