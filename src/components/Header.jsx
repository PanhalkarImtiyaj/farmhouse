import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { injectStyles } from '../styles/injectStyles';
import { theme } from '../styles/theme';

const headerStyles = `
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${theme.zIndex.sticky};
    font-family: ${theme.typography.fontFamily.sans};
  }

  .top-bar {
    background-color: #8bc34a; /* Light green similar to reference */
    color: white;
    padding: ${theme.spacing[2]} 0;
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: transform 0.3s ease;
  }

  .top-bar.hidden {
    transform: translateY(-100%);
  }

  .top-bar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[4]};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .welcome-text {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[2]};
  }

  .social-icons {
    display: flex;
    gap: ${theme.spacing[3]};
  }

  .social-icon {
    color: white;
    font-size: ${theme.typography.fontSize.lg};
    transition: opacity 0.2s;
  }

  .social-icon:hover {
    opacity: 0.8;
  }

  .main-navbar {
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    transition: all 0.3s ease;
  }

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 50px; /* Pill shape */
    padding: ${theme.spacing[2]} ${theme.spacing[6]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .header-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .header-logo-img {
    height: 50px;
    width: auto;
    object-fit: contain;
  }

  .header-nav {
    display: none;
    gap: ${theme.spacing[6]};
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .header-nav {
      display: flex;
    }
  }

  .header-nav-link {
    color: ${theme.colors.text.secondary};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.sm};
    transition: color ${theme.transitions.fast};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${theme.typography.fontFamily.sans};
  }

  .header-nav-link:hover {
    color: ${theme.colors.primary[600]};
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[3]};
  }

  .btn-book-visit {
    background-color: #66bb6a; /* Green button */
    color: white;
    padding: ${theme.spacing[2]} ${theme.spacing[6]};
    border-radius: 50px;
    text-decoration: none;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.sm};
    transition: background-color 0.2s;
    white-space: nowrap;
    font-family: ${theme.typography.fontFamily.sans};
  }

  .btn-book-visit:hover {
    background-color: #558b2f;
  }

  .lang-text-btn {
    background: none;
    border: none;
    color: ${theme.colors.text.secondary};
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.sm};
    cursor: pointer;
    padding: ${theme.spacing[2]};
    text-transform: uppercase;
    font-family: ${theme.typography.fontFamily.sans};
    transition: color 0.2s;
  }

  .lang-text-btn:hover {
    color: ${theme.colors.primary[600]};
  }

  .header-mobile-toggle {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: ${theme.spacing[2]};
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .header-mobile-toggle {
      display: none;
    }
  }

  .header-mobile-toggle span {
    width: 24px;
    height: 2px;
    background: ${theme.colors.text.primary};
    transition: all ${theme.transitions.fast};
  }

  .header-mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .header-mobile-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .header-mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .header-mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: -1;
    padding: 100px ${theme.spacing[4]} ${theme.spacing[4]};
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-mobile-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .header-mobile-nav {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
    text-align: center;
    width: 100%;
  }

  .header-mobile-nav-link {
    color: ${theme.colors.text.primary};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.xl};
    padding: ${theme.spacing[2]};
  }
`;

const Header = () => {
  const { content, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    injectStyles(headerStyles, 'header-styles');

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
      <div className={`top-bar ${scrolled ? 'hidden' : ''}`}>
        <div className="top-bar-container">
          <div className="welcome-text">
            <span>Namaskar 🙏, WELCOME TO {content.common.siteName.toUpperCase()}</span>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="social-icon"><i className='bx bxl-instagram'></i></a>
            <a href="#" className="social-icon"><i className='bx bxl-youtube'></i></a>
            <a href="#" className="social-icon"><i className='bx bxl-whatsapp'></i></a>
          </div>
        </div>
      </div>

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
