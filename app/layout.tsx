import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Schema Impact Visualizer — See How DB Changes Break Your App',
  description: 'Analyze database schema changes and visualize their impact on queries, models, and API endpoints before you migrate.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="894c26c3-4056-4f14-a511-9622f6686bc6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
