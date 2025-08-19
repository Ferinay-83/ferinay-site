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
  title: "Ferinay - Professional Web Design & Development",
  description:
    "Ferinay offers professional web design, web applications, and hosting services. Transform your digital presence with our expert team.",
  keywords: "web design, web development, hosting, web applications, professional websites",
  authors: [{ name: "Ferinay" }],
  creator: "Ferinay",
  publisher: "Ferinay",
  openGraph: {
    title: "Ferinay - Professional Web Design & Development",
    description: "Transform your digital presence with our expert web design, development, and hosting services.",
    url: "https://ferinay.com",
    siteName: "Ferinay",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferinay - Professional Web Design & Development",
    description: "Transform your digital presence with our expert web design, development, and hosting services.",
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
