import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="max-w-[1280px] w-full mx-auto px-margin-mobile md:px-space-lg lg:px-margin py-space-xl lg:py-24"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Elegant Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-fixed text-primary shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">
              Hello, I&apos;m Evia ✦
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline-lg text-headline-lg lg:text-[3.5rem] lg:leading-[4.125rem] text-on-surface">
            Building intelligent systems with a{" "}
            <span className="italic font-normal text-primary">thoughtful</span> touch.
          </h1>

          {/* Name & Subtitle */}
          <div className="space-y-1">
            <h2 className="font-title-lg text-title-lg text-on-surface font-semibold">
              Evia Auamara Unsa Nasyta
            </h2>
            <p className="font-label-md text-label-md text-primary font-medium tracking-wide">
              AI/ML Enthusiast &amp; Full-Stack Developer
            </p>
          </div>

          {/* Introduction Verbatim */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            An Informatics undergraduate at Diponegoro University, passionate about turning data,
            intelligent algorithms, and creative ideas into meaningful digital experiences.
          </p>

          {/* Status Indicator Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface font-medium">
              Open to AI/ML &amp; Software Engineering Internships
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md group"
              href="#projects"
            >
              <span>Explore My Work</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-tertiary-fixed transition-all shadow-sm"
              href="mailto:unsanasyta@gmail.com?subject=CV%20Request%20-%20Evia%20Auamara"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">download</span>
              <span>Download CV</span>
            </a>
          </div>

          {/* Three Compact Editorial Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
              <span className="font-title-md text-title-md text-on-surface font-semibold block leading-tight">
                AI &amp; ML
              </span>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                Computer Vision &amp; NLP
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
              <span className="font-title-md text-title-md text-on-surface font-semibold block leading-tight">
                Full-Stack Dev
              </span>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                Next.js, TS &amp; Laravel
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Monogram Composition */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-6">
          {/* Ambient Decorative Backdrop Circle */}
          <div className="relative w-full max-w-[420px] aspect-square rounded-full bg-gradient-to-tr from-tertiary-fixed/60 via-secondary-container/40 to-surface-container-lowest flex items-center justify-center shadow-lg p-6">
            {/* Technical Grid & Constellation Backdrop */}
            <svg
              className="absolute inset-0 w-full h-full text-primary/15"
              fill="none"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="200"
                r="160"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1"
              ></circle>
              <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.8"></circle>
              <circle
                cx="200"
                cy="200"
                r="60"
                stroke="currentColor"
                strokeDasharray="2 2"
                strokeWidth="0.8"
              ></circle>
              <line stroke="currentColor" strokeWidth="0.5" x1="200" x2="200" y1="40" y2="360"></line>
              <line stroke="currentColor" strokeWidth="0.5" x1="40" x2="360" y1="200" y2="200"></line>
              <path
                d="M200 40 L360 200 L200 360 L40 200 Z"
                stroke="currentColor"
                strokeWidth="0.5"
              ></path>
            </svg>

            {/* Center Photo Card */}
            <div className="relative z-10 w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest bg-surface-container-lowest transform transition-transform hover:scale-[1.02] duration-300">
              <Image
                src="/01%20Foto%20Resmi.jpg"
                alt="Evia Auamara Unsa Nasyta"
                fill
                priority
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Stat Badge 1: Top Right */}
            <div className="absolute -top-2 -right-4 sm:right-0 z-20 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-md flex items-center gap-2 transform hover:-translate-y-1 transition-transform">
              <div className="w-6 h-6 rounded-lg bg-tertiary-fixed flex items-center justify-center text-primary text-xs">
                ✦
              </div>
              <div>
                <div className="font-label-sm text-xs font-semibold text-on-surface">
                  SIBI Sign 1D-CNN
                </div>
                <div className="font-body-sm text-[11px] text-primary font-medium">
                  98.72% Accuracy
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 2: Bottom Left */}
            <div className="absolute -bottom-4 -left-4 sm:left-0 z-20 px-3.5 py-2 rounded-xl bg-surface-container-lowest shadow-md flex items-center gap-2.5 transform hover:-translate-y-1 transition-transform">
              <div className="w-6 h-6 rounded-lg bg-secondary-container flex items-center justify-center text-secondary text-xs">
                <span className="material-symbols-outlined text-[14px]">school</span>
              </div>
              <div>
                <div className="font-label-sm text-xs font-semibold text-on-surface">
                  Diponegoro Univ
                </div>
                <div className="font-body-sm text-[11px] text-on-surface-variant">
                  Informatics &apos;23
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 3: Bottom Right */}
            <div className="absolute bottom-6 -right-6 z-20 px-3 py-1.5 rounded-full bg-primary-container text-on-primary-container shadow-sm flex items-center gap-1.5">
              <span className="font-label-sm text-[11px] font-semibold">IndoBERT • 67.01% F1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}