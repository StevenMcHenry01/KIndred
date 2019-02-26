import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import HomeStyles from './HomeStyles'
import User from '../User/User'

const Home = () => (
  <User>
    {({ data: { me } }) => (
      <HomeStyles>
        {me && <p>Hello</p>}
        {!me && <p>oops</p>}
      </HomeStyles>
    )}
  </User>
)

export default Home
