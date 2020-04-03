import { revealAdjacentEmptyTiles } from '../helpers/gameStateActions'

export const initGame = (rows, columns, mines) => {
  return {
    type: 'INIT_GAME',
    data: {
      rows: rows,
      columns: columns,
      mines: mines,
    }
  }
}

export const makePlay = (clickedTile, value, board, setFlags) => {
  // clickedTile is of format [i, j]
  // case where value === M is handled in gameOverReducer
  if (value === 'E') {
    return {
      type: 'MAKE_PLAY',
      data: {
        revealedTiles: revealAdjacentEmptyTiles(clickedTile, board, setFlags),
      }
    }
    // case where symbol is a number (reveal only this tile)
  } else {
    return {
      type: 'MAKE_PLAY',
      data: {
        revealedTiles: [clickedTile]
      }
    }
  }

}

export const setFlag = (flaggedTile, value) => {
  // flaggedTile is of format [i, j]
  // isMine indicates whether flagged tile has mine underneath
  return {
    type: 'SET_FLAG',
    data: {
      mineFlagged: value === 'M',
      coord: flaggedTile,
    }
  }
}

export const removeFlag = (unflaggedTile, value) => {
  // case where user unflagged an already flagged mine needs to be checked
  return {
    type: 'REMOVE_FLAG',
    data: {
      mineUnflagged: value === 'M',
      coord: unflaggedTile,
    }
  }
}