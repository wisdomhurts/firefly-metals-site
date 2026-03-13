"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preview" ref={ref} className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400">
            Product Preview
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Your exploration command center
          </h2>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-white/[0.08] bg-[#0A0F1A] overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] bg-white/[0.01]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-white/[0.03] border border-white/[0.04] text-[11px] text-slate-500 font-mono">
                app.explorationintelligence.com/project/green-bay
              </div>
            </div>
          </div>

          <div className="flex min-h-[500px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-56 border-r border-white/[0.04] p-3 gap-1 flex-shrink-0">
              <div className="flex items-center gap-2.5 px-3 py-2 mb-3">
                <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
                </div>
                <span className="text-xs font-semibold text-white">EI Platform</span>
              </div>

              {[
                { label: "Dashboard", active: true },
                { label: "Map Viewer", active: false },
                { label: "Drill Data", active: false },
                { label: "Cross Sections", active: false },
                { label: "Reports", active: false },
                { label: "Presentations", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`px-3 py-2 rounded-lg text-xs transition-colors ${
                    item.active
                      ? "bg-blue-500/10 text-blue-400 font-medium"
                      : "text-slate-500 hover:text-slate-400 hover:bg-white/[0.02]"
                  }`}
                >
                  {item.label}
                </div>
              ))}

              <div className="mt-auto border-t border-white/[0.04] pt-3">
                <div className="px-3 py-2 text-xs text-slate-600">Projects</div>
                {["Green Bay Cu-Au", "Pickle Crow Au", "Limestone Well"].map((p) => (
                  <div key={p} className="px-3 py-1.5 text-[11px] text-slate-500 hover:text-slate-400 cursor-default">
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-4 md:p-5">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-sm font-semibold text-white">Green Bay Copper-Gold Project</h3>
                  <p className="text-[11px] text-slate-500">Newfoundland, Canada &middot; Last updated 2h ago</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] text-slate-400">
                    Export
                  </div>
                  <div className="px-3 py-1.5 rounded-md bg-blue-600 text-[11px] text-white font-medium">
                    Generate Report
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Total Resource", value: "50.4 Mt", change: "+12%" },
                  { label: "Grade (CuEq)", value: "2.0%", change: "+0.3%" },
                  { label: "Drill Holes", value: "847", change: "+23" },
                  { label: "Metres Drilled", value: "130,000m", change: "+8,400m" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-[10px] text-slate-500 mb-1">{stat.label}</div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-green-400 mt-0.5">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Map + Charts */}
              <div className="grid md:grid-cols-5 gap-3">
                {/* Map placeholder */}
                <div className="md:col-span-3 h-64 rounded-xl bg-gradient-to-br from-[#0C1A2A] to-[#0A1220] border border-white/[0.04] overflow-hidden relative">
                  {/* Topo lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 260">
                    <path d="M0,130 Q100,90 200,120 T400,100" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
                    <path d="M0,150 Q120,110 220,140 T400,120" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
                    <path d="M0,170 Q80,140 180,160 T400,150" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
                    <path d="M0,100 Q150,60 250,90 T400,80" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
                    <path d="M0,190 Q100,170 200,185 T400,175" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
                  </svg>
                  {/* Drill holes */}
                  {[
                    { x: "30%", y: "35%", r: 4, c: "#F59E0B" },
                    { x: "35%", y: "40%", r: 3, c: "#F59E0B" },
                    { x: "42%", y: "38%", r: 5, c: "#EF4444" },
                    { x: "50%", y: "45%", r: 3, c: "#F59E0B" },
                    { x: "55%", y: "42%", r: 4, c: "#22C55E" },
                    { x: "60%", y: "50%", r: 6, c: "#EF4444" },
                    { x: "45%", y: "55%", r: 3, c: "#22C55E" },
                    { x: "65%", y: "35%", r: 4, c: "#F59E0B" },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: dot.x,
                        top: dot.y,
                        width: dot.r * 2,
                        height: dot.r * 2,
                        background: dot.c,
                        opacity: 0.7,
                        boxShadow: `0 0 8px ${dot.c}40`,
                      }}
                    />
                  ))}
                  {/* Labels */}
                  <div className="absolute top-3 left-3 text-[9px] text-slate-600 uppercase tracking-wider">Interactive Map</div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-3 text-[9px] text-slate-600">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> High grade</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Medium</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Low</span>
                  </div>
                </div>

                {/* Charts panel */}
                <div className="md:col-span-2 space-y-3">
                  <div className="h-[120px] rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
                    <div className="text-[10px] text-slate-500 mb-2">Grade Distribution</div>
                    <div className="flex items-end gap-1 h-16">
                      {[20, 35, 55, 80, 65, 90, 70, 45, 30, 15, 25, 40].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t transition-all duration-300"
                          style={{
                            height: `${h}%`,
                            background: h > 70 ? "#EF4444" : h > 40 ? "#F59E0B" : "#3B82F6",
                            opacity: 0.6,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-[120px] rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
                    <div className="text-[10px] text-slate-500 mb-2">Drill Progress</div>
                    <svg viewBox="0 0 200 60" className="w-full h-16">
                      <polyline
                        points="0,50 20,45 40,40 60,35 80,28 100,30 120,22 140,18 160,12 180,8 200,5"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <polyline
                        points="0,50 20,45 40,40 60,35 80,28 100,30 120,22 140,18 160,12 180,8 200,5"
                        fill="url(#lineGrad)"
                        stroke="none"
                      />
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reflection */}
        <div className="h-32 bg-gradient-to-b from-[#0A0F1A]/50 to-transparent -mt-1 rounded-b-2xl blur-sm opacity-30 scale-y-[-1]" />
      </div>
    </section>
  );
}
