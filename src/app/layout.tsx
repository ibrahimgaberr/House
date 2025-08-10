import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "intl-tel-input/build/css/intlTelInput.css";
import "./globals.css";
import SharedLayout from "@/components/layout/sharedLayout";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajaza Compound | Elsewhere Real Estate",
  description:
    "Ajaza Compound by Elsewhere — a luxury residential community offering modern architecture, lush green spaces, and premium amenities in a prime location.",
  keywords: [
    "Ajaza Compound",
    "Elsewhere Real Estate",
    "Luxury Apartments",
    "Residential Compound",
    "Modern Living",
    "New Developments",
    "Premium Real Estate",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={montserrat.className}>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}
