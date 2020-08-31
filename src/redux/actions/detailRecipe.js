import * as types from "../constants/action-types";
import { configs } from "dbConfig/config";
import axios from "axios";

const dataSuccess = (type) => {
    return {
        type: types.DATA_SUCCESS,
        payload: { typeSuccess: type, isSuccess: true },
    };
};

const dataError = (err, type) => {
    return {
        type: types.DATA_ERROR,
        payload: { errMessage: err.message, type: type },
    };
};

export const deleteDataIngredient = (id) => (dispatch) => {
    return axios
        .delete(configs.URI_FOR_DELETE + id + "?apiKey=" + configs.MYAPIKEY)
        .then(() => {
            dispatch(dataSuccess("deleteDataSuccess"));
            dispatch(fetchDataIngredient());
        })
        .catch((err) => dispatch(dataError(err, "deleteDataError")));
};

const getDataIngredient = (json) => {
    return {
        type: types.GET_DATA_INGREDIENT,
        payload: json,
    };
};

const fetchData = () => {
    return {
        type: types.FETCH_DATA,
    };
};

export const fetchDataIngredient = () => (dispatch) => {
    dispatch(fetchData());

    return axios
        .get(configs.URI)
        .then((response) => {
            dispatch(getDataIngredient(response.data));
        })
        .catch((err) => dispatch(dataError(err, "fetchDataError")));
};

export const addLike = () => (dispatch) => {
    dispatch(addLike());

    return axios
        .get(configs.URI)
        .then((response) => {
            dispatch(getDataIngredient(response.data));
        })
        .catch((err) => dispatch(dataError(err, "fetchDataError")));
};
