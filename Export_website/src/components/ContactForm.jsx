import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Send, CheckCircle2, ListFilter, ArrowRight, Briefcase, Package } from 'lucide-react';
import { productsData } from '../data/products';
import { careersData } from '../data/careers';
import { saveEnquiry } from '../utils/enquiriesStorage';

export default function ContactForm({ preselectedProduct = '', preselectedPosition = '' }) {
  const [searchParams] = useSearchParams();
  const urlProduct = searchParams.get('product') || preselectedProduct;
  const urlPosition = searchParams.get('position') || preselectedPosition;
  const urlType = searchParams.get('type') || (urlPosition ? 'career' : 'trade');

  const [formMode, setFormMode] = useState(urlType === 'career' ? 'career' : 'trade');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    product: urlProduct || 'Garlic',
    position: urlPosition || 'Customer Support Executive — International',
    experience: '',
    quantity: '',
    message: '',
    resumeFileName: ''
  });

  useEffect(() => {
    if (urlPosition) {
      setFormMode('career');
      setFormData(prev => ({ ...prev, position: urlPosition }));
    } else if (urlProduct) {
      setFormMode('trade');
      setFormData(prev => ({ ...prev, product: urlProduct }));
    }
  }, [urlPosition, urlProduct]);

  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, resumeFileName: files[0].name }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert('Please enter your Full Name.');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your Email Address.');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Please enter your Phone / WhatsApp Number.');
      return;
    }

    const payload = {
      ...formData,
      enquiryType: formMode === 'career' ? 'Career Application' : 'Export Enquiry',
      product: formMode === 'career' ? `Position: ${formData.position}` : formData.product
    };

    const saved = saveEnquiry(payload);

    if (saved) {
      setSubmittedStatus({
        id: saved.id,
        name: saved.fullName,
        type: formMode === 'career' ? 'Career Application' : 'Export Enquiry',
        item: formMode === 'career' ? formData.position : formData.product
      });

      // Reset form fields
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        product: urlProduct || 'Garlic',
        position: urlPosition || 'Customer Support Executive — International',
        experience: '',
        quantity: '',
        message: '',
        resumeFileName: ''
      });
    }
  };

  const productOptions = [
    "Garlic",
    "Onions",
    "Raw Leather",
    "Black Pepper",
    "Vanilla",
    "Cumin",
    "Moringa",
    "Moringa Powder",
    "Millet Powder",
    "ABC Malt Powder",
    "Organic Vegetables",
    "Banana Leaves",
    "Fresh Fruits",
    "Dry Fruits",
    "Fruit & Vegetable Seeds (FnV)",
    "Chili",
    "Tomato",
    "Multiple Products",
    "Other"
  ];

  return (
    <div className="contact-form-card">
      {/* Form Mode Selector */}
      <div className="form-type-tabs">
        <button
          type="button"
          className={`tab-btn ${formMode === 'trade' ? 'active' : ''}`}
          onClick={() => setFormMode('trade')}
        >
          <Package size={16} /> Export / Sourcing Enquiry
        </button>
        <button
          type="button"
          className={`tab-btn ${formMode === 'career' ? 'active' : ''}`}
          onClick={() => setFormMode('career')}
        >
          <Briefcase size={16} /> Career Application
        </button>
      </div>

      <div className="contact-form-intro">
        <h3 className="form-title">
          {formMode === 'trade' ? 'Send Your Export & Wholesale Enquiry' : 'Submit Your Career Application'}
        </h3>
        <p className="form-subtitle">
          {formMode === 'trade'
            ? 'Please provide your product requirements, required volumes, and destination.'
            : 'We welcome talent across operations, human resources, and customer support.'}
        </p>
      </div>

      {submittedStatus && (
        <div className="form-success-banner">
          <div className="success-header">
            <CheckCircle2 size={24} className="success-icon" />
            <div>
              <h4 className="success-title">Submission Logged Successfully!</h4>
              <p className="success-desc">
                Reference ID: <strong>{submittedStatus.id}</strong> — {submittedStatus.type} for <strong>{submittedStatus.item}</strong> has been logged.
              </p>
            </div>
          </div>
          <div className="success-actions mt-2">
            <Link to="/enquiries" className="btn btn-secondary btn-sm">
              <ListFilter size={15} /> View Enquiries Log <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="export-enquiry-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="form-control"
              placeholder="e.g. John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control"
              placeholder="e.g. name@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone / WhatsApp Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="form-control"
              placeholder="e.g. +91 99524 90517"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {formMode === 'trade' ? (
            <div className="form-group">
              <label htmlFor="companyName" className="form-label">
                Company Name / Trade Entity
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-control"
                placeholder="e.g. Global Foods Trading LLC"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="position" className="form-label">
                Position Interested In <span className="required">*</span>
              </label>
              <select
                id="position"
                name="position"
                required
                className="form-control"
                value={formData.position}
                onChange={handleChange}
              >
                {careersData.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.department})
                  </option>
                ))}
                <option value="General Profile / Other Opportunity">General Profile / Other Opportunity</option>
              </select>
            </div>
          )}
        </div>

        {formMode === 'trade' && (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country" className="form-label">
                Destination Country / Port
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-control"
                placeholder="e.g. Japan, Indonesia, Sri Lanka, Thailand, Domestic"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="product" className="form-label">
                Product Interested In <span className="required">*</span>
              </label>
              <select
                id="product"
                name="product"
                required
                className="form-control"
                value={formData.product}
                onChange={handleChange}
              >
                {productOptions.map((pName) => (
                  <option key={pName} value={pName}>
                    {pName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {formMode === 'trade' && (
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">
              Estimated Quantity / Packaging Specifications
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              className="form-control"
              placeholder="e.g. 1 FCL Container / 5 Metric Tons / 25kg Bag Packaging"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
        )}

        {formMode === 'career' && (
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                className="form-control"
                placeholder="e.g. 2 years in customer support / fresh graduate"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume" className="form-label">
                Resume (PDF/DOC)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="form-control file-input"
                onChange={handleChange}
              />
              <span className="file-help-text">
                {formData.resumeFileName ? `Selected: ${formData.resumeFileName}` : 'Form is ready for future upload. You may also email your resume directly.'}
              </span>
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            {formMode === 'trade' ? 'Detailed Requirement / Notes' : 'Message / Introduction'}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-control"
            placeholder={
              formMode === 'trade'
                ? "Please specify delivery timeline, port of discharge, target specifications, and any specific quality requirements..."
                : "Briefly describe your background, language proficiencies, and motivation for joining Panir Thuli Exports..."
            }
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-submit-wrapper mt-4">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            <Send size={18} /> {formMode === 'trade' ? 'Submit Enquiry' : 'Submit Application'}
          </button>
        </div>
      </form>

      <style>{`
        .contact-form-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2.25rem;
          box-shadow: var(--shadow-sm);
        }
        .form-type-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1rem;
        }
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-offwhite);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tab-btn:hover {
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
        .tab-btn.active {
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .contact-form-intro {
          margin-bottom: 1.75rem;
        }
        .form-title {
          font-size: 1.55rem;
          margin-bottom: 0.35rem;
        }
        .form-subtitle {
          font-size: 0.92rem;
          color: var(--color-text-muted);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .required {
          color: #D32F2F;
        }
        .file-input {
          padding: 0.4rem;
          font-size: 0.85rem;
        }
        .file-help-text {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          margin-top: 0.25rem;
          display: block;
        }
        .form-submit-wrapper {
          margin-top: 1.5rem;
        }
        .form-success-banner {
          background-color: #EAF9F0;
          border: 1px solid #A6E3BE;
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          margin-bottom: 1.75rem;
        }
        .success-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .success-icon {
          color: #0E5A35;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .success-title {
          font-size: 1.15rem;
          color: #0E5A35;
          margin-bottom: 0.25rem;
        }
        .success-desc {
          font-size: 0.9rem;
          color: #1A5435;
          margin: 0;
        }
        .success-actions {
          margin-top: 0.75rem;
          padding-left: 2.25rem;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .contact-form-card {
            padding: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .form-type-tabs {
            flex-direction: column;
          }
          .tab-btn {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 380px) {
          .contact-form-card {
            padding: 1rem;
          }
          .form-title {
            font-size: 1.35rem;
          }
          .form-subtitle {
            font-size: 0.85rem;
          }
          .success-actions {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
