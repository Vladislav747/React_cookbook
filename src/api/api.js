//Подтягивание даты с github - используя библиотеку axios
import { configs } from '../dbConfig/config.js';
import $ from 'jquery';
import { v4 as uuid } from 'uuid';

/**
 * Добавить рецепт в базу
 * 
 * @param  {object} data
 */
export function addRecipe(data) {

  $.ajax({
    url: configs.URI,
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

/**
 * Вывести все рецепты
 * 
 */
export const getRecipes = function () {

  return fetch(configs.URI)
  .then((r) => { return r.json() })
  .catch();
}
