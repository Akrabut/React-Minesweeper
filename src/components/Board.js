import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import Tile from './Tile'
import { makePlay, setFlag, initGame} from '../actions/gameState'

const Board = props => {
  const handlePlay = (coord, value) => {
    props.makePlay(coord, value, props.gameState.board)
  }

  const handleFlag = (coord, value) => {
    props.setFlag(coord, value)
  }

  const endGame = setRevealed => {
    alert('You have been exploded!')
    // use setrevealed to flip the tile back after the game restarts
    setRevealed(false)
    props.initGame(20, 20)
  }

  const generateTable = () => {
    return props.gameState.board.map((row, i) => {
      return (
        // indexes can be used as keys here since array elements are never removed
        <Table.Row key={`${i}`}>
          {row.map((column, j) => {
            return (
              <Table.Cell selectable textAlign='center' key={`${i},${j}`}>
                <Tile x={i} y={j}
                  value={props.gameState.board[i][j]}
                  isFlagged={props.gameState.setFlags.has(JSON.stringify([i, j]))}
                  isRevealed={props.gameState.revealedTiles.has(JSON.stringify([i, j]))}
                  makePlay={handlePlay}
                  setFlag={handleFlag}
                  endGame={endGame}
                />
              </Table.Cell>
            )
          })}
        </Table.Row>
      )
    })
  }

return (
  <Table celled fixed>
    <Table.Body>
      {generateTable()}
    </Table.Body>
  </Table>
)
}

const mapDispatchToProps = {
  makePlay, setFlag, initGame,
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
  }
}

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board)
export default connectedBoard

