"use client";

import { useState } from "react";

type FilterCategory = "all" | "ai" | "web";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const showCard = (category: "ai" | "web") =>
    activeFilter === "all" || activeFilter === category;

  return (
    <section className="w-full py-space-xl lg:py-24" id="projects">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-space-lg lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-primary font-label-sm text-label-sm">
              <span>✦</span>
              <span>Portfolio</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Selected <span className="italic font-normal text-primary">Work.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              A collection of projects where technology meets real-world problems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1 rounded-full bg-surface-container-low shadow-sm">
            {[
              { id: "all", label: "All (4)" },
              { id: "ai", label: "AI / ML (2)" },
              { id: "web", label: "Web Dev (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterCategory)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Responsive Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: SIBI Alphabet Classification (AI/ML) */}
          {showCard("ai") && (
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-full h-52 rounded-xl bg-surface-container-low overflow-hidden relative flex items-center justify-center p-4">
                  <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.1" x1="20" x2="340" y1="30" y2="30"></line>
                    <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.1" x1="20" x2="340" y1="90" y2="90"></line>
                    <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.1" x1="20" x2="340" y1="150" y2="150"></line>
                    <circle cx="90" cy="140" fill="currentColor" r="4"></circle>
                    <circle cx="80" cy="110" fill="currentColor" r="3.5"></circle>
                    <circle cx="75" cy="80" fill="currentColor" r="3.5"></circle>
                    <circle cx="95" cy="65" fill="currentColor" r="3"></circle>
                    <circle cx="110" cy="80" fill="currentColor" r="3.5"></circle>
                    <circle cx="120" cy="95" fill="currentColor" r="3.5"></circle>
                    <circle cx="115" cy="120" fill="currentColor" r="3.5"></circle>
                    <path d="M90 140 L80 110 L75 80 L95 65 L110 80 L120 95 L115 120 Z" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5"></path>
                    <path d="M160 140 Q 200 40, 320 35" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
                    <path d="M160 140 Q 200 40, 320 35 L 320 160 L 160 160 Z" fill="currentColor" fillOpacity="0.08"></path>
                    <circle cx="320" cy="35" fill="currentColor" r="4"></circle>
                    <text fill="currentColor" fontFamily="DM Sans" fontSize="10" fontWeight="600" x="210" y="55">98.72% Accuracy</text>
                    <text fill="currentColor" fontSize="9" opacity="0.6" x="160" y="155">Epoch 0</text>
                    <text fill="currentColor" fontSize="9" opacity="0.6" x="310" y="155">Epoch 50</text>
                  </svg>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-xs font-mono text-primary font-semibold shadow-xs">
                    3D SIBI Classification
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-sm text-xs font-semibold text-primary uppercase tracking-wider">Artificial Intelligence / Computer Vision</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">SIBI Alphabet Classification Using 1D-CNN</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Developed a deep learning model to classify 24 static SIBI alphabet signs using 3D hand landmarks and engineered joint-angle features.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-surface-container-low text-center">
                  <div>
                    <span className="font-label-md text-sm font-bold text-primary block">98.72%</span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">Test Accuracy</span>
                  </div>
                  <div className="border-x border-outline-variant/30">
                    <span className="font-label-md text-sm font-bold text-primary block">98.75%</span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">Macro F1</span>
                  </div>
                  <div>
                    <span className="font-label-md text-sm font-bold text-primary block">~32k</span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">Samples</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "TensorFlow", "Keras", "MediaPipe", "Scikit-Learn"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-surface text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container">
                <a className="font-label-md text-label-md text-primary hover:text-on-primary-container font-medium inline-flex items-center gap-1" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">
                  <span>View Architecture</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                <span className="text-outline-variant">•</span>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary font-medium" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">Case Study</a>
                <span className="text-outline-variant">•</span>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary font-medium" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">GitHub ↗</a>
              </div>
            </div>
          )}

          {/* Project 2: Amanah Mobilindo Tracker (Web Dev) */}
          {showCard("web") && (
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-full h-52 rounded-xl bg-surface-container-low overflow-hidden relative flex flex-col justify-center p-5">
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                        <span className="font-mono text-xs text-on-surface font-semibold">Amanah Mobilindo ERP</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container text-[10px] font-semibold">Active Session</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 rounded bg-surface-container-lowest shadow-xs">
                        <span className="text-[10px] text-on-surface-variant block">Vehicles in Lot</span>
                        <span className="font-bold text-sm text-primary">48 Units</span>
                      </div>
                      <div className="p-2 rounded bg-surface-container-lowest shadow-xs">
                        <span className="text-[10px] text-on-surface-variant block">Monthly Rev</span>
                        <span className="font-bold text-sm text-on-surface">Rp 1.4B</span>
                      </div>
                      <div className="p-2 rounded bg-surface-container-lowest shadow-xs">
                        <span className="text-[10px] text-on-surface-variant block">Invoices Sent</span>
                        <span className="font-bold text-sm text-secondary">32 Done</span>
                      </div>
                    </div>
                    <div className="h-3 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container w-4/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-xs font-mono text-primary font-semibold shadow-xs">
                    Dealership ERP
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-sm text-xs font-semibold text-secondary uppercase tracking-wider">Full-Stack Web Development</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Amanah Mobilindo Tracker</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Built a dealership management application for vehicle inventory, sales transactions, financial tracking, and interactive dashboards.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Multi-role Auth
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Real-time Sales Analytics
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Automated Invoicing
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-surface text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container">
                <a className="font-label-md text-label-md text-primary hover:text-on-primary-container font-medium inline-flex items-center gap-1" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">
                  <span>Live Demo</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
                <span className="text-outline-variant">•</span>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary font-medium" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">Repository ↗</a>
              </div>
            </div>
          )}

          {/* Project 3: WhatsApp Review Sentiment Analysis (AI/ML) */}
          {showCard("ai") && (
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-full h-52 rounded-xl bg-surface-container-low overflow-hidden relative flex items-center justify-center p-4">
                  <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="currentColor" fillOpacity="0.1" height="40" rx="8" width="80" x="20" y="70"></rect>
                    <text fill="currentColor" fontFamily="DM Sans" fontSize="10" fontWeight="600" x="32" y="94">Reviews Raw</text>
                    <path d="M102 90 L128 90" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5"></path>
                    <rect fill="currentColor" fillOpacity="0.15" height="60" rx="10" width="100" x="130" y="60"></rect>
                    <text fill="currentColor" fontFamily="DM Sans" fontSize="11" fontWeight="700" x="145" y="88">IndoBERT</text>
                    <text fill="currentColor" fontFamily="DM Sans" fontSize="9" opacity="0.8" x="145" y="104">Transformer</text>
                    <path d="M232 90 L258 90" stroke="currentColor" strokeWidth="1.5"></path>
                    <rect fill="currentColor" fillOpacity="0.08" height="90" rx="8" width="80" x="260" y="45"></rect>
                    <circle cx="280" cy="70" fill="#805065" r="4"></circle>
                    <text fill="currentColor" fontSize="9" x="290" y="73">Positive</text>
                    <circle cx="280" cy="90" fill="#ab989f" r="4"></circle>
                    <text fill="currentColor" fontSize="9" x="290" y="93">Neutral</text>
                    <circle cx="280" cy="110" fill="#ba1a1a" r="4"></circle>
                    <text fill="currentColor" fontSize="9" x="290" y="113">Negative</text>
                  </svg>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-xs font-mono text-primary font-semibold shadow-xs">
                    NLP Pipeline
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-sm text-xs font-semibold text-primary uppercase tracking-wider">NLP / Machine Learning</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">WhatsApp Review Sentiment Analysis</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Developed an Indonesian sentiment classification pipeline using IndoBERT and traditional machine learning techniques to analyze application reviews.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-surface-container-low text-center">
                  <div>
                    <span className="font-label-md text-sm font-bold text-primary block">79.75%</span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">Model Accuracy</span>
                  </div>
                  <div>
                    <span className="font-label-md text-sm font-bold text-primary block">67.01%</span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">Macro F1-Score</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "PyTorch", "Transformers", "IndoBERT", "Scikit-Learn"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-surface text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container">
                <a className="font-label-md text-label-md text-primary hover:text-on-primary-container font-medium inline-flex items-center gap-1" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">
                  <span>Model Weights</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                <span className="text-outline-variant">•</span>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary font-medium" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">Research Paper / Case Study ↗</a>
              </div>
            </div>
          )}

          {/* Project 4: SIAPKANGMAS (Web Dev) */}
          {showCard("web") && (
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-full h-52 rounded-xl bg-surface-container-low overflow-hidden relative flex flex-col justify-center p-5">
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                        <span className="font-mono text-xs text-on-surface font-semibold">SIAPKANGMAS Public Portal</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[10px] font-semibold">Central Java Gov</span>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-lowest shadow-xs space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-on-surface">Ticket #JTG-8492</span>
                        <span className="text-primary font-semibold">In Progress</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary w-2/3 h-full rounded-full"></div>
                      </div>
                      <span className="text-[10px] text-on-surface-variant block">Consultation Routing: Disperindag Prov. Jateng</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-xs font-mono text-primary font-semibold shadow-xs">
                    GovTech Ticketing
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-sm text-xs font-semibold text-secondary uppercase tracking-wider">Full-Stack Web Development</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">SIAPKANGMAS</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Developed a public consultation, complaint management, and service ticketing system for the Central Java Department of Industry and Trade.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Public Service Ticketing
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Real-time Status Tracking
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Admin Routing
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Laravel", "PHP", "Supabase", "Tailwind CSS", "REST API"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-surface text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-surface-container">
                <a className="font-label-md text-label-md text-primary hover:text-on-primary-container font-medium inline-flex items-center gap-1" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">
                  <span>Department Portal</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
                <span className="text-outline-variant">•</span>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary font-medium" href="https://github.com/unsanasyta" rel="noopener noreferrer" target="_blank">Overview ↗</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}