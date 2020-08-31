import { combineReducers } from 'redux';

import recipes from './recipes';
import cart from './cart';
import filter from './filter';

export default combineReducers({
  recipes,
  cart,
  filter,
});
