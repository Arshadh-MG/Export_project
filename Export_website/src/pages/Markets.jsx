import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Ship, Plane, Truck, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { targetMarkets, importsConfig } from '../data/countries';
import CountryCard from '../components/CountryCard';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { WhatsAppContactBox } from '../components/WhatsAppButton';

export default function Markets() {
  const marketsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Connecting India to Global Markets | Panir Thuli Exports",
    "description": "Panir Thuli Exports explores international markets and target trade corridors for Indian agricultural, natural, and food products.",
    "url": "https://panirthuliexports.com/markets"
  };

  return (
    <div className="markets-page">
      <SEOHead
        title="Connecting India to Global Markets | Panir Thuli Exports"
        description="Explore international target markets and trade corridors including Japan, Indonesia, Sri Lanka, and Thailand for Indian agricultural and natural products."
        canonicalPath="/markets"
        schema={marketsSchema}
      />

      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Markets</span>
          </div>
          <span className="section-subtitle">GLOBAL TRADE REACH</span>
          <h1 className="page-hero-title">Connecting India to Global Markets</h1>
          <p className="page-hero-desc">
            We explore international markets for business opportunities, connecting Indian-origin agricultural produce and natural products with buyers worldwide.
          </p>
        </div>
      </section>

      {/* Trade Model Explanation */}
      <section className="section section-white">
        <div className="container">
          <div className="markets-intro-grid">
            <div>
              <span className="section-subtitle">OUR REACH</span>
              <h2>Bridging Indian Sourcing with Global Demand</h2>
              <p>
                India's fertile regions cultivate premium agricultural commodities, fresh vegetables, culinary spices, and botanical wellness ingredients.
              </p>
              <p>
                <strong>Panir Thuli Exports</strong> facilitates structured, reliable B2B supply by aligning Indian farm-origin produce with domestic and international buyer requirements.
              </p>
            </div>

            <div className="logistics-highlights-card">
              <h3 className="mb-3">Logistics Coordination</h3>
              <div className="logistics-item">
                <Ship className="logistics-icon" size={24} />
                <div>
                  <strong>Ocean Freight (FCL / LCL):</strong> Containerized sea shipments routed via key Indian ports for bulk consignments.
                </div>
              </div>
              <div className="logistics-item">
                <Plane className="logistics-icon" size={24} />
                <div>
                  <strong>Air Freight Logistics:</strong> Efficient air cargo transit for high-priority spices, botanical products, and seeds.
                </div>
              </div>
              <div className="logistics-item">
                <Truck className="logistics-icon" size={24} />
                <div>
                  <strong>Domestic Freight:</strong> Coordinated road transport across South Indian agricultural belts and domestic destinations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets Section */}
      <section className="section section-sage">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">TRADE EXPLORATION</span>
            <h2>Target Markets</h2>
            <p className="section-desc">
              International markets we are exploring for business opportunities.
            </p>
          </div>

          <div className="grid-4">
            {targetMarkets.map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>

          <div className="target-disclaimer-box mt-4">
            <p>
              <em>* The countries listed represent target markets and international trade corridors we are actively exploring for commercial opportunities. Sourcing and supply agreements are structured according to mutual agreement and applicable destination requirements.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Box */}
      <section className="section section-white pt-0">
        <div className="container">
          <WhatsAppContactBox />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Interested in Sourcing Indian Products for Your Market?"
        subtitle="Contact Panir Thuli Exports to discuss product availability, packaging, and commercial terms."
        primaryBtnText="Initiate Trade Discussion"
        primaryBtnLink="/contact"
      />

      <style>{`
        .markets-intro-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .logistics-highlights-card {
          background-color: var(--color-offwhite);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .logistics-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 0.95rem;
        }
        .logistics-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .target-disclaimer-box {
          background-color: rgba(200, 163, 77, 0.12);
          border: 1px solid rgba(200, 163, 77, 0.3);
          border-radius: var(--radius-sm);
          padding: 1rem 1.5rem;
          text-align: center;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 1024px) {
          .markets-intro-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 480px) {
          .logistics-highlights-card {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
