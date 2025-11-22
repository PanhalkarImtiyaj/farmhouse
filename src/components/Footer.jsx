import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { injectStyles } from '../styles/injectStyles';
import { theme } from '../styles/theme';

const footerStyles = `
  .footer {
    background: linear-gradient(135deg, ${theme.colors.primary[800]} 0%, ${theme.colors.primary[900]} 100%);
    color: ${theme.colors.text.inverse};
    padding: ${theme.spacing[16]} 0 ${theme.spacing[8]};
  }

  .footer-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[4]};
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
    margin-bottom: ${theme.spacing[12]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .footer-grid {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
  }

  .footer-section h3 {
    color: ${theme.colors.text.inverse};
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing[4]};
  }

  .footer-section p {
    color: ${theme.colors.primary[100]};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing[3]};
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: ${theme.spacing[2]};
  }

  .footer-links a {
    color: ${theme.colors.primary[100]};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    display: inline-block;
  }

  .footer-links a:hover {
    color: ${theme.colors.text.inverse};
    transform: translateX(4px);
  }

  .footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing[2]};
    margin-bottom: ${theme.spacing[3]};
    color: ${theme.colors.primary[100]};
  }

  .footer-contact-item a {
    color: ${theme.colors.primary[100]};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
  }

  .footer-contact-item a:hover {
    color: ${theme.colors.text.inverse};
  }

  .footer-social {
    display: flex;
    gap: ${theme.spacing[3]};
    margin-top: ${theme.spacing[4]};
  }

  .footer-social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.borderRadius.full};
    color: ${theme.colors.text.inverse};
    text-decoration: none;
    transition: all ${theme.transitions.fast};
  }

  .footer-social-link:hover {
    background: ${theme.colors.primary[600]};
    transform: translateY(-2px);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: ${theme.spacing[6]};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
    align-items: center;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  .footer-bottom p {
    color: ${theme.colors.primary[200]};
    margin: 0;
  }

  .footer-lang-toggle {
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    background: rgba(255, 255, 255, 0.1);
    color: ${theme.colors.text.inverse};
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${theme.borderRadius.md};
    font-weight: ${theme.typography.fontWeight.medium};
    cursor: pointer;
    transition: all ${theme.transitions.fast};
  }

  .footer-lang-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .footer-disclaimer {
    background: rgba(0, 0, 0, 0.2);
    padding: ${theme.spacing[4]};
    border-radius: ${theme.borderRadius.lg};
    margin-bottom: ${theme.spacing[8]};
  }

  .footer-disclaimer p {
    color: ${theme.colors.primary[100]};
    font-size: ${theme.typography.fontSize.sm};
    margin: 0;
  }
`;

const Footer = () => {
  const { content, toggleLanguage } = useLanguage();

  useEffect(() => {
    injectStyles(footerStyles, 'footer-styles');
  }, []);

  const quickLinks = [
    { href: '#home', label: content.header.nav.home },
    { href: '#features', label: content.header.nav.features },
    { href: '#location', label: content.header.nav.location },
    { href: '#plantation', label: content.header.nav.plantation },
    { href: '#gallery', label: content.header.nav.gallery },
    { href: '#why-invest', label: content.header.nav.whyInvest },
    { href: '#pricing', label: content.header.nav.pricing },
    { href: '#contact', label: content.header.nav.contact },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3><i className='bx bx-home-heart'></i> {content.common.siteName}</h3>
            <p>{content.common.tagline}</p>
            <p>{content.footer.disclaimer}</p>
          </div>

          <div className="footer-section">
            <h3>{content.footer.quickLinks}</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>{content.footer.contactInfo}</h3>
            <div className="footer-contact-item">
              <i className='bx bx-phone'></i>
              <a href={`tel:${content.common.contact.phone}`}>
                {content.common.contact.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <i className='bx bxl-whatsapp'></i>
              <a
                href={`https://wa.me/${content.common.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.common.contact.whatsapp}
              </a>
            </div>
            <div className="footer-contact-item">
              <i className='bx bx-envelope'></i>
              <a href={`mailto:${content.common.contact.email}`}>
                {content.common.contact.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <i className='bx bx-map'></i>
              <span>{content.common.contact.address}</span>
            </div>
          </div>

          <div className="footer-section">
            <h3>{content.footer.followUs}</h3>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className='bx bxl-facebook'></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <i className='bx bxl-instagram'></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <i className='bx bxl-youtube'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{content.footer.copyright}</p>
          <button
            className="footer-lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {content.header.languageToggle}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
