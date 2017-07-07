const initialState = {}

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return {...state}
  }
  else if(action.type === 'ADD_TREE'){
    return {...action.payload }
  }
  return state
}
