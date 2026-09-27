import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  MapPin, 
  Leaf, 
  Globe, 
  Boxes, 
  Truck, 
  Ship, 
  ChevronDown, 
  ArrowRight,
  Shield,
  Target,
  Eye,
  Award
} from 'lucide-react';
import { businessData } from '../data/business';
import { productsData } from '../data/products';
import { faqsData } from '../data/faq';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { WhatsAppContactBox } from '../components/WhatsAppButton';

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://panirthuliexports.com/about/#webpage",
        "url": "https://panirthuliexports.com/about",
        "name": "About Panir Thuli Exports | India-Based Export & Trading Business",
        "description": "Learn about Panir Thuli Exports, an India-based natural and agricultural products exporter providing wholesale, domestic, and international supply coordination.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://panirthuliexports.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://panirthuliexports.com/about"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqsData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="about-page">
      <SEOHead
        title="About Panir Thuli Exports | India-Based Export & Trading Business"
        description="Panir Thuli Exports is an India-based natural and agricultural products export business focused on wholesale supply, domestic trade, and international exports."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>About Us</span>
          </div>
          <span className="section-subtitle">ABOUT PANIR THULI EXPORTS</span>
          <h1 className="page-hero-title">About Panir Thuli Exports</h1>
          <p className="page-hero-desc">
            An India-based natural and agricultural products export and trading business connecting Indian origin commodities with domestic and global markets.
          </p>
        </div>
      </section>

      {/* Section 1 & 2: Who We Are & What We Do */}
      <section className="section section-white">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-split-text">
              <span className="section-subtitle">WHO WE ARE</span>
              <h2>Rooted in Indian Soil, Committed to Global Trade</h2>
              <p>
                <strong>Panir Thuli Exports</strong> is an India-based export and trading business focused on connecting Indian agricultural produce, natural wellness commodities, spices, raw materials, and high-germination seeds with wholesale buyers both domestically within India and across international markets.
              </p>
              <p>
                Operating from Tamil Nadu in South India, we draw upon India's rich agricultural biodiversity, extensive spice tracts, and established industrial processing belts to facilitate reliable, transparent commercial trade.
              </p>
              
              <div className="mt-4">
                <span className="section-subtitle">WHAT WE DO</span>
                <h3 className="mb-2">Wholesale Sourcing & Export Coordination</h3>
                <p>
                  We coordinate the entire supply cycle according to verified buyer specifications:
                </p>
                <div className="trade-flow-list">
                  <div className="trade-flow-step">
                    <span className="step-badge">1</span>
                    <span><strong>Origin Sourcing:</strong> Direct interaction with regional farmers, growers, and primary processing units.</span>
                  </div>
                  <div className="trade-flow-step">
                    <span className="step-badge">2</span>
                    <span><strong>Specification Alignment:</strong> Sizing, grading, and quality parameters checked against contract terms.</span>
                  </div>
                  <div className="trade-flow-step">
                    <span className="step-badge">3</span>
                    <span><strong>Packaging & Storage:</strong> Customized export-ready packaging designed to endure transit.</span>
                  </div>
                  <div className="trade-flow-step">
                    <span className="step-badge">4</span>
                    <span><strong>Logistics Dispatch:</strong> Multi-modal coordination covering road freight, ocean containers, or air cargo.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-split-image">
              <div className="about-img-frame">
                <img
                  src="/images/farm_sourcing.jpg"
                  alt="Indian farmlands and agricultural sourcing"
                  className="about-feature-img"
                  width="560"
                  height="420"
                />
              </div>
              <div className="about-quote-box">
                <p className="quote-text">
                  "From Our Land to the World — Sourcing natural goodness, delivering global opportunities."
                </p>
                <span className="quote-author">Panir Thuli Exports Brand Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Products Overview */}
      <section className="section section-sage">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR PRODUCT SCOPE</span>
            <h2>Selected Agricultural & Natural Sourcing Categories</h2>
            <p className="section-desc">
              We focus on carefully chosen product categories where India possesses distinct natural advantages and consistent harvest availability.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <Leaf size={28} className="card-icon" />
              <h3 className="mb-2">Agricultural & Fresh Produce</h3>
              <p>
                Fresh Indian <strong>Garlic</strong>, red/pink <strong>Onions</strong>, <strong>Organic Vegetables</strong>, fresh <strong>Banana Leaves</strong>, <strong>Fresh Fruits</strong> (papaya, guava, grapes), <strong>Tomato</strong> (Indian & hybrid), and <strong>Chili</strong> (round & long).
              </p>
            </div>

            <div className="card">
              <Globe size={28} className="card-icon" />
              <h3 className="mb-2">Authentic Spices</h3>
              <p>
                Aromatic South Indian <strong>Black Pepper</strong>, whole sortex-cleaned <strong>Cumin Seeds (Jeera)</strong>, gourmet cured <strong>Vanilla Beans</strong>, and dried <strong>Chili</strong> varieties for global food processing.
              </p>
            </div>

            <div className="card">
              <Boxes size={28} className="card-icon" />
              <h3 className="mb-2">Natural, Raw Materials & Seeds</h3>
              <p>
                Natural <strong>Moringa</strong> & <strong>Moringa Powder</strong>, <strong>Millet Powder</strong>, <strong>ABC Malt Powder</strong>, <strong>Dry Fruits</strong>, <strong>Raw Leather</strong>, and <strong>Fruit & Vegetable Seeds (FnV)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4, 5, 6: Sourcing, Domestic Supply & International Trade */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-2">
            <div className="sourcing-box">
              <span className="section-subtitle">SOURCING APPROACH</span>
              <h2>Our Sourcing Approach</h2>
              <p>
                We collaborate directly with verified growers, agrarian cooperatives, and local processing centers across South India and major national cultivation zones.
              </p>
              <p>
                Rather than offering generic bulk commodities, we evaluate harvest batches directly against each buyer's written technical requirements. This approach ensures that variables like moisture content, size grades, and sorting precision match the buyer's destination market standards.
              </p>
            </div>

            <div className="sourcing-box">
              <span className="section-subtitle">TRADE CHANNELS</span>
              <h2>Domestic Supply & International Trade</h2>
              <p>
                <strong>Domestic Trade:</strong> We supply wholesalers, food processing units, spice repackers, and commercial entities across India with bulk commodities.
              </p>
              <p>
                <strong>International Exports:</strong> We prepare containerized FCL/LCL shipments, ocean freight, and expedited air cargo for buyers across the Middle East, Europe, Southeast Asia, and other international trade corridors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 & 8: Vision & Mission */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid-2">
            <div className="vision-mission-card">
              <Eye size={36} className="vm-icon" />
              <h3>Our Vision</h3>
              <p>
                To become a respected and dependable bridge between Indian agricultural excellence and the global marketplace, recognized for integrity, responsive communication, and uncompromised fulfillment of buyer requirements.
              </p>
            </div>

            <div className="vision-mission-card">
              <Target size={36} className="vm-icon" />
              <h3>Our Mission</h3>
              <p>
                To deliver authentic Indian-origin agricultural produce, spices, natural goods, raw materials, and quality seeds to domestic and international B2B buyers with strict adherence to contracted specifications, proper transit packaging, and reliable shipping coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9, 10, 11: Why Work With Us & Approach to Buyer Requirements */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR COMMITMENT</span>
            <h2>Why Work With Panir Thuli Exports</h2>
            <p className="section-desc">
              Built on transparency, practical execution, and direct communication with decision-makers.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 className="mb-2">Clear Contract Alignment</h3>
              <p>
                We do not make inflated promises. Every quotation clearly defines product specifications, harvest origin, packaging type, and delivery timelines.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2">Customized Buyer Requirements</h3>
              <p>
                Whether your market requires specific bulb diameters for garlic, sortex cleanliness for cumin, or vacuum packing for vanilla, we adapt our handling to your needs.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2">Accessible Leadership</h3>
              <p>
                Direct access to our founding operations team ensures that queries, documentation requests, and shipping updates are handled promptly without bureaucracy.
              </p>
            </div>
          </div>

          <WhatsAppContactBox />
        </div>
      </section>

      {/* Section 12: SEO/AEO FAQ SECTION */}
      <section className="section section-sage">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-subtitle">AEO & SEARCH ENGINE FAQ</span>
            <h2>Frequently Asked Questions About Panir Thuli Exports</h2>
            <p className="section-desc">
              Factual, structured answers regarding our company, export offerings, and business practices.
            </p>
          </div>

          <div className="faq-list">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={openFaq === idx}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Looking for a Reliable Indian Export Partner?"
        subtitle="Contact Panir Thuli Exports with your wholesale requirements. We look forward to building a long-term commercial partnership."
        primaryBtnText="Request a Quote"
        primaryBtnLink="/contact"
      />

      <style>{`
        .page-hero-banner {
          background-color: var(--color-dark);
          color: #FFFFFF;
          padding: 3.5rem 0 3.5rem 0;
          border-bottom: 2px solid var(--color-gold);
        }
        .page-hero-breadcrumbs {
          font-size: 0.85rem;
          color: var(--color-gold-light);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .page-hero-breadcrumbs a {
          color: #D3DDD7;
        }
        .page-hero-breadcrumbs a:hover {
          color: #FFFFFF;
        }
        .page-hero-title {
          color: #FFFFFF;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          margin-bottom: 0.75rem;
        }
        .page-hero-desc {
          color: #BAC8C0;
          font-size: 1.15rem;
          max-width: 760px;
          margin: 0;
        }

        .about-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .trade-flow-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .trade-flow-step {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--color-text-main);
          background-color: var(--color-offwhite);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-gold);
        }
        .step-badge {
          width: 24px;
          height: 24px;
          background: var(--color-primary);
          color: #FFFFFF;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .about-img-frame {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .about-feature-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }
        .about-quote-box {
          background-color: var(--color-sage-light);
          border-left: 4px solid var(--color-primary);
          padding: 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-top: 1.5rem;
        }
        .quote-text {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--color-primary);
          margin-bottom: 0.4rem;
        }
        .quote-author {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .sourcing-box {
          background: var(--color-offwhite);
          padding: 2.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }
        .sourcing-box h2 {
          margin-bottom: 1rem;
        }

        .vision-mission-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2.5rem;
          border-radius: var(--radius-md);
        }
        .vm-icon {
          color: var(--color-gold);
          margin-bottom: 1rem;
        }
        .vision-mission-card h3 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }
        .vision-mission-card p {
          font-size: 1.05rem;
          color: #D3DDD7;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .about-split-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 480px) {
          .sourcing-box {
            padding: 1.5rem 1.25rem;
          }
          .vision-mission-card {
            padding: 1.5rem 1.25rem;
          }
        }
        @media (max-width: 360px) {
          .trade-flow-step {
            padding: 0.65rem 0.75rem;
            font-size: 0.88rem;
          }
          .quote-text {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </div>
  );
}
