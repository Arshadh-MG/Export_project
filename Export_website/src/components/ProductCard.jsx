import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-img-wrap">
        <img
          src={product.image}
          alt={`${product.name} - Panir Thuli Exports`}
          className="product-card-img"
          loading="lazy"
          width="400"
          height="300"
        />
        <div className="product-card-badge">{product.categoryDisplay}</div>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        
        <p className="product-card-desc">{product.shortDescription}</p>

        <div className="product-supply-tag">
          <span className="supply-label">Supply Scope:</span>
          <span className="supply-value">{product.supplyTypes}</span>
        </div>

        <div className="product-card-footer">
          <Link to={`/products/${product.slug}`} className="btn btn-secondary btn-sm">
            View Details
          </Link>
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            className="btn btn-primary btn-sm"
          >
            Enquire Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .product-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
        }
        .product-card:hover {
          border-color: var(--color-gold);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }
        .product-card-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          background-color: #E8EFEA;
          overflow: hidden;
        }
        .product-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .product-card-img {
          transform: scale(1.03);
        }
        .product-card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: rgba(11, 61, 46, 0.9);
          color: var(--color-white);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
          backdrop-filter: blur(4px);
        }
        .product-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-card-title {
          font-size: 1.45rem;
          margin-bottom: 0.5rem;
        }
        .product-card-title a {
          color: var(--color-primary);
        }
        .product-card-title a:hover {
          color: var(--color-secondary);
        }
        .product-card-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .product-supply-tag {
          font-size: 0.8rem;
          background-color: var(--color-sage-light);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .supply-label {
          font-weight: 600;
          color: var(--color-primary);
        }
        .supply-value {
          color: var(--color-text-main);
        }
        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
          flex-wrap: wrap;
        }
        @media (max-width: 380px) {
          .product-card-body {
            padding: 1.15rem;
          }
          .product-card-footer {
            flex-direction: column;
            gap: 0.5rem;
          }
          .product-card-footer .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
