import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: 'About',
      href: '#about',
      dropdown: ['Our Story', 'Leadership', 'Careers']
    },
    {
      label: 'Services',
      href: '#services',
      dropdown: ['Feasibility Studies', 'Market Research', 'Financial Analysis']
    },
    {
      label: 'Insights',
      href: '#insights',
      dropdown: ['Blog', 'Case Studies', 'Reports']
    },
    { label: 'Credentials', href: '#credentials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F3F5F7]">
      <div className="xl:container mx-auto px-4 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          {/* <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center">
              <span className="text-black font-serif text-lg">P</span>
            </div>
            <span className="text-black font-sans text-sm font-medium tracking-wide">
              Platform01<br />
              <span className="text-xs opacity-80">Consulting</span>
            </span>
          </a> */}
          <Link to='/'>
            <img src={Logo} alt="Logo" className='w-48 h-[75px]' />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 text-[#000]">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="hover:bg-white p-4 text-sm font-sans font-medium transition-colors flex items-center"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>

                {item.dropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[180px]"
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <button
            className="hidden lg:block bg-primary text-white p-4">Talk to an Expert</button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-light"
          >
            <div className="container mx-auto px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-white/90 hover:text-white text-base font-sans border-b border-white/10 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="mt-2 text-sm bg-primary text-white p-4">Talk to an Expert</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
