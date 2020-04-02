import React, { useState } from 'react'
import { Menu, Form, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { initGame } from '../actions/gameState'

const colorTheme = { color: 'white' }
const themeInherit = { color: 'inherit' }

const NewGameForm = props => {
  const [rows, setRows] = useState(props.gameState.rows || '')
  const [columns, setColumns] = useState(props.gameState.columns || '')
  const [mines, setMines] = useState(props.gameState.numOfMines || '')

  const handleChange = (e, setter) => {
    if ((e.target.value <= 300)) setter(e.target.value)
  }

  const handleClick = (e) => {
    // lets just prevent the player from trolling us
    if (rows < 5) setRows(5)
    if (columns < 5) setColumns(5)
    if (mines > Math.floor(rows * columns * 0.8)) {
      console.log(mines);
      setMines(Math.floor((rows * columns / 8)))
      console.log(mines);
    }
    props.initGame(parseInt(rows || 5), parseInt(columns || 5), parseInt(mines || 3))
  }

  return (
    <Menu.Item style={colorTheme}>
    {/* while it makes sense to move the remaining flags paragraph to another component (or at least not this one), it will require
    the other component to be connected just for a single paragraph element which makes no sense */}
      <p style={{ fontWeight: 'bold', color: 'red' }}>{`Remaining flags: ${props.gameState.remainingFlags}`}</p>
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
        <Form.Field>
          <label style={themeInherit}>Mines</label>
          <input placeholder='5-300' value={mines} onChange={e => handleChange(e, setMines)} />
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