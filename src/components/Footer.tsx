export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-headline-md text-headline-md text-primary tracking-tight">Evia.</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Evia Auamara Unsa Nasyta — Senior Technologist &amp; Designer
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="font-body-lg text-body-lg text-on-surface font-medium">
              Designed with intention, built with curiosity.
            </p>
            <a
              className="inline-block font-label-md text-label-md text-primary hover:text-on-primary-container transition-colors mt-space-xs"
              href="mailto:unsanasyta@gmail.com"
            >
              unsanasyta@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-space-lg gap-space-md border-t border-outline-variant/20">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 Evia Auamara Unsa Nasyta. All rights reserved.
          </p>
          <div className="flex items-center gap-space-md">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com/in/unsanasyta" rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="mailto:unsanasyta@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}