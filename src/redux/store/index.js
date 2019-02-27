import {createStore} from 'redux';
import reducer from '../reducers/index';
import {initialState} from '../reducers/index';

 const store = createStore(reducer, initialState);

// console.log(store.getState());
// store.subscribe(() => console.log('Look ma, Redux!!'))
// store.dispatch(changeIsMenuOpen);
// store.dispatch(changeIsFormOpen);
// store.dispatch(addDataIngredient);

export default store;