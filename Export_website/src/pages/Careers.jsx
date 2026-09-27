import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Send, 
  Users, 
  Compass, 
  TrendingUp, 
  Leaf, 
  Mail, 
  CheckCircle2,
  FileText,
  Languages,
  ArrowRight
} from 'lucide-react';
import { careersData } from '../data/careers';
import { businessData } from '../data/business';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { WhatsAppContactBox } from '../components/WhatsAppButton';

export default function Careers() {
  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Career Opportunities | Panir Thuli Exports",
    "description": "Explore career opportunities across operations, human resources, and customer support for domestic and international markets with Panir Thuli Exports.",
    "url": "https://panirthuliexports.com/careers"
  };

  return (
    <div className="careers-page">
      <SEOHead
        title="Career Opportunities | Panir Thuli Exports"
        description="We are building opportunities across operations, human resources and customer support for domestic and international markets at Panir Thuli Exports."
        canonicalPath="/careers"
        schema={careersSchema}
      />

      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Careers</span>
          </div>
          <span className="section-subtitle">WORK WITH US</span>
          <h1 className="page-hero-title">Career Opportunities</h1>
          <p className="page-hero-desc">
            We are building opportunities across operations, human resources and customer support for domestic and international markets.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">CURRENT VACANCIES</span>
            <h2>Open Positions</h2>
            <p className="section-desc">
              Explore current roles within our growing trade coordination and operations teams.
            </p>
          </div>

          <div className="positions-grid">
            {careersData.map((role) => (
              <div key={role.id} className="position-card">
                <div className="position-header">
                  <div className="position-title-area">
                    <span className="dept-tag">{role.department}</span>
                    <h3 className="position-title">{role.title}</h3>
                  </div>
                  <span className="status-badge">{role.status}</span>
                </div>

                <p className="position-desc">{role.description}</p>

                {role.languages && (
                  <div className="languages-box">
                    <span className="lang-label">
                      <Languages size={15} /> Languages:
                    </span>
                    <div className="lang-pills">
                      {role.languages.map((lang, idx) => (
                        <span key={idx} className="lang-pill">
                          {lang}
                          {idx < role.languages.length - 1 && <span className="lang-sep">|</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {role.responsibilities && (
                  <div className="responsibilities-block">
                    <div className="resp-title">Key Responsibilities:</div>
                    <ul className="resp-list">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="resp-item">
                          <CheckCircle2 size={16} className="resp-icon" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="position-actions">
                  <Link
                    to={`/contact?position=${encodeURIComponent(role.title)}`}
                    className="btn btn-primary"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Work Environment */}
      <section className="section section-sage">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR CULTURE</span>
            <h2>Why Join Panir Thuli Exports</h2>
            <p className="section-desc">
              Be part of an agile, transparent organization connecting authentic Indian produce with commercial markets.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <Leaf size={28} className="card-icon" />
              <h3 className="mb-2">Real Agricultural Impact</h3>
              <p>
                Work closely with the real economy — connecting grassroots producers and processors with verified buyers.
              </p>
            </div>

            <div className="card">
              <Compass size={28} className="card-icon" />
              <h3 className="mb-2">Trade & Market Exposure</h3>
              <p>
                Gain hands-on understanding of domestic supply chains, shipping logistics, and cross-border trade operations.
              </p>
            </div>

            <div className="card">
              <TrendingUp size={28} className="card-icon" />
              <h3 className="mb-2">Collaborative Growth</h3>
              <p>
                Work directly with active leadership where your initiative and dedication directly support organizational expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Support Box */}
      <section className="section section-white pt-0">
        <div className="container">
          <WhatsAppContactBox />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Have Questions About Opportunities at Panir Thuli Exports?"
        subtitle="Submit your profile or reach out to our team to discuss potential career openings."
        primaryBtnText="Submit Application"
        primaryBtnLink="/contact?type=career"
      />

      <style>{`
        .positions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .position-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .position-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }
        .position-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .dept-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }
        .position-title {
          font-size: 1.35rem;
          color: var(--color-primary);
          line-height: 1.25;
          margin: 0;
        }
        .status-badge {
          background: #EAF9F0;
          color: #0E5A35;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-pill);
          border: 1px solid #A6E3BE;
          white-space: nowrap;
        }
        .position-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .languages-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-offwhite);
          border: 1px solid var(--color-border);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .lang-label {
          font-weight: 600;
          color: var(--color-primary);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .lang-pills {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--color-text-main);
          font-weight: 500;
        }
        .lang-sep {
          color: var(--color-border);
          margin-left: 0.35rem;
        }
        .responsibilities-block {
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .resp-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .resp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .resp-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--color-text-main);
          line-height: 1.4;
        }
        .resp-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .position-actions {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 480px) {
          .position-card {
            padding: 1.5rem 1.25rem;
          }
          .position-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
