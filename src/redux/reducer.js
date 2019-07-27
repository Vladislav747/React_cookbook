import app from './reducers/app';

import { combineReducers } from 'redux';

import { routerReducer } from 'connected-react-router';



const rootReducer = (history) => combineReducers({
    app: app,
    router: connectRouter(history)
  });

  export default rootReducer;
