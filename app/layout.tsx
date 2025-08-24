import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ferinay | Web Design & Development in South Africa",
  description:
    "Ferinay provides expert web design, development, and hosting solutions tailored for businesses in South Africa. Request a free consultation today.",
  keywords: "web design, web development, hosting, web applications, professional websites, South Africa",
  authors: [{ name: "Ferinay" }],
  creator: "Ferinay",
  publisher: "Ferinay",
  openGraph: {
    title: "Ferinay | Web Design & Development in South Africa",
    description: "Professional web design, development, and hosting solutions.",
    url: "https://www.ferinay.co.za/",
    siteName: "Ferinay",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ferinay Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferinay | Web Design & Development in South Africa",
    description: "Professional web design, development, and hosting solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
