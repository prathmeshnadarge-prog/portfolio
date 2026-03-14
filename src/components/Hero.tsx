import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-academic-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <p className="text-sm md:text-base font-semibold text-academic-green-500 uppercase tracking-wider">
              Scientist & Researcher
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight">
            Prathmesh Nadarge
          </h1>

          <h2 className="text-2xl md:text-3xl font-serif text-slate-700 leading-relaxed">
            Mycologist & Applied Microbiologist
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Bridging Fungal Biotechnology with AI-Driven Predictive Modelling
          </p>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Specializing in mycology, functional mushroom biology, myconeutical product development, and
            leveraging machine learning and computer vision to unlock insights from complex biological systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('experience')}
              className="button-primary px-8 py-3 text-base md:text-lg"
            >
              Explore Research
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="button-secondary px-8 py-3 text-base md:text-lg"
            >
              Contact for Opportunities
            </button>
          </div>

          <div className="pt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-2 rounded-full hover:bg-academic-green-50 transition-colors"
            >
              <ArrowDown className="w-6 h-6 text-academic-green-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
