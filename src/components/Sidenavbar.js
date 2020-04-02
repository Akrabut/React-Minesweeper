import React, { useState } from 'react'
import { Sidebar, Menu, Button } from 'semantic-ui-react'
import Superman from './Superman'
import NewGameForm from './NewGameForm'

const Sidenavbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <aside>
      <Button
        className='options-button'
        toggle
        active={visible}
        onClick={() => setVisible(!visible)}
        floated='right'
        style={{ marginBottom: '2%' }}>
        Options
      </Button>
      <Sidebar
        className='bar'
        as={Menu}
        animation='overlay'
        onHide={() => setVisible(false)}
        visible={visible}
        inverted
        vertical
        width='thin'>
        <Superman />
        <NewGameForm />
      </Sidebar>
    </aside>
  )
}

export default Sidenavbar