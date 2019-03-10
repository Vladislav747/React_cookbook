
import * as types from '../action-types';

//Изначальный state
export const initialState = {

    isFormOpen: false,
    isLoading: false,
    dataIngredient: [],
    isMessageOpen: false,
    errors:{},
    isSubmitting:false,
    isSuccess:false,
    typeSuccess:''

};

//Если есть state то используем его иначе - изначальный state
function reducer(state = initialState, action) {

    console.log(state);
    console.log(action.type);

    switch (action.type) {

        case types.DATA_ERROR:
            return{...state, isSuccess:false, errors:action.payload, isMessageOpen:true}

        case types.DATA_SUCCESS:
            return{...state, isSuccess:action.payload.isSuccess, typeSuccess:action.payload.typeSuccess, isMessageOpen:true}

        case types.CHANGE_FORM:
            return { ...state, isFormOpen: action.payload };
        
        case types.CHANGE_ERROR_MESSAGE:
            return { ...state, isMessageOpen: action.payload };

        case types.FETCH_DATA:
            return { ...state, isLoading: true }

        case types.FETCH_ERROR:

        //иммутабельность данных -  неизменяемость данных
        //Создаю новый объект
            return { ...state, errors: action.payload }

        case types.GET_DATA_INGREDIENT:

            //иммутабельность данных
            return Object.assign({}, state, {
                isLoading: false,
                dataIngredient: action.payload
            });

        default:
            return state;
    }

}

export default reducer;




