"use client";

import { useState } from "react";

export default function Configurator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    budget: "",
    purpose: "",
    platform: "",
    aesthetic: "",
  });

  const steps = ["step-1", "step-2", "step-3", "step-4", "result-view"];
  const labels = [
    "Budget Selection",
    "Primary Mission",
    "Platform Choice",
    "Visual Identity",
    "System Analysis",
  ];

  const handleNextStep = (nextStepNum: number, value: string) => {
    const key =
      nextStepNum === 2
        ? "budget"
        : nextStepNum === 3
        ? "purpose"
        : nextStepNum === 4
        ? "platform"
        : "aesthetic";
    
    setSelections((prev) => ({ ...prev, [key]: value }));
    setStep(nextStepNum);
  };

  const getBuildDetails = () => {
    if (selections.budget === "Core") {
      return {
        title: `FORGE Core: ${selections.aesthetic}`,
        cpu: selections.platform === "AMD" ? "AMD Ryzen 5 7600X" : "Intel Core i5-14600K",
        gpu: "NVIDIA RTX 4070 Super 12GB",
        price: "$1,649",
        fps1440: "92%",
        fps4k: "65%",
        render: "7/10",
      };
    } else if (selections.budget === "Apex") {
      return {
        title: `FORGE Apex: ${selections.aesthetic}`,
        cpu: selections.platform === "AMD" ? "AMD Ryzen 7 7800X3D" : "Intel Core i7-14700K",
        gpu: "NVIDIA RTX 4080 Super 16GB",
        price: "$2,849",
        fps1440: "96%",
        fps4k: "82%",
        render: "9/10",
      };
    } else {
      return {
        title: `FORGE Ultra: ${selections.aesthetic}`,
        cpu: selections.platform === "AMD" ? "AMD Ryzen 9 7950X3D" : "Intel Core i9-14900KS",
        gpu: "NVIDIA RTX 4090 24GB",
        price: "$4,299",
        fps1440: "99%",
        fps4k: "95%",
        render: "10/10",
      };
    }
  };

  const build = getBuildDetails();

  return (
    <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      {/* Configurator Container */}
      <div className="relative min-h-[600px] flex flex-col items-center">
        {/* Progress Stepper */}
        <div className="w-full max-w-2xl mb-16 px-4">
          <div className="flex justify-between mb-4">
            <span className="font-label-sm text-on-surface-variant uppercase tracking-[0.2em]">
              Step {step > 4 ? 4 : step} of 4
            </span>
            <span className="font-label-sm text-primary uppercase tracking-[0.2em]">
              {labels[step - 1]}
            </span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="progress-bar-fill h-full bg-primary-container shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all duration-500"
              style={{ width: `${Math.min(step * 25, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Budget */}
        {step === 1 && (
          <section className="w-full max-w-5xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-4">
              Define your investment.
            </h1>
            <p className="font-body-lg text-on-surface-variant text-center mb-12 max-w-xl">
              Select a price range that aligns with your performance goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full">
              <button
                className="glass-card p-8 rounded-xl text-left group"
                onClick={() => handleNextStep(2, "Core")}
              >
                <div className="font-label-md text-tertiary mb-2 uppercase tracking-widest">
                  Core Series
                </div>
                <div className="font-headline-md text-white mb-4">
                  $1,200 - $1,800
                </div>
                <p className="font-body-md text-on-surface-variant">
                  Exceptional 1440p gaming and reliable multitasking performance.
                </p>
              </button>
              <button
                className="glass-card p-8 rounded-xl text-left group border-primary/50"
                onClick={() => handleNextStep(2, "Apex")}
              >
                <div className="font-label-md text-primary mb-2 uppercase tracking-widest">
                  Apex Series
                </div>
                <div className="font-headline-md text-white mb-4">
                  $2,000 - $3,200
                </div>
                <p className="font-body-md text-on-surface-variant">
                  Top-tier components for high-refresh 4K gaming and creative
                  workflows.
                </p>
              </button>
              <button
                className="glass-card p-8 rounded-xl text-left group"
                onClick={() => handleNextStep(2, "Enthusiast")}
              >
                <div className="font-label-md text-on-secondary-container mb-2 uppercase tracking-widest">
                  Ultra Series
                </div>
                <div className="font-headline-md text-white mb-4">$4,000+</div>
                <p className="font-body-md text-on-surface-variant">
                  No compromises. Liquid-cooled powerhouse for professional
                  rendering.
                </p>
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Purpose */}
        {step === 2 && (
          <section className="w-full max-w-5xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-4">
              What&apos;s the mission?
            </h1>
            <p className="font-body-lg text-on-surface-variant text-center mb-12 max-w-xl">
              We optimize component synergy based on your primary use case.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full">
              <button
                className="glass-card p-10 rounded-xl flex flex-col items-center text-center group"
                onClick={() => handleNextStep(3, "Gaming")}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    sports_esports
                  </span>
                </div>
                <div className="font-headline-md text-white mb-2">Pure Gaming</div>
                <p className="font-body-md text-on-surface-variant">
                  Maximum FPS and low latency optimization.
                </p>
              </button>
              <button
                className="glass-card p-10 rounded-xl flex flex-col items-center text-center group"
                onClick={() => handleNextStep(3, "Work")}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    precision_manufacturing
                  </span>
                </div>
                <div className="font-headline-md text-white mb-2">
                  Workstation
                </div>
                <p className="font-body-md text-on-surface-variant">
                  Multi-threaded power for 3D, Video, and AI.
                </p>
              </button>
              <button
                className="glass-card p-10 rounded-xl flex flex-col items-center text-center group"
                onClick={() => handleNextStep(3, "Streaming")}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    podcasts
                  </span>
                </div>
                <div className="font-headline-md text-white mb-2">Streaming</div>
                <p className="font-body-md text-on-surface-variant">
                  Encoder-heavy builds for stable high-bitrate live shows.
                </p>
              </button>
            </div>
          </section>
        )}

        {/* Step 3: Platform */}
        {step === 3 && (
          <section className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-4">
              Select your architecture.
            </h1>
            <p className="font-body-lg text-on-surface-variant text-center mb-12 max-w-xl">
              Choose between the world&apos;s leading processor ecosystems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter w-full">
              <button
                className="glass-card p-12 rounded-xl flex items-center gap-8 group text-left"
                onClick={() => handleNextStep(4, "Intel")}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#0071C5]/10 rounded-lg flex items-center justify-center border border-[#0071C5]/30">
                  <img
                    alt="Intel Logo"
                    className="w-16 h-auto grayscale group-hover:grayscale-0 transition-all"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUu1nsxA_C_U0BmyzyB0fXuA9sh-UfQE_lD7sjF9jjUsIUTwZkzqjE4P4LL5BoeJGX3tRaqlT2KyioeQAuw9MfhpyyIsOdGNo0A1pfTYc_fVaHOvU65wZWzRhuiTPjBlaBAe9XR1mXmQLJ7tJJ3A4iZAoHAjKuXPgbB837x27vHLgviR6kWnyHh4MhxNo9QFAeyzss_Sz5S3-YOvDXJg6HWFFtiTRvPbcQCl-ka_s5hSDkuM-d5qsCLpbNp2JEQYYQqsfwkfaOiHw"
                  />
                </div>
                <div>
                  <div className="font-headline-md text-white mb-1">
                    Team Blue
                  </div>
                  <p className="font-body-md text-on-surface-variant">
                    Superior single-core clocks and hybrid architecture.
                  </p>
                </div>
              </button>
              <button
                className="glass-card p-12 rounded-xl flex items-center gap-8 group text-left"
                onClick={() => handleNextStep(4, "AMD")}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#ED1C24]/10 rounded-lg flex items-center justify-center border border-[#ED1C24]/30">
                  <img
                    alt="AMD Logo"
                    className="w-16 h-auto grayscale group-hover:grayscale-0 transition-all"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNn4MG0hoQZHcige8a50_l-dh-aOT7J2MAP2mUfwkBt7WyafTUo443r-Rvk_cz3GoUs2ECCIAd6SROlIZ0zILt4PFmesHXljjn1tuXYEtE8n4xkeTAxIjrapR84jEjP2uRzeNJeBHLNTyPg-SMgF9Um1iKMidSgLo-_WsuD79JM5uONYfu-fuilBEBz6Gh7X5LzvJh3lcRxDdoI6UNd7A6PX2aCVstAs5mHQOwuBZ8YS-Tu5WpchDjBNLkaWyM09qvxDYuJD8RjY"
                  />
                </div>
                <div>
                  <div className="font-headline-md text-white mb-1">Team Red</div>
                  <p className="font-body-md text-on-surface-variant">
                    Leading efficiency and massive L3 cache for gaming.
                  </p>
                </div>
              </button>
            </div>
          </section>
        )}

        {/* Step 4: Aesthetics */}
        {step === 4 && (
          <section className="w-full max-w-5xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-4">
              Visual Identity.
            </h1>
            <p className="font-body-lg text-on-surface-variant text-center mb-12 max-w-xl">
              Every FORGE build is a piece of art. How should yours look?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full">
              <button
                className="glass-card overflow-hidden rounded-xl group"
                onClick={() => handleNextStep(5, "Stealth")}
              >
                <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    alt="Stealth build"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhe7T2lKNvkxT6SqaFjaF08EwCL8Xfqd6HUoH0U49Ss08WKxQ-CB8GAM1CldAKYeZf-WXQorIsRQkHf3ZBhMfUHeckJWl7sZPk9gNMXpODy8S6ga_Ue30OA9P-AVTtq13vWh6riZcYmWdsNAwEapfxlj4LYOC-3xpLUktOCmP_smgHohfH0-HBSKXEmbfUfDf-5B3f2I1jYxypkKfA0lcOYWxJD-HQDNq-3EV5eaHQC9MNM0GQqATgvYenLeCYxPvkHwLfpZW3rMc"
                  />
                </div>
                <div className="p-8 text-left">
                  <div className="font-headline-md text-white mb-2">Stealth</div>
                  <p className="font-body-md text-on-surface-variant">
                    Matte black components, zero RGB, ultimate focus.
                  </p>
                </div>
              </button>
              <button
                className="glass-card overflow-hidden rounded-xl group"
                onClick={() => handleNextStep(5, "Alpine")}
              >
                <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    alt="Alpine build"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ2nYZrpC9-Txbzu3jFABzhmmJU7U2q7UCeCq0BDXWRC18wV7b2y7t7zQQ-PqJGfIqC4mA7Ej7bVaRwXLDZXpxtup_WDRymbXnlp0H6cSRQTTZVtJLaNp2qDIlDuj05dGQ8fFbhsQaI9HrSzY2GIwlmS9XvsfZf4SrA7QaTlUuwyaqS307u1bmIp-XSlRLfYQLw3s8vXHpM0KOWStAhntW5uo6-iQiR-1QGajEA7xrmZZk8kLw3rIMAYlrM4eHqev1GYRIbTOoZ6M"
                  />
                </div>
                <div className="p-8 text-left">
                  <div className="font-headline-md text-white mb-2">Alpine</div>
                  <p className="font-body-md text-on-surface-variant">
                    Clean white chassis with frosted glass accents.
                  </p>
                </div>
              </button>
              <button
                className="glass-card overflow-hidden rounded-xl group"
                onClick={() => handleNextStep(5, "Spectrum")}
              >
                <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/20 to-primary-container/20 mix-blend-overlay"></div>
                  <img
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    alt="Spectrum build"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_h51pY5EzO0MCSZZGk8tMh2d48dipTiNFvVtSdr6ISnCknQsxgJZq1Y0nxiSWPdzHeA6kbXo0uijboHqpn0bPLBRN3dBsUx5K5MLgB123fEFf0O-UVoRg_08noU2vPCTv1XYh8I_ZpaAjs6J2VehWh4SS3HPzBt-TWMBlJr9oIKU3grC2bo4IUzSZuTPWysn5xC9mHP4t9pN3bRMYRpIN0TynnBTKJwMr510SEvMvcC4w6y4WXQXjHjEbmc_C5FIVIcH0BhO8g60"
                  />
                </div>
                <div className="p-8 text-left">
                  <div className="font-headline-md text-white mb-2">
                    Spectrum
                  </div>
                  <p className="font-body-md text-on-surface-variant">
                    Full ARGB synchronization with performance mapping.
                  </p>
                </div>
              </button>
            </div>
          </section>
        )}

        {/* Result: Final Build Card */}
        {step === 5 && (
          <section className="w-full max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Left: Hero Visual */}
              <div className="lg:col-span-7 glass-card p-2 rounded-xl overflow-hidden relative group">
                <div className="absolute top-8 left-8 z-10">
                  <div className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full font-label-sm">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      bolt
                    </span>
                    SYSTEM OPTIMIZED
                  </div>
                </div>
                <img
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                  alt="Final Build Result"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSJxcrLp7ID5eQsV1SMBqNe6dHQjrCH1v-ynMlTolUs0slkAocU--4BDM7oZ6U-QO-N1eBu2hM49CNmCMV28fh9Y3ifap76YYmYVT6ktgW8kd-0njxYVud0oJPBbY0IaahkEEoHUXiH1rnGhb8KYXM8zFG1ffcRk9HJu1Uz3swKbzQC_Ra54RlAuK9_cAXZfv4XxbKQyhI0g8tWk1vpqvZ-aMA8oYNnoWOf4ihu-X8OYNLKcoFLuyidCRHtoD9Ss3c0LgMdbNRIGc"
                />
                <div className="mt-8 p-6">
                  <h3 className="font-headline-md text-white mb-8">
                    Performance Estimates
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-2 font-label-sm uppercase text-on-surface-variant">
                        1440p Ultra Gaming
                      </div>
                      <div className="flex items-end gap-4">
                        <div className="h-3 bg-white/5 flex-grow rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-container transition-all duration-1000"
                            style={{ width: build.fps1440 }}
                          ></div>
                        </div>
                        <span className="font-label-md text-primary">
                          {build.fps1440 === "99%" ? "165+ FPS" : "100+ FPS"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 font-label-sm uppercase text-on-surface-variant">
                        4K Cinematic Gaming
                      </div>
                      <div className="flex items-end gap-4">
                        <div className="h-3 bg-white/5 flex-grow rounded-full overflow-hidden">
                          <div
                            className="h-full bg-secondary-container transition-all duration-1000"
                            style={{ width: build.fps4k }}
                          ></div>
                        </div>
                        <span className="font-label-md text-secondary">
                          {build.fps4k === "95%" ? "120+ FPS" : "60+ FPS"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 font-label-sm uppercase text-on-surface-variant">
                        Multicore Rendering
                      </div>
                      <div className="flex items-end gap-4">
                        <div className="h-3 bg-white/5 flex-grow rounded-full overflow-hidden">
                          <div
                            className="h-full bg-tertiary-container transition-all duration-1000"
                            style={{ width: `${parseInt(build.render) * 10}%` }}
                          ></div>
                        </div>
                        <span className="font-label-md text-tertiary">
                          {build.render} Score
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Specs & Action */}
              <div className="lg:col-span-5 space-y-gutter text-left">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="font-headline-lg text-white mb-2">
                    {build.title}
                  </h2>
                  <div className="font-label-md text-primary tracking-widest uppercase mb-8">
                    Ultimate {selections.budget} Configuration
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        memory
                      </span>
                      <div>
                        <div className="font-label-sm text-on-surface-variant uppercase">
                          Processor
                        </div>
                        <div className="font-body-md text-white">
                          {build.cpu}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        square_foot
                      </span>
                      <div>
                        <div className="font-label-sm text-on-surface-variant uppercase">
                          Graphics
                        </div>
                        <div className="font-body-md text-white">
                          {build.gpu}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        developer_board
                      </span>
                      <div>
                        <div className="font-label-sm text-on-surface-variant uppercase">
                          Memory
                        </div>
                        <div className="font-body-md text-white">
                          32GB DDR5 6000MHz CL30
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        save
                      </span>
                      <div>
                        <div className="font-label-sm text-on-surface-variant uppercase">
                          Storage
                        </div>
                        <div className="font-body-md text-white">
                          2TB Gen4 NVMe SSD (7,400MB/s)
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border-white/10 my-8" />
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="font-label-sm text-on-surface-variant uppercase">
                        Estimated Total
                      </div>
                      <div className="font-headline-lg text-white">
                        {build.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-label-sm text-tertiary">
                        FREE SHIPPING
                      </div>
                      <div className="font-label-sm text-on-surface-variant uppercase">
                        2 Year Warranty
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-primary-container text-on-primary-container font-label-md py-5 rounded-lg flex items-center justify-center gap-3 transition-transform active:scale-95 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                    REQUEST CUSTOM QUOTE
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                  <button
                    className="w-full mt-4 text-on-surface-variant font-label-sm py-2 hover:text-white transition-colors"
                    onClick={() => setStep(1)}
                  >
                    RESTART CONFIGURATION
                  </button>
                </div>
                <div className="glass-card p-6 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      support_agent
                    </span>
                  </div>
                  <div>
                    <div className="font-label-md text-white">
                      Need expert help?
                    </div>
                    <div className="font-body-md text-on-surface-variant">
                      Our engineers are available for live consultation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
