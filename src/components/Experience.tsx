import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
  const experiences = [
    {
      title: 'Project Quantity Surveyor',
      company: 'Origin Tech Group, Rhema Project BCEGI',
      location: 'Lagos, Nigeria',
      period: 'September 2024 - Present',
      type: 'current',
      achievements: [
        'Overseeing cost management for Lagos Central Food Security Systems & Logistics Hub',
        'Achieved 30% cost savings through effective material tracking and procurement strategies',
        'Managing vendor relationships and contract administration for 9,000sqm and 22,500sqm buildings',
        'Collaborating with design teams to implement value engineering reducing costs by 20%'
      ]
    },
    {
      title: 'Senior Analyst (Quantity Surveyor)',
      company: 'Murty International Limited',
      location: 'Abuja, Nigeria',
      period: 'September 2022 - September 2024',
      type: 'past',
      achievements: [
        'Promoted based on demonstrated performance in project delivery and cost control',
        'Prepared master BOQs and cost estimates for 15+ projects worth over ₦800 million',
        'Developed Excel-based cost control dashboards improving tracking accuracy by 35%',
        'Led preparation of 10+ competitive proposals securing contracts with top-tier firms'
      ]
    },
    {
      title: 'Quantity Surveyor (Remote)',
      company: 'Zigurrate Projects and Services Ltd',
      location: 'Lagos, Nigeria',
      period: 'August 2022 - January 2023',
      type: 'past',
      achievements: [
        'Prepared 20+ cost estimates for projects ranging from ₦300 million to ₦1 billion',
        'Developed comprehensive material and labor schedules for enhanced operations',
        'Maintained positive stakeholder relationships ensuring project success'
      ]
    },
    {
      title: 'Assistant Quantity Surveyor',
      company: 'Lambert Electromec Limited',
      location: 'Abuja, Nigeria',
      period: 'November 2021 - September 2022',
      type: 'past',
      achievements: [
        'Prepared contract documentation and arrangement drawings',
        'Conducted site inspections and inventory analyses',
        'Achieved ₦25 million savings through optimized costs and reduced material wastage'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-800' : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Professional Experience</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A track record of delivering exceptional results across major infrastructure and construction projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-slate-600' : 'bg-slate-300'
          }`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-8 h-8 rounded-full border-4 border-white ${
                  exp.type === 'current' ? 'bg-blue-600' : 'bg-slate-400'
                } z-10`}>
                  <div className={`absolute inset-2 rounded-full ${
                    darkMode ? 'bg-slate-800' : 'bg-white'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`rounded-xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' 
                      : 'bg-white border-slate-100'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}>{exp.title}</h3>
                        <div className={`flex items-center space-x-2 mb-2 ${
                          darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className={`flex items-center space-x-4 text-sm ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      {exp.type === 'current' && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <TrendingUp className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                          <span className={`text-sm leading-relaxed ${
                            darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;