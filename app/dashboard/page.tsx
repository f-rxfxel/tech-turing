export default function Dashboard() {
  return (
    <main className="max-w-max-width mx-auto px-margin-desktop py-12 text-left">
      {/* Top Status Bar */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label-sm text-primary uppercase tracking-widest mb-2 block text-xs">
              Project ID: F-992-DELTA
            </span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
              System Build: Obsidian-X7
            </h1>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-white/5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                engineering
              </span>
            </div>
            <div>
              <p className="font-label-sm text-on-surface-variant text-[10px] uppercase">
                Assigned Technician
              </p>
              <p className="font-body-md font-bold text-on-surface">
                Marcus Vance
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Build Progress: Testing Phase */}
        <section className="md:col-span-8 glass-panel p-8 rounded-2xl flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
                Build Progress
              </h2>
              <span className="bg-tertiary-container/20 text-tertiary px-4 py-1 rounded-full font-label-sm border border-tertiary/20 flex items-center gap-2 text-[10px] uppercase">
                <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                Testing Phase
              </span>
            </div>
            <div className="space-y-12">
              {/* Custom Progress Bar */}
              <div className="relative pt-4">
                <div className="h-[2px] w-full bg-white/10 absolute top-1/2 -translate-y-1/2"></div>
                <div className="h-[2px] w-[75%] bg-primary absolute top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,219,233,0.5)]"></div>
                <div className="flex justify-between items-center relative z-10">
                  {[
                    { label: "Prep", active: true },
                    { label: "Assembly", active: true },
                    { label: "Testing", active: true, current: true },
                    { label: "Validation", active: false },
                    { label: "Delivery", active: false },
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-4 border-background ${
                          step.active ? "bg-primary" : "bg-white/20"
                        } ${
                          step.current
                            ? "w-6 h-6 shadow-[0_0_10px_rgba(0,219,233,0.4)]"
                            : ""
                        }`}
                      ></div>
                      <span
                        className={`font-label-sm text-[10px] uppercase ${
                          step.active ? "text-primary" : "text-on-surface-variant"
                        } ${step.current ? "font-bold" : ""}`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="font-label-sm text-on-surface-variant block mb-1 text-[10px] uppercase">
                    CPU Stress Test
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-label-md text-tertiary text-xs">
                      98.4%
                    </span>
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary-container w-[98%]"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="font-label-sm text-on-surface-variant block mb-1 text-[10px] uppercase">
                    GPU Thermal
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-label-md text-tertiary text-xs">
                      Passed
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-sm">
                      check_circle
                    </span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="font-label-sm text-on-surface-variant block mb-1 text-[10px] uppercase">
                    Memory Latency
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-label-md text-primary text-xs">
                      Optimizing
                    </span>
                    <span className="material-symbols-outlined text-primary text-sm animate-spin">
                      refresh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technician Messages */}
        <section className="md:col-span-4 glass-panel p-8 rounded-2xl flex flex-col max-h-[400px] md:max-h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
              Secure Feed
            </h2>
            <span className="material-symbols-outlined text-on-surface-variant">
              verified_user
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-hide">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-primary text-[10px] uppercase">
                  MARCUS V.
                </span>
                <span className="font-label-sm text-on-surface-variant text-[10px]">
                  2h ago
                </span>
              </div>
              <p className="bg-surface-container-high p-4 rounded-xl rounded-tl-none font-body-md text-on-surface italic text-sm">
                &quot;Assembly complete. We&apos;ve initiated the 48-hour thermal
                soak. The custom loop looks stunning in the Obsidian
                chassis.&quot;
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-primary text-[10px] uppercase">
                  SYSTEM
                </span>
                <span className="font-label-sm text-on-surface-variant text-[10px]">
                  Yesterday
                </span>
              </div>
              <p className="bg-surface-container-high p-4 rounded-xl rounded-tl-none font-body-md text-on-surface text-sm">
                Firmware flashed successfully. All motherboard components
                recognized on PCIe 5.0 lanes.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                className="flex-1 bg-surface-container-lowest border-none rounded-lg font-body-md text-on-surface focus:ring-1 focus:ring-primary h-12 px-4 text-sm"
                placeholder="Reply to technician..."
                type="text"
              />
              <button className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-lg hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </section>

        {/* Component List */}
        <section className="md:col-span-5 glass-panel p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
              Inventory Status
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: "memory",
                name: "Intel Core i9-14900K",
                detail: "Serial: #88219-X",
                status: "Arrived",
                color: "text-tertiary",
              },
              {
                icon: "motion_photos_on",
                name: "RTX 4090 Founders Ed.",
                detail: "Serial: #NV-4090-FE",
                status: "Arrived",
                color: "text-tertiary",
              },
              {
                icon: "router",
                name: "64GB DDR5 8000MT/s",
                detail: "Trident Z5 RGB",
                status: "In-Stock",
                color: "text-primary",
              },
              {
                icon: "cable",
                name: "Custom Sleeve Kit (Carbon)",
                detail: "Hand-braided",
                status: "Pending",
                color: "text-on-surface-variant",
                dim: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-2 border-primary shadow-sm ${
                  item.dim ? "opacity-60" : ""
                }`}
                style={{ borderColor: "var(--color-primary)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-body-md font-bold text-on-surface text-sm">
                      {item.name}
                    </p>
                    <span className="font-label-sm text-on-surface-variant text-[10px] uppercase">
                      {item.detail}
                    </span>
                  </div>
                </div>
                <span className={`${item.color} font-label-sm font-bold text-[10px] uppercase`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Build Gallery */}
        <section className="md:col-span-7 glass-panel p-8 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
              Progress Photos
            </h2>
            <button className="text-primary font-label-sm hover:underline text-xs uppercase">
              View All (12)
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="aspect-square relative group overflow-hidden rounded-xl bg-surface-container-highest cursor-pointer">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Motherboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BYspRPzAgEy5f8QZTTyuvkFv1nc930MyY5A0FDroi9--F3e6iGdPPMfqhWNOX5CN-Z0JQI98xlutiHgF3hR0DhP2TFMdHYNrz0M3Ol50imBW_DFTDb-W52_vukw_tFyX8bgZi2h3vOVgqRwLdZpLP8wAOea7f_4peU3cftOLXvZmr4BMDnx3-vyOSZ0KFkzhv3IUkQEZc0w7J6Nx1h08yhUg_jA8ikdSPTN51AFXWKYURjrkgm__7_73kglYSYj-mk5Lcsku_tI"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-primary scale-150">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="aspect-square relative group overflow-hidden rounded-xl bg-surface-container-highest cursor-pointer">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Cooling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSyyBMyyuulwWjmu7P35IlZ8smf_vvsawH7-WHRZY9HVBwyh0XxlzfLkiyovuwD329ckCJnML_UdEvTjYxdX2D-0sRyfJAxjbOgFeF0DTqwtybtcXb6suMSldB5qxCG3toTOfGFN-0_-q8TdvgKGeIj288mccTeJUq3lyz7dpAEnOXE3J_uzRP7I3sKgbRFtidgqTKw0Pbgubx53ZaMAKOmPZ5aNa-zXA-YdG4gGWAUbWsl6iqlPsA3fOkgmnHwaGBNMlDWnbvetI"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-primary scale-150">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="aspect-square relative group overflow-hidden rounded-xl bg-surface-container-highest cursor-pointer hidden sm:block">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Chassis"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU9vulbZki6znDMjvQBqoWw9M2gw7gqWjUsySVpTODp2AYiNT8tNbwJ1NzvLY8nW1D316Ckfg2WgoPQ_ntS-EdY4O8Mrt8UV2CVNjyEU-UooF9eyno5AxpcUW1aI4Kru_Z7fr-dQi2QAEDlp9mLbOcJd4OCKAWloRFStIsS-tk1G4ZCsZXxnyh594a_bS0aGsh9o_fHH46oRNaFjFJK0EhwudkjMDoGgpEBAYDMuBfEZ91d0mADnHHc0NXfYqH5yjbXGotQwJc0RE"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-primary scale-150">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-3 h-48 relative group overflow-hidden rounded-xl bg-surface-container-highest cursor-pointer">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Lab"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRdkb_1HMqWd0XDsdOHzeQXO_-pECauU0ol_x3nBw0MbBJOO7G94WIQ9gsp12_32_WDrXVEpbyR_eCFQ1zV39SdhmxiysFicPPiuMxXImmh0j1fgI5dyeqthLLNxiwUIsohIHTamxGd6a3g-6GjuAuIZg8ZK89Iozar7rrnLQeJYaoJ0Z8Z74GofRqnfZl0icdO7clBN4u2FVqiSOU3M0IvJJLyGsqYMgCNlYRc7SVEnV_juCIt5jYbY01QC8CInwdaKOnWZa-G0M"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="font-label-md text-on-surface text-xs uppercase">
                  Thermal Testing Lab - Day 14
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* System Stats / Technical Telemetry */}
      <section className="mt-gutter grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {[
          { label: "Build Duration", value: "12.5", unit: "Days", color: "text-primary" },
          { label: "Thermal Headroom", value: "34%", color: "text-tertiary" },
          { label: "Power Efficiency", value: "Platinum", color: "text-primary" },
          { label: "Est. Delivery", value: "OCT 24", color: "text-on-surface" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="font-label-sm text-on-surface-variant mb-2 text-[10px] uppercase">
              {stat.label}
            </span>
            <span className={`font-display-lg text-headline-lg ${stat.color}`}>
              {stat.value}{" "}
              {stat.unit && <span className="text-body-md text-sm">{stat.unit}</span>}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
