import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>© CoffeeSqueeze 2025 — All rights reserved.</p>
        <p>Built for demo and investor pitch.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-400/30 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-zinc-950/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-amber-500 text-zinc-900 font-semibold">C</span>
            <span className="font-medium tracking-wide">CoffeeSqueeze</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#pricing" className="rounded-full bg-amber-500 px-4 py-2 text-zinc-900 font-medium shadow shadow-amber-500/30">Pre-order</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <section id="how"><HowItWorks /></section>
        <Features />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
