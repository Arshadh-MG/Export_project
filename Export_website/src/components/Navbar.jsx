import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MessageSquare, Mail } from 'lucide-react';
import { businessData } from '../data/business';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Markets', path: '/markets' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="navbar-wrapper">
        <div className="navbar-top-bar">
          <div className="container navbar-top-container">
            <span className="top-bar-item">
              <strong>India Origin</strong> • Wholesale & Global Export Supply
            </span>
            <div className="top-bar-contacts">
              <a href="mailto:panirthuliexports@gmail.com" className="top-link top-email-link">
                <Mail size={14} className="top-email-icon" /> panirthuliexports@gmail.com
              </a>
            </div>
          </div>
        </div>

        <nav className="navbar-main" aria-label="Main Navigation">
          <div className="container navbar-container">
            {/* Mobile Hamburger on Left */}
            <button
              type="button"
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Official Logo on Left / Center on Mobile */}
            <Link to="/" className="navbar-logo-link" aria-label="Panir Thuli Exports Home">
              <img
                src="/logo.png"
                alt="Panir Thuli Exports Logo"
                className="navbar-logo-img"
                width="64"
                height="64"
              />
              <div className="navbar-brand-text">
                <span className="brand-title">PANIR THULI</span>
                <span className="brand-subtitle">EXPORTS</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="navbar-desktop-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right CTA */}
            <div className="navbar-cta-wrapper">
              <Link to="/contact" className="btn btn-gold btn-sm">
                Request a Quote <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer (Left Sided) */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      
      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <img
              src="/logo.png"
              alt="Panir Thuli Exports"
              className="mobile-logo-img"
              width="44"
              height="44"
            />
            <div>
              <div className="mobile-brand-title">PANIR THULI</div>
              <div className="mobile-brand-sub">EXPORTS</div>
            </div>
          </div>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta">
            <Link to="/contact" className="btn btn-gold btn-block">
              Request a Quote
            </Link>
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-contact-title">Direct Inquiries:</div>
            <div className="mobile-contact-item">
              <span>Kalidass P:</span>
              <a href="https://wa.me/919952490517" target="_blank" rel="noopener noreferrer">
                +91 9952490517
              </a>
            </div>
            <div className="mobile-contact-item">
              <span>M G Abdul Arshadh:</span>
              <a href="https://wa.me/919488743153" target="_blank" rel="noopener noreferrer">
                +91 9488743153
              </a>
            </div>
            <div className="mobile-location-tag">Tamil Nadu, India</div>
          </div>
        </div>
      </aside>

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border);
          box-shadow: 0 2px 10px rgba(11, 61, 46, 0.04);
        }
        .navbar-top-bar {
          background-color: var(--color-primary);
          color: #E8EFEA;
          font-size: 0.8rem;
          padding: 0.35rem 0;
          border-bottom: 1px solid rgba(200, 163, 77, 0.25);
        }
        .navbar-top-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-item strong {
          color: var(--color-gold-light);
        }
        .top-bar-contacts {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .top-link {
          color: #E8EFEA;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .top-email-icon {
          color: var(--color-gold-light);
        }
        .top-link:hover {
          color: var(--color-gold-light);
          text-decoration: underline;
        }
        .top-divider {
          opacity: 0.4;
        }
        .navbar-main {
          height: var(--header-height);
          display: flex;
          align-items: center;
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .navbar-logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .navbar-logo-img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          border-radius: 4px;
        }
        .navbar-brand-text {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          line-height: 1;
        }
        .brand-subtitle {
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 0.22em;
          margin-top: 2px;
        }
        .navbar-desktop-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .nav-link {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-main);
          padding: 0.5rem 0;
          position: relative;
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .nav-link.active {
          color: var(--color-primary);
          font-weight: 600;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-gold);
          border-radius: 2px;
        }
        .navbar-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          padding: 0.4rem;
          cursor: pointer;
        }
        
        /* Mobile Drawer */
        .mobile-drawer-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background-color: rgba(6, 51, 38, 0.6);
          backdrop-filter: blur(2px);
          z-index: 1100;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }
        .mobile-drawer-backdrop.open {
          display: block;
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 82%;
          max-width: 320px;
          background-color: var(--color-white);
          z-index: 1200;
          transform: translateX(-100%);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border);
          background-color: var(--color-offwhite);
        }
        .mobile-drawer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .mobile-logo-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        .mobile-brand-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1;
        }
        .mobile-brand-sub {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--color-gold);
        }
        .mobile-drawer-close {
          color: var(--color-text-main);
          background: none;
          border: none;
          padding: 0.25rem;
          cursor: pointer;
        }
        .mobile-drawer-content {
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        .mobile-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--color-text-main);
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }
        .mobile-nav-link.active {
          background-color: var(--color-sage-light);
          color: var(--color-primary);
          font-weight: 600;
        }
        .btn-block {
          width: 100%;
          text-align: center;
        }
        .mobile-drawer-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
          font-size: 0.85rem;
        }
        .mobile-contact-title {
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mobile-contact-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
          color: var(--color-text-muted);
          flex-wrap: wrap;
        }
        .mobile-contact-item a {
          color: var(--color-primary);
          font-weight: 500;
        }
        .mobile-location-tag {
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: var(--color-gold);
          font-weight: 500;
        }

        /* Tablets & iPads (<=1024px) */
        @media (max-width: 1024px) {
          .navbar-top-bar {
            display: none;
          }
          .navbar-desktop-links, .navbar-cta-wrapper {
            display: none;
          }
          .navbar-mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            order: 1;
          }
          .navbar-logo-link {
            order: 2;
            margin: 0 auto;
          }
          .navbar-main {
            height: 70px;
          }
        }

        /* Small Phones & Fold Models (<=400px) */
        @media (max-width: 400px) {
          .navbar-logo-img {
            width: 40px;
            height: 40px;
          }
          .brand-title {
            font-size: 1.2rem;
          }
          .brand-subtitle {
            font-size: 0.58rem;
          }
          .navbar-logo-link {
            gap: 0.5rem;
          }
          .mobile-drawer {
            width: 88%;
            max-width: 290px;
          }
          .mobile-drawer-header {
            padding: 1rem 1.25rem;
          }
          .mobile-drawer-content {
            padding: 1.25rem;
          }
          .mobile-contact-item {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
