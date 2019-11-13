import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer, {initialState} from '../reducers/index';
import promise from 'redux-promise'

  const store = createStore(
      reducer,
      initialState,
      applyMiddleware(
          thunkMiddleware,
          promise,
      )
  );

  export default store;