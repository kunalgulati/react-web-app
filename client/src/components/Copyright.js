import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class Copyright extends Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Forkcha
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
  }
}

export default Copyright