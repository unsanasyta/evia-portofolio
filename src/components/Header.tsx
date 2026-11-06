import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-space-sm">
          <img
            alt="Evia Portfolio Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1U-vdotqlgipEGRiYLXPV0XCIx86m1shSbT-bkWH-w6efpbXKp-_q1FS5AIg3W7ZlJtyNuxDi8EdkYn6rYHHaKV_XKEc9HDTJa3o4sW2PSbfXSrsRFlk-SU5Fc2rHl7LwippQINz3Jd-jiulpGNSEGjKq1nD_RoVaZ6ITfT9BwipNkRzkXS6-gNbYlzjHWJT4PTNkEtJr7dB_QYXE0-G4e0D6IOyliA9QAa9O1ts25N"
          />
          <Link
            className="font-headline-sm text-headline-sm text-on-surface tracking-tight hover:text-primary transition-colors"
            href="#hero"
          >
            Evia.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-lg">
          <Link className="transition-colors text-primary font-title-md text-title-md" href="#hero">
            Home
          </Link>
          <Link className="transition-colors text-primary font-title-md text-title-md hover:opacity-80" href="#about">
            About
          </Link>
          <Link className="transition-colors text-primary font-title-md text-title-md hover:opacity-80" href="#projects">
            Projects
          </Link>
          <Link className="transition-colors text-primary font-title-md text-title-md hover:opacity-80" href="#experience">
            Experience
          </Link>
          <Link className="transition-colors text-primary font-title-md text-title-md hover:opacity-80" href="#skills">
            Skills
          </Link>
          <Link className="transition-colors text-primary font-title-md text-title-md hover:opacity-80" href="#contact">
            Contact
          </Link>
        </nav>

        {/* CTA & Profile Icon */}
        <div className="flex items-center gap-space-md">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md px-space-md py-space-xs hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-[0_4px_20px_-2px_rgba(197,141,164,0.18)]"
            href="#contact"
          >
            Let&apos;s Connect
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}