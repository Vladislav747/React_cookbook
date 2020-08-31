
import * as types from '../constants/action-types';

//Изначальный state
export const initialState = {

    isReady: false,
    isLoading: false,
    dataIngredient: [],
    isMessageOpen: false,
    errors:{},
    isSubmitting:false,
    isSuccess:false,
    typeSuccess:'',
    items: null,

};

//Если есть state то используем его иначе - изначальный state
export default function reducer(state = initialState, action) {

    console.log(state, "reducer");
    console.log(action.type);


    switch (action.type) {

        case "SET_BOOKS":
            return {
              ...state,
              items: action.payload,
              isReady: true
        };

        case "DATA_ERROR":
            return{...state, isSuccess:false, errors:action.payload, isMessageOpen:true}

        case "DATA_SUCCESS":
            return{...state, isSuccess:action.payload.isSuccess, typeSuccess:action.payload.typeSuccess, isMessageOpen:true}

        case "FETCH_DATA":
            return { ...state, 
                isLoading: true }

        case "FETCH_ERROR":

            return { ...state, errors: action.payload }

        case "GET_DATA_INGREDIENT":

            //иммутабельность данных
            console.log(action.payload);
            console.log(state);

            return {
                ...state,
                isLoading: false,
                dataIngredient: [...action.payload]
            };

        default:
            return state;
    }

}




