const initialState = {
  name:'',
  treeName:''
}

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return [...state]
  }
}
