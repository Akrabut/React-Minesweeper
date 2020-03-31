export const initGame = (rows, columns) => {
  return {
    type: 'INIT_GAME',
    data: {
      rows: rows,
      columns: columns,
    }
  }
}

const isValidCoord = (potentialEmpty, board) => {
  return board[potentialEmpty[0]] && board[potentialEmpty[0]][potentialEmpty[1]]
}

const dfs = (clickedTile, board, newReveals, visited) => {
  if (visited.has(JSON.stringify(clickedTile))) return
  const i = clickedTile[0]
  const j = clickedTile[1]
  newReveals.push(clickedTile)
  visited.add(JSON.stringify(clickedTile))
  const potentialCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1], [i + 1, j + 1]]
  potentialCoords.forEach(potentialEmpty => {
    if (visited.has(JSON.stringify(potentialEmpty))) return
    if (isValidCoord(potentialEmpty, board) && board[potentialEmpty[0]][potentialEmpty[1]] === 'E'){
      dfs(potentialEmpty, board, newReveals, visited)
    } else if (isValidCoord(potentialEmpty, board) && Number.isInteger(board[potentialEmpty[0]][potentialEmpty[1]])) {
      newReveals.push(clickedTile)
      visited.add(JSON.stringify(clickedTile))
    }
  })
}

const revealAdjacentEmptyTiles = (clickedTile, board) => {
  const newReveals = []
  const visited = new Set()
  dfs(clickedTile, board, newReveals, visited)
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