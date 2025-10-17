import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar, DollarSign, } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
  showAll?: boolean;
}

const Projects = ({ darkMode, showAll = false }: ProjectsProps) => {

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
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
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

  const categories = ['All', 'Infrastructure', 'Commercial', 'Residential'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Show only first 3 projects for featured section when showAll is false
  const displayProjects = showAll ? projects : projects.slice(0, 3);
  
  const filteredProjects = activeCategory === 'All' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeCategory);


  return (
    <>
      <section id="projects" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          {/* Back Button - only show when showing all projects */}
          {/* {showAll && (
            <div className="mb-8">
              <Link
                to="/"
                className={`flex items-center w-[5rem] space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </Link>
            </div>
          )} */}

          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>{showAll ? 'All Projects' : 'Featured Projects'}</h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {showAll 
                ? 'Complete portfolio of infrastructure, commercial, and residential projects with proven results and exceptional value delivery'
                : 'Showcasing featured infrastructure and construction projects with proven results and exceptional value delivery'
              }
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : darkMode 
                        ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid gap-8 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-2'}`}>
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`block rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-slate-100'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <MapPin size={14} className="mr-2" />
                      {project.location}
                    </div>
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <Calendar size={14} className="mr-2" />
                      {project.year}
                    </div>
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <DollarSign size={14} className="mr-2" />
                      {project.value}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">
                      {project.role}
                    </span>
                    <ExternalLink size={16} className={
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    } />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Button - only show when not showing all projects */}
          {!showAll && (
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
                    : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>View All Projects</span>
                <ExternalLink className="ml-2" size={20} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;