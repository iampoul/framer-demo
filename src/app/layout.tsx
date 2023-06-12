import './globals.css'
import React from "react";

export const metadata = {
  title: 'React Server Components',
  description: 'Framer Motion Demonstration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
