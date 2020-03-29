const boardSizeReducer = (state = { rows: 30, columns: 30 }, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return action.data
    default:
      return state
  }
}

export default boardSizeReducer