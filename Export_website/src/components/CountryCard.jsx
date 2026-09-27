import React from 'react';
import { Globe } from 'lucide-react';

export default function CountryCard({ country }) {
  return (
    <div className="country-card">
      <div className="country-card-top">
        <span className="country-flag" role="img" aria-label={`Flag of ${country.name}`}>
          {country.flag}
        </span>
        <span className="country-status-badge">{country.status}</span>
      </div>

      <h3 className="country-name">{country.name}</h3>
      <div className="country-region">{country.region}</div>
      <p className="country-desc">{country.description}</p>

      <style>{`
        .country-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
          display: flex;
          flex-direction: column;
        }
        .country-card:hover {
          border-color: var(--color-gold);
          box-shadow: var(--shadow-sm);
          transform: translateY(-2px);
        }
        .country-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .country-flag {
          font-size: 2.25rem;
          line-height: 1;
        }
        .country-status-badge {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.6rem;
          background-color: var(--color-sage-light);
          color: var(--color-primary);
          border-radius: var(--radius-sm);
        }
        .country-name {
          font-size: 1.35rem;
          margin-bottom: 0.2rem;
          color: var(--color-primary);
        }
        .country-region {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.65rem;
        }
        .country-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
