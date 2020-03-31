const gameOverReducer = (state = false, action) => {
  switch (action.type) {
    case 'RESTART_GAME':
      return false
    case 'END_GAME':
      return false
    default:
      return state
  }
}

export default gameOverReducer