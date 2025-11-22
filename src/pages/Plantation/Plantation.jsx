import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';

const plantationStyles = `
  .plantation-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
    margin-top: ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .plantation-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .plantation-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .plant-category {
    background: white;
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing[8]};
    box-shadow: ${theme.shadows.md};
    text-align: center;
    transition: all ${theme.transitions.base};
    border: 2px solid transparent;
  }

  .plant-category:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-8px);
    border-color: ${theme.colors.primary[300]};
  }

  .plant-icon {
    font-size: ${theme.typography.fontSize['6xl']};
    margin-bottom: ${theme.spacing[4]};
    display: block;
  }

  .plant-count {
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    color: ${theme.colors.primary[600]};
    margin-bottom: ${theme.spacing[2]};
    line-height: 1;
  }

  .plant-name {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[2]};
  }

  .plant-description {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    margin: 0;
  }

  .plantation-total {
    background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.primary[800]} 100%);
    color: white;
    padding: ${theme.spacing[12]};
    border-radius: ${theme.borderRadius['3xl']};
    text-align: center;
    margin-top: ${theme.spacing[12]};
    box-shadow: ${theme.shadows['2xl']};
  }

  .plantation-total-number {
    font-size: ${theme.typography.fontSize['7xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    margin-bottom: ${theme.spacing[4]};
    line-height: 1;
  }

  .plantation-total-text {
    font-size: ${theme.typography.fontSize['2xl']};
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .plant-icon {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    .plant-count {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    .plantation-total-number {
      font-size: ${theme.typography.fontSize['5xl']};
    }

    .plantation-total-text {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`;

const Plantation = () => {
  const { content } = useLanguage();

  useEffect(() => {
    injectStyles(plantationStyles, 'plantation-styles');
  }, []);

  const plantIcons = [
    <i className='bx bx-spa'></i>,
    <i className='bx bx-lemon'></i>,
    <i className='bx bxs-tree'></i>,
    <i className='bx bx-leaf'></i>,
    <i className='bx bxs-florist'></i>,
    <i className='bx bx-flower'></i>,
    <i className='bx bxs-leaf'></i>
  ];

  return (
    <div id="plantation">
      <Section
        title={content.plantation.title}
        subtitle={content.plantation.subtitle}
        variant="gradient"
        size="lg"
      >
        <div className="plantation-grid">
          {content.plantation.categories.map((category, index) => (
            <div key={index} className="plant-category">
              <span className="plant-icon">{plantIcons[index]}</span>
              <div className="plant-count">{category.count}</div>
              <h3 className="plant-name">{category.name}</h3>
              <p className="plant-description">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="plantation-total">
          <div className="plantation-total-number">300+</div>
          <p className="plantation-total-text">
            <i className='bx bxs-tree-alt'></i> Total Plants Ready on Every Plot
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Plantation;
