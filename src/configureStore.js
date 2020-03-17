import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import { createLogger } from 'redux-logger'

const middleWare = [thunkMiddleware]

if(process.env.NODE_ENV !== `produdction`){
  middleWare.push(createLogger());
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleWare)
  )
}