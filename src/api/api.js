//Подтягивание даты с github - используя библиотеку axios
import axios from 'axios';
import { configs } from '../dbConfig/config.js';
import $ from 'jquery';
import { v4 as uuid } from 'uuid';
const API_HOST = configs.API_HOST;
const myAPIKey = 'DU4bGV0HZIvepgmthJHS4aZCOGSiK3zp';
const uri = 'https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey=' + myAPIKey;


export function addRecipe(data) {

  //Кладем рецепт в книгу
  $.ajax({
    url: 'https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey=' + myAPIKey,
    data: JSON.stringify({
      "idRecipe": uuid(),
      "titleRecipe": data.titleRecipe,
      "ingredients": data.ingredients
    }),
    type: "POST",
    contentType: "application/json"
  });

  return new Promise(function (resolve, reject) {
    resolve("success");
  })
}

export const getRecipes = function () {

  return fetch(uri).then((r)=> {return r.json()})
}


export function validateEmail(email) {
  return axios.post(`${API_HOST}/validate/email`, { email }).then(r => r.data);
}
