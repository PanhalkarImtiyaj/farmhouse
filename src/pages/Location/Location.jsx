import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';

const locationStyles = `
  .location-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[12]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .location-content {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }

  .location-map {
    width: 100%;
    height: 500px;
    border-radius: ${theme.borderRadius['2xl']};
    overflow: hidden;
    box-shadow: ${theme.shadows.xl};
  }

  .location-map iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .location-distances {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[6]};
  }

  .distance-card {
    background: white;
    padding: ${theme.spacing[6]};
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.md};
    display: flex;
    align-items: center;
    gap: ${theme.spacing[4]};
    transition: all ${theme.transitions.base};
  }

  .distance-card:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateX(8px);
  }

  .distance-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.accent[50]} 100%);
    border-radius: ${theme.borderRadius.xl};
    font-size: ${theme.typography.fontSize['3xl']};
    flex-shrink: 0;
  }

  .distance-info {
    flex: 1;
  }

  .distance-place {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[1]};
  }

  .distance-value {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.primary[600]};
    font-weight: ${theme.typography.fontWeight.semibold};
  }

  .location-highlight {
    background: linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.accent[50]} 100%);
    padding: ${theme.spacing[8]};
    border-radius: ${theme.borderRadius['2xl']};
    text-align: center;
    margin-top: ${theme.spacing[8]};
  }

  .location-highlight h3 {
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.primary[800]};
    margin-bottom: ${theme.spacing[4]};
  }

  .location-highlight p {
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.text.secondary};
  }
`;

const Location = () => {
  const { content } = useLanguage();

  useEffect(() => {
    injectStyles(locationStyles, 'location-styles');
  }, []);

  const distanceIcons = [
    <i className='bx bx-plus-medical'></i>,
    <i className='bx bx-train'></i>,
    <i className='bx bx-building-house'></i>,
    <i className='bx bx-factory'></i>
  ];

  return (
    <div id="location">
      <Section
        title={content.location.title}
        subtitle={content.location.subtitle}
        variant="secondary"
        size="lg"
      >
        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d74.5!3d16.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzAwLjAiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dream Farm House Location"
            ></iframe>
          </div>

          <div className="location-distances">
            {content.location.distances.map((item, index) => (
              <div key={index} className="distance-card">
                <div className="distance-icon">{distanceIcons[index]}</div>
                <div className="distance-info">
                  <div className="distance-place">{item.place}</div>
                  <div className="distance-value"><i className='bx bx-map'></i> {item.distance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="location-highlight">
          <h3><i className='bx bx-target-lock'></i> {content.location.title}</h3>
          <p>Multiple access routes ensure excellent connectivity from all directions</p>
        </div>
      </Section>
    </div>
  );
};

export default Location;
