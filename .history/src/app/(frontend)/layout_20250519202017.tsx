import React from 'react'
import './styles.css'
import ThemeRegistry from '@/theme/ThemeRegistry'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  )
}
