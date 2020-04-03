import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import { makePlay, setFlag, removeFlag, initGame } from '../actions/gameState'
import { supermanActions } from '../actions/superman'

const Board = props => {
  useEffect(() => {
    if (props.gameState.remainingMines === 0) gameWon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameState.remainingMines])

  const handlePlay = (coord, value) => {
    props.makePlay(coord, value, props.gameState.board, props.gameState.setFlags)
  }

  const outOfFlags = () => {
    alert('Hmm... seems like we are out of flags')
  }

  const gameWon = () => {
    alert('WOW YOU\'VE ACTUALLY WON!!!')
    props.supermanActions(false)
    props.initGame(props.gameState.rows, props.gameState.columns)
  }

  const handleFlag = (coord, value, flagged) => {
    if (flagged) return props.removeFlag(coord, value)
    if (props.gameState.remainingFlags === 0) return outOfFlags()
    props.setFlag(coord, value)
  }

  const endGame = setRevealed => {
    alert('You have been exploded!')
    // use setrevealed to flip the tile back after the game restarts
    setRevealed(false)
    props.supermanActions(false)
    props.initGame(props.gameState.rows, props.gameState.columns)
  }

  const sectionStyle = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridGap: "2px",
    gridTemplateRows: `repeat(${props.gameState.rows}, 50px)`,
    gridTemplateColumns: `repeat(${props.gameState.columns}, 50px)`,
    overflow: 'auto',
  }

  const generateTable = () => {
    return props.gameState.board.map((row, i) => (
      // indexes can be used as keys here since array elements are never removed
      row.map((column, j) => (
        <Tile x={i} y={j} key={`${i},${j}`}
          value={props.gameState.board[i][j]}
          isFlagged={props.gameState.setFlags.has(JSON.stringify([i, j]))}
          isRevealed={props.gameState.revealedTiles.has(JSON.stringify([i, j]))}
          superman={props.superman}
          makePlay={handlePlay}
          setFlag={handleFlag}
          endGame={endGame}
        />
      )
      )
    )
    )
  }

  return (
    <section className='board' style={sectionStyle}>
      {generateTable()}
    </section>
  )
}

const mapDispatchToProps = {
  makePlay, setFlag, removeFlag, initGame, supermanActions
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    superman: state.superman,
  }
}

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board)
export default connectedBoard

