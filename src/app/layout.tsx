import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import 'intl-tel-input/build/css/intlTelInput.css';
import "./globals.css";
import SharedLayout from "@/components/layout/sharedLayout";



const figtree = Figtree({
  weight: ['400', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "House",
  description: "House is a platform for managing your home and connecting with service providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={figtree.className}
      >
        <SharedLayout>
        {children}
        </SharedLayout>
      </body>
    </html>
  );
}
