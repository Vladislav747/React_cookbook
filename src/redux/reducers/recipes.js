const initialState = {
    isReady: false,
    items: null,
};

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
        //TODO доделаnь
        case "ADD_LIKE":
            return {
                ...state,
                items: state.items.map((reduxItem) => {
                    if (reduxItem.id === action.payload) {
                        reduxItem.likes = reduxItem.likes + 1;
                    }
                }),
            };
        default:
            return state;
    }
};
