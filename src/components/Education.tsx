import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
  const education = [
    {
      degree: 'Bachelor of Science, Quantity Surveying',
      institution: 'University of Ilorin',
      year: '2021',
      grade: 'Second Class (Upper-Class Division)',
      description: 'Comprehensive study in construction cost management, project planning, and quantity surveying principles'
    }
  ];

  const leadership = [
    {
      role: 'Admin Coordinator',
      organization: 'Bloom Career',
      period: '2024 - Present',
      description: 'Coordinating administrative activities and supporting career development initiatives'
    },
    {
      role: 'General Secretary',
      organization: 'Standard Bearers Islamic Organisation, Abuja Chapter',
      period: '2024',
      description: 'Managing organizational communications and coordinating chapter activities'
    },
    {
      role: 'Secretary and IT Lead',
      organization: 'Career Mentorship Program (CMP), Abuja Chapter',
      period: '2023',
      description: 'Leading technology initiatives and maintaining program documentation'
    },
    {
      role: 'Admin Lead',
      organization: 'The Achiever\'s Club',
      period: '2019-2021',
      description: 'Overseeing administrative operations and member engagement activities'
    }
  ];

  const interests = [
    { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'Sustainability', icon: '🌱' },
    { name: 'Data Analytics', icon: '📊' },
    { name: 'Smart Infrastructure', icon: '🏗️' },
    { name: 'Research', icon: '🔬' },
    { name: 'Sport', icon: '⚽' }
  ];

  return (
    <section id="education" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Education & Leadership</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Academic foundation and leadership experience that shaped my professional journey
          </p>
        </div>

        {/* Academic Qualifications */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className={`p-3 rounded-lg mr-4 ${
              darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
            }`}>
              <GraduationCap className={`${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} size={28} />
            </div>
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Academic Qualifications</h3>
          </div>

          {education.map((edu, index) => (
            <div key={index} className={`rounded-xl p-8 border ${
              darkMode 
                ? 'bg-slate-700 border-slate-600' 
                : 'bg-slate-50 border-slate-100'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{edu.degree}</h4>
                  <p className={`text-lg font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-blue-900/50 text-blue-300' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {edu.year}
                  </span>
                  <p className={`text-sm mt-2 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>{edu.grade}</p>
                </div>
              </div>
              <p className={`leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className={`p-3 rounded-lg mr-4 ${
              darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
            }`}>
              <Users className={`${
                darkMode ? 'text-blue-500' : 'text-blue-600'
              }`} size={28} />
            </div>
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Leadership & Volunteer Experience</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((role, index) => (
              <div key={index} className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' 
                  : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className={`text-lg font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{role.role}</h4>
                  <span className={`text-sm px-2 py-1 rounded ${
                    darkMode 
                      ? 'text-slate-400 bg-slate-600' 
                      : 'text-slate-500 bg-slate-100'
                  }`}>
                    {role.period}
                  </span>
                </div>
                <p className={`font-medium mb-3 ${
                  darkMode ? 'text-blue-500' : 'text-blue-600'
                }`}>{role.organization}</p>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        {/* <div>
          <div className="flex items-center mb-8">
            <div className={`p-3 rounded-lg mr-4 ${
              darkMode ? 'bg-green-900/50' : 'bg-green-100'
            }`}>
              <BookOpen className={`${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`} size={28} />
            </div>
            <h3 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Personal Interests</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className={`rounded-xl p-6 text-center transition-colors ${
                darkMode 
                  ? 'bg-slate-700 hover:bg-slate-600' 
                  : 'bg-slate-50 hover:bg-slate-100'
              }`}>
                <div className="text-3xl mb-3">{interest.icon}</div>
                <p className={`font-medium text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>{interest.name}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;