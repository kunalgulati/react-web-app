import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import React, { Component } from 'react'
import User from './User'

const USER_QUERY = gql`
  {
    getUsers
    {
      name,
      id
    }
  }
`

class UserList extends Component {
  render() {
    return(
      <Query query={USER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
  
        return (
          <div onChange="">
            {data.map(user => <User key={user.id} user={user} />)}
          </div>
        );
      }}
    </Query>
    )
  }
}

export default UserList