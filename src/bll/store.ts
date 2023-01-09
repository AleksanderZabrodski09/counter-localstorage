import { applyMiddleware, combineReducers, Dispatch, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk from 'redux-thunk';
import {useDispatch} from 'react-redux';



const rootReducer = combineReducers({
  counter : counterReducer
})

let persistedState ;
let valueAsString = localStorage.getItem('app-state')
if(valueAsString){
  persistedState =JSON.parse(valueAsString)
}



export const store = legacy_createStore(rootReducer,persistedState, applyMiddleware(thunk))




store.subscribe(()=>{
  localStorage.setItem('app-state', JSON.stringify(store.getState()))
  // localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
})

export type AppRootReducerType = ReturnType<typeof rootReducer>
type StoreType = typeof store


 // export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = ()=>useDispatch<Dispatch<any>>()