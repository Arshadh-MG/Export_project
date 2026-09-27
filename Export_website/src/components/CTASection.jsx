import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { businessData } from '../data/business';

export default function CTASection({
  title = "Ready to Discuss Your Sourcing Requirements?",
  subtitle = "Whether you need containerized export shipments, wholesale agricultural supply, or custom packaging, Panir Thuli Exports is prepared to support your requirements.",
  primaryBtnText = "Request a Quote",
  primaryBtnLink = "/contact",
  showWhatsApp = true
}) {
  return (
    <section className="cta-banner-section section-dark">
      <div className="container cta-banner-container">
        <div className="cta-banner-content">
          <span className="section-subtitle">PARTNER WITH PANIR THULI EXPORTS</span>
          <h2 className="cta-banner-title">{title}</h2>
          <p className="cta-banner-desc">{subtitle}</p>
          
          <div className="cta-actions">
            <Link to={primaryBtnLink} className="btn btn-gold btn-lg">
              {primaryBtnText} <ArrowRight size={18} />
            </Link>

            {showWhatsApp && (
              <a
                href={businessData.contacts[0].whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cta-banner-section {
          background-color: var(--color-dark);
          border-top: 1px solid rgba(200, 163, 77, 0.2);
          border-bottom: 1px solid rgba(200, 163, 77, 0.2);
          padding: var(--space-3xl) 0;
          position: relative;
          overflow: hidden;
        }
        .cta-banner-container {
          position: relative;
          z-index: 2;
        }
        .cta-banner-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-banner-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
        }
        .cta-banner-desc {
          font-size: 1.15rem;
          color: #D3DDD7;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .cta-actions {
            gap: 0.75rem;
          }
          .cta-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
