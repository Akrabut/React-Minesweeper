import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { someReducer } from './reducers/someReducer'

// const reducer = combineReducers({
//   some: someReducer,
//   someOther: someOtherReducer,
// })

// export const store = createStore(reducer, applyMiddleware(thunk))