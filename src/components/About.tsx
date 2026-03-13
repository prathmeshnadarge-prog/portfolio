import { GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a mycologist and applied microbiologist with expertise in AI/ML modeling
              and computer vision. My research bridges traditional fungal biotechnology with
              cutting-edge computational approaches to address challenges in sustainable
              agriculture and nutraceutical development.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My work focuses on functional mushroom biology, particularly{' '}
              <span className="font-semibold text-emerald-700">
                Hericium erinaceus
              </span>{' '}
              (Lion's Mane), where I\'ve developed optimized cultivation protocols, synthesized
              bioactive nanoparticles, and advanced myconeutical product formulations with
              demonstrated therapeutic potential.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I combine laboratory expertise in fermentation technology, biochemical
              characterization, and nanoparticle synthesis with computational skills in machine
              learning, computer vision, and statistical modeling to drive innovation in
              agricultural research.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-emerald-600" />
                Research Interests
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Functional mushroom biology and cultivation optimization
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Nutraceutical and myconeutical product development
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Mycelium biotechnology and sustainable applications
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Bio-nanoparticle synthesis and characterization
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  AI/ML applications in agricultural research
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-bold text-lg text-gray-900">
                    M.Sc. in Microbiology
                  </h4>
                  <p className="text-gray-600 font-medium">
                    Punjab Agricultural University, Ludhiana
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2022 - 2024 | OGPA: 7.78/10</p>
                  <p className="text-sm text-gray-700 mt-2 italic">
                    Thesis: Standardization of Biomass and Fruit Body Production of{' '}
                    <em>Hericium erinaceus</em> Under Submerged and Solid-State Fermentation
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Advisor: Dr. Shivani Sharma, PhD
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900">
                    B.Sc. in Agriculture (Hons.)
                  </h4>
                  <p className="text-gray-600 font-medium">
                    Vasantrao Naik Marathwada Krishi Vidyapeeth, Parbhani
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2017 - 2021 | CGPA: 7.53/10</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Recognition</h3>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>All India Rank 442</strong> in ICAR-AIEEA (Plant Science)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">✓</span>
                  <span>National Talent Search Scholarship for M.Sc. studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">✓</span>
                  <span>
                    Published in peer-reviewed journals (IF: 3.0, 1.4)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">✓</span>
                  <span>Patent application under development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
