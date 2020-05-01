import { combineReducers } from 'redux';
import productReducer from './product.reducer';

// { products: [] }
export default combineReducers({
  products: productReducer
})