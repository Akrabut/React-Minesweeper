import { createStore, combineReducers } from 'redux'
import gameStateReducer from './reducers/gameState'
import supermanReducer from './reducers/superman'

const reducer = combineReducers({
  gameState: gameStateReducer,
  superman: supermanReducer,
})

const store = createStore(reducer)
export default store