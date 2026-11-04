export default function Skills() {
  const categories = [
    {
      icon: "psychology",
      iconBg: "bg-tertiary-fixed text-primary",
      title: "AI & Machine Learning",
      desc: "Deep learning models, vision architectures, and transformers.",
      skills: ["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "Hugging Face", "MediaPipe", "OpenCV", "YOLO11"],
    },
    {
      icon: "terminal",
      iconBg: "bg-secondary-container text-secondary",
      title: "Frontend Development",
      desc: "Component architecture, interactive interfaces, and reactive state.",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vue.js"],
    },
    {
      icon: "database",
      iconBg: "bg-tertiary-fixed text-primary",
      title: "Backend & Databases",
      desc: "Server architectures, RESTful design, and persistent storage.",
      skills: ["Laravel", "PHP", "PostgreSQL", "Supabase", "MySQL", "REST APIs"],
    },
    {
      icon: "monitoring",
      iconBg: "bg-secondary-container text-secondary",
      title: "Data Science & Tools",
      desc: "Analytical computation, containerization, and product design.",
      skills: ["Pandas", "NumPy", "Matplotlib", "Git", "GitHub", "Docker", "Kaggle", "Jupyter", "Figma"],
    },
  ];

  return (
    <section className="w-full py-space-xl lg:py-24" id="skills">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-primary font-label-sm text-label-sm mx-auto">
            <span>✦</span>
            <span>Capabilities</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            My <span className="italic font-normal text-primary">Toolkit.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Technologies and methodologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center mb-5`}>
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface font-semibold mb-2">{cat.title}</h3>
                <p className="font-body-sm text-xs text-on-surface-variant mb-6">{cat.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-body-sm text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}