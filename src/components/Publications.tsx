import { BookOpen, FileText, Lightbulb, Trophy } from 'lucide-react';

interface Publication {
  id: string;
  type: 'journal' | 'book' | 'patent' | 'conference';
  title: string;
  authors: string;
  details: string;
  status: string;
  impact?: string;
}

const publications: Publication[] = [
  {
    id: '1',
    type: 'journal',
    title: 'Myco-biosynthesis and characterization of selenium nanoparticles using Hericium erinaceus with antimicrobial and antioxidant potential',
    authors: 'Nadarge, P., Sharma, S., & Kalia, A.',
    details: 'International Journal of Medicinal Mushrooms',
    status: 'Accepted',
    impact: 'IF: 1.4',
  },
  {
    id: '2',
    type: 'journal',
    title: 'Myco-Assisted Silica Nanoparticles: A Review',
    authors: 'Debbarma, S., Sharma, S., Kalia, A., Kaur, H., Singh, L. M., & Nadarge, P.',
    details: 'Silicon',
    status: 'Published',
    impact: 'IF: 3.0',
  },
  {
    id: '3',
    type: 'book',
    title: 'Managing Agriculture Residue through Mushroom Cultivation: A Solution to Stubble Burning',
    authors: 'Nadarge, P.',
    details: 'Microbial Interventions to Achieve the United Nations Sustainable Development Goals',
    status: 'Published',
    impact: 'ISBN: 987-93-5747-065-0',
  },
  {
    id: '4',
    type: 'patent',
    title: 'Mycoceutical Formulation Derived from Hericium erinaceus and Method of Preparation Thereof',
    authors: 'Nadarge, P.',
    details: 'Patent Application',
    status: 'Under Development',
  },
  {
    id: '5',
    type: 'conference',
    title: 'Medicinal Mushroom: A Potential Solution for Honey Bee Health',
    authors: 'Nadarge, P.',
    details: '65th Annual AMI Conference on Perspectives of Microbes for Human Welfare, Guru Jambheshwar University, Hisar, Nov 2024',
    status: 'Presented',
  },
];

export default function Publications() {
  const typeConfig = {
    journal: {
      icon: BookOpen,
      label: 'Journal Articles',
      color: 'academic-green',
    },
    book: { icon: FileText, label: 'Book Chapters', color: 'tech-blue' },
    patent: { icon: Lightbulb, label: 'Patents & Innovations', color: 'amber' },
    conference: {
      icon: Trophy,
      label: 'Conference Presentations',
      color: 'orange',
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-academic-green-50 text-academic-green-700 border-academic-green-200';
      case 'Accepted':
        return 'bg-tech-blue-50 text-tech-blue-700 border-tech-blue-200';
      case 'Presented':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Under Development':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const groupedByType = publications.reduce(
    (acc, pub) => {
      if (!acc[pub.type]) {
        acc[pub.type] = [];
      }
      acc[pub.type].push(pub);
      return acc;
    },
    {} as Record<string, Publication[]>
  );

  const renderPublicationCard = (pub: Publication) => {
    const Config = typeConfig[pub.type];
    const Icon = Config.icon;

    return (
      <div key={pub.id} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors hover:shadow-md">
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 bg-${Config.color}-50 rounded-lg flex-shrink-0`}>
            <Icon className={`w-6 h-6 text-${Config.color}-600`} />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-serif font-bold text-slate-900 mb-2 leading-snug">
              {pub.title}
            </h4>
            <p className="text-sm text-slate-600 mb-2">{pub.authors}</p>
            <p className="text-sm font-medium text-slate-700 mb-3">{pub.details}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(pub.status)}`}
          >
            {pub.status}
          </span>
          {pub.impact && (
            <span className="text-xs font-semibold text-slate-600">
              {pub.impact}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="publications" className="relative bg-slate-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block mb-8">
          <p className="text-sm font-semibold text-academic-green-500 uppercase tracking-wider">
            Research Contributions
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
          Selected Publications & Innovations
        </h2>

        <p className="text-lg text-slate-600 mb-16 max-w-3xl">
          Peer-reviewed research and innovations advancing fungal biotechnology and agricultural applications
        </p>

        {Object.entries(groupedByType).map(([type, pubs]) => {
          const Config = typeConfig[type as keyof typeof typeConfig];

          return (
            <div key={type} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 bg-${Config.color}-50 rounded-lg`}>
                  <Config.icon
                    className={`w-6 h-6 text-${Config.color}-600`}
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  {Config.label}
                </h3>
                <div className="h-0.5 flex-1 bg-slate-200"></div>
                <span className="text-sm font-semibold text-slate-600">
                  {pubs.length}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {pubs.map(renderPublicationCard)}
              </div>
            </div>
          );
        })}

        <div className="mt-16 p-8 bg-white border border-slate-200 rounded-xl">
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">
            Research Impact Metrics
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-academic-green-600 mb-2">
                2
              </div>
              <p className="text-slate-700 font-medium">
                Peer-Reviewed Publications
              </p>
              <p className="text-sm text-slate-600">Combined IF: 4.4</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-tech-blue-600 mb-2">
                1
              </div>
              <p className="text-slate-700 font-medium">Book Chapter</p>
              <p className="text-sm text-slate-600">
                UN SDG Aligned
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                1
              </div>
              <p className="text-slate-700 font-medium">Patent</p>
              <p className="text-sm text-slate-600">Under Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
