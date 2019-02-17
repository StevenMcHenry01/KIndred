import Link from 'next/link'
import NavStyles from './NavStyles'

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link href="/connections">
      <a>Connections</a>
    </Link>
    <Link href="/journal">
      <a>Journal</a>
    </Link>
  </NavStyles>
)

export default Nav
