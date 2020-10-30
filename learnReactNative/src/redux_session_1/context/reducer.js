function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1;
            return { ...state }
        case "DECREASE_COUNTER":
            state.counter = state.counter - 1;
            return { ...state}

            // return { ...state, counter: state.counter -1 }
            // Sağ taraf override yapıyor
        default:
            return state;
    }
}

export { reducer }