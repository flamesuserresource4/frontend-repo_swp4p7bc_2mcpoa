import React from 'react';
import { Coffee, Droplet, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Coffee className="h-6 w-6 text-amber-300" />,
      title: 'Choose your flavor',
      text: 'Mild, Medium, or Strong — signature blends crafted by our roasters.',
      detail: 'We source seasonal lots and roast weekly, so you always get peak flavor.',
    },
    {
      icon: <Droplet className="h-6 w-6 text-amber-300" />,
      title: 'Squeeze and sip',
      text: 'Tear, squeeze, and enjoy café-grade coffee instantly.',
      detail: 'Sip straight or pour over ice or milk. No equipment. Zero cleanup.',
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-300" />,
      title: 'Enjoy anywhere',
      text: 'Perfect for travel, work, or outdoors — no machines needed.',
      detail: 'Pocket-friendly sachets fit in wallets, backpacks, and carry-ons.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">How It Works</h2>
        <p className="mt-2 text-zinc-400">Squeeze. Sip. Go.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 border border-amber-400/30">
                  {s.icon}
                </div>
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm">{s.text}</p>
              <p className="mt-2 text-zinc-400 text-sm">{s.detail}</p>
              <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-amber-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
