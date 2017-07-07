export const loadData = () => {
  return {
    type: 'LOAD_DATA'
  };
}

export const addTree = (obj) => {
  return {
    type: 'ADD_TREE',
    payload:obj
  };
}

export const emulateTree = () => {
  return {
    type: 'EMULATE_TREE'
  };
}
