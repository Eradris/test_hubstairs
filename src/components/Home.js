import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <Grid centered>
        <Header as='h2'>
			    <Icon name='home' />
			    <Header.Content>Home</Header.Content>
			  </Header>
      </Grid>
    );
  }
}

export default Home