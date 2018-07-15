import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

class Graph extends Component {
  render() {
    return (
      <Grid centered>
       	<Header as='h2'>
				  <Icon name='chart line' />
				  <Header.Content>Graph</Header.Content>
				</Header>
      </Grid>
    );
  }
}

export default Graph