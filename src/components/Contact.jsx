import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We will reach out within 24 hours.');
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Partner with CoffeeSqueeze</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">Wholesale, retail, or office stocking — request a custom quote and our team will get back to you.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input type="text" required placeholder="Company / Name" className="w-full rounded-lg bg-zinc-900/60 border border-white/10 p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
                <input type="email" required placeholder="Email" className="w-full rounded-lg bg-zinc-900/60 border border-white/10 p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
                <textarea required placeholder="Tell us about your needs" rows="4" className="w-full rounded-lg bg-zinc-900/60 border border-white/10 p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-medium text-zinc-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5">Request Quote</button>
              </form>
              {status && <p className="mt-3 text-sm text-amber-200/90">{status}</p>}
            </div>

            <p className="mt-4 text-zinc-400 text-sm">Prefer email? <a href="mailto:hello@coffeesqueeze.com" className="text-amber-300 hover:text-amber-200 underline">hello@coffeesqueeze.com</a></p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 min-h-[220px]">
              <h3 className="text-white font-medium">For Investors</h3>
              <p className="mt-2 text-zinc-400 text-sm">Looking to review the pitch? Drop us a note and we’ll send the latest deck and traction metrics.</p>
              <ul className="mt-4 text-sm text-zinc-300 list-disc list-inside space-y-1">
                <li>Supply-ready manufacturing partners</li>
                <li>Eco-friendly materials and sourcing</li>
                <li>Pre-order interest list growing fast</li>
              </ul>
            </div>
            <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
