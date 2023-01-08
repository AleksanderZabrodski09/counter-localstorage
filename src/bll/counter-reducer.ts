export type InitialStateType = typeof initialState
const initialState = {
  value: 0,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'INS-COUNTER':
      return {...state, value: state.value +1}
    case 'SET-VALUE-FROM-LS':
      return {...state, value: action.value}
    default:
      return state
  }
}

export const insCounterAC = ()=>({type:'INS-COUNTER'}as const)
export const setValueFromLocalStorageAC = (value:number)=>({type:'SET-VALUE-FROM-LS', value}as const)

type ActionType =
  | ReturnType<typeof insCounterAC>
  | ReturnType<typeof setValueFromLocalStorageAC>
