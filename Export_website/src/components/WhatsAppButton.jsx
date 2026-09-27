import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { businessData } from '../data/business';

export default function WhatsAppButton({ contactName, message = '', size = 'md', fullWidth = false }) {
  const contact = businessData.contacts.find(c => 
    c.name.toLowerCase().includes(contactName.toLowerCase())
  ) || businessData.contacts[0];

  const encodedMsg = message ? encodeURIComponent(message) : '';
  const url = `${contact.whatsAppUrl}${encodedMsg ? `?text=${encodedMsg}` : ''}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp ${size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : ''} ${fullWidth ? 'btn-block' : ''}`}
      aria-label={`Chat with ${contact.name} on WhatsApp`}
    >
      <MessageCircle size={18} />
      <span>Chat with {contact.name.split(' ')[0] || contact.name} on WhatsApp</span>
    </a>
  );
}

export function WhatsAppContactBox({ productContext = '' }) {
  const defaultMsg = productContext 
    ? `Hello Panir Thuli Exports, I am interested in sourcing ${productContext}. Please share wholesale/export details.`
    : `Hello Panir Thuli Exports, I would like to enquire about your wholesale and export products.`;

  return (
    <div className="whatsapp-box-wrapper">
      <div className="whatsapp-box-header">
        <MessageCircle className="whatsapp-header-icon" size={24} />
        <div>
          <h4 className="whatsapp-box-title">Direct WhatsApp Support</h4>
          <p className="whatsapp-box-subtitle">Instant B2B trade coordination & quick quotes</p>
        </div>
      </div>

      <div className="whatsapp-buttons-grid">
        {businessData.contacts.map((contact, idx) => (
          <a
            key={idx}
            href={`${contact.whatsAppUrl}?text=${encodeURIComponent(defaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-contact-card"
          >
            <div className="whatsapp-contact-avatar">
              <MessageCircle size={20} />
            </div>
            <div className="whatsapp-contact-meta">
              <div className="whatsapp-contact-name">{contact.name}</div>
              <div className="whatsapp-contact-sub">{contact.title}</div>
              <div className="whatsapp-contact-action">Chat on WhatsApp →</div>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .whatsapp-box-wrapper {
          background-color: #F4FAF6;
          border: 1px solid #D2E9DC;
          border-radius: var(--radius-md);
          padding: clamp(1rem, 3vw, 1.5rem);
          margin: 1.5rem 0;
        }
        .whatsapp-box-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .whatsapp-header-icon {
          color: #25D366;
          flex-shrink: 0;
        }
        .whatsapp-box-title {
          font-family: var(--font-heading);
          font-size: clamp(1.15rem, 2.5vw, 1.35rem);
          color: var(--color-primary);
          margin: 0;
        }
        .whatsapp-box-subtitle {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin: 0;
        }
        .whatsapp-buttons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
        }
        .whatsapp-contact-card {
          background: #FFFFFF;
          border: 1px solid #CDE5D8;
          border-radius: var(--radius-sm);
          padding: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .whatsapp-contact-card:hover {
          border-color: #25D366;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.15);
          transform: translateY(-2px);
        }
        .whatsapp-contact-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #EAF9F0;
          color: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .whatsapp-contact-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        .whatsapp-contact-sub {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: 0.25rem;
        }
        .whatsapp-contact-action {
          font-size: 0.8rem;
          font-weight: 600;
          color: #1EBE5D;
        }

        @media (max-width: 768px) {
          .whatsapp-buttons-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 360px) {
          .whatsapp-contact-card {
            padding: 0.75rem;
            gap: 0.5rem;
          }
          .whatsapp-contact-avatar {
            width: 30px;
            height: 30px;
          }
          .whatsapp-contact-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
