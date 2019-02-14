import Link from 'next/link'

import React, { Component } from 'react'

class page extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    )
  }
}

export default page
