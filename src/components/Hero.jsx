import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const maskImage = useMotionTemplate`radial-gradient(160px 160px at ${mouseX}px ${mouseY}px, rgba(168,85,247,0.35), transparent 60%)`;

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background and grid - never block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-15" />
      </div>

      <div className="relative container mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} ref={ref} className="relative">
            {/* Cursor glow */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ WebkitMaskImage: maskImage, maskImage }}
            >
              <div className="absolute inset-0 rounded-3xl bg-fuchsia-400/20 blur-2xl" />
            </motion.div>

            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-fuchsia-200/90 text-xs backdrop-blur">
              Futuristic RTD Coffee
            </div>
            <motion.h1
              className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready-to-Drink Coffee in a Squeeze Sachet — Fresh, Fast, Zero Fuss.
            </motion.h1>
            <motion.p
              className="mt-4 text-zinc-300/95 max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              CoffeeSqueeze delivers barista-grade coffee in a sleek, portable sachet. No machines, no mess — just squeeze, sip, and go. Keep a pack in your bag, desk, or gym locker.
            </motion.p>

            {/* Bullets */}
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300/90">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> 12g craft blend, ethically sourced</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> No equipment, zero cleanup</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Shelf-stable, fresh-lock seal</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Rapid caffeine, smooth flavor</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-medium text-zinc-900 shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-fuchsia-400/40"
              >
                Pre-order Now
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#pitch"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Download Pitch
              </a>
            </div>

            <p className="mt-3 text-fuchsia-200/80 text-sm">Tagline: Squeeze. Sip. Go.</p>
          </div>

          {/* Interactive Spline scene */}
          <motion.div
            className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-purple-600/10 to-indigo-500/10"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Interaction-safe overlays */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.25),transparent_40%)]" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-fuchsia-400/25 blur-3xl opacity-60" />

            {/* Spline must fill container and remain interactive */}
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Subtle label */}
            <div className="pointer-events-none absolute left-3 top-3 text-[10px] uppercase tracking-wider text-white/70 bg-black/20 px-2 py-1 rounded-full backdrop-blur">
              Interactive — try moving your cursor
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
