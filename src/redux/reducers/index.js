
import { CHANGE_FORM_OPEN, GET_DATA_INGREDIENT } from '../action-types';


//Изначальный state
export const initialState = {

    isFormOpen: false,
    dataIngredient: []
};

//Если есть state то используем его иначе - изначальный state
export default function reducer(action, state = initialState) {

    console.log(state);
    console.log(action.type);

    switch (action.type) {

        case CHANGE_FORM_OPEN:
            return { ...state, isFormOpen: action.payload };

        case GET_DATA_INGREDIENT:
        
            return Object.assign({}, state, {
                dataIngredient: state.dataIngredient.concat(action.payload)
            });

        default:
            return state;
    }




}

// selectors
export function getDataRecipes(state) {
    return state.dataIngredient;
}
