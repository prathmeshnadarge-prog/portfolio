import { FlaskConical, Brain } from 'lucide-react';

export default function Skills() {
  const biologicalSkills = [
    { title: 'Microbial culturing & maintenance', icon: 'test-tube' },
    { title: 'Fermentation technology (submerged/solid-state)', icon: 'flask' },
    { title: 'PCR amplification & DNA/RNA extraction', icon: 'dna' },
    { title: 'Gel electrophoresis & agarose analysis', icon: 'lab' },
    { title: 'Microscopy (compound, fluorescence, confocal)', icon: 'microscope' },
    { title: 'UV-Vis, FTIR, XRD, DLS spectroscopy', icon: 'wavelength' },
    { title: 'UPLC & chromatographic techniques', icon: 'chart' },
    { title: 'Biochemical profiling & assays', icon: 'beaker' },
  ];

  const computationalSkills = [
    { title: 'Python (NumPy, Pandas, Matplotlib, Seaborn)', icon: 'code' },
    { title: 'ML/DL Frameworks (TensorFlow, PyTorch, Keras)', icon: 'neural' },
    { title: 'Computer Vision (YOLO, U-Net, DeepLab)', icon: 'eye' },
    { title: 'Statistical Analysis (R, SPSS, DOE)', icon: 'graph' },
    { title: 'ANOVA & regression modelling', icon: 'chart' },
    { title: 'Experimental design & optimization', icon: 'layers' },
    { title: 'Data preprocessing & image labelling', icon: 'image' },
    { title: 'Flask API deployment & integration', icon: 'server' },
  ];

  const SkillCard = ({ skill }: { skill: { title: string; icon: string } }) => (
    <div className="p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
      <p className="font-medium text-slate-900 text-sm">{skill.title}</p>
    </div>
  );

  return (
    <section id="skills" className="relative bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-8">
          <p className="text-sm font-semibold text-academic-green-500 uppercase tracking-wider">
            Core Competencies
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
          Dual-Pillar Expertise
        </h2>

        <p className="text-lg text-slate-600 mb-16 max-w-3xl">
          Bridging classical biological sciences with cutting-edge computational techniques
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-academic-green-50 rounded-lg mr-4">
                <FlaskConical className="w-8 h-8 text-academic-green-600" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-academic-green-700">
                Biological & Analytical Sciences
              </h3>
            </div>

            <div className="space-y-3">
              {biologicalSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>

            <div className="mt-8 p-6 bg-academic-green-50 border border-academic-green-200 rounded-lg">
              <p className="text-sm text-academic-green-900 font-medium">
                Proficiency: Expert level in fungal cultivation, nanoparticle synthesis, and biochemical characterization
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-tech-blue-50 rounded-lg mr-4">
                <Brain className="w-8 h-8 text-tech-blue-600" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-tech-blue-700">
                AI/ML & Computational Data
              </h3>
            </div>

            <div className="space-y-3">
              {computationalSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>

            <div className="mt-8 p-6 bg-tech-blue-50 border border-tech-blue-200 rounded-lg">
              <p className="text-sm text-tech-blue-900 font-medium">
                Proficiency: Advanced in model development, computer vision, and predictive analytics for agricultural applications
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white border border-slate-200 rounded-xl text-center hover:border-slate-300 transition-colors">
            <div className="text-5xl font-bold text-academic-green-600 mb-3">10+</div>
            <p className="text-slate-700 font-medium">Mushroom Species Mastered</p>
            <p className="text-sm text-slate-600 mt-2">Cultivation & characterization</p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-xl text-center hover:border-slate-300 transition-colors">
            <div className="text-5xl font-bold text-tech-blue-600 mb-3">5+</div>
            <p className="text-slate-700 font-medium">Advanced Instruments</p>
            <p className="text-sm text-slate-600 mt-2">UPLC, XRD, DLS, FTIR, UV-Vis</p>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-xl text-center hover:border-slate-300 transition-colors">
            <div className="text-5xl font-bold text-slate-600 mb-3">3+</div>
            <p className="text-slate-700 font-medium">Programming Languages</p>
            <p className="text-sm text-slate-600 mt-2">Python, R, SQL + ML frameworks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
