export default function About() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          <img
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
            alt="A cinematic, wide shot of a high-tech PC hardware laboratory with surgical cleanliness."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_vRuFGINEzc322In0HvMeDtxvmW9bXKLW2xheny3OjTQRfMaOarA2xM-iSka9m1fcbkcn-x1afMOwVNH5nQU51pps26NRLfTF2A3TTDEGfnzdjoNXuQGJe8jsugj1TQy02gJ8PjaKktfDpXM6JrfETsPYCPOnUJjc278BWmGLtANVhDKLjpYrv3tPr8EGkvY8isL16Ta8WX6GfR2kzQI-QWKcee-JOw842QrCFyl2_YzZLnsJvM2REDSUgoKOXI-KhQ_rm91Q-kQ"
          />
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop w-full">
          <div className="max-w-2xl">
            <span className="font-label-md text-primary tracking-widest uppercase mb-4 block">
              The Art of Engineering
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-none">
              Defined by <span className="text-primary text-glow">Precision</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-lg">
              FORGE PC was founded on a singular premise: that high-performance
              computing should be as beautiful as it is powerful. We don&apos;t just
              assemble parts; we engineer digital masterpieces.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section (Bento Style) */}
      <section className="py-24 max-w-max-width mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Stat */}
          <div className="md:col-span-4 glass-card p-10 rounded-xl flex flex-col justify-between group glow-hover transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              precision_manufacturing
            </span>
            <div>
              <h3 className="font-display-lg text-display-lg text-primary mb-2">
                2,400+
              </h3>
              <p className="font-label-md text-on-surface-variant uppercase tracking-tighter">
                Bespoke Builds Completed
              </p>
            </div>
          </div>
          {/* Secondary Stats Stack */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="glass-card p-8 rounded-xl glow-hover transition-all">
              <h4 className="font-headline-md text-headline-md text-tertiary mb-2">
                12 Years
              </h4>
              <p className="font-body-md text-on-surface-variant">
                Pushing the boundaries of hardware clock speeds and cooling
                efficiency.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl glow-hover transition-all">
              <h4 className="font-headline-md text-headline-md text-primary mb-2">
                99.9%
              </h4>
              <p className="font-body-md text-on-surface-variant">
                Stability rating across our specialized enterprise and
                workstation deployments.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl glow-hover transition-all">
              <h4 className="font-headline-md text-headline-md text-secondary mb-2">
                0ms
              </h4>
              <p className="font-body-md text-on-surface-variant">
                Tolerance for cable mismanagement. Every build is a surgical
                expression of order.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl glow-hover transition-all">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                Global
              </h4>
              <p className="font-body-md text-on-surface-variant">
                Ships to over 45 countries with specialized military-grade flight
                casing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History & Vision Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-desktop grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5">
              <img
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                alt="A vintage electronics workbench."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Y-0CcKx-wzm41BpjV1xCoDaIbYUlgKWW0mKqmnpAT1RGEmQ9vVWfRDr-s4PndNTqwPS14nRd8uC8Vf0ZG3DG05h32j9AFTW32E-BII2-pta5Yyek5hp_DYIHfnjGMCkEcg-Wv-5AzfzrqeSG3wVQER7N3vmppgU3MaFH_5pwOfWTIxsspTKSnqLHd0h4wDLSlDwfMwUUamG4jAip_22rpyMJkC_eAdtabmVxCVWdS-P-yM4cwNVpqKjwlg0zsYg4fsHyxDiOq_A"
              />
            </div>
            {/* Float card */}
            <div className="absolute -bottom-10 -right-10 hidden lg:block glass-card p-8 max-w-xs rounded-xl border-primary/20">
              <p className="font-body-md text-primary italic">
                &quot;We started in a garage with one goal: to eliminate the phrase
                &apos;good enough&apos; from the PC enthusiast&apos;s vocabulary.&quot;
              </p>
              <div className="mt-4 font-label-sm text-on-surface-variant">
                — Elias Vance, Founder
              </div>
            </div>
          </div>
          <div>
            <span className="font-label-md text-secondary tracking-widest uppercase mb-4 block">
              Our History
            </span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
              From Prototype to <span className="text-secondary">Prestige</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg">
              <p>
                Established in 2012, FORGE PC emerged as a small boutique workshop
                for local competitive overclockers. Our focus was never on volume,
                but on the relentless pursuit of thermal perfection.
              </p>
              <p>
                Over a decade later, we have transformed into a global leader in
                high-performance computing, providing bespoke solutions for
                creative studios, AI research labs, and elite gaming enthusiasts
                who demand zero-compromise engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="font-label-md text-tertiary tracking-widest uppercase mb-4 block">
                Our Foundation
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">
                Mission &amp; Core Values
              </h2>
            </div>
            <p className="max-w-md text-on-surface-variant font-body-md border-l-2 border-tertiary/30 pl-6">
              We operate at the intersection of extreme engineering and aesthetic
              minimalism. Our values are baked into every screw and silicon chip.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Value Card 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-high p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-tertiary text-6xl">
                  verified
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-4 text-on-surface">
                Uncompromising Quality
              </h4>
              <p className="text-on-surface-variant font-body-md">
                We don&apos;t use &apos;off-the-shelf&apos; cooling loops. Every liquid channel is
                custom-bent and pressure-tested for 72 hours before delivery.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-high p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-primary text-6xl">
                  psychology
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-4 text-on-surface">
                Human-Centric Design
              </h4>
              <p className="text-on-surface-variant font-body-md">
                Technical specs matter, but so does the user experience. Our
                interfaces and hardware layouts are designed for peak ergonomic
                performance.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-high p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-secondary text-6xl">
                  auto_awesome
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-4 text-on-surface">
                Aesthetic Integrity
              </h4>
              <p className="text-on-surface-variant font-body-md">
                A FORGE PC is a centerpiece. We utilize automotive-grade finishes,
                custom CNC-milled panels, and curated lighting profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Certifications */}
      <section className="py-32 bg-surface-container-low border-y border-white/5">
        <div className="max-w-max-width mx-auto px-margin-desktop text-center mb-16">
          <span className="font-label-md text-primary tracking-widest uppercase mb-4 block">
            Proven Excellence
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Technical Certifications
          </h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">
            Our workshop and engineers are certified to the highest industry
            standards to ensure your investment is protected by expert hands.
          </p>
        </div>
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">
                  terminal
                </span>
              </div>
              <span className="font-label-sm text-on-surface uppercase">
                AS9100 Precision
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mb-4 group-hover:border-tertiary transition-all duration-500">
                <span className="material-symbols-outlined text-tertiary text-3xl">
                  bolt
                </span>
              </div>
              <span className="font-label-sm text-on-surface uppercase">
                IPC-A-610 Certified
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mb-4 group-hover:border-secondary transition-all duration-500">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  security
                </span>
              </div>
              <span className="font-label-sm text-on-surface uppercase">
                ISO 27001 Security
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">
                  eco
                </span>
              </div>
              <span className="font-label-sm text-on-surface uppercase">
                Energy Star Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-32">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="A macro photograph of a custom water-cooling reservoir."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNskfIHpxrDwW8fNDVSXxS65enplf1snihO2sCA8NlRs_4UtyE4wSDDCmV1Lp2KK9eb1gSf8YTAnSTl57mGgroOPGLnw_byzv_ixLoti4UA9LgY8PHXAX8gT8r9AvFTSZXoObm3Sz4pG8B-OPSAKduH8WYG9YnJVMUpkuRZKuSck48Ay238lp8bBA-FjiPeonp0zpcNDOE8DZzVvSqW5jp2YeM2NE9p6ZRpEOBR8lYojd9zNIDoMW0vlLZlgvHYmieFi0xqedPI4k"
              />
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="An extreme close-up of a high-end motherboard circuit."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS4cyy2Fxcual1Rq337oZ4PsXkmxchOO5UvCxmIQZMd1tlxnrQYD6KWaYK1JwcXlHchGHVwEo5IJROwjm7-XEfyjqWykRq-c7yKbx2pVWkXkmxambahPRRnrKNJeWHV9TaLC1_sC4A9VMvDGrV6JiLZNQjMTO0f9SUOoHscK-NFIN9D4J-0kSPbmC9JcjZNf9vTqW5BFnz1uzS80-zx6O-Dfh8pJgMSfUj2iEC7dh8OXglZJWD37mL4oulOqt4ZRs-jzgn2XbSl1I"
              />
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="A wide shot of the FORGE PC assembly floor."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2tzROlrYcdD0M_zuhc_ZXmUqR-5OFpQR2uN2VA35CmcRSA4UAQSYgI0S-DMbJRW7jyVVFt4sCK6d27e4HwREYC2Ac8e8EmFKqkk7wIvGF24wnybQZ6iYDb_OwGS_xs_x6ucfewPvFZef5ewEb29jTIawNVYxsb9Rdvj8NI8qNYup1j3pITzgMPMGqJL-VzDovLsiXgpPGE2cXe0cwtWjHSZejNYoHYSNu-FeoeS3wo9laUFSJb0V34tW-uA-6C9C_-mrj9VuBwKk"
              />
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="A portrait of a master PC engineer at work."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3P7ztzyP3rSw34BMBU9_EU6U5Cn8ZyGJ0R4KCm1zp-J9ZWB9tozpiiDoIbOg4axekTxzIalV9LRfa6AhDIGy0iF-cF95YH2fEAo2sJm5j1FX7M4OJSJofTFNybxYfFXtuiLf1tygolXIyqMgsq3tjUq6nFo1mgPFRO6wSL5RAtlbAIHZ0LwfLAHCg0NuBEhNu8tL-t3Thfat0UXzMQ7_qMjj2kESrTWajI5It0wfF7r-sZo1FuyEF8wubn7II7zBk26O5dXyDo_c"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
