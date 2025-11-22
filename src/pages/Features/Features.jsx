import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';
import FeatureCard from '../../components/FeatureCard';

const featuresStyles = `
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .features-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Features = () => {
  const { content } = useLanguage();

  useEffect(() => {
    injectStyles(featuresStyles, 'features-styles');
  }, []);

  const featureIcons = [
    <i className='bx bx-street-view'></i>,
    <i className='bx bx-buildings'></i>,
    <i className='bx bx-refresh'></i>,
    <i className='bx bx-file'></i>,
    <i className='bx bx-rupee'></i>,
    <i className='bx bx-building'></i>,
    <i className='bx bx-water'></i>,
    <i className='bx bx-leaf'></i>,
    <i className='bx bx-hard-hat'></i>,
    <i className='bx bx-group'></i>,
    <i className='bx bx-user-check'></i>,
    <i className='bx bx-spa'></i>,
    <i className='bx bx-compass'></i>,
    <i className='bx bx-wrench'></i>,
    <i className='bx bx-landmark'></i>,
    <i className='bx bx-ruler'></i>,
    <i className='bx bx-bolt'></i>,
    <i className='bx bx-bulb'></i>,
    <i className='bx bx-droplet'></i>
  ];

  return (
    <div id="features">
      <Section
        title={content.features.title}
        subtitle={content.features.subtitle}
        variant="primary"
        size="lg"
      >
        <div className="features-grid">
          {content.features.list.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={featureIcons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Features;
