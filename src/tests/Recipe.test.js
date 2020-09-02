// Recipe.test.js
import React from "react";
import { create, update } from "react-test-renderer";

import recipes from "../../public/recipesArray.js";
import { addLike, deleteRecipe } from "../redux/actions/recipes.js";
import Recipe from "../components/Recipe/Recipe";

it("Component Recipe renders without crashing", () => {
    let tree = create(
        <Recipe
            ingredients={recipes[0].ingredients}
            title={recipes[0].title}
            author={recipes[0].author}
            image={recipes[0].image}
            addLike={addLike}
            deleteRecipe={deleteRecipe}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
