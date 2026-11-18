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
  title: siteTitle,
  description: profile.seoDescription,
  keywords: [
    "Ayesha Ahmad Khan",
    "WordPress Developer",
    "Elementor Expert",
    "WooCommerce Development",
    "WordPress Website Redesign",
    "WordPress Speed Optimization",
    "WordPress Security & Migration",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    title: siteTitle,
    description: profile.seoDescription,
    siteName: `${profile.fullName} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
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
