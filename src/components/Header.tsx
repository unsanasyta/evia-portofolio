import Link from 'next/link';

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
          <Link href="#hero" className="font-serif text-headline-sm text-on-surface tracking-tight hover:text-primary transition-colors">
            Evia.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-lg">
          <Link href="#hero" className="transition-colors text-primary font-title-md font-medium">Home</Link>
          <Link href="#about" className="transition-colors text-on-surface-variant hover:text-primary font-title-md font-medium">About</Link>
          <Link href="#projects" className="transition-colors text-on-surface-variant hover:text-primary font-title-md font-medium">Projects</Link>
          <Link href="#experience" className="transition-colors text-on-surface-variant hover:text-primary font-title-md font-medium">Experience</Link>
          <Link href="#skills" className="transition-colors text-on-surface-variant hover:text-primary font-title-md font-medium">Skills</Link>
          <Link href="#contact" className="transition-colors text-on-surface-variant hover:text-primary font-title-md font-medium">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-md">
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-label-md text-sm px-space-md py-space-xs hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-[0_4px_20px_-2px_rgba(197,141,164,0.18)]"
          >
            Let's Connect
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}