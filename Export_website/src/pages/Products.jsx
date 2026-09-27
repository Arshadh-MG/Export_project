import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData, productCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { WhatsAppContactBox } from '../components/WhatsAppButton';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter((item) => item.category === selectedCategory);

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Products | Indian Agricultural, Natural & Food Products | Panir Thuli Exports",
    "description": "Explore agricultural produce, fresh fruits and vegetables, spices, natural food products, raw materials and fruit & vegetable seeds supplied by Panir Thuli Exports.",
    "url": "https://panirthuliexports.com/products",
    "hasPart": productsData.map(prod => ({
      "@type": "Product",
      "name": prod.name,
      "description": prod.shortDescription,
      "image": `https://panirthuliexports.com${prod.image}`,
      "url": `https://panirthuliexports.com/products/${prod.slug}`
    }))
  };

  return (
    <div className="products-page">
      <SEOHead
        title="Products | Indian Agricultural, Natural & Food Products | Panir Thuli Exports"
        description="Explore agricultural produce, fresh fruits and vegetables, spices, natural food products, raw materials and fruit & vegetable seeds supplied by Panir Thuli Exports."
        canonicalPath="/products"
        schema={productsSchema}
      />

      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span>Products</span>
          </div>
          <span className="section-subtitle">PRODUCT CATALOGUE</span>
          <h1 className="page-hero-title">Products We Supply</h1>
          <p className="page-hero-desc">
            Explore agricultural produce, fresh fruits and vegetables, spices, natural food products, raw materials and fruit & vegetable seeds supplied by Panir Thuli Exports for domestic and international markets.
          </p>
        </div>
      </section>

      {/* Products Catalog with Clean Filter */}
      <section className="section section-white">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid-4 product-catalog-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products-box text-center">
              <p>No products found in this category.</p>
            </div>
          )}

          <div className="mt-5">
            <WhatsAppContactBox />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Need Sourcing for a Specific Indian Product?"
        subtitle="In addition to our primary catalog, we coordinate customized agricultural and natural product sourcing according to buyer specifications."
        primaryBtnText="Send Product Enquiry"
        primaryBtnLink="/contact"
      />

      <style>{`
        .category-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .filter-pill-btn {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-main);
          background-color: var(--color-offwhite);
          border: 1px solid var(--color-border);
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-pill-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .filter-pill-btn.active {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
          font-weight: 600;
        }
        .no-products-box {
          padding: 3rem;
          background: var(--color-offwhite);
          border-radius: var(--radius-md);
        }
      `}</style>
    </div>
  );
}
