import { Link, useParams } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Users, ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  darkMode: boolean;
}

const ProjectDetail = ({ darkMode }: ProjectDetailProps) => {
  const { id } = useParams<{ id: string }>();
  
  const projects = [
    {
      id: 1,
      title: 'Lagos State Food Security Systems & Logistics Hub',
      client: 'Lagos State Government',
      location: 'Epe, Lagos State',
      year: '2024 - Present',
      value: '₦5+ Billion',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      description: 'The largest food logistics hub in sub-Saharan Africa designed to strengthen food security for over 10 million Lagosians.',
      features: [
        '60,000+ sqm of cold and dry storage facilities',
        'Silos for bulk storage ensuring sustainable food reserves',
        'Truck terminals and filling station for optimized logistics',
        'Administrative buildings and accommodation units',
        'Heavy infrastructure road network for distribution'
      ],
      role: 'Project Quantity Surveyor',
      achievements: [
        'Overseeing cost management for Dealing Areas 1-6',
        'Achieved 20% cost savings across seven projects through material tracking',
        'Developed Material Tracker Dashboard for procurement optimization',
        'Delivered 5% budget savings through value engineering strategies'
      ]
    },
    {
      id: 2,
      title: 'Niger Gold Buying Centre (GBC)',
      client: 'SMDF-PAGMI LTD',
      location: 'Minna, Niger State',
      year: '2022 - Present',
      value: '₦800+ Million',
      image: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      description: 'Comprehensive reconstruction of Gold Buying Centre with specialized facilities for gold processing, storage, and trade operations.',
      features: [
        'Server rooms and smelting facilities',
        'Secure storage facilities and transactional cubicles',
        'Water treatment plant and external storage tanks',
        'Generator systems for uninterrupted power',
        'Enhanced security systems and street lighting'
      ],
      role: 'Project Analyst',
      achievements: [
        'Led conceptualization and preliminary cost estimation',
        'Prepared comprehensive BOQ and tender documentation',
        'Managed tendering process and contractor evaluation',
        'Delivered monthly and quarterly progress reports'
      ]
    },
    {
      id: 3,
      title: 'Kaduna Gold Buying Centre',
      client: 'SMDF-PAGMI LTD',
      location: 'Kaduna, Kaduna State',
      year: '2022 - 2024',
      value: '₦500+ Million',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      description: 'Rehabilitation of two-story building with complete electrical and mechanical services installation.',
      features: [
        'Two-story building rehabilitation',
        'Complete MEP installations',
        'External pavement and landscaping',
        'Fence work and gatehouse construction',
        'Administrative and security systems'
      ],
      role: 'Project Analyst',
      achievements: [
        'Managed complete project lifecycle from inception to completion',
        'Ensured compliance with all contractual obligations',
        'Delivered project within budget and timeline',
        'Maintained high quality standards throughout construction'
      ]
    },
    {
      id: 4,
      title: 'Abuja-Kano Road MEP Installations',
      client: 'Federal Government of Nigeria',
      location: 'Abuja-Kano Corridor',
      year: '2021 - 2022',
      value: '₦300+ Million',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      description: 'MEP installations for multiple yard buildings supporting the construction of the Abuja-Kano road project.',
      features: [
        'MEP installations for Yards 265, 297, and 231',
        'Site office and administrative facilities',
        'Electrical and plumbing systems',
        'HVAC installations for operational efficiency'
      ],
      role: 'Assistant Quantity Surveyor',
      achievements: [
        'Achieved ₦25 million savings through cost optimization',
        'Conducted comprehensive site inspections and measurements',
        'Prepared accurate variation bills and cost analyses',
        'Ensured efficient project execution and stakeholder coordination'
      ]
    },
    {
      id: 5,
      title: 'Lagos Residential Complex Development',
      client: 'Private Developer',
      location: 'Lekki, Lagos State',
      year: '2020 - 2021',
      value: '₦400+ Million',
      image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      description: 'Development of luxury residential complex with modern amenities and sustainable design features.',
      features: [
        '50 luxury apartments across 8 floors',
        'Modern swimming pool and fitness center',
        'Underground parking for 100 vehicles',
        'Landscaped gardens and recreational areas',
        'Smart home automation systems'
      ],
      role: 'Quantity Surveyor',
      achievements: [
        'Reduced construction costs by 18% through value engineering',
        'Completed project 2 weeks ahead of schedule',
        'Achieved zero safety incidents during construction',
        'Exceeded client expectations in quality and finish'
      ]
    },
    {
      id: 6,
      title: 'Port Harcourt Industrial Facility',
      client: 'Nigerian National Petroleum Corporation',
      location: 'Port Harcourt, Rivers State',
      year: '2019 - 2020',
      value: '₦1.2+ Billion',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      description: 'Construction of state-of-the-art industrial facility for oil and gas processing operations.',
      features: [
        'Processing units for crude oil refinement',
        'Storage tanks with 50,000 barrel capacity',
        'Administrative and control buildings',
        'Fire safety and emergency response systems',
        'Environmental monitoring and control systems'
      ],
      role: 'Junior Quantity Surveyor',
      achievements: [
        'Managed procurement for 200+ suppliers',
        'Implemented cost tracking system saving ₦45M',
        'Coordinated with international engineering teams',
        'Ensured compliance with international safety standards'
      ]
    }
  ];

  const projectId = id ? parseInt(id) : 0;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-slate-50'
      }`}>
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Project Not Found</h1>
            <p className={`text-xl mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/projects"
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'bg-slate-800 text-white hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {project.title}
            </h1>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-600" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{project.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="text-blue-600" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="text-blue-600" size={20} />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{project.value}</span>
              </div>
            </div>

            <p className={`text-xl leading-relaxed mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Project Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Key Achievements</h2>
              <ul className="space-y-4">
                {project.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Info Card */}
          <div className={`mt-12 p-8 rounded-2xl ${
            darkMode ? 'bg-slate-800' : 'bg-slate-100'
          }`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Users className="text-blue-600" size={24} />
                <div>
                  <span className={`font-medium text-lg ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>Role</span>
                  <p className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{project.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">C</span>
                </div>
                <div>
                  <span className={`font-medium text-lg ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>Client</span>
                  <p className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{project.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

