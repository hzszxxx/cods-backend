import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CODS Backend',
  description: 'Backend API for CODS Mini Program',
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
