export const setRecipes = (recipes) => ({
    type: "SET_RECIPES",
    payload: recipes,
});

export const deleteRecipe = (id) => {
    return {
        type: "DELETE_RECIPE",
        payload: id,
    };
};

export const addLike = (id) => {
    return {
        type: "ADD_LIKE",
        payload: id,
    };
};
