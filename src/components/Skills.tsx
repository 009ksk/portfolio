import { skills } from '@/data/portfolio';

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  infrastructure: 'from-orange-500 to-red-500',
  language: 'from-purple-500 to-pink-500',
};

const categoryLabels = {
  frontend: 'フロントエンド',
  backend: 'バックエンド',
  infrastructure: 'インフラ',
  language: '言語',
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          技術スタック
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-4">
              <h3 className={`text-xl font-semibold text-center p-3 rounded-lg bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent`}>
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="space-y-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-sm text-gray-300">{skill.years}年</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`}
                        style={{ width: `${Math.min((skill.years / 5) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
