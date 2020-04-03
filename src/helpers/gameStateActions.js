const isValidCoord = (potentialEmpty, board) => {
  return board[potentialEmpty[0]] && board[potentialEmpty[0]][potentialEmpty[1]]
}

// this DFS has to be implemented iteratively or else the browser will hate us for "too much recursion"
export const revealAdjacentEmptyTiles = (clickedTile, board, setFlags) => {
  const visited = new Set()
  const newReveals = []
  const stack = [clickedTile]
  while (stack.length > 0) {
    const current = stack.pop()
    if (visited.has(JSON.stringify(current))) continue
    visited.add(JSON.stringify(current))
    const i = current[0]
    const j = current[1]
    visited.add(JSON.stringify(current))
    // flagged tiles should be ignored even if they are not mines
    if (setFlags.has(JSON.stringify(current))) continue
    if (isValidCoord(current, board) && board[i][j] === 'E') {
      newReveals.push(current)
      const potentialCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1], [i + 1, j + 1]]
      potentialCoords.forEach(coord => stack.push(coord))
    } else if (isValidCoord(current, board) && Number.isInteger(board[i][j])) {
      newReveals.push(current)
    }
  }
  return newReveals
}