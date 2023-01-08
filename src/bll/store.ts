import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk from 'redux-thunk';


export type AppRootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
  counter : counterReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
type StoreType = typeof store