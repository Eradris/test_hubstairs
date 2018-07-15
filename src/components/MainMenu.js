import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

class MainMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: window.location.pathname
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
        <Menu.Item
          as={Link}
          to="/"
          active={activeItem === '/home'}
          onClick={(name) => this.handleItemClick('/home')}
        >
          Home
        </Menu.Item>
        <Menu.Item 
          as={Link}
          to="/music"
          active={activeItem === '/music'}
          onClick={(name) => this.handleItemClick('/music')}
        >
          Music
        </Menu.Item>
        <Menu.Item 
          as={Link}
          to="/prime"
          active={activeItem === '/prime'}
          onClick={(name) => this.handleItemClick('/prime')}
        >
          Prime
        </Menu.Item>
      
        <Menu.Item 
          as={Link} 
          to="/graph"
          active={activeItem === '/graph'}
          onClick={(name) => this.handleItemClick('/graph')}
        >
          Graph
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu