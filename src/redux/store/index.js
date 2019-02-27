import {createStore} from 'redux';
import {changeIsMenuOpen, changeIsFormOpen, addDataIngredient} from '../actions'
import reducer from '../reducers/index';



 const store = createStore(reducer);

console.log(store.getState());
store.subscribe(() => console.log('Look ma, Redux!!'))
// store.dispatch(changeIsMenuOpen);
// store.dispatch(changeIsFormOpen);
// store.dispatch(addDataIngredient);

export default store;