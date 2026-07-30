import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vikvar Technologies",
    template: "%s | Vikvar Technologies",
  },
  description:
    "Vikvar Technologies delivers technology consulting, cloud, DevOps, data, digital engineering, and workforce solutions.",
  metadataBase: new URL("https://vikvartech.com"),
  openGraph: {
    title: "Vikvar Technologies",
    description:
      "Technology consulting, digital engineering, cloud, DevOps, data, and workforce solutions.",
    type: "website",
    url: "https://vikvartech.com",
    siteName: "Vikvar Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
