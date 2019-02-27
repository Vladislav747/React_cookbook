import {CHANGE_FORM_OPEN, ADD_DATA_INGREDIENT, GET_DATA_INGREDIENT} from './action-types';
import {getRecipes} from '../services/mLab';


export function changeIsFormOpen(payload) {

    return {type: CHANGE_FORM_OPEN, payload}
}
export function addDataIngredient(payload) {

    return {type: ADD_DATA_INGREDIENT, payload}
}

export async function getDataIngredient() {

    const dataIngredient = await getRecipes();
    return({type: GET_DATA_INGREDIENT, payload:dataIngredient});
}


