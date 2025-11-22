import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';
import Button from '../../components/Button';

const pricingStyles = `
  .pricing-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .pricing-hero {
    background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.primary[800]} 100%);
    color: white;
    padding: ${theme.spacing[12]};
    border-radius: ${theme.borderRadius['3xl']};
    text-align: center;
    margin-bottom: ${theme.spacing[12]};
    box-shadow: ${theme.shadows['2xl']};
  }

  .pricing-amount {
    font-size: ${theme.typography.fontSize['6xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    margin-bottom: ${theme.spacing[4]};
    line-height: 1;
  }

  .pricing-note {
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.primary[100]};
    margin-bottom: ${theme.spacing[6]};
  }

  .pricing-cta {
    display: flex;
    gap: ${theme.spacing[4]};
    justify-content: center;
    flex-wrap: wrap;
  }

  .booking-process {
    background: white;
    border-radius: ${theme.borderRadius['2xl']};
    padding: ${theme.spacing[8]};
    box-shadow: ${theme.shadows.lg};
  }

  .booking-process h3 {
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[6]};
    text-align: center;
  }

  .booking-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    .booking-steps {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .booking-step {
    display: flex;
    gap: ${theme.spacing[4]};
    align-items: flex-start;
  }

  .booking-step-number {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.primary[700]} 100%);
    color: white;
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
  }

  .booking-step-content {
    flex: 1;
  }

  .booking-step-title {
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[1]};
  }

  .booking-step-description {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    margin: 0;
  }

  .payment-options {
    background: ${theme.colors.primary[50]};
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing[6]};
    margin-top: ${theme.spacing[8]};
    text-align: center;
  }

  .payment-options h4 {
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.primary[800]};
    margin-bottom: ${theme.spacing[3]};
  }

  .payment-options p {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .pricing-amount {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    .pricing-cta {
      flex-direction: column;
    }
  }
`;

const Pricing = () => {
    const { content } = useLanguage();

    useEffect(() => {
        injectStyles(pricingStyles, 'pricing-styles');
    }, []);

    return (
        <div id="pricing">
            <Section
                title={content.pricing.title}
                subtitle={content.pricing.subtitle}
                variant="secondary"
                size="lg"
            >
                <div className="pricing-content">
                    <div className="pricing-hero">
                        <div className="pricing-amount">{content.pricing.startingPrice}</div>
                        <p className="pricing-note">
                            💎 Premium farmhouse plots with all amenities
                        </p>
                        <div className="pricing-cta">
                            <Button variant="secondary" size="lg" href="/brochure.pdf" download>
                                📥 {content.pricing.brochureDownload}
                            </Button>
                            <Button variant="outline" size="lg" href="#contact">
                                {content.common.cta.contactUs}
                            </Button>
                        </div>
                    </div>

                    <div className="booking-process">
                        <h3>{content.pricing.bookingProcess.title}</h3>
                        <div className="booking-steps">
                            {content.pricing.bookingProcess.steps.map((step, index) => (
                                <div key={index} className="booking-step">
                                    <div className="booking-step-number">{index + 1}</div>
                                    <div className="booking-step-content">
                                        <div className="booking-step-title">Step {index + 1}</div>
                                        <p className="booking-step-description">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="payment-options">
                            <h4>💳 {content.pricing.subtitle}</h4>
                            <p>
                                We offer flexible payment plans to suit your needs. Contact us for more details.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Pricing;
