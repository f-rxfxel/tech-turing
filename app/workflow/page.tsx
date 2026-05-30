export default function Workflow() {
  const stages = [
    {
      num: "01",
      title: "Discovery",
      text: "We begin by analyzing your specific performance needs. Whether it's 8K video editing, competitive esports, or neural network training, we define the parameters of your perfect build.",
      time: "24-48 HOURS",
      icon: "psychology",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl7DeOZ3WjI7b_hTnKS4_AxkfZ4HCN6IC03kpOROhgnoVYuFtMxC2UCoO-233Qo4FlhVDazQu6GSdV8qLx9YlDTtEMlSwn4jjUezxiltspubAuvQh9u6m4MJM-_WHqtagAEmPj7Z_a19XjS7gWCg6xz7iDmq-bVRUcTBT-iLOKpADeVBbILwUFAVJNfv6Ec2uabV36ibAKYkFiSsCwlQ186ic183qRuVd2KiRUXzFL-0jor6JdbcdJzICYLp73fXI4TLs16Fv1D4M",
    },
    {
      num: "02",
      title: "Planning",
      text: "Component selection is an art. We map out the synergy between CPU, GPU, and memory, while designing a custom thermal solution that balances cooling efficiency with silent operation.",
      time: "1-2 DAYS",
      icon: "architecture",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6o_FdIWhZDQeDq9gczSi1qnHrGsK6SthjyojmBYRjXlEifDAdppJmfAlzjXAkCqbyk097whIzUXJxqF5c6In5KgRSPJhJBy-1AGZWbXz7GG2pqaniQht8KPC_mDEqZnm4mGpc-FR7psrldcs5MPEO2EtpiLie19br6cjP3aBz5JChXkucjr90qbc1XogQopGcG0tkHBGrLdI1S6cS3u6_sbhVieIUiI3UUgn-jEJbs-M-Oi3TB71OPOqoCTTdo2e5FmWj0y7IOo",
    },
    {
      num: "03",
      title: "Approval",
      text: "We present a detailed build specification and a photorealistic visualization. You review the hardware list and aesthetic choices before we initiate the manufacturing process.",
      time: "UP TO CLIENT",
      icon: "verified_user",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp4Kig_JaUtcwHWu9U9n2HHVtAxYDEvZJa_xMrnhD4nTDKM3suyMBsSSDeBB9-9VbdYMnzB1d7tGKzOsaNI-bk0IgsoQBwi44SujAcWC9qwYUhaLAS0MY2s3DVrUYfC_AWr8_wRAS9LfqpOlZFMpV6gCDVMKbwJk43aESt1PZQiA_jwNSv9n2XAuLeFV-P2yaRSgi-nO8SfUDVq6ygDDhSj49AwOlj3npzU2O73ALq7-xGI42uKTuCABUg50O4s1FXTDpX-e8UvoY",
    },
    {
      num: "04",
      title: "Sourcing",
      text: "Our logistics team procures components from a global network of specialized vendors. Every part is hand-inspected for physical defects and verified for authenticity before reaching our assembly lab.",
      time: "3-5 DAYS",
      icon: "inventory_2",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLNI0J9PWdhLbGmQ-OxGp7DE_-hBPEKXo6oIUGSpx8k1uabOQUgRz6W4vAub8htjPgaWp7cZw2nkDcptExH3qNz0OgYU323HCOPbSxj7UVq06JyRJHkITV3pQt6YJujY3X7Cc_asr9qrhpJOBAqH3M_TaAl3S3nUd2bwTWgYMoIJcAwzbwyExQdgsnDXRhkWV6x8_mEgGNvEiCOMA3HnT39CYmtTOFBAs-MKXvzG3yFPCWh9PCvHpzCA8mdsgqMosyCveHZl-RnTQ",
    },
    {
      num: "05",
      title: "Building",
      text: "Our master technicians assemble your machine in a ISO-certified clean room. We prioritize obsessive cable management and custom liquid loop routing to ensure your PC is a work of industrial art.",
      time: "48 HOURS",
      icon: "precision_manufacturing",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOW0hESmc_EN9Ar72EEjoTBzgI-zJiXa9xNmhDmOo1TfTkpZea-3NsfcNlFHhfomJ1vaa-ET3kzJbvruESOB5ngASf15QLK7QjKHHT5w85N8zzvLj1UMniurkeF99ldTJ4iuKnJtYfvl67_eTZm9uIqmPYXYnfcugPGqukfgLWZYu1AjyLcFnuLoEuMMrN4CFtXRc3MwHpVpw09d8StZTjXs-P5Fro4Z_uasOvlp90fZRyts515zuy5IsWI1H5jk9hBjpJD_-MgdY",
    },
    {
      num: "06",
      title: "Testing",
      text: "Every FORGE PC undergoes a 72-hour stress test. We push thermals, clock speeds, and stability to their limits to guarantee consistent performance under the most demanding workloads.",
      time: "72 HOURS",
      icon: "query_stats",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlCTHuo-pM-BBgkVDoEVt1OLB_3N1bze2pTDJ5BhAQryAHmWFH6_tBuqrWNUu0WQiryc5g-ImohLB15zZb261vX4-qVs1175sS-AW6njFT-JdlZVxLyNI9xLF7WNgOb_5g8kn6-XiimgnafCXjeKx0FIlrXOFnLxjpfSJFezcn3S4kN22Ikx_EI15zzK8o9VbroNrWYdm_Sb7S1upJPez3MLjFjUjEdJ0SmKW9ia6N2lUaBaSvNzu9J8hjpZzBOhhHdnHRiePgq0g",
    },
    {
      num: "07",
      title: "Shipping",
      text: "Your machine is secured in double-walled, custom-molded foam packaging and shipped via specialized premium carriers. We track every mile until it reaches your doorstep.",
      time: "24-72 HOURS",
      icon: "local_shipping",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPCvoUw2HmWW9n1yOu40hGhLGWwuiOc6HXRyVysBd5Fe3V5VwIlk8Vw-mERAU4rCkcyhGwFe2FVZuYcOMKDjQ8L0xLYibCd7lK9zCWXIdNDM6CDSNtUa7FJHs_dEPqqMtElq5W61kJgBEi2QembEDfwcNPmVm7F49_ODpLEY3X3VgGY143ILp-IUmBUfieqwu8hVyjsawqKwnI5kFg5t5aBnU5F8gOP6c4CdmK8BRHJQ74IPTKyekLnEO66NilPQnHBG0RfQlVFbs",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-margin-desktop max-w-max-width mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full"></div>
        </div>
        <h1 className="font-display-lg text-display-lg mb-6 tracking-tight">
          ENGINEERED <span className="text-primary">PRECISION</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          From the initial handshake to the final unboxing, our seven-stage
          workflow ensures your high-performance machine is built with surgical
          accuracy and artistic flair.
        </p>
        <div className="flex justify-center gap-4">
          <span className="px-4 py-1.5 glass-card rounded-full font-label-sm text-primary flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            ELITE WORKFLOW
          </span>
        </div>
      </header>

      {/* Workflow Section */}
      <main className="relative py-20 px-margin-desktop max-w-max-width mx-auto">
        {/* Vertical Timeline Path (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 opacity-30"></div>

        <div className="space-y-32">
          {stages.map((s, i) => (
            <section
              key={s.num}
              className={`relative flex flex-col md:flex-row items-center gap-12 group ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <div className="mb-4">
                  <span className="font-label-md text-primary bg-primary/10 px-3 py-1 rounded">
                    STAGE {s.num}
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-4">
                  {s.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  {s.text}
                </p>
                <div className="mt-6 font-label-sm text-tertiary-fixed-dim">
                  TIME: {s.time}
                </div>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-primary/40 text-primary hover:border-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">
                    {s.icon}
                  </span>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  alt={s.title}
                  className="rounded-xl glass-card aspect-video object-cover w-full scale-100 group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl"
                  src={s.img}
                />
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Bottom CTA / Stats */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#dbfcff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="max-w-max-width mx-auto px-margin-desktop text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg mb-12">
            READY TO BEGIN YOUR BUILD?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-primary font-display-lg text-4xl mb-2">
                100%
              </div>
              <div className="font-label-sm text-on-surface-variant uppercase">
                Stress Tested
              </div>
            </div>
            <div>
              <div className="text-primary font-display-lg text-4xl mb-2">
                ISO-8
              </div>
              <div className="font-label-sm text-on-surface-variant uppercase">
                Clean Room
              </div>
            </div>
            <div>
              <div className="text-primary font-display-lg text-4xl mb-2">
                7 STAGES
              </div>
              <div className="font-label-sm text-on-surface-variant uppercase">
                Precision Build
              </div>
            </div>
            <div>
              <div className="text-primary font-display-lg text-4xl mb-2">
                3 YR
              </div>
              <div className="font-label-sm text-on-surface-variant uppercase">
                Elite Warranty
              </div>
            </div>
          </div>
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-lg font-headline-md hover:scale-105 transition-transform shadow-xl">
            START CONFIGURATION
          </button>
        </div>
      </section>
    </div>
  );
}
