import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Inbox, 
  Search, 
  Trash2, 
  MessageCircle, 
  Mail, 
  Calendar, 
  Package, 
  Globe, 
  Building2, 
  User, 
  Phone, 
  FileSpreadsheet, 
  PlusCircle, 
  ArrowLeft,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { getEnquiries, deleteEnquiry, clearAllEnquiries } from '../utils/enquiriesStorage';
import SEOHead from '../components/SEOHead';

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductFilter, setSelectedProductFilter] = useState('All');

  const loadEnquiries = () => {
    const list = getEnquiries();
    setEnquiries(list);
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this enquiry?')) {
      const updated = deleteEnquiry(id);
      setEnquiries(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all stored enquiries?')) {
      const empty = clearAllEnquiries();
      setEnquiries(empty);
    }
  };

  const exportCSV = () => {
    if (enquiries.length === 0) {
      alert('No enquiries to export.');
      return;
    }

    const headers = ["ID", "Date", "Name", "Company", "Email", "Phone", "Country", "Product", "Quantity", "Message"];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${e.dateFormatted}"`,
      `"${e.fullName || ''}"`,
      `"${e.companyName || ''}"`,
      `"${e.email || ''}"`,
      `"${e.phone || ''}"`,
      `"${e.country || ''}"`,
      `"${e.product || ''}"`,
      `"${e.quantity || ''}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `panir_thuli_enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = enquiries.filter(item => {
    const matchSearch = 
      (item.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.companyName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.product || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.country || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.message || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchProduct = selectedProductFilter === 'All' || item.product === selectedProductFilter;

    return matchSearch && matchProduct;
  });

  return (
    <div className="enquiries-page">
      <SEOHead
        title="Enquiries List | Panir Thuli Exports"
        description="View and manage submitted wholesale and export enquiries for Panir Thuli Exports."
        canonicalPath="/enquiries"
      />

      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> 
            <Link to="/contact">Contact</Link> <span>/</span> 
            <span>Enquiries List</span>
          </div>
          <span className="section-subtitle">TRADE DASHBOARD</span>
          <h1 className="page-hero-title">Logged Enquiries</h1>
          <p className="page-hero-desc">
            Review and follow up on wholesale trade and international export requests submitted through the portal.
          </p>
        </div>
      </section>

      {/* Enquiries List Section */}
      <section className="section section-white">
        <div className="container">
          {/* Controls Bar */}
          <div className="enquiries-controls-card">
            <div className="search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by buyer name, company, email, product, or country..."
                className="form-control search-field"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="controls-actions">
              <button type="button" onClick={exportCSV} className="btn btn-secondary btn-sm">
                <FileSpreadsheet size={16} /> Export CSV
              </button>
              <button type="button" onClick={loadEnquiries} className="btn btn-secondary btn-sm" title="Refresh list">
                <RefreshCw size={16} /> Refresh
              </button>
              {enquiries.length > 0 && (
                <button type="button" onClick={handleClearAll} className="btn btn-danger-outline btn-sm">
                  <Trash2 size={16} /> Clear All
                </button>
              )}
              <Link to="/contact" className="btn btn-primary btn-sm">
                <PlusCircle size={16} /> New Enquiry
              </Link>
            </div>
          </div>

          {/* Stats Header */}
          <div className="enquiries-stats-bar">
            <div className="stats-count">
              Total Logged: <strong>{enquiries.length}</strong> {enquiries.length === 1 ? 'Enquiry' : 'Enquiries'}
              {searchTerm && ` (Showing ${filtered.length} matches)`}
            </div>
          </div>

          {/* Enquiries Grid / List */}
          {filtered.length === 0 ? (
            <div className="empty-enquiries-box text-center">
              <Inbox size={48} className="empty-icon" />
              <h3>No Enquiries Found</h3>
              <p>
                {enquiries.length === 0 
                  ? "No enquiries have been submitted yet. Test submitting a requirement from the Contact page."
                  : "No enquiries match your current search filter."}
              </p>
              <Link to="/contact" className="btn btn-primary mt-3">
                Go to Contact Form
              </Link>
            </div>
          ) : (
            <div className="enquiries-list">
              {filtered.map((enq) => (
                <div key={enq.id} className="enquiry-card">
                  <div className="enquiry-card-header">
                    <div className="enquiry-id-group">
                      <span className="enquiry-id-badge">{enq.id}</span>
                      <span className="enquiry-date">
                        <Calendar size={14} /> {enq.dateFormatted}
                      </span>
                    </div>
                    <div className="enquiry-product-tag">
                      <Package size={15} /> {enq.product}
                    </div>
                  </div>

                  <div className="enquiry-card-body">
                    <div className="enquiry-grid-details">
                      {/* Column 1: Buyer Info */}
                      <div className="enquiry-detail-col">
                        <div className="enquiry-field">
                          <User size={16} className="field-icon" />
                          <div>
                            <span className="field-label">Buyer Name:</span>
                            <span className="field-value"><strong>{enq.fullName}</strong></span>
                          </div>
                        </div>

                        {enq.companyName && (
                          <div className="enquiry-field">
                            <Building2 size={16} className="field-icon" />
                            <div>
                              <span className="field-label">Company:</span>
                              <span className="field-value">{enq.companyName}</span>
                            </div>
                          </div>
                        )}

                        {enq.country && (
                          <div className="enquiry-field">
                            <Globe size={16} className="field-icon" />
                            <div>
                              <span className="field-label">Destination / Country:</span>
                              <span className="field-value">{enq.country}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Column 2: Contact Info */}
                      <div className="enquiry-detail-col">
                        <div className="enquiry-field">
                          <Mail size={16} className="field-icon" />
                          <div>
                            <span className="field-label">Email:</span>
                            <a href={`mailto:${enq.email}`} className="field-link">{enq.email}</a>
                          </div>
                        </div>

                        {enq.phone && (
                          <div className="enquiry-field">
                            <Phone size={16} className="field-icon" />
                            <div>
                              <span className="field-label">Phone / WhatsApp:</span>
                              <a 
                                href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="field-link"
                              >
                                {enq.phone}
                              </a>
                            </div>
                          </div>
                        )}

                        {enq.quantity && (
                          <div className="enquiry-field">
                            <Package size={16} className="field-icon" />
                            <div>
                              <span className="field-label">Volume / Packaging:</span>
                              <span className="field-value">{enq.quantity}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="enquiry-message-box">
                      <div className="message-label">Requirement Details / Notes:</div>
                      <p className="message-text">{enq.message}</p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="enquiry-card-footer">
                    <div className="footer-left-actions">
                      {enq.phone && (
                        <a
                          href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${enq.fullName}, regarding your enquiry for ${enq.product} with Panir Thuli Exports...`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                        >
                          <MessageCircle size={15} /> WhatsApp Buyer
                        </a>
                      )}
                      <a
                        href={`mailto:${enq.email}?subject=${encodeURIComponent(`Re: Panir Thuli Exports - ${enq.product} Enquiry (${enq.id})`)}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <Mail size={15} /> Email Buyer
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDelete(enq.id)}
                      className="btn btn-danger-outline btn-sm"
                      title="Delete this enquiry"
                    >
                      <Trash2 size={15} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .enquiries-controls-card {
          background: var(--color-offwhite);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .search-input-wrap {
          position: relative;
          flex: 1;
          min-width: 280px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }
        .search-field {
          padding-left: 2.5rem;
        }
        .controls-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .btn-danger-outline {
          background: transparent;
          color: #C62828;
          border: 1px solid #E57373;
          font-weight: 500;
        }
        .btn-danger-outline:hover {
          background: #FFEBEE;
          border-color: #C62828;
        }
        .enquiries-stats-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }
        .stats-count strong {
          color: var(--color-primary);
        }
        .empty-enquiries-box {
          background-color: var(--color-offwhite);
          border: 1px dashed var(--color-border);
          border-radius: var(--radius-md);
          padding: 4rem 2rem;
        }
        .empty-icon {
          color: var(--color-gold);
          margin-bottom: 1rem;
        }
        .empty-enquiries-box h3 {
          margin-bottom: 0.5rem;
        }
        .empty-enquiries-box p {
          max-width: 480px;
          margin: 0 auto;
        }
        .enquiries-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .enquiry-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: border-color var(--transition-fast);
        }
        .enquiry-card:hover {
          border-color: var(--color-primary);
        }
        .enquiry-card-header {
          background-color: var(--color-offwhite);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border);
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .enquiry-id-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .enquiry-id-badge {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background: var(--color-primary);
          color: #FFFFFF;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }
        .enquiry-date {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .enquiry-product-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-primary);
          background: var(--color-sage-light);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .enquiry-card-body {
          padding: 1.5rem;
        }
        .enquiry-grid-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .enquiry-field {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          margin-bottom: 0.65rem;
        }
        .field-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .field-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .field-value {
          color: var(--color-text-main);
        }
        .field-link {
          color: var(--color-primary);
          font-weight: 500;
        }
        .field-link:hover {
          text-decoration: underline;
        }
        .enquiry-message-box {
          background-color: var(--color-offwhite);
          border-left: 3px solid var(--color-gold);
          padding: 1rem 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .message-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .message-text {
          font-size: 0.95rem;
          color: var(--color-text-main);
          line-height: 1.55;
          margin: 0;
          white-space: pre-wrap;
        }
        .enquiry-card-footer {
          background-color: #FAFAFA;
          border-top: 1px solid var(--color-border);
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-left-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .enquiry-grid-details {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .enquiries-controls-card {
            flex-direction: column;
            align-items: stretch;
          }
          .enquiries-header-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 480px) {
          .enquiry-card-header, .enquiry-card-body, .enquiry-card-footer {
            padding: 1rem;
          }
          .footer-left-actions {
            width: 100%;
          }
          .footer-left-actions .btn {
            flex: 1;
            justify-content: center;
          }
          .btn-delete {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
