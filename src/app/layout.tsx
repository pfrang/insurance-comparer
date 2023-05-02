import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const revalidate = 0;

export const metadata = {
  title: 'Forsikginsfiksern',
  description: 'Blabla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-full w-full'>
          <header>
            <div className='h-12 w-full border-b-2 border-black bg-yellow-600'>
              <div className='flex w-full h-full justify-center items-center'><p>Sammenlign forsikringer</p></div>
            </div>
          </header>

          <section id="body">
          {children}
          </section>
        </div>
        </body>
    </html>
  )
}
