import { Spline_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-spline-sans",
});

export const metadata = {
  title: `${profile.fullName} — ${profile.roleLine}`,
  description: profile.seoDescription,
  openGraph: {
    title: `${profile.fullName} — ${profile.roleLine}`,
    description: profile.seoDescription,
    type: "website",
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
