import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#eee' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/articles">Articles</Link>
    </nav>
  )
}
