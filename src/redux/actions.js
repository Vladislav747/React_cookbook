import { CHANGE_FORM_OPEN, GET_DATA_INGREDIENT, FETCH_DATA, FETCH_ERROR } from './action-types';
import { getRecipes } from '../services/mLab';
import { configs } from '../dbConfig/config';
import axios from 'axios';


export function changeIsFormOpen(payload) {

    return { type: CHANGE_FORM_OPEN, payload:!payload }
}

const getDataIngredient = (json) => {
    return {
        type: GET_DATA_INGREDIENT,
        payload: json
    }
}


const fetchData = () => {
    return{
        type:FETCH_DATA
    }
}

const getDataError = () => {
    return{
        type:FETCH_ERROR
    }
}

export const fetchDataIngredient = () => dispatch => {
       
        dispatch(fetchData());

        return axios.get(configs.URI)
          .then((response) =>{ 
           const responseData = response.data;
            dispatch(getDataIngredient(responseData))
          })
            .catch(err=> dispatch(getDataError(err)))
    }
