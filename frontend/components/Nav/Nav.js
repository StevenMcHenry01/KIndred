import Link from 'next/link'
import NavStyles from './NavStyles'
import User from '../User/User'
import Signout from '../SignOut/Signout'

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/">
          <a>Home</a>
        </Link>
        {me && (
          <>
            <Link href="/connections">
              <a>Connections</a>
            </Link>
            <Link href="/journal">
              <a>Journal</a>
            </Link>
            <Link href="/account">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
)

export default Nav
