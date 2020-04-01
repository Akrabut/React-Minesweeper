import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import Tile from './Tile'
import { makePlay, setFlag, removeFlag, initGame} from '../actions/gameState'

const Board = props => {
  useEffect(() => {
    if (props.gameState.remainingMines === 0) gameWon()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameState.remainingMines])

  const handlePlay = (coord, value) => {
    props.makePlay(coord, value, props.gameState.board)
  }

  const outOfFlags = () => {
    alert('Hmm... seems like we are out of flags')
  }

  const gameWon = () => {
    alert('WOW YOU\'VE ACTUALLY WON!!!')
    props.initGame(props.gameState.rows, props.gameState.columns)
  }

  const handleFlag = (coord, value, flagged) => {
    console.log(props.gameState.mines);
    console.log(props.gameState.remainingFlags, props.gameState.remainingMines);
    if (flagged) return props.removeFlag(coord, value)
    if (props.gameState.remainingFlags === 0) return outOfFlags()
    props.setFlag(coord, value)
  }

  const endGame = setRevealed => {
    alert('You have been exploded!')
    // use setrevealed to flip the tile back after the game restarts
    setRevealed(false)
    props.initGame(props.gameState.rows, props.gameState.columns)
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
  makePlay, setFlag, removeFlag, initGame,
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
  }
}

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board)
export default connectedBoard

