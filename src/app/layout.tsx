import './globals.css'
import type { Metadata } from 'next'
import { Inter,Rubik,Noto_Sans } from 'next/font/google'
import { Header, Footer } from '@/Sections'
import { NavOne, NaveTwo } from '@/components'

const inter = Inter({ subsets: ['latin'], weight:["500"]});
const rubik = Rubik({ subsets: ['arabic' ]})



export const metadata: Metadata = {
  title: 'autoleave',
  description: 'Discover the best car in egypt',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {


  return (
    <html lang="arabic">
      <body  style={rubik.style} className={rubik.className}  >
      <NaveTwo/>
      <NavOne/>
\
      
        <div className='container'>
          {children}
        </div>
        <Footer />

      </body>
    </html>
  )
}
