import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Exploration Intelligence | Transform Exploration Data Into Investor-Ready Intelligence",
  description: "The platform that transforms raw exploration data into structured, investor-ready intelligence. AI-powered maps, drill visualizations, dashboards, and discovery narratives.",
  keywords: "exploration intelligence, mining technology, drill visualization, geospatial data, investor presentations, exploration data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
