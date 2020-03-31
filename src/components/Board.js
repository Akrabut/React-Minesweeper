import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import Tile from './Tile'

const Board = props => {
  const generateTable = () => {
    return props.gameState.board.map((row, i) => {
      return (
        <Table.Row key={`table-row-${i}`}>
          {row.map((column, j) =>
            <Table.Cell selectable textAlign='center' key={`table-cell-${j}`}>
              <Tile x={i} y={j} value={props.gameState.board[i][j]} isFlagged={props.gameState.setFlags.has([i, j])} isRevealed={props.gameState.isRevealed.has([i, j])}/>
            </Table.Cell>)}
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

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
  }
}

const connectedBoard = connect(mapStateToProps)(Board)
export default connectedBoard

