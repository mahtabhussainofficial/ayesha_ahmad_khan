import { Spline_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-spline-sans",
});

const siteTitle = `${profile.fullName} — ${profile.roleLine}`;

export const metadata = {
  metadataBase: new URL("https://ayesha-ahmad-khan.vercel.app"),
  title: {
    default: siteTitle,
    template: `%s | ${profile.fullName}`,
  },
  description: profile.seoDescription,
  keywords: [
    "Ayesha Ahmad Khan",
    "WordPress Developer",
    "Elementor Expert",
    "WooCommerce Development",
    "WordPress Website Redesign",
    "WordPress Speed Optimization",
    "WordPress Security & Migration",
    "Custom WordPress Theme",
    "Elementor Pro Developer",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: profile.seoDescription,
    url: "https://ayesha-ahmad-khan.vercel.app",
    siteName: `${profile.fullName} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile/about-studio-1.webp",
        width: 1200,
        height: 630,
        alt: `${profile.fullName} — ${profile.roleLine} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.seoDescription,
    images: ["/images/profile/about-studio-1.webp"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${splineSans.variable} h-full`}>
      <body className="min-h-full bg-canvas text-body font-sans antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-[10px] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-contrast"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
