import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoinPayUSDT — Enterprise USDT Payment Gateway | TRC20 & BEP20",
  description:
    "Accept and send USDT payments with enterprise-grade APIs. Instant settlement on TRC20 and BEP20 networks. Built for iGaming, forex, crypto exchanges, and high-volume businesses.",
  keywords: [
    "USDT payment gateway",
    "TRC20",
    "BEP20",
    "crypto payments",
    "USDT API",
    "stablecoin payments",
    "iGaming payments",
    "crypto pay-in",
    "crypto pay-out",
  ],
  openGraph: {
    title: "CoinPayUSDT — Enterprise USDT Payment Gateway",
    description:
      "Seamless USDT pay-in & pay-out APIs with TRC20 and BEP20 support. Built for high-volume businesses.",
    type: "website",
    siteName: "CoinPayUSDT",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinPayUSDT — Enterprise USDT Payment Gateway",
    description:
      "Seamless USDT pay-in & pay-out APIs with TRC20 and BEP20 support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
