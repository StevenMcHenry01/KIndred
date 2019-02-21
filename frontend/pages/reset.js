import Link from 'next/link'
import Reset from '../components/Reset/Reset'

import React, { Component } from 'react'

const reset = props => (
  <div>
    <p>Reset {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
)

export default reset
