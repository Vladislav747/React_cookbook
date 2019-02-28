
import * as types from '../action-types';
import { combineReducers } from 'redux';

//Изначальный state
export const initialState = {

    isFormOpen: false,
    isLoading: false,
    dataIngredient: [],
    isError: false,
    errors:[],
    isSubmitting:false,
    isSuccess:false
};

//Если есть state то используем его иначе - изначальный state
function reducer(state = initialState, action) {

    console.log(state);
    console.log(action.type);

    switch (action.type) {

        case types.ADD_DATA_ERROR:
            return{...state, errors:action.payload}

        case types.ADD_DATA_SUCCESS:
            return{...state, isSuccess:action.payload}

        case types.CHANGE_FORM_OPEN:
            return { ...state, isFormOpen: action.payload };

        case types.FETCH_DATA:
            return { ...state, isLoading: true }

        case types.FETCH_ERROR:
            return { ...state, isError: true }

        case types.GET_DATA_INGREDIENT:

            return Object.assign({}, state, {
                isLoading: false,
                dataIngredient: action.payload
            });

        default:
            return state;
    }

}

export default reducer;




