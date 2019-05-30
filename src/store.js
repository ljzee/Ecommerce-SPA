import { createStore, combineReducers } from 'redux';

import cartReducer from './reducers/CartReducer';
import filterReducer from './reducers/FilterReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
