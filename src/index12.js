import store from "./redux/store";

import { addDataIngredient } from "./resux/actions";
window.store = store;
window.addDataIngredient = addDataIngredient;



store.dispatch( addDataIngredient({title: 'Mushroom Soup', ingredients:'mushrooms'}) )