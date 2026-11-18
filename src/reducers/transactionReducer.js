
const initialState = [];


// reducer logic to manipulate the transactions
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [...state, action.payload];

        case "DELETE_TRANSACTION":
            return state.filter((item) =>
                item.id !== action.payload
            )
        default:
            return state;
    }
}


export { initialState, reducer };