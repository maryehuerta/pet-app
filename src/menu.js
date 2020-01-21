import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class menu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Menu.Item header>PET APP</Menu.Item>
        <Menu.Item
          name='Reminders'
          active={activeItem === 'Reminders'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='My Pets'
          active={activeItem === 'My Pets'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Settings'
          active={activeItem === 'Settings'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
