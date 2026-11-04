export default function Experience() {
  const experiences = [
    {
      role: "Web Developer Intern",
      period: "January 2026 – March 2026",
      org: "Central Java Department of Industry and Trade",
      desc: "Developed and maintained web applications, integrated digital public services, and supported the SIAPKANGMAS platform to streamline citizen consultation workflows and government ticketing resolution.",
      badgeStyle: "bg-tertiary-fixed text-primary",
      dotColor: "text-primary",
    },
    {
      role: "Database Management Laboratory Assistant",
      period: "January 2026 – July 2026",
      org: "Diponegoro University",
      desc: "Supported students in advanced database architecture, query optimization, index structuring, and practical relational database management scenarios.",
      badgeStyle: "bg-secondary-container text-on-secondary-container",
      dotColor: "text-secondary",
    },
    {
      role: "Interactive Graphics and Techniques Laboratory Assistant",
      period: "January 2026 – July 2026",
      org: "Diponegoro University",
      desc: "Guided undergraduate students in interactive computer graphics principles, 2D/3D transformation pipelines, design techniques, and practical visual rendering implementations.",
      badgeStyle: "bg-secondary-container text-on-secondary-container",
      dotColor: "text-primary",
    },
    {
      role: "Object-Oriented Programming Laboratory Assistant",
      period: "January 2026 – July 2026",
      org: "Diponegoro University",
      desc: "Assisted students with core OOP fundamentals, polymorphism, inheritance patterns, robust programming practices, and hands-on code debugging.",
      badgeStyle: "bg-secondary-container text-on-secondary-container",
      dotColor: "text-secondary",
    },
    {
      role: "Database Laboratory Assistant",
      period: "August 2025 – December 2025",
      org: "Diponegoro University",
      desc: "Guided hands-on laboratory sessions on relational schemas, SQL querying, normalization principles, and practical relational database design foundations.",
      badgeStyle: "bg-tertiary-fixed text-primary",
      dotColor: "text-primary",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="experience">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm mb-3">
            <span>✦</span>
            <span>Career Journey</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Where I&apos;ve <span className="italic font-normal text-primary">Grown.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Practical engineering experience across government digital public services and academic teaching assistance.
          </p>
        </div>

        {/* Refined Vertical Timeline */}
        <div className="relative pl-6 md:pl-10 space-y-10">
          <div className="absolute left-2.5 md:left-4 top-2 bottom-2 w-0.5 bg-tertiary-fixed-dim"></div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-6 md:-left-10 top-1.5 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-xs">
                <span className={`${exp.dotColor} text-xs font-bold leading-none`}>✦</span>
              </div>
              <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">{exp.role}</h3>
                  <span className={`font-label-sm text-xs font-semibold px-3 py-1 rounded-full w-fit ${exp.badgeStyle}`}>
                    {exp.period}
                  </span>
                </div>
                <p className="font-title-md text-primary font-medium text-sm mb-3">{exp.org}</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}