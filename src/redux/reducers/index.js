
import {CHANGE_FORM_OPEN, CHANGE_MENU_OPEN, ADD_DATA_INGREDIENT} from '../action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isMenuOpen: false,
    isFormOpen: false,
    dataIngredient: []
});

//Изначальный state
// const initialState = {
//     isMenuOpen: false,
//     isFormOpen: false,
//     dataIngredient: []
// };

//Если есть state то используем его иначе - изначальный state
export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_MENU_OPEN:
        return {...state, isMenuOpen: action.payload};

        case CHANGE_FORM_OPEN:
        return {...state, isFormOpen: action.payload};
        
        case ADD_DATA_INGREDIENT:
        return Object.assign({}, state, {
        dataIngredient:state.dataIngredient.concat(action.payload)});
        
        default:
        break;
    }

console.log(state);
console.log(action);

return state;
}
