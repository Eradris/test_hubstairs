import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

class Prime extends Component {
  render() {
    return (
      <Grid centered>
        <Header as='h2'>
		  <Icon name='calculator' />
		  <Header.Content>Prime</Header.Content>
		</Header>
      </Grid>
    );
  }
}

export default Prime