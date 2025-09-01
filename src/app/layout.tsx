import type { Metadata } from "next";
import "./globals.css";
import SEOStructuredData from "@/components/SEOStructuredData";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "TikTok Comment Generator - Create Fake TikTok Comments & Screenshots",
  description:
    "Generate realistic TikTok comments and create authentic-looking screenshots instantly. Free TikTok comment generator with verified badges, custom avatars, and multiple download formats. Perfect for content creators, marketers, and social media managers.",
  keywords: [
    "TikTok comment generator",
    "fake TikTok comments",
    "TikTok screenshot maker",
    "TikTok comment creator",
    "social media tools",
    "content creation",
    "TikTok marketing",
    "social media management",
    "fake social media content",
    "TikTok engagement tools",
    "comment generator",
    "social media mockups",
    "TikTok content planning",
    "social media strategy",
    "TikTok community management",
  ],
  authors: [{ name: "TikTok Comments Generator Team" }],
  creator: "TikTok Comments Generator",
  publisher: "TikTok Comments Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tiktokcommentsgenerator.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "TikTok Comment Generator - Create Fake TikTok Comments & Screenshots",
    description:
      "Generate realistic TikTok comments and create authentic-looking screenshots instantly. Free TikTok comment generator with verified badges, custom avatars, and multiple download formats.",
    url: "https://tiktokcommentgenerator.com",
    siteName: "TikTok Comment Generator",
    images: [
      {
        url: "/images/tiktok-comment-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "TikTok Comment Generator - Create Fake TikTok Comments and Screenshots",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TikTok Comment Generator - Create Fake TikTok Comments & Screenshots",
    description:
      "Generate realistic TikTok comments and create authentic-looking screenshots instantly. Free TikTok comment generator with verified badges, custom avatars, and multiple download formats.",
    images: ["/images/tiktok-comment-generator-og.jpg"],
    creator: "@tiktokcommentgen",
    site: "@tiktokcommentgen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Social Media Tools",
  classification: "Content Creation Software",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "TikTok Comment Generator",
    "application-name": "TikTok Comment Generator",
    "msapplication-TileColor": "#0095F6",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#0095F6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SEOStructuredData />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-4TNMW7S04B" />
    </html>
  );
}
