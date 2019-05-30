export function addCart(payload){
  return {type: 'ADD_PRODUCT', payload}
};

export function toggleFilter(payload){
  return {type: 'TOGGLE_FILTER', payload}
};
