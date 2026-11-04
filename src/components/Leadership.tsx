export default function Leadership() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="leadership">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm mb-3">
              <span>✦</span>
              <span>Impact &amp; Mentorship</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Beyond the <span className="italic font-normal text-primary">Code.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Active leadership, organizational development, and fostering peer growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-label-sm text-xs font-semibold px-3 py-1 rounded-full bg-tertiary-fixed text-primary">
                  2025 – 2026
                </span>
                <span className="font-mono text-xs text-on-surface-variant">HMIF UNDIP</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-2">
                Expert Staff of Student Resources Development
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Led talent mapping, workshop curricula, and skill progression initiatives for computer science students, cultivating a structured environment for academic and technical peer development.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-surface-container flex items-center gap-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-label-sm text-xs text-on-surface-variant font-medium">
                Curriculum Direction &amp; Talent Progression
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-label-sm text-xs font-semibold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
                  2024 – 2025
                </span>
                <span className="font-mono text-xs text-on-surface-variant">HMIF UNDIP</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-2">
                Junior Staff of Student Resources Development
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Facilitated onboarding pipelines and organizational training modules, supporting student cohorts in acclimating to technical communities and collaborative software workflows.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-surface-container flex items-center gap-2">
              <span className="text-secondary text-xs">✦</span>
              <span className="font-label-sm text-xs text-on-surface-variant font-medium">
                Community Onboarding &amp; Workshops
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-label-sm text-xs font-semibold px-3 py-1 rounded-full bg-primary-container text-on-primary-container">
                  Honor • Q1 2024
                </span>
                <span className="font-mono text-xs text-primary font-semibold">PSDM Division</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-2">
                Best Staff PSDM HMIF Q1 2024
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Awarded for exceptional dedication, mentoring reliability, proactive program execution, and continuous commitment to peer advancement across faculty student development programs.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-surface-container flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">military_tech</span>
              <span className="font-label-sm text-xs text-primary font-medium">Excellence in Program Execution</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-label-sm text-xs font-semibold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
                  2024 – 2025
                </span>
                <span className="font-mono text-xs text-on-surface-variant">KOMPI UNDIP</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-2">
                Student Resources Development Staff
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Collaborated on student community empowerment initiatives, technical skill-sharing workshops, and mentorship sessions to bridge early academic learning with hands-on practice.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-surface-container flex items-center gap-2">
              <span className="text-secondary text-xs">✦</span>
              <span className="font-label-sm text-xs text-on-surface-variant font-medium">
                Peer Mentorship &amp; Collaborative Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}