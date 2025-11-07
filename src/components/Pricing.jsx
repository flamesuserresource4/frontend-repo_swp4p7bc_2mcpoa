import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter Box',
      price: '₹99',
      subtitle: '12 sachets',
      highlight: false,
    },
    {
      name: 'Office Pack',
      price: '₹349/month',
      subtitle: '4 boxes',
      highlight: true,
    },
    {
      name: 'Subscription',
      price: 'Save 15%',
      subtitle: 'Monthly delivery',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Pricing</h2>
        <p className="mt-2 text-zinc-400">Flexible plans for every coffee lover.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border bg-white/5 p-6 backdrop-blur-md transition ${
                p.highlight
                  ? 'border-amber-400/40 shadow-lg shadow-amber-500/20'
                  : 'border-white/10'
              }`}
            >
              <h3 className="text-white text-lg font-medium">{p.name}</h3>
              <div className="mt-3 text-3xl font-semibold text-amber-300">{p.price}</div>
              <p className="text-zinc-400 text-sm">{p.subtitle}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-zinc-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5"
              >
                Pre-order
              </a>
            </div>
          ))}
        </div>

        <div id="pitch" className="mt-10 text-sm text-zinc-400">
          Want the investor deck? <a href="#contact" className="text-amber-300 hover:text-amber-200 underline">Request the pitch PDF</a>.
        </div>
      </div>
    </section>
  );
}
