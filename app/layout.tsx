import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AquaLuxe Plumbing | Precision Plumbing. Pure Comfort.",
  description:
    "Premium plumbing services for the Greater Metro Area. 24/7 emergency repairs, luxury bathroom renovations, and expert leak detection. Licensed & insured.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
