import React from 'react';
import { Sparkles, Timer, Leaf } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="h-6 w-6 text-amber-300" />,
      title: 'Fresh Taste',
      text: 'Brewed and sealed to lock aroma and flavor.',
    },
    {
      icon: <Timer className="h-6 w-6 text-amber-300" />,
      title: 'Ultra Convenient',
      text: 'Designed for travel, work, and outdoor adventures.',
    },
    {
      icon: <Leaf className="h-6 w-6 text-amber-300" />,
      title: 'Eco Friendly',
      text: 'Recyclable sachets to reduce waste.',
    },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Why CoffeeSqueeze</h2>
        <p className="mt-2 text-zinc-400">Premium coffee without the wait.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-xl shadow-black/20 hover:shadow-amber-500/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 border border-amber-400/30">
                  {f.icon}
                </div>
                <h3 className="text-white font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm">{f.text}</p>
              <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-amber-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
