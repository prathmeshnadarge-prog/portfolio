export default function About() {
  return (
    <section id="about" className="relative bg-white section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block mb-8">
          <p className="text-sm font-semibold text-academic-green-500 uppercase tracking-wider">
            Executive Summary
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 leading-tight">
          About My Research & Expertise
        </h2>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I am an agricultural microbiologist specializing in fungal cultivation, functional mushroom biology,
            and the characterization of bioactive compounds. My research spans myconeutical product development
            and in-vitro therapeutic validation.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I am passionate about translating this multidisciplinary foundation into rigorous doctoral research
            in soil-plant microbiome interactions, while leveraging machine learning and computer vision to unlock
            insights from complex biological systems.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-xl font-serif font-bold text-academic-green-600 mb-4">
                Research Focus
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-3 text-academic-green-500 font-bold mt-1">•</span>
                  <span>Fungal cultivation and fermentation technology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-academic-green-500 font-bold mt-1">•</span>
                  <span>Myconeutical product development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-academic-green-500 font-bold mt-1">•</span>
                  <span>Bioactive compound characterization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-academic-green-500 font-bold mt-1">•</span>
                  <span>In-vitro therapeutic validation</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 bg-white border border-slate-200 rounded-xl">
              <h3 className="text-xl font-serif font-bold text-tech-blue-600 mb-4">
                Methodological Approach
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-3 text-tech-blue-500 font-bold mt-1">•</span>
                  <span>Data-driven experimental design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-tech-blue-500 font-bold mt-1">•</span>
                  <span>Machine learning & computer vision</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-tech-blue-500 font-bold mt-1">•</span>
                  <span>Rigorous statistical analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-tech-blue-500 font-bold mt-1">•</span>
                  <span>Predictive modelling systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
