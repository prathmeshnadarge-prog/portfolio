import { useState } from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
}

export default function Research() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      id: 0,
      title: 'Project Associate',
      organization: 'Food Matrix Lab, Indian Agricultural Research Institute, New Delhi',
      period: 'Dec 2024 - Present',
      isCurrent: true,
      description:
        'Leading end-to-end product development for functional mushroom-derived myconeuticals, including formulation optimization and in-vitro therapeutic validation.',
      highlights: [
        'Managing myconeutical product development from experimental design to validation',
        'Analyzing bioactive compounds using UPLC, LC-MS, and spectroscopic analysis',
        'Documenting SOPs and experimental data; contributing to manuscript and patent preparation',
        'Maintaining laboratory quality standards (GLP) and coordinating sample documentation',
      ],
    },
    {
      id: 1,
      title: 'M.Sc. Research Scholar',
      organization: 'Punjab Agricultural University, Ludhiana',
      period: 'Jan 2022 - Aug 2024',
      isCurrent: false,
      description:
        'Synthesized extracellular selenium nanoparticles via a fungal-mediated green route using Hericium erinaceus and evaluated antimicrobial/antioxidant capacity.',
      highlights: [
        'Optimized mycelial growth conditions and substrate formulations for maximum biomass yield',
        'Screened agro-waste substrates to identify high-yield, low-cost formulations',
        'Characterized biosynthesized Se-NPs using UV-Vis, TEM, XRD, FTIR, and DLS',
        'Evaluated antimicrobial and antioxidant capacity with rigorous analytical methods',
      ],
    },
    {
      id: 2,
      title: 'Research Intern',
      organization: 'Punjab Biotechnology Incubator, Mohali',
      period: 'Jul - Aug 2024',
      isCurrent: false,
      description:
        'Practiced molecular and microbiological analytical techniques within an ISO/IEC 17025:2017 accredited testing environment.',
      highlights: [
        'Trained in Laboratory Quality Management Systems (LQMS) across multiple labs',
        'Mastered molecular and microbiological analytical techniques in accredited setting',
        'Gained hands-on experience with advanced instrumentation',
        'Understood quality assurance and regulatory compliance standards',
      ],
    },
  ];

  return (
    <section id="experience" className="relative bg-white section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block mb-8">
          <p className="text-sm font-semibold text-academic-green-500 uppercase tracking-wider">
            Career Journey
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 leading-tight">
          Research & Industry Experience
        </h2>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-academic-green-200"></div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex gap-8">
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full border-4 ${exp.isCurrent ? 'border-tech-blue-500 bg-tech-blue-50' : 'border-academic-green-500 bg-academic-green-50'} flex items-center justify-center z-10 relative`}>
                      <div
                        className={`w-3 h-3 rounded-full ${exp.isCurrent ? 'bg-tech-blue-500' : 'bg-academic-green-500'}`}
                      ></div>
                    </div>
                  </div>

                  <div className="md:w-1/2 mb-8">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === exp.id ? null : exp.id)
                      }
                      className="w-full text-left"
                    >
                      <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all cursor-pointer hover:shadow-md">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-academic-green-600 font-semibold mb-3">
                              {exp.organization}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${expandedId === exp.id ? 'transform rotate-180' : ''}`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-academic-green-500" />
                            <span>{exp.period}</span>
                          </div>
                          {exp.isCurrent && (
                            <span className="px-3 py-1 bg-tech-blue-50 text-tech-blue-600 rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="text-slate-700 leading-relaxed">
                          {exp.description}
                        </p>

                        {expandedId === exp.id && (
                          <div className="mt-6 pt-6 border-t border-slate-200 animate-slide-up">
                            <h4 className="font-semibold text-slate-900 mb-4">
                              Key Highlights
                            </h4>
                            <ul className="space-y-3">
                              {exp.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-slate-700"
                                >
                                  <span className="text-academic-green-500 mr-3 mt-1 font-bold">
                                    ✓
                                  </span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
