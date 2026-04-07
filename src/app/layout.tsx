import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Dhakal | Candidate for FNCCI Associate Member",
  description: "Building the Next Economy. Bridging the Next Generation. Sachin Dhakal for FNCCI Associate Member.",
  keywords: ["Sachin Dhakal", "FNCCI", "Associate Member Candidate", "Associate Member", "Nepal Economy", "Next Gen Entrepreneurs", "FC Chitwan"],
  openGraph: {
    title: "Sachin Dhakal | Candidate for FNCCI Associate Member",
    description: "Building the Next Economy. Bridging the Next Generation.",
    url: "https://sachindhakal.com",
    siteName: "Sachin Dhakal Campaign",
    images: [
      {
        url: "/Social-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin Dhakal - Building the Next Economy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Dhakal | Candidate for FNCCI Associate Member",
    description: "Building the Next Economy. Bridging the Next Generation.",
    images: ["/Social-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${devanagari.variable} min-h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
