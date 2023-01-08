import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';


export type AppRootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
  counter : counterReducer
})

export const store = legacy_createStore(rootReducer)
type StoreType = typeof store