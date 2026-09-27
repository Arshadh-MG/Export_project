import { useEffect } from 'react';

export default function SEOHead({
  title = "Panir Thuli Exports | Indian Agricultural & Natural Product Exporter",
  description = "Panir Thuli Exports supplies quality agricultural, natural and raw-material products from India for wholesale, domestic and international markets.",
  canonicalPath = "",
  schema = null
}) {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 3. Update OG title & description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // 4. Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const baseUrl = "https://panirthuliexports.com";
    const fullUrl = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    if (canonical) {
      canonical.href = fullUrl;
    }

    // 5. Inject Structured Data JSON-LD
    let scriptTag = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.id = 'page-jsonld-schema';
      scriptTag.text = JSON.stringify(schema);
      
      const existingScript = document.getElementById('page-jsonld-schema');
      if (existingScript) {
        existingScript.remove();
      }
      document.head.appendChild(scriptTag);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);

    return () => {
      const existingScript = document.getElementById('page-jsonld-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalPath, schema]);

  return null;
}
