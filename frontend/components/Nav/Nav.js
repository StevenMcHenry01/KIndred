import Link from 'next/link'
import NavStyles from './NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/page">
      <a>Other Page</a>
    </Link>
  </NavStyles>
)

export default Nav
