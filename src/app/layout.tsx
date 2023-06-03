import './globals.css'
import { Inter } from 'next/font/google'
import { theme } from './theme';

const inter = Inter({ subsets: ['latin'] })


export const revalidate = 0

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
      <body className={inter.className}  >
        <div className='h-full w-full'>
          <header>
            <div className='h-12 w-full shadow-lg border-b-2 border-black border-[#696969] bg-[#A9A9A9]'>
              <div className='flex w-full h-full justify-center items-center'>
                <p>
                  Sammenlign forsikringer
                </p>
              </div>
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
