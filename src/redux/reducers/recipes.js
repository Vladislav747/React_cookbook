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
        case "ADD_LIKE":
            console.log("HHHiii");
            return {
                ...state,
                items: state.items.map((o) => {
                    if (o.id === action.payload) {
                        o.likes = 1231;
                    }
                }),
            };
        default:
            return state;
    }
};
