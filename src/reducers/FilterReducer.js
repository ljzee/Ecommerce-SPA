function toggleFilter(array, filter) {
  let index = array.indexOf(filter);
  let newArr = [...array];
  if(index === -1){
    newArr.push(filter);
  }else{
    newArr.splice(index, 1);
  }
  return newArr;
}

const filterReducer = (state=[], action) => {
  switch(action.type){
    case 'TOGGLE_FILTER':
      return toggleFilter(state, action.payload)
    default:
      return state
  }
}

export default filterReducer;
