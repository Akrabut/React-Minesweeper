import { defaultState, generateBoard, calcNumOfMines } from '../helpers/gameStateReducer'

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
      const newGame = generateBoard(action.data.rows, action.data.columns, action.data.mines || mines)
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