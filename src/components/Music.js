import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

class Music extends Component {
  render() {
    return (
      <Grid centered>
        <Header as='h2'>
				  <Icon name='music' />
				  <Header.Content>Music</Header.Content>
				</Header>
      </Grid>
    );
  }
}

export default Music