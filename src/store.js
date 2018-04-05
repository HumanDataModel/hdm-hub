import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import seedsReducer from './reducers/seedsReducer'
import notificationReducer from './reducers/notificationReducer'
//import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  seeds: seedsReducer,
  notification: notificationReducer
  //filter: filterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store