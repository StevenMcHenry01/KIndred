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
      <Query query={ALL_USERS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>ERROR: {error}</p>
          return <p>Hey you have {data.users.length} users!</p>
        }}
      </Query>
    )
  }
}
