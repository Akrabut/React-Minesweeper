import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import Superman from './Superman'
import NewGameForm from './NewGameForm'

const Sidenavbar = () => (
  <Sidebar
    as={Menu}
    animation='overlay'
    visible
    inverted
    vertical
    style={{ width: '8%' }}>
    <Superman />
    <NewGameForm />
  </Sidebar>
)

export default Sidenavbar