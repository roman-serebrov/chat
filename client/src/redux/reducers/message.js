import {SET_CURRENT__DIALOG} from "../actions/type";

const initialState = {
    items: [],
    currentDialog: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT__DIALOG: 
            return {
                ...state,
                items: action.payload
            };
        default: return state;
    };
};