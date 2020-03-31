export const initGame = (rows, columns) => {
  return {
    type: 'INIT_GAME',
    data: {
      rows: rows,
      columns: columns,
    }
  }
}

const dfs = (clickedTile, board, newReveals) => {
  const i = clickedTile[0]
  const j = clickedTile[1]
  const potentialCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1], [i + 1, j + 1]]
  const visited = new Set()
  potentialCoords.forEach(potentialEmpty => {
    if (visited.has(potentialEmpty)) return
    if (board[potentialEmpty[0]] && board[potentialEmpty[0]][potentialEmpty[1]] && board[potentialEmpty[0]][potentialEmpty[1]] === 'E') {
      newReveals.push(potentialEmpty)
      visited.add(potentialEmpty)
      dfs(potentialEmpty, board, newReveals)
    } else if (board[potentialEmpty[0]] && board[potentialEmpty[0]][potentialEmpty[1]] && Number.isInteger(board[potentialEmpty[0]][potentialEmpty[1]])) {
      newReveals.push(potentialEmpty)
      visited.add(potentialEmpty)
    } else visited.add(potentialEmpty)
  })
}

const revealAdjacentEmptyTiles = (clickedTile, board) => {
  const newReveals = []
  dfs(clickedTile, board, newReveals)
  return newReveals
}

export const makePlay = (clickedTile, symbol, board) => {
  // clickedTile is of format [i, j]
  // symbol is simply the tile value
  // case where symbol === M is handled in gameOverReducer
  if (symbol === 'E') {
    return {
      type: 'MAKE_PLAY',
      data: {
        revealedTiles: revealAdjacentEmptyTiles(clickedTile, board),
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

export const setFlag = (flaggedTile, isMine) => {
  // flaggedTile is of format [i, j]
  // isMine indicates whether flagged tile has mine underneath
  return {
    type: 'SET_FLAG',
    mineFlagged: isMine,
    coord: flaggedTile,
  }
}