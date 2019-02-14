import Link from 'next/link'

import React, { Component } from 'react'

class index extends Component {
  render() {
    return (
      <div>
        <Link href="/page">
          <a>Other Page</a>
        </Link>
      </div>
    )
  }
}

export default index
