import React from 'react';

// CSS-3D sachet built with divs and gradients to emulate a premium pack
function Sachet3D() {
  return (
    <div className="relative h-[420px] w-full flex items-center justify-center">
      {/* Glow and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-transparent to-amber-500/5 pointer-events-none" />
      <div className="absolute -bottom-2 h-24 w-48 rounded-full bg-amber-500/20 blur-2xl" />

      {/* 3D Sachet */}
      <div
        className="[transform-style:preserve-3d] animate-[float_6s_ease-in-out_infinite]"
        style={{ perspective: '1200px' }}
      >
        {/* Body */}
        <div
          className="relative h-72 w-44 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 shadow-2xl shadow-amber-400/10"
          style={{
            transform:
              'rotateX(12deg) rotateY(-18deg) rotateZ(2deg) translateZ(20px)',
          }}
        >
          {/* Metallic sheen */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute -left-16 top-0 h-full w-24 bg-gradient-to-r from-white/20 to-transparent rotate-12" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,214,164,0.15),transparent_60%)]" />
          </div>

          {/* Brand */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-xs tracking-[0.35em] text-amber-200/80">COFFEESQUEEZE</span>
            <h3 className="mt-2 text-lg font-semibold text-white">RTD Coffee</h3>
            <p className="mt-1 text-xs text-zinc-300/80">Squeeze · Sip · Go</p>
            <div className="mt-4 h-10 w-10 rounded-full bg-amber-500/20 border border-amber-200/30 flex items-center justify-center text-amber-200 text-xs">
              12g
            </div>
          </div>

          {/* Seal */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-2 w-28 rounded bg-gradient-to-r from-zinc-700 to-zinc-800 border border-white/10" />

          {/* Bottom crimp */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 w-32 rounded bg-gradient-to-r from-zinc-700 to-zinc-800 border border-white/10" />
        </div>
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        `}
      </style>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-amber-200/90 text-xs backdrop-blur">
              Futuristic RTD Coffee
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Ready-to-Drink Coffee in a Squeeze Sachet — Fresh, Fast, Zero Fuss.
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl">
              CoffeeSqueeze delivers barista-grade coffee in a sleek sachet. No machines, no mess — just squeeze, sip, and get moving.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-medium text-zinc-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:shadow-amber-400/40"
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

            <p className="mt-3 text-amber-200/80 text-sm">Tagline: Squeeze. Sip. Go.</p>
          </div>

          <div className="relative">
            {/* 3D sachet */}
            <Sachet3D />

            {/* Decorative arcs */}
            <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 -left-10 h-32 w-32 rounded-full bg-amber-600/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
