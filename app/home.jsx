import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Link
        style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}
        href="/"
      >
        Home
      </Link>
    </div>
  )
}
