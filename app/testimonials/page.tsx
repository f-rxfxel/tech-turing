export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      type: "Custom Workstation",
      stars: 5,
      text: "The level of cable management and attention to thermal performance is unlike anything I've seen in pre-builts. TECH TURING truly understands professional workflows.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDTgqWEWcNiKqcuRU36cHXTOb-PxOIORTbx2cQGkK0IqvtCZmKHBPGl1-Tn5M3KKKVH7fPflajJQwsnL3jIb5hftJml_qF4xqg6VL5gK8yLqd3OpJ9SY4Rjpr3XvbkWwn1yD2Q_RYdS3b2HUBxVQxf8tnYTGIc9mrIkDvFO7Jo8YV2gHJ8ad9kAv0f5LEwC_GT7K8m4smWlyOvCU2btaoISM5fw3WcvXVAwMOjuJE6ZHbs1MtHOb_cEgOMg6MQGLCYm-vTNEMWxw8",
      author: "Julian Sterling",
      location: "San Francisco, CA",
      authorImg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsM7vz6MS3sKmwhXzbycv4YDI_t29deGh0DvRBXeIPOM5BoaqixnCz29N_TVTYHMEENgitVEDAha9t_HAnUT5DXzfN0GwaBL71o8Z1ah4U5KyURwM78F7q4YpAcE8FBiUJrf54mJOfLi4lf_Lnx4RQ4cM8wfVA-Qkwt1CZ2nYhvxyVt7wK6vzetmbJUfKqEvH9UGoXk2VycpmmmdYFl0I4QsY2iXPypr3ddmXwNzLSvIerRRv25MMtlWCKVAirQQhbm5tftddwn4",
    },
    {
      id: 2,
      type: "Elite Gaming",
      stars: 5,
      text: "Absolute monster of a machine. Zero frame drops at 4K. The delivery process was white-glove and the PC arrived in pristine condition.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMqPkdMu5_hVYs04o6sb7qN7CI59RJC3QcaTm7-GGgyGSCVORT7vPbERMNtHG1uA_jtVUSyc-SW3_BiWCKS_TWUCQU2vaHGYxJJeuKq_3rnq9FFYDNL3hnJ_SgkpCbG75CqAh8cz6BJdPmO2X6QU3KiAobVwh3Xj4t3IirsHv5IkiZn7eKCtXd6Y6u3n6ybxRHObZUHFi8txM2RSmfGi_DN92rp9TWupi0opkmajrFxExvwLFPWqkKWl6R9IVAY9LvNqvHgUBo_E8",
      author: "Elena Vokh",
      location: "Austin, TX",
      authorImg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDbLAy6tkMwy3sUVVKLSvMfEXT0-ft-SFY0TmSWMN8nROwjjcUZKZdS-NQszuPbnDcBuVVWRuHmEpF3h-q5e_-LT5uhVA16ihhKtM7SLEZuj2byf0Sf96ubEULR9zLiqwrRhOhSfeYKEA636cNSdOrEn4fGVnPoBPnjLUS-F1VAadqLT9SUypev7lTWt0GZjX9KXeHXQ3Zy7CH_g8DwwppfeIkzfaolHUh0HPUagD9aVppuUFg1Cm57zg1AK3KnisX_RKfmYp97WFY",
    },
    {
      id: 3,
      type: "Deep Learning Rig",
      stars: 5,
      text: "Needed a multi-GPU setup for AI training. TECH TURING built a custom thermal solution that keeps everything stable under load. True engineering pros.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6zVOVI5OfjgDHq-YN4hWn_Isr_4JvNq2JBdFSs6prEMdsT6I681rF-4VWKUTIsklCYK1eJUg6qqvg2f0D0F1EJjBpBrAM9M-M8PdBua5enZDzClHSPB1w_zSlxrpP_qKTTklRJq6DYHAMPMg28L7eLZlHdPqj_xBtp1ThBVmwhHRxagLPLpznNUfcxqTNcB2hpFuFUbmW7PEBsaUgr2pn7-74Z2kUpQygPG_GASqpa041_fnkoas3-8--vef2OWAT6c6dhEM9rQg",
      author: "Dr. Marcus Chen",
      location: "Seattle, WA",
      authorImg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmddrA7sz9QE3m6m7SR7dCX6Mcnr_MgB4l12DsPGdnFHzIjwRyU9BA8kNB-UwrkNLUfJaMUfArQdBxfbUanX-BnBklZ2e0FhYDcS-JYrmrU3ydLb8RtuqfA1uJrQltVOzcpOLO7yRVnPU55V0Q9zBvGzzl9mIhrYdrOwB38WLeSraFj7oJZEIHdktHZUqdCKgfdyrSAxFe8GGkeh6y5pHfs9jweQTtTG7Nh-i6q_IKZPysPA2hlgN9vsOET9CUc73VSBYvewfWkoA",
    },
    {
      id: 4,
      type: "Small Form Factor",
      stars: 5,
      text: "Incredible how much power they fit into this tiny SFF build. The craftsmanship is art. It's the centerpiece of my studio.",
      author: "Sarah Jenkins",
      location: "New York, NY",
      authorImg:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDJf0kEzRoHRH4034mfrJHH8LziCjSjbPMZRCIzpCjRRLP-0BskR5Wv9ngsrwUhwDSEJHfJ9WAmXfC9ka4Qxr3xT9zISqUAO5TcNsSQcqWTFJDvWkC9ANbIww_QMMCW93uoS4qZgrsniAkkUSEkxWe2gQPIYuLbNSHVcBNNQOHC2yDpfmcedY1xfOO-eu2BFN6SgyqGCBqRhfgrfkKIzxD3lNGGfNaaBlAd1PUPdy3ynUiL-pZ3MgRtiLm0ZbX_HwPJ_wdHo5mZ_1g",
    },
  ];

  return (
    <main className="max-w-max-width mx-auto px-margin-desktop py-16">
      {/* Header & Stats Summary */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="max-w-2xl text-left">
          <span className="font-label-md text-primary tracking-widest block mb-4 uppercase">
            Testimonials
          </span>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-6 leading-tight">
            Engineered for Excellence. Proven by Performance.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Every TECH TURING is a testament to precision engineering. Discover why
            the world&apos;s most demanding professionals and enthusiasts trust us
            with their hardware.
          </p>
        </div>
        <div className="flex gap-12 border-l border-white/10 pl-12 py-4">
          <div>
            <div className="font-display-lg text-headline-lg text-primary mb-1">
              1,240+
            </div>
            <div className="font-label-sm text-on-surface-variant uppercase">
              Projects Delivered
            </div>
          </div>
          <div>
            <div className="font-display-lg text-headline-lg text-tertiary mb-1">
              99.8%
            </div>
            <div className="font-label-sm text-on-surface-variant uppercase">
              Client Satisfaction
            </div>
          </div>
        </div>
      </header>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="glass-card p-8 rounded-xl flex flex-col gap-6 text-left">
            <div className="flex justify-between items-start">
              <div className="flex gap-1 text-tertiary">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="font-label-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-primary">
                {t.type}
              </span>
            </div>
            <p className="font-body-lg text-on-surface italic leading-relaxed">
              &quot;{t.text}&quot;
            </p>
            {t.img && (
              <div className="relative overflow-hidden rounded-lg aspect-video group">
                <img
                  alt={t.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={t.img}
                />
              </div>
            )}
            <div className="flex items-center gap-4 mt-2">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden border border-white/10">
                <img alt={t.author} src={t.authorImg} />
              </div>
              <div>
                <div className="font-headline-md text-body-lg text-primary">
                  {t.author}
                </div>
                <div className="font-label-sm text-on-surface-variant">
                  {t.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Proof CTA */}
      <section className="mt-32 p-16 glass-card rounded-2xl flex flex-col items-center text-center">
        <h2 className="font-display-lg text-headline-lg text-primary mb-6 uppercase">
          Ready to forge your own path?
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mb-10">
          Join over 1,200 enthusiasts who chose precision over compromise. Your
          next masterpiece is one click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-md hover:scale-105 transition-transform">
            Start Your Build
          </button>
          <button className="border border-white/20 backdrop-blur-sm px-10 py-4 rounded-lg font-label-md hover:bg-white/5 transition-colors">
            View Portfolio
          </button>
        </div>
      </section>
    </main>
  );
}
