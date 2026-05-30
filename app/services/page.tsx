export default function Services() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden px-6 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="relative z-10 max-w-3xl">
          <span className="font-label-md text-primary tracking-[0.2em] mb-4 block">
            ENGINEERING EXCELLENCE
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8 leading-tight">
            Elite Services for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              High-Performance
            </span>{" "}
            Computing.
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
            From initial architecture to extreme thermal optimization, we
            provide end-to-end technical expertise for the most demanding
            hardware enthusiasts.
          </p>
        </div>
        {/* Atmospheric BG Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-margin-desktop max-w-max-width mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Custom Building Card */}
          <div className="glass-card p-8 md:p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-lg bg-primary-container/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    terminal
                  </span>
                </div>
                <span className="font-label-sm text-on-surface-variant bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  2-3 WEEKS EST.
                </span>
              </div>
              <h3 className="font-headline-md text-white mb-4">
                Custom Building
              </h3>
              <p className="text-on-surface-variant mb-8">
                Bespoke workstation and gaming rig assembly with surgical
                precision and clean-room cable management.
              </p>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-label-md text-primary mb-3">
                    KEY BENEFITS
                  </h4>
                  <ul className="space-y-2 text-on-background font-body-md">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      100% Component Synergy
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Advanced Thermal Analysis
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      3-Year Craftsmanship Warranty
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-primary mb-4">PROCESS</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-primary">
                          01
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Consultation:</strong>{" "}
                        Identifying workload requirements and aesthetic goals.
                      </p>
                    </div>
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-primary">
                          02
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Assembly:</strong>{" "}
                        Multi-stage build process with stress-testing at every
                        tier.
                      </p>
                    </div>
                    <div className="flex gap-4 relative">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-primary">
                          03
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Calibration:</strong> OS
                        optimization and firmware stabilization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full border border-primary/30 text-primary py-4 rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300">
              Request Quote
            </button>
          </div>

          {/* Upgrades Card */}
          <div className="glass-card p-8 md:p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-lg bg-secondary-container/10 flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    memory
                  </span>
                </div>
                <span className="font-label-sm text-on-surface-variant bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  3-5 DAYS EST.
                </span>
              </div>
              <h3 className="font-headline-md text-white mb-4">
                Hardware Upgrades
              </h3>
              <p className="text-on-surface-variant mb-8">
                Modernize your current rig with next-generation components
                without the cost of a full system replacement.
              </p>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-label-md text-secondary mb-3">
                    KEY BENEFITS
                  </h4>
                  <ul className="space-y-2 text-on-background font-body-md">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Seamless Data Migration
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Bottleneck Diagnosis
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Component Recycling Program
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-secondary mb-4">PROCESS</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-secondary">
                          01
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Audit:</strong> Full
                        assessment of current chassis and power overhead.
                      </p>
                    </div>
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-secondary">
                          02
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Retrofitting:</strong>{" "}
                        Precision installation and driver updates.
                      </p>
                    </div>
                    <div className="flex gap-4 relative">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-secondary">
                          03
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Validation:</strong>{" "}
                        Comparative benchmarking to prove performance gains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full border border-secondary/30 text-secondary py-4 rounded-lg font-label-md hover:bg-secondary hover:text-on-secondary transition-all duration-300">
              Request Quote
            </button>
          </div>

          {/* Maintenance Card */}
          <div className="glass-card p-8 md:p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-lg bg-tertiary-container/10 flex items-center justify-center border border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">
                    precision_manufacturing
                  </span>
                </div>
                <span className="font-label-sm text-on-surface-variant bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  24 HOUR TURNAROUND
                </span>
              </div>
              <h3 className="font-headline-md text-white mb-4">
                Proactive Maintenance
              </h3>
              <p className="text-on-surface-variant mb-8">
                Protect your investment with professional deep-cleaning,
                thermal paste re-application, and loop maintenance.
              </p>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-label-md text-tertiary-fixed-dim mb-3">
                    KEY BENEFITS
                  </h4>
                  <ul className="space-y-2 text-on-background font-body-md">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Hardware Longevity
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      15-20% Temp Reductions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Aesthetic Restoration
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-tertiary-fixed-dim mb-4">
                    PROCESS
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-tertiary-container/20 border border-tertiary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-tertiary-fixed-dim">
                          01
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">
                          Decontamination:
                        </strong>{" "}
                        High-pressure ion-neutralized dust removal.
                      </p>
                    </div>
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-tertiary-container/20 border border-tertiary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-tertiary-fixed-dim">
                          02
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Re-pasting:</strong>{" "}
                        Application of industrial-grade liquid metal or TIM.
                      </p>
                    </div>
                    <div className="flex gap-4 relative">
                      <div className="w-6 h-6 rounded-full bg-tertiary-container/20 border border-tertiary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-tertiary-fixed-dim">
                          03
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Fluid Service:</strong>{" "}
                        (Liquid Cooled Only) Coolant flush and refill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full border border-tertiary/30 text-tertiary-fixed-dim py-4 rounded-lg font-label-md hover:bg-tertiary-container hover:text-on-tertiary-container transition-all duration-300">
              Request Quote
            </button>
          </div>

          {/* Optimization Card */}
          <div className="glass-card p-8 md:p-10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-lg bg-primary-container/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    speed
                  </span>
                </div>
                <span className="font-label-sm text-on-surface-variant bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  REMOTE AVAILABLE
                </span>
              </div>
              <h3 className="font-headline-md text-white mb-4">
                Performance Optimization
              </h3>
              <p className="text-on-surface-variant mb-8">
                Unlock the true potential of your silicon with expert
                overclocking, undervolting, and OS hardening.
              </p>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-label-md text-primary mb-3">
                    KEY BENEFITS
                  </h4>
                  <ul className="space-y-2 text-on-background font-body-md">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Frame Time Stability
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Reduced Latency
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">
                        check_circle
                      </span>{" "}
                      Power Efficiency Tuning
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-md text-primary mb-4">PROCESS</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-primary">
                          01
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Baseline:</strong>{" "}
                        Comprehensive synthetic and real-world testing.
                      </p>
                    </div>
                    <div className="flex gap-4 relative step-line">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-primary">
                          02
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Calibration:</strong>{" "}
                        Precise voltage and frequency curve adjustment.
                      </p>
                    </div>
                    <div className="flex gap-4 relative">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 z-10">
                        <span className="text-[10px] font-bold text-primary">
                          03
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">
                        <strong className="text-white">Hardening:</strong> 24h
                        stability validation and thermal monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full border border-primary/30 text-primary py-4 rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-margin-desktop max-w-max-width mx-auto pb-32">
        <div className="bg-primary text-on-primary rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">
              Ready to forge your ultimate machine?
            </h2>
            <p className="text-on-primary/80 font-body-lg mb-10">
              Our engineers are standing by to translate your vision into
              reality. No request is too complex for our workshop.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-on-primary text-primary px-8 py-4 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                Schedule Consultation
              </button>
              <button className="border border-on-primary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-on-primary/10 transition-colors">
                Download Pricing Guide
              </button>
            </div>
          </div>
          {/* Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}
