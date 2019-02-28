import * as types from './action-types';
import { configs } from '../dbConfig/config';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export function changeIsFormOpen(payload) {

    return { type: types.CHANGE_FORM_OPEN, payload:!payload }
}

export const addDataIngredient = (data) => dispatch => {
       
   
    const id = uuid();
    return axios.post(configs.URI,
    {"idRecipe": id,
    "titleRecipe": data.titleRecipe,
    "ingredients": data.ingredients})
      .then(() =>{ 
        dispatch(addDataSuccess())
      })
        .catch(err=> dispatch(addDataError(err)))
}


const addDataSuccess = () => {
    return{
        type:types.ADD_DATA_SUCCESS,
        payload:true
    }
}

const addDataError = (err) => {
    return{
        type:types.ADD_DATA_ERROR,
        err
    }
}


const getDataIngredient = (json) => {
    return {
        type: types.GET_DATA_INGREDIENT,
        payload: json
    }
}

const fetchData = () => {
    return{
        type:types.FETCH_DATA
    }
}

const getDataError = () => {
    return{
        type:types.FETCH_ERROR
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
