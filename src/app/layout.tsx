import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Example Site',
  description: 'A basic NextJS app for testing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  )
}
