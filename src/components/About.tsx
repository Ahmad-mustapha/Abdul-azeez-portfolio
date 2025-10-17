import { Award, TrendingUp, Users, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Cost Optimization Expert',
      description: 'Achieved up to 30% cost savings through strategic material tracking and waste control'
    },
    {
      icon: Award,
      title: 'Project Excellence',
      description: 'Successfully delivered 20+ high-value projects exceeding ₹800 million'
    },
    {
      icon: Users,
      title: 'Stakeholder Management',
      description: 'Expert in coordinating multi-disciplinary teams and maintaining client relationships'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Proven track record in budget control, contract administration, and risk management'
    }
  ];

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>About Me</h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Passionate about delivering value through smart cost control and efficient resource management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Professional Summary</h3>
            <p className={`leading-relaxed mb-6 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              I am AbdulAzeez, a results-driven Quantity Surveyor with proven expertise in cost estimation, 
              budgeting, contract administration, and project planning across high-value residential, 
              commercial, and infrastructure projects. I am passionate about delivering value, helping 
              teams stay on budget, reduce waste, and meet deadlines through smart cost control and 
              efficient resource management.
            </p>
            <p className={`leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Known for my collaborative approach and stakeholder coordination, I focus on identifying 
              cost-saving opportunities, managing risks, and driving successful, impactful project 
              outcomes that support both operational efficiency and organizational growth.
            </p>
          </div>

          <div className={`rounded-2xl p-8 ${
            darkMode ? 'bg-slate-700' : 'bg-slate-50'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Core Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Cost Estimation & Budget Control</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Contract Administration & Claims Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Project Planning & Scheduling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Material Management & Procurement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Quality Assurance & Construction Supervision</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-700' 
                  : 'bg-slate-100'
              }`}>
                <item.icon className={`transition-colors ${
                  darkMode 
                    ? 'text-slate-300' 
                    : 'text-slate-700'
                }`} size={28} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;