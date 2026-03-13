"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.04] via-transparent to-purple-500/[0.02] overflow-hidden"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.04] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Get early access
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-lg mx-auto">
              Join the companies defining the future of exploration intelligence.
              Limited early access spots available.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                Join Early Access
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Request Demo
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-600">
              No credit card required &middot; Early adopter pricing &middot; Priority onboarding
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
