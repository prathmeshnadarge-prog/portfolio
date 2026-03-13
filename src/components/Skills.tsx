import { useState, useEffect } from 'react';
import { FlaskRound as Flask, Dna, BarChart3, Code, Sprout } from 'lucide-react';
import { supabase, type Skill } from '../lib/supabase';

const categoryConfig = {
  laboratory: {
    label: 'Laboratory Techniques',
    icon: Flask,
    color: 'from-emerald-500 to-teal-600',
  },
  molecular: {
    label: 'Molecular Biology',
    icon: Dna,
    color: 'from-blue-500 to-cyan-600',
  },
  analytical: {
    label: 'Analytical Methods',
    icon: BarChart3,
    color: 'from-violet-500 to-purple-600',
  },
  computational: {
    label: 'Computational Skills',
    icon: Code,
    color: 'from-orange-500 to-red-600',
  },
  field: {
    label: 'Field & Applied',
    icon: Sprout,
    color: 'from-green-500 to-emerald-600',
  },
};

const proficiencyLevels = {
  expert: { label: 'Expert', width: 'w-full', color: 'bg-emerald-600' },
  advanced: { label: 'Advanced', width: 'w-4/5', color: 'bg-teal-500' },
  intermediate: { label: 'Intermediate', width: 'w-3/5', color: 'bg-blue-400' },
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching skills:', error);
    } else if (data) {
      setSkills(data);
    }
    setLoading(false);
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skillset spanning wet-lab techniques, advanced instrumentation, and
            computational analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const config =
              categoryConfig[category as keyof typeof categoryConfig];
            const Icon = config.icon;

            return (
              <div
                key={category}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 bg-gradient-to-br ${config.color} rounded-lg mr-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {config.label}
                  </h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill) => {
                    const proficiency =
                      proficiencyLevels[skill.proficiency];

                    return (
                      <div key={skill.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                            {proficiency.label}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-sm text-gray-600">
                            {skill.description}
                          </p>
                        )}
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full ${proficiency.color} ${proficiency.width} rounded-full transition-all duration-1000 ease-out`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
            <p className="text-gray-700 font-medium">
              Advanced Analytical Instruments
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-gray-700 font-medium">
              Mushroom Species Cultivated
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">3</div>
            <p className="text-gray-700 font-medium">
              Programming Languages (Python, R, SQL)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
