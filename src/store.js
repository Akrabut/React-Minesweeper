import { createStore, combineReducers } from 'redux'
import gameStateReducer from './reducers/gameState'
import gameOverReducer from './reducers/gameOver'

const reducer = combineReducers({
  gameState: gameStateReducer,
  gameOver: gameOverReducer,
})

const store = createStore(reducer)
export default store