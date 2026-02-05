import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/og-image.png', 
  url, 
  type = 'website'
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const siteName = 'Daily Pick Tools';
  const baseUrl = 'https://dailypicktools.com'; // Replace with actual domain if known, or leave generic
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const metaDescription = description || "Daily Pick Tools - A collection of free, client-side developer utilities. Secure, fast, and no server-side processing.";
  const metaKeywords = [
    'developer tools', 'web utilities', 'calculator', 'converter', 'qr code', 
    'client-side', 'privacy-focused', ...keywords
  ].join(', ');

  const currentLocale = currentLang === 'ko' ? 'ko_KR' : 'en_US';

  // Structure Data (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": metaDescription,
    "url": fullUrl,
    "inLanguage": currentLang,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": baseUrl
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:locale" content={currentLocale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
