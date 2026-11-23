import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://haiderarshad.dev"),
  title: {
    default: "Haider Arshad (@haiderarshad206) | Full-Stack Web Developer & Software Engineer",
    template: "%s | Haider Arshad",
  },
  description:
    "Portfolio of Haider Arshad (@haiderarshad206) — Full-Stack Web Developer with 4+ years of hands-on experience across 3 organizations. Specialist in React.js, Next.js, Node.js, NestJS, PostgreSQL, MongoDB, Docker, Keycloak, RBAC, and AI systems.",
  keywords: [
    "Haider Arshad",
    "haiderarshad206",
    "Software Engineer",
    "Full-Stack Web Developer",
    "React.js Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Node.js",
    "PostgreSQL",
    "PostGIS",
    "Docker",
    "Keycloak",
    "RBAC",
    "ABAC",
    "Sybrid Private Limited",
    "HiveWorx",
    "Revive Medical Technologies",
    "Pakistan",
  ],
  authors: [{ name: "Haider Arshad", url: "https://www.fiverr.com/users/haiderarshad206" }],
  creator: "Haider Arshad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haiderarshad.dev",
    siteName: "Haider Arshad Portfolio",
    title: "Haider Arshad (@haiderarshad206) | Software Engineer & Full-Stack Developer",
    description:
      "Full-Stack Web Developer with 4+ years of hands-on experience across 3 organizations. Specialist in modern web apps, microservices, enterprise security, and AI systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haider Arshad - Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haider Arshad (@haiderarshad206) | Software Engineer",
    description:
      "Full-Stack Developer with 4+ years experience across 3 organizations specializing in React, Next.js, NestJS, and enterprise architecture.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: "haiderarshad206",
  url: "https://haiderarshad.dev",
  jobTitle: siteConfig.title,
  description: siteConfig.about.intro,
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Foundation University School of Science & Technology",
  },
  knowsLanguage: ["English", "Urdu", "Hindi", "German", "Spanish", "Italian", "French"],
  sameAs: [
    siteConfig.contact.fiverr,
    siteConfig.contact.github,
    siteConfig.contact.linkedin,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
