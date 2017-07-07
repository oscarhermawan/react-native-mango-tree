const initialState = {}

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return {...state}
  }
  else if(action.type === 'ADD_TREE'){
    return {...action.payload }
  }
  else if(action.type === 'EMULATE_TREE'){
    const tmp = state
    tmp.umur_awal++
    if(tmp.umur_awal == tmp.umur_akhir){
      tmp.is_alive = false
    }
    return {...tmp}
  }
  return state
}
