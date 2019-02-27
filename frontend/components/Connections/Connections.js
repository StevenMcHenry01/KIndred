import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import User from '../User/User'
import ConnectionsStyles from './ConnectionsStyles'
import Form from '../Global_Styles/Form'

const DISORDER_MUTATION = gql`
  mutation DISORDER_MUTATION($disorder: Array!) {
    setdisorder(disorder: $disorder) {
      id
      email
      name
      disorders
    }
  }
`

class Connections extends Component {
  state = {
    disorder: [],
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <ConnectionsStyles>
            {console.log(me.disorders[0])}
            {!me.disorders[0] && (
              <>
                <p>
                  In order to see your possible connections, please decide on which disorders you
                  most associate with.
                </p>
              </>
            )}
          </ConnectionsStyles>
        )}
      </User>
    )
  }
}

export default Connections
