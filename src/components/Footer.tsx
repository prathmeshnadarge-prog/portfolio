export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Prathmesh Nadarge
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Mycologist & Applied Microbiologist bridging fungal biotechnology with AI-driven
              predictive modelling. Passionate about advancing agricultural science and nutraceutical development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navigate
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Skills', id: 'skills' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-slate-300 hover:text-academic-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h4>
              <div className="space-y-2">
                {[
                  { label: 'Publications', id: 'publications' },
                  { label: 'Contact', id: 'contact' },
                  { label: 'LinkedIn', url: 'https://linkedin.com/in/prathmesh-nadarge' },
                ].map((link) => (
                  <div key={link.label || link.url}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-slate-300 hover:text-academic-green-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id || '')}
                        className="block text-slate-300 hover:text-academic-green-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {currentYear} Prathmesh Nadarge. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Advancing agricultural science through rigorous research and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
