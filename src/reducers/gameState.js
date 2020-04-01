function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const placeMines = (board, numOfMines) => {
  const mines = new Set()
  while (numOfMines !== 0) {
    // generating random locations for mines could be O(infinity) but is good enough for this
    const randX = randomInt(board.length - 1)
    const randY = randomInt(board[0].length - 1)
    if (!board[randX][randY]) {
      // M stands for Mine
      board[randX][randY] = 'M'
      mines.add(JSON.stringify([randX, randY]))
      numOfMines--
    }
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

const generateBoard = (rows, columns, numOfMines) => {
  const board = new Array(rows);
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(columns)
  }
  const mines = placeMines(board, numOfMines)
  fillBoard(board)
  return [board, mines]
}

const calcNumOfMines = (rows, cols) => Math.floor((rows * cols) / 6)

const DEFAULT = 5

const defaultMines = calcNumOfMines(DEFAULT, DEFAULT)

// this state seems a bit too big, but board must be aware of the number of mines for it to be initialized
// in turn, remaining flags is dependent on reamaining mines, and remaining mines is dependent on number of mines
// while it could make sense to separate some of these attributes into a different reducer, i feel like it would heavily over complicate things
// defaultGame[0] is the game board and defaultGame[1] is the set of mine coordinates
const defaultGame = generateBoard(DEFAULT, DEFAULT, defaultMines)

const defaultState = {
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

const gameStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    // when user plays
    case 'MAKE_PLAY':
      const newReveals = new Set(state.revealedTiles)
      // needs to be json.stringified because [1] !== [1]
      // javascript pls
      action.data.revealedTiles.forEach(tile => newReveals.add(JSON.stringify(tile)))
      return {
        ...state,
        revealedTiles: newReveals,
      }
    // when user sets board to a different size
    case 'INIT_GAME':
      const mines = calcNumOfMines(action.data.rows, action.data.columns)
      const newGame = generateBoard(action.data.rows, action.data.columns, mines)
      return {
        ...defaultState,
        rows: action.data.rows,
        columns: action.data.columns,
        numOfMines: mines,
        remainingFlags: mines,
        remainingMines: mines,
        board: newGame[0],
        mines: newGame[1]
      } 
    // when user places flag
    case 'SET_FLAG':
      let remainingMines = state.remainingMines
      const newFlag = new Set(state.setFlags)
      newFlag.add(JSON.stringify(action.data.coord))
      // if user placed flag on a mine
      if (action.data.mineFlagged) remainingMines--
      return {
        ...state,
        remainingFlags: state.remainingFlags - 1,
        remainingMines: remainingMines,
        setFlags: newFlag,
      }
    case 'REMOVE_FLAG':
      const removedFlag = new Set(state.setFlags)
      removedFlag.delete(JSON.stringify(action.data.coord))
      // no idea with neither remainingMines can be used nor can it be declared here
      let remMines = state.remainingMines
      if (action.data.mineUnflagged) remMines++
      return {
        ...state,
        remainingFlags: state.remainingFlags + 1,
        remainingMines: remMines,
        setFlags: removedFlag,
      }
    default:
      return state
  }
}

export default gameStateReducer