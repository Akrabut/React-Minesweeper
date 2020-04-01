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
    // if cell is empty, recursively reveal all adjacent empty cells
    if (isValidCoord(potentialEmpty, board) && board[potentialEmpty[0]][potentialEmpty[1]] === 'E') {
      dfs(potentialEmpty, board, newReveals, visited)
      // if cell is a number, reveal just that number
    } else if (isValidCoord(potentialEmpty, board) && Number.isInteger(board[potentialEmpty[0]][potentialEmpty[1]])) {
      newReveals.push(potentialEmpty)
      visited.add(JSON.stringify(potentialEmpty))
    }
  })
}

export const revealAdjacentEmptyTiles = (clickedTile, board) => {
  const newReveals = []
  const visited = new Set()
  dfs(clickedTile, board, newReveals, visited)
  return newReveals
}