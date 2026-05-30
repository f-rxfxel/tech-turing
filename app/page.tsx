export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60"
            alt="A high-end custom water-cooled PC with intricate frosted tubing and subtle cyan and magenta RGB lighting reflecting off brushed aluminum surfaces. The image is captured in a dark, atmospheric studio setting with dramatic shadows and sharp focus on the high-tech components. The overall aesthetic is ultra-premium, technical, and clean, using a sophisticated dark mode palette of deep charcoal and glowing accents."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoANGsIX6Oafm3zb7oJA4paJKfsPxJsBKRzM-3Y4Nprhop884Fsg40X-_9CvW5XTpqn5fQfOIXZxcGzXA29jSjfx8CljKFtaM93GWEw0RXrJPmxTeO8I0vna7uHg7Bayty4s0CfIEscWQNMVgnoX8cgfJLO5kHSGHTQl-GJho9wc00P2Pys_pjgXtrAaXhkjJ336ewBcsdsApBlvKUA8bTAIhINpZmoLmnp4DC-cpXqLguTkJOQ0aNGgfRp9joMgKn2xa3Gnn1rjk"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background"></div>
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                State of the Art Engineering
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">
              ENGINEERED <span className="text-primary text-glow">PRECISION</span>.
              <br />
              UNRIVALED PERFORMANCE.
            </h1>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-10 py-5 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(219,252,255,0.4)] transition-all">
                Request a Quote
              </button>
              <button className="border border-white/20 backdrop-blur-md font-label-md text-label-md px-10 py-5 rounded-lg hover:bg-white/5 transition-all">
                View Projects
              </button>
            </div>
          </div>
        </div>
        {/* Trust Indicators Overlay */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-lg text-primary">
                  10+
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-lg text-primary">
                  500+
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                  Machines Built
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-lg text-primary">
                  99%
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                  Satisfaction Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Completed Projects
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                A curated selection of our most ambitious builds, blending extreme
                cooling with bespoke aesthetics.
              </p>
            </div>
            <a
              className="font-label-md text-label-md text-primary flex items-center group"
              href="#"
            >
              View Portfolio
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            {/* Large Project Card */}
            <div className="col-span-12 md:col-span-8 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low relative aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                alt="A macro shot of a custom high-performance PC interior featuring dual-loop liquid cooling with vibrant neon green coolant. The pipes are perfectly parallel and geometric, illuminating the dark carbon fiber and matte black components. The lighting is focused and cinematic, highlighting the intricate engineering and clean cable management in a futuristic dark mode setting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-DGmJ6VurptcI2YHaEu38HKmz1bCcbppRQACGfgjmy9TawjtnUDz41xgfRPsY_22l9rRVPzsBvD6Mb3x677Y8pCwbgpTa6Rz-_FjPrWfkL15BfI1DovPoTSJaFpPyEvxRXP228H6vYoNz4ZBiGJrqBPSlmFg1rxLd_2zY05QskDYwfJcSKuEgEhLUeFpsHGzAvjxKtxFgjc1fkFBCZ-QRntjEI_KTslUMsB8IY8pfLNHnV7H58cGP7gWvQlHEQ_ofsxE2vRnB8DU"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <span className="font-label-sm text-label-sm bg-primary/20 text-primary px-3 py-1 rounded-full mb-4 inline-block">
                  Project: VENOM
                </span>
                <h3 className="font-headline-md text-headline-md">
                  The 8K Workstation
                </h3>
              </div>
            </div>
            {/* Small Project Card */}
            <div className="col-span-12 md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                alt="A close-up view of a minimalist white and silver PC build with frosted glass panels. The cooling fans have a soft white halo glow, creating a serene and clean aesthetic against a dark background. The build features premium stainless steel fittings and vertical GPU mounting, showcasing extreme attention to detail and high-end automotive design inspiration."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9IKAUZb424B7l7uG5Uxi5KJKnog-ijtaQcVIxHAvAmk7TmiFG-6U5j_4xBEbotYtprDoXDPAhFg6C5DiQj18W6jZQLPZSCvZDjmz2n_6dbSRwOemKlvMHt6PMob5rgABkSkfyU-xBZct5YXTAt2n4_MvM3dXaj0UnxYfuf7z85yVIxcsYPPgB7hm6ADeRW8MUHMxu33dDX4H9KGkOWMDTcocCAZqFj8jdC_M1xvFtBh4kFXYOJQGbAfL0A9jm5C2lYwIYzABrkxI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <span className="font-label-sm text-label-sm bg-secondary/20 text-secondary px-3 py-1 rounded-full mb-4 inline-block">
                  Project: FROST
                </span>
                <h3 className="font-headline-md text-headline-md">
                  Minimalist Apex
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary: Bento Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Precision Services
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We don't just assemble parts; we engineer ecosystems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-panel glow-hover p-10 rounded-xl transition-all duration-500">
              <span
                className="material-symbols-outlined text-primary text-4xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                fluid
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Custom Cooling
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bespoke hardline loops designed for maximum thermal dissipation
                and artistic impact.
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                <span className="font-label-sm text-[10px] uppercase border border-white/10 px-2 py-1 rounded">
                  Hardline
                </span>
                <span className="font-label-sm text-[10px] uppercase border border-white/10 px-2 py-1 rounded">
                  Dual-Loop
                </span>
              </div>
            </div>
            <div className="glass-panel glow-hover p-10 rounded-xl transition-all duration-500">
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                speed
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Performance Tuning
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Extreme overclocking and BIOS optimization to extract every frame
                from your hardware.
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                <span className="font-label-sm text-[10px] uppercase border border-white/10 px-2 py-1 rounded">
                  XMP 3.0
                </span>
                <span className="font-label-sm text-[10px] uppercase border border-white/10 px-2 py-1 rounded">
                  Undervolting
                </span>
              </div>
            </div>
            <div className="glass-panel glow-hover p-10 rounded-xl transition-all duration-500">
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Aesthetic Curation
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Custom cables, professional paintwork, and synchronized RGB
                patterns tailored to you.
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                <span className="font-label-sm text-[10px] uppercase border border-white/10 px-2 py-1 rounded">
                  Sleeving
                </span>
                <span className="font-label-sm text-[10px] uppercase border border-white/10 px-2 py-1 rounded">
                  Cerakote
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-16 text-center italic">
            &quot;The McLaren of PCs.&quot;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="relative">
              <span className="material-symbols-outlined text-primary/20 text-8xl absolute -top-10 -left-10">
                format_quote
              </span>
              <p className="font-headline-md text-headline-md relative z-10 leading-relaxed mb-8">
                The attention to detail is bordering on obsessive. Every tube bend
                is perfect, every cable is exactly where it should be. It’s a
                piece of art that happens to run 4K games at 200fps.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-primary">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">
                    Marcus Vane
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Creative Director, NeoDesign
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined text-primary/20 text-8xl absolute -top-10 -left-10">
                format_quote
              </span>
              <p className="font-headline-md text-headline-md relative z-10 leading-relaxed mb-8">
                FORGE PC didn&apos;t just build me a computer; they solved a thermal
                problem I&apos;ve had for years. My render times have dropped by 40%
                and the machine is silent. Exceptional engineering.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-secondary">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-secondary">
                    Dr. Elena Rostova
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Machine Learning Researcher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-desktop relative z-10">
          <div className="glass-panel p-20 rounded-3xl text-center border border-primary/20 bg-primary/5">
            <h2 className="font-display-lg text-headline-lg mb-6">
              READY TO FORGE YOUR ULTIMATE MACHINE?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Our builds are strictly limited to ensure uncompromising quality.
              Reserve your spot in our production queue for Q4 2024.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-12 py-5 rounded-lg font-bold hover:glow-sm transition-all">
                Start Your Config
              </button>
              <button className="border border-white/20 font-label-md text-label-md px-12 py-5 rounded-lg hover:bg-white/5 transition-all">
                Contact Consultation
              </button>
            </div>
          </div>
        </div>
        {/* Decorative Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-0"></div>
      </section>
    </>
  );
}
