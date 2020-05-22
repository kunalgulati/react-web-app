import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.user.name} ({this.props.user.id})
        </div>
      </div>
    )
  }
}

export default User