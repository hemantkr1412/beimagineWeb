import { Inter } from 'next/font/google'
import './globals.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap')
</style>

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BIT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
