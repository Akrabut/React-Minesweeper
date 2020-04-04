import React, { useState } from 'react'
import { Sidebar, Menu, Button, Icon } from 'semantic-ui-react'
import Superman from './Superman'
import NewGameForm from './NewGameForm'

const OptionsBar = () => {
  const [visible, setVisible] = useState(false)
  // this is used in the remaining mines indicator
  // this is a hack indeed, but passing a number wouldn't work (immutable) and connecting an entire component
  // to redux just to show a number is probably an overkill
  const [flagMap, setFlagMap] = useState(new Map())

  return (
    <aside>
      <Button
        className='options-button'
        toggle
        active={visible}
        onClick={() => setVisible(!visible)}
        style={{ backgroundColor: 'white', color: '#21ba45' }}>
        <h3>Options</h3>
      </Button>
      <h3 className='remaining-flags' style={{ color: '#21ba45' }}>
        <Icon size='large' fitted={true} name='font awesome flag' /> {`x ${flagMap.get('flags')}`}
      </h3>
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
        <NewGameForm setFlagMap={setFlagMap} />
      </Sidebar>
    </aside>
  )
}

export default OptionsBar