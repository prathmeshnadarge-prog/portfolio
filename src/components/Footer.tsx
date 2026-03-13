import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Prathmesh Nadarge</h3>
            <p className="text-gray-300 leading-relaxed">
              Mycologist & Applied Microbiologist specializing in functional mushroom research
              and AI/ML applications in agriculture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Research', href: '#research' },
                { label: 'Publications', href: '#publications' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() =>
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Research Focus</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Functional Mushroom Biology</li>
              <li>Nutraceutical Development</li>
              <li>Mycelium Biotechnology</li>
              <li>AI/ML in Agriculture</li>
              <li>Green Nanotechnology</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" /> for
            advancing mycological research
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {currentYear} Prathmesh Nadarge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
