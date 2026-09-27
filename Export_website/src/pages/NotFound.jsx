import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SEOHead
        title="Page Not Found | Panir Thuli Exports"
        description="The page you are looking for does not exist. Return to Panir Thuli Exports home."
      />
      <div className="container text-center py-5">
        <div className="not-found-box">
          <h1 className="not-found-code">404</h1>
          <h2>Page Not Found</h2>
          <p className="mt-2 mb-4">
            The requested page could not be found. Please check the URL or return to our product catalog.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Return to Home
            </Link>
            <Link to="/products" className="btn btn-secondary">
              View Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .not-found-page {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-offwhite);
          padding: 4rem 0;
        }
        .not-found-box {
          max-width: 540px;
          margin: 0 auto;
          background: #FFFFFF;
          padding: 3rem 2rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .not-found-code {
          font-size: 5rem;
          color: var(--color-gold);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .not-found-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
