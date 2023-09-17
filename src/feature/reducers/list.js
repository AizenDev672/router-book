export const listInitialState = 
    JSON.parse(window.localStorage.getItem("list")) || [];

export const LIST_ACTION_TYPES = {
    ADD_TO_LIST: "ADD_TO_LIST",
    REMOVE_FROM_LIST: "REMOVE_FROM_LIST",
    CLEAR_LIST: "CLEAR_LIST"
}

export const updateLocalStorage = (state) => {
    window.localStorage.setItem("list", JSON.stringify(state));
}

const UPDATE_STATE_BY_ACTION = {
    [LIST_ACTION_TYPES.ADD_TO_LIST]:(state, action) => {
        const newState = [
            ...state,
            {
                ...action.payload
            }
        ];

        updateLocalStorage(newState);
        return newState;
    },

    [LIST_ACTION_TYPES.REMOVE_FROM_LIST]: (state, action) => {
        const { id } = action.payload;
        const newState = state.filter((item) => item.id !== id);
        updateLocalStorage(newState);
        return newState;
    },

    [LIST_ACTION_TYPES.CLEAR_LIST]: () => {
        updateLocalStorage([]);
        return [];
    }
}

export const listReducer = (state, action) => {
    const {type: actionType } = action;
    const updateState = UPDATE_STATE_BY_ACTION[actionType];
    return updateState ? updateState(state, action) : state;
};