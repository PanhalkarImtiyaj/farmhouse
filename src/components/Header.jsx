import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const { content, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: content.header.nav.home },
    { href: '#features', label: content.header.nav.features },
    { href: '#location', label: content.header.nav.location },
    { href: '#plantation', label: content.header.nav.plantation },
    { href: '#gallery', label: content.header.nav.gallery },
    { href: '#why-invest', label: content.header.nav.whyInvest },
    { href: '#contact', label: content.header.nav.contact },
  ];

  return (
    <header className="site-header">
      {/* Top Bar */}


      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="navbar-container">
          <a href="#home" className="header-logo">
            <img
              src="/faram_house_logo.png"
              alt="Logo"
              className="header-logo-img"
            />
          </a>

          <nav className="header-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header-nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a href="#contact" className="btn-book-visit">
              {content.common.cta.bookVisit}
            </a>

            <button className="lang-text-btn" onClick={toggleLanguage} title="Change Language">
              {content.header.languageToggle}
            </button>

            <button
              className={`header-mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <nav className="header-mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-book-visit" onClick={() => setMobileMenuOpen(false)}>
            {content.common.cta.bookVisit}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
