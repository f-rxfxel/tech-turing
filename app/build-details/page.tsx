export default function BuildDetails() {
  const specs = [
    {
      icon: "memory",
      label: "Processor",
      value: "Intel Core i9-14900KS",
      detail: "6.2GHz P-Core | 24 Cores | 32 Threads",
    },
    {
      icon: "screenshot_monitor",
      label: "Graphics",
      value: "RTX 4090 OC Edition",
      detail: "24GB GDDR6X | Triple Fan Thermal Array",
    },
    {
      icon: "developer_board",
      label: "Memory",
      value: "64GB Dominator Titanium",
      detail: "DDR5 8000MHz | CL38 Timings",
    },
    {
      icon: "storage",
      label: "Storage",
      value: "4TB Crucial T705",
      detail: "NVMe Gen5 | 14,500MB/s Sequential",
    },
    {
      icon: "ac_unit",
      label: "Thermal Management",
      value: "Forge Custom Loop",
      detail: "420mm Copper Radiator | Dual D5 Pumps",
    },
    {
      icon: "aspect_ratio",
      label: "Chassis",
      value: "Lian Li V3000 Plus",
      detail: "Obsidian Black | Extended ATX Structure",
    },
  ];

  const benchmarks = [
    { name: "Cyberpunk 2077 (DLSS 3.5)", value: "124 FPS", width: "85%" },
    { name: "Flight Simulator (Ultra)", value: "98 FPS", width: "65%" },
    { name: "Cinebench R23 (Multi-Core)", value: "42,108 pts", width: "95%" },
  ];

  return (
    <main>
      {/* Hero Section: Project APEX-01 */}
      <section className="max-w-max-width mx-auto px-margin-desktop py-16 text-left">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 w-fit rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px] md:text-xs">
                Build Status: Certified
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary mb-4 leading-tight">
              PROJECT APEX-01
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-xl">
              A bespoke engineering masterpiece designed for ultra-low latency
              workstation tasks and competitive 4K gaming. Built with
              industrial-grade precision and a monochromatic aesthetic.
            </p>
            <div className="flex gap-4">
              <div className="p-4 glass-card rounded-lg flex-1">
                <div className="font-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
                  STABILITY
                </div>
                <div className="font-headline-md text-headline-md text-primary">
                  168H
                </div>
              </div>
              <div className="p-4 glass-card rounded-lg flex-1">
                <div className="font-label-sm text-on-surface-variant mb-1 uppercase text-[10px]">
                  THERMALS
                </div>
                <div className="font-headline-md text-headline-md text-tertiary-container">
                  32°C
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-4 h-[400px] md:h-[600px] mt-12 lg:mt-0">
            <div className="col-span-4 row-span-2 overflow-hidden rounded-xl border border-white/10 group">
              <img
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
                alt="Main build shot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwTNi-oOvrBdbzS4NG6zvIjQIBDTMcgiKSsdwVEte44wDpo3NFxXcyyIQIYmt2T85mQmToBDqhhS6P_qV64rQo5323bggCMJyjv_QxANzngys63htvnXM9gqT9jkXYKDabkn3f4ZGP95Ig8rOP9b7b0L1PP7Pe6jKXTICs7Dyb84IWU4S1C8Doa4wzexHHFHnOj4KghkJnFChQJ5iJm-ZO1A8cZvAWjg2I45UJ71uNdjCE31uA9XUNn7YWBoYuH3ozDWZ3IdkEwcM"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl border border-white/10 group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Hardware detail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZaHu0xFunBZYssEW-w4CKwdfz1dvFVCzC94EWfImzpxaHKkGhfMIla_pqoOzxHNTBylnwYADZ47V3NlSxqEt6ocgxFm9Fv2yR3E3DkpNB7uWcPyJXJYdxUCb1_UlIhE2LKMBG7C09aH8mP_Duveaw6Ck4-wZ6mAGMGndzuamfVMMeESd41bKwXflijM1yxhINl-yfyBNQednCQiYix2_LMj9RxCImxdN8R85MCovlB_ePB_6kraiGL8thFxK77Onh3Nr-fH_HfZc"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl border border-white/10 group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Chassis profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6wcc8tCyWjqbx8mWdIXLB002tNNkDbMif9hd-IT8fUPsJXo3guua1pT7avHz6jQED5MmZBcfYjrmIVCxd6w1FPSA1HQJiIGJW60TPYriPThrW97ZQcDDhO1cCpY40kf0CsFAyVhkj0qWVhH_gD4K4tl1oQjJngtWWpob70adqVV5YohxNfRNoGuVaVpQS9CSTXT5w_kRO4CZSE82u01oeLAkyqjh4Cys2nstuO5Z2QzssCI2c5tq_Fo9jeOWeZUkaLschDsoZvww"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Grid */}
      <section className="bg-surface-container-lowest py-24 text-left">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="mb-16 border-l-4 border-primary pl-8">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">
              Hardware Configuration
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Validated component architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((s, i) => (
              <div key={i} className="glass-card p-8 rounded-xl glow-hover transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {s.icon}
                  </span>
                  <span className="font-label-md text-on-surface-variant uppercase text-xs">
                    {s.label}
                  </span>
                </div>
                <div className="font-headline-md text-headline-md mb-2">
                  {s.value}
                </div>
                <div className="font-label-sm text-primary/60 text-xs">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks Area */}
      <section className="py-24 max-w-max-width mx-auto px-margin-desktop text-left">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display-lg text-headline-lg text-on-background mb-6 leading-tight uppercase">
              Performance
              <br />
              <span className="text-primary">Metrics</span>
            </h2>
            <p className="font-body-md text-on-surface-variant mb-10">
              Real-world benchmarks recorded at 4K Resolution, Ultra Settings,
              Ray Tracing Enabled.
            </p>
            <div className="space-y-8">
              {benchmarks.map((b, i) => (
                <div key={i}>
                  <div className="flex justify-between font-label-md mb-2 text-sm">
                    <span>{b.name}</span>
                    <span className="text-primary">{b.value}</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary-fixed-dim transition-all duration-1000"
                      style={{ width: b.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-12 overflow-hidden relative mt-12 lg:mt-0">
            <div className="absolute top-0 right-0 p-8">
              <span className="font-label-sm text-tertiary-container border border-tertiary-container/30 px-3 py-1 rounded bg-tertiary-container/10 text-[10px] uppercase">
                STRESS TEST: STABLE
              </span>
            </div>
            <div className="font-label-sm text-on-surface-variant mb-8 uppercase tracking-[0.2em] text-xs">
              Thermals & Load Stability
            </div>
            {/* Simple visual graph */}
            <div className="h-[250px] w-full flex items-end gap-2">
              {[40, 42, 45, 60, 85, 92, 88, 95, 90, 85, 80, 75, 78].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-all cursor-pointer"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-6 font-label-sm text-on-surface-variant text-[10px] uppercase">
              <span>0m</span>
              <span>15m</span>
              <span>30m</span>
              <span>45m</span>
              <span>60m Sustained Load</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Highlights */}
      <section className="bg-surface-container py-24 text-left">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4 uppercase">
              Engineering Highlights
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              The difference is in the details. Every Forge PC undergoes a
              rigorous multi-point inspection and tuning process.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 auto-rows-[240px]">
            <div className="col-span-12 md:col-span-8 glass-card p-10 rounded-2xl relative overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>
              <span className="material-symbols-outlined text-primary text-5xl mb-6">
                settings_suggest
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                BIOS & Firmware Optimization
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-lg">
                Custom voltage curves, undervolting profiles for thermal
                efficiency, and XMP/EXPO validation to ensure 24/7 stability at
                peak frequencies.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-10 rounded-2xl flex flex-col justify-between">
              <h3 className="font-headline-md text-headline-md leading-tight">
                Master-Class Cable Management
              </h3>
              <span className="material-symbols-outlined text-5xl">cable</span>
              <p className="font-label-md text-sm">
                Point-to-point custom sleeving with individual aluminum combs
                for an aerospace-grade interior.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 glass-card p-10 rounded-2xl flex flex-col items-center text-center justify-center border-tertiary-container/20">
              <span className="material-symbols-outlined text-tertiary-container text-5xl mb-4">
                verified
              </span>
              <h3 className="font-headline-md text-headline-md mb-2">
                168-Hour Testing
              </h3>
              <p className="font-label-sm text-on-surface-variant text-xs uppercase">
                Continuous stress-testing via AIDA64 and Prime95 to guarantee
                zero hardware failures.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 glass-card p-10 rounded-2xl flex flex-col justify-center overflow-hidden relative">
              <div className="flex gap-12 items-center">
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    Zero-Bloat OS
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    A stripped-down, clean installation of Windows 11 Pro,
                    optimized for system latency and DPC interrupt
                    minimization.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-24 h-24 rounded-full border-[8px] border-primary/10 border-t-primary animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <h2 className="font-display-lg text-display-lg text-primary mb-8 tracking-tighter uppercase">
          Ready for Ascension?
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
          Own a unique piece of engineering. Start-to-finish white glove builds
          available for order.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-headline-md hover:scale-105 transition-transform uppercase tracking-wider text-sm">
            Configure Yours
          </button>
          <button className="border border-white/20 backdrop-blur-md px-10 py-5 rounded-lg font-headline-md hover:bg-white/5 transition-colors uppercase tracking-wider text-sm">
            Download Specs PDF
          </button>
        </div>
      </section>
    </main>
  );
}
