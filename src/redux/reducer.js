import app from './reducers/app';

import { combineReducers } from 'redux';



const rootReducer = (history) => combineReducers({
    app: app,
    router: connectRouter(history)
  });

  export default rootReducer;
