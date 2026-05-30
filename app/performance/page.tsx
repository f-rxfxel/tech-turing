export default function Performance() {
  const benchmarks = [
    {
      name: "Cyberpunk 2077 (Path Tracing)",
      fps: 82,
      industry: 45,
      forge: 78,
    },
    {
      name: "Alan Wake 2 (Ultra Settings)",
      fps: 94,
      industry: 52,
      forge: 86,
    },
    {
      name: "Elden Ring (Ray Tracing Max)",
      fps: 120,
      industry: 60,
      forge: 100,
    },
  ];

  return (
    <main className="max-w-max-width mx-auto px-4 md:px-margin-desktop py-12 space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8 space-y-4 text-left">
          <span className="font-label-md text-primary tracking-widest uppercase">
            Performance Analytics
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface max-w-2xl leading-tight">
            Precision benchmarks for elite hardware configurations.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Every FORGE build undergoes a rigorous 72-hour stress test. We
            don&apos;t just build; we optimize every frame and degree.
          </p>
        </div>
        <div className="lg:col-span-4 flex gap-4 justify-start lg:justify-end">
          <div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
            <span className="font-label-sm text-on-surface-variant mb-1">
              STABILITY
            </span>
            <span className="font-headline-md text-tertiary-container text-glow">
              99.9%
            </span>
          </div>
          <div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
            <span className="font-label-sm text-on-surface-variant mb-1">
              AVG FPS
            </span>
            <span className="font-headline-md text-primary text-glow">144+</span>
          </div>
        </div>
      </section>

      {/* AAA Game Performance Chart */}
      <section className="space-y-8 text-left">
        <div className="flex justify-between items-end border-b border-white/5 pb-4">
          <h2 className="font-headline-md text-headline-md">
            4K AAA Gaming Benchmarks
          </h2>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 font-label-sm">
              <span className="w-3 h-3 bg-primary rounded-full"></span> FORGE
              TITAN
            </span>
            <span className="flex items-center gap-2 font-label-sm">
              <span className="w-3 h-3 bg-surface-container-highest rounded-full"></span>{" "}
              INDUSTRY AVG
            </span>
          </div>
        </div>
        <div className="space-y-6">
          {benchmarks.map((b, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-2 items-center">
                <span className="font-label-md text-on-surface">{b.name}</span>
                <span className="font-label-md text-primary">{b.fps} FPS</span>
              </div>
              <div className="h-12 w-full bg-surface-container-lowest rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 h-full bg-surface-container-highest transition-all duration-1000 ease-out"
                  style={{ width: `${b.industry}%` }}
                ></div>
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-container to-primary transition-all duration-1000 delay-300 ease-out"
                  style={{ width: `${b.forge}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid: Synthetic Benchmarks & Thermals */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Thermal Data */}
        <div className="glass-card p-8 rounded-2xl md:col-span-1 space-y-6 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-tertiary-container mb-4 text-4xl">
              thermostat
            </span>
            <h3 className="font-headline-md">Thermal Efficiency</h3>
            <p className="font-body-md text-on-surface-variant mt-2">
              Peak load temperatures across the CPU and GPU dye.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-white/10 pb-2">
              <span className="font-label-sm text-on-surface-variant uppercase">
                CPU (Idle)
              </span>
              <span className="font-label-md text-tertiary">28°C</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-2">
              <span className="font-label-sm text-on-surface-variant uppercase">
                CPU (Full Load)
              </span>
              <span className="font-label-md text-tertiary">64°C</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-2">
              <span className="font-label-sm text-on-surface-variant uppercase">
                GPU (Max Hotspot)
              </span>
              <span className="font-label-md text-tertiary">71°C</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-tertiary-container/10 p-4 rounded-lg border border-tertiary-container/20">
            <span className="material-symbols-outlined text-tertiary-container">
              check_circle
            </span>
            <span className="font-label-sm text-tertiary">
              Within optimal delta range
            </span>
          </div>
        </div>

        {/* Synthetic Scores */}
        <div className="glass-card p-8 rounded-2xl md:col-span-2 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md">Synthetic Benchmarks</h3>
              <p className="font-body-md text-on-surface-variant">
                Validated scores for productivity and rendering.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-sm">
                3DMark
              </span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-sm">
                Cinebench
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-on-surface-variant font-label-sm uppercase tracking-widest">
                3DMark Time Spy Extreme
              </div>
              <div className="text-display-lg font-display-lg text-primary leading-none">
                18,442
              </div>
              <div className="text-tertiary font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined">trending_up</span>
                Top 1% Global Result
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-on-surface-variant font-label-sm uppercase tracking-widest">
                Cinebench R23 (Multi)
              </div>
              <div className="text-display-lg font-display-lg text-primary leading-none">
                38,910
              </div>
              <div className="text-tertiary font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined">bolt</span>
                Maximum Multi-core Efficiency
              </div>
            </div>
          </div>
          {/* Table View */}
          <div className="overflow-hidden rounded-xl border border-white/5">
            <table className="w-full text-left font-label-sm">
              <thead className="bg-surface-container-low text-on-surface-variant">
                <tr>
                  <th className="p-4">Benchmark Tool</th>
                  <th className="p-4">FORGE Score</th>
                  <th className="p-4">Avg Competitor</th>
                  <th className="p-4">Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4">Geekbench 6 (Single)</td>
                  <td className="p-4 text-primary">3,105</td>
                  <td className="p-4">2,740</td>
                  <td className="p-4 text-tertiary">+13.3%</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4">V-Ray Render Score</td>
                  <td className="p-4 text-primary">24,500</td>
                  <td className="p-4">21,200</td>
                  <td className="p-4 text-tertiary">+15.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-headline-lg text-headline-lg">
            The FORGE Impact
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            See the real-world difference between a generic off-the-shelf build
            and a FORGE-optimized machine.
          </p>
        </div>
        <div className="relative group h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              alt="Comparison"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHzkQDv6HemK4ymFUIzq5AeuiLMrYrj975sX11z1WnRHrGWrKxgzEfhgZkkn4_Dgtm89OgdPKqgyd3xJHN6rJXBG9pfPUziZUD52x1VmuMexsfuYNzB_Wp2IZIyQPs0Kjz_JqRVq7hFKTBfD_EOtn_I3cbRtG_XCbMu9dyXdKXgtBBso5YKJa_2rt7jpJzGAIobEJ8iUtXMXiX_9CeZZSElDICHFn4L5G3MpaAaxf2yCM42jGQNbGNgsGxi6elTwf8k3Hhj3bU5YE"
            />
          </div>
          <div className="absolute inset-0 grid grid-cols-2 pointer-events-none text-left">
            <div className="flex flex-col justify-end p-12 bg-gradient-to-t from-black/80 to-transparent">
              <div className="space-y-2">
                <span className="font-label-md text-white/60">
                  GENERIC BUILD
                </span>
                <div className="font-headline-md text-white">
                  Inconsistent Frame Pacing
                </div>
                <div className="text-error font-headline-lg">48 FPS AVG</div>
              </div>
            </div>
            <div className="flex flex-col justify-end p-12 bg-gradient-to-t from-primary/20 to-transparent border-l border-primary/30 backdrop-blur-sm">
              <div className="space-y-2">
                <span className="font-label-md text-primary">
                  FORGE OPTIMIZED
                </span>
                <div className="font-headline-md text-primary">
                  Ultra-Fluid 1% Lows
                </div>
                <div className="text-primary font-headline-lg text-glow">
                  144 FPS AVG
                </div>
              </div>
            </div>
          </div>
          {/* Slider Handle */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/50 -translate-x-1/2 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_20px_rgba(0,219,233,0.5)]">
              <span className="material-symbols-outlined">unfold_more</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="glass-card rounded-3xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        <h2 className="font-headline-lg text-headline-lg uppercase">
          Ready to exceed every benchmark?
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
          Consult with our engineers to build a machine that doesn&apos;t just meet
          requirements—it redefines them.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-headline-md hover:scale-105 transition-transform shadow-xl">
            Start Your Build
          </button>
          <button className="border border-white/20 bg-white/5 backdrop-blur-md text-on-surface px-10 py-5 rounded-lg font-headline-md hover:bg-white/10 transition-colors">
            View Gallery
          </button>
        </div>
      </section>
    </main>
  );
}
