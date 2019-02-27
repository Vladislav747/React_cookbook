import {CHANGE_FORM_OPEN, CHANGE_MENU_OPEN, ADD_DATA_INGREDIENT} from './action-types';

export function changeIsMenuOpen(payload) {
    return {type: CHANGE_MENU_OPEN, payload}
}

export function changeIsFormOpen(payload) {
    return {type: CHANGE_FORM_OPEN, payload}
}
export function addDataIngredient(payload) {
    return {type: ADD_DATA_INGREDIENT, payload}
}