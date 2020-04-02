import React, { useState } from 'react'
import { Menu, Form, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { initGame } from '../actions/gameState'

const colorTheme = { color: 'white' }
const themeInherit = { color: 'inherit' }

const NewGameForm = props => {
  const [rows, setRows] = useState(props.gameState.rows || '')
  const [columns, setColumns] = useState(props.gameState.columns || '')

  const handleChange = (e, setter) => {
    if ((e.target.value <= 300)) setter(e.target.value)
  }

  const handleClick = (e) => {
    // lets just prevent the player from trolling us
    if (rows < 5) setRows(5)
    if (columns < 5) setColumns(5)
    props.initGame(rows, columns)
  }

  return (
    <Menu.Item style={colorTheme}>
      <p style={{ fontWeight: 'bold' }}>New game</p>
      <Form>
        <Form.Field>
          <label style={themeInherit}>Rows</label>
          <input placeholder='5-300' value={rows} onChange={e => handleChange(e, setRows) } />
        </Form.Field>
        <Form.Field>
          <label style={themeInherit}>Columns</label>
          <input placeholder='5-300' value={columns} onChange={e => handleChange(e, setColumns) } />
        </Form.Field>
      </Form>
      <Button type='submit' onClick={handleClick} icon labelPosition='right' style={{ backgroundColor: 'GhostWhite', color: 'black', marginTop: '1.5em' }}>
        Restart
        <Icon name='game' />
      </Button>
    </Menu.Item>
  )
}

const mapDispatchToProps = {
  initGame,
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
  }
}

const connectedNewGameForm = connect(mapStateToProps, mapDispatchToProps)(NewGameForm)
export default connectedNewGameForm