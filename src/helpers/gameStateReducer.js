function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const placeMines = (board, numOfMines) => {
  const mines = new Set()
  let i = 0
  while (numOfMines !== 0) {
    // generating random locations for mines could be O(infinity) but is good enough for this
    const randX = randomInt(board.length)
    const randY = randomInt(board[0].length)
    if (!board[randX][randY]) {
      // M stands for Mine
      board[randX][randY] = 'M'
      mines.add(JSON.stringify([randX, randY]))
      numOfMines--
    }
    // make sure players' browser never freezes
    if (i > board.length * board[0].length * 1000000) {
      alert('An extremely uncommon stastical issue occured') 
      throw Error
    }
    i++
  }
  return mines // is used for superman mode
}

const countSurroundingMines = (board, i, j) => {
  let surrMines = 0
  const potentialCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1], [i + 1, j + 1]]
  potentialCoords.forEach(potentialMine => {
    if (board[potentialMine[0]] && board[potentialMine[0]][potentialMine[1]] && board[potentialMine[0]][potentialMine[1]] === 'M') surrMines++
  })
  return (
    surrMines > 0
      ? surrMines // a number indicates the amount of surrounding mines
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

const DEFAULT = 10

export const calcNumOfMines = (rows, cols) => Math.floor((rows * cols) / 8)

const defaultMines = calcNumOfMines(DEFAULT, DEFAULT)

export const generateBoard = (rows, columns, numOfMines) => {
  const board = new Array(rows || DEFAULT);
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(columns || DEFAULT)
  }
  const mines = placeMines(board, numOfMines || defaultMines)
  fillBoard(board)
  return [board, mines]
}

// this state might seem a bit too big, but board must be aware of the number of mines for it to be initialized
// in turn, remaining flags is dependent on remaining mines, and remaining mines is dependent on number of mines
// while it could make sense to separate some of these attributes into a different reducer, it feels like it would needlessly over complicate things

const defaultGame = generateBoard(DEFAULT, DEFAULT, defaultMines)

// defaultGame[0] is the game board and defaultGame[1] is the set of mine coordinates
export const defaultState = {
  rows: DEFAULT,
  columns: DEFAULT,
  numOfMines: defaultMines,
  remainingFlags: defaultMines,
  remainingMines: defaultMines,
  board: defaultGame[0],
  mines: defaultGame[1],
  setFlags: new Set(),
  revealedTiles: new Set(),
}

