import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { businessData } from '../data/business';
import { productsData } from '../data/products';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <img
                src="/logo.png"
                alt="Panir Thuli Exports Official Logo"
                className="footer-logo-img"
                width="68"
                height="68"
                loading="lazy"
              />
              <div>
                <span className="footer-brand-name">PANIR THULI</span>
                <span className="footer-brand-tag">EXPORTS</span>
              </div>
            </Link>
            
            <p className="footer-brand-desc">
              Connecting India's natural and agricultural products to domestic and global markets.
            </p>

            <div className="footer-badge-wrap">
              <span className="footer-badge">Sourced in India • Global Export Trade</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/markets">Markets</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/enquiries">Enquiries Log</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-list">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link to={`/products/${prod.slug}`}>{prod.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Export Enquiries</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon" />
              <span>Tamil Nadu, India</span>
            </div>
            
            <div className="footer-contact-item">
              <Mail size={18} className="footer-icon" />
              <a href="mailto:panirthuliexports@gmail.com">panirthuliexports@gmail.com</a>
            </div>

            <div className="footer-people-box">
              <div className="person-row">
                <div className="person-info">
                  <div className="person-name">Kalidass P</div>
                  <div className="person-phone">+91 9952490517</div>
                </div>
                <a
                  href="https://wa.me/919952490517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-pill-btn"
                  aria-label="Chat with Kalidass P on WhatsApp"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>

              <div className="person-row">
                <div className="person-info">
                  <div className="person-name">M G Abdul Arshadh</div>
                  <div className="person-phone">+91 9488743153</div>
                </div>
                <a
                  href="https://wa.me/919488743153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-pill-btn"
                  aria-label="Chat with M G Abdul Arshadh on WhatsApp"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © 2026 Panir Thuli Exports. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span>Wholesale Supply</span>
            <span>•</span>
            <span>Domestic Trade</span>
            <span>•</span>
            <span>International Exports</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: var(--color-dark);
          color: #CFDDD5;
          border-top: 3px solid var(--color-gold);
          padding-top: var(--space-3xl);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 2fr;
          gap: 3rem;
          padding-bottom: var(--space-3xl);
        }
        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }
        .footer-logo-img {
          width: 54px;
          height: 54px;
          object-fit: contain;
          border-radius: 4px;
          background: #ffffff;
          padding: 2px;
        }
        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFFFFF;
          display: block;
          line-height: 1;
        }
        .footer-brand-tag {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-gold-light);
          letter-spacing: 0.22em;
          margin-top: 3px;
          display: block;
        }
        .footer-brand-desc {
          color: #BAC8C0;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 320px;
        }
        .footer-badge-wrap {
          margin-top: 0.25rem;
        }
        .footer-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          background: rgba(200, 163, 77, 0.15);
          color: var(--color-gold-light);
          border: 1px solid rgba(200, 163, 77, 0.3);
          border-radius: var(--radius-sm);
        }
        .footer-heading {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #FFFFFF;
          margin-bottom: 1.25rem;
          position: relative;
        }
        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-list a {
          color: #BAC8C0;
          font-size: 0.95rem;
          transition: color var(--transition-fast), padding-left var(--transition-fast);
        }
        .footer-list a:hover {
          color: var(--color-gold-light);
          padding-left: 4px;
        }
        .footer-contact-col {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: #D3DDD7;
        }
        .footer-contact-item a {
          color: #D3DDD7;
          transition: color var(--transition-fast);
        }
        .footer-contact-item a:hover {
          color: var(--color-gold-light);
        }
        .footer-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }
        .footer-people-box {
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .person-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
        }
        .person-row:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        .person-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        .person-phone {
          font-size: 0.8rem;
          color: #BAC8C0;
        }
        .whatsapp-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.35rem 0.65rem;
          background-color: #25D366;
          color: #FFFFFF;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background-color var(--transition-fast);
          flex-shrink: 0;
        }
        .whatsapp-pill-btn:hover {
          background-color: #1EBE5D;
          color: #FFFFFF;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.25rem 0;
          background-color: #04241B;
        }
        .footer-bottom-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .copyright-text {
          font-size: 0.85rem;
          color: #8D9F95;
          margin: 0;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: var(--color-gold-light);
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          .footer-bottom-container {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 0.75rem;
          }
        }
        @media (max-width: 360px) {
          .footer-logo-img {
            width: 44px;
            height: 44px;
          }
          .footer-brand-name {
            font-size: 1.25rem;
          }
          .person-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .whatsapp-pill-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
