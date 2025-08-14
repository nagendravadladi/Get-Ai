import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Get AI – Best AI Tools for Writing, Finance, Law, Marketing & More",
  description = "Explore top AI tools for writing, coding, design, audio/video, finance, law, marketing, real estate, HR, healthcare, and more.",
  keywords = [
    "AI tools",
    "AI writing tools",
    "AI coding tools",
    "AI video tools",
    "AI finance software",
    "AI bookkeeping and accounting software",
    "AI fraud detection software",
    "AI contract review for law firms",
    "AI insurance claims automation software",
    "AI customer support software",
    "AI CRM tools for B2B lead scoring",
    "AI sales email writing tools",
    "AI cloud cost optimization tools",
    "AI log analysis & monitoring tools",
    "AI cybersecurity tools for SMBs",
    "AI vulnerability scanning tools",
    "AI mortgage calculator USA",
    "AI contract review UK",
    "best AI real estate lead generation tools",
    "top AI contract review software",
    "AI SEO tools",
    "AI keyword research tools",
    "AI content optimization tools",
    "AI PPC campaign management tools",
    "AI marketing automation platforms",
    "AI copywriting tools for landing pages",
    "AI A/B testing & CRO tools",
    "AI video editors for agencies",
    "AI ad creative generators",
    "AI image upscalers for ecommerce",
    "AI meeting note & transcription tools",
    "AI presentation makers",
    "AI real estate lead generation tools",
    "AI property valuation tools",
    "AI listing automation tools",
    "AI tools for legal research",
    "AI drafting tools for law firms",
    "AI tools for HR & recruiting",
    "AI tools for healthcare documentation",
    "AI tools for education course creation"
  ],
  author = "Get AI Team",
  url = "https://your-site-url.com",
  image = "https://your-site-url.com/og-image.jpg"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Get AI",
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
