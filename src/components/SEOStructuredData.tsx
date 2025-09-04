export default function SEOStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TikTok Comment Generator",
    "description": "Generate realistic TikTok comments and create authentic-looking screenshots instantly. Free TikTok comment generator with verified badges.",
    "url": "https://tiktokcommentsgenerator.com",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to use with unlimited access"
    },
    "featureList": [
      "Generate realistic TikTok comments",
      "Create authentic-looking screenshots",
      "Custom avatar uploads",
      "Verified badge support",
      "Multiple download formats (PNG, JPG)",
      "Mobile-responsive design",
      "Real-time preview"
    ],
    "author": {
      "@type": "Organization",
      "name": "TikTok Comment Generator Team",
      "url": "https://tiktokcommentsgenerator.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TikTok Comment Generator",
      "url": "https://tiktokcommentsgenerator.com"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I use the TikTok Comment Generator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To use the TikTok Comment Generator, enter a username, write your comment, optionally upload an avatar, and click download to get your image in PNG or JPG format."
          }
        },
        {
          "@type": "Question",
          "name": "Is the TikTok Comment Generator free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the TikTok Comment Generator is completely free to use with unlimited access to all features."
          }
        },
        {
          "@type": "Question",
          "name": "What formats can I download my comments in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can download your generated comments in PNG and JPG formats, or download both formats together as a ZIP file."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Alex Chen"
        },
        "reviewBody": "This TikTok Comment Generator is a game-changer! I can create engaging replies in seconds instead of spending hours thinking of responses."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maya Rodriguez"
        },
        "reviewBody": "As someone with 500K+ followers, I need to respond to hundreds of comments daily. This tool saves me so much time while keeping my responses authentic and engaging."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
