import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import Tile from './Tile'
import { makePlay, setFlag } from '../actions/gameState'

const Board = props => {
  const generateTable = () => {
    return props.gameState.board.map((row, i) => {
      return (
        <Table.Row key={`table-row-${i}`}>
          {row.map((column, j) => {
            return (
              <Table.Cell selectable textAlign='center' key={`table-cell-${j}`}>
                <Tile x={i} y={j}
                  value={props.gameState.board[i][j]}
                  isFlagged={props.gameState.setFlags.has(JSON.stringify([i, j]))}
                  isRevealed={props.gameState.revealedTiles.has(JSON.stringify([i, j]))}
                  board={props.gameState.board}
                  makePlay={props.makePlay}
                  setFlag={props.setFlag}
                />
              </Table.Cell>
            )
          })}
        </Table.Row>
      )
    })
  }

return (
  <Table celled>
    <Table.Body>
      {generateTable()}
    </Table.Body>
  </Table>
)
}

const mapDispatchToProps = {
  makePlay, setFlag,
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
  }
}

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board)
export default connectedBoard

