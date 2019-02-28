
import { CHANGE_FORM_OPEN, GET_DATA_INGREDIENT, FETCH_DATA, FETCH_ERROR } from '../action-types';
import { combineReducers } from 'redux';


//Изначальный state
export const initialState = {

    isFormOpen: false,
    isLoading: false,
    dataIngredient: [],
    isError:false
};

//Если есть state то используем его иначе - изначальный state
function reducer (state = initialState, action) {

    console.log(state);
    console.log(action.type);

    switch (action.type) {

        case CHANGE_FORM_OPEN:
            return { ...state, isFormOpen: action.payload };

        case FETCH_DATA:
            return {...state, isLoading: true}

        case FETCH_ERROR:
        return {...state, isError:true}

        case GET_DATA_INGREDIENT:
        
            return Object.assign({}, state, {
                isLoading:false,
                dataIngredient: action.payload
            });

        default:
            return state;
    }
   
}

export default reducer;




