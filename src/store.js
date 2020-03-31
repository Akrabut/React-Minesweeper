import { createStore, combineReducers } from 'redux'
import gameStateReducer from './reducers/gameState'

const reducer = combineReducers({
  gameState: gameStateReducer,
})

const store = createStore(reducer)
export default store