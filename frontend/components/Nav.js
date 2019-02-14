import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/page">
      <a>Other Page</a>
    </Link>
  </div>
)

export default Nav
