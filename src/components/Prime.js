import React, { Component } from 'react'
import { Grid, Header, Icon, Input, Button } from 'semantic-ui-react'

class Prime extends Component {

	valider(){
		let num = document.getElementById('num').value
		console.log(num)
	}

  render() {
    return (
      <Grid centered>
        <Grid.Row centered>
          <Header as='h2'>
            <Icon name='calculator' />
            <Header.Content>Prime</Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
          	<Input type='number' id='num'/>
          </Grid.Column>
          <Grid.Column>
          	<Button onClick={() => this.valider()}>Valider</Button>
          </Grid.Column>
          <Grid.Column>
          	<h3>Résultat</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Prime