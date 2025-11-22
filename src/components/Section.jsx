import React, { useEffect } from 'react';
import { injectStyles } from '../styles/injectStyles';
import { theme } from '../styles/theme';

const sectionStyles = `
  .section {
    width: 100%;
    padding: ${theme.spacing[16]} 0;
    position: relative;
  }

  .section-sm {
    padding: ${theme.spacing[12]} 0;
  }

  .section-lg {
    padding: ${theme.spacing[24]} 0;
  }

  .section-primary {
    background-color: ${theme.colors.background.primary};
  }

  .section-secondary {
    background-color: ${theme.colors.background.secondary};
  }

  .section-tertiary {
    background-color: ${theme.colors.background.tertiary};
  }

  .section-gradient {
    background: linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.accent[50]} 100%);
  }

  .section-dark {
    background: linear-gradient(135deg, ${theme.colors.primary[800]} 0%, ${theme.colors.primary[900]} 100%);
    color: ${theme.colors.text.inverse};
  }

  .section-dark h1,
  .section-dark h2,
  .section-dark h3,
  .section-dark h4,
  .section-dark h5,
  .section-dark h6 {
    color: ${theme.colors.text.inverse};
  }

  .section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[4]};
  }

  .section-header {
    text-align: center;
    margin-bottom: ${theme.spacing[12]};
  }

  .section-title {
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    margin-bottom: ${theme.spacing[4]};
    line-height: ${theme.typography.lineHeight.tight};
  }

  .section-subtitle {
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.text.secondary};
    max-width: 700px;
    margin: 0 auto;
  }

  .section-dark .section-subtitle {
    color: ${theme.colors.primary[100]};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .section-container {
      padding: 0 ${theme.spacing[6]};
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .section-container {
      padding: 0 ${theme.spacing[8]};
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .section {
      padding: ${theme.spacing[12]} 0;
    }

    .section-sm {
      padding: ${theme.spacing[8]} 0;
    }

    .section-lg {
      padding: ${theme.spacing[16]} 0;
    }

    .section-title {
      font-size: ${theme.typography.fontSize['3xl']};
    }

    .section-subtitle {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
`;

const Section = ({
    children,
    variant = 'primary',
    size = 'base',
    title,
    subtitle,
    className = '',
    containerClassName = '',
    ...props
}) => {
    useEffect(() => {
        injectStyles(sectionStyles, 'section-styles');
    }, []);

    const sectionClasses = [
        'section',
        `section-${variant}`,
        size !== 'base' && `section-${size}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const containerClasses = ['section-container', containerClassName]
        .filter(Boolean)
        .join(' ');

    return (
        <section className={sectionClasses} {...props}>
            <div className={containerClasses}>
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
