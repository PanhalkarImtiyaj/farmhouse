import React, { useEffect } from 'react';
import { injectStyles } from '../styles/injectStyles';
import { theme } from '../styles/theme';

const buttonStyles = `
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing[2]};
    padding: ${theme.spacing[3]} ${theme.spacing[6]};
    font-family: ${theme.typography.fontFamily.body};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 1;
    text-decoration: none;
    border: none;
    border-radius: ${theme.borderRadius.lg};
    cursor: pointer;
    transition: all ${theme.transitions.base};
    white-space: nowrap;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-primary {
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%); /* Darker Green */
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, #2e7d32 0%, #388e3c 100%);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  .btn-primary:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .btn-secondary {
    background: linear-gradient(135deg, #8d6e63 0%, #6d4c41 100%); /* Darker Brown */
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn-secondary:hover:not(:disabled) {
    background: linear-gradient(135deg, #a1887f 0%, #8d6e63 100%);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  .btn-secondary:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .btn-outline {
    background: transparent;
    color: ${theme.colors.primary[600]};
    border: 2px solid ${theme.colors.primary[600]};
  }

  .btn-outline:hover:not(:disabled) {
    background: ${theme.colors.primary[50]};
    border-color: ${theme.colors.primary[700]};
    color: ${theme.colors.primary[700]};
  }

  .btn-ghost {
    background: transparent;
    color: ${theme.colors.primary[600]};
    box-shadow: none;
  }

  .btn-ghost:hover:not(:disabled) {
    background: ${theme.colors.primary[50]};
  }

  .btn-sm {
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    font-size: ${theme.typography.fontSize.sm};
  }

  .btn-lg {
    padding: ${theme.spacing[4]} ${theme.spacing[8]};
    font-size: ${theme.typography.fontSize.lg};
  }

  .btn-icon {
    padding: ${theme.spacing[3]};
    border-radius: ${theme.borderRadius.full};
  }

  .btn-icon.btn-sm {
    padding: ${theme.spacing[2]};
  }

  .btn-icon.btn-lg {
    padding: ${theme.spacing[4]};
  }

  .btn-loading {
    position: relative;
    color: transparent;
  }

  .btn-loading::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    margin-left: -8px;
    margin-top: -8px;
    border: 2px solid currentColor;
    border-radius: 50%;
    border-top-color: transparent;
    animation: btn-spin 0.6s linear infinite;
  }

  @keyframes btn-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .btn {
      padding: ${theme.spacing[2]} ${theme.spacing[4]};
      font-size: ${theme.typography.fontSize.sm};
    }

    .btn-lg {
      padding: ${theme.spacing[3]} ${theme.spacing[6]};
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'base',
  icon = null,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  onClick,
  href,
  type = 'button',
  className = '',
  ...props
}) => {
  useEffect(() => {
    injectStyles(buttonStyles, 'button-styles');
  }, []);

  const classNames = [
    'btn',
    `btn-${variant}`,
    size !== 'base' && `btn-${size}`,
    icon && !children && 'btn-icon',
    loading && 'btn-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon-left">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="btn-icon-right">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
