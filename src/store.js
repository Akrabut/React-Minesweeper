import { createStore, combineReducers } from 'redux'
import boardSizeReducer from './reducers/BoardSize'

const reducer = combineReducers({
  size: boardSizeReducer,
})

const store = createStore(reducer)
export default store