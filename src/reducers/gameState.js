function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const placeMines = (board, numOfMines) => {
  while (numOfMines > 0) {
    const randX = getRandomInt(board.length - 1)
    const randY = getRandomInt(board[0].length - 1)
    if (!board[randX][randY]) {
      // M stands for Mine
      board[randX][randY] = 'M'
      numOfMines--
    }
  }
  console.log(board);
}

const countSurroundingMines = (board, i, j) => {
  let surrMines = 0
  const potentialCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1], [i + 1, j + 1]]
  potentialCoords.forEach(potentialMine => {
    if (board[potentialMine[0]] && board[potentialMine[0]][potentialMine[1]] && board[potentialMine[0]][potentialMine[1]] === 'M') surrMines++
  })
  return (
    surrMines > 0
      ? surrMines // a number symbolizes the amount of surrounding mines
      : 'E' // E stands for empty
  )
}

const fillBoard = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'M') continue
      board[i][j] = countSurroundingMines(board, i, j)
    }
  }
}

const generateBoard = (rows, columns, numOfMines) => {
  const board = new Array(rows);
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(columns)
  }
  placeMines(board, numOfMines)
  fillBoard(board)
  return board
}

const defaultState = {
  rows: 30,
  columns: 30,
  numOfMines: Math.floor((30 * 30) / 4),
  remainingFlags: Math.floor((30 * 30) / 4),
  board: generateBoard(30, 30),
}

const gameStateReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    // when user plays
    case 'SET_BOARD':
      return {
        ...state,
        board: action.data.board,
      }
    // when user places flag
    case 'SET_FLAGS':
      return {
        ...state,
        remainingFlags: action.data.remainingFlags,
      }
    default:
      return state
  }
}

export default gameStateReducer