import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AbdulAzeez Ahmad</h3>
            <p className={`leading-relaxed mb-6 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Professional Quantity Surveyor specializing in cost management, 
              project delivery, and construction consultancy across major infrastructure projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:ahmadabdulazeez122@gmail.com"
                className={`p-3 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-blue-600' 
                    : 'bg-slate-200 hover:bg-blue-600'
                }`}
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+2349011967239"
                className={`p-3 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-blue-600' 
                    : 'bg-slate-200 hover:bg-blue-600'
                }`}
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ahmad-abdulazeez-530a311a5"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-blue-600' 
                    : 'bg-slate-200 hover:bg-blue-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Services</h4>
            <ul className={`space-y-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <li>Cost Estimation & Planning</li>
              <li>Project Management</li>
              <li>Contract Administration</li>
              <li>Value Engineering</li>
              <li>Construction Supervision</li>
              <li>Material Management</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className={`space-y-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <li>
                <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between ${
          darkMode ? 'border-slate-700' : 'border-slate-300'
        }`}>
          <p className={`text-center md:text-left ${
            darkMode ? 'text-slate-500' : 'text-slate-500'
          }`}>
            © {currentYear} AbdulAzeez Ahmad. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;