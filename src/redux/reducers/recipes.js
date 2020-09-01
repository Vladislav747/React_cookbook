const initialState = {
    isReady: false,
    items: null,
};

//Добавлять лайки на рецептах
function addLikes(id, state) {
    for (var i = 0; i < state.items.length; i++) {
        if (id === state.items[i].id) {
            state.items[i].likes = state.items[i].likes + 1;
        }
    }
    return state.items;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case "SET_IS_READY":
            return {
                ...state,
                isReady: action.payload,
            };
        case "DELETE_RECIPE":
            return {
                ...state,
                items: state.items.filter((o) => o.id !== action.payload),
            };
        case "ADD_LIKE":
            return {
                ...state,
                items: addLikes(action.payload, state),
            };
        default:
            return state;
    }
};
