import * as types from './action-types';
import { configs } from '../dbConfig/config';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export function changeForm(payload) {

    return { type: types.CHANGE_FORM, payload:!payload }
}


export function changeMessage(payload) {

    return { type: types.CHANGE_ERROR_MESSAGE, payload:!payload }
}

export const addDataIngredient = (data) => dispatch => {
       
    const id = uuid();
    return axios.post(configs.URI,
    {"idRecipe": id,
    "titleRecipe": data.titleRecipe,
    "ingredients": data.ingredients})
      .then(() =>{ 
          
        dispatch(dataSuccess("addDataSuccess"));
        dispatch(fetchDataIngredient());
      })
         .catch(err=> 
        dispatch(dataError(err, "addDataError")))
}


const dataSuccess = (type) => {
    return{
        type:types.DATA_SUCCESS,
        payload:{typeSuccess:type, isSuccess:true}
    }
}

const dataError = (err,type) => {
    return{
        type:types.DATA_ERROR,
        payload:{errMessage:err.message, type:type}
    }
}

export const deleteDataIngredient = (id) => dispatch => {

    return axios.delete(configs.URI_FOR_DELETE+id+'?apiKey='+configs.MYAPIKEY)
          .then(() =>{ 
          
            dispatch(dataSuccess("deleteDataSuccess"))
            dispatch(fetchDataIngredient());
          })
             .catch(err=> 
            dispatch(dataError(err, "deleteDataError"))
            )
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


export const fetchDataIngredient = () => dispatch => {
       
        dispatch(fetchData());

        return axios.get(configs.URI)
          .then((response) =>{ 
              
            dispatch(getDataIngredient(response.data));
          })
          .catch(err=> dispatch(
                dataError(err, "fetchDataError")))
    }
