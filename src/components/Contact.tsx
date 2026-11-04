export default function Contact() {
  return (
    <section className="w-full py-space-xl lg:py-24" id="contact">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-tertiary-fixed via-secondary-container/60 to-primary-fixed/40 p-8 sm:p-12 lg:p-16 shadow-lg">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-10 right-10 text-primary/20 text-6xl pointer-events-none select-none">✦</div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-label-sm text-xs text-on-surface font-medium">
                Currently based in Semarang, Indonesia • Open to remote and hybrid roles
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg sm:text-[3.25rem] sm:leading-[3.75rem] text-on-surface">
              Let&apos;s create something <span className="italic font-normal text-primary">meaningful</span> together.
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              I&apos;m always excited to explore new opportunities, collaborate on interesting projects, and connect with people who share a passion for technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Email */}
              <div className="p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-sm shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block mb-1">Email Me</span>
                  <span className="font-mono text-xs text-on-surface font-medium break-all">unsanasyta@gmail.com</span>
                </div>
                <a className="font-label-sm text-xs text-primary font-semibold hover:underline mt-3 inline-flex items-center gap-1" href="mailto:unsanasyta@gmail.com">
                  <span>Compose Mail</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-sm shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block mb-1">LinkedIn</span>
                  <span className="font-mono text-xs text-on-surface font-medium">linkedin.com/in/unsanasyta</span>
                </div>
                <a className="font-label-sm text-xs text-primary font-semibold hover:underline mt-3 inline-flex items-center gap-1" href="https://linkedin.com/in/unsanasyta" rel="noopener noreferrer" target="_blank">
                  <span>View Profile</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-sm shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant block mb-1">GitHub</span>
                  <span className="font-mono text-xs text-on-surface font-medium">github.com/unsanasyta</span>
                </div>
                <a className="font-label-sm text-xs text-primary font-semibold hover:underline mt-3 inline-flex items-center gap-1" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">
                  <span>Inspect Repos</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md group" href="mailto:unsanasyta@gmail.com">
                <span>Say Hello</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
              </a>
              <a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all shadow-sm" href="https://linkedin.com/in/unsanasyta" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[18px] text-primary">link</span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}