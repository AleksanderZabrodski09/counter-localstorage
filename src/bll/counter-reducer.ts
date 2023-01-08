import {Dispatch} from 'redux';
import {AppRootReducerType} from './store';

export type InitialStateType = typeof initialState
const initialState = {
  value: 0,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'INS-COUNTER':
      return {...state, value: state.value + 1}
    case 'SET-VALUE-FROM-LS':
      return {...state, value: action.value}
    default:
      return state
  }
}

export const insCounterAC = () => ({type: 'INS-COUNTER'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LS', value} as const)


//thunk
// export const insCounterTC = () => (dispatch: Dispatch, getState: () => AppRootReducerType) => {
//   let currentValue = getState().counter.value
//   localStorage.setItem('countValue', JSON.stringify(currentValue + 1))
//   dispatch(insCounterAC())
// }
export const insCounterTC = (value:number) => (dispatch: Dispatch) => {
  localStorage.setItem('countValue', JSON.stringify(value))
  dispatch(insCounterAC())
}


type ActionType =
  | ReturnType<typeof insCounterAC>
  | ReturnType<typeof setValueFromLocalStorageAC>
