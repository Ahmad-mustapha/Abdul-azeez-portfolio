import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', isPage: true },
    { href: '#about', label: 'About', isPage: false },
    { href: '#experience', label: 'Experience', isPage: false },
    { href: '/projects', label: 'Projects', isPage: true },
    { href: '#skills', label: 'Skills', isPage: false },
    { href: '#contact', label: 'Contact', isPage: false },
  ];

  const handleNavigation = (href: string, isPage: boolean = false) => {
    if (isPage) {
      // For page navigation, React Router will handle it
      setIsMenuOpen(false);
    } else {
      // Scroll to section on current page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first, then scroll
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? darkMode 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-md' 
          : 'bg-white/95 backdrop-blur-sm shadow-md'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            AbdulAzeez Ahmad
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'text-slate-300 hover:text-blue-500' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href, item.isPage)}
                  className={`font-medium transition-colors duration-200 ${
                    darkMode 
                      ? 'text-slate-300 hover:text-blue-500' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              darkMode 
                ? 'text-slate-300 hover:text-blue-500' 
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 shadow-lg border-t ${
            darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block w-full text-left font-medium py-2 transition-colors ${
                      darkMode 
                        ? 'text-slate-300 hover:text-orange-400' 
                        : 'text-slate-700 hover:text-orange-500'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href, item.isPage)}
                    className={`block w-full text-left font-medium py-2 transition-colors ${
                      darkMode 
                        ? 'text-slate-300 hover:text-orange-400' 
                        : 'text-slate-700 hover:text-orange-500'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center space-x-2 w-full text-left font-medium py-2 transition-colors ${
                  darkMode 
                    ? 'text-slate-300 hover:text-orange-400' 
                    : 'text-slate-700 hover:text-orange-500'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;