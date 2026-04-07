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
  title: "Sachin Dhakal | FNCCI Associate Member",
  description: "Building the Next Economy. Bridging the Next Generation. Sachin Dhakal for FNCCI Associate Member.",
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
