import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

import './globals.css'

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kushal Mondal | Full-Stack Developer & Space Explorer",
  description: "Explore the cosmic portfolio of Kushal Mondal - a Full-Stack Developer specializing in Next.js, TypeScript, Go, and modern web technologies. Building stellar digital experiences across the universe.",
  keywords: [
    "Kushal Mondal",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Go Developer",
    "React Developer",
    "Backend Developer",
    "Portfolio",
    "Space Theme Portfolio"
  ],
  authors: [{ name: "Kushal Mondal", url: "https://github.com/kushalsdesk" }],
  creator: "Kushal Mondal",
  publisher: "Kushal Mondal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kushalsdesk.vercel.app",
    title: "Kushal Mondal | Full-Stack Developer & Space Explorer",
    description: "Explore the cosmic portfolio of Kushal Mondal - a Full-Stack Developer building stellar digital experiences.",
    siteName: "Kushal Mondal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kushal Mondal - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal Mondal | Full-Stack Developer & Space Explorer",
    description: "Explore the cosmic portfolio of Kushal Mondal - a Full-Stack Developer building stellar digital experiences.",
    images: ["/og-image.png"],
    creator: "@kushal",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kushal Mondal",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://kushalsdesk.vercel.app'),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-mono antialiased tracking-wide">{children}</body>
    </html>
  )
}
