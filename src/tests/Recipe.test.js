// Recipe.test.js
import React from "react";
import { create, update } from "react-test-renderer";

import recipes from "../../public/recipes.json";
import { addLike, deleteRecipe } from "../redux/actions/recipes.js";
import Recipe from "../components/Recipe/Recipe";

it("renders without crashing", () => {
    var recipesData = JSON.parse(recipes);
    let tree = create(
        <Recipe
            ingredients={recipesData}
            addLike={addLike}
            deleteRecipe={deleteRecipe}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
