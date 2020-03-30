import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import Tile from './Tile'

const Board = props => {

  // const initializeGrid = () => {
  //   const board = new Array(props.size.rows);
  //   for (let i = 0; i < props.size.rows; i++) {
  //     board[i] = new Array(props.size.columns)
  //     for (let j = 0; j < props.size.columns; j++) {
  //       // array elements need to be truthy for the array to be iterable (cant map over array of undefineds)
  //       board[i][j] = true
  //     }
  //   }
  //   return board
  // }

  const generateTable = () => {
    /// const table = initializeGrid()
    return props.gameState.board.map((row, i) => {
      return (
        <Table.Row key={`table-row-${i}`}>
          {row.map((column, j) =>
            <Table.Cell selectable textAlign='center' key={`table-cell-${j}`}>
              <Tile x={i} y={j} value={props.gameState.board[i][j]}/>
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
    // size: state.size,
    gameState: state.gameState,
  }
}

const connectedBoard = connect(mapStateToProps)(Board)
export default connectedBoard

