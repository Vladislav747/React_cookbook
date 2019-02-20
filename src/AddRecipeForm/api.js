//Подтягивание даты с github - используя библиотеку axios
import axios from 'axios';
import { configs } from '../config/config.js';
import $ from 'jquery';
import { v4 as uuid } from 'uuid';
const API_HOST = configs.API_HOST;
const myAPIKey = 'DU4bGV0HZIvepgmthJHS4aZCOGSiK3zp';



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

//  export async function getRecipes() {

const uri = 'https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey=' + myAPIKey;


//         const resp = await fetch(uri)

//         return resp;

// export function getRecipes() {

//   const uri = 'https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey='+myAPIKey;


//   return  fetch(uri).then(r=>r.json())

export const getRecipes = function () {

  const uri = 'https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey=' + myAPIKey;


  return fetch(uri).then((r)=> {return r.json()})
}




// return new Promise(function (resolve, reject) {

//    }) 
//  var query = $.ajax({
//     url: 'https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey=' + myAPIKey,
//     type: "GET",
//     contentType: "application/json"
//   }).done(r => resolve(r)

//   var query = axios.get('https://api.mlab.com/api/1/databases/recipe_react_menu_with_wp/collections/recipes?apiKey=' + myAPIKey).then(r => r.data);

// async function apiGetAll () {
//   try {
//     const resp = await fetch(URL)
//     console.log(resp)
//     return resp
//   } catch (err) {
//        console.log(err)
//     }
// }




export function validateEmail(email) {
  return axios.post(`${API_HOST}/validate/email`, { email }).then(r => r.data);
}
