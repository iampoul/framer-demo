import './globals.css'
import React from "react";

export const metadata = {
  title: 'React Server Components',
  description: 'React Server Components Demonstration',
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
