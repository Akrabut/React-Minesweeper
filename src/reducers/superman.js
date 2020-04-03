const supermanReducer = (state = false, action) => {
  switch (action.type) {
    case 'SUPERMAN_ON':
      return true
    case 'SUPERMAN_OFF':
      return false
    default:
      return state
  }
}

export default supermanReducer