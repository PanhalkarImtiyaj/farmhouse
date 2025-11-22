import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { injectStyles } from '../../styles/injectStyles';
import { theme } from '../../styles/theme';
import Section from '../../components/Section';
import Button from '../../components/Button';

const contactStyles = `
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[12]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[6]};
  }

  .contact-card {
    background: white;
    padding: ${theme.spacing[6]};
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.md};
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing[4]};
    transition: all ${theme.transitions.base};
  }

  .contact-card:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-4px);
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.accent[50]} 100%);
    border-radius: ${theme.borderRadius.xl};
    font-size: ${theme.typography.fontSize['3xl']};
  }

  .contact-details {
    flex: 1;
  }

  .contact-label {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.text.tertiary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: ${theme.spacing[1]};
  }

  .contact-value {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[2]};
  }

  .contact-value a {
    color: ${theme.colors.primary[600]};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
  }

  .contact-value a:hover {
    color: ${theme.colors.primary[700]};
  }

  .contact-action {
    margin-top: ${theme.spacing[3]};
  }

  .contact-form-container {
    background: white;
    padding: ${theme.spacing[8]};
    border-radius: ${theme.borderRadius['2xl']};
    box-shadow: ${theme.shadows.lg};
  }

  .contact-form-title {
    font-size: ${theme.typography.fontSize['3xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[2]};
  }

  .contact-form-subtitle {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing[8]};
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }

  .form-label {
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.primary};
  }

  .form-input,
  .form-textarea {
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    border: 2px solid ${theme.colors.neutral[200]};
    border-radius: ${theme.borderRadius.lg};
    font-size: ${theme.typography.fontSize.base};
    font-family: ${theme.typography.fontFamily.body};
    transition: all ${theme.transitions.fast};
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: ${theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
  }

  .form-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .contact-map {
    width: 100%;
    height: 400px;
    border-radius: ${theme.borderRadius.xl};
    overflow: hidden;
    box-shadow: ${theme.shadows.lg};
    margin-top: ${theme.spacing[12]};
  }

  .contact-map iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .office-hours {
    background: ${theme.colors.primary[50]};
    padding: ${theme.spacing[4]};
    border-radius: ${theme.borderRadius.lg};
    text-align: center;
    margin-top: ${theme.spacing[6]};
  }

  .office-hours p {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    margin: 0;
  }
`;

const Contact = () => {
  const { content } = useLanguage();

  useEffect(() => {
    injectStyles(contactStyles, 'contact-styles');
  }, []);

  return (
    <div id="contact">
      <Section
        title={content.contact.title}
        subtitle={content.contact.subtitle}
        variant="gradient"
        size="lg"
      >
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon"><i className='bx bx-phone'></i></div>
              <div className="contact-details">
                <div className="contact-label">Phone</div>
                <div className="contact-value">
                  <a href={`tel:${content.common.contact.phone}`}>
                    {content.common.contact.phone}
                  </a>
                </div>
                <div className="contact-action">
                  <Button variant="primary" size="sm" href={`tel:${content.common.contact.phone}`}>
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><i className='bx bxl-whatsapp'></i></div>
              <div className="contact-details">
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value">
                  <a
                    href={`https://wa.me/${content.common.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.common.contact.whatsapp}
                  </a>
                </div>
                <div className="contact-action">
                  <Button
                    variant="primary"
                    size="sm"
                    href={`https://wa.me/${content.common.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><i className='bx bx-envelope'></i></div>
              <div className="contact-details">
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href={`mailto:${content.common.contact.email}`}>
                    {content.common.contact.email}
                  </a>
                </div>
                <div className="contact-action">
                  <Button variant="primary" size="sm" href={`mailto:${content.common.contact.email}`}>
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><i className='bx bx-map'></i></div>
              <div className="contact-details">
                <div className="contact-label">Address</div>
                <div className="contact-value" style={{ fontSize: theme.typography.fontSize.base }}>
                  {content.common.contact.address}
                </div>
              </div>
            </div>

            <div className="office-hours">
              <p><i className='bx bx-time'></i> {content.contact.officeHours}</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-form-title">{content.contact.visitBooking.title}</h3>
            <p className="contact-form-subtitle">{content.contact.visitBooking.description}</p>

            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const email = formData.get('email');
              const message = formData.get('message');

              const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${message}`;

              window.open(`https://wa.me/917517005494?text=${whatsappMessage}`, '_blank');
            }}>
              <div className="form-group">
                <label className="form-label">{content.contact.form.name}</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{content.contact.form.phone}</label>
                <input
                  type="tel"
                  className="form-input"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{content.contact.form.email}</label>
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{content.contact.form.message}</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg">
                {content.contact.form.submit}
              </Button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d74.5!3d16.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzAwLjAiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dream Farm House Location"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
