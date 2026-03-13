import { useState, useEffect } from 'react';
import { BookOpen, Award, FileText, Scroll } from 'lucide-react';
import { supabase, type Publication } from '../lib/supabase';

const publicationTypes = {
  journal_article: { label: 'Journal Articles', icon: BookOpen, color: 'emerald' },
  book_chapter: { label: 'Book Chapters', icon: Scroll, color: 'teal' },
  conference: { label: 'Conference Papers', icon: FileText, color: 'blue' },
  patent: { label: 'Patents', icon: Award, color: 'amber' },
};

const statusColors = {
  published: 'bg-green-100 text-green-800 border-green-200',
  accepted: 'bg-blue-100 text-blue-800 border-blue-200',
  under_review: 'bg-amber-100 text-amber-800 border-amber-200',
};

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    const { data, error } = await supabase
      .from('publications')
      .select('*')
      .order('year', { ascending: false })
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching publications:', error);
    } else if (data) {
      setPublications(data);
    }
    setLoading(false);
  };

  const filteredPublications =
    selectedType === 'all'
      ? publications
      : publications.filter((pub) => pub.type === selectedType);

  const groupedPublications = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.type]) {
      acc[pub.type] = [];
    }
    acc[pub.type].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

  if (loading) {
    return (
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications & Presentations
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-reviewed research contributions advancing the field of mycology and
            biotechnology
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedType === 'all'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Publications
          </button>
          {Object.entries(publicationTypes).map(([type, config]) => {
            const Icon = config.icon;
            const count = publications.filter((p) => p.type === type).length;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
                  selectedType === type
                    ? `bg-${config.color}-600 text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {config.label} ({count})
              </button>
            );
          })}
        </div>

        <div className="space-y-12">
          {Object.entries(groupedPublications).map(([type, pubs]) => {
            const config = publicationTypes[type as keyof typeof publicationTypes];
            const Icon = config.icon;

            return (
              <div key={type} className="space-y-6">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 bg-gradient-to-br from-${config.color}-500 to-${config.color}-600 rounded-lg mr-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{config.label}</h3>
                  <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {pubs.length}
                  </span>
                </div>

                <div className="grid gap-6">
                  {pubs.map((pub) => (
                    <div
                      key={pub.id}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                            {pub.title}
                          </h4>
                          <p className="text-gray-600 mb-2">{pub.authors}</p>
                          {pub.publication && (
                            <p className="text-emerald-700 font-medium italic">
                              {pub.publication}
                            </p>
                          )}
                        </div>
                        <div className="ml-4 flex flex-col items-end gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            {pub.year}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                              statusColors[pub.status]
                            }`}
                          >
                            {pub.status.replace('_', ' ').toUpperCase()}
                          </span>
                          {pub.impact_factor && (
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 rounded-full text-xs font-semibold border border-amber-200">
                              IF: {pub.impact_factor}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 rounded-2xl border border-emerald-100">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-emerald-700">
                {publications.length} publications
              </span>{' '}
              contributing to advances in mycology, nanotechnology, and sustainable
              agriculture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
