"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Upload exploration data",
    desc: "Drag in drill logs, shapefiles, assay results, geological models — any format. The system ingests and normalizes everything automatically.",
    visual: (
      <div className="relative w-full h-48 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-green-500/40" />
        </div>
        <div className="space-y-2">
          {["drill_results_2024.csv", "geology_model.dxf", "assays_ming_north.xlsx", "shapefiles.zip"].map((f, i) => (
            <div key={f} className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] border border-dashed border-white/[0.08]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={["#22C55E", "#A855F7", "#3B82F6", "#F59E0B"][i]} strokeWidth="1.5">
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-xs text-slate-400 font-mono">{f}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "AI structures the data",
    desc: "Machine learning models parse, validate, and cross-reference your data. Geological context is applied. Errors are flagged. Structure emerges from chaos.",
    visual: (
      <div className="relative w-full h-48 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] tracking-wider uppercase text-blue-400">Processing</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Data validation", pct: 100 },
            { label: "Geological parsing", pct: 87 },
            { label: "Cross-referencing", pct: 64 },
            { label: "Structure mapping", pct: 42 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[11px] text-slate-500">{item.label}</span>
                <span className="text-[11px] text-slate-600">{item.pct}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/[0.04]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Generate investor visuals",
    desc: "Instantly create publication-quality maps, cross-sections, dashboards, and presentation decks — all branded and investor-ready.",
    visual: (
      <div className="relative w-full h-48 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden p-4">
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10 p-2 flex flex-col justify-end">
            <div className="flex gap-0.5 items-end h-16">
              {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-500/40 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <span className="text-[9px] text-slate-500 mt-2">Resource chart</span>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/10 p-2 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1e293b" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="75 25" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-amber-400">75%</span>
            </div>
            <span className="text-[9px] text-slate-500 absolute bottom-2 left-2">Confidence</span>
          </div>
          <div className="col-span-2 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <div className="text-[10px] text-white font-medium">Investor deck ready</div>
              <div className="text-[9px] text-slate-500">24 slides generated</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" ref={ref} className="relative py-32 px-6 md:px-12">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Three steps to intelligence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500"
            >
              <span className="text-5xl font-bold text-white/[0.04] absolute top-4 right-6">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{step.desc}</p>
              {step.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
