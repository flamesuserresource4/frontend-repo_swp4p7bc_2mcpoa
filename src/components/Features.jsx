import React from 'react';
import { Sparkles, Timer, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="h-6 w-6 text-amber-300" />,
      title: 'Fresh Taste',
      text: 'Nitro-flushed and sealed to lock aroma and crema-like texture. Experience a smooth, balanced cup every time.',
      bullets: ['Single-origin and signature blends', 'Roasted weekly, sealed within hours', 'Zero bitterness finish'],
    },
    {
      icon: <Timer className="h-6 w-6 text-amber-300" />,
      title: 'Ultra Convenient',
      text: 'No machine, no pods, no mess. Tear, squeeze, and sip — perfect for commutes, flights, and quick breaks.',
      bullets: ['Airline-friendly sachets', 'Pocket and wallet sized', 'Works hot or cold'],
    },
    {
      icon: <Leaf className="h-6 w-6 text-amber-300" />,
      title: 'Eco Friendly',
      text: 'Minimal packaging design with fully recyclable materials and low shipping footprint.',
      bullets: ['Recyclable sachets', 'Responsible sourcing', 'Lower energy than capsule machines'],
    },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Why CoffeeSqueeze</h2>
        <p className="mt-2 text-zinc-400">Premium coffee without the wait — designed for modern life.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-xl shadow-black/20"
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 border border-amber-400/30">
                  {f.icon}
                </div>
                <h3 className="text-white font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm">{f.text}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-zinc-300/90">
                {f.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> {b}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-amber-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
