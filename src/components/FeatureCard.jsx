import React, { useEffect } from 'react';
import { injectStyles } from '../styles/injectStyles';
import { theme } from '../styles/theme';

const featureCardStyles = `
  .feature-card {
    background: white;
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing[6]};
    box-shadow: ${theme.shadows.base};
    transition: all ${theme.transitions.base};
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
  }

  .feature-card:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-4px);
  }

  .feature-card-icon {
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

  .feature-card-content {
    flex: 1;
  }

  .feature-card-title {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[2]};
    line-height: ${theme.typography.lineHeight.tight};
  }

  .feature-card-description {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0;
  }

  .feature-card-badge {
    display: inline-block;
    padding: ${theme.spacing[1]} ${theme.spacing[3]};
    background: ${theme.colors.primary[100]};
    color: ${theme.colors.primary[700]};
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-top: ${theme.spacing[2]};
  }

  .feature-card-highlight {
    border: 2px solid ${theme.colors.primary[300]};
    background: linear-gradient(135deg, ${theme.colors.primary[50]} 0%, white 100%);
  }

  .feature-card-highlight .feature-card-title {
    color: ${theme.colors.primary[800]};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .feature-card {
      padding: ${theme.spacing[4]};
    }

    .feature-card-icon {
      width: 50px;
      height: 50px;
      font-size: ${theme.typography.fontSize['2xl']};
    }

    .feature-card-title {
      font-size: ${theme.typography.fontSize.lg};
    }

    .feature-card-description {
      font-size: ${theme.typography.fontSize.sm};
    }
  }
`;

const FeatureCard = ({
    icon,
    title,
    description,
    badge,
    highlight = false,
    className = '',
}) => {
    useEffect(() => {
        injectStyles(featureCardStyles, 'feature-card-styles');
    }, []);

    const cardClasses = [
        'feature-card',
        highlight && 'feature-card-highlight',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={cardClasses}>
            {icon && <div className="feature-card-icon">{icon}</div>}
            <div className="feature-card-content">
                <h3 className="feature-card-title">{title}</h3>
                <p className="feature-card-description">{description}</p>
                {badge && <span className="feature-card-badge">{badge}</span>}
            </div>
        </div>
    );
};

export default FeatureCard;
