import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';
import Button from '../../components/Button';
import FeatureCard from '../../components/FeatureCard';

// Import slider images
import img14 from '../../assets/images/silder-image/14.png';
import img16 from '../../assets/images/silder-image/16.png';
import img6 from '../../assets/images/silder-image/6.png';
import img9 from '../../assets/images/silder-image/9.png';

const sliderImages = [img14, img16, img6, img9];

const homeStyles = `
  .hero {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d4e10; /* Fallback color */
    color: white;
    text-align: center;
    padding: ${theme.spacing[8]} ${theme.spacing[4]};
    overflow: hidden;
  }

  .hero-slider-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }

  .hero-slide.active {
    opacity: 1;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(29, 78, 16, 0.4) 0%, rgba(45, 80, 22, 0.3) 100%);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-badge {
    display: inline-block;
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing[6]};
    animation: hero-badge-float 3s ease-in-out infinite;
  }

  @keyframes hero-badge-float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .hero-title {
    font-size: ${theme.typography.fontSize['6xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    margin-bottom: ${theme.spacing[4]};
    line-height: ${theme.typography.lineHeight.tight};
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    animation: hero-title-fade 1s ease-out;
  }

  @keyframes hero-title-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-subtitle {
    font-size: ${theme.typography.fontSize['2xl']};
    margin-bottom: ${theme.spacing[3]};
    color: ${theme.colors.primary[100]};
    font-weight: ${theme.typography.fontWeight.medium};
    animation: hero-subtitle-fade 1s ease-out 0.2s backwards;
  }

  @keyframes hero-subtitle-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-description {
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing[8]};
    color: ${theme.colors.primary[50]};
    line-height: ${theme.typography.lineHeight.relaxed};
    animation: hero-description-fade 1s ease-out 0.4s backwards;
  }

  @keyframes hero-description-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-cta {
    display: flex;
    gap: ${theme.spacing[4]};
    justify-content: center;
    flex-wrap: wrap;
    animation: hero-cta-fade 1s ease-out 0.6s backwards;
  }

  @keyframes hero-cta-fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-scroll-indicator {
    position: absolute;
    bottom: ${theme.spacing[8]};
    left: 50%;
    transform: translateX(-50%);
    animation: hero-scroll-bounce 2s ease-in-out infinite;
    font-size: ${theme.typography.fontSize['2xl']};
    opacity: 0.7;
    z-index: 2;
  }

  @keyframes hero-scroll-bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }

  .bold-features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
    margin-top: ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .bold-features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .bold-features-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .stats-section {
    background: linear-gradient(135deg, ${theme.colors.primary[700]} 0%, ${theme.colors.primary[900]} 100%);
    color: white;
    padding: ${theme.spacing[16]} 0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    text-align: center;
  }

  .stat-value {
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    margin-bottom: ${theme.spacing[2]};
    background: linear-gradient(135deg, white 0%, ${theme.colors.primary[100]} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.primary[100]};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .hero {
      min-height: 70vh;
      padding: 140px ${theme.spacing[4]} ${theme.spacing[6]};
    }

    .hero-title {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    .hero-subtitle {
      font-size: ${theme.typography.fontSize.xl};
    }

    .hero-description {
      font-size: ${theme.typography.fontSize.lg};
    }

    .hero-cta {
      flex-direction: column;
      align-items: stretch;
    }

    .stat-value {
      font-size: ${theme.typography.fontSize['4xl']};
    }

    .stat-label {
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;

const Home = () => {
  const { content } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    injectStyles(homeStyles, 'home-styles');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const boldFeatures = content.home.boldFeatures.features;

  const featureIcons = [
    <i className='bx bx-check-circle'></i>,
    <i className='bx bx-file-blank'></i>,
    <i className='bx bx-trophy'></i>,
    <i className='bx bx-trending-up'></i>,
    <i className='bx bx-water'></i>,
    <i className='bx bx-droplet'></i>,
    <i className='bx bx-street-view'></i>
  ];

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider-container">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <i className='bx bx-star'></i> {content.common.tagline}
          </div>
          <h1 className="hero-title">{content.home.hero.title}</h1>
          <p className="hero-subtitle">{content.home.hero.subtitle}</p>
          <p className="hero-description">{content.home.hero.description}</p>
          <div className="hero-cta">
            <Button variant="primary" size="lg" href="#contact">
              {content.common.cta.bookVisit}
            </Button>
            <Button variant="secondary" size="lg" href="#gallery">
              {content.common.cta.downloadBrochure}
            </Button>
          </div>
        </div>
        <div className="hero-scroll-indicator"><i className='bx bx-down-arrow-alt'></i></div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">300+</div>
              <div className="stat-label">Plants Per Plot</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2x</div>
              <div className="stat-label">Expected Growth</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">0%</div>
              <div className="stat-label">Flood Risk</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100m</div>
              <div className="stat-label">From Main Road</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Features Section */}
      <Section
        title={content.home.boldFeatures.title}
        subtitle="Premium features that make us the best choice for your farmhouse investment"
        variant="secondary"
        size="lg"
      >
        <div className="bold-features-grid">
          {boldFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={featureIcons[index]}
              title={feature.title}
              description={feature.description}
              highlight={index < 3}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
