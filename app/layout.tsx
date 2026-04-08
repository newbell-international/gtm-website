import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G.T.M. Chemicals – Solution Providers for High Performing Chemicals",
  description:
    "G.T.M. Impex Chemicals: specialty chemical solutions for water treatment, industrial cleaning, fragrances, and more. Bangkok, Thailand.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
