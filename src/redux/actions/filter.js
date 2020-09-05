export const setFilterAction = (filter) => ({
    type: "SET_FILTER",
    payload: filter,
});

export const setSearchQueryAction = (value) => ({
    type: "SET_QUERY",
    payload: value,
});
