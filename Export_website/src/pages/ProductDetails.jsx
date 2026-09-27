import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Package, 
  Truck, 
  Layers, 
  MessageCircle, 
  Send,
  FileCheck2,
  Globe2,
  Check
} from 'lucide-react';
import { productsData } from '../data/products';
import { businessData } from '../data/business';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { WhatsAppContactBox } from '../components/WhatsAppButton';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Variant selector states
  // For Chili: type (Round Chili / Long Chili), stemOption (With Stem / Without Stem)
  const [chiliType, setChiliType] = useState('Round Chili');
  const [chiliStem, setChiliStem] = useState('With Stem');

  // For Tomato: tomatoType (Indian Tomato / Hybrid Tomato)
  const [tomatoType, setTomatoType] = useState('Indian Tomato');

  // For generic string variants
  const [selectedGenericVariant, setSelectedGenericVariant] = useState(
    Array.isArray(product.variants) && typeof product.variants[0] === 'string'
      ? product.variants[0]
      : ''
  );

  // For banana leaves custom requirement state if user types
  const [bananaSize, setBananaSize] = useState('');
  const [bananaVariety, setBananaVariety] = useState('');
  const [bananaQty, setBananaQty] = useState('');
  const [bananaDest, setBananaDest] = useState('');

  // Generate dynamic WhatsApp Message
  const getWhatsAppMessage = () => {
    if (product.id === 'chili') {
      return `Hello Panir Thuli Exports,

I am interested in:
Product: Chili
Type: ${chiliType}
Option: ${chiliStem}

Please provide availability, quantity and pricing details.`;
    }

    if (product.id === 'tomato') {
      return `Hello Panir Thuli Exports,

I am interested in:
Product: Tomato
Type: ${tomatoType}

Please provide availability, quantity and pricing details.`;
    }

    if (product.id === 'banana-leaves') {
      const details = [];
      if (bananaSize) details.push(`Size: ${bananaSize}`);
      if (bananaVariety) details.push(`Variety: ${bananaVariety}`);
      if (bananaQty) details.push(`Quantity: ${bananaQty}`);
      if (bananaDest) details.push(`Destination: ${bananaDest}`);

      const reqText = details.length > 0 ? details.join(', ') : 'As per required size & variety';
      return `Hello Panir Thuli Exports,

I am interested in:
Product: Banana Leaves
Requirement: ${reqText}

Please share availability, quantity, pricing and supply details.

Thank you.`;
    }

    const requirementText = selectedGenericVariant ? selectedGenericVariant : 'Standard Export / Wholesale';
    return `Hello Panir Thuli Exports,

I am interested in ${product.name}.

Requirement:
${requirementText}

Please share availability, quantity, pricing and supply details.

Thank you.`;
  };

  const currentWhatsAppMsg = getWhatsAppMessage();
  const primaryWhatsAppUrl = `${businessData.contacts[0].whatsAppUrl}?text=${encodeURIComponent(currentWhatsAppMsg)}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": `https://panirthuliexports.com${product.image}`,
    "category": product.categoryDisplay,
    "brand": {
      "@type": "Brand",
      "name": "Panir Thuli Exports"
    },
    "countryOfOrigin": {
      "@type": "Country",
      "name": product.origin || "India"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "Available for wholesale and export supply according to buyer requirements."
    }
  };

  const getCtaButtonText = () => {
    if (product.id === 'chili') return 'Enquire About Chili';
    if (product.id === 'tomato') return 'Enquire About Tomato';
    return `Enquire About ${product.name}`;
  };

  return (
    <div className="product-details-page">
      <SEOHead
        title={product.seoTitle}
        description={product.seoDescription}
        canonicalPath={`/products/${product.slug}`}
        schema={productSchema}
      />

      {/* Page Breadcrumbs & Header */}
      <section className="product-detail-header">
        <div className="container">
          <div className="product-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> 
            <Link to="/products">Products</Link> <span>/</span> 
            <span>{product.name}</span>
          </div>

          <div className="product-hero-grid">
            <div className="product-hero-image-wrap">
              <img
                src={product.image}
                alt={`${product.name} - Panir Thuli Exports`}
                className="product-detail-main-img"
                width="600"
                height="450"
              />
              <div className="product-hero-category-tag">
                {product.categoryDisplay}
              </div>
            </div>

            <div className="product-hero-info">
              <span className="section-subtitle">INDIAN ORIGIN EXPORT</span>
              <h1 className="product-hero-title">{product.title}</h1>
              
              <p className="product-hero-desc">{product.description}</p>

              {/* Specific Variant Selector for Chili */}
              {product.id === 'chili' && (
                <div className="variant-interactive-box">
                  <div className="variant-group-title">Select Chili Type & Option:</div>
                  <div className="chili-selector-container">
                    <div className="chili-type-block">
                      <div className="selector-label">Variety:</div>
                      <div className="pill-group">
                        {['Round Chili', 'Long Chili'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            className={`pill-btn ${chiliType === type ? 'active' : ''}`}
                            onClick={() => setChiliType(type)}
                          >
                            {chiliType === type && <Check size={14} className="pill-check" />}
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="chili-stem-block">
                      <div className="selector-label">Stem Option:</div>
                      <div className="pill-group">
                        {['With Stem', 'Without Stem'].map((stem) => (
                          <button
                            key={stem}
                            type="button"
                            className={`pill-btn ${chiliStem === stem ? 'active' : ''}`}
                            onClick={() => setChiliStem(stem)}
                          >
                            {chiliStem === stem && <Check size={14} className="pill-check" />}
                            {stem}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="selected-variant-summary">
                    Selected: <strong>{chiliType} — {chiliStem}</strong>
                  </div>
                </div>
              )}

              {/* Specific Variant Selector for Tomato */}
              {product.id === 'tomato' && (
                <div className="variant-interactive-box">
                  <div className="variant-group-title">Select Tomato Variety:</div>
                  <div className="pill-group">
                    {['Indian Tomato', 'Hybrid Tomato'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`pill-btn ${tomatoType === type ? 'active' : ''}`}
                        onClick={() => setTomatoType(type)}
                      >
                        {tomatoType === type && <Check size={14} className="pill-check" />}
                        {type}
                      </button>
                    ))}
                  </div>
                  <div className="selected-variant-summary">
                    Selected: <strong>{tomatoType}</strong>
                  </div>
                </div>
              )}

              {/* Generic string variants */}
              {Array.isArray(product.variants) && typeof product.variants[0] === 'string' && product.id !== 'tomato' && (
                <div className="variant-interactive-box">
                  <div className="variant-group-title">Available Varieties / Forms:</div>
                  <div className="pill-group">
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={`pill-btn ${selectedGenericVariant === v ? 'active' : ''}`}
                        onClick={() => setSelectedGenericVariant(v)}
                      >
                        {selectedGenericVariant === v && <Check size={14} className="pill-check" />}
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="product-meta-specs">
                <div className="spec-item">
                  <span className="spec-label">Supply Scope:</span>
                  <span className="spec-val">{product.supplyTypes}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Country of Origin:</span>
                  <span className="spec-val">{product.origin || "India"}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Availability:</span>
                  <span className="spec-val">Available according to customer requirements & product availability</span>
                </div>
              </div>

              <div className="product-quick-actions">
                <a href="#enquire-form" className="btn btn-primary">
                  <Send size={16} /> Request Quotation
                </a>
                <a
                  href={primaryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} /> {getCtaButtonText()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Technical & Commercial Sections */}
      <section className="section section-white">
        <div className="container">
          <div className="product-detail-layout-grid">
            {/* Left Content Area */}
            <div className="product-detail-main-content">
              {/* 1. Product Overview */}
              <div className="detail-block">
                <h2>Product Overview</h2>
                <p>{product.overview || product.description}</p>
              </div>

              {/* Special Variants Section */}
              {product.variants && (
                <div className="detail-block">
                  <h2>Available Variants & Types</h2>
                  {product.id === 'chili' ? (
                    <div className="chili-display-tree">
                      <div className="chili-node">
                        <h4>Round Chili</h4>
                        <ul>
                          <li>With Stem</li>
                          <li>Without Stem</li>
                        </ul>
                      </div>
                      <div className="chili-node">
                        <h4>Long Chili</h4>
                        <ul>
                          <li>With Stem</li>
                          <li>Without Stem</li>
                        </ul>
                      </div>
                    </div>
                  ) : product.id === 'tomato' ? (
                    <ul className="applications-list">
                      <li className="app-item">
                        <CheckCircle2 size={18} className="app-icon" />
                        <span><strong>Indian Tomato</strong> — Traditional regional variety for domestic and export use.</span>
                      </li>
                      <li className="app-item">
                        <CheckCircle2 size={18} className="app-icon" />
                        <span><strong>Hybrid Tomato</strong> — Firm, uniform varieties suitable for transit and extended fresh handling.</span>
                      </li>
                    </ul>
                  ) : (
                    <ul className="applications-list">
                      {Array.isArray(product.variants) && product.variants.map((v, i) => (
                        <li key={i} className="app-item">
                          <CheckCircle2 size={18} className="app-icon" />
                          <span>{typeof v === 'string' ? v : v.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* 2. Customer Requirements */}
              <div className="detail-block">
                <h2>Customer Requirements & Specifications</h2>
                {product.id === 'banana-leaves' ? (
                  <div className="banana-req-card">
                    <p className="callout-text mb-3">
                      <strong>Banana leaves can be supplied according to customer requirements, including preferred size and variety, subject to availability.</strong>
                    </p>
                    <div className="req-checklist">
                      <div className="req-pill-item">✓ Required size (custom length/cut)</div>
                      <div className="req-pill-item">✓ Preferred variety</div>
                      <div className="req-pill-item">✓ Consignment quantity</div>
                      <div className="req-pill-item">✓ Destination port / city</div>
                      <div className="req-pill-item">✓ Custom packaging requirements</div>
                    </div>
                  </div>
                ) : (
                  <div className="info-callout">
                    <FileCheck2 size={22} className="callout-icon" />
                    <div>
                      <h4 className="callout-title">Handling According to Buyer Needs</h4>
                      <p className="callout-text">
                        {product.buyerRequirements || product.customerRequirements || "Available according to customer requirements and product availability."}
                      </p>
                      <p className="callout-note mt-2">
                        <em>* Sizing, sorting, packing specifications, and delivery terms are arranged based on customer requirements and mutual agreement.</em>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Commercial Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="detail-block">
                  <h2>Commercial & Sourcing Applications</h2>
                  <ul className="applications-list">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="app-item">
                        <CheckCircle2 size={18} className="app-icon" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4. Packaging & Export Preparation */}
              <div className="detail-block">
                <h2>Packaging & Supply Options</h2>
                <div className="info-callout">
                  <Package size={22} className="callout-icon" />
                  <div>
                    <h4 className="callout-title">Packaging Options</h4>
                    <p className="callout-text">
                      {product.packaging || "Packaging is arranged according to buyer requirements, product characteristics, and export standards."}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct box */}
              <WhatsAppContactBox productContext={product.name} />
            </div>

            {/* Right Sticky Enquiry Form */}
            <div className="product-detail-sidebar" id="enquire-form">
              <ContactForm preselectedProduct={product.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="section section-sage">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">EXPLORE MORE</span>
            <h2>Other Products We Supply</h2>
          </div>

          <div className="grid-4">
            {productsData
              .filter((p) => p.slug !== product.slug)
              .slice(0, 4)
              .map((p) => (
                <div key={p.id} className="related-product-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="related-img"
                    loading="lazy"
                    width="300"
                    height="200"
                  />
                  <div className="related-body">
                    <h4>{p.name}</h4>
                    <p>{p.categoryDisplay}</p>
                    <Link to={`/products/${p.slug}`} className="related-link">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title={`Ready to Source ${product.name} from India?`}
        subtitle="Contact Panir Thuli Exports today to receive detailed availability, packing options, and supply timelines."
        primaryBtnText="Send Requirement"
        primaryBtnLink={`/contact?product=${encodeURIComponent(product.name)}`}
      />

      <style>{`
        .product-detail-header {
          background-color: var(--color-offwhite);
          padding: 2.5rem 0 3.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }
        .product-breadcrumbs {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .product-breadcrumbs a {
          color: var(--color-primary);
          font-weight: 500;
        }
        .product-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
        }
        .product-hero-image-wrap {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          background: #FFFFFF;
        }
        .product-detail-main-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }
        .product-hero-category-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(11, 61, 46, 0.9);
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
        }
        .product-hero-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          margin-bottom: 1rem;
          line-height: 1.15;
        }
        .product-hero-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .variant-interactive-box {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
        }
        .variant-group-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.75rem;
        }
        .chili-selector-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .selector-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 0.35rem;
        }
        .pill-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 20px;
          border: 1px solid var(--color-border);
          background: var(--color-offwhite);
          color: var(--color-text-main);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pill-btn:hover {
          border-color: var(--color-primary);
          background: #FFFFFF;
        }
        .pill-btn.active {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .pill-check {
          color: #FFFFFF;
        }
        .selected-variant-summary {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: var(--color-primary);
          padding-top: 0.5rem;
          border-top: 1px dashed var(--color-border);
        }
        .chili-display-tree {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }
        .chili-node {
          background: var(--color-offwhite);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
        }
        .chili-node h4 {
          font-size: 1.1rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        .chili-node ul {
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }
        .banana-req-card {
          background: var(--color-offwhite);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
        }
        .req-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .req-pill-item {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-primary);
        }
        .product-meta-specs {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
          border-bottom: 1px solid var(--color-border-subtle);
          padding-bottom: 0.4rem;
          flex-wrap: wrap;
          gap: 0.25rem;
        }
        .spec-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .spec-label {
          font-weight: 600;
          color: var(--color-primary);
        }
        .spec-val {
          color: var(--color-text-main);
        }
        .product-quick-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Detail layout */
        .product-detail-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3.5rem;
          align-items: flex-start;
        }
        .detail-block {
          margin-bottom: 2.5rem;
        }
        .detail-block h2 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--color-sage-light);
          padding-bottom: 0.5rem;
        }
        .applications-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .app-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--color-text-main);
          background-color: var(--color-offwhite);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-secondary);
        }
        .app-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-callout {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background-color: var(--color-sage-light);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(11, 61, 46, 0.1);
        }
        .callout-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .callout-title {
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
          color: var(--color-primary);
        }
        .callout-text {
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin: 0;
        }
        .callout-note {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        /* Related products */
        .related-product-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .related-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .related-body {
          padding: 1rem;
        }
        .related-body h4 {
          font-size: 1.15rem;
          margin-bottom: 0.2rem;
        }
        .related-body p {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }
        .related-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .product-hero-grid, .product-detail-layout-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .chili-display-tree {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .product-quick-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .info-callout {
            padding: 1rem;
          }
          .product-meta-specs {
            padding: 0.85rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
