import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://hshtg.com"),
  title: {
    default: "HSHTG Marketing Firm - Transform Your Business Into a Local Hotspot",
    template: "%s | HSHTG Marketing Firm",
  },
  description:
    "Professional digital marketing, branding, and event planning services for businesses near BMSIT, Bengaluru. 200% average growth, 95% client retention. Get your free marketing audit today.",
  keywords: [
    "digital marketing Bengaluru",
    "branding services BMSIT",
    "event planning Bengaluru",
    "social media management",
    "local SEO services",
    "business marketing near BMSIT",
    "restaurant marketing Bengaluru",
    "gym marketing services",
    "local business growth",
    "marketing agency Bengaluru",
  ],
  authors: [{ name: "HSHTG Marketing Firm", url: "https://hshtg.com" }],
  creator: "HSHTG Marketing Firm",
  publisher: "HSHTG Marketing Firm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HSHTG Marketing Firm - Transform Your Business Into a Local Hotspot",
    description:
      "Professional digital marketing, branding, and event planning services for businesses near BMSIT, Bengaluru. 200% average growth guaranteed.",
    url: "https://hshtg.com",
    siteName: "HSHTG Marketing Firm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hshtg-logo.png",
        width: 1200,
        height: 630,
        alt: "HSHTG Marketing Firm - Digital Marketing Agency Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSHTG Marketing Firm - Transform Your Business Into a Local Hotspot",
    description:
      "Professional digital marketing, branding, and event planning services for businesses near BMSIT, Bengaluru.",
    images: ["/images/hshtg-logo.png"],
    creator: "@hshtgmarketing",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://hshtg.com",
  },
  category: "business",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://hshtg.com/#organization",
              name: "HSHTG Marketing Firm",
              alternateName: "HSHTG",
              description:
                "Professional digital marketing, branding, and event planning services for businesses near BMSIT, Bengaluru",
              url: "https://hshtg.com",
              telephone: "+91-98765-43210",
              email: "hello@hshtg.com",
              foundingDate: "2025",
              founders: [
                {
                  "@type": "Person",
                  name: "Harish Sharma",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near BMSIT",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560064",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.9716",
                longitude: "77.5946",
              },
              openingHours: "Mo-Sa 09:00-19:00",
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "12.9716",
                  longitude: "77.5946",
                },
                geoRadius: "50000",
              },
              serviceArea: {
                "@type": "Place",
                name: "Bengaluru, Karnataka, India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Marketing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                      description: "Comprehensive digital marketing strategies for local businesses",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Social Media Management",
                      description: "Professional social media marketing and content creation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Event Planning & Promotion",
                      description: "Complete event planning and promotional services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Branding & Creative Design",
                      description: "Brand identity design and creative marketing materials",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Priya Sharma",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "HSHTG transformed our restaurant's online presence. We saw 150% increase in customers within 3 months!",
                },
              ],
              sameAs: [
                "https://www.facebook.com/hshtgmarketing",
                "https://www.instagram.com/hshtgmarketing",
                "https://www.linkedin.com/company/hshtgmarketing",
                "https://twitter.com/hshtgmarketing",
              ],
              logo: {
                "@type": "ImageObject",
                url: "https://hshtg.com/images/hshtg-logo.png",
                width: "400",
                height: "400",
              },
              image: {
                "@type": "ImageObject",
                url: "https://hshtg.com/images/hshtg-logo.png",
                width: "1200",
                height: "630",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HSHTG Marketing" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
