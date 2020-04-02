import React, { useState } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'

const colorTheme = { color: 'inherit' }

const Superman = () => {
  const [active, setActive] = useState(false)

  const buttonStyle = () => {
    return (
      active
        ? { backgroundColor: 'brown', color: 'white' }
        : { backgroundColor: 'white', color: 'brown' }
    )
  }

  return (
    <Menu.Item>
      <Button toggle active={false} style={buttonStyle()} onClick={() => setActive(!active)}>
        <p style={colorTheme}>
          Superman
          <Icon name={'superpowers'} style={colorTheme} />
        </p>
      </Button>
    </Menu.Item>
  )
}

export default Superman