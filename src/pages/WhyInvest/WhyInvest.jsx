import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';

const whyInvestStyles = `
  .why-invest-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    .why-invest-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .invest-reason {
    background: white;
    border-radius: ${theme.borderRadius['2xl']};
    padding: ${theme.spacing[8]};
    box-shadow: ${theme.shadows.lg};
    border-left: 4px solid ${theme.colors.primary[500]};
    transition: all ${theme.transitions.base};
  }

  .invest-reason:hover {
    box-shadow: ${theme.shadows['2xl']};
    transform: translateX(8px);
    border-left-width: 8px;
  }

  .invest-reason-title {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.primary[700]};
    margin-bottom: ${theme.spacing[3]};
    display: flex;
    align-items: center;
    gap: ${theme.spacing[3]};
  }

  .invest-reason-icon {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  .invest-reason-description {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0;
  }

  .invest-cta-section {
    background: linear-gradient(135deg, ${theme.colors.primary[700]} 0%, ${theme.colors.primary[900]} 100%);
    color: white;
    padding: ${theme.spacing[16]};
    border-radius: ${theme.borderRadius['3xl']};
    text-align: center;
    margin-top: ${theme.spacing[12]};
  }

  .invest-cta-section h3 {
    font-size: ${theme.typography.fontSize['4xl']};
    color: white;
    margin-bottom: ${theme.spacing[6]};
  }

  .invest-cta-section p {
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.primary[100]};
    margin-bottom: ${theme.spacing[8]};
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .invest-cta-buttons {
    display: flex;
    gap: ${theme.spacing[4]};
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const WhyInvest = () => {
  const { content } = useLanguage();

  useEffect(() => {
    injectStyles(whyInvestStyles, 'why-invest-styles');
  }, []);

  const reasonIcons = [
    <i className='bx bx-trending-up'></i>,
    <i className='bx bx-shield-alt-2'></i>,
    <i className='bx bx-refresh'></i>,
    <i className='bx bx-rocket'></i>,
    <i className='bx bx-check-shield'></i>,
    <i className='bx bx-building-house'></i>
  ];

  return (
    <div id="why-invest">
      <Section
        title={content.whyInvest.title}
        subtitle={content.whyInvest.subtitle}
        variant="secondary"
        size="lg"
      >
        <div className="why-invest-grid">
          {content.whyInvest.reasons.map((reason, index) => (
            <div key={index} className="invest-reason">
              <h3 className="invest-reason-title">
                <span className="invest-reason-icon">{reasonIcons[index]}</span>
                {reason.title}
              </h3>
              <p className="invest-reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="invest-cta-section">
          <h3>Ready to Invest in Your Dream Farmhouse?</h3>
          <p>
            Join hundreds of satisfied investors who have already secured their plots.
            Book your site visit today!
          </p>
          <div className="invest-cta-buttons">
            <a
              href="#contact"
              style={{
                padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
                background: 'white',
                color: theme.colors.primary[700],
                borderRadius: theme.borderRadius.lg,
                textDecoration: 'none',
                fontWeight: theme.typography.fontWeight.semibold,
                fontSize: theme.typography.fontSize.lg,
                transition: `all ${theme.transitions.base}`,
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = theme.shadows.xl;
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {content.common.cta.bookVisit}
            </a>
            <a
              href="#gallery"
              style={{
                padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: theme.borderRadius.lg,
                textDecoration: 'none',
                fontWeight: theme.typography.fontWeight.semibold,
                fontSize: theme.typography.fontSize.lg,
                transition: `all ${theme.transitions.base}`,
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {content.common.cta.downloadBrochure}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyInvest;
