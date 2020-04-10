import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import { createLogger } from 'redux-logger'

let middleware = []
const logger = createLogger();

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunkMiddleware, logger];
} else {
  middleware = [...middleware, thunkMiddleware];
}

export default function configureStore(persistedState) {
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middleware)
  )
}