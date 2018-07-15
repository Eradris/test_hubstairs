import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

class MainMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'home'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(name){
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Link to="/">
          <Menu.Item 
            active={activeItem === 'home'}
            onClick={(name) => this.handleItemClick('home')}
          >
            Home
          </Menu.Item>
        </Link>
        <Link to="/music">
          <Menu.Item 
            active={activeItem === 'music'}
            onClick={(name) => this.handleItemClick('music')}
          >
            Music
          </Menu.Item>
        </Link>
        <Link to="/prime">
          <Menu.Item 
            active={activeItem === 'prime'}
            onClick={(name) => this.handleItemClick('prime')}
          >
            Prime
          </Menu.Item>
        </Link>
        <Link to="/graph">
          <Menu.Item 
            active={activeItem === 'graph'}
            onClick={(name) => this.handleItemClick('graph')}
          >
            Graph
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default MainMenu