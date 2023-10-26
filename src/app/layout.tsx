import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import RiseLoading from './home/loading'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AuthApp',
  description: 'Generated to build authentication',
}

/***
 *  here the layout is just a wrapper, wrapping the contents 
 * given to it , use to support some navbars and menus 
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>I am root Layout</h1>
        {/* {children} */}
        <Suspense fallback={<RiseLoading />}>
          {children}
        </Suspense>
        </body>
    </html>
  )
}


/**
 * Rules to learn any dev
 * 1. Understand once (documentation then video )
 * 2. code thirce
 * 
*/



