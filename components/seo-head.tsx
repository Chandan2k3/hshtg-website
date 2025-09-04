import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  schema?: object
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/images/hshtg-logo.png",
  noindex = false,
  schema,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | HSHTG Marketing Firm`
    : "HSHTG Marketing Firm - Transform Your Business Into a Local Hotspot"

  const metaDescription =
    description ||
    "Professional digital marketing, branding, and event planning services for businesses near BMSIT, Bengaluru. 200% average growth guaranteed."

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />

      {canonical && <link rel="canonical" href={canonical} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
    </Head>
  )
}
