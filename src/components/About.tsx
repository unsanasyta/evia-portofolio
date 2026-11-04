export default function About() {
  const focusAreas = [
    {
      num: "01",
      title: "Building machine learning pipelines",
      desc: "Architecting end-to-end models from preprocessing and feature engineering to deployment and metric tracking.",
      badgeStyle: "bg-tertiary-fixed text-primary",
    },
    {
      num: "02",
      title: "Developing modern web applications",
      desc: "Engineering responsive, high-performance web systems using Next.js, TypeScript, Laravel, and modern REST APIs.",
      badgeStyle: "bg-secondary-container text-secondary",
    },
    {
      num: "03",
      title: "Creating responsive user interfaces",
      desc: "Crafting fluid, human-centered UI with meticulous micro-interactions and accessible color systems.",
      badgeStyle: "bg-tertiary-fixed text-primary",
    },
    {
      num: "04",
      title: "Working as a university laboratory assistant",
      desc: "Mentoring undergraduate peers across Database Management, OOP, and Interactive Graphics coursework.",
      badgeStyle: "bg-secondary-container text-secondary",
    },
    {
      num: "05",
      title: "Collaborating and mentoring through organizational activities",
      desc: "Empowering student talent development, curating workshops, and leading organizational growth within HMIF UNDIP.",
      badgeStyle: "bg-tertiary-fixed text-primary",
    },
  ];

  const coursework = [
    "Algorithms & Data Structures",
    "Deep Learning & AI",
    "Database Systems",
    "Interactive Computer Graphics",
    "Object-Oriented Programming",
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="about">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
              <span>✦</span>
              <span>Introduction</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              A little <span className="italic font-normal text-primary">about me.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              I&apos;m an Informatics student at Diponegoro University with a strong interest in
              Artificial Intelligence, Machine Learning, Data Science, and Software Engineering. I
              enjoy exploring how intelligent models and thoughtfully designed applications can solve
              real-world problems.
            </p>

            {/* 5 Core Experience Focus Cards */}
            <div className="space-y-3 pt-2">
              {focusAreas.map((item) => (
                <div
                  key={item.num}
                  className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4"
                >
                  <span
                    className={`w-8 h-8 rounded-lg ${item.badgeStyle} flex items-center justify-center font-bold text-xs shrink-0`}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                      {item.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Showcase Card & Visual Accents */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-tertiary-fixed/30 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-xs font-semibold">
                  Academic Foundation
                </span>
                <span className="font-mono text-xs text-primary font-semibold">2023 – Present</span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Diponegoro University
              </h3>
              <p className="font-title-md text-title-md text-primary font-medium mt-1">
                Bachelor&apos;s Degree in Informatics
              </p>

              <div className="my-6 p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                    Academic Standing
                  </span>
                  <span className="font-headline-sm text-2xl text-on-surface font-bold">
                    GPA: 3.83{" "}
                    <span className="text-sm font-normal text-on-surface-variant">/ 4.00</span>
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">grade</span>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-label-md text-label-md text-on-surface font-semibold">
                  Key Coursework Focus
                </h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-body-sm text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Actively combining rigorous algorithmic theory with scalable real-world digital
                  applications.
                </p>
              </div>
            </div>

            {/* Editorial Quote Block */}
            <div className="p-6 rounded-2xl bg-tertiary-fixed/30">
              <span className="font-headline-md text-primary text-2xl block leading-none">“</span>
              <p className="font-headline-sm text-title-md font-serif italic text-on-surface mt-2">
                Technology becomes truly impactful when computational precision meets intuitive
                empathy for the people using it.
              </p>
              <span className="block font-label-sm text-xs text-primary font-medium tracking-wide mt-3">
                — Evia Auamara
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}