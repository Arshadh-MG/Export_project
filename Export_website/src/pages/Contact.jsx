import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { businessData } from '../data/business';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Panir Thuli Exports | Wholesale & Export Enquiries",
    "description": "Contact Panir Thuli Exports for wholesale agricultural produce, Indian spices, raw leather, moringa, and seed exports.",
    "url": "https://panirthuliexports.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Panir Thuli Exports",
      "email": "panirthuliexports@gmail.com",
      "telephone": "+91-9952490517",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="contact-page">
      <SEOHead
        title="Contact Panir Thuli Exports | Wholesale & Export Enquiries"
        description="Tell us what products you are looking for, your quantity requirements and destination. Direct WhatsApp and email contact with Panir Thuli Exports."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
          <span className="section-subtitle">EXPORT ENQUIRIES</span>
          <h1 className="page-hero-title">Let's Work Together</h1>
          <p className="page-hero-desc">
            Tell us what products you are looking for, your quantity requirements and destination.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Direct Contacts & Operations */}
            <div className="contact-info-panel">
              <div className="contact-info-header">
                <span className="section-subtitle">DIRECT CONTACT DETAILS</span>
                <h2>Get in Touch with Our Export Desk</h2>
                <p>
                  Connect directly with our operations leaders for immediate trade assistance, harvest availability, or proforma quotations.
                </p>
              </div>

              {/* Direct Persons Cards with Mandatory Working WhatsApp Buttons */}
              <div className="direct-people-grid">
                {/* Person 1: Kalidass P */}
                <div className="person-card">
                  <div className="person-card-top">
                    <div className="person-avatar">
                      <span>KP</span>
                    </div>
                    <div>
                      <h3 className="person-card-name">Kalidass P</h3>
                      <p className="person-card-role">Trade & Supply Coordination</p>
                    </div>
                  </div>

                  <div className="person-contact-details">
                    <div className="contact-detail-line">
                      <Phone size={16} />
                      <a href="tel:+919952490517">+91 9952490517</a>
                    </div>
                    <div className="contact-detail-line">
                      <Mail size={16} />
                      <a href="mailto:panirthuliexports@gmail.com">panirthuliexports@gmail.com</a>
                    </div>
                    <div className="contact-detail-line">
                      <MapPin size={16} />
                      <span>Tamil Nadu, India</span>
                    </div>
                  </div>

                  <div className="person-btn-wrap">
                    <a
                      href="https://wa.me/919952490517"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-block"
                      aria-label="Chat with Kalidass on WhatsApp"
                    >
                      <MessageCircle size={18} /> Chat with Kalidass on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Person 2: M G Abdul Arshadh */}
                <div className="person-card">
                  <div className="person-card-top">
                    <div className="person-avatar">
                      <span>MA</span>
                    </div>
                    <div>
                      <h3 className="person-card-name">M G Abdul Arshadh</h3>
                      <p className="person-card-role">Export & Business Operations</p>
                    </div>
                  </div>

                  <div className="person-contact-details">
                    <div className="contact-detail-line">
                      <Phone size={16} />
                      <a href="tel:+919488743153">+91 9488743153</a>
                    </div>
                    <div className="contact-detail-line">
                      <Mail size={16} />
                      <a href="mailto:panirthuliexports@gmail.com">panirthuliexports@gmail.com</a>
                    </div>
                    <div className="contact-detail-line">
                      <MapPin size={16} />
                      <span>Tamil Nadu, India</span>
                    </div>
                  </div>

                  <div className="person-btn-wrap">
                    <a
                      href="https://wa.me/919488743153"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-block"
                      aria-label="Chat with Arshadh on WhatsApp"
                    >
                      <MessageCircle size={18} /> Chat with Arshadh on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* General Business Info Summary */}
              <div className="business-summary-card">
                <h4 className="mb-2">General Trade Information</h4>
                <p className="mb-2">
                  <strong>Company:</strong> Panir Thuli Exports
                </p>
                <p className="mb-2">
                  <strong>Location:</strong> Tamil Nadu, India
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:panirthuliexports@gmail.com">panirthuliexports@gmail.com</a>
                </p>
                <p className="mb-0">
                  <strong>Scope:</strong> Wholesale Supply, Domestic Trade, International Exports
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-panel">
              <ContactForm preselectedProduct={preselectedProduct} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-info-header h2 {
          margin-bottom: 0.75rem;
        }
        .direct-people-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .person-card {
          background-color: var(--color-offwhite);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .person-card:hover {
          border-color: var(--color-gold);
          box-shadow: var(--shadow-sm);
        }
        .person-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .person-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary);
          color: var(--color-gold-light);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .person-card-name {
          font-size: 1.35rem;
          color: var(--color-primary);
          margin-bottom: 0.2rem;
        }
        .person-card-role {
          font-size: 0.85rem;
          color: var(--color-gold);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
        }
        .person-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .contact-detail-line {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--color-text-main);
          word-break: break-word;
        }
        .contact-detail-line a {
          color: var(--color-primary);
          font-weight: 500;
          word-break: break-word;
        }
        .contact-detail-line a:hover {
          text-decoration: underline;
        }
        .person-btn-wrap {
          margin-top: 0.5rem;
        }
        .business-summary-card {
          background: var(--color-sage-light);
          border: 1px solid rgba(11, 61, 46, 0.12);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          font-size: 0.95rem;
        }
        .business-summary-card a {
          color: var(--color-primary);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 380px) {
          .person-card {
            padding: 1.15rem;
          }
          .person-avatar {
            width: 38px;
            height: 38px;
            font-size: 0.85rem;
          }
          .person-card-name {
            font-size: 1.15rem;
          }
          .business-summary-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
