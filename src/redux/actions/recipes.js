export const setRecipesAction = (recipes) => ({
    type: "SET_RECIPES",
    payload: recipes,
});

export const deleteRecipeAction = (id) => {
    return {
        type: "DELETE_RECIPE",
        payload: id,
    };
};

export const addLikeAction = (id) => {
    return {
        type: "ADD_LIKE",
        payload: id,
    };
};
