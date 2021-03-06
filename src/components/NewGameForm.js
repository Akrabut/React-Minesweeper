import React, { useState, useEffect } from 'react'
import { Menu, Form, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { initGame } from '../actions/gameState'
import { supermanActions } from '../actions/superman'

const colorTheme = { color: 'white' }
const themeInherit = { color: 'inherit' }

const NewGameForm = props => {
  const [rows, setRows] = useState(props.gameState.rows || '')
  const [columns, setColumns] = useState(props.gameState.columns || '')
  const [mines, setMines] = useState(props.gameState.numOfMines || '')

  useEffect(() => {
    setRows(props.gameState.rows)
  }, [props.gameState.rows])

  useEffect(() => {
    setColumns(props.gameState.columns)
  }, [props.gameState.columns])

  useEffect(() => {
    setMines(props.gameState.numOfMines)
  }, [props.gameState.numOfMines])

  useEffect(() => {
    const remainingFlags = new Map()
    remainingFlags.set('flags', props.gameState.remainingFlags)
    props.setFlagMap(remainingFlags)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameState.remainingFlags])

  const handleChange = (e, setter) => {
    if ((e.target.value <= 300)) setter(e.target.value)
  }

  const handleMineChange = (e) => {
    if ((e.target.value < Math.floor(rows * columns) * 0.8)) setMines(e.target.value)
  }

  const handleClick = (e) => {
    // lets just prevent the player from trolling us
    if (rows < 5) setRows(5)
    if (columns < 5) setColumns(5)
    if (mines > Math.floor(rows * columns * 0.8)) {
      setMines(Math.floor((rows * columns) / 8))
    }
    props.supermanActions(false)
    props.initGame(parseInt(rows || 5), parseInt(columns || 5), parseInt(mines || 3))
  }

  return (
    <Menu.Item style={colorTheme}>
    {/* while it makes sense to move the remaining flags paragraph to another component (or at least not this one), it will require
    the other component to be connected just for a single paragraph element which makes no sense */}
      <p style={{ fontWeight: 'bolder', color: '#21ba45' }}>New game</p>
      <Form className='new-game-form'>
        <Form.Field>
          <label style={themeInherit}>Rows</label>
          <input id='row-input' placeholder='5-300' value={rows} onChange={e => handleChange(e, setRows) } />
        </Form.Field>
        <Form.Field>
          <label style={themeInherit}>Columns</label>
          <input id='column-input' placeholder='5-300' value={columns} onChange={e => handleChange(e, setColumns) } />
        </Form.Field>
        <Form.Field>
          <label style={themeInherit}>Mines</label>
          <input id='mine-input' placeholder='5-300' value={mines} onChange={handleMineChange} />
        </Form.Field>
      </Form>
      <Button id='restart-button' type='submit' onClick={handleClick} icon labelPosition='right' style={{ backgroundColor: 'GhostWhite', color: 'black', marginTop: '1.5em' }}>
        Restart
        <Icon name='game' />
      </Button>
    </Menu.Item>
  )
}

const mapDispatchToProps = {
  initGame, supermanActions
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    superman: state.superman,
  }
}

const connectedNewGameForm = connect(mapStateToProps, mapDispatchToProps)(NewGameForm)
export default connectedNewGameForm