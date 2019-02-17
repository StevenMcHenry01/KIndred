import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      location
      disorders
    }
  }
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Homepage</p>
        <Query query={ALL_USERS_QUERY}>
          {payload => {
            console.log(payload)
            return <p>Child</p>
          }}
        </Query>
      </div>
    )
  }
}
