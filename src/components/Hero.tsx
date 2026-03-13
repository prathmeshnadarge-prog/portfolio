import { ArrowDown, FlaskConical, Brain, Sprout } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8 animate-fadeIn">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm transform hover:scale-110 transition-transform">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm transform hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm transform hover:scale-110 transition-transform">
              <Sprout className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Bridging Mycology,
            <br />
            <span className="text-teal-200">Biotechnology & AI</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-teal-100 font-light max-w-4xl mx-auto">
            Mycologist & Applied Microbiologist specializing in functional mushroom research,
            nutraceutical development, and machine learning applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() =>
                document
                  .getElementById('research')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold text-lg hover:bg-teal-50 transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Explore My Research
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all"
            >
              Get in Touch
            </button>
          </div>

          <div className="pt-16">
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ArrowDown className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-white">
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
