export default function Portfolio() {
  return (
    <div className="font-body-md text-on-surface bg-surface-dim">
      <main>
        {/* Hero Header */}
        <section className="max-w-max-width mx-auto px-margin-desktop pt-24 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-4 block">
                Engineered Precision
              </span>
              <h1 className="font-display-lg text-display-lg text-primary mb-6">
                Build <span className="text-on-surface-variant">Mastery</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A curated selection of our most advanced liquid-cooled systems,
                enterprise workstations, and enthusiast-grade gaming rigs.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="font-display-lg text-headline-lg text-primary">
                  150+
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Builds
                </span>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="font-display-lg text-headline-lg text-primary">
                  0.1%
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Tolerance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-12 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
          <div className="flex gap-3">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md glass-card">
              All Projects
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              Gaming
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              Streaming
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              Workstation
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              RTX 50-series
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              Water Cooling
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              White Setups
            </button>
            <button className="filter-chip px-6 py-2 rounded-full font-label-md text-label-md glass-card hover:border-primary/50">
              Black Setups
            </button>
          </div>
        </section>

        {/* Project Grid */}
        <section className="max-w-max-width mx-auto px-margin-desktop pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Project 1: Featured Large */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card border-white/5 h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                alt="Featured Build"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6c1LW5au-dU485O8bKVXGN62h8QSU3ECwOvukXzcmzqkNwH0tkpEeP7ne2ZxjfsDvupw7h4jYuRuP6uAOjiVCS4TweAe2Zk8o4NuppoWkZhnABu5-VDilPXPjqS9intwdgqKZ-rFfPVfpfEnnHAr2cUhq52uSLZL8BDr1MnHrJDqfTmx8Mro627t22dppELQ8tiZLBrgkKfJfqDNLlVzbZI1Gq0CLRYMcrTZ6_SfRslBBLwGVLsiiEWcwdDFMvJXOlIt8FXvfNLg"
              />
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full flex justify-between items-end">
                <div>
                  <span className="spec-chip font-label-sm text-label-sm px-3 py-1 rounded-sm text-primary mb-4 inline-block">
                    ULTRA-ENTHUSIAST
                  </span>
                  <h3 className="font-display-lg text-headline-lg text-white mb-2">
                    NEON VANGUARD
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-md">
                    Hardline custom loop workstation designed for 8K rendering
                    and competitive simulation.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      GPU
                    </p>
                    <p className="font-label-md text-label-md text-primary">
                      RTX 5090 OC
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      CPU
                    </p>
                    <p className="font-label-md text-label-md text-primary">
                      Threadripper
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card border-white/5 h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                alt="Obsidian Build"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvePJg9ofCj4vwZhB2oYdEZSPpTpkARs0VmJlCSYJ3kgfGaS5Hlin_l7kc6IJEbz59v5j5e92TLwNsLLy82ubNuWKA37TfVPZvXzrtNuf_L-mtUdHVqETnqWaX-kUgu1_VCm6Z4UoucN7jWotjOlx6XfJfmhFGYgOx9Zwoh3UCXefNMYJ1Tn-AxyDJNlUW6loPv5fCRVkf254CpUthmxJ3vSici7eP28Ep9skI7Uop7DN-61Hykw-bvOHc7Ld1kiOL00A63YD7AKg"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="spec-chip font-label-sm text-label-sm px-3 py-1 rounded-sm text-tertiary mb-4 inline-block">
                  STREAMING RIG
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-2">
                  OBSIDIAN EDGE
                </h3>
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    i9-14900K + RTX 5080
                  </p>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card border-white/5 h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                alt="Glacier Build"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCxBodubJ93uAaP3y2l1sGnPI7nsnf8qx1orV9JHU9KngwM8gbPjNddgg2mm3IU8rCOfBra--yvE5Nn5_OUfqliczcXYpz3SE_v_4U6CRy_FnSdSrFBzhGWUPpn0C3RcDJgn3d7q-XfXPLyVsdqTANJ1FnjhPVbzAxeqsYXX6z8NfyJGWpGDLsiQyfGGBKAGGTPimO0aVhpNYeRh0SI32ccrCFTYUz116urXDtNF_tOv4PXyZ_bMneZZ_FFOISJkxAoRlh8kai5tU"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="spec-chip font-label-sm text-label-sm px-3 py-1 rounded-sm text-primary mb-4 inline-block">
                  GAMING
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-2">
                  GLACIER 01
                </h3>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  DDR5 7200MHz | Full White
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card border-white/5 h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                alt="Workstation Build"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfoaXSEJb-9JQCxc3Mg1kkX_A1k-4eJj5JnrRxu0tgHSdyclJWeSb5Iw8h4lVR1Hp4ZkK4DZNa9O0nD9EneH3OF60KhiPa6oMfJ2BUNXyKkBwNpGE7guamEM21JgwgQlhqQbIT46F8xUMP4xf0HUPSFm1MwUY5GQZDRhfPix3mZb2Q1mNqsGsSxAOI1-vXooycBDKv6yD6jESYHX2X5bGQsB_o8Ak5kM0uw1BD3kVp123aiUCoiciNRNw8gTk_hf4Ssp9LYNPY1iE"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="spec-chip font-label-sm text-label-sm px-3 py-1 rounded-sm text-tertiary mb-4 inline-block">
                  CREATIVE PRO
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-2">
                  FORGE STUDIO
                </h3>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Dual GPU | 128GB RAM
                </p>
              </div>
            </div>
            {/* Project 5 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card border-white/5 h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                alt="Detail Shot"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCci4eJiKwbSixjscrGzRAnE5H3t_NklEUiKDlJ5eWWNyUmr9aLSdv9PM3w1X_xFeyWwgphwpEy2I-SZqQZGKLLr-4nNRygdSji9aezgBEGFVs_KV6DyST0-Zz69tyxnJOkWAi0ZHhsRGtSaY0io9qO62EFO8sGmEdvNrX82I4OazohML0mJBuj7oTDCIihYFSUt6Z_2zX7Jqc7RY_w5RQNeYB1T71VDHhuY9LjlCvB0GXXyPvgsPlhqXutCpPZfyqh6LbbhyzXIs4"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="spec-chip font-label-sm text-label-sm px-3 py-1 rounded-sm text-primary mb-4 inline-block">
                  WATER COOLED
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-2">
                  PROJECT VENOM
                </h3>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Custom Loop | Hardline
                </p>
              </div>
            </div>
          </div>
          {/* Load More Action */}
          <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-4 group">
              <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
                EXPLORE MORE PROJECTS
              </span>
              <div className="w-12 h-px bg-white/10 group-hover:bg-primary transition-all group-hover:w-20"></div>
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-32">
          <div className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display-lg text-headline-lg text-primary mb-6">
                Your Vision, <br />
                Our Engineering.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Ready to start your bespoke PC journey? Our engineers are
                standing by to translate your performance needs into an art
                piece.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:glow-sm transition-all">
                  Start Configuration
                </button>
                <button className="border border-white/20 hover:border-primary/50 text-white px-8 py-4 rounded-lg font-label-md text-label-md backdrop-blur-md transition-all">
                  Download Spec Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
