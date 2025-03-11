
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-tight flex items-center justify-between">
        <NavLink to="/" className="text-xl font-serif font-semibold">
          <span className="text-primary">Y.</span>El Goumri
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-fade-in">
          <div className="container-tight py-4 flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block py-2 px-3 rounded-md ${isActive ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `block py-2 px-3 rounded-md ${isActive ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `block py-2 px-3 rounded-md ${isActive ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `block py-2 px-3 rounded-md ${isActive ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block py-2 px-3 rounded-md ${isActive ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};
