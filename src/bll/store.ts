import { applyMiddleware, combineReducers, Dispatch, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk from 'redux-thunk';
import {useDispatch} from 'react-redux';


export type AppRootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
  counter : counterReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
type StoreType = typeof store


 // export type AppDispatchType = typeof store.dispatch

export const useAppDispatch = ()=>useDispatch<Dispatch<any>>()