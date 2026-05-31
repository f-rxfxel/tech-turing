import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="grid grid-cols-12 gap-gutter max-w-max-width mx-auto px-margin-desktop py-16">
        <div className="col-span-12 md:col-span-4">
          <div className="font-headline-md text-headline-md text-primary mb-6">
            TECH TURING
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-8">
            Precision engineering for the elite enthusiast. Hand-built in our
            laboratory for those who demand nothing less than perfection.
          </p>
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-80">
            © 2024 TECH TURING. ENGINEERED PRECISION.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-label-md text-label-md text-primary uppercase mb-6">
            Links
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100"
                href="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-label-md text-label-md text-primary uppercase mb-6">
            Social
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100"
                href="#"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h5 className="font-label-md text-label-md text-primary uppercase mb-6">
            Newsletter
          </h5>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Get notified about our latest technological breakthroughs.
          </p>
          <div className="flex">
            <input
              className="bg-[#050505] border-b border-white/20 focus:border-primary focus:ring-0 text-white font-body-md w-full py-3 transition-colors"
              placeholder="Email Address"
              type="email"
            />
            <button className="ml-4 material-symbols-outlined text-primary">
              arrow_forward
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
