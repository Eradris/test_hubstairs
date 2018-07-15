import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import MainMenu from './components/MainMenu'
import Home from './components/Home'
import Music from './components/Music'
import Prime from './components/Prime'
import Graph from './components/Graph'

class App extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <h1>TEST_HUBSTAIRS</h1>
        </Grid.Row>
        <Router>
          <Grid>
            <Grid.Row centered>
              <MainMenu/>
            </Grid.Row>
            <Grid.Row centered>
              <Route exact path="/" component={Home} />
              <Route path="/music" component={Music} />
              <Route path="/prime" component={Prime} />
              <Route path="/graph" component={Graph} />
            </Grid.Row>
          </Grid>
        </Router>
      </Grid>
    );
  }
}

export default App
