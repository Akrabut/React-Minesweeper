import { createStore, combineReducers } from 'redux'
import boardSizeReducer from './reducers/BoardSize'
import gameStateReducer from './reducers/gameState'

const reducer = combineReducers({
  // size: boardSizeReducer,
  gameState: gameStateReducer,
})

const store = createStore(reducer)
export default store