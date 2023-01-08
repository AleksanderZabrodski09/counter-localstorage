



type InitialStateType= typeof initialState
const initialState={
  value:0,
}

export const counterReducer =(state:InitialStateType = initialState, action: any)=>{
  switch(action.type){
    default:
      return state
}

}