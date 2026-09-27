import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe2, 
  Truck, 
  ShieldCheck, 
  Boxes, 
  MapPin, 
  Plane, 
  Ship, 
  ChevronDown, 
  CheckCircle2, 
  MessageCircle,
  TrendingUp,
  Leaf
} from 'lucide-react';
import { businessData } from '../data/business';
import { productsData } from '../data/products';
import { targetMarkets } from '../data/countries';
import { faqsData } from '../data/faq';
import ProductCard from '../components/ProductCard';
import CountryCard from '../components/CountryCard';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { WhatsAppContactBox } from '../components/WhatsAppButton';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Recommended 10 products for home preview
  const homeFeaturedIds = [
    'garlic',
    'onions',
    'black-pepper',
    'moringa-powder',
    'millet-powder',
    'chili',
    'tomato',
    'fresh-fruits',
    'banana-leaves',
    'fnv-seeds'
  ];

  const featuredProducts = homeFeaturedIds
    .map(id => productsData.find(p => p.id === id))
    .filter(Boolean);

  // Structured Data Schema for Home Page
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://panirthuliexports.com/#organization",
        "name": "Panir Thuli Exports",
        "url": "https://panirthuliexports.com/",
        "logo": "https://panirthuliexports.com/logo.png",
        "image": "https://panirthuliexports.com/logo-banner.png",
        "description": "Panir Thuli Exports supplies quality agricultural, natural and raw-material products from India for wholesale, domestic and international markets.",
        "email": "panirthuliexports@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "name": "Kalidass P",
            "telephone": "+91-9952490517",
            "contactType": "trade & supply coordination",
            "availableLanguage": ["English", "Tamil"]
          },
          {
            "@type": "ContactPoint",
            "name": "M G Abdul Arshadh",
            "telephone": "+91-9488743153",
            "contactType": "export operations",
            "availableLanguage": ["English", "Tamil", "Hindi"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://panirthuliexports.com/#website",
        "url": "https://panirthuliexports.com/",
        "name": "Panir Thuli Exports",
        "publisher": {
          "@id": "https://panirthuliexports.com/#organization"
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
    <div className="home-page">
      <SEOHead
        title="Panir Thuli Exports | Indian Agricultural & Natural Product Exporter"
        description="Panir Thuli Exports supplies quality agricultural, natural and raw-material products from India for wholesale, domestic and international markets."
        canonicalPath="/"
        schema={homeSchema}
      />

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Leaf size={14} className="badge-icon" />
                <span>INDIA • NATURAL PRODUCTS • GLOBAL MARKETS</span>
              </div>

              <h1 className="hero-title">
                Connecting India's Natural Products to Global Markets
              </h1>

              <p className="hero-desc">
                Panir Thuli Exports supplies quality agricultural, natural and food products from India for wholesale, domestic and international markets.
              </p>

              <div className="hero-actions">
                <Link to="/products" className="btn btn-primary btn-lg">
                  Explore Products <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Contact Us
                </Link>
              </div>

              <div className="hero-pills">
                <div className="hero-pill-item">
                  <span className="pill-dot"></span> Wholesale Supply
                </div>
                <div className="hero-pill-item">
                  <span className="pill-dot"></span> Domestic Trade
                </div>
                <div className="hero-pill-item">
                  <span className="pill-dot"></span> Global Exports
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="/images/hero_logistics.jpg"
                  alt="Panir Thuli Exports - Indian agricultural produce export and logistics"
                  className="hero-main-img"
                  width="640"
                  height="400"
                />
                <div className="hero-visual-badge">
                  <div className="badge-title">Panir Thuli Exports</div>
                  <div className="badge-subtitle">Connecting Nature to Global Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE SECTION (4 Core Pillars) */}
      <section className="section section-white trust-section">
        <div className="container">
          <div className="grid-4">
            {businessData.corePillars.map((pillar, idx) => (
              <div key={idx} className="trust-card">
                <div className="trust-icon-box">
                  {idx === 0 && <Leaf size={24} />}
                  {idx === 1 && <Boxes size={24} />}
                  {idx === 2 && <TrendingUp size={24} />}
                  {idx === 3 && <Ship size={24} />}
                </div>
                <h3 className="trust-title">{pillar.title}</h3>
                <p className="trust-text">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="section section-sage about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image-wrap">
              <img
                src="/images/farm_sourcing.jpg"
                alt="Agricultural farmlands and sourcing in India"
                className="about-preview-img"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="about-location-tag">
                <MapPin size={16} /> Tamil Nadu, India
              </div>
            </div>

            <div className="about-preview-content">
              <span className="section-subtitle">ABOUT PANIR THULI EXPORTS</span>
              <h2>Rooted in Indian Soil, Committed to Global Trade</h2>
              <p>
                Panir Thuli Exports is an India-based export and trading business focused on connecting Indian agricultural, natural and raw-material products with domestic and international markets.
              </p>
              <p>
                From fresh produce like garlic, onions, chili, and tomato to premium spices, botanical moringa, natural malt powders, and quality planting seeds, we align our sourcing directly with buyer specifications.
              </p>
              
              <div className="about-preview-features">
                <div className="feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <div>
                    <strong>Direct Origin Sourcing:</strong> Sourced from trusted Indian agrarian belts.
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <div>
                    <strong>Buyer-Specific Requirements:</strong> Sizing, grading, and packaging tailored to your requirements.
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <div>
                    <strong>Multi-Modal Logistics:</strong> Coordination across road, maritime shipping, and air freight.
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link to="/about" className="btn btn-primary">
                  Read More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION */}
      <section className="section section-white products-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR PRODUCT PORTFOLIO</span>
            <h2>Featured Products</h2>
            <p className="section-desc">
              A balanced selection of agricultural produce, spices, natural products, and quality seeds sourced from India.
            </p>
          </div>

          <div className="grid-4 product-cards-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-primary btn-lg">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW WE CONNECT INDIA TO GLOBAL MARKETS */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SUPPLY & EXPORT PROCESS</span>
            <h2>Connecting India to Global Markets</h2>
            <p className="section-desc">
              How Panir Thuli Exports facilitates transparent trade from farm gate to international destination.
            </p>
          </div>

          <div className="grid-4 process-grid">
            <div className="process-card">
              <div className="process-step-num">01</div>
              <h3 className="process-title">Origin Sourcing</h3>
              <p className="process-desc">
                Engaging with trusted Indian growers, producers, and processing clusters to identify suitable harvests.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">02</div>
              <h3 className="process-title">Specification Check</h3>
              <p className="process-desc">
                Verifying product sizing, quality sorting, and grading parameters in accordance with agreed buyer terms.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">03</div>
              <h3 className="process-title">Export Packaging</h3>
              <p className="process-desc">
                Packing into mesh bags, corrugated cartons, vacuum pouches, or drums suited for long-distance transit.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">04</div>
              <h3 className="process-title">Logistics & Delivery</h3>
              <p className="process-desc">
                Coordinating container loading, road transport, sea freight, or air cargo to buyer ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TARGET MARKETS PREVIEW */}
      <section className="section section-sage markets-preview-section">
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

          <div className="text-center mt-5">
            <Link to="/markets" className="btn btn-secondary">
              Explore All Target Markets <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY WORK WITH US */}
      <section className="section section-white why-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">TRANSPARENT B2B TRADE</span>
            <h2>Why Partner With Panir Thuli Exports</h2>
            <p className="section-desc">
              A reliable trading partner committed to clear communication, verified product sourcing, and consistent supply.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 className="mb-2">Authentic Indian Origin</h3>
              <p>
                Direct access to rich agricultural and spice belts across South India and primary cultivation zones.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2">Buyer-Driven Specifications</h3>
              <p>
                We do not enforce rigid one-size-fits-all products. Packaging, sizing, and shipping terms are adapted to buyer requirements.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2">Direct Leader Contact</h3>
              <p>
                Reach our team directly on WhatsApp or email for prompt quotes, order updates, and consignment discussions.
              </p>
            </div>
          </div>

          <WhatsAppContactBox />
        </div>
      </section>

      {/* 8. FAQ SECTION (SEO & AEO OPTIMIZED) */}
      <section className="section faq-section">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Common Questions & Answers</h2>
            <p className="section-desc">
              Clear facts about Panir Thuli Exports, our product capabilities, and trade operations.
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

      {/* 9. REQUEST A QUOTE CTA */}
      <CTASection
        title="Ready to Source Indian Agricultural & Natural Products?"
        subtitle="Contact Panir Thuli Exports today with your product requirements, required volumes, and destination. We provide clear terms and prompt quotations."
        primaryBtnText="Request a Quote"
        primaryBtnLink="/contact"
      />

      <style>{`
        /* Hero Section */
        .hero-section {
          background-color: #FAF9F5;
          padding: 3.5rem 0 4.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-primary);
          background-color: var(--color-sage-light);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          margin-bottom: 1.25rem;
          border: 1px solid rgba(11, 61, 46, 0.15);
        }
        .badge-icon {
          color: var(--color-gold);
        }
        .hero-title {
          font-size: clamp(2.35rem, 4vw, 3.4rem);
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--color-primary);
        }
        .hero-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 2rem;
          max-width: 580px;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.25rem;
        }
        .hero-pills {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          border-top: 1px solid var(--color-border);
          padding-top: 1.5rem;
        }
        .hero-pill-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        .pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-gold);
        }
        .hero-image-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 2px solid var(--color-white);
        }
        .hero-main-img {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
        }
        .hero-visual-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(6, 51, 38, 0.92);
          backdrop-filter: blur(8px);
          color: #FFFFFF;
          padding: 0.9rem 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(200, 163, 77, 0.3);
        }
        .hero-visual-badge .badge-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .hero-visual-badge .badge-subtitle {
          font-size: 0.75rem;
          color: var(--color-gold-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Trust section */
        .trust-section {
          border-bottom: 1px solid var(--color-border);
        }
        .trust-card {
          padding: 1.5rem;
          border-left: 3px solid var(--color-gold);
          background: var(--color-offwhite);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .trust-icon-box {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }
        .trust-title {
          font-size: 1.35rem;
          margin-bottom: 0.35rem;
        }
        .trust-text {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* About preview */
        .about-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
        }
        .about-preview-image-wrap {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .about-preview-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }
        .about-location-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(11, 61, 46, 0.9);
          color: #FFFFFF;
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .about-preview-content h2 {
          margin-bottom: 1rem;
        }
        .about-preview-features {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .feature-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Process Section */
        .how-it-works-section {
          background-color: var(--color-offwhite);
          border-bottom: 1px solid var(--color-border);
        }
        .process-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem 1.5rem;
          position: relative;
          transition: transform var(--transition-fast);
        }
        .process-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-gold);
        }
        .process-step-num {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-gold);
          opacity: 0.5;
          line-height: 1;
          margin-bottom: 0.75rem;
        }
        .process-title {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
        }
        .process-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }

        /* FAQ Section */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .faq-item {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item.open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-primary);
          background: none;
          border: none;
          cursor: pointer;
        }
        .faq-chevron {
          color: var(--color-gold);
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }
        .faq-answer-content {
          padding: 0 1.5rem 1.25rem 1.5rem;
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 1rem;
        }
        .faq-answer-content p {
          font-size: 0.95rem;
          color: var(--color-text-main);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .hero-grid, .about-preview-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 2rem 0 3rem 0;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-visual-badge {
            padding: 0.65rem 0.85rem;
            left: 10px;
            right: 10px;
            bottom: 10px;
          }
          .hero-visual-badge .badge-title {
            font-size: 1.05rem;
          }
          .hero-pills {
            gap: 0.65rem 1rem;
          }
        }

        @media (max-width: 360px) {
          .hero-title {
            font-size: 1.75rem;
          }
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .faq-question-btn {
            padding: 1rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
