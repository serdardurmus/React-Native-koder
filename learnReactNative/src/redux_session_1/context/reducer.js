const { act } = require("react-test-renderer");

function reducer (state, action) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter +1;
            return { ...state };
        case "DECREASE_COUNTER":
            state.counter = state.counter-1;
            return { ...state };
        // return { ...state, counter: state.counter - 1 }
        case "RESET_COUNTER":
            state.counter = 0;
            return { ...state };
        case "SET_USERNAME":
            state.userName = action.payLoad.newUserName
        default:
            return state;
    }
}

export { reducer };