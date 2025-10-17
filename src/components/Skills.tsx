import { Calculator, FileText, Users, TrendingUp, Settings, Award } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
  const skillCategories = [
    {
      title: 'Cost Management',
      icon: Calculator,
      skills: [
        { name: 'Cost Estimation & Planning', level: 95 },
        { name: 'Budget Control & Monitoring', level: 92 },
        { name: 'Value Engineering', level: 88 },
        { name: 'Financial Analysis', level: 90 }
      ]
    },
    {
      title: 'Project Management',
      icon: TrendingUp,
      skills: [
        { name: 'Project Planning & Scheduling', level: 92 },
        { name: 'Risk Management', level: 85 },
        { name: 'Quality Assurance', level: 90 },
        { name: 'Construction Supervision', level: 88 }
      ]
    },
    {
      title: 'Contract Administration',
      icon: FileText,
      skills: [
        { name: 'Contract Drafting & Management', level: 90 },
        { name: 'Tender Evaluation', level: 92 },
        { name: 'Claims Management', level: 85 },
        { name: 'Procurement Strategy', level: 88 }
      ]
    },
    {
      title: 'Stakeholder Management',
      icon: Users,
      skills: [
        { name: 'Client Relations', level: 95 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Communication', level: 92 },
        { name: 'Negotiation', level: 85 }
      ]
    }
  ];

  const softwareSkills = [
    { name: 'Microsoft Excel (Advanced)', level: 95 },
    { name: 'Microsoft Project', level: 88 },
    { name: 'AutoCAD', level: 85 },
    { name: 'Planswift', level: 80 },
    { name: 'BlueBeam Revu', level: 75 },
    { name: 'Primavera (Basic)', level: 70 }
  ];

  const professionalCertifications = [
    'NIQS Member (in-view 2025)',
    'QSRBN Member (in-view 2025)',
    'Cost Management Specialization - Coursera',
    'Construction Cost Estimating and Cost Control - Coursera',
    'Project Management Professional Certificate - Udemy',
    'Master Course in Contract Law and Contract Management - Udemy',
    'Project Planning and Control - Smart PM Training',
    'Sustainability as Innovation Opportunity - Coursera',
    'Sustainability Foundations: Core Concepts - Coursera',
    'Business Writing - Coursera',
    'Project Management Skills for Leaders - LinkedIn',
    'PMP, HSE, Leading and Supervising People at Work - Dexter and Heroes Consulting',
    'Business Communication and Diplomacy - Dexter and Heroes Consulting',
    'Organizational Management - Dexter and Heroes Consulting',
    'Human Resource Management (HRM) - Dexter and Heroes Consulting',
    'Speak Effectively - Alison Online Institute',
    'Motivation - Alison Online Institute',
    'The Principles of Emotional Intelligence - Alison Online Institute',
    'Leadership - Alison Online Institute',
    'Coaching - Alison Online Institute'
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Skills & Expertise</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Comprehensive expertise across all aspects of quantity surveying and project management
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={`rounded-xl p-8 shadow-lg border transition-colors duration-300 ${
              darkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-slate-100'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${
                  darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
                }`}>
                  <category.icon className={`${
                    darkMode ? 'text-blue-500' : 'text-blue-600'
                  }`} size={24} />
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>{skill.name}</span>
                      <span className={`text-sm ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      darkMode ? 'bg-slate-700' : 'bg-slate-200'
                    }`}>
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Software Skills */}
        <div className={`rounded-xl p-8 shadow-lg border mb-16 transition-colors duration-300 ${
          darkMode 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-slate-100'
        }`}>
          <div className="flex items-center mb-6">
            <div className={`p-3 rounded-lg mr-4 ${
              darkMode ? 'bg-blue-900/50' : 'bg-blue-100'
            }`}>
              <Settings className={`${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} size={24} />
            </div>
            <h3 className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Software Proficiency</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {softwareSkills.map((software, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className={`font-medium ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>{software.name}</span>
                  <span className={`text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>{software.level}%</span>
                </div>
                <div className={`w-full rounded-full h-2 ${
                  darkMode ? 'bg-slate-700' : 'bg-slate-200'
                }`}>
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${software.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`rounded-xl p-8 shadow-lg border transition-colors duration-300 ${
          darkMode 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-slate-100'
        }`}>
          <div className="flex items-center mb-6">
            <div className={`p-3 rounded-lg mr-4 ${
              darkMode ? 'bg-green-900/50' : 'bg-green-100'
            }`}>
              <Award className={`${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`} size={24} />
            </div>
            <h3 className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Professional Certifications & Training</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalCertifications.map((cert, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                darkMode ? 'bg-slate-700' : 'bg-slate-50'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className={`text-sm ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;