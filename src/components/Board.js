import React, { useEffect } from "react"
import { connect } from "react-redux"
import Tile from "./Tile"
import { makePlay, setFlag, removeFlag, initGame } from "../actions/gameState"
import { supermanActions } from "../actions/superman"
import { FixedSizeGrid as Grid } from "react-window"
// import { Modal } from 'semantic-ui-react'

const Board = (props) => {
  useEffect(() => {
    if (props.gameState.remainingMines === 0) gameWon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameState.remainingMines])

  const handlePlay = (coord, value) => {
    props.makePlay(
      coord,
      value,
      props.gameState.board,
      props.gameState.setFlags
    )
  }

  const outOfFlags = () => {
    alert("Hmm... seems like we are out of flags")
    // return (
    // <Modal open={true}>
    //   <p>"Hmm... seems like we are out of flags"</p>
    // </Modal>
    // )
  }

  const gameWon = () => {
    alert("WOW YOU'VE ACTUALLY WON!!!")
    props.supermanActions(false)
    props.initGame(props.gameState.rows, props.gameState.columns)
  }

  const handleFlag = (coord, value, flagged) => {
    if (flagged) return props.removeFlag(coord, value)
    console.log(props.gameState.remainingFlags)
    if (props.gameState.remainingFlags === 0) return outOfFlags()
    props.setFlag(coord, value)
  }

  const endGame = (setRevealed) => {
    debugger
    alert("You have been exploded!")
    // use setrevealed to flip the tile back after the game restarts
    setRevealed(false)
    props.supermanActions(false)
    props.initGame(props.gameState.rows, props.gameState.columns)
  }

  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? "GridItemOdd"
            : "GridItemEven"
          : rowIndex % 2
            ? "GridItemOdd"
            : "GridItemEven"
      }
      style={style}
    >
      <Tile
        x={rowIndex}
        y={columnIndex}
        key={`${rowIndex},${columnIndex}`}
        value={props.gameState.board[rowIndex][columnIndex]}
        isFlagged={props.gameState.setFlags.has(
          JSON.stringify([rowIndex, columnIndex])
        )}
        isRevealed={props.gameState.revealedTiles.has(
          JSON.stringify([rowIndex, columnIndex])
        )}
        superman={props.superman}
        makePlay={handlePlay}
        setFlag={handleFlag}
        endGame={endGame}
      />
    </div>
  )

  return (
    <Grid
      className="Grid"
      columnCount={props.gameState.columns}
      rowCount={props.gameState.rows}
      columnWidth={40}
      rowHeight={40}
      height={Math.max(40 * 20 + 5, window.document.body.clientHeight / 2)}
      width={Math.max(Math.min(40 * props.gameState.columns + 5, window.document.body.clientWidth / 1.9), 300)}>
      {Cell}
    </Grid>
  )
}

const mapDispatchToProps = {
  makePlay,
  setFlag,
  removeFlag,
  initGame,
  supermanActions,
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    superman: state.superman,
  }
}

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board)
export default connectedBoard
