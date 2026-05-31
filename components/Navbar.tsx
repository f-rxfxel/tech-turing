import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="docked full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
        <Link href="/" className="font-display-lg text-display-lg tracking-tighter text-primary">
          TECH TURING
        </Link>
        <div className="hidden md:flex items-center space-gap-12 gap-8">
          <Link
            className="text-on-surface-variant font-body-md hover:text-primary transition-all duration-300 font-label-md text-label-md"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-on-surface-variant font-body-md hover:text-primary transition-all duration-300 font-label-md text-label-md"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant font-body-md hover:text-primary transition-all duration-300 font-label-md text-label-md"
            href="/configurator"
          >
            Build Configurator
          </Link>
        </div>
        <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg scale-95 transition-transform hover:scale-100 hover:shadow-[0_0_20px_rgba(219,252,255,0.3)]">
          Request a Quote
        </button>
      </div>
    </nav>
  );
}
